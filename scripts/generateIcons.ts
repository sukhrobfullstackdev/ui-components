// Load environment variables
dotenv.config({ path: '.env.local' });

import fs from 'fs';
import path from 'path';

import { transform as svgr } from '@svgr/core';
import axios from 'axios';
import chalk from 'chalk';
import dotenv from 'dotenv';
import * as Figma from 'figma-api';
import PQueue from 'p-queue';
import { rimraf } from 'rimraf';
import yargs from 'yargs';

interface Component {
  key: string;
  name: string;
  description?: string;
  componentSetId?: string | null;
  documentationLinks?: Figma.DocumentationLinks[];
  props?: Record<string, string>;
}

type SvgTypes = 'mono' | 'multi';

const noop = () => {};

/**
 * Get arguments from the command line to determine which steps of build to perform
 */
const argv = yargs(process.argv.slice(2))
  .option('js', {
    type: 'boolean',
    description: 'Should regenerate JS files',
  })
  .option('svg', {
    type: 'boolean',
    description: 'Should regenerate SVG files from Figma',
  })
  .option('force', {
    type: 'boolean',
    description: 'Should force a rebuild even if Figma file has not changed',
  })
  .option('clean', {
    type: 'boolean',
    description: 'Whether should clean existing generated artifacts before proceeding',
  }).argv;

/**
 * Command line options to give selective control
 * over the parts of the build that are performed.
 */
const CLI_DEFAULTS = {
  js: true,
  svg: true,
  clean: true,
  force: false,
};
const ASSETS_DIRECTORY = path.join(process.cwd(), './src/assets');
const COMPONENTS_DIRECTORY = path.join(process.cwd(), './src/components');
const META_DIRECTORY = path.join(process.cwd(), './src/.meta');
const META_FILENAME = 'svg-meta.json';
const META_FILEPATH = path.join(META_DIRECTORY, META_FILENAME);
const SVG_DIRECTORY = path.join(ASSETS_DIRECTORY, 'svg');

const COMPONENT_ICONS_DIRECTORY = path.join(COMPONENTS_DIRECTORY, 'icons');
const COMPONENT_LOGOS_DIRECTORY = path.join(COMPONENTS_DIRECTORY, 'logos');
const SVG_ICONS_DIRECTORY = path.join(SVG_DIRECTORY, 'icons');
const SVG_LOGOS_DIRECTORY = path.join(SVG_DIRECTORY, 'logos');

const CONCURRENCY = 4;

/**
 * Environment constants
 */
const {
  FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN,
  FIGMA_FILE_ID = process.env.FIGMA_FILE_ID,
  FIGMA_NODE = process.env.FIGMA_CANVAS,
} = process.env;

if (!FIGMA_API_TOKEN || !FIGMA_FILE_ID || !FIGMA_NODE) {
  console.error(chalk.red('Environment Variables not set.'));
  console.log(chalk.blue(`Run "pnpm vercel link", then "pnpm vercel env pull".`));
  console.log(chalk.blue(`Go to https://figma.com/settings > "Personal access tokens" to get your Figma API token.`));
  console.log(chalk.blue(`Set to "FIGMA_API_TOKEN" in your .env.local file.`));
  process.exit(1);
}

const api = new Figma.Api({
  personalAccessToken: FIGMA_API_TOKEN,
});

const iconOptions = {
  mono: {
    componentPath: COMPONENT_ICONS_DIRECTORY,
    svgPath: SVG_ICONS_DIRECTORY,
    svgrOpts: {
      svgProps: {
        color: '{color}',
      },
      replaceAttrValues: {
        '#6851FF': 'currentColor',
        white: 'currentColor',
      },
    },
  },
  multi: {
    componentPath: COMPONENT_LOGOS_DIRECTORY,
    svgPath: SVG_LOGOS_DIRECTORY,
    svgrOpts: {},
  },
};

/**
 * Removes our svg asset and src directories to ensure we
 * have a clean build.
 */
const cleanDirectory = (directories: string[] = []) => {
  const dirs = Array.isArray(directories) ? directories : [directories];
  dirs.forEach(dir => rimraf.sync(dir));
};

/**
 * Given a directory path, recursively creates directories
 * to ensure it exists.
 */
const ensureDirectory = (directories: string[] = []) => {
  const dirs = Array.isArray(directories) ? directories : [directories];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

/**
 * Foo Bar to foo-bar
 */

const kebabCase = (str: string) => {
  return `${str}`
    .replace(/[^\w\s]/g, ' ')
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

/**
 * foo bar to FooBar
 */

const pascalCase = (str: string) => {
  return `${str}`
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+(.)(\w*)/g, (_1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
    .replace(/\w/, s => s.toUpperCase());
};

/**
 * Writes provided metadata associated to the built
 * assets to disk for reference on subsequent builds.
 */
const writeComponentBuildMeta = (data: object) => {
  fs.writeFileSync(
    META_FILEPATH,
    JSON.stringify(
      {
        lastModified: new Date().getTime(),
        ...data,
      },
      null,
      2,
    ),
    'utf8',
  );
};

/**
 * Retrieves the metadata associated to the previous
 * build from the filesystem and returns as JSON
 */
const getComponentBuildMeta = () =>
  fs.existsSync(META_FILEPATH) ? JSON.parse(fs.readFileSync(META_FILEPATH, 'utf8')) : {};

/**
 * Given an array of functions, queues tasks with
 * a limited concurrency
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const queueTasks = (tasks: any[], options?: object) => {
  const queue = new PQueue({
    concurrency: CONCURRENCY,
    ...options,
  });
  for (const task of tasks) {
    queue.add(task);
  }
  queue.start();
  return queue.onIdle();
};

/**
 * Given a list of component IDs, returns a list of
 * IDs that were in the previous build, but have not
 * been provided in the list param
 */
const getRemovedIcons = (components: Record<string, Component>) => {
  const generateName = ({ name }: { name: string }) => pascalCase(name);
  const newComponentNames = Object.values(components).map(generateName as () => string);
  const oldComponentNames = Object.values(getComponentBuildMeta().components || {}).map(generateName as () => string);

  return oldComponentNames.filter(name => !newComponentNames.includes(name));
};

/**
 * Given a URL to an SVG file, retrieves the content
 * at the URL, and returns the <svg> string
 */
const getSvgFromUrl = async (url: string) =>
  axios
    .get(url, {
      headers: {
        'Content-Type': 'images/svg+xml',
      },
    })
    .then(response => response.data);

/**
 * Given a filename and a string, writes a file to the
 * SVG asset directory
 */
const writeSvgAsset = async (fullPath: string, fileName: string, data: string) =>
  fs.writeFileSync(path.join(fullPath, fileName), data, 'utf8');

/**
 * Given a Figma file ID, returns a list of all components,
 * along with helper functions and values for working with them.
 */
const getFigmaData = async (fileId = FIGMA_FILE_ID, nodeIds = [FIGMA_NODE]) => {
  console.log(chalk.green('-> Fetching icons metadata'));

  const { components, lastModified } = await api.getFile(fileId, { ids: nodeIds });
  const ids = Object.keys(components).join();

  console.log(chalk.green('-> Fetching icon sets metadata'));

  const { nodes } = await api.getFileNodes(
    fileId,
    Object.values(components).reduce((acc, curr) => {
      const { componentSetId } = curr;
      if (componentSetId && !acc.includes(componentSetId)) acc.push(componentSetId);
      return acc;
    }, new Array()),
  );
  const setIds = Object.values(nodes).reduce((acc, curr) => {
    const id = curr?.document?.id;
    if (id) acc[id] = curr.document.name;
    return acc;
  }, Object.create(null));
  const componentWithProps = id => {
    const component: Component = components[id];
    const propsArr = component.name?.split(', ') || [];
    component.name = propsArr.shift() || '';
    component.props = propsArr.reduce((a, v) => {
      const arr = v.split('=');
      return { ...a, [arr[0]]: arr[1] };
    }, {});

    if (component.props.fill === 'mono') {
      component.name += '-mono';
    }

    return component;
  };
  const componentsWithProps = {};
  Object.keys(components).forEach(key => {
    componentsWithProps[key] = componentWithProps(key);
  });

  return {
    components: componentsWithProps,
    figmaLastModified: lastModified,
    ids,
    setIds,
    removedIcons: getRemovedIcons(componentsWithProps),
    getComponentById: (id: string) => componentsWithProps[id],
    getComponentSetById: (setId: string) => setIds[setId],
    writeBuildMetadata: (data: object) => {
      writeComponentBuildMeta({
        figmaLastModified: lastModified,
        components: componentsWithProps,
        ...data,
      });
    },
  };
};

/**
 * Once we have our list of components in the file,
 * we can request a list of paths to SVG representations
 * of each of them from Figma.
 */
const getImageData = async (idChunks: string[]) => {
  console.log(chalk.green('-> Requesting SVG generation from Figma'));

  const allImages: Record<string, string | null> = {};

  for (const ids of idChunks) {
    const { images } = await api.getImage(FIGMA_FILE_ID || '', {
      ids,
      format: 'svg',
      scale: 1,
    });
    Object.assign(allImages, images);
  }

  return allImages;
};

/**
 * We store in build metadata the "last modified" property
 * from the Figma file we build from.
 *
 * If the last modified time in our build meta, is equal to
 * that returned from the API when we request it now, we
 * have no need to rebuild.
 */
const shouldRebuild = (figmaLastModified: string) => {
  const { figmaLastModified: previousFigmaLastModified } = getComponentBuildMeta();
  return !previousFigmaLastModified || figmaLastModified !== previousFigmaLastModified;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - No clean typings available for templates
const monoCodeTemplate = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
  return tpl`
    ${imports};
    import { token } from '@styled/tokens';

    ${interfaces};
    
    export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {
        /**
         * Configures icon color on monochrome svgs.
         */
        color?: string;
    };

    const ${componentName} = ({ color: customColor, title, titleId, ...props }: Props) => {
      // Utilize dynamic primary text color by default
      const color = customColor || token('colors.text.primary');

      return ${jsx}
    };
    
    ${exports};
    `;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - No clean typings available for templates
const multiCodeTemplate = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
  return tpl`
    ${imports};

    ${interfaces};

    export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {};
    
    const ${componentName} = ({ title, titleId, ...props }: Props) => ${jsx};
    
    ${exports};
    `;
};

/**
 * Iterates over a directory of SVG files, and generates a function
 * that when called, creates and writes a React component for each one
 */
const configureReactComponents = (svgType: SvgTypes) => {
  const { componentPath, svgPath } = iconOptions[svgType];
  const svgAssetNames = fs
    .readdirSync(svgPath)
    .map(fileName => path.parse(fileName))
    .filter(({ ext }) => ext === '.svg');

  return svgAssetNames.map(({ name, base }) => {
    const isMono = svgType !== 'multi' || name.includes('-mono');
    const defaultOpts = isMono ? iconOptions.mono.svgrOpts : iconOptions.multi.svgrOpts;
    const componentName = pascalCase(name);
    const componentFilePath = path.join(componentPath, `${name}.tsx`);
    const svgFilePath = path.join(svgPath, base);
    const svgCode = fs.readFileSync(svgFilePath, 'utf8');
    const svgrOptions = {
      ...defaultOpts,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      template: isMono ? monoCodeTemplate : multiCodeTemplate,
      titleProp: true,
      jsxRuntime: 'automatic',
      typescript: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
            fn: () => null,
          },
        ],
      },
    };

    return svgCode.length
      ? async () => {
          //@ts-expect-error doesn't recognize "jsxRuntime", which is valid
          const componentJsCode = await svgr(svgCode, svgrOptions, {
            componentName: componentName,
            filePath: componentFilePath,
          });

          fs.writeFileSync(componentFilePath, componentJsCode, 'utf8');
        }
      : noop;
  });
};

const createIndexJsFile = (fullPath: string) => {
  const paths = fs
    .readdirSync(fullPath)
    .map(path.parse)
    .filter(({ ext }) => ext === '.tsx');

  const indexJsContent = paths.reduce((collector, { name }) => {
    return collector + `export { default as ${pascalCase(name)} } from './${name}';\n`;
  }, '');

  fs.writeFileSync(path.join(fullPath, 'index.ts'), indexJsContent, 'utf8');

  return Promise.resolve();
};

export async function main(options: { js?: boolean; svg?: boolean; clean?: boolean; force?: boolean }) {
  const { clean, force, js, svg } = options;

  const { ids, figmaLastModified, getComponentById, getComponentSetById, removedIcons, writeBuildMetadata } =
    await getFigmaData(FIGMA_FILE_ID);

  if (!force && !shouldRebuild(figmaLastModified)) {
    console.log(
      chalk.yellow(`
    We do not need to rebuild. No changes in Figma file
    since: ${figmaLastModified}
    `),
    );
    return;
  }

  const startTime = new Date().getTime();
  const componentMetaData = {} as Record<string, Partial<Component>>;
  const maxChunkSize = 500; // Limit request size to prevent Figma errors

  /**
   * Start by cleaning out our generated code
   */
  if (clean) {
    console.log(chalk.magenta('...Cleaning directories'));

    cleanDirectory([
      iconOptions.mono.componentPath,
      iconOptions.multi.componentPath,
      iconOptions.mono.svgPath,
      iconOptions.multi.svgPath,
    ]);
  }

  /**
   * Now regenerate the directories that we need
   */
  console.log(chalk.magenta('...Creating output directories'));

  ensureDirectory([
    META_DIRECTORY,
    iconOptions.mono.componentPath,
    iconOptions.multi.componentPath,
    iconOptions.mono.svgPath,
    iconOptions.multi.svgPath,
  ]);

  if (svg) {
    const idsArr = ids.split(',');
    const idChunks: string[] = [];

    for (let i = 0; i < idsArr.length; i += maxChunkSize) {
      idChunks.push(idsArr.slice(i, i + maxChunkSize).join());
    }

    const images = await getImageData(idChunks);

    /**
     * We have an object containing key/value pairs structured as:
     *
     * {
     *    [componentId]: url_to_svg
     * }
     *
     * We now need to download the asset and write it to disk for
     * consumption as an asset, and to generate React components.
     */
    console.log(chalk.green('-> Downloading SVG assets from Figma'));

    await queueTasks(
      Object.entries(images).map(([id, url]) => async () => {
        if (!url) {
          return noop;
        }

        const { name: layerName, componentSetId, ...rest } = getComponentById(id);
        const name = kebabCase(layerName);
        const setName = getComponentSetById(componentSetId || '');
        const svg = await getSvgFromUrl(url);
        const isIcon = setName === 'UI';
        const fullPath = isIcon ? iconOptions.mono.svgPath : iconOptions.multi.svgPath;
        componentMetaData[name] = rest;

        console.log('+++', isIcon ? chalk.magentaBright('icon') : chalk.blue('logo'), ':', name);

        if (svg) {
          return writeSvgAsset(fullPath, `${name}.svg`, svg);
        }
      }),
    );
  }

  /**
   * Create our JS components
   */
  if (js) {
    console.log(chalk.cyanBright('...Generating React code'));

    await queueTasks(configureReactComponents('multi'));
    await queueTasks(configureReactComponents('mono'));
    createIndexJsFile(iconOptions.mono.componentPath);
    createIndexJsFile(iconOptions.multi.componentPath);
  }

  /**
   * We have a successful build. So let's write our
   * build meta, so we don't need to rebuild in future
   * until the Figma file changes. And we can determine
   * if a icon is removed between builds.
   */
  console.log('...Code generation complete. Writing build meta');

  writeBuildMetadata({
    buildDuration: new Date().getTime() - startTime,
  });

  /**
   * We need to warn if we have removed IDs, as this transfers
   * to removed icons from the library, which is a breaking change
   * so should be accompanied with a breaking change commit, if
   * following through with removing the icon.
   */
  if (removedIcons.length) {
    console.warn(
      chalk.yellow(`
        /////////////////////////////////////////
        /////////////////////////////////////////
        ${removedIcons.length} ICON(S) REMOVED
        THIS IS A BREAKING CHANGE, AND NEEDS TO
        BE ACCOMPANIED WITH A BREAKING CHANGE
        COMMIT, AND UPDATE TO MIGRATION.md
        /////////////////////////////////////////
        /////////////////////////////////////////
        \n${removedIcons.join('\n')}`),
    );
  }
}

main({
  ...CLI_DEFAULTS,
  ...argv,
});

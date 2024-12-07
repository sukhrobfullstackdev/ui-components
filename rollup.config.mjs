import builtins from 'builtin-modules';

// Rollup plugins
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import esbuild from 'rollup-plugin-esbuild';
import multiInput from 'rollup-plugin-multi-input';
import externals from 'rollup-plugin-node-externals';
import tscAlias from 'rollup-plugin-tsc-alias';
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';

function createOutput(format) {
  return {
    dir: `dist/${format}`,
    format,
    sourcemap: true,
    preserveModules: true,
    exports: 'named',
    assetFileNames: '[name][extname]',
  };
}

export default {
  input: ['src/index.ts', 'src/presets.ts'],

  output: [createOutput('cjs'), createOutput('es')],

  external: [...builtins, /@styled/],

  watch: {
    include: 'src/**',
  },

  plugins: [
    multiInput.default(),

    commonjs({ include: /\**node_modules\**/ }),

    externals(),

    resolve(),

    typescript({
      tsconfigOverride: {
        compilerOptions: {
          rootDir: 'src',
        },
        exclude: ['**/__tests__', '**/__stories__', '**styled-system'],
      },
      useTsconfigDeclarationDir: true,
    }),

    tscAlias(),

    esbuild({
      minify: true,
    }),

    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.ttf', '**/*.otf'],
      emitFiles: true,
    }),

    visualizer({ gzipSize: true, title: 'UI Components Build' }),
  ],
};

import * as IconsImport from '@components/icons';
import * as LogosImport from '@components/logos';
import Text from '@components/primitives/text';
import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from '@styled/jsx';
import { grid } from '@styled/patterns';
import { ElementType, type ReactNode } from 'react';

type Story = StoryObj<typeof meta>;

interface IconProps {
  Icon: ElementType;
  name: string;
}

type StoryConfig = {
  title?: string;
  subtitle?: string;
};

type StoryArgs = {
  items?: string[];
  color?: string;
  size?: number;
};

type IconographyProps = {
  config: StoryConfig;
  children: ReactNode;
} & StoryArgs;

type ModuleGroup = typeof IconsImport | typeof LogosImport;

// Story setup
const Iconography = ({ config, children }: IconographyProps) => {
  return (
    <>
      {config.title && <Text.H3>{config.title}</Text.H3>}
      {config.subtitle && <Text.H6>{config.subtitle}</Text.H6>}
      <div className={grid({ columns: 6, columnGap: '2rem', rowGap: '2rem', mt: 6 })}>{children}</div>
    </>
  );
};

const meta: Meta<typeof Iconography> = {
  title: 'Iconography',
  component: Iconography,
  tags: ['autodocs'],
};

const getIconModules = (iconFiles: string[], Icons: ModuleGroup) => {
  return iconFiles
    .map((icon: string) => {
      return {
        // @ts-expect-error allow import name index
        Icon: Icons[icon],
        name: icon,
      };
    })
    .filter((result: IconProps) => !!result);
};

const renderIcons = (Icons: ModuleGroup, config: StoryConfig, args: StoryArgs) => {
  const icons = getIconModules(args.items || [], Icons);
  return (
    <Iconography config={config}>
      {icons.map(({ Icon, name }: IconProps) => {
        if (!Icon) return;
        return (
          <VStack key={name} alignItems="center" justifyContent="center">
            {args.size ? (
              <Icon color={args.color} height={args.size} width={args.size} />
            ) : (
              <Icon color={args.color} fill="white" />
            )}
            <Text inline truncate styles={{ fontSize: 10, fontWeight: 500 }}>
              {name}
            </Text>
          </VStack>
        );
      })}
    </Iconography>
  );
};

// Templates
const IconsTemplate: StoryObj<ElementType> = {
  render: args => renderIcons(IconsImport, { title: 'Monotone Icons', subtitle: '@components/icons/' }, args),
};

const LogosTemplate: StoryObj<ElementType> = {
  render: args => renderIcons(LogosImport, { title: 'Brand Logos', subtitle: '@components/logos/' }, args),
};

// Stories
export const Icons: Story = {
  ...IconsTemplate,
  args: {
    items: [...Object.keys(IconsImport)],
  },
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
};

export const Logos: Story = {
  ...LogosTemplate,
  args: {
    items: [...Object.keys(LogosImport)],
  },
  argTypes: {
    size: {
      control: 'number',
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

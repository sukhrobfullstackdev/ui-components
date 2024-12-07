# 💅 Magic UI Components

> A theme-able library containing reusable ui components

## 📖 Getting Started

### Setup node version

Current dev node version is 20.10

Please install [node version manager nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and use it to switch the node version

```bash
cd /path/to/ui-components
nvm use
```

### Setup NPM Token

Follow [NPM documentation](https://docs.npmjs.com/creating-and-viewing-authentication-tokens) to generate a token with access to private packages.

Next, you'll need to assign your NPM token to an environment variable in your preferred shell.

```zsh
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
```

Refer to [NPM's CI documentation](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow) for further information and troubleshooting help.

### Setup Figma Token

Go to https://figma.com, click your name in the top left corner, and go to `settings`. Scroll down to `Personal access tokens` and generate one with the default settings. Copy and enter it in the `.env.local` file for `FIGMA_API_TOKEN`.

### Install Packages

Install NPM dependencies using [PNPM](https://pnpm.io/installation/):

```zsh
pnpm install
```

## 🔐 Development

### Development Scripts

| NPM Script               | Description                                                                       |
| ------------------------ | --------------------------------------------------------------------------------- |
| `pnpm lib:dev`           | Start building the component library in development mode.                         |
| `pnpm lib:build`         | Build the component library for production.                                       |
| `pnpm lib:publish`       | Cut a release for the current build                                               |
| `pnpm docs:dev`          | Start the [Storybook](https://storybook.js.org/) environment in development mode. |
| `pnpm docs:build`        | Build the Storybook environment for production.                                   |
| `pnpm test`              | Run local tests.                                                                  |
| `pnpm test:watch`        | Run local tests and watch for changes                                             |
| `pnpm test:ci`           | Run CI optimized tests.                                                           |
| `pnpm test:tree-shaking` | Test the component library for tree-shaking compatibility.                        |

## Opening a Pull Request

1. Open a pull request from your fork/branch to the upstream `master` branch of _this_ repository.
2. Add a label for the [semver](https://semver.org/) update corresponding to your changes: `patch`, `minor`, or `major`.
3. A maintainer will review your code changes and offer feedback or suggestions if necessary. Once your changes are approved, a maintainer will merge the pull request for you and publish a release.

## Cutting a release

We use [`auto`](https://github.com/intuit/auto) as our continuous delivery tool. Cutting a release is just a matter of merging to `master`. For pre-releases, you can create a `next` branch as the base for your experimental/W.I.P. feature. Please familiarize yourself with the [documentation for `auto`](https://intuit.github.io/auto/docs) if you are in a position to cut a release.

## 🔗 Installation

Integrating your app with Magic UI requires our client-side NPM package:

```zsh
# Using PNPM:
pnpm add @magiclabs/ui-components
```

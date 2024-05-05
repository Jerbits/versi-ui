# :fire: Versi UI

  
Monorepo of common components I use in various projects. A React-base component library built with Lerna, Storybook, and ViteJS.

  

## Tooling

  

###  :wrench: Lerna

Managing JavaScript projects with multiple packages. It optimizes the workflow around managing multipackage repositories with git and npm. 

  

### :zap: Vite

Build tool providing rapid hot module replacement.

  

### :books: Storybook

An open-source tool for developing and organizing UI components in isolation, which also serves as a platform for visual testing and creating interactive documentation.


### :dash: Tailwind

A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

## Getting Started


### Install dependencies

    yarn install

### Run Storybook for a specific package

    yarn start:<package name>

or start all

    yarn sb
### Build Storybook for a specific package

    yarn build:<package name>

or build all

    yarn build

### Generate Storybook static bundle for all packages

    yarn sb-build

### Run tests


    yarn test

### Run eslint
    yarn lint

### Run prettier


    yarn format

### Run typecheck


    yarn typecheck

## Scaffolding a Package

You can create a skeleton of a package by running the template generator. This will generate a scaffolding of an NPM publish-ready component with all necessary dependencies (storybook, eslint, prettier, etc.).

```bash
$ yarn:make package

$ hygen package new
? Package name? »  Button

added: packages/Package/.storybook/main.ts
added: packages/Package/.storybook/preview-head.html
added: packages/Package/.storybook/preview.ts
added: packages/Package/package.json
added: packages/Package/postcss.config.cjs
added: packages/Package/src/components/index.css
added: packages/Package/src/components/index.stories.tsx
added: packages/Package/src/components/index.ts
added: packages/Package/src/components/Package.tsx
added: packages/Package/src/index.tsx
added: packages/Package/src/vite-env.d.ts
added: packages/Package/tailwind.config.js
added: packages/Package/tsconfig.json
added: packages/Package/vite.config.ts
```
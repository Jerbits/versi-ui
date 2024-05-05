---
to: packages/<%= h.capitalize(name) %>/package.json
---
{
  "name": "@jerbits/<%= name.toLowerCase() %>",
  "private": false,
  "version": "0.0.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "classnames": "^2.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "description": "The <%= h.capitalize(name) %> component for Versi-UI",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Jerbits/versi-ui.git"
  },
  "keywords": [
    "<%= h.capitalize(name) %>",
    "Design System",
    "Component Library"
  ],
  "author": "Jerbits",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Jerbits/versi-ui/issues"
  },
  "homepage": "https://github.com/Jerbits/versi-ui/tree/master/packages/<%= h.capitalize(name) %>",
  "devDependencies": {}
}

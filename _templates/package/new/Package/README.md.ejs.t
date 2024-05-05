---
to: packages/<%= h.capitalize(name) %>/README.md
---
# Versi UI - <%= h.capitalize(name) %>

  
The <%= h.capitalize(name) %> component for Versi-UI

  

## Tooling

  

### Lerna

managing JavaScript projects with multiple packages. It optimizes the workflow around managing multipackage repositories with git and npm.

  

### Vite

build tool providing rapid hot module replacement.

  

### Storybook

an open-source tool for developing and organizing UI components in isolation, which also serves as a platform for visual testing and creating interactive documentation.



## Getting Started


### Install dependencies



    yarn install

### Run Storybook



    yarn start:<%= name.toLowerCase() %>

### Build Storybook

    yarn build:<%= name.toLowerCase() %>


### Run tests


    yarn test:<%= name.toLowerCase() %>

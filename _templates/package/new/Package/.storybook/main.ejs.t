---
to: packages/<%= h.capitalize(name) %>/.storybook/main.ts
---
import commonConfigs from "../../../.storybook/main";

const config = {
  ...commonConfigs,
  stories: ["../src/**/*..mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;
import type { StorybookConfig } from "@storybook-vue/nuxt";

const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../stories/*.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../app'),
      };
    }
    return config;
  },
};
export default config;

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)",
    "../src/**/*.stories.@(ts|tsx|js|jsx|mdx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/react",
};

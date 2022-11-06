module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(ts|tsx|js|jsx|mdx)",
    "../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)",
  ],
  // stories: [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  //   "*.stories.@(js|jsx|ts|tsx|md|mdx)",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx|md|mdx)",
  // ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
};

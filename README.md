### Process

#### _Run commands_

1.  Initialize Npm

        $ npm init

2.  installation command from the github-thread-link:
    https://github.com/storybookjs/storybook/issues/12886#issuecomment-715671477

        $ npm i -D react@^16.8.0 && && npm i -D @types/react@^16.x && npm i -D react-dom^16.x && npm i -D react-is@^16.8.0 && npm i -D typescript@>=2.8.0

3.  Initialize typescript

        $ npx tsc --init

4.  Add Storybook

        $ npx storybook init

5.  Add postcss addon for storybook

        $ npm i -D @storybook/addon-postcss

6.  Install rollup & deps for bundling

        $ npm i -D rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser rollup-plugin-dts

7.

<br />

### **Ideas/Improvements**

1. consume/create css similar to tailwindcss/chakra-ui with color-object/spacing/typography/etc...

2. add absolute/subpath imports

3. Try using vite instead of webpack for storybook

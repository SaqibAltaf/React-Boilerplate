module.exports = {
  'stories': ['../src/components/**/stories.tsx'],
  'addons': ['@storybook/addon-essentials'],

  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },

  typescript: {
    reactDocgen: 'none',
  },

  docs: {
    autodocs: true
  },

  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
}

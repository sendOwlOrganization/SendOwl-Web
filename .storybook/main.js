const path = require('path')
const toPath = (filePath) => path.join(process.cwd(), filePath)
const tsConfig = require('../tsconfig.json')
const alias = {}
Object.entries(tsConfig.compilerOptions.paths).forEach(([k, v]) => {
    alias[k.replace('/*', '')] = path.resolve(`${v[0].replace('/*', '')}`)
})

module.exports = {
    'stories': [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-next-router',
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5',
    },
    // https://mui.com/material-ui/guides/migration-v4/#storybook-emotion-with-v5
    webpackFinal: async (config) => {
        const overrideConfig = {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    ...alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        }
        return overrideConfig
    },
}
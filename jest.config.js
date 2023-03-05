const tsconfig = require('./tsconfig.json');

const getModuleNameMapperFromTsConfig = () => {
    const moduleNameMapper = {};
    const aliases = Object.entries(tsconfig.compilerOptions.paths);
    aliases.forEach(([key, values]) => {
        const k = key.replace(/^@/, '^@').replace(/\*$/, '(.*)$');
        moduleNameMapper[k] = `<rootDir>/${values[0].replace('*', '$1')}`;
    });
    return moduleNameMapper;
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: getModuleNameMapperFromTsConfig(),
};

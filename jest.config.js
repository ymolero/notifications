//module.export = {
//    moduleFileExtensions: ['js', 'json', 'ts'],
//    rootDir: 'src',
//    testRegex: '.*\\.spec\\.ts$',
//    transform: {
//        '^.+\\.(t|j)s$': 'ts-jest',
//    },
//    collectCoverageFrom: ['**/*.(t|j)s'],
//    coverageDirectory: '../coverage',
//    testEnvironment: 'node',
//        global: {
//            statements: 90,
//            branches: 90,
//            functions: 90,
//            lines: 90,
//        },
//    },
//};

module.exports = {
    verbose: true,
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/config/', '/schema/', '.scannerwork'],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
};

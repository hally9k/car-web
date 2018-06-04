module.exports = {
    collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['jsx', 'js'],
    moduleNameMapper: {
        '\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mock/file.js'
    },
    modulePaths: ['<rootDir>/src/', '<rootDir>/test/', '<rootDir>/node_modules/'],
    roots: ['<rootDir>/src/'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '\\.(gql|graphql)$': '<rootDir>/test/mock/graphql.js',
        '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest'
    },
    testRegex: '(\\.(test|spec))\\.(jsx|js)$'
}

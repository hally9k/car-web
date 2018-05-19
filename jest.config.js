module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    moduleNameMapper: {
        '\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mock/file.js'
    },
    modulePaths: ['<rootDir>/src/', '<rootDir>/test/', '<rootDir>/node_modules/'],
    roots: ['<rootDir>/src/'],
    testPathIgnorePatterns: ['/node_modules/'],
    testRegex: '(\\.(test|spec))\\.(js|jsx)$'
}

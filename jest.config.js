module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        '\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mock/file.js'
    },
    modulePaths: ['<rootDir>/src/', '<rootDir>/test/', '<rootDir>/node_modules/'],
    roots: ['<rootDir>/src/'],
    testPathIgnorePatterns: ['/node_modules/'],
    "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$'
}

process.env.BABEL_ENV = 'test'

const webpackEnv = {test: true}
const webpackConfig = require('./webpack.config')
const testGlob = 'app/**/*.test.js'
const srcGlob = 'src/**/!(*.test|*.stub).js'

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [testGlob, srcGlob],
    preprocessors: {
      [testGlob]: ['webpack'],
      [srcGlob]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'},
      ],
      check: {
        global: {
          statements: 11,
          branches: 0,
          functions: 0,
          lines: 11,
        },
      },
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  })
}

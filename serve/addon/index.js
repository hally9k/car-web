const proxy = require('./proxy').default
const historyApiFallback = require('./history-api-fallback').default

module.exports.default = (app, middleware) => {
    historyApiFallback(app)
    proxy(app, middleware)
}

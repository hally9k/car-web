const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports.default = (app) => {
    app.use(
        convert(
            history({
                index: '/index.html'
            })
        )
    )
}

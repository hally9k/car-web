const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const proxy = require('./serve/proxy').default
const MinifyPlugin = require('babel-minify-webpack-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = mode === 'development'

let config = {
	mode: 'development',
	devtool: isDev ? 'cheap-module-source-map' : false,
	entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src/index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				loader: require.resolve('babel-loader'),
				options: {
					plugins: ['react-hot-loader/babel']
				}
			},
			{
				test: /\.(scss)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'style-loader' // creates style nodes from JS strings
					},
					{
						loader: 'css-loader' // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'static/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules', 'src']
	},
	optimization: {
		minimize: !isDev,
		minimizer: [
			new MinifyPlugin(
				{
					removeDebugger: true,
					removeConsole: true,
					mangle: false
				},
				{
					sourceMap: false
				}
			)
		]
	}
}

if (isDev) {
	config = {
		...config,
		serve: {
			add: proxy,
			host: '0.0.0.0',
			port: 9090,
			hot: {
				hot: true,
				host: '0.0.0.0',
				port: 9091
			}
		}
	}
}

module.exports = config

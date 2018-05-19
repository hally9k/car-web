const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const proxy = require('./serve/proxy').default
const MinifyPlugin = require('babel-minify-webpack-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = mode === 'development'

let config = {
	mode: 'development',
	devtool: isDev ? 'cheap-module-source-map' : false,
	entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src/index.tsx')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: path.resolve(__dirname, 'src'),
				loaders: ['babel-loader', 'ts-loader']
			},
			{
				test: /\.(graphql|gql)$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'graphql-tag/loader'
			},
			{
				test: /\.(scss)$/,
				include: path.resolve(__dirname, 'src'),
				loaders: ['style-loader', 'css-loader', 'sass-loader']
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
		extensions: ['.js', '.tsx', '.ts', '.graphql'],
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
				port: 9876
			}
		}
	}
}

module.exports = config

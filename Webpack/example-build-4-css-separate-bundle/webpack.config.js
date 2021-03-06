var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: ["./app"],
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "bundle.js"
	},

	plugins: [
		new ExtractTextPlugin('styles.css')
	],

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}
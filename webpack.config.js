var webpack = require('webpack'),
path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = 
{
	entry: {
		app: [
		'./src/js/app.js',
		'./src/scss/main.scss'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js',
		sourceMapFilename: "[file].map"
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loaders: ['react-hot', 'jsx', 'babel'],
			exclude: /(node_modules|bower_components)/,
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
		}
		]       
	},
	plugins: [ 
	new ExtractTextPlugin('main.css')
	]
};
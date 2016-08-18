var webpack = require('webpack'),
path = require('path'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
ProgressBarPlugin = require('progress-bar-webpack-plugin'),
chalk = require('chalk');

module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false
		},
		hot: true,
		inline: true,
	},
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/js/app',
	],
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js',
		sourceMapFilename: "[file].map"
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			exclude: /(node_modules|bower_components)/
		},
		{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		modulesDirectories: ["./src", "node_modules", "bower_components"]
	},
	plugins: [
	new ProgressBarPlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin('build/main.css', {
		allChunks: true
	}),
	]
};


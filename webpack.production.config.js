var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	ProgressBarPlugin = require('progress-bar-webpack-plugin'),
	chalk = require('chalk');

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/js/app',
		'./src/scss/main.scss'
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
				loader: 'babel',
				query: {
				  "presets": ["es2015", "stage-0", "react"]
				},
				exclude: /(node_modules|bower_components)/
			}, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap!autoprefixer!sass-loader?sourceMap=true&sourceMapContents=true')
			}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		modulesDirectories: ["./src", "node_modules", "bower_components"]
	},
	plugins: [
		new ProgressBarPlugin(),
		new webpack.DefinePlugin({
	    	'process.env': {
	    		'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	    	}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				screw_ie8: true,
				warnings: false,
			}
		}),
		new ExtractTextPlugin('main.css', {allChunks: true})
	]
};




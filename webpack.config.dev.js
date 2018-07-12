import path from 'path';
import webpack from 'webpack';

export default {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname,'src/app'),
		'webpack-hot-middleware/client' // add to enable hot module reloading
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin() // add to enable hot module reloading
	],
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, loader: ['style-loader','css-loader']}
		]
	}
}

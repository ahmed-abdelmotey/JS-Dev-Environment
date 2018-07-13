import path from 'path';
import webpack from 'webpack';

export default {
	mode: 'production',
	devtool: 'source-map',
	entry: [
		path.resolve(__dirname,'src/app'),
		'webpack-hot-middleware/client' // add to enable hot module reloading
	],
	target: 'web',
	stats:"detailed",
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // add to enable hot module reloading
	],
	optimization: {
		nodeEnv: 'production'
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, loader: ['style-loader','css-loader']}
		]
	}
}

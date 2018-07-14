import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractCssChunks  from 'extract-css-chunks-webpack-plugin';

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
		filename: 'bundle	.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // add to enable hot module reloading
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			env: 'dev'
		}),
		new ExtractCssChunks({
			filename: "[name].[contenthash].css",
			hot: true // optional as the plugin cannot automatically detect if you are using HOT, not for production use
		}),
	],
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, loader: [ExtractCssChunks.loader,'css-loader']}
		]
	}
}

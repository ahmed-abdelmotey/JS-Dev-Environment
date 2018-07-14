import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ExtractCssChunks  from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		main: path.resolve(__dirname,'src/app'),
		vendor: path.resolve(__dirname,'src/vendor'),
		css: path.resolve(__dirname,'src/assets/css/styles.css')
	},
	target: 'web',
	stats:"detailed",
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[contenthash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
			},
			inject: true,
			env: 'prod'
		}),
		new ExtractCssChunks(
			{
				filename: "[name].[contenthash].css",
				// hot: true // optional as the plugin cannot automatically detect if you are using HOT, not for production use
			}
		),
	],
	optimization: {
		nodeEnv: 'production',
		minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
		]
  },
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, loader: [ExtractCssChunks.loader,'css-loader']}
		]
	}
}

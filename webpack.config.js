const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'demo.js'
	},
	devServer: {
		port: 3001,
		contentBase: './dist',
		inline: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.png/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000
					}
				}
			}
		]
	},
	resolve: {
		// 因为默认找到的vue库是runtime库，所以要用runtime加编译的
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.BannerPlugin('sdsdsds'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html'
		})
	]
}	
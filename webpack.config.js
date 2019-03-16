const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: __dirname + '/src/main.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'demo.js',
		publicPath: "/"
	},
	devServer: {
		port: 3001,
		contentBase: './',
		inline: true,
		stats: 'errors-only'
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
				use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              singleton: false // 为true表示将页面上的所有css都放到一个style标签内
            }
          },
          use: [
          	{
          		loader: 'css-loader'
          	}
          ]
	      })
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              //这是带着文件路径的name，当图片大于limit的时候用到
              name: '[name].[ext]',
              //当图片大于limit的时候就会用到这个outputPath将图片打包到这个路径下
              outputPath: 'images',
              publicPath: 'images',
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'img:data-src', 'audio:src'],
                minimize: true
            }
        }
      }
		]
	},
	resolve: {
		// 因为默认找到的vue库是runtime库，所以要用runtime加编译的
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': __dirname + '/src'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/App.html'
		}),
		new CleanWebpackPlugin(),
		new ExtractTextPlugin('css/main.css')
	]
}	
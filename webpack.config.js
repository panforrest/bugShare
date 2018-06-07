var webpack = require('webpack')
var path = require('path')
var UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
var config = require('./package.json')
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: __dirname+'/public/dist',
		// path: __dirname+'/public',
		filename: 'bundle/[name].js',
        sourceMapFilename: 'bundle/[name].map',
        chunkFilename: 'bundle/[name].js'
	},
	node: {
		fs: 'empty'
	},
	devtool: '#source-map',	
	performance: process.env.NODE_ENV === 'production' ? {hints: false} : {},
	plugins: process.env.NODE_ENV === 'production' ? [
	    new webpack.DefinePlugin({
	        'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	        }
	    })
	] : [],
	optimization: process.env.NODE_ENV === 'production' ? {
		minimize: true,
		minimizer: [
			new UglifyJsWebpackPlugin({
				uglifyOptions: {
					output: {
						comments: false
					},
					compress: {
						drop_console: true,
						dead_code: true
					}
				}
			})
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'commons',
					enforce: true
				}
			}
		}
	} : {
		minimize: false,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'commons',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					// presets:['react', 'env']
					presets:['react', 'es2015']
				}
			},
			// {
			// 	test: /\.json$/,
			// 	loader: 'json-loader'
			// },
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					outputPath: 'images/',
					publicPath: (config.server) ? '/' : 'public/dist/',
					useRelativePath: false
				}
			},
			// {
		 //      test: /(\.css|\.scss)$/,
		 //      include: path.join(__dirname, 'src'),
		 //      loaders: ['style', 'css?sourceMap', 'sass?sourcMap']
		 //    },
			// {
		 //        test: /\.css/,
		 //        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		 //    }
	        {
	            test: /\.css$/,
	            // exclude: /node_modules/,
	            loaders: [
	                "style-loader?sourceMap",
	                "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
	            ]
	        },
		]
	}
}


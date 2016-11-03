 
var Webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var UglifyJsPlugin = Webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var nodeModulesPath = path.resolve(__dirname,'node_modules');
var mainPath = path.resolve(__dirname,'src','index.js');
var bundle = 'bundle';
var outputFile;  
var host = '0.0.0.0';
var port;
var path;
var output = {};

var plugins = [new Webpack.HotModuleReplacementPlugin()];
// if(env==='prod'){
//    plugins.push(new UglifyJsPlugin({minimize:true}));
//    path = path.resolve(__dirname,'public','build');
//    outputFile = bundle + '.min.js';
//    output = Object.assign({},{path:path},{filename:outputFile},{publicPath:'/build/'});
// }
//  if(env==='dev'){
//    	path = path.resolve(__dirname,'public','build');
//  	outputFile = bundle + '.js';
//  	output = Object.assign({},{path:path},{filename:outputFile},{publicPath:'/build/'})
//  }
//  	
path = path.resolve(__dirname,'public','build');
outputFile = bundle + '.js';
output = Object.assign({},{path:path},{filename:outputFile},{publicPath:'/build/'});
 

var config = {
 	devtool: 'source-map',
 	entry: mainPath,
 	output:output,
	watch: true,
	devServer:{
		inline:true,
		historyApiFallback: true,
		port:8081
	},
	module:{ 
		loaders:[
				 {test:/\.jsx?$/, exclude:[nodeModulesPath],loader:'babel',query:{ presets:['es2015','react','stage-2','es2016'] } },
				 { test: /\.css$/, loader: "style-loader!css-loader" },
			 	 {test: /\.(png|jpg)$/, loader: 'file-loader',include:__dirname},
			 	 { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000!img?progressive=true' },
                 {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader',include:__dirname}
		        ]
	},
	plugins:  plugins.push(['transform-object-rest-spread'])
}
module.exports = config;

 
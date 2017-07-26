const ET = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
        bundle:__dirname+"/src/entry.js"
    },
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.(sass|scss)$/,exclude:/node_modules/,loader:"style-loader!css-loader!sass-loader"},
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
            {test:/\.(png|img)$/,loader: "url-loader?limit=8192"},
            {test:/\.vue$/,loader:"vue-loader",options:{
				loaders:{
					"scss":"style-loader!css-loader!sass-loader",
					"css":"style-loa    der!css-loader"
				}
			}},
            {test:/\.string$/,loader:'string-loader'},
            // {test:/\.(sass|scss)$/,loader:ET.extract({fallback: 'style-loader',use: ['css-loader', 'sass-loader']})}
        ]
    },
    devtool:"source-map",
    devServer:{
		contentBase:__dirname+"/dist",
		host:"localhost",
		port:8000,
		inline:true,
		hot:true
	},
    plugins:[ 
		new ET({
			filename:"/css/[name].css",  //文件路径
			allChunks: true
		})
	],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'//解决vue高版本文件引入问题，去除不能使用template的警告
            //You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
        }
    }
}
/**
 * Created by nikita on 16.11.16.
 */
'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack=require('webpack');


module.exports={
    entry: "./home",
    output: {
        filename: "bundle.js",
        library:'home'
    },
    watch: NODE_ENV == 'development',
    watchOptions:{
        aggregateTimeout:100
    },
    devtool: NODE_ENV == 'development' ? 'source-map':null,

    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV:JSON.stringify(NODE_ENV)
        })
    ],

    resolve:{
        modulesDirectories:['node_modules'],
        extensions:['','.js']
    },
    
    resolveLoader:{
        modulesDirectories:['node_modules'],
        moduleTemplates:['*-loader','*'],
        extensions:['','.js']
    },

    module:{

        loaders:[{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }]
    }
};

if(NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console:true,
                unsafe:true
            }
        })
    )
}
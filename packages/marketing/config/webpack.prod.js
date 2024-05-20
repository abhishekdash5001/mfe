const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const prodConfig={
    mode:"production",
    output:{
filename:'[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederation({
            name:"marketing",
            exposes:{
                './MarketingApp':'./src/bootstrap'  
            },
            shared:packageJson.dependencies
        })
    ]
   
  
    
}

module.exports = merge(commonConfig,prodConfig)


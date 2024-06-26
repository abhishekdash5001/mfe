const { merge } = require('webpack-merge');

const packageJson= require('../package.json');
const commonConfig = require('./webpack.common');
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig={
    mode:"production",
    output:{
        filename:'[name].[contenthash].js'
    },
    plugins:[
  new ModuleFederation({
    name:"container",
    remotes:{
        marketing:`marketing@${domain}/marketing/remoteEntry.js`
    },
    shared:packageJson.dependencies
  })
    ]
}

module.exports= merge(commonConfig,prodConfig)
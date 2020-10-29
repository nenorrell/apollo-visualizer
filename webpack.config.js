const path = require('path');
const RegeneratorRuntime = require('regenerator-runtime/runtime');
const CoreJs = require('core-js/stable');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const bundleName = "bundle.js";
const PATHS = {
  bundlePath:  `./src/app.js`,
  build: '/build',
  bundlePath:  path.resolve(__dirname, `./src/app.js`)
}

let config = {
    entry: [RegeneratorRuntime, 'whatwg-fetch', './src/app.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          include: path.resolve(__dirname, "./src/assets/images"),
          use: {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]',
                  path: PATHS.build,
                  publicPath: 'build',
              }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
                sassOptions: {
                  includePaths: [ 
                    `${__dirname}/node_modules`,
                    `${__dirname}/node_modules/bulma`
                  ]
                },
              },
            },
          ],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    entry: PATHS.bundlePath,
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: PATHS.build,
        filename: bundleName
    },

    devServer: {
      compress: true,
      port: 3002
    }
};

if(!isProduction){
  config["devtool"] = "inline-source-map";
}

module.exports = config;
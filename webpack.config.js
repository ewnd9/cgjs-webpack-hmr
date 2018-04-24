'use strict';

const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';

const main = isProd ? [
  `${__dirname}/src/index.js`
] : [
  'webpack/hot/poll?1000',
  `${__dirname}/src/index.js`
];

module.exports = {
  entry: {
    main
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  target: 'node'
};

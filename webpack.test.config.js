var entryFolder = './test/src';
var path = require('path');
var fs = require('fs');
var entryPoints = fs.readdirSync(entryFolder).map(file => path.join(__dirname, '/test/src/', file));

module.exports = {
  mode: "development",
  entry: entryPoints,
  module: {
    rules: [{
      test: /\.(ts)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].json',
            outputPath: '/'
          }
        }, {
          loader: require.resolve('./index.js')
        }, {
          loader: 'ts-loader'
        }
      ]
    }]
  }
};

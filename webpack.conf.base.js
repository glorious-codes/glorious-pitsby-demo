const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

function buildEntries(){
  const entries = {}
  project.scripts.source.libs.forEach(lib => {
    entries[lib.name] = `${__dirname}/${lib.entry}`;
  });
  return entries;
}

module.exports = {
  entry: buildEntries(),
  output: {
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@react': `${__dirname}/${project.scripts.source.root.react}`,
      '@styles': `${__dirname}/${project.styles.source.root}`
    }
  },
  plugins: []
}

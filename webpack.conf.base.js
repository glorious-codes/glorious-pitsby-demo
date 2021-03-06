const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    'angular': 'angular',
    '@vue': 'Vue',
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
        test: /\.html$/,
        include: [
          path.resolve(__dirname, project.scripts.source.root.angular),
          path.resolve(__dirname, project.scripts.source.root.vanilla),
          path.resolve(__dirname, project.scripts.source.root.vue)
        ],
        use: 'html-loader'
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
      '@vue$': 'vue/dist/vue.esm.js',
      '@vue': `${__dirname}/${project.scripts.source.root.vue}`,
      '@angular': `${__dirname}/${project.scripts.source.root.angular}`,
      '@react': `${__dirname}/${project.scripts.source.root.react}`,
      '@vanilla': `${__dirname}/${project.scripts.source.root.vanilla}`,
      '@styles': `${__dirname}/${project.styles.source.root}`
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: project.images.source.files,
      to: project.images.dist.root
    }])
  ]
}

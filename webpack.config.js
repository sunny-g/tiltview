module.exports = {
  entry: './dist/YouTube.js',

  output: {
    library: 'ReactYouTube',
    libraryTarget: 'umd',
    filename: 'ReactYouTube.js',
  },

  externals: {
    'react': 'React',
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
};

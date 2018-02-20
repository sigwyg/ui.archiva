/**
 * https://github.com/storybooks/storybook/issues/270#issuecomment-318101549
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
                config: {
                path: './config/postcss.config.js',
                }
            },
          },
        ],
      },
    ],
  },
}

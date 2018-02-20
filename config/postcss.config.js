module.exports = {
  "sourceMap": true,
  "plugins": {
    "postcss-import": {},
    "postcss-cssnext": {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      features: {
        customProperties: false,
        attributeCaseInsensitive: false,
      }
    },
    "postcss-css-variables": {},
    "postcss-flexbugs-fixes": {},
  }
}

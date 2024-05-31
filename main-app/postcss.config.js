module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      browsers: 'Safari >= 11'
    }),
    require('cssnano'),
    require('postcss-antd-fixes')
  ]
}

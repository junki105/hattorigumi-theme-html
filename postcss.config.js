module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
	plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('autoprefixer'),
  ],
 }
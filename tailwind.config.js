module.exports = {
  // mode: 'jit',
  //  purge: [
  //   './*.html'
  // ],

	darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1023px'},
      // => @media (max-width: 1169px) { ... }
  
      'lg': {'max': '899px'},
      // => @media (max-width: 1049px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 899px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'myanmar-regular': ['myanmar-regular'],
        'hiragino-w4': ['hiragino-w4'],
        'slabo27px-regular': ['slabo27px-regular'],
      },
      textColor: {
        'blue': '#00A7FF',
      },
    },
    backgroundColor: theme => ({
     ...theme('colors'),
     'blue': '#00A7FF',
    })
  },
	variants: {
  },
}
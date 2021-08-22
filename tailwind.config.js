module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'crimson': '#dc143c'
      }
    },
    screens: {
      sm: '500px',
      md: '800px',
      lg: '1024px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },

  },
  variants: {
    margin: ['first'],
    textColor: ['hover', 'visited'],
    extend: {},
  },
  plugins: []
}
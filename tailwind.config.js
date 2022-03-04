module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202224',
        light: '#E5E5E5',
        beje: '#B9AEA0',
      },
      boxShadow: {
        keyUp: '6px 6px 12px #1C1E1F, -6px -6px 12px #242629',
        keyDown: 'inset 6px 6px 12px #1C1E1F, inset -6px -6px 12px #242629',
        enterLeftKeyUp: '6px 6px 12px #1C1E1F, -6px -6px 12px #242629',
        enterRightKeyUp: '6px 6px 12px #1c1e1f, 6px -6px 12px #242629',

        enterLeftKeyDown: 'inset 6px 6px 12px #1c1e1f',
        enterRightKeyDown: 'inset 1px 6px 12px #1c1e1f, inset -6px -6px 12px #242629',
      },
      width: {
        keyboard: '70.75rem',
      },
      height: {
        keyboard: '24.5rem',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily:{
        font_full:['Open Sans', 'sans'],
      },
      colors: {
        // 1
        'bg_color_1': '#27374D',
        'bg_color_2': '#526D82',
        'bg_color_3': '#9DB2BF',
        'bg_color_4': '#DDE6ED',
        // 2/
        // 'bg_color_1': '#6096B4',
        // 'bg_color_2': '#93BFCF',
        // 'bg_color_3': '#BDCDD6',
        // 'bg_color_4': '#EEE9DA',
        // 3/
        // 'bg_color_1': '#3C6255',
        // 'bg_color_2': '#61876E',
        // 'bg_color_3': '#A6BB8D',
        // 'bg_color_4': '#EAE7B1',
        // 4/
        // 'bg_color_1': '#0A2647',
        // 'bg_color_2': '#144272',
        // 'bg_color_3': '#BDCDD6',
        // 'bg_color_4': '#DDE6ED',
        // 5
        // 'bg_color_1': '#698269',
        // 'bg_color_2': '#B99B6B',
        // 'bg_color_3': '#F1DBBF',
        // 'bg_color_4': '#AA5656',
      },
    },
  },
  plugins: [],
}

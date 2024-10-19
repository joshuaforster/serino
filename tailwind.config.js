module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enables dark mode with a class toggle
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        minionPro: ['MinionPro', 'serif'],
        myriadPro: ['MyriadPro', 'sans-serif'],
        myriadProBold: ['MyriadProBold', 'sans-serif'],
        myriadProBoldIt: ['MyriadProBoldIt', 'sans-serif'],
        myriadProLight: ['MyriadProLight', 'sans-serif'],
        neutra2TextBold: ['Neutra2TextBold', 'sans-serif'],
        neutra2TextBook: ['Neutra2TextBook', 'sans-serif'],
        neutra2TextDemi: ['Neutra2TextDemi', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        caviar: ['CaviarDreams', 'sans-serif'], // Added Caviar Dreams
        oswald: ['Oswald', 'sans-serif'], // Added Oswald
        workSans: ['Work Sans', 'sans-serif'], // Added Work Sans
      },
      colors: {
        customBlue: '#066BCE',
        customGray: '#E4E4E3',
        lightBlue: '#55B6D9',
        fontColour: '#3B464B',
        headerGrey: '#D8D9D3',
        customGold: '#C58C49',
        brandOrange: '#FF9D18',
        brandBlue: '#00263D'
      },
      backgroundImage: {
        'pattern-stripes': 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 10px, #e5e5e5 10px, #e5e5e5 20px)', // Added background pattern stripes
      },
    },
  },
  plugins: [],
}

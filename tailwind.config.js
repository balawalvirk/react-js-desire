module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'modal-gradient': 'linear-gradient(109.32deg, rgba(0, 0, 0, 0.4) 3.09%, rgba(0, 0, 0, 0.1) 95.99%)',
        'profile-gradient': 'linear-gradient(180deg, rgba(34, 24, 49, 0) 56.66%, #1B2431 88.98%)'
      },
      colors: {
        'primary': "#C61323",
        'secondary': "#74747E",
        'lightSecondary': '#E8E6EA',

      },
      spacing: {
        'aspect-16-9': '56.25%', // (9/16)*100%

      },
      boxShadow: {
        'custom': '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [

  ],
}



// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'apple-black': '#000000',
        'apple-gray': '#f5f5f7',
        'apple-near-black': '#1d1d1f',
        'apple-blue': '#0071e3',
        'apple-link': '#0066cc',
      },
      letterSpacing: {
        'apple-tight': '-0.022em', // Simula el tracking negativo de Apple
      },
      lineHeight: {
        'apple-headline': '1.07',
      }
    },
  },
}

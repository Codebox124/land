/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        // You can extend the default theme here
        colors: {
          // Add custom colors if needed
        },
        fontFamily: {
          // Add custom fonts if needed
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            gridTemplateColumns: {
                '70/30': '70% 20%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

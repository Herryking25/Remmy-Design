/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3b82f6', // blue-500
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#a3a3a3', // neutral-400
                    foreground: '#171717',
                },
                accent: {
                    DEFAULT: '#8b5cf6', // violet-500
                    foreground: '#ffffff',
                },
                background: '#0a0a0a', // neutral-950
                surface: '#171717', // neutral-900
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

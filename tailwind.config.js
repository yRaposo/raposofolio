/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bebas': ['BebasNeue', 'Arial', 'sans-serif'],
                'timegoing': ['Timegoing', 'Georgia', 'serif'],  
                'roboto': ['Roboto', 'Arial', 'sans-serif'],
                'kode': ['Kode Mono', 'Consolas', 'monospace'],
                'geist-sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                'geist-mono': ['var(--font-geist-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
};

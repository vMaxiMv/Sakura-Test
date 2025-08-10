import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@untitledui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('tailwindcss-react-aria-components')],
} satisfies Config;

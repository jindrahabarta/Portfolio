import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                pacifico: ['var(--pacifico)'],
                arbutus: ['var(--font-arbutus)'],
            },
            colors: {
                darkPink: '#FF69B4',
                darkBlue: '#1000FF',
                midBlue: '#2B60FF',
                midBlue2: '#5D8EFF',
                lightBlue: '#ACC9FF',
                yellow: '#FFE100',
                green: '#22C55E',
            },
            width: {
                '1': '0.25rem',
            },
        },
    },
    plugins: [],
}
export default config

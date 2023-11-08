/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                'broken-knight': ['var(--font-broken-knight)'],
                'luckiest-guy': ['var(--font-luckiest-guy)'],
                'epoque-seria-bold': ['var(--font-epoque-seria-bold)'],
                austein: ['var(--font-austein)'],
                'belgates-script': ['var(--font-belgates-script)'],
                'birds-of-paradise': ['var(--font-birds-of-paradise)'],
                hughs: ['var(--font-hughs)'],
                'american-classic': ['var(--font-american-classic-extra-bold-regular)'],
                'copperplate-gothic': ['var(--font-copperplate-gothic-heavy-regular)'],
                monotype: ['var(--font-monotype)'],
                times: ['var(--font-times)'],

            },
            colors: {
                secondary: '#1c4f82',
                primary: {
                    DEFAULT: '#02294f',
                    100: '#e5e9ed',
                    200: '#1b3e60',
                },
            },
        },
    },
    plugins: [],
};

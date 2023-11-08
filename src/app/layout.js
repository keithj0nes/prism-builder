import './globals.css';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const broken_knight = localFont({
    src: './fonts/Broken_Knight.ttf',
    display: 'swap',
    variable: '--font-broken-knight',
});

const luckiest_guy = localFont({
    src: './fonts/LuckiestGuy-Regular.ttf',
    display: 'swap',
    variable: '--font-luckiest-guy',
});

// sans-serif
const epoque_seria_bold = localFont({
    src: './fonts/sans-serif/EpoqueSeria-Bold.ttf',
    display: 'swap',
    variable: '--font-epoque-seria-bold',
});

// script
const austein = localFont({
    src: './fonts/script/Austein.ttf',
    display: 'swap',
    variable: '--font-austein',
});

const belgates_script = localFont({
    src: './fonts/script/Belgates-Script.ttf',
    display: 'swap',
    variable: '--font-belgates-script',
});

const birds_of_paradise = localFont({
    src: './fonts/script/Birds-of-Paradise.ttf',
    display: 'swap',
    variable: '--font-birds-of-paradise',
});

const hughs = localFont({
    src: './fonts/script/Hughs.otf',
    display: 'swap',
    variable: '--font-hughs',
});

// serif
const american_classic = localFont({
    src: './fonts/serif/American-Classic-Extra-Bold-Regular.ttf',
    display: 'swap',
    variable: '--font-american-classic-extra-bold-regular',
});

const copperplate_gothic = localFont({
    src: './fonts/serif/Copperplate-Gothic-Heavy-Regular.otf',
    display: 'swap',
    variable: '--font-copperplate-gothic-heavy-regular',
});

const monotype = localFont({
    src: './fonts/serif/monotype.ttf',
    display: 'swap',
    variable: '--font-monotype',
});

const times = localFont({
    src: './fonts/serif/times.ttf',
    display: 'swap',
    variable: '--font-times',
});

export const metadata = {
    title: 'Shop Boat Names - Prism Graphics',
    description: 'Build and create your own boat graphic on our custom boat name builder',
};

// NOTE: BE SURE TO ADD LOCALFONT.VARIABLE TO TAILWIND CONFIG

const allFonts = [
    inter.variable,
    broken_knight.variable,
    luckiest_guy.variable,
    // sans-serif
    epoque_seria_bold.variable,
    // script
    austein.variable,
    belgates_script.variable,
    birds_of_paradise.variable,
    hughs.variable,
    // serif
    american_classic.variable,
    copperplate_gothic.variable,
    monotype.variable,
    times.variable,
];


const RootLayout = ({ children }) => (
    // <html lang="en">
    // <html lang="en" className={`${inter.variable} ${broken_knight.variable} ${luckiest_guy.variable}`}>
    <html lang="en" className={allFonts.join(' ')}>

        {/* <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Pixelify+Sans&family=Roboto+Condensed:ital,wght@1,300&family=Sedgwick+Ave+Display&family=Young+Serif&display=swap" rel="stylesheet" />
        </head> */}
        <body className={inter.className}>{children}</body>
    </html>
);

export default RootLayout;

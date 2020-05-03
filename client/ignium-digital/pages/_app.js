import '../public/styles/globalstyles.css';

/*
 * This file Next.js will recognize as an override to control page initialization
 */

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export const siteTitle = 'Jag Construction';
export const siteDescription = 'The Jag Construction LLC company website';

export default function Layout({ children, home }) {

    return (
        <div>
            <Head>
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content="/favicon.svg" />
                <link rel="icon" href="/favicon3.svg" />
            </Head>

            <Navbar/>

            <main>{ children }</main>

            <Footer />
        </div>
    );
}
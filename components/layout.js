import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

export const siteTitle = 'Jag Construction';

export default function Layout({ children, home }) {
    return (
        <div>
        <Head>
            <link rel="icon" href="/favicon.svg" />
            <meta
            name="description"
            content="Jag Construction LLC company website"
            />
            <meta
            property="og:image"
            content="/favicon.svg"/>
            <meta name="og:title" content={siteTitle} />
        </Head>

        <Navbar />

        <main>{ children }</main>

        <Footer />
        
        </div>
    );
}
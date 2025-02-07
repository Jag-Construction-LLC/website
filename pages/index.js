import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import coverImg from '../public/images/construction.jpg';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section with Full Screen Background */}
      <section className="relative h-screen">
        {/* Background Image */}
        <Image
          src={coverImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          // Place the image behind other content and allow clicks to pass through.
          className="absolute inset-0 pointer-events-none"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
        {/* Centered overlay content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Jag Construction
          </h1>
          <p className="mt-4 text-lg text-center">
            Building dreams from the ground up
          </p>
          <a
            href="#more"
            className="mt-6 rounded bg-green-700 px-6 py-3 text-lg font-medium hover:bg-green-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Additional content that appears when scrolling down */}
      <section id="more" className="py-10">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="mb-4 text-2xl font-bold">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vehicula ex eu gravida consectetur.
          </p>
          {/* More content… */}
        </div>
      </section>
    </Layout>
  );
}

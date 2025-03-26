import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import coverImg from '../public/images/construction.jpg';
import heroImg2 from '../public/images/army.jpg';
import heroImg3 from '../public/images/construction3.jpg';
import usaLogo from '../public/images/usa.png';

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
                alt="Home Background Image"
                layout="fill"
                objectFit="cover"
                // Place the image behind other content and allow clicks to pass through.
                className="absolute inset-0 pointer-events-none"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            {/* Centered overlay content */}
            <div 
                className="relative z-10 flex h-full flex-col items-center 
                    justify-center text-white px-4"
            >
                <h1 className="text-4xl font-bold text-center">
                    FULL SERVICE CONSTRUCTION
                </h1>
                <p className="mt-4 text-xl text-center">
                    Building dreams from the ground up.
                </p>
                <Link
                    href="/#about"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-green-800 transition duration-200"
                >
                    Learn More
                </Link>
            </div>
        </section>

        { /* Brief services section */}
        <section className="pt-16 bg-gray-100">
            <div 
                className="max-w-screen-xl flex flex-col items-center 
                    justify-between px-4 space-y-10 md:space-y-0 md:space-x-5
                    md:flex-row mx-auto md:min-width-10 md:items-stretch"
            >
                <div 
                    className="max-w-sm bg-white border border-gray-200 rounded-sm
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/construction2.jpg" 
                        alt="Full Service Construction"
                        width={1279}
                        height={730}  
                    />
                    <div className="p-5">
                        <h5 
                            className="mb-2 text-2xl font-bold tracking-tight 
                                text-green-900"
                        >
                            Full Service Construction
                        </h5>
                        <p className="font-normal text-gray-700">
                            No project too big. Jag has what it takes to
                            bring any project to fruition, with unrivaled 
                            speed and efficiency.
                        </p>
                    </div>
                </div>
                <div 
                    className="max-w-sm bg-white border border-gray-200 rounded-sm 
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/estimation.jpg" 
                        alt="Estimation"
                        width={1279}
                        height={730}  
                    />
                    <div className="p-5">
                        <h5 
                            className="mb-2 text-2xl font-bold tracking-tight 
                                text-green-900"
                        >
                            Advanced Project Management & Controls
                        </h5>
                        <p className="font-normal text-gray-700">
                            Our process integrates the strategic application of tools, techniques, and expertise to plan, monitor, and
                            execution of projects, ensuring they are completed on time, within budget, and to the highest quality
                            standards.
                        </p>
                    </div>
                </div>

                <div 
                    className="max-w-sm bg-green-900 border border-gray-200 rounded-sm 
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/consultation.jpg" 
                        alt="Free Consultation"
                        width={1279}
                        height={730} 
                    />
                    <div className="p-5">
                        <h5 
                            className="mb-2 text-2xl font-bold tracking-tight 
                                text-gray-900 text-white"
                        >
                            Collaboration
                        </h5>
                        <p className="font-normal text-gray-100">
                            Our skilled professionals collaborate closely with you, thoroughly reviewing every detail of your
                            project to align with your standards and budget.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* About section */}
        <section id="about" className="py-16 bg-gray-100 scroll-mt-20">
            <div className="mx-auto max-w-screen-xl px-4">
                <h2 className="mb-4 text-xl font-semibold text-green-900">
                    WHO WE ARE
                </h2>
                <h1 className="text-4xl font-bold mb-5">
                    Jag Construction is a veteran-owned business bringing over 40 years of collective expertise to the
                    construction industry.
                </h1>
                <div className="flex flex-row items-center justify-between">
                    <p className="max-w-xl text-gray-700 text-lg">
                        Jag Construction is a veteran-owned business with over 40 years of collective expertise in delivering top-
                        tier construction across all trades.
                        <br/><br/>
                        At Jag, we're more than a construction company—we're a team of skilled professionals united by a
                        passion for craftsmanship, innovation, and client-focused service.
                        <br/><br/>
                        Named “Jag” in honor of the military term JAG, our proudly veteran-owned company carries forward a
                        tradition of discipline and dedication that defines our work every day.
                    </p>
                    <div 
                        className="flex flex-col md:flex-row md:space-x-10 my-5
                            md:mr-10">
                        <Image
                            className="max-w-50 md:max-w-60"
                            src="/images/jag-logo.png"
                            width={3643}
                            height={3643}
                            alt="JAG Logo"
                        />
                        <Image
                            className="max-w-50 md:max-w-60"
                            src="/images/army-logo.svg"
                            width={255}
                            height={255}
                            alt="Army Logo"
                        />
                    </div>
                </div>
                <br/>
                <p className="text-gray-700 text-lg">
                    With over four decades of combined experience, our leadership brings deep knowledge and hands-on
                    mastery across every facet of construction—from carpentry and masonry to electrical, plumbing, and
                    beyond. We specialize in bringing together the full spectrum of trades to create seamless, high-quality
                    builds tailored to your vision.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    We fuse veteran-driven expertise with advanced project management and cutting-edge project controls
                    to deliver exceptional results. This powerful combination ensures every project is executed with
                    precision, reliability, and unmatched value, transforming your ideas into reality.
                </p>

                <About/>

                <p className="text-gray-700 text-lg">
                    Our commitment goes beyond bricks and mortar. We pride ourselves on delivering warm hospitality and
                    personalized service, making every client feel like part of the Jag family. Using advanced project
                    management and project controls, we ensure every build is completed efficiently, on time, and to the
                    highest standards—without compromise.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    At Jag Construction, every project embodies our core values: integrity, ingenuity, and a dedication to
                    building lasting relationships. Whether it's a custom home, a transformative commercial space, or a
                    complex industrial facility, we bring our veteran spirit and trade expertise to deliver results that stand
                    strong for generations.
                </p>
                <br/>
                <p className="text-gray-700 font-bold text-lg">
                    Let's build the future together.
                </p>
            </div>
        </section>

        {/* Hero Section 2 with Full Screen Background */}
        <section className="relative h-screen">
            {/* Background Image */}
            <Image
                src={heroImg2}
                alt="About Background Image"
                layout="fill"
                objectFit="cover"
                // Place the image behind other content and allow clicks to pass through.
                className="absolute inset-0 pointer-events-none"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            {/* Centered overlay content */}
            <div 
                className="relative z-10 flex h-full flex-col md:flex-row items-center 
                    justify-center text-white px-4 space-y-5 md:space-x-5
                    md:space-y-0"
            >
                <h1 className="text-3xl md:text-4xl font-bold">
                    Proudly Veteran Owned.
                </h1>
                <Image
                    className="max-w-40"
                    src={usaLogo}
                    width={4182}
                    height={2188}
                    alt="USA Logo"
                />
                <h2 className="text-3xl md:text-4xl font-bold">
                    Serving our Country.
                </h2>
            </div>
        </section>

        {/* Services section */}
        <section id="services" className="py-16 bg-gray-100 scroll-mt-20">
            <div className="mx-auto max-w-screen-xl px-4">
                <h2 className="mb-4 text-xl font-semibold text-green-900">
                    WHAT WE DO
                </h2>
                <p className="text-gray-700 text-lg">
                    At Jag Construction, we bring your vision to life with a seamless blend of expert craftsmanship,
                    innovative solutions, and disciplined execution. With decades of experience and a veteran-led
                    perspective, we harness advanced project management and cutting-edge technology to deliver every
                    project—big or small—with precision, efficiency, and uncompromising quality.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    Our full-service approach covers every trade and phase of construction, tailored to your unique needs.
                    From laying the groundwork to putting on the finishing touches, we combine hands-on expertise with
                    strategic oversight to ensure your project is completed on time, within budget, and to the highest
                    standards.
                </p>

                <Services/>
                
                <p className="text-gray-700 text-lg">
                    Our services are just the starting point. At Jag Construction, we're dedicated to forging strong, lasting
                    partnerships with every client. We know no two projects are alike, so we adapt our approach to match
                    your goals, timeline, and vision. With the grit of a veteran-led team and the precision of advanced
                    project controls, we turn your concepts into reality—crafted to last and delivered with pride.
                </p>
            </div>
        </section>

        {/* Hero Section 3 with Full Screen Background */}
        <section className="relative h-screen">
            {/* Background Image */}
            <Image
                src={heroImg3}
                alt="Contact Background Image"
                layout="fill"
                objectFit="cover"
                // Place the image behind other content and allow clicks to pass through.
                className="absolute inset-0 pointer-events-none"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            {/* Centered overlay content */}
            <div 
                className="relative z-10 flex h-full flex-col items-center 
                    justify-center text-center text-white px-4 space-y-0"
            >
                <h1 className="text-3xl md:text-4xl font-bold">
                    Let's get your project started.
                </h1>
                <p className="max-w-xl mt-4 text-lg">
                    Discover how our veteran-led team's unique strengths and steadfast commitment to exceptional
                    craftsmanship seamlessly transform your vision into extraordinary reality.
                </p>
                <Link
                    href="/#contact"
                    className="mt-6 rounded bg-transparent border px-6 py-2 text-lg 
                        font-medium hover:bg-green-800 transition duration-200"
                >
                    Contact Us
                </Link>
            </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="bg-gray-100 scroll-mt-20 pb-20">
            <div className="mx-auto max-w-screen-xl px-4 py-16">
                <h2 className="mb-4 text-xl font-semibold text-green-900">
                    HOW TO REACH US
                </h2>
                <p className="text-gray-700 text-lg">
                    At Jag Construction, we believe in building strong foundations—both in our projects and in our
                    relationships. Whether you have questions, need expert advice, or are ready to start your next project,
                    we're here to help. Our veteran-led team is dedicated to delivering excellence and innovation at every
                    step of your construction journey.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    We're passionate about transforming your vision into reality, and our talented team is ready to help
                    every step of the way. Please use the contact information below to share your project details or ask any
                    questions. We look forward to connecting with you soon!
                </p>
            </div>

            <Contact/>

        </section>

        </Layout>
    );
}

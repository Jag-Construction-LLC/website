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
                alt="Background Image"
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
                    justify-between px-4 space-y-10 md:space-y-0
                    md:flex-row mx-auto md:min-width-10 md:items-stretch"
            >
                <div 
                    className="max-w-sm bg-white border border-gray-200 rounded-sm 
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/estimation.jpg" 
                        alt=""
                        width={1279}
                        height={730}  
                    />
                    <div className="p-5">
                        <h5 
                            className="mb-2 text-2xl font-bold tracking-tight 
                                text-green-900"
                        >
                            Advanced Estimation
                        </h5>
                        <p className="font-normal text-gray-700">
                            Our unique approach to estimation leverages new 
                            technologies to provide precise estimates as quickly
                            as possible.
                        </p>
                    </div>
                </div>

                <div 
                    className="max-w-sm bg-white border border-gray-200 rounded-sm
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/construction2.jpg" 
                        alt=""
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
                    className="max-w-sm bg-green-900 border border-gray-200 rounded-sm 
                        shadow-sm hover:shadow-lg"
                >
                    <Image 
                        className="rounded-t-sm" 
                        src="/images/consultation.jpg" 
                        alt=""
                        width={1279}
                        height={730} 
                    />
                    <div className="p-5">
                        <h5 
                            className="mb-2 text-2xl font-bold tracking-tight 
                                text-gray-900 text-white"
                        >
                            Free Consultation
                        </h5>
                        <p className="font-normal text-gray-100">
                            Experience unmatched efficiency and hospitality.
                            Choose Jag for your next construction project.
                            Contact us today to get a free consultation.
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
                    Jag Construction is a veteran-owned company with over 40
                    years of combined experience in project construction.
                </h1>
                <div className="flex flex-row items-center justify-between">
                    <p className="max-w-xl text-gray-700 text-lg">
                        At Jag, we're more than just a construction firm—we're a team of seasoned professionals committed to excellence, innovation, and service. 
                        <br/><br/>
                        Proudly veteran-owned, our company is named “Jag” after the military term for JAG, honoring our heritage and the legacy of disciplined service that continues to guide our work every day.
                    </p>
                    <div 
                        className="flex flex-col md:flex-row md:space-x-10 my-5
                            md:mr-10">
                        <Image
                            className="max-w-50 md:max-w-60"
                            src="/images/jag-logo.png"
                            width={3643}
                            height={3643}
                            alt=""
                        />
                        <Image
                            className="max-w-50 md:max-w-60"
                            src="/images/army-logo.svg"
                            width={255}
                            height={255}
                            alt=""
                        />
                    </div>
                </div>
                <br/>
                <p className="text-gray-700 text-lg">
                    With over 40 years of combined industry experience, our 
                    leadership has honed a unique blend of technical expertise 
                    and hands-on know-how that sets us apart. Our executives, 
                    with an impressive background in executive controls management, 
                    have successfully overseen the development of detailed estimates, 
                    budget deconstructions, change requests, and conceptual 
                    budgetary estimates for energy projects.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    We harness a unique blend of veteran expertise, cutting-edge
                    technology, and a steadfast commitment to excellence. Our 
                    strengths form the foundation of every project, empowering us 
                    to transform your vision into reality with precision, reliability, 
                    and outstanding value.
                </p>

                <About/>
                

                <p className="text-gray-700 text-lg">
                    Our commitment extends beyond technical excellence. We pride 
                    ourselves on delivering exceptional hospitality and personalized 
                    service to every client. By leveraging the latest technology, 
                    we streamline our processes to ensure that every project is 
                    estimated with efficiency and precision—allowing us to meet 
                    deadlines and budgets without compromising quality.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                    At Jag Construction, every project is a testament to our core 
                    values: integrity, innovation, and a commitment to building 
                    lasting relationships. Whether it's a high-profile energy 
                    initiative or a transformative civil project, we bring our 
                    veteran spirit and expert insight to deliver results that 
                    stand the test of time.
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
                alt="Background Image"
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
                    alt="usa logo"
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
                    At Jag Construction, our service offerings are designed to 
                    bring your project to life with unmatched precision, efficiency, 
                    and innovation. Backed by decades of industry experience and 
                    a veteran-led approach, we combine cutting-edge technology 
                    with time-tested expertise to ensure every project is delivered 
                    to the highest standard—from initial concept through to completion.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                We blend veteran leadership with cutting-edge 
                technology to offer a full spectrum of solutions tailored to your 
                project's unique needs. Our comprehensive suite of services—ranging 
                from detailed cost estimating and strategic pre-construction planning 
                to expert project management and facility upgrades—ensures precision, 
                efficiency, and excellence at every phase.
                </p>

                <Services/>
                
                <p className="text-gray-700 text-lg">
                    Our comprehensive suite of services is just the beginning. 
                    At Jag Construction, we are committed to building strong, 
                    lasting partnerships with our clients. We understand that 
                    each project is unique, which is why we customize our approach 
                    to fit your vision and operational requirements. Let us help 
                    you transform your ideas into reality with quality craftsmanship 
                    and a dedication to excellence that only a veteran-led team 
                    can provide.
                </p>
            </div>
        </section>

        {/* Hero Section 3 with Full Screen Background */}
        <section className="relative h-screen">
            {/* Background Image */}
            <Image
                src={heroImg3}
                alt="Background Image"
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
                    justify-center text-white px-4 space-y-0"
            >
                <h1 className="text-3xl md:text-4xl font-bold">
                    Let's get your project started.
                </h1>
                <p className="max-w-xl mt-4 text-lg text-center">
                Discover how our veteran-led team's unique strengths and steadfast 
                commitment to exceptional craftsmanship seamlessly transform your 
                vision into extraordinary reality.
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
                At Jag Construction, we believe in building strong foundations—both 
                in our projects and in our relationships. Whether you have questions, 
                need expert advice, or are ready to start your next project, we're 
                here to help. Our veteran-led team is dedicated to delivering 
                excellence and innovation at every step of your construction journey.
                </p>
                <br/>
                <p className="text-gray-700 text-lg">
                We're passionate about transforming your vision into reality, and 
                our talented team is ready to help every step of the way. Please 
                use the contact information below to share your project details or 
                ask any questions. We look forward to connecting with you soon!
                </p>
            </div>

            <Contact/>

        </section>

        </Layout>
    );
}

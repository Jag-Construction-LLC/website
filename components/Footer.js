import Link from 'next/link';
import Image from 'next/image';
import whiteJag from '../public/favicon.svg';
import whiteJagText from '../public/favicon2.svg';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-green-950">
            <div className="mx-auto w-full max-w-screen-xl px-4 pt-12 pb-7">
                {/* Top section: Logo, social icons, and nav links */}
                <div 
                    className="flex flex-col items-center text-center 
                        md:flex-row md:justify-between md:text-left"
                >
                    {/* Logo and Social Icons */}
                    <div className="mb-4 md:mb-0">
                        <Link 
                            href="/"
                            className="flex flex-row items-center md:flex-row 
                                md:items-center space-y-2 md:space-y-2 md:space-x-3"
                        >
                            <Image src={whiteJag} width={85} height={85} alt="Jag C Logo" />
                            <Image src={whiteJagText} width={100} height={100} alt="Jag C Logo" />
                        </Link>
                        {/*
                        <div className="flex justify-center mt-5 space-x-5">
                            <Link 
                                href="/"
                                className="text-gray-300 hover:text-blue-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 2.75 18 18"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </Link>
                            <Link 
                                href="/"
                                className="text-gray-300 hover:text-sky-600">
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </Link>
                            <Link 
                                href="/"
                                className="text-gray-300 hover:bg-gradient-to-r 
                                    from-[#833ab4] via-[#fd1d1d] to-[#fcb045] 
                                    hover:rounded-lg"
                            >
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </Link>
                        </div>
                        */}
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-auto mt-6 md:mt-0">
                        <div 
                            className="grid grid-cols-2 gap-8 sm:gap-6 
                                sm:grid-cols-3"
                        >
                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Resources
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href="/"
                                            className="hover:underline"
                                        >
                                            Jag Construction
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/#services"
                                            className="hover:underline"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/#contact"
                                            className="hover:underline"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*
                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Follow us
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href=""
                                            className="hover:underline"
                                        >
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href=""
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href=""
                                            className="hover:underline"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            */}
                            <div>
                                <h2 
                                    className="mb-6 text-sm font-semibold 
                                        text-white uppercase"
                                >
                                    Legal
                                </h2>
                                <ul className="text-gray-300 font-thin space-y-4">
                                    <li>
                                        <Link 
                                            href="/privacypolicy"
                                            className="hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/termsconditions"
                                            className="hover:underline"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-6" />
                {/* Bottom: Copyright */}
                <div 
                    className="flex flex-col items-center sm:flex-row 
                        sm:justify-between"
                >
                    <span className="text-sm font-thin text-gray-300 text-center">
                        © {year} Jag Construction LLC. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

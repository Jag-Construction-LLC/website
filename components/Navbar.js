import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-green-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link 
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/favicon.svg" width={85} height={85} alt="Jag C Logo" />
          <Image src="/favicon3.svg" width={100} height={100} alt="Jag C Logo" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 bg-green-950 md:bg-green-900 border border-gray-100 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link 
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-green-950 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-green-950 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-green-950 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 hover:text-green-950 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

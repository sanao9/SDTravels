"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute top-0 w-full z-10'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-8 w-8"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link href="/">
                <p className=" text-white px-3 py-2 rounded-md text-sm font-medium">Home</p>
              </Link>
              <Link href="/package">
                <p className=" text-white px-3 py-2 rounded-md text-sm font-medium">Package</p>
              </Link>
              <Link href="/destination">
                <p className=" text-white px-3 py-2 rounded-md text-sm font-medium">Destination</p>
              </Link>
              <Link href="/gallery">
                <p className=" text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</p>
              </Link>
              <Link href="/contact">
                <p className=" text-white px-3 py-2 rounded-md text-sm font-medium">Contact</p>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
                <p className=" text-black px-3 py-2 rounded-md text-sm font-medium">Home</p>
              </Link>
              <Link href="/package">
                <p className=" text-black px-3 py-2 rounded-md text-sm font-medium">Package</p>
              </Link>
              <Link href="/destination">
                <p className=" text-black px-3 py-2 rounded-md text-sm font-medium">Destination</p>
              </Link>
              <Link href="/gallery">
                <p className=" text-black px-3 py-2 rounded-md text-sm font-medium">Gallery</p>
              </Link>
              <Link href="/contact">
                <p className=" text-black px-3 py-2 rounded-md text-sm font-medium">Contact</p>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;


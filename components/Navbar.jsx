import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              <Image 
                src="/images/logo.png" 
                alt="TruSkill Marina Solutions Logo" 
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="/#restoration-process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Restoration Process
          </Link>
          <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

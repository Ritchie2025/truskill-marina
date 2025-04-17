import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0f2b3d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="relative h-16 w-48 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="TruSkill Marina Solutions Logo" 
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} TruSkill Marina Solutions. All rights reserved.  
            </p>
            <p className="mt-2">
              We're selective. If you're a marina owner looking for a transformation partner who brings craftsmanship, discretion, and excellence — let's talk.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="/#restoration-process" className="hover:text-blue-300 transition-colors">Restoration Process</a></li>
              <li><a href="/#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Florida, USA</p>
            <a href="mailto:info@truskillhn.com" className="text-blue-300 hover:text-blue-100 transition-colors block mb-2">
              info@truskillhn.com
            </a>
            <a href="mailto:info@truskillhn.com" className="bg-white text-[#0f2b3d] hover:bg-gray-100 px-4 py-2 rounded inline-block mt-2 font-medium transition-colors">
              Request a Private Consultation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

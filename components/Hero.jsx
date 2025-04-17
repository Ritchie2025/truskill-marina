import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Marina with luxury boats and power pedestals"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b3d]/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold">We Don't Build Marinas. We Transform Them.</h1>
          <p className="mt-4 text-lg max-w-xl">
            TruSkill Marina Solutions is trusted by the most elite marina properties to execute world-class upgrades, renovations, and design solutions. 
            We only take on <strong>3–4 marina projects per quarter</strong> to ensure every detail exceeds expectations.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="bg-white text-[#0f2b3d] hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

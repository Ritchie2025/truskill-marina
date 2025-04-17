import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import RestorationProcess from '../components/RestorationProcess';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TruSkill Marina Solutions | Premium Marina Restoration Services</title>
        <meta name="description" content="TruSkill Marina Solutions provides premium marina power pedestal restoration services for elite marinas. We transform deteriorated systems into like-new installations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Hero />
      <Services />
      <RestorationProcess />
      <Contact />
      <Footer />
    </>
  );
}

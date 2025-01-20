'use client';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Tokenomics = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section id='tokenomics' className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Tokenomics
        </h1>
        <p className="text-xl text-gray-300 mb-12" data-aos="fade-up">
          Discover the core principles and structure of the Trump Coin token.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-4">Contract Address</h2>
            <p className="break-all text-gray-400 text-lg">
              CA: 0x00000000000000000000000000000000000000
            </p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl font-semibold mb-4">Total Supply</h2>
            <p className="text-lg text-gray-400">100M</p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="slide-right"
          >
            <h2 className="text-2xl font-semibold mb-4">Liquidity Pool</h2>
            <p className="text-lg text-gray-400">LP Burned</p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="slide-left"
          >
            <h2 className="text-2xl font-semibold mb-4">Buy/Sell Tax</h2>
            <p className="text-lg text-gray-400">0%</p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold mb-4">Ownership</h2>
            <p className="text-lg text-gray-400">Ownership Renounced</p>
          </div>
        </div>
        <p
          className="mt-12 text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          *Transparency and simplicity are at the heart of Trump Coin.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;

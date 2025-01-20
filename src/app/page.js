'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Index/Header';
import Tokenomics from '@/components/Index/Tokenomics';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import Roadmap from '@/components/Index/Roadmap';

const page = () => {
  const [currentImage, setCurrentImage] = useState('/Images/about_trump.webp');

  useEffect(() => {
    const imageSwitcher = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === '/Images/about_trump.webp' ? '/Images/Trump.webp' : '/Images/about_trump.webp'
      );
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(imageSwitcher);
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div className="bg-[#9CD85D] bg-no-repeat bg-cover w-full lg:h-[100vh] flex lg:flex-row flex-col items-center justify-center relative">
        <Image src={currentImage} alt='' width={500} height={500} />
        <Image src={"/Images/about_grass.webp"} className='absolute lg:h-[100vh] z-[5000] w-[80%] top-0 ' alt='' width={200} height={200} />
        <Header />
        <div className="flex items-center px-[7%] w-full z-[5000] flex-col gap-3">
          <p className="text-gray-200 text-center animated-text">
            Learn about the revolutionary token powering the AID TRUMP ecosystem and driving decentralized innovation.
          </p>
          <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 1 }}
          >
            <p className="text-white text-[80px] text-center leading-none">
              Welcome to Meme <br /> TrumpCoin (TRUMP)
            </p>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-900 py-[4%] flex flex-col gap-10">
        <Marquee direction="left">
          {/* Marquee images */}
        </Marquee>
        <Marquee direction="right">
          {/* Marquee images */}
        </Marquee>
      </div>
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

export default page;

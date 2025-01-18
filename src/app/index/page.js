'use client';
import Header from '@/components/Index/Header';
import Tokenomics from '@/components/Index/Tokenomics';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import Roadmap from '@/components/Index/Roadmap';

const page = () => {

    return (
        <div>
            <div className="bg-[url('/Images/img.jpg')] bg-no-repeat bg-cover w-full h-[100vh] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#102533] bg-opacity-85 z-[100]"></div>

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
                    <Image src="/Images/trump1.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump2.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump3.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump4.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump5.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump6.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump7.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump8.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                </Marquee>
                <Marquee direction="right">
                    <Image src="/Images/trump1.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump2.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump3.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump4.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump5.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump6.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump7.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                    <Image src="/Images/trump8.jpg" width={500} height={500} alt="" className="rounded-lg lg:h-[300px] lg:w-[300px] mr-3" />
                </Marquee>
            </div>
            <Tokenomics />
            <Roadmap />
        </div>
    );
};

export default page;

'use client';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Image from 'next/image';

const Roadmap = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false
        });
    }, []);

    const milestones = [
        {
            phase: 'Phase 1',
            title: 'Launch Preparation',
            description:
                'Finalize tokenomics, smart contract audit, and community engagement strategy.',
            animation: 'fade-right',
        },
        {
            phase: 'Phase 2',
            title: 'Token Launch',
            description:
                'Official token launch, listing on decentralized exchanges, and liquidity pool setup.',
            animation: 'fade-left',
        },
        {
            phase: 'Phase 3',
            title: 'Ecosystem Development',
            description:
                'Start ecosystem development, onboard partnerships, and release community rewards.',
            animation: 'fade-up',
        },
        {
            phase: 'Phase 4',
            title: 'Global Adoption',
            description:
                'Expand marketing efforts, introduce governance mechanisms, and enable staking.',
            animation: 'zoom-in',
        },
        {
            phase: 'Phase 5',
            title: 'Future Expansion',
            description:
                'Launch new utilities, explore cross-chain solutions, and maintain long-term sustainability.',
            animation: 'flip-right',
        },
    ];

    return (
        <section id='roadmap' className="bg-gradient-to-b from-[#111827] to-[#4B6486] text-white py-16 relative">
            <Image src={"/Images/cloud.webp"} width={190} className='absolute top-1 animate-moveLeft' height={190} alt='' />
            <Image src={"/Images/cloud.webp"} width={190} className='absolute top-1 right-2 animate-moveLeft' height={190} alt='' />
            <div className="max-w-7xl mx-auto px-6">
                <h2
                    className="text-4xl font-bold text-center mb-12"
                    data-aos="fade-down"
                >
                    Roadmap
                </h2>
                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } items-center md:items-start gap-6`}
                            data-aos={milestone.animation}
                        >
                            {/* Phase Circle */}
                            <div className="flex-shrink-0 bg-blue-500 w-20 h-20 text-center rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {milestone.phase}
                            </div>
                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {milestone.title}
                                </h3>
                                <p className="text-lg text-gray-300">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

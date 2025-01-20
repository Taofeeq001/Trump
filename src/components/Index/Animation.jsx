"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const { scrollY } = useScroll();
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => setScrollOffset(latest));
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className="relative w-full h-[150vh] bg-gradient-to-b from-blue-300 to-blue-500 overflow-hidden">
            {/* Clouds */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        top: `${i * 10 + 5}%`, // Adjusting vertical positions
                        left: `${i % 2 === 0 ? i * 8 : i * 12}%`, // Alternating left positions
                    }}
                    animate={{
                        x: [0, 30, -30, 0],
                    }}
                    transition={{
                        duration: 10 + i * 0.5, // Slight variation in durations
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                    }}
                >
                    <Image
                        src="/Images/cloud.webp"
                        alt="Cloud"
                        width={120 + i * 10} // Slightly smaller clouds
                        height={60 + i * 5}
                        className="opacity-70"
                    />
                </motion.div>
            ))}

            {/* Airplane */}
            <motion.div
                className="absolute w-48 h-32"
                style={{
                    top: `calc(90% - ${scrollOffset / 3}px)`,
                    left: `calc(10% + ${scrollOffset / 4}px)`,
                }}
                animate={{
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/Images/aeroplane.png"
                    alt="Airplane"
                    width={500}
                    height={500}
                />
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full text-center text-white">
                <p className="text-lg font-semibold animate-bounce">Scroll to explore 🌤️✈️</p>
            </div>
        </div>
    );
}

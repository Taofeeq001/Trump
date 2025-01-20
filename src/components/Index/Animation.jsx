"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const { scrollY } = useScroll();
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        return scrollY.onChange((latest) => setScrollOffset(latest));
    }, [scrollY]);

    return (
        <div className="relative w-full h-[300vh] bg-gradient-to-b from-blue-300 to-blue-500 overflow-hidden">
            {/* Cloud Background */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        top: `${i * 15}%`,
                        left: `${i * 10}%`,
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                >
                    <Image
                        src="/Images/cloud.webp"
                        alt="Cloud"
                        width={150 + i * 20}
                        height={75 + i * 10}
                        className="opacity-70"
                    />
                </motion.div>
            ))}

            {/* Plane */}
            <motion.div
                className="absolute w-48 h-32"
                style={{
                    top: `calc(90% - ${scrollOffset}px)`,
                    left: `calc(20% + ${scrollOffset / 2}px)`,
                }}
            >
                <Image
                    src="/Images/aeroplane.png"
                    alt="Airplane"
                    objectFit="contain"
                    width={500}
                    height={500}
                />
            </motion.div>
            <div className="absolute bottom-10 w-full text-center text-white">
                <p className="text-lg font-semibold animate-bounce">Scroll to explore</p>
            </div>
        </div>
    );
}

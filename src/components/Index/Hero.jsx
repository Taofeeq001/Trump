'use client';
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";

const Hero = () => {
    const router = useRouter();
    const audioRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (buttonRef.current) {
                buttonRef.current.click();
            }
        };
        playAudio();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const handleAudioPlay = () => {
        const anthem = audioRef.current;
        anthem.play().catch((error) => {
            console.error('Audio play failed:', error);
        });
    };

    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        >
            <video
                src="/Eagle-Front.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <Typewriter
                        options={{
                            strings: ["Welcome Back, President Trump!"],
                            autoStart: true,
                            loop: true,
                            delay: 70,
                            deleteSpeed: 80,
                        }}
                    />
                </h1>
                <p className="text-xl md:text-2xl">A Nation United Awaits</p>
                <button
                    className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500"
                    onClick={() => router.push('/index')}
                >
                    Join the Movement
                </button>
                <button
                    ref={buttonRef}
                    style={{ display: 'none' }}
                    onClick={handleAudioPlay}
                />
                {/* Hidden Audio Element */}
                <audio ref={audioRef} src="/bensound-epic.mp3" />
            </div>
        </section>
    );
};

export default Hero;

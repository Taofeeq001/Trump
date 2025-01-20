"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Detect scroll to apply blur and shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile navigation menu
    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
    };

    return (
        <header
            className={`py-4 z-[5000] fixed top-0 w-full transition-all duration-300 ${isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-bold text-black">Trump</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4 text-black">
                    <a href="#achievements" className="hover:underline">
                        Achievements
                    </a>
                    <a href="#tokenomics" className="hover:underline">
                        Tokenomics
                    </a>
                    <a href="#roadmap" className="hover:underline">
                        Roadmap
                    </a>
                </nav>

                {/* Social Media Icons */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="w-[40px] h-[40px] rounded-full border-blue-500 border flex items-center justify-center"><Image src={"/Images/x-icon.svg"} width={25} height={25} alt="" /></div>
                    <div className="w-[40px] h-[40px] rounded-full border-blue-500 border flex items-center justify-center"><Image src={"/Images/tele-icon.svg"} width={25} height={25} alt="" /></div>
                    <div className="w-[40px] h-[40px] rounded-full border-blue-500 border flex items-center justify-center"><Image src={"/Images/tele-icon.svg"} width={25} height={25} alt="" /></div>
                    <div className="w-[40px] h-[40px] rounded-full border-blue-500 border flex items-center justify-center"><Image src={"/Images/tele-icon.svg"} width={25} height={25} alt="" /></div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileNav}
                    className="md:hidden flex items-center text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileNavOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-2 px-4 bg-white shadow-md rounded-lg">
                    <a
                        href="#achievements"
                        onClick={() => setIsMobileNavOpen(false)}
                        className="block text-sm text-black hover:underline"
                    >
                        Achievements
                    </a>
                    <a
                        href="#tokenomics"
                        onClick={() => setIsMobileNavOpen(false)}
                        className="block text-sm text-black hover:underline"
                    >
                        Tokenomics
                    </a>
                    <a
                        href="#roadmap"
                        onClick={() => setIsMobileNavOpen(false)}
                        className="block text-sm text-black hover:underline"
                    >
                        Roadmap
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/#varieties', label: 'OUR VARIETIES' },
    { href: '/#contact', label: 'CONTACT' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { scrollYProgress } = useScroll();
    const headerBg = useTransform(
        scrollYProgress,
        [0, 0.25, 0.45, 0.75, 1],
        ['rgba(13, 167, 214, 0)', '#f3d6d9', '#FFF44F', '#FFD700', '#003366']
    );

    return (
        <motion.header
            style={{ backgroundColor: headerBg }}
            className={`fixed z-[100] transition-all duration-500 ${scrolled
                ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl rounded-full backdrop-blur-md shadow-2xl py-1 border border-white/20'
                : 'top-0 left-0 right-0 w-full py-6'
                }`}
        >
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between w-full">
                    {/* Logo - Fully Round, No Box */}
                    <Link href="/" className="flex items-center group">
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className={`relative rounded-full overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg border-2 border-white/20 ${scrolled ? 'w-12 h-12 md:w-16 md:h-16' : 'w-20 h-20 md:w-28 md:h-28'}`}
                        >
                            <Image
                                src="/Logo.png"
                                alt="Desi Dahi Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Right Section: Desktop Socials + Circular Menu Button */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>

                        {/* Circular Hamburger Menu - Black on white navbar */}
                        <button
                            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${scrolled
                                ? 'bg-black text-white shadow-xl hover:bg-brand-blue hover:rotate-180'
                                : 'bg-white text-brand-blue shadow-lg hover:bg-brand-blue-light hover:text-white hover:rotate-180'
                                } shadow-black/10 hover:scale-110 active:scale-95`}
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu - Chhaswala Style */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="fixed top-0 left-0 w-full h-[100dvh] z-[9999] bg-brand-blue flex flex-col items-center justify-center p-8 overflow-hidden touch-none"
                    >
                        {/* Closing Button */}
                        <button
                            className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-all hover:rotate-90"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-8"
                            >
                                <Image
                                    src="/Logo.png"
                                    alt="Desi Dahi Logo"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <div className="flex flex-col items-center gap-4 md:gap-6">
                                {navLinks.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-white text-3xl md:text-5xl font-black hover:text-brand-yellow transition-all tracking-tighter hover:scale-110 block uppercase"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Socials at Bottom of Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-12 flex gap-8"
                        >
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white transition-all hover:text-brand-blue hover:scale-110">
                                    <Icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

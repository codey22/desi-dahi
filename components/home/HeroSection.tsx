'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue">
            {/* Chhaswala-inspired Vibrant Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-cyan-400 opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left text-white"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-script text-4xl md:text-5xl lg:text-6xl mb-4 block drop-shadow-lg"
                        >
                            Thandi, Meethi, Paustic
                        </motion.span>
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-8 leading-[0.85] tracking-tighter drop-shadow-2xl"
                            >
                                DESI <br />
                                <span className="text-white/90">DAHI</span>
                            </motion.h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-2xl font-medium mb-12 max-w-xl mx-auto lg:mx-0 text-white/80 leading-relaxed"
                        >
                            Celebrating Milky Goodness. Experience the authentic taste of tradition in every drop.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <Link href="#varieties">
                                <button className="px-10 py-5 bg-brand-blue-light text-white rounded-full font-black text-xl flex items-center gap-3 hover:bg-black hover:text-white transition-all group shadow-2xl hover:scale-105 active:scale-95">
                                    EXPLORE VARIETIES
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Floating Product Render */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-[500px] md:h-[700px] flex items-center justify-center"
                    >
                        {/* Realistic Floating Shadows */}
                        <div className="absolute bottom-10 w-[60%] h-20 bg-black/20 blur-[60px] rounded-full scale-110" />

                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative flex items-center justify-center p-10"
                            >
                                <div className="relative w-72 h-96 bg-gradient-to-b from-[#8B4513] to-[#4A3728] rounded-[40%] rounded-t-[20%] shadow-2xl overflow-hidden shadow-black/40">
                                    <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/20 to-transparent" />
                                    <div className="absolute bottom-1/2 left-0 w-full h-1 bg-black/20" />
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30" />
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[20%] right-0 bg-white p-4 rounded-3xl shadow-2xl text-brand-blue font-black flex items-center gap-3 -rotate-12 border border-brand-blue/10"
                            >
                                <span className="text-2xl">100%</span>
                                <span className="text-sm leading-tight uppercase">pure a2<br />cow milk</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Curve transition to next section (Pink/Cream) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.48,143.31,131.35,224.22,120.83,284.51,113,321.39,56.44,321.39,56.44Z" className="fill-[#f3d6d9]"></path>
                </svg>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OurStory() {
    return (
        <section id="about" className="relative py-32 overflow-hidden bg-brand-pink transition-colors duration-1000">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] -mr-96 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] -ml-96 -mb-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/Photo 2.jpg"
                                alt="Traditional Desi Dahi Process"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                        {/* Decorative floating badge */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-blue-light text-white p-6 md:p-8 rounded-[2rem] shadow-2xl"
                        >
                            <span className="font-script text-3xl block mb-1">Traditional</span>
                            <span className="font-black text-4xl block leading-none">VILLAGE<br />ARTISTRY</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <span className="font-script text-4xl md:text-5xl text-brand-blue block text-white drop-shadow-sm">Thandi & Meethi</span>
                            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase drop-shadow-xl">
                                OUR STORY
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-xl md:text-2xl text-blue-900/70 leading-relaxed font-semibold">
                                Celebrating <span className="text-white drop-shadow-md">Milky Goodness</span> Every drop of Desi Dahi reflects our passion for purity and heritage.
                            </p>
                            <p className="text-lg md:text-xl text-blue-900/60 leading-relaxed font-medium">
                                Inspired by traditional village methods, we revive the authentic taste using pure A2 cow milk from local farmers. Our slow-cultured process ensures the thickest, creamiest texture you've ever experienced.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8"
                        >
                            <Link href="/about">
                                <button className="px-12 py-5 bg-black text-white rounded-full font-black text-xl hover:bg-brand-blue transition-all shadow-xl hover:scale-105 active:scale-95 leading-none">
                                    READ FULL STORY
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Transition Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.48,143.31,131.35,224.22,120.83,284.51,113,321.39,56.44,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section >
    );
}

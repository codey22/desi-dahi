'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-brand-blue overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-cyan-400 opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-script text-5xl md:text-6xl block mb-4 drop-shadow-lg"
                    >
                        Thandi, Meethi, Paustic
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl"
                    >
                        ABOUT US
                    </motion.h1>

                </div>
            </section>

            {/* Our Heritage */}
            <section className="py-24 bg-brand-cream">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase">
                                Our Heritage
                            </h2>
                            <p className="text-xl text-black/70 leading-relaxed">
                                Since 1994, Desi Dahi has been a trusted name in authentic, traditional curd-making. Our journey began in a small village dairy, where our founders perfected the art of creating the creamiest, most flavorful dahi using time-honored techniques passed down through generations.
                            </p>
                            <p className="text-xl text-black/70 leading-relaxed">
                                Today, we continue to honor that legacy by sourcing only the finest A2 cow milk from local farmers and maintaining our commitment to purity, quality, and tradition.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/Photo 1.jpg"
                                alt="Our Heritage"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="font-script text-4xl text-brand-blue block mb-4">Traditional Methods</span>
                        <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase">
                            Our Process
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Pure A2 Milk",
                                description: "We source only the finest A2 cow milk from trusted local farmers who share our commitment to quality and animal welfare."
                            },
                            {
                                title: "Slow Culturing",
                                description: "Our traditional slow-culturing process ensures the perfect balance of thickness, creaminess, and authentic taste."
                            },
                            {
                                title: "Quality Control",
                                description: "Every batch is carefully monitored and tested to ensure it meets our exacting standards for purity and freshness."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-brand-cream rounded-[3rem] p-10 text-center"
                            >
                                <h3 className="text-3xl font-black text-black mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-black/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-blue text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
                            TASTE THE TRADITION
                        </h2>
                        <p className="text-2xl font-medium">
                            Experience the authentic taste of Desi Dahi today
                        </p>
                        <Link href="/#varieties">
                            <button className="px-12 py-6 bg-black text-white rounded-full font-black text-xl hover:bg-white hover:text-black transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto border-2 border-transparent hover:border-black">
                                EXPLORE VARIETIES
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

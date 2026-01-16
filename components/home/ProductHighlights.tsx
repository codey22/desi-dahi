'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: "pure-desi-dahi",
        name: "Pure Desi Dahi",
        tagline: "Authentic & Creamy",
        image: "/Photo 1.jpg",
        color: "brand-blue",
        details: "100% Pure A2 Cow Milk Dahi"
    },
    {
        id: "mishti-doi",
        name: "Mishti Doi",
        tagline: "Classic Sweet Delight",
        image: "/Photo 2.jpg",
        color: "brand-pink",
        details: "Traditional Bengali Style Sweet Curd"
    },
    {
        id: "a2-cow-curd",
        name: "A2 Cow Curd",
        tagline: "Probiotic Goodness",
        image: "/Photo 3.jpg",
        color: "brand-green",
        details: "Fresh & Healthy Daily Essential"
    }
];

export default function ProductHighlights() {
    return (
        <section id="varieties" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="font-script text-3xl text-brand-blue block mb-4">Purely Traditional</span>
                    <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase">
                        CHOOSE YOUR <br />FAVORITE
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Product Card - Image Area */}
                            <div className="relative bg-brand-cream rounded-[3rem] p-12 mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
                                <motion.div
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{ duration: 4, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-full aspect-square"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-700"
                                    />
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center w-full">
                                <h3 className="text-3xl font-black text-black mb-2 tracking-tight">
                                    {product.name}
                                </h3>
                                <p className="text-black/60 font-medium mb-8">
                                    {product.tagline}
                                </p>
                                <Link href={`/product/${product.id}`} className="w-full">
                                    <button className="w-full bg-black text-white py-5 rounded-full font-black text-lg tracking-tight shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all">
                                        ORDER NOW
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

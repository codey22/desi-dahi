'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Delhi',
        text: 'The best dahi I have ever tasted! It reminds me of my grandmother\'s homemade curd. The taste is so authentic and fresh.',
        rating: 5,
        role: "Verified Customer"
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        location: 'Mumbai',
        text: 'Finally found a brand that delivers on its promise. Pure, natural, and absolutely delicious. My family loves it!',
        rating: 5,
        role: "Food Blogger"
    },
    {
        id: 3,
        name: 'Anjali Patel',
        location: 'Ahmedabad',
        text: 'The Mishti Doi is heavenly! Takes me back to my childhood in Bengal. Thank you for bringing this authentic taste.',
        rating: 5,
        role: "Verified Customer"
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="relative py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <span className="font-script text-4xl text-brand-blue block">Swaad aur Pyaar</span>
                        <h2 className="text-5xl md:text-8xl font-black text-brand-blue-dark uppercase tracking-tighter leading-[0.8] drop-shadow-sm">
                            HAPPY <br /> CUSTOMERS
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative px-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#fdfaf6] rounded-[4rem] p-12 md:p-20 text-center relative border border-brand-blue/5 shadow-2xl shadow-brand-blue/5"
                        >
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Quote className="absolute top-10 left-10 w-20 h-20 text-brand-blue/5 -rotate-12" />

                                <div className="flex justify-center gap-1 mb-10">
                                    {[...Array(testimonials[index].rating)].map((_, i) => (
                                        <Star key={i} className="w-8 h-8 fill-brand-blue text-brand-blue" />
                                    ))}
                                </div>

                                <p className="font-script text-3xl md:text-5xl text-gray-800 leading-tight mb-12">
                                    "{testimonials[index].text}"
                                </p>

                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black text-brand-blue-dark uppercase tracking-tight">{testimonials[index].name}</h4>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{testimonials[index].role} — {testimonials[index].location}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none">
                        <button onClick={prev} className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all pointer-events-auto hover:scale-110 active:scale-95">
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button onClick={next} className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all pointer-events-auto hover:scale-110 active:scale-95">
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

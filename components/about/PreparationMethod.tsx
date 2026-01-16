'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Milk, Droplets, Clock, Package } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        icon: Milk,
        title: 'Fresh A2 Milk Collection',
        description: 'We collect fresh milk from our own dairy farm every morning. Our cows are grass-fed and produce pure A2 beta-casein milk.',
    },
    {
        icon: Droplets,
        title: 'Traditional Boiling',
        description: 'The milk is gently boiled and cooled to the perfect temperature, following traditional methods that preserve all nutrients.',
    },
    {
        icon: Clock,
        title: 'Clay Pot Fermentation',
        description: 'We use traditional clay pots for fermentation, which naturally regulate temperature and add minerals to the curd.',
    },
    {
        icon: Package,
        title: 'Fresh Packaging',
        description: 'Once perfectly set, the curd is carefully packaged and delivered fresh to your doorstep within hours.',
    },
];

export default function PreparationMethod() {
    return (
        <section className="py-16">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-desi">
                    Traditional Preparation Method
                </h2>
                <p className="text-center text-desi-brown text-lg mb-16 max-w-2xl mx-auto">
                    Time-honored techniques for authentic taste and maximum nutrition
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            {/* Step Number */}
                            <div className="absolute top-4 right-4 text-6xl font-bold text-desi-yellow/20 group-hover:text-desi-yellow/40 transition-colors">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="mb-4 relative z-10">
                                <div className="w-16 h-16 bg-desi-yellow/20 rounded-full flex items-center justify-center group-hover:bg-desi-yellow/30 transition-colors">
                                    <step.icon className="w-8 h-8 text-desi-maroon" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-desi-maroon mb-3 relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-12">
                <Link href="/products/pure-desi-dahi" target="_blank" className="px-4 py-2 rounded-full bg-brand-yellow text-brand-maroon font-semibold hover:bg-brand-yellow-dark transition-colors">
                    Pure Desi Dahi
                </Link>
                <Link href="/products/mishti-doi" target="_blank" className="px-4 py-2 rounded-full border-2 border-brand-yellow text-brand-maroon hover:bg-brand-yellow transition-colors">
                    Mishti Doi
                </Link>
                <Link href="/products/a2-cow-curd" target="_blank" className="px-4 py-2 rounded-full bg-brand-maroon text-white font-semibold hover:bg-brand-maroon-dark transition-colors">
                    A2 Cow Curd
                </Link>
                <Link href="/products/desi-lassi" target="_blank" className="px-4 py-2 rounded-full bg-brand-yellow text-brand-maroon font-semibold hover:bg-brand-yellow-dark transition-colors">
                    Desi Lassi
                </Link>
            </div>
        </section>
    );
}

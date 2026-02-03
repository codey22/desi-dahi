'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
    product: any;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <Link href={`/products/${product.slug}`} target="_blank">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer h-full border-2 border-transparent hover:border-brand-yellow/30">
                    <div className="relative h-72 overflow-hidden bg-brand-cream-light">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 right-4 bg-brand-yellow text-brand-maroon px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                            {product.category.replace('-', ' ').toUpperCase()}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 bg-white">
                        <h3 className="text-2xl font-bold text-brand-maroon mb-2 group-hover:text-brand-terracotta transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-3xl font-bold text-brand-brown">
                                {formatCurrency(product.price)}
                            </span>
                            <span className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-gray-800 transition-colors shadow-md group-hover:shadow-lg transform group-hover:scale-105">
                                View Details
                            </span>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}

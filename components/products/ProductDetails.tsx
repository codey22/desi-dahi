'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ProductDetailsProps {
    product: any;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
        >
            {/* Category Badge */}
            <div className="inline-block bg-desi-yellow text-desi-maroon-dark px-4 py-2 rounded-full text-sm font-semibold">
                {product.category.replace('-', ' ').toUpperCase()}
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-desi-maroon">
                {product.name}
            </h1>

            {/* Price */}
            <div className="text-4xl font-bold text-desi-brown">
                {formatCurrency(product.price)}
                <span className="text-lg text-gray-600 font-normal ml-2">per unit</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
            </p>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold text-desi-maroon mb-4">Benefits</h3>
                    <ul className="space-y-3">
                        {product.benefits.map((benefit: string, index: number) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                            >
                                <Check className="w-6 h-6 text-desi-saffron flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{benefit}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Add to Cart Button (UI Only) */}
            <div className="pt-6">
                <Button
                    size="lg"
                    className="w-full bg-desi-maroon hover:bg-desi-maroon-dark text-white py-6 text-lg font-semibold"
                    onClick={() => alert('Add to cart functionality coming soon!')}
                >
                    Add to Cart
                </Button>
                <p className="text-sm text-gray-500 text-center mt-2">
                    Free delivery on orders above ₹500
                </p>
            </div>
        </motion.div>
    );
}

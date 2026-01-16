'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'dahi', label: 'Desi Dahi' },
    { id: 'mishti-doi', label: 'Mishti Doi' },
    { id: 'a2-curd', label: 'A2 Curd' },
    { id: 'lassi', label: 'Lassi' },
];

export default function ProductFilters() {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category.id
                            ? 'bg-desi-maroon text-white shadow-lg'
                            : 'bg-white text-desi-maroon border-2 border-desi-maroon hover:bg-desi-maroon hover:text-white'
                        }`}
                >
                    {category.label}
                </motion.button>
            ))}
        </div>
    );
}

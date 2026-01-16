'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface SmoothScrollWrapperProps {
    children: ReactNode;
}

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Chhaswala-inspired Color Transitions
    // 0.0 -> Hero (Vibrant Blue)
    // 0.25 -> Story (Soft Pink)
    // 0.45 -> Varieties (Lemon Yellow)
    // 0.75 -> Testimonials (Yellow)
    // 1.0 -> Footer (Deep Brand Blue)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.45, 0.75, 1],
        ['#0da7d6', '#f3d6d9', '#FFF44F', '#FFD700', '#003366']
    );

    return (
        <motion.div
            style={{ backgroundColor: mounted ? backgroundColor : '#0da7d6' }}
            className="min-h-screen transition-colors duration-1000"
        >
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

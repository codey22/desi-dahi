'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from '@/lib/gsap-utils';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = '',
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const element = elementRef.current;

        // Set initial state based on direction
        const initialState: gsap.TweenVars = {
            opacity: 0,
        };

        switch (direction) {
            case 'up':
                initialState.y = 60;
                break;
            case 'down':
                initialState.y = -60;
                break;
            case 'left':
                initialState.x = 60;
                break;
            case 'right':
                initialState.x = -60;
                break;
        }

        gsap.set(element, initialState);

        // Create scroll trigger animation
        gsap.to(element, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        });
    }, [direction, delay]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}

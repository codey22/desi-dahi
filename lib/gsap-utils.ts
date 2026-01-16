import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Common animation presets
export const fadeInUp = {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power3.out',
};

export const fadeIn = {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
};

export const scaleIn = {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
};

export const slideInLeft = {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
};

export const slideInRight = {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
};

// ScrollTrigger configuration helper
export const createScrollTrigger = (trigger: string, options = {}) => ({
    scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...options,
    },
});

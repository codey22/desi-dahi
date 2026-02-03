'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="relative bg-brand-blue text-white pt-32 pb-16 overflow-hidden">
            {/* Soft pink wave transition at the top from the section before (if applicable) */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="mb-10 group">
                            <div className="relative w-48 h-48 bg-white rounded-full p-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 shadow-2xl flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/Logo.png"
                                    alt="Desi Dahi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-white/80 font-medium leading-relaxed mb-10 max-w-xs">
                            Celebrating Milky Goodness. The authentic taste of tradition in every drop.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all duration-300 hover:scale-110 active:scale-95"
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Groups */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-xl font-black uppercase tracking-widest mb-8 text-white">Explore</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Home', href: '/#hero' },
                                    { label: 'About Us', href: '/about' },
                                    { label: 'Varieties', href: '/products' },
                                    { label: 'Contact', href: '#footer' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link 
                                            href={item.href} 
                                            className="text-white/60 hover:text-white transition-colors font-bold uppercase tracking-tight"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-xl font-black uppercase tracking-widest mb-8 text-white">Deliciousness</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Pure Desi Dahi', href: '/products/pure-desi-dahi' },
                                    { label: 'Mishti Doi', href: '/products/mishti-doi' },
                                    { label: 'A2 Cow Curd', href: '/products/a2-cow-curd' },
                                    { label: 'Lassi & Buttermilk', href: '/products/desi-lassi' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-white/60 hover:text-white transition-colors font-bold uppercase tracking-tight">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-xl font-black uppercase tracking-widest mb-8 text-white">Get in Touch</h4>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-white/80 font-bold">+91 9876543210</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-white/80 font-bold">hello@desidahi.com</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-white/80 font-bold">
                                        Kolkata, India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Desi Dahi. Crafted with Purity.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors uppercase tracking-widest font-black">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors uppercase tracking-widest font-black">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

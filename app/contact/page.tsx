import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxSection from '@/components/animations/ParallaxSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - Desi Dahi | Get in Touch',
    description: 'Have questions about our products? Contact Desi Dahi for inquiries, orders, or feedback. We\'re here to help!',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-desi-cream via-brand-yellow/10 to-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <ParallaxSection speed={0.12}>
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gradient-desi">
                            Get in Touch
                        </h1>
                        <p className="text-center text-desi-brown text-lg mb-16 max-w-2xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </ScrollReveal>
                </ParallaxSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <ScrollReveal direction="left">
                        <ContactForm />
                    </ScrollReveal>

                    {/* Contact Information */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-desi-maroon mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-700 mb-8">
                                    Feel free to reach out to us through any of the following channels. We're always happy to help!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-desi-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-desi-maroon" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-desi-maroon mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            Village Dairy Farm<br />
                                            Punjab, India - 140001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-desi-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-desi-maroon" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-desi-maroon mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 9876543210</p>
                                        <p className="text-sm text-gray-500">Mon-Sat: 8:00 AM - 8:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-desi-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-desi-maroon" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-desi-maroon mb-1">Email</h3>
                                        <p className="text-gray-600">info@desidahi.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-desi-yellow-light p-6 rounded-lg border-l-4 border-desi-maroon mt-8">
                                <h3 className="font-bold text-desi-maroon mb-2">Business Hours</h3>
                                <p className="text-gray-700">
                                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                                    Sunday: 9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
            {/* Decorative shapes */}
            <div className="absolute top-6 left-6 w-36 h-36 bg-brand-yellow rounded-full opacity-20 blur-3xl animate-float" />
            <div className="absolute bottom-10 right-6 w-48 h-48 bg-desi-saffron rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
    );
}

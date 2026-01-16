import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandStory() {
    return (
        <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <ScrollReveal direction="left">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-desi-maroon">
                            Our Heritage
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Desi Dahi was born from a simple dream – to bring the authentic taste of traditional village dairy to modern homes. Our founders grew up in rural Punjab, where every household made their own curd using age-old methods passed down through generations.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            What started as a small family operation has grown into a trusted brand, but our core values remain unchanged. We still use the same traditional clay pot fermentation method, the same pure A2 cow milk, and the same dedication to quality that our grandparents taught us.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link href="/products/pure-desi-dahi" target="_blank" className="px-4 py-2 rounded-full bg-brand-yellow text-brand-maroon font-semibold hover:bg-brand-yellow-dark transition-colors">
                                Explore Pure Desi Dahi
                            </Link>
                            <Link href="/products/mishti-doi" target="_blank" className="px-4 py-2 rounded-full border-2 border-brand-yellow text-brand-maroon hover:bg-brand-yellow transition-colors">
                                Explore Mishti Doi
                            </Link>
                            <Link href="/products/a2-cow-curd" target="_blank" className="px-4 py-2 rounded-full bg-brand-maroon text-white font-semibold hover:bg-brand-maroon-dark transition-colors">
                                Explore A2 Cow Curd
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg"
                            alt="Traditional dairy farm"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="left">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.pexels.com/photos/6544380/pexels-photo-6544380.jpeg"
                            alt="Fresh desi dahi"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-desi-maroon">
                            Our Commitment
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We believe that good food starts with happy, healthy animals. Our cows graze freely in lush green pastures, are treated with love and respect, and are never given hormones or antibiotics.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Every batch of Desi Dahi is made fresh daily, ensuring you get the maximum nutritional benefits and the most authentic taste. We never use preservatives, artificial flavors, or shortcuts – just pure, wholesome goodness.
                        </p>
                        <div className="bg-desi-yellow-light p-6 rounded-lg border-l-4 border-desi-maroon">
                            <p className="text-desi-maroon font-semibold italic">
                                "Our mission is simple: to make the healthiest, most delicious dahi that honors our traditions while nourishing modern families."
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Link href="/products/desi-lassi" target="_blank" className="px-4 py-2 rounded-full bg-brand-yellow text-brand-maroon font-semibold hover:bg-brand-yellow-dark transition-colors">
                                Explore Desi Lassi
                            </Link>
                            <Link href="/products" className="px-4 py-2 rounded-full border-2 border-brand-yellow text-brand-maroon hover:bg-brand-yellow transition-colors">
                                View All Products
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

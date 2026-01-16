import Image from 'next/image';
import Link from 'next/link';

// Dummy data for products
const products: Record<string, { name: string; tagline: string; description: string; image: string; color: string; price: string; weight: string }> = {
    "pure-desi-dahi": {
        name: "Pure Desi Dahi",
        tagline: "Authentic & Creamy",
        description: "Our signature Pure Desi Dahi is made from 100% A2 Cow Milk using traditional slow-culturing methods. It's thick, creamy, and packed with natural probiotics. Perfect for daily consumption, lasis, or cooking.",
        image: "/Photo 1.jpg",
        color: "bg-brand-blue",
        price: "₹80",
        weight: "500g"
    },
    "mishti-doi": {
        name: "Mishti Doi",
        tagline: "Classic Sweet Delight",
        description: "A Bengali classic brought to your home. Our Mishti Doi is caramelized to perfection, offering a rich, sweet, and nutty flavor that melts in your mouth. Made with reduced milk and natural sugar.",
        image: "/Photo 2.jpg",
        color: "bg-brand-pink",
        price: "₹120",
        weight: "400g"
    },
    "a2-cow-curd": {
        name: "A2 Cow Curd",
        tagline: "Probiotic Goodness",
        description: "Experience the health benefits of pure A2 Beta-casein milk. This curd is easier to digest and gentler on the stomach, making it an excellent choice for health-conscious families.",
        image: "/Photo 3.jpg",
        color: "bg-brand-green",
        price: "₹100",
        weight: "400g"
    }
};

export function generateStaticParams() {
    return [
        { id: 'pure-desi-dahi' },
        { id: 'mishti-doi' },
        { id: 'a2-cow-curd' }
    ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products[params.id];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-cream">
                <h1 className="text-4xl font-black text-brand-blue">Product Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-cream pt-24">
            <div className="container mx-auto px-6 py-12">
                <Link href="/#varieties" className="inline-block mb-8 text-black/60 font-bold hover:text-black transition-colors">
                    ← BACK TO VARIETIES
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Visual Side */}
                    <div className="relative">
                        <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white p-8">
                            <div className={`absolute inset-0 opacity-10 ${product.color}`} />
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <span className="font-script text-4xl text-brand-blue block mb-2">{product.tagline}</span>
                            <h1 className="text-6xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none">
                                {product.name}
                            </h1>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-4xl font-black text-black">{product.price}</span>
                            <span className="text-xl font-bold text-black/40">/ {product.weight}</span>
                        </div>

                        <p className="text-xl text-black/70 leading-relaxed font-medium">
                            {product.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-lg font-black uppercase text-black/40 tracking-widest">Description</h3>
                            <p className="text-black/60 leading-relaxed">
                                Experience the rich, creamy texture that only comes from traditional slow-setting methods. Our {product.name} is crafted with care, ensuring every spoonful is packed with flavor and health benefits. Perfect for making smoothies, marinades, or enjoying straight from the pot.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8 border-t border-black/10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded-2xl">
                                    <span className="block text-sm font-bold text-black/40 mb-1">Type</span>
                                    <span className="block text-lg font-black text-black">Vegetarian</span>
                                </div>
                                <div className="p-4 bg-white rounded-2xl">
                                    <span className="block text-sm font-bold text-black/40 mb-1">Shelf Life</span>
                                    <span className="block text-lg font-black text-black">15 Days</span>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-black text-white rounded-full font-black text-xl hover:bg-brand-blue transition-all shadow-xl hover:scale-105 active:scale-95">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

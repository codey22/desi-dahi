import { Metadata } from 'next';
import { products as staticProducts } from '@/lib/static-data';
import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxSection from '@/components/animations/ParallaxSection';

export const metadata: Metadata = {
    title: 'Our Products - Desi Dahi | Pure A2 Cow Milk Curd',
    description: 'Explore our range of authentic desi dairy products including Pure Desi Dahi, Mishti Doi, A2 Cow Curd, and Lassi. Made with traditional methods and pure ingredients.',
};

export default function ProductsPage() {
    const data = staticProducts;

    return (
        <div className="min-h-screen bg-gradient-to-b from-desi-cream via-brand-yellow/10 to-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <ParallaxSection speed={0.15}>
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gradient-desi">
                            Our Products
                        </h1>
                        <p className="text-center text-desi-brown text-lg mb-12 max-w-2xl mx-auto">
                            Handcrafted with love using traditional methods and pure A2 cow milk
                        </p>
                    </ScrollReveal>
                </ParallaxSection>

                <ProductFilters />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {data.map((product: any, index: number) => (
                        <ProductCard key={product._id ?? product.slug} product={product} index={index} />
                    ))}
                </div>
            </div>
            {/* Decorative shapes */}
            <div className="absolute -top-12 left-1/4 w-40 h-40 bg-brand-yellow rounded-full opacity-20 blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/3 w-52 h-52 bg-desi-saffron rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
    );
}

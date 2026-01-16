import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products as staticProducts } from '@/lib/static-data';
import ProductGallery from '@/components/products/ProductGallery';
import ProductDetails from '@/components/products/ProductDetails';
import NutritionChart from '@/components/products/NutritionChart';

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return staticProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const product = staticProducts.find((p) => p.slug === params.slug);

    if (!product) {
        return { title: 'Product Not Found - Desi Dahi' };
    }

    return {
        title: `${product.name} - Desi Dahi | Pure A2 Cow Milk Products`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: product.images,
        },
    };
}

function normalizeSlug(slug: string) {
    const synonyms: Record<string, string> = {
        'mishit-doi': 'mishti-doi',
        'a2-cow-curd': 'a2-cow-curd',
        'desi-curd': 'pure-desi-dahi',
    };
    return synonyms[slug] ?? slug;
}

export default function ProductPage({ params }: ProductPageProps) {
    const normalized = normalizeSlug(params.slug);
    const product = staticProducts.find((p) => p.slug === normalized) ?? null;

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-desi-cream to-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <ProductGallery images={product.images} name={product.name} />
                    <ProductDetails product={product} />
                </div>

                {product.nutrition && Object.keys(product.nutrition).length > 0 && (
                    <NutritionChart nutrition={product.nutrition} />
                )}
            </div>
        </div>
    );
}

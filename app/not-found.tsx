import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-desi-cream to-white px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gradient-desi mb-4">404</h1>
                <h2 className="text-4xl font-bold text-desi-maroon mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>
                <Link href="/">
                    <Button
                        size="lg"
                        className="bg-desi-maroon hover:bg-desi-maroon-dark text-white px-8 py-6 text-lg"
                    >
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

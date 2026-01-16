import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, message } = body;

        // Validate required fields
        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Mock success response as the site is now static
        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for contacting us! We have received your message and will get back to you soon.',
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            { error: 'Failed to submit contact form. Please try again.' },
            { status: 500 }
        );
    }
}

# Desi Dahi - Premium Desi Curd Website

A production-grade website for "Desi Curd (Desi Dahi)" built with Next.js 14, MongoDB, Three.js, GSAP, and Framer Motion.

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/desi-dahi?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS + ShadCN UI
- MongoDB + Mongoose
- Framer Motion
- GSAP (with ScrollTrigger)
- Three.js (@react-three/fiber)
- Lucide React Icons

## Features

- Premium hero section with Three.js 3D elements
- Smooth scroll animations with GSAP
- Product catalog with MongoDB integration
- Contact form with database storage
- Fully responsive design
- SEO optimized
- Performance optimized (Lighthouse 95+)

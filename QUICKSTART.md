# Desi Dahi - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Set Up MongoDB
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster (if you don't have one)
3. Get your connection string
4. Create `.env.local` file in `d:\Desi_Dahi\desi-dahi\`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/desi-dahi?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 2: Seed Database
```bash
cd d:\Desi_Dahi\desi-dahi
npm run seed
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit: **http://localhost:3000**

## 📋 What You'll See

✅ **Home Page** - Hero with 3D clay pot, story, products, testimonials
✅ **Products Page** - All products with filters
✅ **Product Details** - Gallery, nutrition, benefits
✅ **About Page** - Brand story, preparation method
✅ **Contact Page** - Working form (saves to MongoDB)

## 🎨 Features

- Premium desi-themed design
- Smooth GSAP scroll animations
- Three.js 3D clay pot
- Framer Motion transitions
- Fully responsive
- SEO optimized
- MongoDB integration

## 📝 Need Help?

See [walkthrough.md](file:///C:/Users/Pratim/.gemini/antigravity/brain/edd513c1-4070-4812-a883-0cc97a8468a1/walkthrough.md) for complete documentation.

---

**Project Location:** `d:\Desi_Dahi\desi-dahi`

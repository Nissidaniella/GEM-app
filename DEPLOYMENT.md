# GEM App - Deployment Guide

## Project Overview

This is a React-based single-page application (SPA) built with Vite, designed for the GEM organization. The app includes multiple pages (Home, About, Campaigns, Blog, Sign-up, Donation) with smooth navigation and responsive design.

## Build Status ✅

The project has been successfully built and optimized for production deployment on Vercel.

### What Was Fixed

1. **Missing Images**: Created placeholder images for missing references:

   - `hero-bg.jpg` (used in Hero section)
   - `impact1.jpg` through `impact5.jpg` (used in homepage animations)
   - `vite.svg` (placeholder SVG icon)

2. **Vercel Configuration**: Added `vercel.json` configuration file with:

   - Proper build settings for Vite
   - SPA routing support
   - Static file serving configuration

3. **Vite Configuration**: Optimized `vite.config.js` with:
   - Base path configuration for relative paths
   - Code splitting for better performance
   - Manual chunks for vendor libraries
   - Build optimizations

### Build Output

- **Output Directory**: `dist/`
- **Bundle Size**: ~253KB (gzipped: ~76KB)
- **Assets**: Optimized and compressed
- **Chunks**: Split into vendor, router, and animations bundles

## Deployment to Vercel

### Prerequisites

1. Install Vercel CLI: `npm install -g vercel`
2. Have a Vercel account at https://vercel.com

### Deployment Steps

#### Option 1: Vercel CLI (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Configure project settings (defaults should work)
# - Deploy
```

#### Option 2: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import from Git (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Environment Variables (if needed)

If your app requires environment variables, add them in Vercel dashboard:

- Go to Project Settings > Environment Variables
- Add variables like `VITE_API_URL`, etc.

### Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Project Structure

```
├── dist/                 # Production build output
├── public/              # Static assets
│   ├── images/          # Image assets
│   ├── hero-bg.jpg      # Hero background
│   ├── impact*.jpg      # Impact images
│   └── vite.svg         # Placeholder SVG
├── src/                 # Source code
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── styles/          # CSS styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── vercel.json         # Vercel deployment config
```

## Features

- **Responsive Design**: Mobile-first approach
- **Single Page Application**: Smooth navigation without page reloads
- **Modern React**: Built with React 19 and modern hooks
- **Code Splitting**: Optimized bundle splitting for better performance
- **Animation Support**: Framer Motion animations
- **Font Awesome Icons**: Comprehensive icon set

## Performance Optimizations

- Gzip compression enabled
- Code splitting for vendor libraries
- Optimized image assets
- Minimal bundle size with tree shaking

## Support

If you encounter any issues during deployment:

1. Check the build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify the `vercel.json` configuration
4. Check that all assets are properly included in the `dist/` directory

Your GEM app is now ready for deployment! 🚀

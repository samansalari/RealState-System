#!/bin/bash

# Deployment Script for Beatnova Real Estate Application
# This script helps prepare and deploy the application

echo "🚀 Starting deployment preparation..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd real-estate-backend
npm install

# Build backend
echo "🔨 Building backend..."
npm run build

# Return to root directory
cd ..

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Push your code to GitHub"
echo "2. Deploy frontend to Vercel"
echo "3. Deploy backend to Railway"
echo "4. Configure environment variables"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
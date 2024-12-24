#!/bin/bash

# Fast Deployment Script for Nitchie App Builder

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands and their arguments
set -x

# Ensure we're in the project root
cd "$(dirname "$0")/.."

# Use faster npm install with cache
npm install --prefer-offline --no-audit

# Build the application
npm run build

# Deploy to Cloudflare
wrangler pages deploy .next

# Optional: Run health check
curl https://api.nitchieapps.com/health || true

echo "🚀 Deployment Completed Successfully! 🚀"

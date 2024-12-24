#!/bin/bash

# Deployment Verification Script

# Exit on any error
set -e

# Verify Wrangler Installation
echo "Checking Wrangler Installation..."
wrangler --version

# Verify Cloudflare Authentication
echo "Verifying Cloudflare Authentication..."
wrangler whoami

# Check Pages Deployment
echo "Checking Pages Deployment..."
wrangler pages project list

# Check D1 Database
echo "Checking D1 Databases..."
wrangler d1 list

# Test Worker Endpoint
echo "Testing Worker Endpoint..."
curl https://api.nitchieapps.com/health

# Comprehensive Health Check
echo "Running Comprehensive Deployment Health Check..."
npm run test:deployment

echo "Deployment Verification Completed Successfully!"

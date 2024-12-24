#!/bin/bash

# Exit on any error
set -e

# Print commands and their arguments as they are executed
set -x

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Clear npm cache
npm cache clean --force

# Remove existing node_modules and package-lock
rm -rf node_modules
rm -f package-lock.json

# Install dependencies with verbose output
npm install --verbose

# Check for any potential peer dependency issues
npm ls

# Print Node.js and npm versions
echo "Node.js version:"
node --version

echo "npm version:"
npm --version

# Optional: list outdated packages
npm outdated || true

echo "Setup completed successfully! 🚀"

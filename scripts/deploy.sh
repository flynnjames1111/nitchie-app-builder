#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Deployment Logging
LOG_FILE="deployment_log_$(date +%Y%m%d_%H%M%S).log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Trap any errors
trap 'log "Error: Deployment failed. Check $LOG_FILE for details."' ERR

# Start deployment log
log "Starting Nitchie App Builder Deployment"

# Validate Cloudflare authentication
log "Checking Cloudflare Authentication"
wrangler whoami || {
    log "Not authenticated with Cloudflare. Running login..."
    wrangler login
}

# Build the application
log "Building Application"
npm run build

# Deploy Worker
log "Deploying Cloudflare Worker"
wrangler deploy backend/worker.js

# Deploy Pages
log "Deploying Cloudflare Pages"
wrangler pages deploy .next

# Verify deployment
log "Deployment Verification"
wrangler pages list
wrangler d1 list

log "Deployment Completed Successfully!"

# Print log file location
echo "Detailed deployment log: $LOG_FILE"

#!/bin/bash

# Exit on any error
set -e

# Ensure Wrangler is authenticated
wrangler login

# Create D1 Database
echo "Creating Cloudflare D1 Database..."
DATABASE_RESULT=$(wrangler d1 create nitchie-app-builder-db)

# Extract Database ID (you might need to adjust this based on exact wrangler output)
DATABASE_ID=$(echo "$DATABASE_RESULT" | grep -oP 'Database ID: \K[^\s]+')

# Update wrangler.toml with the new database ID
sed -i "s/database_id = \"\"/database_id = \"$DATABASE_ID\"/" wrangler.toml

# Create necessary environment variables
wrangler secret put ENVIRONMENT production
wrangler secret put DATABASE_URL "$DATABASE_ID"

echo "Deployment preparation complete!"
echo "Database ID: $DATABASE_ID"
echo "Ready to deploy to Cloudflare!"

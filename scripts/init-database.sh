#!/bin/bash

# Exit on any error
set -e

# Ensure Wrangler is authenticated
wrangler login

# List existing D1 databases to help diagnose
echo "Existing D1 Databases:"
wrangler d1 list

# Create Users Table
echo "Initializing Users Table..."
wrangler d1 execute nitchie-app-builder-db --command "
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);"

# Create Apps Table
echo "Initializing Apps Table..."
wrangler d1 execute nitchie-app-builder-db --command "
CREATE TABLE IF NOT EXISTS apps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    config JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);"

echo "Database tables initialized successfully!"

# Verify table creation
echo "Verifying Tables:"
wrangler d1 execute nitchie-app-builder-db --command "
SELECT name FROM sqlite_master WHERE type='table';
"

# Nitchie App Builder - Cloudflare Deployment

## Prerequisites
- Node.js (v18 or later)
- Cloudflare Account
- Cloudflare Wrangler CLI (`npm install -g wrangler`)

## Backend Architecture
- **Database**: Cloudflare D1 (SQLite-compatible)
- **Backend**: Cloudflare Workers
- **Frontend**: Cloudflare Pages

## Setup Steps
1. Install Dependencies
```bash
npm install
```

2. Cloudflare Authentication
```bash
wrangler login
```

3. Create D1 Database
```bash
wrangler d1 create nitchie-app-builder-db
```
- Copy the generated database ID into `wrangler.toml`

## Deployment
```bash
# Build and deploy entire application
npm run deploy
```

### Individual Deployment Commands
```bash
# Deploy Backend Worker
npm run deploy:worker

# Deploy Frontend Pages
npm run deploy:pages
```

## Cloudflare Pages Deployment

### Automatic Deployment
1. Connect your GitHub repository to Cloudflare Pages
2. Select the `main` branch as your production branch
3. Set the following build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `.next`

### Manual Deployment with Wrangler
```bash
# Ensure you're logged into Cloudflare
wrangler login

# Deploy to Cloudflare Pages
npx wrangler pages deploy .next
```

### Environment Variables
Configure the following environment variables in Cloudflare Pages:
- `NODE_VERSION`: 20
- `NPM_VERSION`: 10

### Troubleshooting
- Ensure all dependencies are installed: `npm install`
- Check Cloudflare Pages build logs for any errors
- Verify your `next.config.js` is compatible with Cloudflare Pages

## Environment Configuration
Set the following environment variables in Cloudflare:
- `DATABASE_URL`: D1 Database Connection String
- `ENVIRONMENT`: `production`

## Troubleshooting
- Ensure Wrangler is authenticated
- Check Cloudflare dashboard for deployment logs
- Verify database and worker configurations

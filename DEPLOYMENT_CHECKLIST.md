# Deployment Preparation Checklist

## Prerequisites
- [x] Source maps validated
- [ ] Cloudflare account created
- [ ] Wrangler CLI installed
- [ ] Environment variables configured

## Deployment Steps
1. **Cloudflare Authentication**
```bash
wrangler login
```

2. **Create D1 Database**
```bash
wrangler d1 create nitchie-app-builder-db
```
- Copy the generated Database ID
- Update `wrangler.toml` with the Database ID

3. **Set Environment Variables**
```bash
# Example environment variable setup
wrangler secret put ENVIRONMENT production
wrangler secret put DATABASE_URL your_database_connection_string
```

4. **Verify Build**
```bash
npm run build
npm run sourcemap:validate
```

5. **Deploy to Cloudflare**
```bash
npm run deploy
```

## Troubleshooting
- Check Cloudflare dashboard for deployment logs
- Verify worker and pages configurations
- Ensure all dependencies are correctly installed

## Post-Deployment Verification
- Run health checks
- Test critical application paths
- Monitor initial performance

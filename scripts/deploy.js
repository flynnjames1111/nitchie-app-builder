const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function deployApplication() {
  console.log('🚀 Starting Nitchie App Builder Deployment 🚀');
  
  const startTime = Date.now();
  
  try {
    // Pre-deployment checks
    console.log('1. Running Pre-Deployment Checks...');
    
    // Check Wrangler configuration
    const wranglerConfig = path.join(__dirname, '..', 'wrangler.toml');
    if (!fs.existsSync(wranglerConfig)) {
      throw new Error('Wrangler configuration file not found!');
    }
    
    // Verify database connection
    console.log('2. Verifying Database Connection...');
    execSync('wrangler d1 list', { stdio: 'inherit' });
    
    // Build Next.js Application
    console.log('3. Building Application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy Worker
    console.log('4. Deploying Cloudflare Worker...');
    execSync('wrangler deploy backend/worker.js', { stdio: 'inherit' });
    
    // Deploy Pages
    console.log('5. Deploying to Cloudflare Pages...');
    execSync('wrangler pages deploy .next', { stdio: 'inherit' });
    
    // Post-deployment health check
    console.log('6. Running Deployment Health Check...');
    const healthCheckResult = execSync('npm run health:check', { 
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    console.log('Health Check Result:', healthCheckResult);
    
    const deploymentTime = (Date.now() - startTime) / 1000;
    console.log(`
🎉 Deployment Successful! 🎉
- Total Deployment Time: ${deploymentTime.toFixed(2)} seconds
- Environment: Production
- App Version: 1.0.0
`);
    
  } catch (error) {
    console.error('❌ Deployment Failed ❌');
    console.error('Error Details:');
    console.error('- Name:', error.name);
    console.error('- Message:', error.message);
    console.error('- Stack Trace:', error.stack);
    
    // Optional: Send deployment failure notification
    // You could integrate with services like Sentry, Slack, etc.
    
    process.exit(1);
  }
}

// Run deployment
deployApplication();

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function cloudflareLogin() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question('Enter your Cloudflare API Token: ', (apiToken) => {
      rl.close();

      try {
        // Validate token is not empty
        if (!apiToken || apiToken.trim() === '') {
          throw new Error('API Token cannot be empty');
        }

        // Configure Wrangler with the API token
        console.log('Configuring Wrangler with API token...');
        
        // Set the API token as an environment variable
        process.env.CLOUDFLARE_API_TOKEN = apiToken.trim();

        // Verify token by listing accounts
        const accountsCommand = 'wrangler account list';
        console.log('Verifying token by listing accounts...');
        
        const accountsOutput = execSync(accountsCommand, { 
          encoding: 'utf-8',
          env: { ...process.env, CLOUDFLARE_API_TOKEN: apiToken.trim() }
        });

        console.log('Accounts associated with this token:');
        console.log(accountsOutput);

        // Optionally, save token securely (be cautious with this)
        const configDir = path.join(process.env.HOME || process.env.USERPROFILE, '.wrangler', 'config');
        fs.mkdirSync(configDir, { recursive: true });
        
        const configPath = path.join(configDir, 'cloudflare-token.json');
        fs.writeFileSync(configPath, JSON.stringify({ 
          token: apiToken.trim(),
          timestamp: new Date().toISOString()
        }), { mode: 0o600 }); // Restrict file permissions

        console.log('Authentication successful!');
        resolve(true);
      } catch (error) {
        console.error('Authentication failed:', error.message);
        reject(false);
      }
    });
  });
}

// Run the login process
cloudflareLogin()
  .then(result => process.exit(0))
  .catch(error => process.exit(1));

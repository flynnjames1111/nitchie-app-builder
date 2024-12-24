const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
  try {
    // Authenticate with Cloudflare
    console.log('Authenticating with Cloudflare...');
    execSync('wrangler login', { stdio: 'inherit' });

    // List existing databases
    console.log('Listing existing D1 databases...');
    execSync('wrangler d1 list', { stdio: 'inherit' });

    // Create D1 Database
    console.log('Creating D1 Database...');
    const createOutput = execSync('wrangler d1 create nitchie-app-builder-db', { 
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    // Extract Database ID
    const databaseIdMatch = createOutput.match(/Database ID: (\S+)/);
    if (!databaseIdMatch) {
      throw new Error('Could not extract Database ID');
    }
    const databaseId = databaseIdMatch[1];

    // Update wrangler.toml
    const wranglerPath = path.join(__dirname, '..', 'wrangler.toml');
    let wranglerConfig = fs.readFileSync(wranglerPath, 'utf-8');
    wranglerConfig = wranglerConfig.replace(
      /database_id = ""/, 
      `database_id = "${databaseId}"`
    );
    fs.writeFileSync(wranglerPath, wranglerConfig);

    // Initialize Database Tables
    console.log('Initializing Database Tables...');
    execSync(`wrangler d1 execute nitchie-app-builder-db --command "
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS apps (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        name TEXT NOT NULL,
        description TEXT,
        config JSON,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      );
    "`, { stdio: 'inherit' });

    console.log('Database setup completed successfully!');
    console.log(`Database ID: ${databaseId}`);
  } catch (error) {
    console.error('Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();

npm run db:initconst { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function initializeDatabase() {
  try {
    // Database initialization commands with proper escaping
    const initCommands = [
      // Create Users Table
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );`,
      
      // Create Apps Table
      `CREATE TABLE IF NOT EXISTS apps (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        name TEXT NOT NULL,
        description TEXT,
        config TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      );`,
      
      // Create an initial test user
      `INSERT OR IGNORE INTO users (email, name) 
      VALUES ('admin@nitchieapps.com', 'Admin User');`
    ];

    // Execute each initialization command
    for (const command of initCommands) {
      console.log('Executing database command:', command);
      
      try {
        // Use wrangler CLI with proper command escaping
        const result = execSync(
          `wrangler d1 execute nitchie-app-builder-db --command "${command.replace(/"/g, '\\"')}"`, 
          { 
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'pipe']
          }
        );
        
        console.log('Command execution result:', result);
      } catch (cmdError) {
        console.error('Error executing command:', cmdError);
        console.error('Command:', command);
        console.error('Error details:', cmdError.message);
        console.error('Error stdout:', cmdError.stdout);
        console.error('Error stderr:', cmdError.stderr);
        
        // Continue with next command instead of stopping entirely
        continue;
      }
    }

    // Verify table creation
    console.log('Verifying database tables...');
    const verifyCommand = `
    SELECT name FROM sqlite_master 
    WHERE type='table' AND name IN ('users', 'apps');
    `;
    
    try {
      const tablesOutput = execSync(
        `wrangler d1 execute nitchie-app-builder-db --command "${verifyCommand}"`, 
        { encoding: 'utf-8' }
      );

      console.log('Existing Tables:', tablesOutput);
    } catch (verifyError) {
      console.error('Table verification failed:', verifyError);
    }

    console.log('Database initialization completed! 🚀');

  } catch (error) {
    console.error('Overall Database Initialization Error:', error);
    
    // Log full error details
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);

    process.exit(1);
  }
}

// Immediately invoke the function
initializeDatabase();

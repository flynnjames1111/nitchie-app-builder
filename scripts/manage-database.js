const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function manageDatabases() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // List existing databases
    console.log('Existing D1 Databases:');
    const listOutput = execSync('wrangler d1 list', { encoding: 'utf-8' });
    console.log(listOutput);

    // Prompt for action
    const action = await new Promise((resolve) => {
      rl.question(`
Choose an action:
1. Use an existing database
2. Rename the existing database
3. Delete the existing database and create a new one
Enter the number of your choice: `, resolve);
    });

    switch(action.trim()) {
      case '1':
        const databaseId = await new Promise((resolve) => {
          rl.question('Enter the Database ID you want to use: ', resolve);
        });
        updateWranglerConfig(databaseId);
        break;

      case '2':
        const newName = await new Promise((resolve) => {
          rl.question('Enter a new name for the database: ', resolve);
        });
        execSync(`wrangler d1 create ${newName}`, { stdio: 'inherit' });
        break;

      case '3':
        const confirmDelete = await new Promise((resolve) => {
          rl.question('Are you sure you want to delete the existing database? (yes/no): ', resolve);
        });

        if (confirmDelete.toLowerCase() === 'yes') {
          // Implement database deletion logic
          console.log('Deleting existing database...');
          // Note: Cloudflare D1 doesn't have a direct CLI delete command
          console.log('Please delete the database manually from the Cloudflare Dashboard');
          
          // Create a new database
          execSync('wrangler d1 create nitchie-app-builder-db', { stdio: 'inherit' });
        }
        break;

      default:
        console.log('Invalid option selected.');
    }

  } catch (error) {
    console.error('Database Management Error:', error);
  } finally {
    rl.close();
  }
}

function updateWranglerConfig(databaseId) {
  const wranglerPath = path.join(__dirname, '..', 'wrangler.toml');
  let wranglerConfig = fs.readFileSync(wranglerPath, 'utf-8');
  
  wranglerConfig = wranglerConfig.replace(
    /database_id = ""/, 
    `database_id = "${databaseId}"`
  );
  
  fs.writeFileSync(wranglerPath, wranglerConfig);
  console.log('Wrangler configuration updated with new Database ID');
}

manageDatabases();

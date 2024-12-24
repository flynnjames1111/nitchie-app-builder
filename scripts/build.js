const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function buildApplication() {
  console.log('🏗️  Starting Next.js Build Process 🏗️');
  
  try {
    // Check Node.js and npm versions
    console.log('Checking Environment:');
    execSync('node --version', { stdio: 'inherit' });
    execSync('npm --version', { stdio: 'inherit' });

    // Clear Next.js build cache
    console.log('\n1. Clearing Next.js Build Cache...');
    execSync('npx next clean', { stdio: 'inherit' });

    // Install dependencies
    console.log('\n2. Installing Dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    // Build Next.js application with verbose output
    console.log('\n3. Building Next.js Application...');
    const buildOutput = execSync('npx next build', { 
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    console.log('Build Output:', buildOutput);

    // Verify build artifacts
    console.log('\n4. Verifying Build Artifacts...');
    const buildDir = path.join(__dirname, '..', '.next');
    if (fs.existsSync(buildDir)) {
      const buildFiles = fs.readdirSync(buildDir);
      console.log('Build Files:', buildFiles);
    } else {
      console.warn('⚠️ Build directory not found!');
    }

    console.log(`
🎉 Build Successful! 🎉
- Environment: Development
- Next.js Version: ${require('next/package.json').version}
`);

    return true;
  } catch (error) {
    console.error('❌ Build Failed ❌');
    console.error('Error Details:');
    console.error('- Name:', error.name);
    console.error('- Message:', error.message);
    console.error('- Stack Trace:', error.stack);

    // Optional: Provide troubleshooting hints
    console.error(`
🔍 Troubleshooting Tips:
1. Ensure all dependencies are compatible
2. Check for conflicting package versions
3. Verify Node.js and npm versions
4. Run 'npm cache clean --force'
`);

    process.exit(1);
  }
}

// Run build
buildApplication();

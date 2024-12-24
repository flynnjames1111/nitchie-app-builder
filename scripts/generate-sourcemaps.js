const fs = require('fs');
const path = require('path');
const { encode, decode } = require('@jridgewell/sourcemap-codec');

function generateSourceMaps(buildDir) {
  const jsFiles = findJSFiles(buildDir);
  
  jsFiles.forEach(file => {
    const sourceMapPath = `${file}.map`;
    
    if (fs.existsSync(sourceMapPath)) {
      const sourceMap = JSON.parse(fs.readFileSync(sourceMapPath, 'utf8'));
      
      // Encode and decode mappings to validate
      const encodedMappings = encode(sourceMap.mappings);
      const decodedMappings = decode(encodedMappings);
      
      console.log(`Source Map for ${path.basename(file)}:
        - Total Sources: ${sourceMap.sources.length}
        - Mappings Length: ${encodedMappings.length}
      `);
    }
  });
}

function findJSFiles(dir) {
  const jsFiles = [];
  
  function traverseDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (file.endsWith('.js')) {
        jsFiles.push(fullPath);
      }
    });
  }
  
  traverseDirectory(dir);
  return jsFiles;
}

// Run the script
const buildDir = path.join(__dirname, '..', '.next');
generateSourceMaps(buildDir);

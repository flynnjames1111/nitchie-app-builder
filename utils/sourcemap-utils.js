// Simplified Sourcemap Utility
const fs = require('fs');
const path = require('path');

class SourceMapUtils {
  static generateSourceMap(originalSource, generatedSource) {
    return {
      version: 3,
      sources: ['original.js'],
      sourcesContent: [originalSource],
      mappings: 'AAAA',  // Minimal valid mapping
      names: []
    };
  }

  static validateSourceMap(sourceMapPath) {
    try {
      const sourceMap = JSON.parse(fs.readFileSync(sourceMapPath, 'utf8'));
      
      // Basic validation
      if (!sourceMap.version || !sourceMap.sources || !sourceMap.mappings) {
        throw new Error('Invalid source map structure');
      }

      console.log('Source Map Validation:');
      console.log('- Version:', sourceMap.version);
      console.log('- Sources:', sourceMap.sources.length);
      console.log('- Mappings Length:', sourceMap.mappings.length);

      return true;
    } catch (error) {
      console.error('Source Map Validation Error:', error.message);
      return false;
    }
  }

  static findSourceMaps(directory) {
    const sourceMapFiles = [];

    function traverseDirectory(currentPath) {
      const files = fs.readdirSync(currentPath);
      
      files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverseDirectory(fullPath);
        } else if (file.endsWith('.map')) {
          sourceMapFiles.push(fullPath);
        }
      });
    }

    traverseDirectory(directory);
    return sourceMapFiles;
  }
}

// Example usage
function runSourceMapValidation() {
  const buildDir = path.join(__dirname, '..', '.next');
  const sourceMapFiles = SourceMapUtils.findSourceMaps(buildDir);

  console.log('Found Source Map Files:', sourceMapFiles.length);
  
  sourceMapFiles.forEach(file => {
    console.log(`Validating: ${path.basename(file)}`);
    SourceMapUtils.validateSourceMap(file);
  });
}

// Only run if called directly
if (require.main === module) {
  runSourceMapValidation();
}

module.exports = SourceMapUtils;

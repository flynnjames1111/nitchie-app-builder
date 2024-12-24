// Backend Health Check Utility
const os = require('os');
const process = require('process');

class HealthCheck {
  static getSystemInfo() {
    return {
      timestamp: new Date().toISOString(),
      platform: process.platform,
      arch: process.arch,
      nodeVersion: process.version,
      cpuLoad: os.loadavg(),
      memoryUsage: {
        total: os.totalmem(),
        free: os.freemem(),
        usedPercentage: Math.round((1 - os.freemem() / os.totalmem()) * 100)
      }
    };
  }

  static async checkDatabaseConnection(env) {
    try {
      // Attempt a simple database query
      const result = await env.DB.prepare('SELECT 1 as test').first();
      return result && result.test === 1;
    } catch (error) {
      console.error('Database Connection Error:', error);
      return false;
    }
  }

  static async performHealthCheck(env) {
    const systemInfo = this.getSystemInfo();
    
    try {
      const databaseStatus = await this.checkDatabaseConnection(env);
      
      return {
        status: 'healthy',
        systemInfo,
        components: {
          database: databaseStatus ? 'operational' : 'error'
        },
        version: '1.0.0'
      };
    } catch (error) {
      return {
        status: 'degraded',
        error: error.message,
        systemInfo
      };
    }
  }
}

export default HealthCheck;

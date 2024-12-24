import { initializeDatabase, createUser, createApp, getUserApps } from './db.js';
import HealthCheck from './health-check.js';

export default {
  async fetch(request, env, ctx) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Max-Age': '86400',
    };

    // Handle OPTIONS request for CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    // Parse URL
    const url = new URL(request.url);

    // Health Check Endpoint
    if (url.pathname === '/health') {
      const healthCheckResult = await HealthCheck.performHealthCheck(env);
      return new Response(JSON.stringify(healthCheckResult), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          ...corsHeaders
        }
      });
    }

    // Initialize database on first request
    await initializeDatabase(env);

    // Route handling
    switch (url.pathname) {
      case '/api/users':
        if (request.method === 'POST') {
          const userData = await request.json();
          const result = await createUser(env, userData);
          return Response.json(result, { headers: corsHeaders });
        }
        break;

      case '/api/apps':
        if (request.method === 'POST') {
          const appData = await request.json();
          const result = await createApp(env, appData);
          return Response.json(result, { headers: corsHeaders });
        }
        break;

      case '/api/user-apps':
        if (request.method === 'GET') {
          const userId = url.searchParams.get('userId');
          const apps = await getUserApps(env, userId);
          return Response.json(apps, { headers: corsHeaders });
        }
        break;

      default:
        return new Response('Not Found', { status: 404, headers: corsHeaders });
    }
  }
};

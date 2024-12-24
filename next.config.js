/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };
    return config;
  },
  // Cloudflare Pages specific configurations
  experimental: {
    serverActions: true,
    optimizePackageImports: ['@radix-ui', 'lucide-react']
  },
  // Ensure compatibility with Cloudflare's edge runtime
  runtime: 'edge'
};

export default nextConfig;

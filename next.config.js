/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server components for this application
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  // Exclude problematic packages from the bundle
  webpack: (config, { isServer }) => {
    // Handle Playwright and related packages
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        '@playwright/test',
        'playwright',
        'playwright-core',
        'electron'
      ];
    }
    
    return config;
  },
};

module.exports = nextConfig;

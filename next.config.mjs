/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogb.hrvico.com',
      },
      {
        protocol: 'https',
        hostname: 'app.hrvico.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blog-details/:slug',
        destination: '/blog-details/:slug',
      },
    ];
  },
};

export default nextConfig;

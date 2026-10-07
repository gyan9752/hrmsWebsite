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
      {
        source: '/blogs',
        destination: '/latest-news',
      },
      {
        source: '/blog',
        destination: '/latest-news',
      },
      {
        source: '/blogs/:path*',
        destination: '/latest-news/:path*',
      },
      {
        source: '/blog/:path*',
        destination: '/latest-news/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

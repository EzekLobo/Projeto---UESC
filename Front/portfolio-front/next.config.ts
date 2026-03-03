/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ezeklobo.pythonanywhere.com',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
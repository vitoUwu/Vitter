// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // For some reason this isnt working, and i dont know why
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

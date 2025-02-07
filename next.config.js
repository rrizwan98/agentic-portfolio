module.exports = {
  // ...existing config...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // added direct domain
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    domains: ["www.imghippo.com"],
  },
  // ...existing config...
}

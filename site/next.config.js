/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Data Science lab',
    description: 'A lab environment for data science.',
    icon: '/img/logo.svg',
    listUrl: 'https://aaronbrinkerkasm.github.io/Educational/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/Educational/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['demo.amytheme.com','images.unsplash.com'],
  }
}

module.exports = nextConfig
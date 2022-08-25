/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dashboard.parii.app','firebasestorage.googleapis.com','www.nacionrex.com','fruvitt.com','react-responsive-carousel.js.org', 'http2.mlstatic.com', 'fakestoreapi.com','modeloramanow.vtexassets.com']
  }
}

module.exports = withPWA(nextConfig)

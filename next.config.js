/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dashboard.parii.app','firebasestorage.googleapis.com','www.nacionrex.com','fruvitt.com','react-responsive-carousel.js.org', 'http2.mlstatic.com', 'fakestoreapi.com','modeloramanow.vtexassets.com']
  }
}

module.exports = nextConfig

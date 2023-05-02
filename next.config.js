/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    My_ENV: process.env.NODE_ENV,
    // Define the global L object for Leaflet
    // This will make sure that Leaflet is available on the server
    L: false,
  },

}

module.exports = nextConfig

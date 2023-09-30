/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.meloyalvarez.com', 'img.freepik.com']
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig

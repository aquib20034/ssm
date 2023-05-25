/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.supersavermama.com',
                port: '',
                pathname: '/storage/**',
            },
        ],
    }
}

module.exports = nextConfig

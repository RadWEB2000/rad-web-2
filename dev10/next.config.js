/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname:"images.unsplash.com"
            }, 
            {
                hostname:"localhost"
            }
        ]
    }
}

module.exports = nextConfig

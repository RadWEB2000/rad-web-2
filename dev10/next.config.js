/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname:"images.unsplash.com"
            }, 
            {
                hostname:"localhost"
            },
            {
                hostname:"rad-web.pl"
            }
        ]
    }
}

module.exports = nextConfig

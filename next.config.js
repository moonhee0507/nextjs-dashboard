/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextjs-dashboard-chi-rust.vercel.app',
                port: '',
                pathname: '/dashboard/**',
            },
        ],
    },
};

module.exports = nextConfig;

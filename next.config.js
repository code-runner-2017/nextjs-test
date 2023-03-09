/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: 'akamaiImageloader.js',
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'demo.discoveryreplymedia.com',
            },
          ],
    },
};

module.exports = nextConfig;

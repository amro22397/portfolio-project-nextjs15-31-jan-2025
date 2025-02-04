import type { NextConfig } from "next";
// const createNextIntlPlugin = require('next-intl/plugin');

// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "**"
        }
    ]
}
};

// module.exports = withNextIntl(nextConfig);

export default nextConfig;

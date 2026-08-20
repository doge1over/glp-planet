import type { NextConfig } from "next";

const isReserveSite = process.env.SITE_TYPE === "reserve";
const mainSiteUrl = "https://glp-planet.com";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    async redirects() {
        if (!isReserveSite) return [];
        return [
            {
                source: "/master-classes",
                destination: `${mainSiteUrl}/master-classes`,
                permanent: false,
            },
            {
                source: "/master-classes/:path*",
                destination: `${mainSiteUrl}/master-classes/:path*`,
                permanent: false,
            },
            {
                source: "/schedule",
                destination: `${mainSiteUrl}/schedule`,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
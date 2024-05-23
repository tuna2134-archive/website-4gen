/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

if (process.env.NEXT_OUTPUT === "standalone") {
    nextConfig.output = "standalone";
}

export default nextConfig;

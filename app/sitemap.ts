import { MetadataRoute } from "next";

const sitemaps = [
    {
        path: "/",
        priority: 1,
    },
    {
        path: "/home",
        priority: 0.9,
    },
    {
        path: "/articles",
        priority: 0.8,
    },
    {
        path: "/works",
        priority: 0.8,
    },
    {
        path: "/contact",
        priority: 0.3,
    },
    {
        path: "/services",
        priority: 0.8,
    },
    {
        path: "/services/userinfo",
        priority: 0.5,
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return sitemaps.map((sitemap) => ({
        url: `https://tuna2134.jp${sitemap.path}`,
        changeFrequency: "daily",
        lastModified: new Date(),
        priority: sitemap.priority,
    }));
}

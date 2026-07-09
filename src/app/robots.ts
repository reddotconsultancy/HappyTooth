import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
 return {
  rules: [
   {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
   },
   // Explicitly allow major AI/LLM crawlers
   { userAgent: "GPTBot", allow: "/" },
   { userAgent: "ClaudeBot", allow: "/" },
   { userAgent: "PerplexityBot", allow: "/" },
   { userAgent: "Google-Extended", allow: "/" },
   { userAgent: "Applebot", allow: "/" },
   { userAgent: "Applebot-Extended", allow: "/" },
  ],
  sitemap: "https://www.happytoothdental.in/sitemap.xml",
 }
}

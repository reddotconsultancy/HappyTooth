import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = "https://www.happytoothdental.in";

 const staticPages: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/clinics/kallambalam", priority: 0.9, changeFrequency: "monthly" },
  { path: "/clinics/murukkumpuzha", priority: 0.9, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/international", priority: 0.8, changeFrequency: "monthly" },
  { path: "/facilities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.5, changeFrequency: "monthly" },
 ];

 const servicePages = getAllSlugs().map((slug) => ({
  url: `${baseUrl}/services/${slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.85,
 }));

 const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
  url: `${baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
 }));

 return [...staticEntries, ...servicePages];
}

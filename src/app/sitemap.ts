import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/services-data";
import { getAllLocalityParams } from "@/lib/locality-services";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = "https://happytoothdental.in";

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
  { path: "/blog/5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/cosmetic-dentistry-smile-makeover-options", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/preventive-dental-tips-for-families", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/smile-studio-murukkumpuzha-now-open", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.5, changeFrequency: "monthly" },
 ];

 const servicePages = getAllSlugs().map((slug) => ({
  url: `${baseUrl}/services/${slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.85,
 }));

 const localityPages = getAllLocalityParams().map(({ slug, locality }) => ({
  url: `${baseUrl}/services/${slug}/${locality}`,
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

 return [...staticEntries, ...servicePages, ...localityPages];
}

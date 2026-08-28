export type BlogPost = {
 title: string;
 slug: string;    // URL slug for /blog/[slug]
 date: string;    // day + short month, e.g. "12 Apr"
 year: string;
 isoDate: string; // ISO 8601 for structured data, e.g. "2026-04-12"
 author: string;
 category: string;
 excerpt: string;
 image: string;
 published: boolean;
};

export const blogPosts: BlogPost[] = [
 {
  title: "5 Signs You Might Need a Root Canal (And Why You Shouldn’t Ignore Them)",
  slug: "5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them",
  date: "12 Apr",
  year: "2026",
  isoDate: "2026-04-12",
  author: "Dr. Thushara Sudhakaran, BDS, MDS",
  category: "Endodontics",
  excerpt:
   "Tooth pain is something most people try to ignore — hoping it will go away on its own. But sometimes, your tooth is trying to tell you something more serious. A root canal is often misunderstood and feared, but in reality, it is a safe and effective way to save your natural tooth and relieve pain.",
  image: "/images/indian_toothache_blog.webp",
  published: true,
 },
 {
  title: "Cosmetic Dentistry: Smile Makeover Options That Change Lives",
  slug: "cosmetic-dentistry-smile-makeover-options",
  date: "18 Apr",
  year: "2026",
  isoDate: "2026-04-18",
  author: "Dr. Thushara Sudhakaran, BDS, MDS",
  category: "Cosmetic Dentistry",
  excerpt:
   "If you have ever felt self-conscious about gaps, discoloration, or chipped edges, cosmetic dentistry is designed around your unique features. Dental veneers and professional whitening can elevate your confidence and keep your bite functional and balanced.",
  image: "/images/indian_dental_health.webp",
  published: true,
 },
 {
  title: "Preventive Dental Tips for Families: Daily Actions for Strong Teeth",
  slug: "preventive-dental-tips-for-families",
  date: "25 Apr",
  year: "2026",
  isoDate: "2026-04-25",
  author: "Dr. Thushara Sudhakaran, BDS, MDS",
  category: "Preventive Dentistry",
  excerpt:
   "Keeping teeth clean isn’t just about visiting the clinic twice a year — it starts at home. Simple daily actions like fluoride toothpaste usage, standard flossing, and minimizing sugary drinks prevent plaque buildup and keep gums secure.",
  image: "/images/indian_family_smile.webp",
  published: true,
 },
 {
  title: "Our New Smile Studio in Murukkumpuzha Is Now Open",
  slug: "smile-studio-murukkumpuzha-now-open",
  date: "12 Jul",
  year: "2026",
  isoDate: "2026-07-12",
  author: "Dr. Thushara Sudhakaran, BDS, MDS",
  category: "Clinic News",
  excerpt:
   "HappyTooth Smile Studio is now open at Thoppumukku junction in Murukkumpuzha. It is our second clinic and our largest, built to handle the full range of specialist dental treatment under one roof, on any day of the week — including weekends and public holidays.",
  image: "/images/happytooth-varkala12-1.webp",
  published: true,
 },
];

/** Published posts, newest first — used by the blog index and article sidebars. */
export const publishedPosts = blogPosts.filter((p) => p.published).slice().reverse();

/** Recent published posts for the article sidebar, excluding the one being read. */
export function recentPosts(excludeSlug?: string, limit = 3): BlogPost[] {
 return publishedPosts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

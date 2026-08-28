import React from "react";
import { blogPosts } from "@/lib/blog-posts";

const SITE = "https://happytoothdental.in";

/** BlogPosting JSON-LD for an article page, sourced from the shared post list. */
export default function BlogPostingSchema({ slug }: { slug: string }) {
 const post = blogPosts.find((p) => p.slug === slug);
 if (!post) return null;

 const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${SITE}/blog/${post.slug}#article`,
  "mainEntityOfPage": {
   "@type": "WebPage",
   "@id": `${SITE}/blog/${post.slug}`
  },
  "headline": post.title,
  "description": post.excerpt,
  "image": `${SITE}${post.image}`,
  "datePublished": post.isoDate,
  "dateModified": post.isoDate,
  "articleSection": post.category,
  "inLanguage": "en-IN",
  "author": {
   "@type": "Person",
   "@id": `${SITE}/#dr-thushara-sudhakaran`,
   "name": "Dr. Thushara Sudhakaran",
   "url": `${SITE}/about`
  },
  "publisher": {
   "@id": `${SITE}/#organization`
  }
 };

 return (
  <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
  />
 );
}

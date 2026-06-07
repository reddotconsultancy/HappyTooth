import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "Blog",
  description: "Read our latest dental care insights and tips from the experts at Happy Tooth Dental Care.",
};

export default function Blog() {
  const posts = [
    {
      title: "5 Signs You Might Need a Root Canal (And Why You Shouldn’t Ignore Them)",
      slug: "5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them",
      date: "12 Apr",
      year: "2026",
      author: "arungokul@gmail.com",
      category: "Uncategorized",
      excerpt:
        "Tooth pain is something most people try to ignore — hoping it will go away on its own. But sometimes, your tooth is trying to tell you something more serious. A root canal is often misunderstood and feared, but in reality, it is a safe and effective way to save your natural tooth and relieve pain.",
      image: "/images/indian_toothache_blog.png",
    },
    {
      title: "Cosmetic Dentistry: Smile Makeover Options That Change Lives",
      slug: "5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them", // link back or simple loop
      date: "18 Apr",
      year: "2026",
      author: "arungokul@gmail.com",
      category: "Cosmetic Dentistry",
      excerpt:
        "If you have ever felt self-conscious about gaps, discoloration, or chipped edges, cosmetic dentistry is designed around your unique features. Dental veneers and professional whitening can elevate your confidence and keep your bite functional and balanced.",
      image: "/images/indian_dental_health.png",
    },
    {
      title: "Preventive Dental Tips for Families: Daily Actions for Strong Teeth",
      slug: "5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them",
      date: "25 Apr",
      year: "2026",
      author: "arungokul@gmail.com",
      category: "Preventive Dentistry",
      excerpt:
        "Keeping teeth clean isn’t just about visiting the clinic twice a year — it starts at home. Simple daily actions like fluoride toothpaste usage, standard flossing, and minimizing sugary drinks prevent plaque buildup and keep gums secure.",
      image: "/images/indian_family_smile.png",
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Blog" currentPage="Blog" bgImage="/images/indian_dental_health.png" />

      {/* Main content grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Blog Post List (Left Column) */}
            <div className="lg:col-span-8 space-y-12">
              {posts.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-navy-blue/5 border border-gray-100 flex flex-col group transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="relative h-64 sm:h-[22rem] w-full overflow-hidden p-3 bg-gray-50/50">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      {/* Floating Date Badge */}
                      <div className="absolute top-4 left-4 bg-primary-teal text-white py-2.5 px-4 rounded-2xl shadow-md text-center flex flex-col">
                        <span className="text-xl font-extrabold font-rubik leading-none">{post.date.split(" ")[0]}</span>
                        <span className="text-xs uppercase font-extrabold tracking-wider mt-0.5">{post.date.split(" ")[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-soft-gray font-bold">
                      <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {post.author}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-navy-blue group-hover:text-primary-teal transition-colors">
                      <Link href={`/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-soft-gray leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/${post.slug}`}
                        className="bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-3 px-6 rounded-full transition-all duration-300 shadow-md inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar (Right Column) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search bar */}
              <div className="bg-bg-light-blue/40 border border-gray-100 rounded-3xl p-6">
                <h3 className="text-base font-extrabold text-navy-blue mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full text-xs py-3.5 px-4 bg-white border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/15 rounded-xl outline-none transition"
                  />
                  <button className="absolute right-3 top-3.5 text-soft-gray hover:text-primary-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Recent posts */}
              <div className="bg-bg-light-blue/40 border border-gray-100 rounded-3xl p-6">
                <h3 className="text-base font-extrabold text-navy-blue mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {posts.map((post, idx) => (
                    <li key={idx} className="flex gap-3 border-b border-gray-200/40 pb-3 last:border-b-0 last:pb-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-white">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/${post.slug}`}
                          className="text-xs text-navy-blue hover:text-primary-teal font-bold leading-snug block line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <span className="text-[10px] font-semibold text-soft-gray block">{post.date} 2026</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-bg-light-blue/40 border border-gray-100 rounded-3xl p-6">
                <h3 className="text-base font-extrabold text-navy-blue mb-4">Categories</h3>
                <ul className="space-y-2 text-xs font-bold text-navy-blue">
                  <li className="flex justify-between border-b border-gray-200/40 pb-2">
                    <span className="hover:text-primary-teal cursor-pointer">Uncategorized</span>
                    <span className="text-soft-gray">(1)</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200/40 pb-2">
                    <span className="hover:text-primary-teal cursor-pointer">Cosmetic Dentistry</span>
                    <span className="text-soft-gray">(1)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="hover:text-primary-teal cursor-pointer">Preventive Dentistry</span>
                    <span className="text-soft-gray">(1)</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

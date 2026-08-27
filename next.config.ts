import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/our-facilities",
        destination: "/facilities",
        permanent: true,
      },
      {
        source: "/5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them",
        destination: "/blog/5-signs-you-might-need-a-root-canal-and-why-you-shouldnt-ignore-them",
        permanent: true,
      },
    ];
  },
};


export default nextConfig;

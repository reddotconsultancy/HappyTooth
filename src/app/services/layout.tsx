import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Dental Services & Treatments | Root Canal, Implants & Cosmetic Dentistry",
 description: "Explore our specialized dental services including Painless Root Canal, Smile Designing, Clear Aligners, Dental Implants, and Paediatric Dentistry in Thiruvananthapuram.",
 alternates: { canonical: "/services" },
 openGraph: {
  title: "Dental Services & Treatments | Root Canal, Implants & Cosmetic Dentistry",
  description: "Painless Root Canal, Smile Designing, Clear Aligners, Dental Implants & Paediatric Dentistry at HappyTooth, Thiruvananthapuram.",
  url: "/services",
  images: [
   {
    url: "/images/happytooth-varkala12-1.webp",
    width: 1200,
    height: 630,
    alt: "HappyTooth Dental Services \u2014 Root Canal, Implants, Aligners",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Dental Services & Treatments | Root Canal, Implants & Cosmetic Dentistry",
  description: "Painless Root Canal, Smile Designing, Clear Aligners, Dental Implants & Paediatric Dentistry at HappyTooth, Thiruvananthapuram.",
  images: ["/images/happytooth-varkala12-1.webp"],
 },
};

export default function ServicesLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

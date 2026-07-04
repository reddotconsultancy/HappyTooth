import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Dental Services & Treatments | Root Canal, Implants & Cosmetic Dentistry",
 description: "Explore our specialized dental services including Painless Root Canal, Smile Designing, Clear Aligners, Dental Implants, and Paediatric Dentistry in Thiruvananthapuram.",
};

export default function ServicesLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

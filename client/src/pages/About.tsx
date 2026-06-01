import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, Star, Award, Users, MapPin } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-hero-FUu5TVKLCe2R2eFu96xyHE.webp";

export default function About() {
  return (
    <Layout
      title="About MHSS Inc. | Family-Owned Hose Repair Since 1990 | Sarasota, FL"
      description="Mobile Hose & Spray Systems has served Sarasota since 1990. Family-owned, started from a bread truck, now two shop locations and an emergency mobile unit. Learn our story."
      canonical="https://www.mhss-inc.com/about"
    >
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(58,58,58,0.75) 40%, rgba(58,58,58,0.20) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Our Story — Sarasota, FL
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            ABOUT <span style={{ color: "#F5A623" }}>MHSS INC.</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", fontFamily: "'DM Sans', sans-serif" }}>
            Family-owned and operated since 1990. From a bread truck to two shop locations and an emergency mobile unit — this is the MHSS story.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* Origin Story */}
              <div>
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623", marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  FROM A BREAD TRUCK TO SARASOTA'S MOST TRUSTED HOSE SHOP
                </h2>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  In 1990, Mobile Hose &amp; Spray Systems started its first full-service operation out of an old bread truck. What began as a one-person mobile hose repair operation serving Sarasota's growing industrial and agricultural community has grown — through word of mouth, loyal customers, and a relentless commitment to quality — into a business with two shop locations and a dedicated emergency mobile unit.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  More than 35 years later, MHSS remains family-owned and operated. We take pride in our work and, more importantly, we have a team of hosers who aren't just good at what they do — they genuinely enjoy doing it. That passion shows in every hose assembly we crimp, every pressure washer we repair, and every rig we build.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  Our core business has always been hose repair — hydraulic hose assemblies, custom fittings, and on-site emergency service. Over the years, we've expanded into pressure washer sales and service, a full supply store stocking Honda pressure washers, Titan hose reels, and all the parts and accessories that contractors and industrial customers need. We also build complete custom pressure washing rigs for businesses throughout Southwest Florida.
                </p>
              </div>

              {/* What Sets Us Apart */}
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  WHAT SETS MHSS APART
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "35+ Years of Specialized Experience", desc: "We've been doing this since 1990. That's over three decades of experience with hydraulic hose systems, pressure washing equipment, and the specific needs of Sarasota-area businesses. We've seen it all and fixed most of it." },
                    { title: "Commercial Grade, Always", desc: "We repair, sell, and maintain equipment using only high-quality commercial and industrial grade products. We don't cut corners with consumer-grade parts, and we won't recommend a shortcut that will cost you more in the long run." },
                    { title: "The Hose Doctor — Emergency Mobile Unit", desc: "Our emergency mobile unit is a genuine market differentiator. Very few competitors offer on-site hydraulic hose repair with emergency availability. When your equipment goes down, we come to you." },
                    { title: "Two Locations, One Mobile Unit", desc: "Our Sarasota and Bradenton shop locations, combined with the emergency mobile unit, give us geographic coverage that most competitors can't match. Whether you're in Sarasota County or Manatee County, we're close." },
                    { title: "Family-Owned, Community-Focused", desc: "We're not a franchise or a national chain. We're a Sarasota family business, and we treat our customers the way we'd want to be treated. That's why so much of our business comes from referrals and repeat customers who've been with us for years." },
                  ].map((item) => (
                    <div key={item.title} className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                        {item.title}
                      </div>
                      <p style={{ color: "#909090", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Summary */}
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  OUR SERVICES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: "Hydraulic Hose Repair", href: "/hydraulic-hose-repair-sarasota" },
                    { label: "Pressure Washer Repair & Sales", href: "/pressure-washer-repair-sarasota" },
                    { label: "Pressure Washing Supply Store", href: "/pressure-washing-supply-store" },
                    { label: "Custom Rig Builds", href: "/pressure-washing-rig-builds" },
                    { label: "Emergency Mobile Service", href: "/emergency-mobile-hose-repair" },
                    { label: "Custom Hose Manufacturing", href: "/hydraulic-hose-repair-sarasota" },
                  ].map((svc) => (
                    <Link key={svc.href} href={svc.href} className="flex items-center gap-3 p-3 rounded transition-colors hover:bg-zinc-700" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <ArrowRight size={14} style={{ color: "#F5A623", flexShrink: 0 }} />
                      <span style={{ color: "#C0C0C0", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{svc.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#F5A623", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  By the Numbers
                </div>
                <div className="space-y-4">
                  {[
                    { icon: <Award size={18} />, value: "35+", label: "Years in Business" },
                    { icon: <MapPin size={18} />, value: "2", label: "Shop Locations" },
                    { icon: <Star size={18} />, value: "4.8★", label: "Google Rating" },
                    { icon: <Users size={18} />, value: "48+", label: "Google Reviews" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(245,158,11,0.12)", color: "#F5A623" }}>
                        {stat.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#F5A623", lineHeight: 1 }}>{stat.value}</div>
                        <div style={{ color: "#909090", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  VISIT US IN SARASOTA
                </h3>
                <p style={{ color: "#C0C0C0", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  552 Catarzi Way<br />Sarasota, FL 34232<br /><br />
                  Mon–Fri: 7:30am – 5:00pm
                </p>
                <a href="tel:+19413774673" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold transition-all hover:scale-105" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <Phone size={16} /> 941-377-4673
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold mt-3 transition-all hover:bg-zinc-700" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * AirlessSprayers page — MHSS Inc.
 * Design: dark industrial hero, white service sections, yellow accents
 * Focus: Certified repair shop & warranty service — NO products for sale
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2, Wrench, ShieldCheck, Clock, Award } from "lucide-react";

const SPRAYER_IMG = "/manus-storage/mhss3-airless_a1b2c3d4.jpg";

const SERVICES = [
  "Pump rebuilds and full pump replacements",
  "Motor and drive train diagnosis and repair",
  "Pressure control board and transducer service",
  "Tip, gun, and hose inspection and replacement",
  "Annual preventive maintenance service",
  "Warranty repairs — all covered brands",
  "Out-of-warranty repairs on all models",
  "Fluid section and packing replacement",
  "Filter and manifold cleaning and service",
  "On-site diagnosis for commercial accounts",
];

const BRANDS = [
  { name: "Graco", note: "Authorized Service Center — all Magnum, Mark, and ProContractor series" },
  { name: "Titan / SpeeFlo", note: "Authorized Service Center — Impact, RentSpray, and Speeflo series" },
  { name: "Tritech", note: "Certified repair — T3, T5, T7, and all current models" },
];

const WHY = [
  { icon: ShieldCheck, title: "Factory-Authorized Warranty Work", body: "MHSS is an authorized service center for Graco, Titan/SpeeFlo, and Tritech. Warranty repairs are performed to manufacturer specifications using genuine parts, so your warranty stays intact." },
  { icon: Wrench, title: "Experienced Technicians", body: "Our technicians have years of hands-on experience with professional airless sprayers across all major brands. We diagnose accurately the first time and fix it right." },
  { icon: Clock, title: "Fast Turnaround", body: "Most airless sprayer repairs are completed same day or next day. We understand that downtime costs money, and we treat every repair with urgency." },
  { icon: Award, title: "All Models Serviced", body: "Whether your machine is brand new and under warranty or a ten-year-old workhorse that needs a full rebuild, we have the parts and the expertise to get it running again." },
];

export default function AirlessSprayers() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout
      title="Airless Sprayer Repair Sarasota FL | Graco, Titan, Tritech Authorized Service — MHSS Inc."
      description="Certified airless sprayer repair and warranty service in Sarasota, FL. Authorized service center for Graco, Titan/SpeeFlo, and Tritech. Same-day and next-day repairs. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/airless-sprayers"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.mhss-inc.com/airless-sprayers#service",
        "name": "Airless Sprayer Repair & Warranty Service",
        "description": "Certified airless sprayer repair and warranty service in Sarasota, FL. Authorized service center for Graco, Titan/SpeeFlo, and Tritech.",
        "url": "https://www.mhss-inc.com/airless-sprayers",
        "provider": { "@type": "LocalBusiness", "@id": "https://www.mhss-inc.com/#business", "name": "Mobile Hose & Spray Systems, Inc." },
        "areaServed": { "@type": "City", "name": "Sarasota", "addressRegion": "FL" },
        "serviceType": "Airless Paint Sprayer Repair"
      }}
    >
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName="Airless Sprayer Repair / Service"
        productModel="Service Request"
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={SPRAYER_IMG} alt="Airless sprayer repair Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.75) 60%, rgba(28,28,28,0.35) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Airless Sprayer Repair</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Certified Warranty Repair Center · Graco · Titan/SpeeFlo · Tritech · Parts & Accessories In Stock
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Airless Sprayer Repair &amp;<br /><span style={{ color: "#FFD100" }}>Warranty Service — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", marginBottom: "1.75rem" }}>
            MHSS is a certified warranty repair center for Graco, Titan/SpeeFlo, and Tritech airless paint sprayers. We perform warranty repairs, full rebuilds, and routine maintenance — with most jobs completed same day or next day. Parts, kits, tips, guns, and hoses in stock. Factory direct pricing.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> Call: (941) 377-4673
            </a>
            <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer" }}>
              Schedule a Repair
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Choose MHSS ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem", maxWidth: "640px" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8860B", display: "block", marginBottom: "0.5rem" }}>Why MHSS</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#1C1C1C", marginBottom: "0.75rem" }}>
              Sarasota's Trusted Airless Sprayer <span style={{ color: "#B8860B" }}>Service Center</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.95rem", lineHeight: 1.75 }}>
              When your airless sprayer goes down, you need it fixed fast and fixed right. MHSS has been serving contractors, painters, and industrial customers in the Sarasota area for years. We are factory-authorized for the brands that matter most, and we stock the parts to back it up.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.75rem" }}>
            {WHY.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "0.75rem", padding: "1.75rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", backgroundColor: "rgba(184,134,11,0.1)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <Icon size={20} style={{ color: "#B8860B" }} />
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1C1C1C", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services List ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8860B", display: "block", marginBottom: "0.5rem" }}>What We Service</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C", marginBottom: "1.25rem" }}>
              Complete Repair &amp; Maintenance Services
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              From a simple tip replacement to a full pump rebuild, MHSS handles every aspect of airless sprayer service. We carry genuine manufacturer parts for all covered brands and can source components for virtually any model.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {SERVICES.map(s => (
                <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "#374151", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={15} style={{ color: "#B8860B", flexShrink: 0, marginTop: "0.15rem" }} /> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Authorized Brands */}
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8860B", display: "block", marginBottom: "0.5rem" }}>Authorized Brands</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C", marginBottom: "1.25rem" }}>
              Factory-Authorized for the Brands You Use
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              Being factory-authorized means we are trained and certified by the manufacturer to perform warranty repairs. Your warranty remains valid when serviced at MHSS — no voided coverage, no workarounds.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {BRANDS.map(b => (
                <div key={b.name} style={{ backgroundColor: "#F9F7F4", border: "1px solid #E5E7EB", borderLeft: "4px solid #B8860B", borderRadius: "0.5rem", padding: "1.25rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1C1C", marginBottom: "0.25rem" }}>{b.name}</div>
                  <div style={{ color: "#6B7280", fontSize: "0.85rem" }}>{b.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Get Your Sprayer Running</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Bring It In or Give Us a Call
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.75 }}>
              Drop off your sprayer at our Sarasota location or call us to describe the issue and we can often give you a preliminary diagnosis over the phone. Most repairs are turned around same day or next day. We service walk-in customers and commercial accounts.
            </p>
          </div>
          <div style={{ backgroundColor: "#2A2A2A", border: "1px solid #444", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>
              SCHEDULE A REPAIR
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem", marginBottom: "1.5rem" }}>552 Catarzi Way, Sarasota FL · Mon–Fri 7:30am–5pm</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Phone size={16} /> (941) 377-4673
              </a>
              <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", border: "1px solid #555", cursor: "pointer" }}>
                Schedule a Repair Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

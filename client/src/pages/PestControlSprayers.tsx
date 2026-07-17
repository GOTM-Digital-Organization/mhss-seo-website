/**
 * PestControlSprayers page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2, Wrench } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-pest-control_cc2fb89b.jpg";

const PRODUCTS = [
  // UDOR Pumps
  { brand: "UDOR", model: "KAPPA 25/20", name: "Kappa 25/20 Diaphragm Pump", specs: ["2000 PSI / 6.6 GPM", "Diaphragm design", "Chemical resistant seals", "Ideal for pest control / spray", "PTO or engine mount"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "UDOR", model: "KAPPA 43/35", name: "Kappa 43/35 Diaphragm Pump", specs: ["3500 PSI / 11.4 GPM", "Diaphragm design", "Chemical resistant", "High-volume spray rigs", "Stainless valves"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "UDOR", model: "ZETA 85/18", name: "Zeta 85/18 Diaphragm Pump", specs: ["1800 PSI / 22.4 GPM", "High-volume diaphragm", "Chemical resistant", "Lawn spray applications", "Gear reduction drive"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" as const },
  // Hypro Pumps
  { brand: "Hypro", model: "9910-D30GR", name: "D30 Roller Pump", specs: ["Up to 200 PSI", "Up to 30 GPM", "Chemical resistant rollers", "Gear reduction drive", "Ideal for low-pressure spray"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Hypro", model: "9910-D50GR", name: "D50 Roller Pump", specs: ["Up to 200 PSI", "Up to 50 GPM", "Chemical resistant rollers", "Gear reduction drive", "Large spray rigs"], price: "Call for Pricing" },
  // Tanks
  { brand: "Norwesco", model: "NW-25-TANK", name: "25 Gallon Nurse Tank", specs: ["25 gallon capacity", "Polyethylene construction", "Chemical resistant", "Flat bottom", "Multiple outlet sizes"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Norwesco", model: "NW-50-TANK", name: "50 Gallon Spray Tank", specs: ["50 gallon capacity", "Polyethylene construction", "Chemical resistant", "Flat bottom", "Truck bed compatible"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Norwesco", model: "NW-100-TANK", name: "100 Gallon Spray Tank", specs: ["100 gallon capacity", "Polyethylene construction", "Chemical resistant", "Flat bottom", "Trailer or truck mount"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Spray Guns & Wands
  { brand: "Chapin", model: "6-8728", name: "Pest Control Spray Gun", specs: ["Adjustable nozzle", "Chemical resistant", "Ergonomic grip", "1/4\" NPT inlet"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "BOOM-SPRAY", name: "Boom Spray Nozzle Set", specs: ["Flat fan nozzles", "Multiple tip sizes", "Chemical resistant", "1/4\" NPT fittings"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Hose
  { brand: "Various", model: "SPRAY-HOSE-50", name: "50 ft Chemical Spray Hose", specs: ["Chemical resistant liner", "300 PSI rated", "3/8\" ID", "Brass fittings"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Pressure Regulators
  { brand: "Hypro", model: "3430-0001", name: "Pressure Regulator / Relief Valve", specs: ["Up to 300 PSI", "Adjustable relief", "Brass body", "Fits most spray systems"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function PestControlSprayers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Ag & Pest Control Spray Systems Sarasota FL | Custom Fabrication — MHSS Inc."
      description="Agricultural and pest control spray system fabrication, sales, and repair in Sarasota, FL. Custom rig builds, UDOR & Hypro pumps, poly tanks, hose reels, ag hose, spray guns. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pest-control-sprayers"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.mhss-inc.com/pest-control-sprayers#service",
        "name": "Ag & Pest Control Spray System Fabrication & Repair",
        "description": "Agricultural and pest control spray system fabrication, sales, and repair in Sarasota, FL. Custom rig builds, UDOR & Hypro pumps, poly tanks, hose reels, ag hose, spray guns.",
        "url": "https://www.mhss-inc.com/pest-control-sprayers",
        "provider": { "@type": "LocalBusiness", "@id": "https://www.mhss-inc.com/#business", "name": "Mobile Hose & Spray Systems, Inc." },
        "areaServed": { "@type": "City", "name": "Sarasota", "addressRegion": "FL" },
        "serviceType": "Agricultural Spray System Fabrication and Repair"
      }}
    >
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={quoteProduct?.name}
        productModel={quoteProduct?.model}
      />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMG} alt="Pest control sprayer service Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Pest Control Sprayers</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Custom Fabrication · Ag & Pest Control · UDOR · Hypro · Poly Tanks · Hose Reels
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Ag & Pest Control<br /><span style={{ color: "#FFD100" }}>Spray Systems — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS fabricates, sells, and repairs agricultural and pest control spray systems for Sarasota-area contractors, landscapers, and farmers. Custom rig builds designed for your application — poly tanks, hose reels, UDOR and Hypro pumps, ag hose, spray guns, and complete system assemblies in stock.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> Call: (941) 377-4673
            </a>
            <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer" }}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C" }}>
              Spray Equipment <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Pumps, tanks, guns, hoses, and nozzles. Click "Request Quote" or call for current pricing.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {PRODUCTS.map(p => (
              <ProductCard
                key={p.model}
                brand={p.brand}
                model={p.model}
                name={p.name}
                specs={p.specs}
                price={p.price}
                badge={p.badge}
                badgeColor={p.badgeColor}
                onQuote={() => openQuote(`${p.brand} ${p.name}`, p.model)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Custom Spray Rig Builds</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Spray Rig Service &amp; Repair in Sarasota
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Whether you need a pump rebuilt, a tank replaced, or a complete custom spray rig built from scratch, MHSS has the parts and expertise to get the job done.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["UDOR and Hypro pump rebuilds", "Spray tank replacement and mounting", "Custom rig fabrication", "Hose and fitting replacement", "Nozzle and boom service", "All makes and models serviced"].map(i => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#D0D0D0", fontSize: "0.875rem" }}>
                  <CheckCircle2 size={14} style={{ color: "#FFD100", flexShrink: 0 }} /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "#2A2A2A", border: "1px solid #444", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
            <Wrench size={32} style={{ color: "#FFD100", margin: "0 auto 1rem" }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
              NEED SERVICE OR A QUOTE?
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem", marginBottom: "1.5rem" }}>552 Catarzi Way, Sarasota FL · Mon–Fri 8am–5pm</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Phone size={16} /> (941) 377-4673
              </a>
              <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", border: "1px solid #555", cursor: "pointer" }}>
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

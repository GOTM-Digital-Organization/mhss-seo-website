/**
 * AirlessSprayers page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const SPRAYER_IMG = "/manus-storage/mhss3-airless_a1b2c3d4.jpg";

const PRODUCTS = [
  // Graco
  { brand: "Graco", model: "Magnum X5", name: "Magnum X5 Airless Sprayer", specs: ["0.27 GPM max flow", "3000 PSI", "Stainless steel piston pump", "25 ft hose included", "Ideal for residential"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Graco", model: "Magnum X7", name: "Magnum X7 Airless Sprayer", specs: ["0.31 GPM max flow", "3000 PSI", "Stainless steel piston pump", "50 ft hose included", "Cart mounted"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Graco", model: "Mark V", name: "Mark V Airless Sprayer", specs: ["0.45 GPM max flow", "3300 PSI", "ProConnect pump replacement", "75 ft hose", "Heavy-duty cart"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Graco", model: "GX19", name: "GX19 Gas Airless Sprayer", specs: ["0.54 GPM max flow", "3300 PSI", "Honda GX35 engine", "75 ft hose", "No power source needed"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" as const },
  // Titan / SpeeFlo
  { brand: "Titan", model: "Impact 440", name: "Impact 440 Airless Sprayer", specs: ["0.44 GPM max flow", "3300 PSI", "Endurance pump", "50 ft hose", "Digital pressure control"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Titan", model: "Impact 640", name: "Impact 640 Airless Sprayer", specs: ["0.54 GPM max flow", "3300 PSI", "Endurance pump", "75 ft hose", "Heavy-duty cart"], price: "Call for Pricing" },
  { brand: "Titan", model: "RentSpray 1500", name: "RentSpray 1500 Sprayer", specs: ["0.33 GPM max flow", "3000 PSI", "Contractor grade", "50 ft hose", "Easy maintenance"], price: "Call for Pricing" },
  // Tritech
  { brand: "Tritech", model: "T3", name: "T3 Airless Sprayer", specs: ["0.33 GPM max flow", "3000 PSI", "Compact design", "50 ft hose", "Lightweight cart"], price: "Call for Pricing" },
  { brand: "Tritech", model: "T5", name: "T5 Airless Sprayer", specs: ["0.44 GPM max flow", "3300 PSI", "Professional grade", "75 ft hose", "Stainless pump"], price: "Call for Pricing" },
  // Parts / Accessories
  { brand: "Graco", model: "RAC-X-517", name: "RAC X SwitchTip 517", specs: ["0.017\" orifice", "10\" fan width", "Reversible tip", "Fits all Graco guns"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "SPRAY-GUN-PRO", name: "Airless Spray Gun", specs: ["3600 PSI rated", "Tip guard included", "1/4\" NPS inlet", "Fits Graco, Titan, Tritech"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "HOSE-AIRLESS-50", name: "50 ft Airless Hose", specs: ["3300 PSI rated", "1/4\" ID", "Whip hose compatible", "Graco & Titan fittings"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function AirlessSprayers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Airless Sprayers Sarasota FL | Graco, Titan, Tritech — Sales & Service — MHSS Inc."
      description="Airless paint sprayers in Sarasota, FL. Graco, Titan/SpeeFlo, and Tritech sales and authorized service. Parts, tips, guns, and hoses in stock. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/airless-sprayers"
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
          <img src={SPRAYER_IMG} alt="Airless sprayer service Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Airless Sprayers</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Authorized Service Center — Graco · Titan/SpeeFlo · Tritech
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Airless Sprayers —<br /><span style={{ color: "#FFD100" }}>Sales, Service & Parts</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS is an authorized service center for Graco, Titan/SpeeFlo, and Tritech airless sprayers. We stock machines, tips, guns, hoses, and repair parts. Most repairs are completed same day or next day.
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
              Airless Sprayer <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Machines, tips, guns, and parts. Click "Request Quote" or call for current pricing.</p>
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
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Authorized Service Center</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Airless Sprayer Repair in Sarasota
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Whether your sprayer is under warranty or out of warranty, MHSS has the parts and expertise to get it running again. We service all Graco, Titan, and Tritech models.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Pump rebuilds and replacements", "Motor and drive train repair", "Pressure control service", "Tip, gun, and hose replacement", "Annual maintenance service", "Warranty and out-of-warranty repairs"].map(i => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#D0D0D0", fontSize: "0.875rem" }}>
                  <CheckCircle2 size={14} style={{ color: "#FFD100", flexShrink: 0 }} /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "#2A2A2A", border: "1px solid #444", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
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

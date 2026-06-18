/**
 * Pumps page — MHSS Inc. (redirects/supplements PumpsAndParts)
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-pumps_b88feb86.jpg";

const PUMPS = [
  { brand: "General Pump", model: "TSS1021", name: "T-47 Triplex Plunger Pump", specs: ["3500 PSI / 4.5 GPM", "Belt drive", "Solid shaft", "Brass manifold", "Ceramic plungers"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "General Pump", model: "TS2021", name: "T-47 High-Flow Triplex Pump", specs: ["3500 PSI / 5.6 GPM", "Belt drive", "Right shaft", "Brass manifold", "High-volume commercial"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "CAT Pumps", model: "5CP3120", name: "5CP Triplex Plunger Pump", specs: ["3500 PSI / 4.5 GPM", "Belt drive", "Solid shaft", "Chrome plungers", "Stainless valves"], price: "Call for Pricing", badge: "Authorized Service", badgeColor: "yellow" as const },
  { brand: "CAT Pumps", model: "5CP2120W", name: "5CP High-Flow Triplex Pump", specs: ["2000 PSI / 5.0 GPM", "Belt drive", "W770 brass manifold", "Chemical injection ready", "Soft-wash compatible"], price: "Call for Pricing", badge: "Authorized Service", badgeColor: "yellow" as const },
  { brand: "AR Pumps", model: "RRV3G30D", name: "RRV Axial Cam Pump", specs: ["3000 PSI / 3.0 GPM", "Direct drive", "Hollow shaft", "5-year warranty", "Lightweight design"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Comet Pumps", model: "AXD3025G", name: "AXD Axial Pump", specs: ["3000 PSI / 2.5 GPM", "Direct drive", "Hollow shaft", "Aluminum crankcase", "Brass manifold"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "UDOR Pumps", model: "Kappa 30/18", name: "Kappa Triplex Plunger Pump", specs: ["2600 PSI / 4.8 GPM", "Belt drive", "Solid shaft", "Ceramic plungers", "Stainless valves"], price: "Call for Pricing" },
  { brand: "General Pump", model: "TP2530J34", name: "TP51 Compact Triplex Pump", specs: ["2500 PSI / 2.88 GPM", "Belt drive", "Solid shaft", "Brass manifold", "Easy service access"], price: "Call for Pricing" },
];

const repairServices = [
  "Pump rebuild & seal replacement",
  "Valve inspection & replacement",
  "Unloader valve service",
  "Thermal relief valve replacement",
  "Pressure testing & flow verification",
  "Pump kit supply for all major brands",
];

export default function Pumps() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Pressure Washer Pumps — General, CAT, AR, Comet, UDOR | MHSS Sarasota FL"
      description="Pressure washer pump sales, service, and repair in Sarasota FL. General Pump, CAT Pumps, AR, Comet, and UDOR triplex and axial pumps in stock. Pump kits and rebuild parts available. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pumps"
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
          <img src={HERO_IMG} alt="Pressure washer pumps Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Pumps</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            General · CAT · AR · Comet · UDOR
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            PRESSURE WASHER<br /><span style={{ color: "#FFD100" }}>PUMPS &amp; PUMP KITS</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            General Pump, CAT Pumps, AR, Comet, and UDOR — sales, service, and authorized repair at our Sarasota facility. Pump kits and rebuild parts in stock.
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

      {/* Pump Catalog */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C" }}>
              Pumps In Stock &amp; <span style={{ color: "#FFD100" }}>Available to Order</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>All pumps available with rebuild kits and replacement parts. Click "Request Quote" or call for current pricing.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {PUMPS.map(p => (
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

      {/* Pump Repair Service */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Authorized Service Center</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C", marginBottom: "1rem" }}>
                Pump Repair &amp; Rebuild Service
              </h2>
              <p style={{ color: "#1A1A1A", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                Our technicians have been servicing commercial pressure washer pumps for over 35 years. We carry rebuild kits, seal kits, valve kits, and replacement parts for all major brands — most repairs completed same-day or next-day.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {repairServices.map((s, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#1C1C1C", fontSize: "0.875rem" }}>
                    <CheckCircle size={14} color="#FFD100" /> {s}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone size={15} /> Call Now
                </a>
                <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", border: "1px solid #333", cursor: "pointer" }}>
                  Get a Quote
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: "#F2EFE9", borderRadius: "0.5rem", padding: "2rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1C1C1C", marginBottom: "1rem" }}>
                BRANDS WE SERVICE
              </div>
              {["General Pump", "CAT Pumps", "AR (Annovi Reverberi)", "Comet Pumps", "UDOR Pumps", "Interpump", "Giant Pumps"].map((brand, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: i < 6 ? "1px solid #E5E0D8" : "none" }}>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: "#1C1C1C" }}>{brand}</span>
                  <ArrowRight size={14} color="#FFD100" />
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", backgroundColor: "#FFD100", borderRadius: "0.25rem", padding: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1C1C1C" }}>
                  MOST REPAIRS SAME-DAY
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1C1C1C", marginTop: "0.25rem" }}>
                  Bring your pump in — we'll diagnose it on the spot
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#FFFFFF" }}>
              NEED A PUMP? HAVE A PUMP PROBLEM?
            </div>
            <div style={{ color: "#AAAAAA", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
              552 Catarzi Way, Sarasota FL — Mon–Fri 8am–5pm
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} /> (941) 377-4673
            </a>
            <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", border: "1px solid #555", cursor: "pointer" }}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

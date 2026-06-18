/**
 * PumpsAndParts page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-pumps_b88feb86.jpg";

interface Product {
  brand: string;
  model: string;
  name: string;
  specs: string[];
  price: string;
  badge?: string;
  badgeColor?: "yellow" | "green" | "red" | "blue";
  imageUrl?: string;
}

const PUMPS: Product[] = [
  // General Pump
  { brand: "General Pump", model: "TS1511", name: "Triplex Plunger Pump", specs: ["1500 PSI / 1.1 GPM", "3/4\" direct drive shaft", "Thermal relief valve port", "Brass manifold"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "General Pump", model: "TS2021", name: "Triplex Plunger Pump", specs: ["2000 PSI / 2.1 GPM", "3/4\" direct drive shaft", "Unloader port included", "Brass manifold"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "General Pump", model: "TS2511", name: "Triplex Plunger Pump", specs: ["2500 PSI / 2.5 GPM", "3/4\" direct drive shaft", "Chemical injector port", "Aluminum manifold"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "General Pump", model: "TS3021", name: "Triplex Plunger Pump", specs: ["3000 PSI / 2.1 GPM", "5/8\" direct drive shaft", "Brass manifold", "Rebuild kit available"], price: "Call for Pricing" },
  { brand: "General Pump", model: "T9971", name: "Belt Drive Triplex Pump", specs: ["3500 PSI / 4.0 GPM", "1\" belt drive shaft", "Ceramic plungers", "Stainless steel valves"], price: "Call for Pricing" },
  // CAT Pumps
  { brand: "CAT Pumps", model: "4PPX30GSI", name: "Triplex Plunger Pump", specs: ["3000 PSI / 3.0 GPM", "3/4\" direct drive", "Stainless steel valves", "Ceramic plungers"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "CAT Pumps", model: "5CP2120", name: "Triplex Plunger Pump", specs: ["2000 PSI / 2.1 GPM", "5/8\" direct drive", "Brass manifold", "Thermal relief port"], price: "Call for Pricing" },
  // AR Pumps
  { brand: "AR Pumps", model: "RMW2.2G24", name: "Axial Cam Pump", specs: ["2400 PSI / 2.2 GPM", "3/4\" shaft", "Integrated unloader", "Thermal relief valve"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "AR Pumps", model: "RMW3.5G30", name: "Axial Cam Pump", specs: ["3000 PSI / 3.5 GPM", "7/8\" shaft", "Integrated unloader", "Chemical injector"], price: "Call for Pricing" },
  // Comet Pumps
  { brand: "Comet Pumps", model: "AXD3025G", name: "Axial Drive Pump", specs: ["3000 PSI / 2.5 GPM", "3/4\" direct drive", "Aluminum head", "Thermal valve port"], price: "Call for Pricing" },
  // UDOR
  { brand: "UDOR", model: "KAPPA 25/20", name: "Triplex Diaphragm Pump", specs: ["2000 PSI / 6.6 GPM", "Diaphragm design", "Chemical resistant", "Ideal for pest control / spray"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" },
];

const PARTS: Product[] = [
  { brand: "General Pump", model: "DP40040", name: "Pump Repair Kit", specs: ["Fits TS2021 / TS2511", "Includes seals, O-rings, valves", "OEM quality"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "GUN-PRO", name: "Professional Spray Gun", specs: ["4000 PSI rated", "Trigger lock safety", "1/4\" QC inlet", "Ergonomic grip"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "WAND-24", name: "24\" Extension Wand", specs: ["4000 PSI rated", "1/4\" QC connections", "Stainless steel", "Multiple lengths available"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "MTM Hydro", model: "DS-TIP-SET", name: "Spray Tip Set — 5 Pack", specs: ["0°, 15°, 25°, 40°, soap tips", "4000 PSI rated", "Color-coded", "1/4\" QC"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "INJECTOR-DS", name: "Downstream Chemical Injector", specs: ["Up to 4000 PSI", "Adjustable draw rate", "1/4\" QC fittings", "Stainless ball"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "UNLOADER-VRT", name: "VRT Unloader Valve", specs: ["Up to 5000 PSI", "Variable relief", "Fits most pump brands", "Rebuild kit available"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "THERMAL-VALVE", name: "Thermal Relief Valve", specs: ["Opens at 145°F", "1/4\" NPT", "Protects pump from heat buildup", "Brass body"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "Various", model: "HOSE-50-3000", name: "50 ft Pressure Washer Hose", specs: ["3000 PSI rated", "3/8\" ID", "M22 fittings", "Non-marking jacket"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
];

export default function PumpsAndParts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Pressure Washer Pumps & Parts Sarasota FL | General, Cat, AR, Comet, UDOR — MHSS Inc."
      description="Pressure washer pumps and parts in Sarasota, FL. General Pump, Cat Pumps, AR, Comet, UDOR pump kits. Guns, wands, tips, injectors, unloaders, thermal valves. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pumps-parts"
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
          <img src={HERO_IMG} alt="Pressure washer pumps and parts Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Pumps &amp; Parts</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            General · Cat · AR · Comet · UDOR
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pressure Washer Pumps &amp;<br /><span style={{ color: "#FFD100" }}>Components — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks a comprehensive inventory of pressure washer pumps from the industry's leading manufacturers, along with all the components you need — guns, wands, tips, injectors, unloaders, and more.
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

      {/* Pumps Catalog */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.4rem" }}>Pumps</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C" }}>
              Pressure Washer <span style={{ color: "#FFD100" }}>Pumps</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Pump kits and rebuild parts in stock. Most pump repairs done same day.</p>
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
                imageUrl={p.imageUrl}
                onQuote={() => openQuote(`${p.brand} ${p.name}`, p.model)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parts Catalog */}
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem", borderTop: "2px solid #E5E0D8", paddingTop: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.4rem" }}>Accessories & Parts</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C" }}>
              Guns, Wands, Tips &amp; <span style={{ color: "#FFD100" }}>Accessories</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Extensive in-stock inventory of guns, wands, tips, hoses, injectors, unloaders, and repair parts.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {PARTS.map(p => (
              <ProductCard
                key={p.model}
                brand={p.brand}
                model={p.model}
                name={p.name}
                specs={p.specs}
                price={p.price}
                badge={p.badge}
                badgeColor={p.badgeColor}
                imageUrl={p.imageUrl}
                onQuote={() => openQuote(`${p.brand} ${p.name}`, p.model)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FFFFFF", marginBottom: "0.5rem" }}>
            DON'T SEE WHAT YOU NEED?
          </div>
          <p style={{ color: "#9CA3AF", fontSize: "0.9rem", marginBottom: "1.5rem" }}>We stock hundreds of pump models and parts. Call us — if we don't have it, we can get it.</p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} /> (941) 377-4673
            </a>
            <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", border: "1px solid #555", cursor: "pointer" }}>
              Request a Quote
            </button>
          </div>
          <div style={{ color: "#6B7280", fontSize: "0.78rem", marginTop: "1rem" }}>
            <CheckCircle2 size={12} style={{ display: "inline", marginRight: "0.3rem", color: "#FFD100" }} />
            552 Catarzi Way, Sarasota FL · Mon–Fri 8am–5pm
          </div>
        </div>
      </section>
    </Layout>
  );
}

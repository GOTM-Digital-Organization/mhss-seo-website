/**
 * PressureWasherParts page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-hero_275e7d18.jpg";

const PRODUCTS = [
  // Spray Guns
  { brand: "MTM Hydro", model: "SG28", name: "SG28 Professional Spray Gun", specs: ["4000 PSI rated", "Trigger lock safety", "1/4\" QC inlet", "Ergonomic grip", "Stainless internals"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Suttner", model: "ST-2600", name: "ST-2600 Professional Gun", specs: ["4350 PSI rated", "Trigger lock", "1/4\" QC inlet", "Chemical resistant", "German engineered"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Wands
  { brand: "Various", model: "WAND-24-SS", name: "24\" Stainless Steel Wand", specs: ["4000 PSI rated", "1/4\" QC connections", "Stainless steel", "Swivel coupler"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "WAND-48-SS", name: "48\" Stainless Steel Wand", specs: ["4000 PSI rated", "1/4\" QC connections", "Stainless steel", "Extended reach"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "WAND-TELE", name: "Telescoping Wand 12–24 ft", specs: ["Up to 3000 PSI", "Adjustable length", "1/4\" QC connections", "Lightweight aluminum"], price: "Call for Pricing" },
  // Spray Tips
  { brand: "MTM Hydro", model: "DS-TIP-SET", name: "Spray Tip Set — 5 Pack", specs: ["0°, 15°, 25°, 40°, soap tips", "4000 PSI rated", "Color-coded", "1/4\" QC"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Suttner", model: "ST-49 TURBO", name: "Turbo / Rotary Nozzle", specs: ["Up to 4000 PSI", "0° rotating pattern", "3× faster cleaning", "1/4\" QC"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Hose
  { brand: "Various", model: "HOSE-50-3000", name: "50 ft Pressure Washer Hose", specs: ["3000 PSI rated", "3/8\" ID", "M22 fittings", "Non-marking jacket"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "HOSE-100-3000", name: "100 ft Pressure Washer Hose", specs: ["3000 PSI rated", "3/8\" ID", "M22 fittings", "Non-marking jacket"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "HOSE-HOT-50", name: "50 ft Hot Water Hose", specs: ["4000 PSI rated", "Rated to 250°F", "3/8\" ID", "Wire braid reinforced"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Chemical Injectors
  { brand: "Various", model: "INJECTOR-DS", name: "Downstream Chemical Injector", specs: ["Up to 4000 PSI", "Adjustable draw rate", "1/4\" QC fittings", "Stainless ball"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "INJECTOR-US", name: "Upstream Chemical Injector", specs: ["Up to 2000 PSI", "Fixed draw rate", "1/4\" NPT fittings", "Brass body"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Unloaders & Valves
  { brand: "Various", model: "UNLOADER-VRT", name: "VRT Unloader Valve", specs: ["Up to 5000 PSI", "Variable relief", "Fits most pump brands", "Rebuild kit available"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "THERMAL-VALVE", name: "Thermal Relief Valve", specs: ["Opens at 145°F", "1/4\" NPT", "Protects pump from heat", "Brass body"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Fittings
  { brand: "Various", model: "QC-FITTING-KIT", name: "Quick Connect Fitting Kit", specs: ["M22 male & female", "1/4\" QC male & female", "Stainless steel", "12-piece assortment"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Detergents
  { brand: "Simple Cherry", model: "SC-1G", name: "Simple Cherry Car Wash Soap", specs: ["1 gallon concentrate", "Cherry scent", "Safe on all surfaces", "Downstream injection"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Krud Kutter", model: "KK-1G", name: "Krud Kutter Pressure Wash Cleaner", specs: ["1 gallon", "Heavy-duty degreaser", "Biodegradable", "Downstream injection"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function PressureWasherParts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Pressure Washer Parts & Accessories Sarasota FL | Guns, Wands, Tips, Hose — MHSS Inc."
      description="Pressure washer parts and accessories in Sarasota, FL. Spray guns, wands, tips, hose, chemical injectors, unloaders, thermal valves, fittings, and detergents in stock. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pressure-washer-parts"
      schema={
        {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.mhss-inc.com/pressure-washer-parts#page",
        "name": "Pressure Washer Parts & Accessories Sarasota FL — MHSS Inc.",
        "url": "https://www.mhss-inc.com/pressure-washer-parts",
        "provider": { "@type": "LocalBusiness", "@id": "https://www.mhss-inc.com/#business", "name": "Mobile Hose & Spray Systems, Inc." }
      }
      }
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
          <img src={HERO_IMG} alt="Pressure washer parts and accessories Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Pressure Washer Parts</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Guns · Wands · Tips · Hose · Injectors · Valves · Detergents
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pressure Washer<br /><span style={{ color: "#FFD100" }}>Parts &amp; Accessories</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks a comprehensive inventory of pressure washer parts and accessories — spray guns, wands, tips, hose, chemical injectors, unloaders, thermal valves, fittings, and cleaning chemicals.
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
              Parts &amp; Accessories <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Extensive in-stock inventory. Click "Request Quote" or call for current pricing and availability.</p>
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

      {/* CTA */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF" }}>DON'T SEE WHAT YOU NEED?</div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>We stock hundreds of parts. Call us — if we don't have it, we can get it.</div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> (941) 377-4673
            </a>
            <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", border: "1px solid #555", cursor: "pointer" }}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

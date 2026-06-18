/**
 * DecoProducts page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-deco-products_49aa6d4f.jpg";

const PRODUCTS = [
  // Paver Sealers
  { brand: "MHSS / Deco", model: "WB-PAVER-GL", name: "Water-Based Paver Sealer — Gloss", specs: ["Water-based formula", "Gloss finish", "UV resistant", "Wet look enhancement", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "MHSS / Deco", model: "WB-PAVER-MATTE", name: "Water-Based Paver Sealer — Matte", specs: ["Water-based formula", "Matte / natural finish", "UV resistant", "No color change", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "MHSS / Deco", model: "WB-PAVER-5G", name: "Water-Based Paver Sealer — 5 Gallon", specs: ["Water-based formula", "Gloss or matte available", "UV resistant", "Covers up to 1500 sq ft", "5 gallon pail"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Travertine Sealers
  { brand: "MHSS / Deco", model: "TRAV-SEAL-GL", name: "Travertine Sealer — Gloss", specs: ["Penetrating sealer", "Gloss finish", "Enhances natural color", "Water and stain resistant", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "MHSS / Deco", model: "TRAV-SEAL-MATTE", name: "Travertine Sealer — Matte", specs: ["Penetrating sealer", "Matte / natural finish", "Water and stain resistant", "Interior and exterior", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Waterproofing
  { brand: "MHSS / Deco", model: "WATERPROOF-GL", name: "Concrete Waterproofing Sealer", specs: ["Penetrating formula", "Repels water and oil", "Breathable coating", "Interior and exterior", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "MHSS / Deco", model: "WATERPROOF-5G", name: "Concrete Waterproofing Sealer — 5 Gallon", specs: ["Penetrating formula", "Repels water and oil", "Breathable coating", "Covers up to 2000 sq ft", "5 gallon pail"], price: "Call for Pricing" },
  // Stripper
  { brand: "MHSS / Deco", model: "STRIP-PAVER-GL", name: "Paver Sealer Stripper", specs: ["Removes old sealer", "Water-based formula", "Safe on pavers and travertine", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "MHSS / Deco", model: "STRIP-PAVER-5G", name: "Paver Sealer Stripper — 5 Gallon", specs: ["Removes old sealer", "Water-based formula", "Safe on pavers and travertine", "5 gallon pail"], price: "Call for Pricing" },
  // Efflorescence Cleaner
  { brand: "MHSS / Deco", model: "EFFLO-CLEAN-GL", name: "Efflorescence Cleaner", specs: ["Removes white mineral deposits", "Safe on pavers and concrete", "Acid-based formula", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  // Joint Sand Stabilizer
  { brand: "MHSS / Deco", model: "SAND-STAB-GL", name: "Joint Sand Stabilizer", specs: ["Locks polymeric joint sand", "Prevents ant intrusion", "Water-based formula", "1 gallon"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function DecoProducts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Paver Sealers & Deco Products Sarasota FL | MHSS Inc."
      description="Paver sealers, travertine sealers, waterproofing products, and paver sealer stripper in Sarasota, FL. Water-based and single-part formulas. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/deco-products"
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
          <img src={HERO_IMG} alt="Paver sealers and deco products Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Deco Products</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Paver Sealers · Travertine Sealers · Waterproofing · Stripper
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Paver Sealers &amp;<br /><span style={{ color: "#FFD100" }}>Deco Products — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks a complete line of paver sealers, travertine sealers, waterproofing products, and strippers for contractors and homeowners in the Sarasota area. Water-based, single-part formulas in gloss and matte finishes.
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
              Deco Products <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>In stock. Click "Request Quote" or call for current pricing and contractor volume discounts.</p>
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
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF" }}>CONTRACTOR VOLUME PRICING AVAILABLE</div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>Call for bulk pricing on paver sealers and deco products.</div>
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

/**
 * SurfaceCleaners page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-surface-cleaners_afe987c3.jpg";

const PRODUCTS = [
  // WhisperWash
  { brand: "WhisperWash", model: "WW-CLASSIC-16", name: "Classic 16\" Surface Cleaner", specs: ["16\" cleaning path", "3000–4000 PSI rated", "3–5 GPM", "Dual nozzle bar", "Quiet operation"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "WhisperWash", model: "WW-CLASSIC-19", name: "Classic 19\" Surface Cleaner", specs: ["19\" cleaning path", "3000–4000 PSI rated", "4–6 GPM", "Dual nozzle bar", "Stainless housing"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "WhisperWash", model: "WW-GRANDSLAM-24", name: "Grand Slam 24\" Surface Cleaner", specs: ["24\" cleaning path", "3500–5000 PSI rated", "5–8 GPM", "4-nozzle bar", "Commercial grade"], price: "Call for Pricing" },
  { brand: "WhisperWash", model: "WW-BIGGUY-28", name: "Big Guy 28\" Surface Cleaner", specs: ["28\" cleaning path", "4000–5000 PSI rated", "6–10 GPM", "Heavy commercial use", "4-nozzle bar"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" as const },
  // Whirlaway
  { brand: "Whirlaway", model: "WA-1501", name: "1501 Surface Cleaner 15\"", specs: ["15\" cleaning path", "Up to 3000 PSI", "2–4 GPM", "Replacement nozzles available"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Whirlaway", model: "WA-1701", name: "1701 Surface Cleaner 17\"", specs: ["17\" cleaning path", "Up to 3500 PSI", "3–5 GPM", "Sealed bearing"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Whirlaway", model: "WA-2001", name: "2001 Surface Cleaner 20\"", specs: ["20\" cleaning path", "Up to 4000 PSI", "4–6 GPM", "Stainless nozzle bar"], price: "Call for Pricing" },
  // Hammerhead
  { brand: "Hammerhead", model: "HH16", name: "HH16 Surface Cleaner 16\"", specs: ["16\" cleaning path", "4000 PSI max", "4 GPM max", "Sealed bearing design", "Stainless steel"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Hammerhead", model: "HH20", name: "HH20 Surface Cleaner 20\"", specs: ["20\" cleaning path", "4000 PSI max", "5 GPM max", "Commercial grade", "Stainless steel"], price: "Call for Pricing" },
  // Rotoeze
  { brand: "Rotoeze", model: "RE-16", name: "Rotoeze 16\" Surface Cleaner", specs: ["16\" cleaning path", "3500 PSI rated", "3–5 GPM", "Swivel inlet", "Replacement parts available"], price: "Call for Pricing" },
  // Parts
  { brand: "Various", model: "SC-NOZZLE-SET", name: "Surface Cleaner Nozzle Set", specs: ["Fits most brands", "Multiple tip sizes", "Stainless steel", "1/4\" QC fittings"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "SC-BEARING-KIT", name: "Surface Cleaner Bearing Kit", specs: ["Universal sealed bearing", "Fits WhisperWash, Whirlaway", "Rebuild kit included", "Stainless hardware"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function SurfaceCleaners() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Surface Cleaners Sarasota FL | WhisperWash, Whirlaway, Hammerhead — MHSS Inc."
      description="Flat surface cleaners in Sarasota, FL. WhisperWash, Whirlaway, Hammerhead, and Rotoeze surface cleaners. 15–28 inch, up to 5000 PSI. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/surface-cleaners"
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
          <img src={HERO_IMG} alt="Surface cleaners Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Surface Cleaners</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            WhisperWash · Whirlaway · Hammerhead · Rotoeze
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Surface Cleaners —<br /><span style={{ color: "#FFD100" }}>Flat Surface Cleaning Tools</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            Professional flat surface cleaners for driveways, sidewalks, parking lots, and concrete. WhisperWash, Whirlaway, Hammerhead, and Rotoeze — in stock at our Sarasota facility.
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
              Surface Cleaner <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>In stock and special order. Click "Request Quote" or call for current pricing and availability.</p>
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
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF" }}>NOT SURE WHICH SIZE YOU NEED?</div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>Call us — we'll help you match the right surface cleaner to your machine's PSI and GPM.</div>
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

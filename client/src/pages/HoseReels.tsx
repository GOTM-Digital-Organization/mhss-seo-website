/**
 * HoseReels page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-hose-reels_0383b954.jpg";

const PRODUCTS = [
  { brand: "Titan Hose Reels", model: "THP-1/2-50-M", name: "1/2\" x 50ft Manual Hose Reel", specs: ["1/2\" ID, 50ft capacity", "4000 PSI rated", "Manual rewind", "Swivel inlet", "Heavy-gauge steel"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Titan Hose Reels", model: "THP-3/8-100-M", name: "3/8\" x 100ft Manual Hose Reel", specs: ["3/8\" ID, 100ft capacity", "4000 PSI rated", "Manual rewind", "Swivel inlet"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Titan Hose Reels", model: "THP-1/2-100-E", name: "1/2\" x 100ft Electric Hose Reel", specs: ["1/2\" ID, 100ft capacity", "4000 PSI rated", "12V electric rewind", "Swivel inlet"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Titan Hose Reels", model: "THP-3/8-200-E", name: "3/8\" x 200ft Electric Hose Reel", specs: ["3/8\" ID, 200ft capacity", "3000 PSI rated", "12V electric rewind", "Truck mount ready"], price: "Call for Pricing" },
  { brand: "Titan Hose Reels", model: "THP-1/2-150-E", name: "1/2\" x 150ft Electric Hose Reel", specs: ["1/2\" ID, 150ft capacity", "4000 PSI rated", "12V electric rewind", "Heavy-duty frame"], price: "Call for Pricing" },
  { brand: "Summit Hose Reels", model: "SHR-3/8-100-M", name: "3/8\" x 100ft Manual Hose Reel", specs: ["3/8\" ID, 100ft capacity", "3000 PSI rated", "Manual rewind", "Powder coat finish"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Summit Hose Reels", model: "SHR-1/2-75-M", name: "1/2\" x 75ft Manual Hose Reel", specs: ["1/2\" ID, 75ft capacity", "3000 PSI rated", "Manual rewind", "Wall or truck mount"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Summit Hose Reels", model: "SHR-3/8-150-E", name: "3/8\" x 150ft Electric Hose Reel", specs: ["3/8\" ID, 150ft capacity", "3000 PSI rated", "12V electric rewind", "Compact design"], price: "Call for Pricing" },
  { brand: "Various", model: "REEL-SWIVEL-38", name: "Hose Reel Swivel Fitting", specs: ["3/8\" NPT swivel", "4000 PSI rated", "Stainless steel", "1/4\" QC outlet"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Various", model: "REEL-MOUNT-KIT", name: "Hose Reel Mounting Kit", specs: ["Universal bracket", "Hardware included", "Wall, truck, or trailer mount", "Powder coated steel"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function HoseReels() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Hose Reels Sarasota FL | Titan & Summit Manual & Electric — MHSS Inc."
      description="Professional hose reels in Sarasota, FL. Titan and Summit manual and electric hose reels for pressure washing. 3/8 inch and 1/2 inch ID, up to 4000 PSI. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/hose-reels"
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
          <img src={HERO_IMG} alt="Hose reels Sarasota FL — Titan and Summit" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Hose Reels</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Titan · Summit · Manual &amp; Electric
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Hose Reels —<br /><span style={{ color: "#FFD100" }}>Titan &amp; Summit</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks Titan and Summit hose reels in manual and electric configurations. Whether you're building a pressure washing rig or replacing a worn reel, we have the right unit in stock.
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
              Hose Reel <span style={{ color: "#FFD100" }}>Catalog</span>
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
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF" }}>NEED A CUSTOM SETUP?</div>
            <div style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>We can help spec the right reel for your truck, trailer, or fixed installation.</div>
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

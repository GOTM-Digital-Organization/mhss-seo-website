/**
 * HydraulicHose page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2, Clock, Wrench } from "lucide-react";

const HOSE_IMG = "/manus-storage/mhss3-hydraulic_fa9ed4b2.jpg";

const HOSE_PRODUCTS = [
  { brand: "Parker", model: "421-4", name: "1/4\" Hydraulic Hose (per ft)", specs: ["1/4\" ID", "3250 PSI working pressure", "Parker 421 series", "SAE 100R2AT rated", "Custom lengths cut in-store"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Parker", model: "421-6", name: "3/8\" Hydraulic Hose (per ft)", specs: ["3/8\" ID", "3000 PSI working pressure", "Parker 421 series", "SAE 100R2AT rated", "Custom lengths cut in-store"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Parker", model: "421-8", name: "1/2\" Hydraulic Hose (per ft)", specs: ["1/2\" ID", "2750 PSI working pressure", "Parker 421 series", "SAE 100R2AT rated", "Custom lengths cut in-store"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Parker", model: "421-12", name: "3/4\" Hydraulic Hose (per ft)", specs: ["3/4\" ID", "2250 PSI working pressure", "Parker 421 series", "SAE 100R2AT rated", "Custom lengths cut in-store"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Parker", model: "421-16", name: "1\" Hydraulic Hose (per ft)", specs: ["1\" ID", "2000 PSI working pressure", "Parker 421 series", "SAE 100R2AT rated", "Custom lengths cut in-store"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Bridgestone", model: "BS-2W-4", name: "1/4\" 2-Wire Hose (per ft)", specs: ["1/4\" ID", "4500 PSI working pressure", "2-wire braid", "SAE 100R2AT rated", "High-pressure applications"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Bridgestone", model: "BS-4W-8", name: "1/2\" 4-Wire Spiral Hose (per ft)", specs: ["1/2\" ID", "6000 PSI working pressure", "4-wire spiral", "SAE 100R9 rated", "Extreme pressure rated"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
  { brand: "Parker", model: "43 Series Crimp", name: "Hose End Crimp Fitting", specs: ["Multiple sizes available", "1-piece crimp design", "Carbon or stainless steel", "JIC, ORFS, NPT, BSP ends"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" as const },
];

export default function HydraulicHose() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Hydraulic Hose Repair Sarasota FL | Parker & Bridgestone — MHSS Inc."
      description="Hydraulic hose made to order in Sarasota, FL. Parker and Bridgestone products. 2-wire and 4-wire capability. Dump trailer and cylinder repair. Usually while-you-wait. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/hydraulic-hose"
    >
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={quoteProduct?.name}
        productModel={quoteProduct?.model}
      />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HOSE_IMG} alt="Hydraulic hose repair Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Hydraulic Hose</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Custom Fabrication While You Wait · Parker · Bridgestone · 2-Wire & 4-Wire
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Hydraulic Hose Repair &amp;<br /><span style={{ color: "#FFD100" }}>Fabrication — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", marginBottom: "1.75rem" }}>
            MHSS has been fabricating custom hydraulic hoses while you wait for over 35 years. Drive in with a broken hose — drive out with a new one. We stock Parker and Bridgestone hydraulic hose in 2-wire and 4-wire configurations, cut and crimped to any length on-site. We also service dump trailers, small dump trucks, and repair hydraulic cylinders.
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

      {/* Feature strip */}
      <section style={{ backgroundColor: "#F2EFE9", borderBottom: "1px solid #E5E0D8", padding: "1.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ icon: <Clock size={16} />, text: "Usually While-You-Wait" }, { icon: <CheckCircle2 size={16} />, text: "Parker Products" }, { icon: <CheckCircle2 size={16} />, text: "Bridgestone Products" }, { icon: <CheckCircle2 size={16} />, text: "2-Wire & 4-Wire" }, { icon: <Wrench size={16} />, text: "Cylinder Repair" }].map(f => (
              <span key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1A1A1A", fontSize: "0.875rem" }}>
                <span style={{ color: "#FFD100" }}>{f.icon}</span> {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hose Catalog */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.4rem" }}>Hose Stock</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1C1C1C" }}>
              Hydraulic Hose &amp; <span style={{ color: "#FFD100" }}>Fittings</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", marginTop: "0.5rem" }}>Priced per foot. Custom lengths cut and crimped while you wait.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {HOSE_PRODUCTS.map(p => (
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

      {/* Services */}
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Hydraulic Hose Fabrication", color: "#FFD100", items: ["Custom hose lengths — any size", "Parker hydraulic hose", "Bridgestone hydraulic hose", "2-wire braid (SAE 100R2)", "4-wire spiral (SAE 100R9/R12)", "High-pressure to 6000 PSI", "Stainless steel fittings available", "JIC, NPT, ORFS, BSP fittings"] },
              { title: "Dump Trailer & Truck Service", color: "#3B82F6", items: ["Dump trailer hydraulic systems", "Small dump truck hydraulic repair", "Cylinder rod seal replacement", "Hydraulic pump service", "Control valve repair", "Hose replacement and rerouting", "Leak diagnosis and repair", "System pressure testing"] },
              { title: "Hydraulic Cylinder Repair", color: "#10B981", items: ["Cylinder disassembly and inspection", "Seal kit replacement", "Rod polishing and repair", "Barrel honing", "End cap repair and replacement", "Cylinder testing and certification", "Custom cylinder fabrication", "All cylinder sizes serviced"] },
            ].map(cat => (
              <div key={cat.title} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: cat.color }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1C1C", marginBottom: "1rem" }}>{cat.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.45rem" }}>
                      <CheckCircle2 size={13} style={{ color: cat.color, flexShrink: 0, marginTop: "0.1rem" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1C1C1C", marginBottom: "0.5rem" }}>Bring Your Equipment In — Most Hoses Made While You Wait</h3>
            <p style={{ color: "#2D2D2D", fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>Located at 552 Catarzi Way, Sarasota, FL. Open Monday–Friday. Call ahead for large jobs or cylinder repairs.</p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={15} /> (941) 377-4673
              </a>
              <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "#1C1C1C", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", border: "1px solid #444", cursor: "pointer" }}>
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

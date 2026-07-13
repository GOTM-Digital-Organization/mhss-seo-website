/**
 * PressureWashers page — MHSS Inc.
 * Design: dark industrial hero, white catalog grid, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-hero_275e7d18.jpg";

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

const PRODUCTS: Product[] = [
  // Honda / BE Power Equipment — Cold Water
  { brand: "BE Power Equipment", model: "BE275HA", name: "275HA Cold Water Pressure Washer", specs: ["2700 PSI / 2.5 GPM", "Honda GX200 engine", "AR pump", "25 ft hose included", "Fold-down handle"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "BE Power Equipment", model: "BE3565HA", name: "3565HA Cold Water Pressure Washer", specs: ["3500 PSI / 6.5 GPM", "Honda GX630 V-twin engine", "General Pump belt drive", "50 ft hose", "Heavy-duty frame"], price: "Call for Pricing", badge: "In Stock", badgeColor: "green" },
  { brand: "BE Power Equipment", model: "BE4013HA", name: "4013HA Cold Water Pressure Washer", specs: ["4000 PSI / 4.0 GPM", "Honda GX390 engine", "General Pump belt drive", "50 ft hose", "CAT pump option available"], price: "Call for Pricing" },
  // Mi-T-M — Cold Water
  { brand: "Mi-T-M", model: "CW-3004-1MHB", name: "CW Series Cold Water Pressure Washer", specs: ["3000 PSI / 2.8 GPM", "Honda GX200 engine", "Comet pump", "25 ft hose", "Compact design"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" },
  { brand: "Mi-T-M", model: "CW-3504-1MHB", name: "CW-3504 Cold Water Pressure Washer", specs: ["3500 PSI / 3.5 GPM", "Honda GX270 engine", "AR pump", "50 ft hose", "Pneumatic tires"], price: "Call for Pricing", badge: "Special Order", badgeColor: "blue" },
  // Pressure Pro — Cold Water
  { brand: "Pressure Pro", model: "E4040HC", name: "E4040HC Cold Water Pressure Washer", specs: ["4000 PSI / 4.0 GPM", "Honda GX390 engine", "General Pump belt drive", "50 ft hose", "Stainless steel frame"], price: "Call for Pricing" },
  // Mi-T-M — Hot Water
  { brand: "Mi-T-M", model: "HH-3504-1MGH", name: "HH Series Hot Water Pressure Washer", specs: ["3500 PSI / 3.5 GPM", "Honda GX270 engine", "Diesel-fired burner", "200°F max water temp", "50 ft hose"], price: "Call for Pricing", badge: "Hot Water", badgeColor: "red" },
  { brand: "Mi-T-M", model: "HH-4004-1MGH", name: "HH-4004 Hot Water Pressure Washer", specs: ["4000 PSI / 4.0 GPM", "Honda GX390 engine", "Diesel-fired burner", "200°F max water temp", "Heavy-duty frame"], price: "Call for Pricing", badge: "Hot Water", badgeColor: "red" },
  // BE Power Equipment — Hot Water
  { brand: "BE Power Equipment", model: "BE3565HWA", name: "3565HWA Hot Water Pressure Washer", specs: ["3500 PSI / 5.0 GPM", "Honda GX630 engine", "Diesel burner", "200°F max temp", "Stainless steel coil"], price: "Call for Pricing", badge: "Hot Water", badgeColor: "red" },
];

export default function PressureWashers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string; model: string } | null>(null);

  function openQuote(name: string, model: string) {
    setQuoteProduct({ name, model });
    setModalOpen(true);
  }

  return (
    <Layout
      title="Pressure Washers Sarasota FL | Honda, BE, Mi-T-M, Pressure Pro — MHSS Inc."
      description="Cold and hot water pressure washers in Sarasota, FL. Honda, BE Power Equipment, Mi-T-M, Pressure Pro. Authorized warranty service center. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pressure-washers"
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
          <img src={HERO_IMG} alt="Pressure washers Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Pressure Washers</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Factory Direct Sales · Honda · BE Power Equipment · Mi-T-M · Pressure Pro · Certified Warranty Repair
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pressure Washers —<br /><span style={{ color: "#FFD100" }}>Sales, Service & Repair</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            Factory direct sales and certified warranty repair for commercial pressure washing equipment. Cold and hot water machines from Honda, BE Power Equipment, Mi-T-M, and Pressure Pro. Authorized dealer — no middleman pricing. In stock and special order at our Sarasota facility.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> Call: (941) 377-4673
            </a>
            <button onClick={() => { setQuoteProduct(null); setModalOpen(true); }} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#F9F7F4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>In Stock & Special Order</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#1C1C1C" }}>
              Pressure Washer <span style={{ color: "#FFD100" }}>Catalog</span>
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.9rem", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Pricing varies by configuration. Call or click "Request Quote" on any item — we'll respond same business day.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
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
                imageUrl={p.imageUrl}
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
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Warranty Service Center</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Pressure Washer Repair & Service in Sarasota
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Whether your pressure washer is under warranty or out of warranty, MHSS has the parts, tools, and expertise to get it running again. We service all makes and models.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Pump rebuilds and replacements", "Unloader and regulator service", "Engine repairs and tune-ups", "Hose, gun, and wand replacement", "Hot water burner service", "Annual maintenance packages"].map(i => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#D0D0D0", fontSize: "0.875rem" }}>
                  <CheckCircle2 size={14} style={{ color: "#FFD100", flexShrink: 0 }} /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "#2A2A2A", border: "1px solid #444", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
              NEED SERVICE OR A QUOTE?
            </div>
            <div style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
              552 Catarzi Way, Sarasota FL · Mon–Fri 8am–5pm
            </div>
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

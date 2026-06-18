import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-deco-products_49aa6d4f.jpg";

export default function DecoProducts() {
  return (
    <Layout
      title="Paver Sealers & Deco Products Sarasota FL | MHSS Inc."
      description="Paver sealers, travertine sealers, waterproofing products, and paver sealer stripper in Sarasota, FL. Water-based and single-part formulas. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/deco-products"
    >
      {/* Hero with image */}
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
            Paver Sealers · Stone Sealers · Waterproofing
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Paver Sealers &amp;<br /><span style={{ color: "#FFD100" }}>Deco Products</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks a complete line of decorative concrete and paver products — sealers, strippers, waterproofing compounds, and more. Water-based, single-part formulas for professional and contractor use.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Pricing: (941) 377-4673
          </a>
        </div>
      </section>

      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Paver Sealers", items: ["Wet-look gloss paver sealer", "Natural look / matte paver sealer", "High-gloss enhancing sealer", "UV-resistant exterior formula", "Water-based, low VOC", "Available in 1-gallon and 5-gallon"] },
              { title: "Travertine & Natural Stone Sealers", items: ["Penetrating travertine sealer", "Enhancing stone sealer", "Color-enhancing formula", "Stain-resistant protection", "Safe for all natural stone", "Interior and exterior use"] },
              { title: "Waterproofing Products", items: ["Concrete waterproofing sealer", "Masonry waterproofer", "Below-grade waterproofing", "Deck and patio waterproofing", "Clear and tinted formulas", "Brush, roller, or spray application"] },
              { title: "Paver Sealer Stripper", items: ["Removes old sealer buildup", "Water-based stripper formula", "Safe for pavers and concrete", "Works on acrylic and urethane sealers", "Biodegradable formula", "Available in 1-gallon and 5-gallon"] },
            ].map(cat => (
              <div key={cat.title} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "1.75rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: "#FFD100" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1C1C", marginBottom: "1rem" }}>{cat.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#2D2D2D", fontSize: "0.85rem", marginBottom: "0.45rem" }}>
                      <CheckCircle2 size={13} style={{ color: "#FFD100", flexShrink: 0, marginTop: "0.1rem" }} /> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:9413774673" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", marginTop: "1rem" }}>
                  <Phone size={12} /> Call for Pricing
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

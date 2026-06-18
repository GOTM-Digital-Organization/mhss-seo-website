import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-hose-reels_0383b954.jpg";

const BRANDS = [
  { name: "Titan Hose Reels", desc: "Titan is one of the most recognized names in professional hose reels for pressure washing and industrial applications. Their reels are built for daily commercial use with heavy-gauge steel construction and smooth operation.", models: [
    { model: "Titan 1/2\" x 50ft Manual", specs: "1/2\" ID, 50ft capacity, 4000 PSI, swivel inlet, manual rewind" },
    { model: "Titan 3/8\" x 100ft Manual", specs: "3/8\" ID, 100ft capacity, 4000 PSI, swivel inlet" },
    { model: "Titan 1/2\" x 100ft Electric", specs: "1/2\" ID, 100ft capacity, 4000 PSI, 12V electric rewind" },
    { model: "Titan 3/8\" x 200ft Electric", specs: "3/8\" ID, 200ft capacity, 3000 PSI, 12V electric rewind" },
    { model: "Titan 1/2\" x 150ft Electric", specs: "1/2\" ID, 150ft capacity, 4000 PSI, 12V electric rewind" },
  ]},
  { name: "Summit Hose Reels", desc: "Summit hose reels offer excellent value for professional applications. Available in manual and electric configurations for a variety of hose sizes and pressure ratings.", models: [
    { model: "Summit 3/8\" x 100ft Manual", specs: "3/8\" ID, 100ft capacity, 3000 PSI, manual rewind" },
    { model: "Summit 1/2\" x 75ft Manual", specs: "1/2\" ID, 75ft capacity, 3000 PSI, manual rewind" },
    { model: "Summit 3/8\" x 150ft Electric", specs: "3/8\" ID, 150ft capacity, 3000 PSI, 12V electric" },
    { model: "Summit 1/2\" x 100ft Electric", specs: "1/2\" ID, 100ft capacity, 3000 PSI, 12V electric" },
  ]},
];

export default function HoseReels() {
  return (
    <Layout
      title="Hose Reels Sarasota FL | Titan &amp; Summit Manual &amp; Electric - MHSS Inc."
      description="Professional hose reels in Sarasota, FL. Titan and Summit manual and electric hose reels for pressure washing. 3/8 inch and 1/2 inch ID, up to 4000 PSI. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/hose-reels"
    >
      {/* Hero with image */}
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
          <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Pricing: (941) 377-4673
          </a>
        </div>
      </section>

      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {BRANDS.map(brand => (
              <div key={brand.name} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", overflow: "hidden" }}>
                <div style={{ padding: "1.5rem 1.75rem 1rem", borderBottom: "1px solid #E5E0D8" }}>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#FFD100", marginBottom: "0.4rem" }}>{brand.name}</h3>
                  <p style={{ color: "#2D2D2D", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{brand.desc}</p>
                </div>
                <div style={{ padding: "1.25rem 1.75rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem" }}>
                    {brand.models.map(m => (
                      <div key={m.model} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", overflow: "hidden" }}>
                        {/* Photo placeholder — Shopify product image will populate here */}
                        <div style={{ backgroundColor: "#E8E8E8", height: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", borderBottom: "1px solid #E5E0D8" }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          <span style={{ color: "#9CA3AF", fontSize: "0.7rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>Product Photo</span>
                        </div>
                        <div style={{ padding: "1rem" }}>
                          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1C1C1C", marginBottom: "0.35rem" }}>{m.model}</div>
                          <p style={{ color: "#2D2D2D", fontSize: "0.78rem", margin: "0 0 0.6rem" }}>{m.specs}</p>
                          <a href="tel:9413774673" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                            <Phone size={11} /> Call for Pricing
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2rem", marginTop: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1C1C", marginBottom: "0.75rem" }}>Hose Reel Accessories</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
              {["Swivel fittings and adapters", "Mounting brackets and hardware", "Replacement hose guides", "Hose reel hose — 3/8\" and 1/2\"", "Electric motor replacement kits", "Reel repair parts"].map(item => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#2D2D2D", fontSize: "0.825rem" }}>
                  <CheckCircle2 size={12} style={{ color: "#FFD100" }} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

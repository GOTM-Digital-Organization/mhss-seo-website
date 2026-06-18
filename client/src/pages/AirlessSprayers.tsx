import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, Shield, Wrench } from "lucide-react";

const SPRAYER_IMG = "/manus-storage/mhss3-sprayers_e8eac13a.jpg";

const BRANDS = [
  { name: "Graco", desc: "Graco is the world's leading manufacturer of airless paint sprayers. MHSS is an authorized Graco service center, providing warranty and out-of-warranty repairs for the full Graco lineup. We stock Graco repair kits, filters, tips, and accessories.", models: [
    { model: "Graco Magnum X5", specs: "3000 PSI max, 0.27 GPM, 25ft hose, FlexLiner bag system" },
    { model: "Graco Magnum X7", specs: "3000 PSI max, 0.31 GPM, 100ft hose capability, cart mount" },
    { model: "Graco Mark V", specs: "3300 PSI max, 0.54 GPM, ProConnect pump, contractor grade" },
    { model: "Graco Mark VII Max", specs: "3300 PSI max, 0.70 GPM, ProConnect, high production" },
    { model: "Graco GH 733", specs: "3300 PSI max, 1.08 GPM, gas hydraulic, large projects" },
  ]},
  { name: "Titan/SpeeFlo", desc: "Titan and SpeeFlo (now part of the same family) produce professional airless sprayers trusted by painting contractors worldwide. MHSS is an authorized Titan/SpeeFlo service center for warranty and out-of-warranty repairs.", models: [
    { model: "Titan Impact 440", specs: "3300 PSI max, 0.54 GPM, ProTip compatible, electric" },
    { model: "Titan Impact 640", specs: "3300 PSI max, 0.68 GPM, ProTip, high-output electric" },
    { model: "Titan Impact 840", specs: "3300 PSI max, 0.84 GPM, ProTip, professional electric" },
    { model: "SpeeFlo PowrTwin 6900DI", specs: "3000 PSI, 2.0 GPM, gas hydraulic, twin-piston" },
    { model: "Titan XT250", specs: "3300 PSI max, 0.25 GPM, compact electric, residential" },
  ]},
  { name: "Tritech Industries", desc: "Tritech produces professional airless sprayers known for their reliability and value. Popular with painting contractors who need a dependable machine at a competitive price point.", models: [
    { model: "Tritech T3", specs: "3000 PSI max, 0.43 GPM, electric, contractor grade" },
    { model: "Tritech T5", specs: "3300 PSI max, 0.54 GPM, electric, high-output" },
    { model: "Tritech T7", specs: "3300 PSI max, 0.70 GPM, electric, professional" },
  ]},
];

export default function AirlessSprayers() {
  return (
    <Layout
      title="Airless Sprayer Service & Sales Sarasota FL | Graco, Titan, Tritech — MHSS Inc."
      description="Authorized airless paint sprayer service center in Sarasota, FL. Graco, Titan/SpeeFlo, and Tritech warranty and out-of-warranty repairs. Parts, kits, and accessories. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/airless-sprayers"
    >
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={SPRAYER_IMG} alt="Airless sprayer service Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.93) 0%, rgba(28,28,28,0.7) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link><span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Airless Sprayers</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Authorized Service Center — Graco · Titan/SpeeFlo · Tritech
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Airless Sprayer Service &<br /><span style={{ color: "#FFD100" }}>Sales — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "540px", marginBottom: "1.75rem" }}>
            MHSS is an authorized service center for Graco, Titan/SpeeFlo, and Tritech airless sprayers. Warranty repairs, out-of-warranty service, repair kits, tips, filters, and accessories all in stock.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Service: (941) 377-4673
          </a>
        </div>
      </section>
      <section style={{ backgroundColor: "#F2EFE9", borderBottom: "1px solid #E5E0D8", padding: "1.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ icon: <Shield size={16} />, text: "Authorized Warranty Service" }, { icon: <Wrench size={16} />, text: "Factory-Trained Technicians" }, { icon: <CheckCircle2 size={16} />, text: "Repair Kits In Stock" }, { icon: <CheckCircle2 size={16} />, text: "Tips, Filters & Accessories" }, { icon: <CheckCircle2 size={16} />, text: "Same-Day Service Available" }].map(f => (
              <span key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1A1A1A", fontSize: "0.875rem" }}>
                <span style={{ color: "#FFD100" }}>{f.icon}</span> {f.text}
              </span>
            ))}
          </div>
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
                      <div key={m.model} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", padding: "1rem" }}>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1C1C1C", marginBottom: "0.35rem" }}>{m.model}</div>
                        <p style={{ color: "#2D2D2D", fontSize: "0.78rem", margin: "0 0 0.6rem" }}>{m.specs}</p>
                        <a href="tel:9413774673" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                          <Phone size={11} /> Call for Pricing
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

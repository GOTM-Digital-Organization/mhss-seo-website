import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-surface-cleaners_afe987c3.jpg";

const BRANDS = [
  { name: "WhisperWash", desc: "WhisperWash surface cleaners are among the most popular professional-grade flat surface cleaners available. Known for quiet operation and consistent cleaning results on concrete, driveways, and sidewalks.", models: [
    { model: "Classic 16\"", specs: "16\" cleaning path, 3000–4000 PSI, 3–5 GPM, dual nozzle bar" },
    { model: "Classic 19\"", specs: "19\" cleaning path, 3000–4000 PSI, 4–6 GPM, dual nozzle bar" },
    { model: "Grand Slam 24\"", specs: "24\" cleaning path, 3500–5000 PSI, 5–8 GPM, 4-nozzle bar" },
    { model: "Big Guy 28\"", specs: "28\" cleaning path, 4000–5000 PSI, 6–10 GPM, commercial" },
  ]},
  { name: "Whirlaway", desc: "Whirlaway surface cleaners offer excellent value for professional pressure washing contractors. Durable construction and wide availability of replacement nozzles and bearings.", models: [
    { model: "1501", specs: "15\" cleaning path, up to 3000 PSI, 2–4 GPM" },
    { model: "1701", specs: "17\" cleaning path, up to 3500 PSI, 3–5 GPM" },
    { model: "2001", specs: "20\" cleaning path, up to 4000 PSI, 4–6 GPM" },
  ]},
  { name: "Hammerhead", desc: "Hammerhead surface cleaners are built for heavy commercial use. Their sealed bearing design and stainless steel construction make them a top choice for contractors who clean concrete daily.", models: [
    { model: "HH16", specs: "16\" cleaning path, 4000 PSI max, 4 GPM max" },
    { model: "HH20", specs: "20\" cleaning path, 4000 PSI max, 5 GPM max" },
    { model: "HH24", specs: "24\" cleaning path, 4000 PSI max, 6 GPM max" },
  ]},
  { name: "Rotoeze", desc: "Rotoeze surface cleaners are a budget-friendly option for light commercial and residential use. Good entry-level surface cleaner for contractors just starting out.", models: [
    { model: "RE-14", specs: "14\" cleaning path, 3000 PSI max, 2–3 GPM" },
    { model: "RE-18", specs: "18\" cleaning path, 3500 PSI max, 3–4 GPM" },
  ]},
];

export default function SurfaceCleaners() {
  return (
    <Layout
      title="Surface Cleaners Sarasota FL | WhisperWash, Whirlaway, Hammerhead — MHSS Inc."
      description="Professional surface cleaners for pressure washing in Sarasota, FL. WhisperWash, Whirlaway, Hammerhead, Rotoeze. Parts and service available. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/surface-cleaners"
    >
      {/* Hero with image */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMG} alt="Surface cleaners Sarasota FL — WhisperWash, Whirlaway, Hammerhead" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            Surface Cleaners —<br /><span style={{ color: "#FFD100" }}>Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks surface cleaners from the leading brands in the pressure washing industry. From residential driveways to commercial concrete — we have the right tool for the job.
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
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.875rem" }}>
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
        </div>
      </section>
    </Layout>
  );
}

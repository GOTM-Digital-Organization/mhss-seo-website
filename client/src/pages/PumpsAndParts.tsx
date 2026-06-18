import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";

const PUMPS = [
  { brand: "General Pump", desc: "General Pump is one of the most trusted names in pressure washer pumps. MHSS stocks complete pump kits, repair kits, and individual components for the full General Pump lineup.", models: [
    { model: "TS1511", specs: "1500 PSI / 1.1 GPM, 3/4\" shaft, direct drive" },
    { model: "TS2021", specs: "2000 PSI / 2.1 GPM, 3/4\" shaft, direct drive" },
    { model: "TS2531", specs: "2500 PSI / 3.1 GPM, 1\" shaft, belt drive" },
    { model: "T9971", specs: "3000 PSI / 4.0 GPM, 1\" shaft, belt drive, triplex" },
    { model: "EZ4040G", specs: "4000 PSI / 4.0 GPM, 1\" shaft, belt drive, triplex" },
  ]},
  { brand: "Cat Pumps", desc: "Cat Pumps are the gold standard in triplex plunger pumps for high-pressure applications. Extremely durable and serviceable, Cat Pumps are used in the most demanding commercial and industrial applications.", models: [
    { model: "3CP1120", specs: "1000 PSI / 1.2 GPM, direct drive, 3/4\" shaft" },
    { model: "3DX30GLS", specs: "3000 PSI / 3.0 GPM, belt drive, 1\" shaft" },
    { model: "4PPX30GSI", specs: "3000 PSI / 4.0 GPM, belt drive, 1\" shaft" },
    { model: "5CP2120W", specs: "2000 PSI / 2.1 GPM, direct drive" },
    { model: "5PP2140", specs: "2000 PSI / 4.0 GPM, belt drive" },
  ]},
  { brand: "AR Pumps (Annovi Reverberi)", desc: "AR Pumps are Italian-engineered and known for excellent value and reliability. Popular in both consumer and professional pressure washers. MHSS stocks AR pump kits and replacement parts.", models: [
    { model: "RMW2.2G24", specs: "2400 PSI / 2.2 GPM, direct drive, 3/4\" shaft" },
    { model: "RMW3.5G30", specs: "3000 PSI / 3.5 GPM, direct drive, 1\" shaft" },
    { model: "XWA7G30D", specs: "3000 PSI / 7.0 GPM, belt drive, 1\" shaft" },
    { model: "RMW4G40", specs: "4000 PSI / 4.0 GPM, belt drive, 1\" shaft" },
  ]},
  { brand: "Comet Pumps", desc: "Comet Pumps are Italian-made triplex plunger pumps known for their compact design and reliability. Popular in both professional and consumer pressure washers.", models: [
    { model: "AXD 3020 G", specs: "3000 PSI / 2.0 GPM, direct drive" },
    { model: "BXD 2527 G", specs: "2700 PSI / 2.5 GPM, direct drive, 3/4\" shaft" },
    { model: "ZWD 4040 G", specs: "4000 PSI / 4.0 GPM, belt drive, 1\" shaft" },
  ]},
  { brand: "UDOR Pumps", desc: "UDOR is an Italian pump manufacturer producing high-quality triplex plunger pumps for professional pressure washing and agricultural applications. Known for durability and high flow rates.", models: [
    { model: "Kappa 20/20", specs: "2000 PSI / 5.3 GPM, belt drive" },
    { model: "Gamma 20/20", specs: "2000 PSI / 5.3 GPM, direct drive" },
    { model: "Zeta 22/20", specs: "2200 PSI / 5.3 GPM, belt drive" },
  ]},
];

const COMPONENTS = [
  { cat: "Guns & Wands", items: ["Professional spray guns — 4000 PSI rated", "Stainless steel lances and extension wands", "Adjustable and fixed spray wands", "Trigger guns with safety lock", "Dual-lance systems for hot water"] },
  { cat: "Quick Connects", items: ["3/8\" and 1/4\" quick connect sets", "Stainless steel QC fittings", "Brass QC couplers and plugs", "High-pressure rated to 4000+ PSI", "Metric and standard thread options"] },
  { cat: "Spray Tips & Nozzles", items: ["0°, 15°, 25°, 40° and soap tips", "Color-coded tip sets", "Turbo/rotary nozzles", "Variable pressure nozzles", "Stainless steel and ceramic tips"] },
  { cat: "Chemical Injectors", items: ["Downstream chemical injectors", "Upstream injectors for hot water units", "Adjustable flow chemical injectors", "Soap nozzle tips (black)", "Chemical injection kits"] },
  { cat: "Unloaders & Regulators", items: ["Adjustable unloader valves", "Trapped and flow-actuated unloaders", "Pressure regulators", "Bypass valves", "Unloader repair kits"] },
  { cat: "Thermal Relief Valves", items: ["Thermal relief valves — 145°F and 180°F", "Replacement thermal valve kits", "Brass and stainless options", "Bypass thermal valves", "Thermal valve fittings"] },
];

export default function PumpsAndParts() {
  return (
    <Layout
      title="Pressure Washer Pumps & Parts Sarasota FL | General, Cat, AR, Comet, UDOR — MHSS Inc."
      description="Pressure washer pumps and parts in Sarasota, FL. General Pump, Cat Pumps, AR, Comet, UDOR pump kits. Guns, wands, tips, injectors, unloaders, thermal valves. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pumps-parts"
    >
      {/* Hero */}
      <section style={{ backgroundColor: "#F2EFE9", borderBottom: "1px solid #E5E0D8", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#2D2D2D" }}>
            <Link href="/" style={{ color: "#2D2D2D", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#FFD100" }}>Pumps & Parts</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            General · Cat · AR · Comet · UDOR
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pressure Washer Pumps &<br /><span style={{ color: "#FFD100" }}>Components — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS stocks a comprehensive inventory of pressure washer pumps from the industry's leading manufacturers, along with all the components you need to keep your equipment running — guns, wands, tips, injectors, unloaders, and more.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Pricing: (941) 377-4673
          </a>
        </div>
      </section>

      {/* Pumps */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Pump Brands</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#1C1C1C" }}>Pumps & Pump Kits</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {PUMPS.map(brand => (
              <div key={brand.brand} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", overflow: "hidden" }}>
                <div style={{ padding: "1.5rem 1.75rem 1rem", borderBottom: "1px solid #E5E0D8" }}>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#FFD100", marginBottom: "0.4rem" }}>{brand.brand}</h3>
                  <p style={{ color: "#2D2D2D", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{brand.desc}</p>
                </div>
                <div style={{ padding: "1.25rem 1.75rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.875rem" }}>
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

      {/* Components */}
      <section style={{ backgroundColor: "#F2EFE9", borderTop: "1px solid #E5E0D8", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.5rem" }}>Parts & Accessories</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#1C1C1C" }}>Pressure Washer Components</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {COMPONENTS.map(c => (
              <div key={c.cat} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", padding: "1.5rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: "#FFD100" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1C1C1C", marginBottom: "0.875rem" }}>{c.cat}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {c.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#2D2D2D", fontSize: "0.825rem", marginBottom: "0.45rem" }}>
                      <CheckCircle2 size={12} style={{ color: "#FFD100", flexShrink: 0, marginTop: "0.15rem" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "#2D2D2D", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Don't see the part you need? We can source most pressure washer components. Call us.</p>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> (941) 377-4673
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, ArrowRight, Wrench, Shield } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-pressure-washers-Dn4rXwmHkPMwRBWCbLFQNS.webp";

const BRANDS = [
  {
    name: "BE Power Equipment",
    desc: "BE Power is one of North America's leading pressure washer manufacturers, offering a full range of cold and hot water units built for professional contractors. MHSS is an authorized BE dealer and warranty service center.",
    models: [
      { model: "BE275HA", specs: "2700 PSI / 2.3 GPM, Honda GX200 engine, aluminum frame", type: "Cold Water" },
      { model: "BE340HA", specs: "3400 PSI / 2.5 GPM, Honda GX270 engine, AR pump", type: "Cold Water" },
      { model: "BE4013HA", specs: "4000 PSI / 3.5 GPM, Honda GX390 engine, General Pump", type: "Cold Water" },
      { model: "BE65H-3500", specs: "3500 PSI / 4.0 GPM, Honda GX390, hot water diesel burner", type: "Hot Water" },
    ],
  },
  {
    name: "Mi-T-M Corporation",
    desc: "Mi-T-M produces professional-grade hot and cold water pressure washers used by contractors across the country. Their units are known for durability and ease of service. MHSS stocks Mi-T-M units and provides authorized warranty repairs.",
    models: [
      { model: "CW-3504-4MHB", specs: "3500 PSI / 4.0 GPM, Honda GX390, CAT pump", type: "Cold Water" },
      { model: "HS-3504-1MAH", specs: "3500 PSI / 4.0 GPM, Honda GX390, hot water diesel", type: "Hot Water" },
      { model: "CW-2703-1MHB", specs: "2700 PSI / 3.0 GPM, Honda GX200, direct drive", type: "Cold Water" },
      { model: "AM1-3600-1MAH", specs: "3600 PSI / 4.0 GPM, Honda GX390, hot water, belt drive", type: "Hot Water" },
    ],
  },
  {
    name: "Pressure Pro",
    desc: "Pressure Pro builds heavy-duty commercial pressure washers designed for demanding job sites. Their belt-drive units are particularly popular with professional pressure washing contractors who need all-day reliability.",
    models: [
      { model: "E4040HC", specs: "4000 PSI / 4.0 GPM, Honda GX390, belt drive, General Pump", type: "Cold Water" },
      { model: "E4035HC", specs: "4000 PSI / 3.5 GPM, Honda GX390, belt drive", type: "Cold Water" },
      { model: "HH3530HC", specs: "3500 PSI / 3.0 GPM, Honda GX270, hot water", type: "Hot Water" },
      { model: "E3027HC", specs: "3000 PSI / 2.7 GPM, Honda GX270, belt drive", type: "Cold Water" },
    ],
  },
  {
    name: "Pressure Systems Innovations (PSI)",
    desc: "PSI specializes in high-performance pressure washers and custom-configured units for professional applications. Their skid-mount and trailer-mount configurations are popular for commercial pressure washing businesses.",
    models: [
      { model: "PSI-4040", specs: "4000 PSI / 4.0 GPM, Honda GX390, skid mount", type: "Cold Water" },
      { model: "PSI-HW3530", specs: "3500 PSI / 3.0 GPM, hot water diesel, trailer mount", type: "Hot Water" },
      { model: "PSI-5540", specs: "5500 PSI / 4.0 GPM, Honda GX630, belt drive", type: "Cold Water" },
    ],
  },
];

export default function PressureWashers() {
  return (
    <Layout
      title="Pressure Washer Sales & Service Sarasota FL | MHSS Inc. — BE, Mi-T-M, Pressure Pro"
      description="Authorized pressure washer dealer and service center in Sarasota, FL. BE Power, Mi-T-M, Pressure Pro, and PSI. Cold and hot water units, warranty repairs, and parts. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pressure-washers"
    >
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMG} alt="Pressure washers Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,15,23,0.93) 0%, rgba(8,15,23,0.7) 60%, rgba(8,15,23,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#64748B" }}>
            <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#F59E0B" }}>Pressure Washers</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Authorized Dealer & Service Center
          </span>
          <h1 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F1F5F9", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pressure Washer Sales &<br /><span style={{ color: "#F59E0B" }}>Service — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "540px", marginBottom: "1.75rem" }}>
            MHSS is an authorized dealer and warranty service center for BE Power, Mi-T-M, Pressure Pro, and Pressure Systems Innovations. Cold water, hot water, gas, electric — we stock and service them all.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#F59E0B", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Pricing: (941) 377-4673
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: "#0a1520", borderBottom: "1px solid #1E3A5F", padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <Shield size={18} />, text: "Authorized Warranty Service" },
              { icon: <Wrench size={18} />, text: "Factory-Trained Technicians" },
              { icon: <CheckCircle2 size={18} />, text: "Parts In Stock" },
              { icon: <CheckCircle2 size={18} />, text: "Cold & Hot Water Units" },
              { icon: <CheckCircle2 size={18} />, text: "Gas & Electric Models" },
            ].map(f => (
              <span key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94A3B8", fontSize: "0.875rem" }}>
                <span style={{ color: "#F59E0B" }}>{f.icon}</span> {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", display: "block", marginBottom: "0.5rem" }}>Brands We Carry</span>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#F1F5F9" }}>
              Popular Models & <span style={{ color: "#F59E0B" }}>Specifications</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.9rem", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Pricing varies by configuration and availability. Please call or visit our Sarasota facility for current pricing and availability.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {BRANDS.map(brand => (
              <div key={brand.name} style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.625rem", overflow: "hidden" }}>
                <div style={{ padding: "1.75rem 1.75rem 1rem", borderBottom: "1px solid #1E3A5F" }}>
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#F59E0B", marginBottom: "0.5rem" }}>{brand.name}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{brand.desc}</p>
                </div>
                <div style={{ padding: "1.25rem 1.75rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                    {brand.models.map(m => (
                      <div key={m.model} style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.25rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                          <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9" }}>{m.model}</span>
                          <span style={{ backgroundColor: m.type === "Hot Water" ? "rgba(239,68,68,0.15)" : "rgba(59,130,246,0.15)", color: m.type === "Hot Water" ? "#EF4444" : "#60A5FA", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>
                            {m.type}
                          </span>
                        </div>
                        <p style={{ color: "#64748B", fontSize: "0.8rem", margin: "0 0 0.75rem" }}>{m.specs}</p>
                        <a href="tel:9413774673" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                          <Phone size={12} /> Call for Pricing
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

      {/* Service CTA */}
      <section style={{ backgroundColor: "#0a1520", borderTop: "1px solid #1E3A5F", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", display: "block", marginBottom: "0.5rem" }}>Warranty Service Center</span>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", marginBottom: "1rem" }}>
              Pressure Washer Repair & Service in Sarasota
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Whether your pressure washer is under warranty or out of warranty, MHSS has the parts, tools, and expertise to get it running again. We service all makes and models — not just the brands we sell.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Pump rebuilds and replacements", "Unloader and regulator service", "Engine repairs and tune-ups", "Hose, gun, and wand replacement", "Hot water burner service", "Annual maintenance packages"].map(i => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#94A3B8", fontSize: "0.875rem" }}>
                  <CheckCircle2 size={14} style={{ color: "#F59E0B", flexShrink: 0 }} /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.625rem", padding: "2rem" }}>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "0.5rem" }}>Get Service or a Quote</h3>
            <p style={{ color: "#64748B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Visit us at 552 Cattaraugus Way, Sarasota or call to discuss your equipment needs.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:9413774673" style={{ backgroundColor: "#F59E0B", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Phone size={15} /> (941) 377-4673
              </a>
              <Link href="/contact" style={{ border: "2px solid #1E3A5F", color: "#94A3B8", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "transparent" }}>
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, Clock, Wrench } from "lucide-react";

const HOSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-hydraulic-hose-Dn4rXwmHkPMwRBWCbLFQNS.webp";

export default function HydraulicHose() {
  return (
    <Layout
      title="Hydraulic Hose Repair Sarasota FL | Parker & Bridgestone — MHSS Inc."
      description="Hydraulic hose made to order in Sarasota, FL. Parker and Bridgestone products. 2-wire and 4-wire capability. Dump trailer and cylinder repair. Usually while-you-wait. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/hydraulic-hose"
    >
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HOSE_IMG} alt="Hydraulic hose repair Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,15,23,0.93) 0%, rgba(8,15,23,0.7) 60%, rgba(8,15,23,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#64748B" }}>
            <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#F59E0B" }}>Hydraulic Hose</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Parker · Bridgestone · Usually While-You-Wait
          </span>
          <h1 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F1F5F9", lineHeight: 1.1, marginBottom: "1rem" }}>
            Hydraulic Hose Repair &<br /><span style={{ color: "#F59E0B" }}>Fabrication — Sarasota, FL</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", marginBottom: "1.75rem" }}>
            MHSS has been fabricating hydraulic hoses for over 35 years. We stock Parker and Bridgestone hydraulic hose in 2-wire and 4-wire configurations. Most hoses are made while you wait. We also service dump trailers, small dump trucks, and repair hydraulic cylinders.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#F59E0B", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call: (941) 377-4673
          </a>
        </div>
      </section>
      <section style={{ backgroundColor: "#0a1520", borderBottom: "1px solid #1E3A5F", padding: "1.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ icon: <Clock size={16} />, text: "Usually While-You-Wait" }, { icon: <CheckCircle2 size={16} />, text: "Parker Products" }, { icon: <CheckCircle2 size={16} />, text: "Bridgestone Products" }, { icon: <CheckCircle2 size={16} />, text: "2-Wire & 4-Wire" }, { icon: <Wrench size={16} />, text: "Cylinder Repair" }].map(f => (
              <span key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94A3B8", fontSize: "0.875rem" }}>
                <span style={{ color: "#F59E0B" }}>{f.icon}</span> {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Hydraulic Hose Fabrication", color: "#F59E0B", items: ["Custom hose lengths — any size", "Parker hydraulic hose", "Bridgestone hydraulic hose", "2-wire braid (SAE 100R2)", "4-wire spiral (SAE 100R9/R12)", "High-pressure to 6000 PSI", "Stainless steel fittings available", "JIC, NPT, ORFS, BSP fittings"] },
              { title: "Dump Trailer & Truck Service", color: "#3B82F6", items: ["Dump trailer hydraulic systems", "Small dump truck hydraulic repair", "Cylinder rod seal replacement", "Hydraulic pump service", "Control valve repair", "Hose replacement and rerouting", "Leak diagnosis and repair", "System pressure testing"] },
              { title: "Hydraulic Cylinder Repair", color: "#10B981", items: ["Cylinder disassembly and inspection", "Seal kit replacement", "Rod polishing and repair", "Barrel honing", "End cap repair and replacement", "Cylinder testing and certification", "Custom cylinder fabrication", "All cylinder sizes serviced"] },
            ].map(cat => (
              <div key={cat.title} style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.625rem", padding: "2rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: cat.color }}>
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F1F5F9", marginBottom: "1rem" }}>{cat.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#94A3B8", fontSize: "0.85rem", marginBottom: "0.45rem" }}>
                      <CheckCircle2 size={13} style={{ color: cat.color, flexShrink: 0, marginTop: "0.1rem" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.625rem", padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "0.5rem" }}>Bring Your Equipment In — Most Hoses Made While You Wait</h3>
            <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>Located at 552 Cattaraugus Way, Sarasota, FL. Open Monday–Friday. Call ahead for large jobs or cylinder repairs.</p>
            <a href="tel:9413774673" style={{ backgroundColor: "#F59E0B", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> (941) 377-4673
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

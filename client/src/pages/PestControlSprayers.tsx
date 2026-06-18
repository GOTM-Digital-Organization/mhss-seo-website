import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, Wrench } from "lucide-react";

export default function PestControlSprayers() {
  return (
    <Layout
      title="Pest Control Sprayer Service & Custom Builds Sarasota FL | MHSS Inc."
      description="Pest control sprayer service, repair, and custom builds in Sarasota, FL. Lawn spraying equipment, all makes and models serviced. Custom spray rigs built to spec. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pest-control-sprayers"
    >
      <section style={{ backgroundColor: "#F2EFE9", borderBottom: "1px solid #E5E0D8", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#2D2D2D" }}>
            <Link href="/" style={{ color: "#2D2D2D", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#FFD100" }}>Pest Control Sprayers</span>
          </nav>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C1C1C", lineHeight: 1.1, marginBottom: "1rem" }}>
            Pest Control Sprayer<br /><span style={{ color: "#FFD100" }}>Service & Custom Builds</span>
          </h1>
          <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "1.75rem" }}>
            MHSS services all makes and models of commercial pest control sprayers and lawn spraying equipment. We also build custom spray rigs to your exact specifications — from small truck-bed units to full trailer-mounted systems.
          </p>
          <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} /> Call for Service: (941) 377-4673
          </a>
        </div>
      </section>
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: "#FFD100" }}>
              <Wrench size={28} style={{ color: "#FFD100", marginBottom: "1rem" }} />
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1C1C1C", marginBottom: "0.75rem" }}>Sprayer Service & Repair</h2>
              <p style={{ color: "#2D2D2D", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>We service all makes and models of commercial pest control and lawn care spray equipment. From pump rebuilds to complete system overhauls.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Pump rebuilds and replacements", "Hose and fitting replacement", "Tank cleaning and repair", "Nozzle and boom service", "Agitator service", "Pressure regulator calibration", "Electric and gas pump service", "Diaphragm pump rebuilds"].map(i => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    <CheckCircle2 size={13} style={{ color: "#FFD100", flexShrink: 0 }} /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2rem", borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: "#3B82F6" }}>
              <Phone size={28} style={{ color: "#3B82F6", marginBottom: "1rem" }} />
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1C1C1C", marginBottom: "0.75rem" }}>Custom Spray Rig Builds</h2>
              <p style={{ color: "#2D2D2D", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>Need a custom spray rig built to your exact specifications? MHSS designs and builds commercial spray systems for pest control operators, lawn care companies, and agricultural applications.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Truck-bed spray units", "Trailer-mounted spray systems", "Custom tank sizing and configuration", "Multiple hose reel setups", "Boom spray systems", "Spot spray and broadcast configurations", "Chemical injection systems", "GPS and metering integration"].map(i => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1A1A1A", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    <CheckCircle2 size={13} style={{ color: "#3B82F6", flexShrink: 0 }} /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2rem", marginTop: "2rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1C1C", marginBottom: "0.5rem" }}>Discuss Your Spray Equipment Needs</h3>
            <p style={{ color: "#2D2D2D", fontSize: "0.875rem", marginBottom: "1.25rem" }}>Whether you need a repair, a replacement part, or a completely custom-built spray system — call MHSS to discuss your requirements.</p>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> (941) 377-4673
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

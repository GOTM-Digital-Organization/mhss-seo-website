import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle2, MapPin, Clock } from "lucide-react";

export default function About() {
  return (
    <Layout
      title="About MHSS Inc. | Mobile Hose & Spray Systems — Sarasota, FL Since 1988"
      description="MHSS Inc. has been serving Sarasota and Manatee County since 1988. Family-owned industrial equipment dealer and service center at 552 Cattaraugus Way, Sarasota, FL. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/about"
    >
      <section style={{ backgroundColor: "#0a1520", borderBottom: "1px solid #1E3A5F", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#64748B" }}>
            <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#F59E0B" }}>About</span>
          </nav>
          <h1 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F1F5F9", lineHeight: 1.1, marginBottom: "1rem" }}>
            About MHSS Inc. —<br /><span style={{ color: "#F59E0B" }}>Sarasota's Equipment Experts</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "600px" }}>
            For over 35 years, MHSS Inc. has been the go-to source for industrial hose fabrication, pressure washing equipment, airless sprayer service, and specialty spray systems in Sarasota and Manatee County.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>
            <div>
              <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", display: "block", marginBottom: "0.5rem" }}>Our Story</span>
              <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", marginBottom: "1.25rem" }}>Started From a Bread Truck</h2>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                MHSS Inc. — Mobile Hose & Spray Systems — started the way many great businesses do: with a single vehicle, a clear need in the market, and the determination to fill it. The company launched with a converted bread truck outfitted as a mobile hose fabrication unit, bringing hydraulic hose repair directly to job sites across Sarasota County.
              </p>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Over more than three decades, MHSS has grown from that single bread truck into a full-service industrial equipment facility at 552 Cattaraugus Way in Sarasota. Today the company serves contractors, municipalities, agricultural operations, pest control companies, painting contractors, and equipment dealers throughout Sarasota and Manatee County.
              </p>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.8 }}>
                The core business has always been hose — hydraulic hose fabrication, repair, and fittings. But over the years MHSS expanded into pressure washing equipment sales and service, airless sprayer repair, pest control spray systems, and decorative concrete products. Today MHSS is an authorized dealer and warranty service center for multiple major brands.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { num: "35+", label: "Years in Business" },
                { num: "1988", label: "Founded in Sarasota, FL" },
                { num: "6+", label: "Major Brand Authorizations" },
                { num: "1", label: "Location — 552 Cattaraugus Way" },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "2rem", color: "#F59E0B", lineHeight: 1 }}>{s.num}</span>
                  <span style={{ color: "#94A3B8", fontSize: "0.9rem" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.625rem", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "1.5rem" }}>What We Do</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
              {["Hydraulic hose fabrication & repair", "Pressure washer sales & service", "Airless sprayer service (warranty)", "Pest control sprayer service & builds", "Hose reels — Titan & Summit", "Surface cleaners — WhisperWash & more", "Pressure washer pumps — General, Cat, AR", "Paver sealers & deco products", "Dump trailer hydraulic service", "Hydraulic cylinder repair", "Parker & Bridgestone hose products", "Custom spray rig builds"].map(item => (
                <span key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#94A3B8", fontSize: "0.85rem" }}>
                  <CheckCircle2 size={13} style={{ color: "#F59E0B", flexShrink: 0, marginTop: "0.15rem" }} /> {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
            <div style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.75rem" }}>
              <MapPin size={22} style={{ color: "#F59E0B", marginBottom: "0.75rem" }} />
              <h4 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9", marginBottom: "0.5rem" }}>Location</h4>
              <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>552 Cattaraugus Way<br />Sarasota, FL 34232<br /><a href="https://maps.google.com/?q=552+Cattaraugus+Way+Sarasota+FL" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none", fontSize: "0.8rem" }}>Get Directions →</a></p>
            </div>
            <div style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.75rem" }}>
              <Clock size={22} style={{ color: "#F59E0B", marginBottom: "0.75rem" }} />
              <h4 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9", marginBottom: "0.5rem" }}>Hours</h4>
              <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: By appointment<br />Sunday: Closed</p>
            </div>
            <div style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.75rem" }}>
              <Phone size={22} style={{ color: "#F59E0B", marginBottom: "0.75rem" }} />
              <h4 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9", marginBottom: "0.5rem" }}>Contact</h4>
              <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}><a href="tel:9413774673" style={{ color: "#F59E0B", textDecoration: "none" }}>(941) 377-4673</a><br /><a href="mailto:info@mhss-inc.com" style={{ color: "#64748B", textDecoration: "none" }}>info@mhss-inc.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

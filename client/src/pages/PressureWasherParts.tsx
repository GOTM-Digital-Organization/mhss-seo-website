import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle } from "lucide-react";

const categories = [
  {
    name: "Guns & Wands",
    icon: "🔫",
    items: [
      { name: "Professional Spray Gun — 4000 PSI", desc: "Stainless steel lance, ergonomic grip, 1/4\" QC inlet. Rated for hot or cold water." },
      { name: "Dual Lance Wand — 48\"", desc: "Adjustable dual-lance with quick-connect tips. 4000 PSI rated, stainless steel." },
      { name: "Trigger Gun — Commercial Grade", desc: "Heavy-duty commercial trigger gun with safety lock. 5000 PSI rated." },
      { name: "Extension Wand — 24\" / 48\" / 72\"", desc: "Stainless steel extension wands in multiple lengths. 1/4\" male QC both ends." },
    ]
  },
  {
    name: "Quick Connects",
    icon: "🔗",
    items: [
      { name: "1/4\" QC Plug — Stainless Steel", desc: "Male quick-connect plug, 1/4\" NPT. 5000 PSI rated. Stainless steel body." },
      { name: "3/8\" QC Socket — Brass", desc: "Female quick-connect socket, 3/8\" NPT. 4000 PSI rated. Brass body." },
      { name: "QC Coupler Set — 4-Pack", desc: "Assorted 1/4\" and 3/8\" quick-connect couplers. Stainless and brass." },
      { name: "High-Flow QC — 3/8\" Stainless", desc: "High-flow quick-connect for 5+ GPM systems. 5000 PSI rated." },
    ]
  },
  {
    name: "Spray Tips & Nozzles",
    icon: "💧",
    items: [
      { name: "5-Piece Tip Set — 0/15/25/40/65°", desc: "Complete color-coded tip set. Stainless steel orifice. 4000 PSI rated." },
      { name: "Turbo Nozzle — Rotating", desc: "Rotating turbo nozzle for 30% more cleaning power. 4000 PSI, 3-5 GPM." },
      { name: "Soap / Low-Pressure Tip — 65°", desc: "Black 65° low-pressure downstream soap tip. 1/4\" QC male." },
      { name: "Stainless Orifice Tips — Custom Sizes", desc: "Stainless steel orifice tips in custom sizes for specific PSI/GPM combinations." },
    ]
  },
  {
    name: "Chemical Injectors",
    icon: "⚗️",
    items: [
      { name: "Downstream Chemical Injector — Fixed", desc: "Fixed-rate downstream injector. 3/8\" NPT. 4000 PSI rated. 10:1 dilution." },
      { name: "Adjustable Chemical Injector", desc: "Adjustable downstream injector with dial control. 3/8\" NPT. 0–10:1 ratio." },
      { name: "High-Draw Injector — 5+ GPM", desc: "High-draw injector for 5+ GPM machines. Stainless steel body." },
      { name: "Injector Rebuild Kit", desc: "Rebuild kit for most downstream injectors. Includes ball, spring, and o-rings." },
    ]
  },
  {
    name: "Pressure Regulators & Unloaders",
    icon: "⚙️",
    items: [
      { name: "Unloader Valve — Adjustable", desc: "Adjustable unloader valve for belt-drive machines. 3/8\" NPT. 4000 PSI max." },
      { name: "Pressure Regulator — 3/8\" NPT", desc: "Inline pressure regulator with gauge port. 0–4000 PSI adjustable." },
      { name: "Bypass Unloader — 5.5 GPM", desc: "High-flow bypass unloader for 5+ GPM commercial machines." },
      { name: "Unloader Rebuild Kit", desc: "Rebuild kit for most popular unloader valves. Includes piston, spring, and seals." },
    ]
  },
  {
    name: "Thermal Relief Valves",
    icon: "🌡️",
    items: [
      { name: "Thermal Relief Valve — 1/4\" NPT", desc: "Thermal relief valve opens at 145°F to protect pump from heat buildup. 1/4\" NPT." },
      { name: "Thermal Relief Valve — 3/8\" NPT", desc: "High-flow thermal relief valve. Opens at 145°F. 3/8\" NPT." },
      { name: "Thermal Valve Repair Kit", desc: "Replacement seat and spring kit for most thermal relief valves." },
    ]
  },
];

const hoses = [
  { name: "3/8\" x 50ft Pressure Hose — 4000 PSI", desc: "Non-marking grey hose, 3/8\" ID, 1/4\" QC fittings both ends. 4000 PSI WP." },
  { name: "3/8\" x 100ft Pressure Hose — 4000 PSI", desc: "Non-marking grey hose, 3/8\" ID, 1/4\" QC fittings both ends. 4000 PSI WP." },
  { name: "1/2\" x 50ft Pressure Hose — 3000 PSI", desc: "High-flow 1/2\" ID hose for 5+ GPM machines. 3/8\" QC fittings." },
  { name: "Hot Water Hose — 3/8\" x 50ft", desc: "Rated for hot water to 250°F. 4000 PSI WP. Wire braid reinforcement." },
  { name: "Hose Repair Fittings", desc: "Stainless steel hose repair fittings in 1/4\" and 3/8\" sizes. Swaged or reusable." },
];

export default function PressureWasherParts() {
  return (
    <Layout
      title="Pressure Washer Parts & Accessories — Guns, Tips, Hoses, Injectors | MHSS Sarasota FL"
      description="Pressure washer parts and accessories in Sarasota FL. Guns, wands, spray tips, quick connects, chemical injectors, unloaders, thermal valves, hoses, and more. Call (941) 377-4673."
    >
      {/* Hero */}
      <section style={{ background: "#1C1C1C", padding: "3rem 0 2.5rem" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", fontSize: "0.85rem", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100", fontSize: "0.85rem" }}>Parts & Accessories</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
            PRESSURE WASHER<br />
            <span style={{ color: "#FFD100" }}>PARTS &amp; ACCESSORIES</span>
          </h1>
          <p style={{ color: "#E0E0E0", fontSize: "1.05rem", maxWidth: "600px", marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
            Guns, wands, tips, quick connects, chemical injectors, unloaders, thermal valves, hoses, and more — in stock at our Sarasota facility.
          </p>
          <a href="tel:9413774673" className="btn-yellow">
            <Phone size={16} /> Call for Availability: (941) 377-4673
          </a>
        </div>
      </section>

      {/* Parts Categories */}
      <section style={{ background: "#F2EFE9", padding: "3rem 0" }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: "2rem" }}>Parts In Stock</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {categories.map((cat, ci) => (
              <div key={ci}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1C1C1C" }}>{cat.name}</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="product-card" style={{ padding: "1.25rem" }}>
                      <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1C1C1C", marginBottom: "0.4rem" }}>{item.name}</div>
                      <p style={{ color: "#2D2D2D", fontSize: "0.8rem", lineHeight: 1.5, fontFamily: "'Inter', sans-serif", marginBottom: "0.75rem" }}>{item.desc}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span className="price-tag">Call for Pricing</span>
                        <a href="tel:9413774673" style={{ color: "#1C1C1C", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", fontFamily: "'Barlow', sans-serif" }}>
                          <Phone size={12} style={{ display: "inline", marginRight: "0.25rem" }} />
                          (941) 377-4673
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoses */}
      <section style={{ background: "#FFFFFF", padding: "3rem 0" }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>Pressure Hoses</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
            {hoses.map((hose, i) => (
              <div key={i} className="product-card" style={{ padding: "1.25rem" }}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1C1C1C", marginBottom: "0.4rem" }}>{hose.name}</div>
                <p style={{ color: "#2D2D2D", fontSize: "0.8rem", lineHeight: 1.5, fontFamily: "'Inter', sans-serif", marginBottom: "0.75rem" }}>{hose.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="price-tag">Call for Pricing</span>
                  <a href="tel:9413774673" style={{ color: "#1C1C1C", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                    (941) 377-4673
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFD100", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#1C1C1C" }}>
              DON'T SEE WHAT YOU NEED?
            </div>
            <div style={{ color: "#1C1C1C", fontFamily: "'Inter', sans-serif" }}>
              We can source almost any pressure washer part — call us and we'll find it.
            </div>
          </div>
          <a href="tel:9413774673" className="btn-outline-dark" style={{ fontSize: "1.1rem", padding: "0.875rem 2rem" }}>
            <Phone size={18} /> (941) 377-4673
          </a>
        </div>
      </section>
    </Layout>
  );
}

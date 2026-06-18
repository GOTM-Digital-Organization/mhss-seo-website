import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const pumps = [
  {
    brand: "General Pump",
    model: "TSS1021",
    series: "T-47 Series",
    psi: "3500 PSI",
    gpm: "4.5 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "Solid Shaft",
    desc: "The workhorse of the industry. General Pump's T-47 triplex delivers exceptional durability for high-demand commercial applications. Solid brass manifold, ceramic plungers.",
    badge: null,
  },
  {
    brand: "General Pump",
    model: "TS2021",
    series: "T-47 Series",
    psi: "3500 PSI",
    gpm: "5.6 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "Right Shaft",
    desc: "High-flow T-47 triplex for maximum production. Ideal for hot water systems and high-volume commercial pressure washing rigs.",
    badge: null,
  },
  {
    brand: "CAT Pumps",
    model: "5CP3120",
    series: "5CP Series",
    psi: "3500 PSI",
    gpm: "4.5 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "Solid Shaft",
    desc: "CAT Pumps' legendary 5CP series — built for continuous-duty industrial use. Chrome-plated plungers, stainless steel valves, and a brass manifold rated for hot water.",
    badge: "AUTHORIZED SERVICE",
  },
  {
    brand: "CAT Pumps",
    model: "5CP2120W",
    series: "5CP Series",
    psi: "2000 PSI",
    gpm: "5.0 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "W770 Brass Manifold",
    desc: "High-flow 5CP with special W770 brass manifold for maximum corrosion resistance. Ideal for chemical injection applications and soft-wash systems.",
    badge: "AUTHORIZED SERVICE",
  },
  {
    brand: "AR Pumps",
    model: "RRV3G30D",
    series: "RRV Series",
    psi: "3000 PSI",
    gpm: "3.0 GPM",
    type: "Axial Cam",
    drive: "Direct Drive",
    shaft: "Hollow Shaft",
    desc: "Annovi Reverberi's RRV axial cam pump — lightweight, compact, and reliable for direct-drive machines. 5-year warranty on cam shaft plunger pumps.",
    badge: null,
  },
  {
    brand: "Comet Pumps",
    model: "AXD3025G",
    series: "AXD Series",
    psi: "3000 PSI",
    gpm: "2.5 GPM",
    type: "Axial",
    drive: "Direct Drive",
    shaft: "Hollow Shaft",
    desc: "Italian-engineered Comet axial pump for residential and light commercial use. Aluminum crankcase, brass manifold, easy maintenance.",
    badge: null,
  },
  {
    brand: "UDOR Pumps",
    model: "Kappa 30/18",
    series: "Kappa Series",
    psi: "2600 PSI",
    gpm: "4.8 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "Solid Shaft",
    desc: "UDOR Kappa series triplex — Italian-made commercial grade pump with ceramic plungers and stainless steel valves. Excellent for hot water and chemical applications.",
    badge: null,
  },
  {
    brand: "General Pump",
    model: "TP2530J34",
    series: "TP Series 51",
    psi: "2500 PSI",
    gpm: "2.88 GPM",
    type: "Triplex Plunger",
    drive: "Belt Drive",
    shaft: "Solid Shaft",
    desc: "Compact TP51 triplex for mid-range commercial applications. Solid brass manifold, ceramic plungers, and easy-access service points.",
    badge: null,
  },
];

const repairServices = [
  "Pump rebuild & seal replacement",
  "Valve inspection & replacement",
  "Unloader valve service",
  "Thermal relief valve replacement",
  "Pressure testing & flow verification",
  "Pump kit supply for all major brands",
];

export default function Pumps() {
  return (
    <Layout
      title="Pressure Washer Pumps — General, CAT, AR, Comet, UDOR | MHSS Sarasota FL"
      description="Pressure washer pump sales, service, and repair in Sarasota FL. General Pump, CAT Pumps, AR, Comet, and UDOR triplex and axial pumps in stock. Pump kits and rebuild parts available. Call (941) 377-4673."
    >
      {/* Page Hero */}
      <section style={{ background: "#1C1C1C", padding: "3rem 0 2.5rem" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Link href="/" style={{ color: "#6B7280", fontSize: "0.85rem", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#6B7280" }}>/</span>
            <span style={{ color: "#FFD100", fontSize: "0.85rem" }}>Pumps</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
            PRESSURE WASHER<br />
            <span style={{ color: "#FFD100" }}>PUMPS &amp; PUMP KITS</span>
          </h1>
          <p style={{ color: "#D1D5DB", fontSize: "1.05rem", maxWidth: "600px", marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
            General Pump, CAT Pumps, AR, Comet, and UDOR — sales, service, and authorized repair at our Sarasota facility. Pump kits and rebuild parts in stock.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" className="btn-yellow">
              <Phone size={16} /> Call for Pricing: (941) 377-4673
            </a>
            <Link href="/contact" className="btn-outline-dark" style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}>
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Pump Grid */}
      <section style={{ background: "#F2EFE9", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="section-heading">Pumps In Stock &amp; Available to Order</h2>
            <p style={{ color: "#6B7280", marginTop: "1rem", fontFamily: "'Inter', sans-serif" }}>
              We stock and service the industry's most trusted pump brands. All pumps available with rebuild kits and replacement parts. Call for current pricing and availability.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {pumps.map((pump, i) => (
              <div key={i} className="product-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ background: "#1C1C1C", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#FFD100", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {pump.brand}
                    </div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#FFFFFF", lineHeight: 1.1 }}>
                      {pump.model}
                    </div>
                    <div style={{ color: "#9CA3AF", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>{pump.series}</div>
                  </div>
                  {pump.badge && <span className="service-badge">{pump.badge}</span>}
                </div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    <span className="spec-pill">{pump.psi}</span>
                    <span className="spec-pill">{pump.gpm}</span>
                    <span className="spec-pill">{pump.type}</span>
                    <span className="spec-pill">{pump.drive}</span>
                  </div>
                  <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.5, fontFamily: "'Inter', sans-serif", flex: 1 }}>
                    {pump.desc}
                  </p>
                  <div style={{ borderTop: "1px solid #E5E0D8", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="price-tag">Call for Pricing</span>
                    <a href="tel:9413774673" style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#1C1C1C", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", fontFamily: "'Barlow', sans-serif" }}>
                      <Phone size={14} /> (941) 377-4673
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pump Repair Service */}
      <section style={{ background: "#FFFFFF", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="service-badge">AUTHORIZED SERVICE CENTER</span>
              </div>
              <h2 className="section-heading">Pump Repair &amp; Rebuild Service</h2>
              <p style={{ color: "#4B5563", marginTop: "1.25rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                Our technicians have been servicing commercial pressure washer pumps for over 35 years. We carry rebuild kits, seal kits, valve kits, and replacement parts for all major brands — most repairs completed same-day or next-day.
              </p>
              <ul style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {repairServices.map((s, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#1C1C1C", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
                    <CheckCircle size={16} color="#FFD100" />
                    {s}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.75rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:9413774673" className="btn-yellow"><Phone size={16} /> Call Now</a>
                <Link href="/contact" className="btn-outline-dark">Get a Quote</Link>
              </div>
            </div>
            <div style={{ background: "#F2EFE9", borderRadius: "0.5rem", padding: "2rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1C1C1C", marginBottom: "1rem" }}>
                BRANDS WE SERVICE
              </div>
              {["General Pump", "CAT Pumps", "AR (Annovi Reverberi)", "Comet Pumps", "UDOR Pumps", "Interpump", "Giant Pumps"].map((brand, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: i < 6 ? "1px solid #E5E0D8" : "none" }}>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: "#1C1C1C" }}>{brand}</span>
                  <ArrowRight size={14} color="#FFD100" />
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", background: "#FFD100", borderRadius: "0.25rem", padding: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1C1C1C" }}>
                  MOST REPAIRS SAME-DAY
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1C1C1C", marginTop: "0.25rem" }}>
                  Bring your pump in — we'll diagnose it on the spot
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#1C1C1C", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#FFFFFF" }}>
              NEED A PUMP? HAVE A PUMP PROBLEM?
            </div>
            <div style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
              552 Catarzi Way, Sarasota FL — Mon–Fri 8am–5pm
            </div>
          </div>
          <a href="tel:9413774673" className="btn-yellow" style={{ fontSize: "1.1rem", padding: "0.875rem 2rem" }}>
            <Phone size={18} /> (941) 377-4673
          </a>
        </div>
      </section>
    </Layout>
  );
}

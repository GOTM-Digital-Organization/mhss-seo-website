/**
 * PressureWashingRigs page — MHSS Inc.
 * Custom pressure washing rig builds: skid mounts, trailer rigs, truck bed rigs
 * Design: dark industrial hero, white/cream content sections, yellow accents
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import QuoteModal from "@/components/QuoteModal";
import { Link } from "wouter";
import { Phone, CheckCircle2, Wrench, Truck, ShieldCheck, ArrowRight } from "lucide-react";

const HERO_IMG = "/manus-storage/mhss3-hero_275e7d18.jpg";

const RIG_TYPES = [
  {
    title: "Skid Mount Rigs",
    color: "#FFD100",
    desc: "Bolt-in skid units built to fit your truck bed or trailer. Ideal for soft wash, roof cleaning, and flat surface work.",
    items: [
      "Honda GX390 / GX630 / GX690 engine options",
      "General Pump, AR, or CAT triplex pump",
      "Belt drive or direct drive configuration",
      "Aluminum or steel skid frame",
      "12V or 120V electric hose reel option",
      "Chemical injector and downstream setup",
      "Pressure gauge, unloader, and thermal relief",
      "Custom GPM / PSI to your spec",
    ],
  },
  {
    title: "Trailer Rigs",
    color: "#CC2020",
    desc: "Complete trailer-mounted pressure washing rigs ready to roll. Built for contractors who need a self-contained, mobile setup.",
    items: [
      "Single or dual machine configurations",
      "100–500 gallon poly water tank",
      "Titan or Summit hose reel — hand crank or electric",
      "Soft wash pump integration available",
      "Fuel tank and battery tray",
      "Tool storage and hose management",
      "DOT-compliant trailer lighting",
      "Custom paint and branding available",
    ],
  },
  {
    title: "Truck Bed / Van Rigs",
    color: "#3B82F6",
    desc: "Space-efficient rigs designed for pickup trucks, service vans, and box trucks. Everything mounted and plumbed — ready to work.",
    items: [
      "Compact skid design for tight spaces",
      "50–200 gallon tank options",
      "Hose reel mounted to frame or cab rack",
      "Downstream or upstream chemical injection",
      "Battery-powered 12V auxiliary pump option",
      "Anti-vibration engine mounts",
      "Quick-connect fittings throughout",
      "Custom layout to your truck dimensions",
    ],
  },
];

const COMPONENTS = [
  { cat: "Engines", items: ["Honda GX390", "Honda GX630 V-twin", "Honda GX690 V-twin", "Kohler Command Pro"] },
  { cat: "Pumps", items: ["General Pump triplex", "AR triplex", "CAT Pumps", "Comet triplex", "UDOR diaphragm"] },
  { cat: "Tanks", items: ["Norwesco poly tanks", "15–525 gallon range", "Horizontal & vertical", "Chemical-resistant"] },
  { cat: "Hose Reels", items: ["Titan 12\", 18\", 22\"", "Summit hand crank", "Electric retract", "Spring retract"] },
  { cat: "Hose & Fittings", items: ["4000 PSI pressure hose", "6000 PSI high-pressure", "Banjo poly fittings", "Brass ball valves"] },
  { cat: "Accessories", items: ["Chemical injectors", "Pressure gauges", "Unloader valves", "Thermal relief valves"] },
];

const PROCESS = [
  { step: "01", title: "Consultation", body: "Tell us what you're cleaning, how often, and what vehicle or trailer you're working with. We'll spec the right engine, pump, and tank combination for your application." },
  { step: "02", title: "Quote", body: "We'll put together a detailed quote with component options and pricing. Most quotes are turned around same business day. No surprises — all pricing is upfront." },
  { step: "03", title: "Build", body: "Our technicians assemble, plumb, and test your rig at our Sarasota facility. Build times vary by complexity — typically 3–10 business days for a complete rig." },
  { step: "04", title: "Pickup or Delivery", body: "Pick up your finished rig at 552 Catarzi Way, Sarasota. Local delivery available for trailer rigs. We walk you through every component before you leave." },
];

export default function PressureWashingRigs() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout
      title="Custom Pressure Washing Rig Builds Sarasota FL | Skid, Trailer & Truck Rigs — MHSS Inc."
      description="Custom pressure washing rig builds in Sarasota, FL. Skid mounts, trailer rigs, and truck bed rigs built to spec. Honda engines, General Pump, poly tanks, hose reels. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/pressure-washing-rigs"
    >
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName="Custom Pressure Washing Rig Build"
        productModel="Rig Build Quote Request"
      />

      {/* ── Hero ── */}
      <section style={{ position: "relative", minHeight: "52vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={HERO_IMG} alt="Custom pressure washing rig builds Sarasota FL" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.75) 60%, rgba(28,28,28,0.3) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#CCCCCC", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <Link href="/pressure-washers" style={{ color: "#CCCCCC", textDecoration: "none" }}>Pressure Washers</Link>
            <span style={{ color: "#CCCCCC" }}>/</span>
            <span style={{ color: "#FFD100" }}>Rig Builds</span>
          </nav>
          <span style={{ display: "inline-block", backgroundColor: "rgba(255,209,0,0.15)", border: "1px solid rgba(255,209,0,0.4)", color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            Custom Builds · Skid · Trailer · Truck Bed · Factory Direct Components
          </span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
            CUSTOM PRESSURE WASHING<br /><span style={{ color: "#FFD100" }}>RIG BUILDS — SARASOTA, FL</span>
          </h1>
          <p style={{ color: "#F0F0F0", fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", marginBottom: "1.75rem" }}>
            MHSS builds custom pressure washing rigs for contractors, cleaning companies, and property managers across Sarasota and Manatee County. Skid mounts, trailer rigs, and truck bed setups — built to your spec using factory direct components. Honda engines, General Pump, poly tanks, Titan hose reels, and everything in between.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> Call: (941) 377-4673
            </a>
            <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.75rem", borderRadius: "0.375rem", border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Get a Rig Build Quote
            </button>
          </div>
        </div>
      </section>

      {/* ── Feature strip ── */}
      <section style={{ backgroundColor: "#FFD100", padding: "1.25rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <Wrench size={15} />, text: "Built to Your Spec" },
              { icon: <ShieldCheck size={15} />, text: "Factory Direct Components" },
              { icon: <Truck size={15} />, text: "Skid · Trailer · Truck Bed" },
              { icon: <CheckCircle2 size={15} />, text: "Honda Engines" },
              { icon: <CheckCircle2 size={15} />, text: "General Pump · AR · CAT" },
              { icon: <CheckCircle2 size={15} />, text: "Titan & Summit Hose Reels" },
            ].map(f => (
              <span key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1C1C1C", fontSize: "0.875rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: "0.04em" }}>
                {f.icon} {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rig Types ── */}
      <section style={{ backgroundColor: "#F9F7F4", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#CC2020", display: "block", marginBottom: "0.4rem" }}>What We Build</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1C1C1C" }}>
              Three Rig Configurations
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.9rem", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0", fontFamily: "'Inter', sans-serif" }}>
              Every rig is built to order. Tell us your application and we'll spec the right setup.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
            {RIG_TYPES.map(rig => (
              <div key={rig.title} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", padding: "2rem", borderTopWidth: "4px", borderTopStyle: "solid", borderTopColor: rig.color }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.35rem", color: "#1C1C1C", marginBottom: "0.6rem" }}>{rig.title}</h3>
                <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", marginBottom: "1.25rem" }}>{rig.desc}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {rig.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#1C1C1C", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                      <CheckCircle2 size={14} color={rig.color} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Components We Stock ── */}
      <section style={{ backgroundColor: "#1C1C1C", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "0.4rem" }}>Factory Direct</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#FFFFFF" }}>
              Components We Stock & Build With
            </h2>
            <p style={{ color: "#AAAAAA", fontSize: "0.9rem", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0", fontFamily: "'Inter', sans-serif" }}>
              All components sourced direct from the manufacturer — no middleman, competitive pricing.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {COMPONENTS.map(c => (
              <div key={c.cat} style={{ backgroundColor: "#2A2A2A", border: "1px solid #3A3A3A", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFD100", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.cat}</h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {c.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", color: "#CCCCCC", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                      <ArrowRight size={12} color="#FFD100" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build Process ── */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#CC2020", display: "block", marginBottom: "0.4rem" }}>How It Works</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1C1C1C" }}>
              Our Rig Build Process
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {PROCESS.map(p => (
              <div key={p.step} style={{ position: "relative" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "3.5rem", color: "#F2EFE9", lineHeight: 1, marginBottom: "-0.5rem" }}>{p.step}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#1C1C1C", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MHSS for Rig Builds ── */}
      <section style={{ backgroundColor: "#F2EFE9", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#CC2020", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                Sarasota &amp; Manatee County
              </span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "#1C1C1C", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Why Contractors Choose MHSS for Rig Builds
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {[
                  "35+ years building and servicing pressure washing equipment in Sarasota",
                  "Factory direct components — Honda, General Pump, Titan, Norwesco, and more",
                  "Every rig is pressure-tested and inspected before pickup",
                  "Certified warranty repair center — we can service what we build",
                  "No middleman markup — you pay dealer pricing on every component",
                  "Local shop — stop by for parts, service, or modifications anytime",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "#1C1C1C", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#FFD100" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone size={15} /> Call (941) 377-4673
                </a>
                <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "transparent", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.8rem 1.75rem", borderRadius: "0.375rem", border: "2px solid #1C1C1C", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Request a Quote
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { value: "35+", label: "Years Building Rigs" },
                { value: "100s", label: "Rigs Built" },
                { value: "Same Day", label: "Most Quotes" },
                { value: "Local", label: "Sarasota Shop" },
              ].map((stat, i) => (
                <div key={i} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", color: "#CC2020", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#4B5563", marginTop: "0.3rem" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#CC2020", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
            READY TO BUILD YOUR RIG?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "2rem", fontFamily: "'Inter', sans-serif", maxWidth: "520px", margin: "0 auto 2rem" }}>
            Call us or submit a quote request and we'll get back to you same business day with a spec and price.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "0.875rem 2.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={18} /> (941) 377-4673
            </a>
            <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", border: "2px solid #FFFFFF", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 160ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLElement).style.color = "#CC2020"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
            >
              Get a Rig Build Quote
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

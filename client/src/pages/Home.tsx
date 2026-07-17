/*
 * Home.tsx — MHSS Florida Industrial Pro
 * Product-forward homepage: hero → category tabs → featured products → brands → services → CTA
 * Colors: #F2EFE9 base, #1C1C1C dark, #FFD100 yellow, #CC2020 red
 * Fonts: Barlow Condensed 800 headlines, Inter body
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Clock, ChevronRight, Star, Wrench, ShieldCheck, Truck, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const HERO_IMG = "/manus-storage/mhss3-hero_275e7d18.jpg";
const SKID_IMG = "/manus-storage/product-8gpm-skid_44ff1033.png";
const POLY_TANK_IMG = "/manus-storage/product-poly-tank_7caa9dd5.png";
const TITAN_REEL_IMG = "/manus-storage/product-titan-reel_15952034.png";
const F9_IMG = "/manus-storage/product-f9_16dc3302.png";
const AG_HOSE_IMG = "/manus-storage/product-ag-hose_323a2554.png";
const PUMPS_IMG = "/manus-storage/mhss3-pumps_b88feb86.jpg";
const HYDRAULIC_IMG = "/manus-storage/mhss3-hydraulic_fa9ed4b2.jpg";
const SPRAYERS_IMG = "/manus-storage/mhss3-sprayers_e8eac13a.jpg";
const SURFACE_IMG = "/manus-storage/mhss3-surface-cleaners_aa69a651.jpg";

const categories = [
  { label: "Pressure Washers", href: "/pressure-washers", icon: "💧", desc: "BE Power, Mi-T-M, Pressure Pro, PSI" },
  { label: "Pumps & Kits", href: "/pumps", icon: "⚙️", desc: "General, CAT, AR, Comet, UDOR" },
  { label: "PW Parts", href: "/pressure-washer-parts", icon: "🔧", desc: "Guns, tips, hoses, injectors, unloaders" },
  { label: "Surface Cleaners", href: "/surface-cleaners", icon: "🌀", desc: "WhisperWash, Whirlaway, Hammerhead" },
  { label: "Airless Sprayers", href: "/airless-sprayers", icon: "🎨", desc: "Graco, Titan/SpeeFlo, Tritech" },
  { label: "Hose Reels", href: "/hose-reels", icon: "🪝", desc: "Titan, Summit — manual & electric" },
  { label: "Hydraulic Hose", href: "/hydraulic-hose", icon: "🔴", desc: "Parker, Bridgestone — made to order" },
  { label: "Pest Control", href: "/pest-control-sprayers", icon: "🌿", desc: "All makes, custom builds, lawn spray" },
  { label: "Deco Products", href: "/deco-products", icon: "🏠", desc: "Paver sealers, waterproofing, strippers" },
];

const featuredProducts = [
  {
    // Item 1: Poly Tanks
    brand: "Poly Tank",
    model: "15 – 525 Gallon",
    name: "Poly Tanks — 15 to 525 Gallons",
    specs: ["15 Gal – 525 Gal", "UV Resistant", "Multiple Sizes", "In Stock"],
    desc: "Poly tanks in a full range of sizes from 15 to 525 gallons. Ideal for soft wash rigs, pest control trucks, lawn spray, and chemical storage. Durable UV-resistant polyethylene construction.",
    badge: "IN STOCK",
    href: "/pest-control-sprayers",
    img: POLY_TANK_IMG,
  },
  {
    // Item 3: Titan Hose Reels
    brand: "Titan",
    model: "12\" / 18\" / 22\" Hand Crank & Electric",
    name: "Titan Hose Reels",
    specs: ["12\", 18\", 22\" Sizes", "Hand Crank & Electric", "Heavy Duty", "In Stock"],
    desc: "Titan hose reels in 12\" , 18\" , and 22\" sizes — available in hand crank and electric retract models. Built for professional pressure washing rigs, pest control trucks, and service vehicles.",
    badge: "IN STOCK",
    href: "/hose-reels",
    img: TITAN_REEL_IMG,
  },
  {
    // Item 5: BE Whirlaway Surface Cleaners
    brand: "BE Power Equipment",
    model: "Whirlaway",
    name: "BE Whirlaway Surface Cleaners",
    specs: ["Dual Rotating Jets", "Up to 4000 PSI", "Multiple Sizes", "In Stock"],
    desc: "BE Whirlaway surface cleaners for fast, streak-free flat surface cleaning. Dual rotating jets clean driveways, sidewalks, and concrete 4x faster than a wand. In stock at our Sarasota location.",
    badge: "IN STOCK",
    href: "/surface-cleaners",
    img: SURFACE_IMG,
  },
  {
    // Item 10: F-9 Products
    brand: "F-9",
    model: "BARC / Efflorescence / Groundskeeper",
    name: "F-9 Products",
    specs: ["Rust Remover", "Efflorescence", "Battery Acid", "Concrete Cleaner"],
    desc: "F-9 BARC, Efflorescence Remover, and Groundskeeper — the professional-grade concrete and masonry cleaning products trusted by contractors nationwide. In stock at MHSS Sarasota.",
    badge: "IN STOCK",
    href: "/deco-products",
    img: F9_IMG,
  },
  {
    // Item 16: 8 GPM Belt Drive Pressure Washer
    brand: "Honda / General Pump",
    model: "GX690 — 8 GPM Belt Drive Skid",
    name: "8 GPM @ 3500 PSI Belt Drive Skid",
    specs: ["3500 PSI", "8 GPM", "Honda GX690", "Belt Drive"],
    desc: "Heavy-duty commercial belt drive skid unit powered by a Honda GX690 V-twin engine with a General triplex pump. Built for professional contractors who need all-day reliability and maximum flow output.",
    badge: "IN STOCK",
    href: "/pressure-washers",
    img: SKID_IMG,
  },
  {
    // Item 21: Ag Hose Spools
    brand: "Ag Hose",
    model: "3/8\" & 1/2\" Yellow — 600 PSI",
    name: "Ag Hose — 300' & 400' Spools",
    specs: ["300' & 400' Spools", "3/8\" & 1/2\" ID", "600 PSI", "Yellow"],
    desc: "Yellow agricultural spray hose in 300' and 400' spools. Available in 3/8\" and 1/2\" inside diameter, rated to 600 PSI. Ideal for pest control rigs, lawn spray trucks, and chemical application.",
    badge: "IN STOCK",
    href: "/pest-control-sprayers",
    img: AG_HOSE_IMG,
  },
];

const brands = [
  "Honda", "BE Power", "Mi-T-M", "Pressure Pro", "PSI",
  "General Pump", "CAT Pumps", "AR Pumps", "Comet", "UDOR",
  "Graco", "Titan/SpeeFlo", "Tritech", "WhisperWash", "Whirlaway",
  "Hammerhead", "Rotoeze", "Titan Reels", "Summit", "Parker", "Bridgestone",
];

const services = [
  {
    icon: <ShieldCheck size={28} color="#FFD100" />,
    title: "Hydraulic Hose — While You Wait",
    desc: "Custom hydraulic hose fabricated on-site while you wait. Any length, any fitting, any pressure rating. Parker and Bridgestone products. 2-wire and 4-wire capability. No waiting days — drive in, drive out.",
    href: "/hydraulic-hose",
  },
  {
    icon: <Wrench size={28} color="#FFD100" />,
    title: "Pressure Washing Equipment & Repair",
    desc: "Sales, service, and repair of commercial pressure washers, pumps, hoses, guns, wands, and surface cleaners. All major brands. Most repairs completed same-day or next-day.",
    href: "/pressure-washer-repair",
  },
  {
    icon: <Star size={28} color="#FFD100" />,
    title: "Airless Sprayer Service & Repair",
    desc: "Authorized service and repair center for Graco, Titan/SpeeFlo, and Tritech airless paint sprayers. Parts, kits, and accessories in stock. Factory-trained technicians on-site.",
    href: "/airless-sprayers",
  },
  {
    icon: <Truck size={28} color="#FFD100" />,
    title: "Ag & Pest Control Spray Systems",
    desc: "Custom fabrication, sales, and repair of agricultural and pest control spray systems. Poly tanks, hose reels, pumps, spray guns, ag hose, and complete rig builds — designed for your application.",
    href: "/pest-control-sprayers",
  },
  {
    icon: <ArrowRight size={28} color="#FFD100" />,
    title: "Factory Direct Sales",
    desc: "Buy direct from an authorized dealer. BE Power Equipment, Mi-T-M, Honda, General Pump, CAT Pumps, Graco, Titan, F-9, and more — at competitive prices with no middleman markup.",
    href: "/pressure-washers",
  },
  {
    icon: <CheckCircle size={28} color="#FFD100" />,
    title: "Certified Warranty Repair Center",
    desc: "Authorized warranty service center for BE Power, Mi-T-M, Pressure Pro, Graco, Titan/SpeeFlo, and Tritech. Factory-trained technicians. Warranty work handled on-site — no shipping your equipment away.",
    href: "/pressure-washer-repair",
  },
];

const stats = [
  { value: "35+", label: "Years in Business" },
  { value: "20+", label: "Brands Carried" },
  { value: "1000s", label: "Parts in Stock" },
  { value: "Same Day", label: "Most Repairs" },
];

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout
      title="MHSS Inc. | Industrial Equipment & Service | Sarasota, FL"
      description="Sarasota's industrial equipment specialists since 1990. Pressure washers, pumps, hydraulic hose, airless sprayer repair. Call (941) 377-4673."
      canonical="https://www.mhss-inc.com/"
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.mhss-inc.com/#webpage",
        "name": "MHSS Inc. — Industrial Equipment & Service | Sarasota, FL",
        "description": "Sarasota's industrial equipment specialists since 1990. Pressure washers, pumps, hydraulic hose, airless sprayer repair.",
        "url": "https://www.mhss-inc.com/",
        "isPartOf": { "@id": "https://www.mhss-inc.com/#business" },
        "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mhss-inc.com/" }] }
      }}
    >
      {/* ── HERO ── */}
      <section style={{ position: "relative", background: "#1C1C1C", overflow: "hidden", minHeight: "520px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img
            src={HERO_IMG}
            alt="MHSS industrial equipment showroom"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.35 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.7) 55%, rgba(28,28,28,0.2) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "4rem 1rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#CC2020", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: "0.2rem", marginBottom: "1rem" }}>
              <MapPin size={12} /> Sarasota, FL — Serving Sarasota &amp; Manatee County Since 1990
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
              INDUSTRIAL EQUIPMENT<br />
              <span style={{ color: "#FFD100" }}>SALES, SERVICE</span><br />
              &amp; REPAIR
            </h1>
            <p style={{ color: "#E8E8E8", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2rem", fontFamily: "'Inter', sans-serif", maxWidth: "520px" }}>
              Custom hydraulic hose while you wait. Pressure washing equipment sales & repair. Airless sprayer service. Ag & pest control spray systems. Factory direct. Certified warranty repair center.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:9413774673" className="btn-yellow" style={{ fontSize: "1.05rem", padding: "0.875rem 2rem" }}>
                <Phone size={18} /> (941) 377-4673
              </a>
              <Link href="/contact" className="btn-outline-dark" style={{ borderColor: "#FFFFFF", color: "#FFFFFF", fontSize: "1.05rem", padding: "0.875rem 2rem" }}>
                Get a Quote <ChevronRight size={16} />
              </Link>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
              {[
                { icon: <Clock size={14} />, text: "Mon–Fri 8am–5pm" },
                { icon: <MapPin size={14} />, text: "552 Catarzi Way, Sarasota" },
                { icon: <ShieldCheck size={14} />, text: "Certified Warranty Repair Center" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#CCCCCC", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ color: "#FFD100" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#FFD100", padding: "1.25rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", textAlign: "center" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#1C1C1C", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#4B4B00", fontWeight: 500, marginTop: "0.2rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section style={{ background: "#FFFFFF", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.75rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 className="section-heading">Shop by Category</h2>
            <Link href="/contact" style={{ color: "#CC2020", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Don't see what you need? Call us <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.875rem" }}>
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} style={{ textDecoration: "none" }}>
                <div className="category-tile">
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{cat.icon}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1C1C1C", lineHeight: 1.2, marginBottom: "0.3rem" }}>{cat.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#2D2D2D", lineHeight: 1.4 }}>{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ background: "#F2EFE9", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.75rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 className="section-heading">Featured Products</h2>
            <p style={{ color: "#2D2D2D", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>
              All pricing by phone — call <a href="tel:9413774673" style={{ color: "#CC2020", fontWeight: 600, textDecoration: "none" }}>(941) 377-4673</a>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {featuredProducts.map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: "none" }}>
                <div className="product-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#1C1C1C" }}>
                    <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8, transition: "opacity 200ms ease, transform 300ms ease" }}
                      onMouseEnter={e => { (e.target as HTMLImageElement).style.opacity = "1"; (e.target as HTMLImageElement).style.transform = "scale(1.04)"; }}
                      onMouseLeave={e => { (e.target as HTMLImageElement).style.opacity = "0.8"; (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
                    />
                    <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {p.badge && <span className="service-badge">{p.badge}</span>}
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(28,28,28,0.8))", padding: "1rem 0.75rem 0.5rem" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#FFD100", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.brand}</div>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#1C1C1C", lineHeight: 1.2 }}>{p.model}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1A1A1A", marginTop: "0.15rem" }}>{p.name}</div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {p.specs.map((s, si) => <span key={si} className="spec-pill">{s}</span>)}
                    </div>
                    <p style={{ color: "#2D2D2D", fontSize: "0.8rem", lineHeight: 1.5, fontFamily: "'Inter', sans-serif", flex: 1 }}>{p.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E5E0D8", paddingTop: "0.75rem" }}>
                      <span className="price-tag">Call for Pricing</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#1C1C1C", fontSize: "0.8rem", fontWeight: 600, fontFamily: "'Barlow', sans-serif" }}>
                        View Details <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS WE CARRY ── */}
      <section style={{ background: "#1C1C1C", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#FFD100", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Authorized Dealer &amp; Service Center
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FFFFFF" }}>
              Brands We Carry &amp; Service
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {brands.map((brand, i) => (
              <span key={i} style={{ background: "#2A2A2A", border: "1px solid #333", color: "#E8E8E8", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.85rem", padding: "0.4rem 0.875rem", borderRadius: "0.2rem", transition: "all 150ms ease", cursor: "default" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "#FFD100"; (e.target as HTMLElement).style.color = "#1C1C1C"; (e.target as HTMLElement).style.borderColor = "#FFD100"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "#2A2A2A"; (e.target as HTMLElement).style.color = "#D1D5DB"; (e.target as HTMLElement).style.borderColor = "#333"; }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#FFFFFF", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 className="section-heading" style={{ display: "block" }}>What We Do</h2>
            <p style={{ color: "#2D2D2D", marginTop: "0.75rem", fontFamily: "'Inter', sans-serif" }}>
              Six core specialties — all under one roof at 552 Catarzi Way, Sarasota
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#F2EFE9", border: "1px solid #E5E0D8", borderRadius: "0.375rem", padding: "1.75rem 1.5rem", height: "100%", transition: "all 200ms ease", cursor: "pointer" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#FFD100"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(255,209,0,0.2)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E0D8"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ marginBottom: "1rem" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#1C1C1C", marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ color: "#2D2D2D", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#CC2020", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.85rem", marginTop: "1rem" }}>
                    Learn More <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MHSS ── */}
      <section style={{ background: "#F2EFE9", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#CC2020", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Sarasota &amp; Manatee County
              </div>
              <h2 className="section-heading">Why Contractors &amp; Businesses Choose MHSS</h2>
              <p style={{ color: "#1A1A1A", marginTop: "1.25rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                Since 1990, MHSS has been Sarasota's go-to source for hydraulic hose fabrication, pressure washing equipment, airless sprayer repair, and agricultural spray systems. We started with a bread truck and a crimping machine — today we're a certified warranty repair center and factory direct dealer for the industry's top brands.
              </p>
              <ul style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Custom hydraulic hose fabricated on-site while you wait — any length, any fitting",
                  "Pressure washing equipment sales, service & repair — all major brands",
                  "Authorized airless sprayer service center — Graco, Titan/SpeeFlo, Tritech",
                  "Agricultural & pest control spray system fabrication, sales & repair",
                  "Factory direct sales — no middleman, competitive pricing",
                  "Certified warranty repair center — no shipping your equipment away",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "#1C1C1C", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    <CheckCircle size={16} color="#FFD100" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.75rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:9413774673" className="btn-yellow"><Phone size={16} /> Call (941) 377-4673</a>
                <Link href="/about" className="btn-outline-dark">Our Story</Link>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={HYDRAULIC_IMG}
                alt="MHSS hydraulic hose fabrication"
                style={{ width: "100%", borderRadius: "0.5rem", objectFit: "cover", height: "380px" }}
              />
              <div style={{ position: "absolute", bottom: "-1rem", left: "-1rem", background: "#FFD100", borderRadius: "0.375rem", padding: "1.25rem 1.5rem", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#1C1C1C", lineHeight: 1 }}>35+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#1C1C1C", fontWeight: 500 }}>Years Serving<br />Sarasota</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#CC2020", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
            NEED EQUIPMENT, PARTS, OR SERVICE?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "2rem", fontFamily: "'Inter', sans-serif" }}>
            Stop by our Sarasota facility or call us — we'll have what you need.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:9413774673" className="btn-yellow" style={{ fontSize: "1.1rem", padding: "0.875rem 2.5rem" }}>
              <Phone size={18} /> (941) 377-4673
            </a>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.25rem", textDecoration: "none", transition: "all 160ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLElement).style.color = "#CC2020"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
            >
              Get a Quote
            </Link>
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>
              <MapPin size={14} /> 552 Catarzi Way, Sarasota FL 34232
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>
              <Clock size={14} /> Mon–Fri 8:00am–5:00pm
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

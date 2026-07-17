// Products Catalog — MHSS Inc. Sarasota
// Design: Industrial dark theme, Barlow Condensed headings, DM Sans body
// All product photos are real shop photos uploaded to CDN

import Layout from "@/components/Layout";
import { Phone } from "lucide-react";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Cleaners & Chemicals",
  "Deco Sealers",
  "Lubricants & Oils",
  "Fittings & Valves",
  "Hose & Reels",
  "Pressure Washer Parts",
  "Engines",
  "Filters & Strainers",
];

const PRODUCTS = [
  // ── Cleaners & Chemicals ──────────────────────────────────────────────────
  {
    id: 1,
    name: "PowerKleen Clean Up",
    subtitle: "Industrial Oxide & Efflorescence Dissolver",
    description: "Industrial-grade formulation for use on brick, tile, and concrete surfaces. Biodegradable, non-corrosive, non-skin irritant.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3274_51669e6e.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "PowerKleen White Stuff",
    subtitle: "Stain-Go Mobile Home & RV Cleaner",
    description: "Concentrated heavy-duty cleaner for removal of streaks and film from mobile homes and recreational vehicles.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3274_51669e6e.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Jamson Labs MAGIC #184",
    subtitle: "All-Purpose Cleaner",
    description: "USDA approved, biodegradable. Works magically on almost anything — windows, walls, woodwork, carpets, upholstery, dishes, and more. No rinsing needed.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3274_51669e6e.jpg",
    inStock: true,
  },
  {
    id: 4,
    name: "PowerKleen Purple Stuff",
    subtitle: "Ultimate Degreasing System — Contractor Strength",
    description: "Heavy-duty contractor-strength degreaser. Cuts through grease, oil, and grime on equipment, concrete, and industrial surfaces.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3275_09fcfb23.jpg",
    inStock: true,
  },
  {
    id: 5,
    name: "PowerKleen Mean Green",
    subtitle: "All Purpose Ultra Strong Cleaner Concentrate",
    description: "Ultra-strong all-purpose concentrate. Dilutes for a wide range of cleaning applications from light duty to heavy industrial.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3277_a2787cc4.jpg",
    inStock: true,
  },
  {
    id: 6,
    name: "PowerKleen Sandstorm",
    subtitle: "Ready Mix Truck & Concrete Cleaner",
    description: "Formulated specifically for ready-mix trucks, concrete equipment, and construction surfaces. Removes cement buildup and concrete residue.",
    category: "Cleaners & Chemicals",
    img: "/manus-storage/DSCF3277_a2787cc4.jpg",
    inStock: true,
  },
  // ── Deco Sealers ─────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Deco SilaCast B.E.S.",
    subtitle: "Beauty Enhancing Sealer",
    description: "Deco Products Inc. penetrating sealer that enhances the natural beauty of concrete, brick, and masonry while providing long-lasting protection.",
    category: "Deco Sealers",
    img: "/manus-storage/DSCF3278_0ee44f68.jpg",
    inStock: true,
  },
  {
    id: 8,
    name: "Deco 20 Clear Finish",
    subtitle: "Concrete & Masonry Sealer",
    description: "Deco Products Inc. clear finish sealer for decorative concrete, stamped concrete, and masonry. Provides a durable, attractive protective coat.",
    category: "Deco Sealers",
    img: "/manus-storage/DSCF3279_ad482279.jpg",
    inStock: true,
  },
  // ── Lubricants & Oils ────────────────────────────────────────────────────
  {
    id: 9,
    name: "Pure Guard Hydraulic Oil AW 68",
    subtitle: "Anti-Wear Hydraulic Fluid — 5 Gallon",
    description: "Premium anti-wear hydraulic oil for industrial hydraulic systems. ISO VG 68 viscosity grade. Available in 5-gallon buckets.",
    category: "Lubricants & Oils",
    img: "/manus-storage/DSCF3276_d5fee829.jpg",
    inStock: true,
  },
  // ── Fittings & Valves ────────────────────────────────────────────────────
  {
    id: 10,
    name: "Poly Plumbing Fittings",
    subtitle: "TF, HB, NIP, BRB, MP Series",
    description: "Full line of poly/plastic plumbing fittings including tank fittings (TF), hose barbs (HB), nipples, bulkheads, and male plugs. Multiple sizes in stock.",
    category: "Fittings & Valves",
    img: "/manus-storage/DSCF3281_2b20b734.jpg",
    inStock: true,
  },
  {
    id: 11,
    name: "Camlock Fittings & Adapters",
    subtitle: "Aluminum — All Types & Sizes",
    description: "Complete selection of aluminum camlock fittings: male and female adapters, couplers, dust caps, and hose barb ends. Quick-connect for hose and tank systems.",
    category: "Fittings & Valves",
    img: "/manus-storage/DSCF3282_ad47f5aa.jpg",
    inStock: true,
  },
  {
    id: 12,
    name: "Metal Camlock Fittings",
    subtitle: "Heavy-Duty Hose Couplings",
    description: "Heavy-duty metal camlock fittings for high-pressure and industrial applications. Male/female adapters and hose couplings in multiple sizes.",
    category: "Fittings & Valves",
    img: "/manus-storage/DSCF3283_1bad7a4b.jpg",
    inStock: true,
  },
  {
    id: 13,
    name: "Hydraulic Fittings & Adapters",
    subtitle: "Industrial Pipe Connectors",
    description: "Wide selection of hydraulic fittings, pipe connectors, and metal adapters for industrial hose assemblies and hydraulic systems.",
    category: "Fittings & Valves",
    img: "/manus-storage/DSCF3287_7c30236c.jpg",
    inStock: true,
  },
  {
    id: 14,
    name: "Brass Fittings",
    subtitle: "Hose Barbs, Nipples, Threaded & Couplers",
    description: "Comprehensive selection of brass fittings: hose barbs, pipe nipples, threaded fittings, and couplers. All standard sizes in stock.",
    category: "Fittings & Valves",
    img: "/manus-storage/DSCF3298_2276449e.jpg",
    inStock: true,
  },
  // ── Hose & Reels ─────────────────────────────────────────────────────────
  {
    id: 15,
    name: "Flentral Air/Water Hose",
    subtitle: "3/4\" Mandrel Hose — 300 PSI",
    description: "Flentral AR15-075 3/4\" (19mm) mandrel air/water hose rated to 300 PSI. Flexible, durable construction for professional use.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3284_9b3b76fa.jpg",
    inStock: true,
  },
  {
    id: 16,
    name: "Parker GLOBALCORE Hydraulic Hose",
    subtitle: "387-12 — 3/4\", 3000 PSI",
    description: "Parker GLOBALCORE 387-12 hydraulic hose, 3/4\" (19mm), ISO 18752-AC rated to 3000 PSI (21 MPa). Premium performance for demanding hydraulic applications.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3289_fe8224e2.jpg",
    inStock: true,
  },
  {
    id: 17,
    name: "Corrugated Suction Hose",
    subtitle: "Green — Camlock Ends",
    description: "Green corrugated suction hose with camlock fittings. Flexible and kink-resistant for pump intake and transfer applications.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3291_13299aab.jpg",
    inStock: true,
  },
  {
    id: 18,
    name: "Lay-Flat Discharge Hose",
    subtitle: "Blue — Camlock Ends",
    description: "Blue lay-flat discharge hose with camlock fittings. Lightweight and easy to store. Ideal for pump discharge and water transfer.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3292_3a9aaa6a.jpg",
    inStock: true,
  },
  {
    id: 19,
    name: "Industrial Hose Reels",
    subtitle: "Yellow Hose — Various Sizes",
    description: "Heavy-duty industrial hose reels pre-spooled with yellow ag/spray hose. Ready for use on spray rigs, pest control trucks, and agricultural equipment.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3295_61b01efc.jpg",
    inStock: true,
  },
  {
    id: 20,
    name: "Titan Hose Reels",
    subtitle: "Stainless Steel — Hand Crank & Electric",
    description: "Titan stainless steel hose reels in 12\", 18\", and 22\" sizes. Available in hand crank and electric motor models. Built for professional contractors.",
    category: "Hose & Reels",
    img: "/manus-storage/DSCF3300_dab08725.jpg",
    inStock: true,
  },
  // ── Pressure Washer Parts ─────────────────────────────────────────────────
  {
    id: 21,
    name: "12V Diaphragm Pump",
    subtitle: "Fluid Transfer & Spray Pump",
    description: "12-volt diaphragm pump for fluid transfer and spray applications. Ideal for chemical injection, pest control rigs, and low-flow spray systems.",
    category: "Pressure Washer Parts",
    img: "/manus-storage/DSCF3280_d0e1dac1.jpg",
    inStock: true,
  },
  {
    id: 22,
    name: "General Pump YG 6000 Spray Gun",
    subtitle: "High-Pressure Spray Gun",
    description: "General Pump YG 6000 professional pressure washer spray gun with brass fittings. Built for high-pressure commercial use.",
    category: "Pressure Washer Parts",
    img: "/manus-storage/DSCF3286_e40e4573.jpg",
    inStock: true,
  },
  // ── Engines ───────────────────────────────────────────────────────────────
  {
    id: 23,
    name: "Power 6.5 PRO Engine",
    subtitle: "Industrial Engine — Electronic Ignition",
    description: "Power 6.5 PRO industrial engine with electronic ignition. Reliable and fuel-efficient for pressure washers, pumps, and other equipment.",
    category: "Engines",
    img: "/manus-storage/DSCF3293_50caa65c.jpg",
    inStock: true,
  },
  {
    id: 24,
    name: "Honda GX 160 Engine",
    subtitle: "Commercial Small Engine",
    description: "Honda GX 160 commercial-grade engine. The industry standard for reliability in pressure washers, water pumps, and light equipment.",
    category: "Engines",
    img: "/manus-storage/DSCF3294_749a879e.jpg",
    inStock: true,
  },
  {
    id: 25,
    name: "Honda GX 390 Engine",
    subtitle: "Heavy-Duty Commercial Engine",
    description: "Honda GX 390 heavy-duty commercial engine. High torque output for demanding applications including large pressure washers and industrial pumps.",
    category: "Engines",
    img: "/manus-storage/DSCF3296_44d82e90.jpg",
    inStock: true,
  },
  // ── Filters & Strainers ───────────────────────────────────────────────────
  {
    id: 26,
    name: "Industrial Filter Elements",
    subtitle: "Water & Fluid Filtration",
    description: "Industrial filter elements for water and fluid filtration in pressure washing, spray, and pump systems. Multiple micron ratings available.",
    category: "Filters & Strainers",
    img: "/manus-storage/DSCF3285_37e905cf.jpg",
    inStock: true,
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <Layout
      title="Industrial Supply Products | Sarasota FL | MHSS Inc."
      description="Shop industrial supply products at MHSS Inc. in Sarasota, FL. Cleaners, Deco sealers, hydraulic fittings, hose reels, engines, pressure washer parts, and more. Factory direct pricing."
      canonical="https://www.mhss-inc.com/products"
    >
      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "#2A2A2A" }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#FFD100" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFD100" }}>
              Factory Direct — Sarasota, FL
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
            INDUSTRIAL SUPPLY<br /><span style={{ color: "#FFD100" }}>PRODUCTS</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "600px", fontFamily: "'DM Sans', sans-serif" }}>
            Cleaners, sealers, lubricants, fittings, hose, reels, engines, and pressure washer parts — all in stock at our Sarasota shop. Factory direct pricing, no middleman.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ backgroundColor: "#333333", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="py-4 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.4rem 1rem",
                  borderRadius: "3px",
                  transition: "all 0.15s ease",
                  backgroundColor: activeCategory === cat ? "#FFD100" : "rgba(255,255,255,0.07)",
                  color: activeCategory === cat ? "#1C1C1C" : "#C0C0C0",
                  border: activeCategory === cat ? "1px solid #FFD100" : "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ backgroundColor: "#404040" }} className="py-16">
        <div className="container">
          {/* Category headings with cards */}
          {(activeCategory === "All" ? CATEGORIES.filter(c => c !== "All") : [activeCategory]).map(cat => {
            const items = PRODUCTS.filter(p => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#FFD100" }} />
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#FFFFFF", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {cat}
                  </h2>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map(product => (
                    <div
                      key={product.id}
                      style={{
                        backgroundColor: "#4A4A4A",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "6px",
                        overflow: "hidden",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      className="group hover:scale-[1.02] hover:shadow-xl"
                    >
                      {/* Photo */}
                      <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#3A3A3A" }}>
                        <img
                          src={product.img}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                          className="group-hover:scale-105"
                        />
                      </div>
                      {/* Info */}
                      <div style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFD100" }}>
                            {product.category}
                          </span>
                          {product.inStock && (
                            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#4ADE80", backgroundColor: "rgba(74,222,128,0.12)", padding: "0.15rem 0.5rem", borderRadius: "2px", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                              In Stock
                            </span>
                          )}
                        </div>
                        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.25rem", lineHeight: 1.2 }}>
                          {product.name}
                        </h3>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#FFD100", marginBottom: "0.6rem", fontWeight: 500 }}>
                          {product.subtitle}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#A0A0A0", lineHeight: 1.55, marginBottom: "1rem" }}>
                          {product.description}
                        </p>
                        <a
                          href="tel:+19413774673"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                            width: "100%",
                            padding: "0.55rem",
                            backgroundColor: "#FFD100",
                            color: "#1C1C1C",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            borderRadius: "3px",
                            textDecoration: "none",
                            transition: "background-color 0.15s ease",
                          }}
                        >
                          <Phone size={13} /> Call to Order
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2A2A2A", borderTop: "3px solid #FFD100" }} className="py-14">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
            DON'T SEE WHAT YOU NEED?
          </h2>
          <p style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
            We stock thousands of parts and products. Call us — if we don't have it, we can get it.
          </p>
          <a href="tel:+19413774673" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: "4px", textDecoration: "none" }}>
            <Phone size={18} /> (941) 377-4673
          </a>
        </div>
      </section>
    </Layout>
  );
}

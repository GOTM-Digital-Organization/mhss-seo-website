import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, Package } from "lucide-react";

const SUPPLY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-parts-supply-77WHPyM4LQGtKLHAgFW8bo.webp";

const CATEGORIES = [
  {
    title: "Honda Pressure Washers",
    items: ["Honda GX160 / GX200 / GX270 / GX390 powered units", "Cold water gas-engine pressure washers", "Commercial-grade 2,500–4,000 PSI machines", "Honda GX engine parts & service kits"],
  },
  {
    title: "Titan Hose Reels",
    items: ["Titan manual retract hose reels", "Titan electric retract hose reels", "Stainless steel and carbon steel options", "Hose reel mounting hardware & fittings"],
  },
  {
    title: "High-Pressure Hose",
    items: ["Wire-braid pressure washing hose", "Thermoplastic high-pressure hose", "All lengths — 25ft to 200ft+", "Custom hose assemblies made in-store"],
  },
  {
    title: "Hydraulic Hose & Fittings",
    items: ["SAE and metric hydraulic hose", "JIC, NPT, ORFS, BSP fittings", "Swivel fittings and adapters", "Hydraulic quick-disconnect couplers"],
  },
  {
    title: "Spray Nozzles & Tips",
    items: ["Color-coded spray tips (0°–65°)", "Turbo / rotary nozzles", "Chemical injection nozzles", "Nozzle extension wands"],
  },
  {
    title: "Quick Couplers & Fittings",
    items: ["Stainless steel quick couplers", "Brass and steel garden hose fittings", "Pressure washer inlet/outlet fittings", "Swivel connectors"],
  },
  {
    title: "Surface Cleaners",
    items: ["12\" to 24\" surface cleaner heads", "Flat surface cleaners for concrete", "Gutter cleaning attachments", "Replacement nozzle bars"],
  },
  {
    title: "Pumps & Pump Parts",
    items: ["AR, General Pump, Comet replacement pumps", "Unloader valves & repair kits", "Pump oil & maintenance supplies", "Thermal relief valves"],
  },
  {
    title: "Poly Tanks & Accessories",
    items: ["100 to 500+ gallon poly tanks", "Tank fittings and bulkhead connectors", "Suction strainers and filters", "Discharge hose assemblies"],
  },
  {
    title: "Air Hose & Fittings",
    items: ["Rubber and PVC air hose", "Air hose reels", "Milton and industrial air fittings", "Air hose assemblies — all lengths"],
  },
];

export default function PressureWashingSupply() {
  return (
    <Layout
      title="Pressure Washing Supply Store Sarasota FL | Honda, Titan, Parts | MHSS Inc."
      description="Sarasota's pressure washing supply store. Honda pressure washers, Titan hose reels, high-pressure hose, spray nozzles, quick couplers, pump parts, and more. In stock. Call 941-377-4673."
      canonical="https://www.mhss-inc.com/pressure-washing-supply-store"
    >
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${SUPPLY_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(58,58,58,0.88) 50%, rgba(58,58,58,0.60) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Sarasota, FL Supply Store
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            PRESSURE WASHING<br /><span style={{ color: "#F5A623" }}>SUPPLY STORE</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            Honda pressure washers, Titan hose reels, high-pressure hose, spray nozzles, quick couplers, pump parts, and everything else you need — in stock at our Sarasota shop.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19413774673" className="inline-flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              <Phone size={18} /> Call 941-377-4673
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:bg-zinc-700" style={{ border: "2px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="mb-12">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              WHAT WE STOCK IN SARASOTA
            </h2>
            <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", maxWidth: "700px" }}>
              We maintain a comprehensive in-store inventory so you can get what you need same-day — no waiting on shipping. If we don't have it in stock, we can typically source it quickly. Call ahead to confirm availability on specific items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Package size={18} style={{ color: "#F5A623" }} />
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF" }}>
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#F5A623", marginTop: "8px", flexShrink: 0 }} />
                      <span style={{ color: "#C0C0C0", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(245,158,11,0.2)" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
              DON'T SEE WHAT YOU NEED?
            </h3>
            <p style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif", marginBottom: "1.5rem" }}>
              Call us or stop by. If we don't have it in stock, we can usually source it quickly. We also build custom hose assemblies on-site.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+19413774673" className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold transition-all hover:scale-105" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Phone size={16} /> 941-377-4673
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold transition-all hover:bg-zinc-700" style={{ border: "2px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

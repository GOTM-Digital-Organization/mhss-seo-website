import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, Settings, CheckCircle } from "lucide-react";

const RIG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-pressure-wash-rig-hUMDh8jp3YwkZzcRFL6ywp.webp";

export default function RigBuilds() {
  return (
    <Layout
      title="Pressure Washing Rig Builds Sarasota FL | Custom Trailer Systems | MHSS Inc."
      description="Custom pressure washing rig builds in Sarasota, FL. Trailer-mounted and skid systems with Honda engines, Titan hose reels, poly tanks, and custom hose assemblies. Call MHSS: 941-377-4673."
      canonical="https://www.mhss-inc.com/pressure-washing-rig-builds"
    >
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${RIG_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(58,58,58,0.88) 50%, rgba(58,58,58,0.50) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Custom Builds — Sarasota, FL
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            CUSTOM PRESSURE WASHING<br /><span style={{ color: "#F5A623" }}>RIG BUILDS</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            We design and build complete pressure washing rigs — trailer-mounted systems, skid units, and truck-bed setups — using Honda engines, Titan hose reels, poly tanks, and custom high-pressure hose assemblies.
          </p>
          <a href="tel:+19413774673" className="inline-flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            <Phone size={18} /> Discuss Your Build: 941-377-4673
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623", marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  BUILT FOR PROFESSIONALS, BY PROFESSIONALS
                </h2>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  MHSS builds custom pressure washing rigs for contractors, cleaning companies, municipalities, and commercial operations throughout Sarasota and Southwest Florida. Every rig is built with commercial-grade components — no consumer shortcuts.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  We work with you to spec out the right system for your application — whether you need a compact skid unit for a service van, a trailer-mounted system for a pressure washing business, or a high-volume rig for industrial cleaning. Our team handles everything from design to final assembly and testing.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  RIG BUILD COMPONENTS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Honda GX Engines", items: ["GX160 (5.5 HP)", "GX200 (6.5 HP)", "GX270 (9 HP)", "GX390 (13 HP)", "Full parts & service support"] },
                    { title: "Titan Hose Reels", items: ["Manual retract reels", "Electric retract reels", "Stainless steel options", "Custom mounting brackets", "Hose guide rollers"] },
                    { title: "Pumps & Plumbing", items: ["AR, General Pump, Comet", "Unloader valves", "Stainless fittings throughout", "Bypass / recirculation lines", "Chemical injection systems"] },
                    { title: "Tanks & Frame", items: ["100 to 500+ gallon poly tanks", "Steel trailer or skid frame", "Diamond plate tool boxes", "Custom paint / powder coat", "DOT-compliant trailer builds"] },
                  ].map((section) => (
                    <div key={section.title} className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#F5A623", fontSize: "1rem", marginBottom: "0.75rem" }}>
                        {section.title}
                      </div>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle size={13} style={{ color: "#F5A623", marginTop: "3px", flexShrink: 0 }} />
                            <span style={{ color: "#C0C0C0", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  RIG TYPES WE BUILD
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Trailer-Mounted Pressure Washing Rigs", desc: "Full trailer systems with dual-axle or single-axle trailers, large poly tanks, Honda-powered pressure washers, Titan hose reels, and all necessary plumbing. Ideal for pressure washing contractors who need maximum capacity and portability." },
                    { title: "Skid-Mounted Systems", desc: "Compact skid units designed to mount in a truck bed, van, or on a flatbed trailer. Perfect for service companies that need a self-contained pressure washing system they can move between vehicles." },
                    { title: "Soft Wash Systems", desc: "Low-pressure, high-volume systems for roof cleaning, house washing, and other applications where high pressure would cause damage. Custom chemical injection and mixing systems available." },
                    { title: "Industrial Cleaning Rigs", desc: "High-volume, high-pressure systems for industrial and commercial cleaning applications. We can build systems up to 4,000+ PSI and 10+ GPM with appropriate pump and engine combinations." },
                  ].map((type) => (
                    <div key={type.title} className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                        {type.title}
                      </div>
                      <p style={{ color: "#909090", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  DISCUSS YOUR BUILD
                </h3>
                <p style={{ color: "#C0C0C0", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem" }}>
                  Tell us what you need and we'll spec out the right rig for your application and budget.
                </p>
                <a href="tel:+19413774673" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold transition-all hover:scale-105" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <Phone size={16} /> 941-377-4673
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold mt-3 transition-all hover:bg-zinc-700" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Get a Custom Quote
                </Link>
              </div>

              <div className="overflow-hidden rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={RIG_IMG} alt="Custom pressure washing rig with Honda engine and Titan hose reel" className="w-full object-cover" style={{ height: "220px" }} loading="lazy" />
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#F5A623", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Related Services
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Pressure Washing Supply Store", href: "/pressure-washing-supply-store" },
                    { label: "Pressure Washer Repair & Sales", href: "/pressure-washer-repair-sarasota" },
                    { label: "Hydraulic Hose Repair", href: "/hydraulic-hose-repair-sarasota" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm transition-colors hover:text-yellow-400" style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif" }}>
                      <ArrowRight size={12} style={{ color: "#F5A623" }} /> {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

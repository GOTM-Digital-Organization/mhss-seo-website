import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, Wrench, Clock, Shield } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-hero-FUu5TVKLCe2R2eFu96xyHE.webp";

export default function HydraulicHoseRepair() {
  return (
    <Layout
      title="Hydraulic Hose Repair Sarasota FL | Custom Assemblies | MHSS Inc."
      description="Same-day hydraulic hose repair and custom assemblies in Sarasota, FL. All sizes, pressure ratings, and fittings. Walk in with a broken hose, leave with a new one. Call MHSS: 941-377-4673."
      canonical="https://www.mhss-inc.com/hydraulic-hose-repair-sarasota"
    >
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(58,58,58,0.88) 50%, rgba(58,58,58,0.50) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Sarasota, FL · Bradenton, FL
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            HYDRAULIC HOSE REPAIR<br /><span style={{ color: "#F5A623" }}>SARASOTA &amp; BRADENTON</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            Same-day custom hydraulic hose assemblies, on-site crimping, and all fittings. Serving construction, agriculture, marine, and industrial customers across Sarasota and Manatee counties since 1990.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19413774673" className="flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              <Phone size={18} /> Call 941-377-4673
            </a>
            <Link href="/emergency-mobile-hose-repair" className="flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:bg-zinc-700" style={{ border: "2px solid rgba(220,38,38,0.5)", color: "#E03030", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Emergency Mobile Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* What We Offer */}
              <div>
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623", marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  HYDRAULIC HOSE REPAIR &amp; CUSTOM ASSEMBLIES
                </h2>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  Mobile Hose &amp; Spray Systems has been Sarasota's go-to source for hydraulic hose repair and custom hose assemblies since 1990. Whether you need a single replacement hose or a complete set of assemblies for a piece of heavy equipment, our team can crimp and test your hoses same-day in our Sarasota shop.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  We stock a full range of hydraulic hose in all common SAE and metric sizes, from 3/16" to 2" and beyond, along with a comprehensive selection of fittings including JIC, NPT, ORFS, BSP, and metric ends. Our hydraulic press can handle all standard crimp ferrules and swage fittings for both standard and high-pressure applications.
                </p>
              </div>

              {/* Services List */}
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  WHAT WE REPAIR &amp; MANUFACTURE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Hydraulic hose assemblies — all sizes",
                    "High-pressure hose (up to 6,000 PSI)",
                    "Low-pressure return and suction hose",
                    "Spiral and wire-braid hydraulic hose",
                    "Thermoplastic hydraulic hose",
                    "JIC, NPT, ORFS, BSP, metric fittings",
                    "Swivel and straight fittings",
                    "Banjo and elbow fittings",
                    "Air hose assemblies and tubing",
                    "Agriculture spray hose",
                    "Discharge and suction hose assemblies",
                    "Custom length hose assemblies",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: "#4A4A4A" }}>
                      <CheckCircle size={16} style={{ color: "#F5A623", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ color: "#C0C0C0", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Served */}
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  INDUSTRIES WE SERVE IN SARASOTA &amp; BRADENTON
                </h3>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  Our hydraulic hose repair customers include contractors, farmers, marina operators, landscapers, and industrial businesses throughout Sarasota County, Manatee County, and the surrounding areas. Common equipment we service includes:
                </p>
                <ul className="space-y-2">
                  {[
                    "Excavators, backhoes, and skid steers",
                    "Dump trucks and refuse vehicles",
                    "Agricultural tractors and implements",
                    "Forklifts and material handling equipment",
                    "Marine hydraulic steering and trim systems",
                    "Aerial lifts and boom trucks",
                    "Landscaping and tree service equipment",
                    "Industrial manufacturing machinery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#F5A623", marginTop: "8px", flexShrink: 0 }} />
                      <span style={{ color: "#C0C0C0", fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO Content */}
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  SAME-DAY HYDRAULIC HOSE REPAIR IN SARASOTA, FL
                </h3>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  When a hydraulic hose fails, downtime is money. That's why MHSS prioritizes fast turnaround on all hose assemblies. Walk into our Sarasota shop at 552 Catarzi Way with your old hose or just the measurements, and our team will have a new assembly ready while you wait in most cases.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  For equipment that can't come to us, our emergency mobile unit — "The Hose Doctor" — can come to your job site in Sarasota, Bradenton, Venice, Englewood, or anywhere in the surrounding area. We carry a full inventory of hose and fittings on the truck to handle most repairs on the spot.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  GET A FAST QUOTE
                </h3>
                <p style={{ color: "#C0C0C0", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem" }}>
                  Call us or stop by our Sarasota shop. Bring your old hose or just the measurements — we'll have a new assembly ready fast.
                </p>
                <a href="tel:+19413774673" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold transition-all hover:scale-105" style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <Phone size={16} /> 941-377-4673
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold mt-3 transition-all hover:bg-zinc-700" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Request a Quote
                </Link>
              </div>

              {/* Features */}
              {[
                { icon: <Clock size={20} />, title: "Same-Day Service", desc: "Most hose assemblies completed while you wait." },
                { icon: <Wrench size={20} />, title: "All Sizes & Ratings", desc: "From 3/16\" to 2\"+ hose, all pressure ratings." },
                { icon: <Shield size={20} />, title: "Commercial Grade", desc: "Only high-quality commercial and industrial hose." },
              ].map((f) => (
                <div key={f.title} className="p-5 rounded-lg flex gap-4" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(245,158,11,0.12)", color: "#F5A623" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1rem" }}>{f.title}</div>
                    <div style={{ color: "#909090", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif", marginTop: "0.25rem" }}>{f.desc}</div>
                  </div>
                </div>
              ))}

              {/* Location */}
              <div className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#F5A623", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Sarasota Shop
                </div>
                <p style={{ color: "#C0C0C0", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                  552 Catarzi Way<br />Sarasota, FL 34232<br /><br />
                  Mon–Fri: 7:30am – 5:00pm<br />
                  Sat–Sun: Closed
                </p>
              </div>

              {/* Emergency */}
              <div className="p-5 rounded-lg" style={{ backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#E03030", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Emergency Mobile Service
                </div>
                <p style={{ color: "#C0C0C0", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.75rem" }}>
                  Can't come to us? The Hose Doctor comes to you.
                </p>
                <Link href="/emergency-mobile-hose-repair" className="flex items-center gap-1 text-sm font-bold" style={{ color: "#E03030", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Truck, Clock, MapPin, ArrowRight, Zap } from "lucide-react";

const EMERGENCY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-emergency-truck-4JFDGxCTvwiZJEva7tmW7J.webp";

export default function EmergencyService() {
  return (
    <Layout
      title="Emergency Hydraulic Hose Repair Sarasota FL | The Hose Doctor | MHSS Inc."
      description="Emergency mobile hydraulic hose repair in Sarasota, FL. The Hose Doctor comes to your job site. On-site hose assembly, crimping, and repair. Call MHSS now: 941-377-4673."
      canonical="https://www.mhss-inc.com/emergency-mobile-hose-repair"
    >
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#18181B" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${EMERGENCY_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(24,24,27,0.97) 50%, rgba(24,24,27,0.65) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full emergency-pulse" style={{ backgroundColor: "#DC2626" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#DC2626" }}>
              Emergency Mobile Service — Sarasota & Bradenton
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            EMERGENCY HYDRAULIC<br /><span style={{ color: "#DC2626" }}>HOSE REPAIR</span><br />
            <span style={{ color: "#F59E0B" }}>WE COME TO YOU</span>
          </h1>
          <p style={{ color: "#A1A1AA", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            "The Hose Doctor" emergency mobile unit carries a full inventory of hydraulic hose and fittings to your job site. On-site crimping and assembly — get your equipment back to work fast.
          </p>
          <a
            href="tel:+19413774673"
            className="inline-flex items-center gap-2 px-8 py-5 rounded font-bold text-xl transition-all hover:scale-105 active:scale-95 emergency-pulse"
            style={{ backgroundColor: "#DC2626", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            <Phone size={22} /> CALL NOW: 941-377-4673
          </a>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#18181B" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#DC2626", marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  THE HOSE DOCTOR — MOBILE EMERGENCY SERVICE
                </h2>
                <p style={{ color: "#A1A1AA", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  When a hydraulic hose fails on your equipment, every minute of downtime costs money. MHSS's emergency mobile unit — known as "The Hose Doctor" — is equipped to come to your job site, construction site, farm, or marina and make the repair on the spot.
                </p>
                <p style={{ color: "#A1A1AA", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  Our mobile unit carries a comprehensive inventory of hydraulic hose in all common sizes and pressure ratings, along with a full selection of fittings and a hydraulic crimping press. In most cases, we can fabricate a replacement hose assembly on-site and have your equipment running again within the hour.
                </p>
                <p style={{ color: "#A1A1AA", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  We serve Sarasota, Bradenton, Venice, Englewood, North Port, and surrounding areas. Call us as soon as the hose fails — the sooner you call, the sooner we can get you back to work.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  WHAT WE REPAIR ON-SITE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Hydraulic hose assemblies — all sizes",
                    "High-pressure hose failures",
                    "Fitting and coupling failures",
                    "Excavator and backhoe hoses",
                    "Dump truck hydraulic lines",
                    "Agricultural equipment hoses",
                    "Forklift hydraulic lines",
                    "Marine hydraulic steering hoses",
                    "Boom truck and aerial lift hoses",
                    "Industrial machinery hydraulic lines",
                    "Pressure washer hose repair",
                    "Custom on-site hose fabrication",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: "#27272A" }}>
                      <Zap size={14} style={{ color: "#DC2626", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ color: "#A1A1AA", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  SERVICE AREA
                </h3>
                <p style={{ color: "#A1A1AA", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  The Hose Doctor serves the following areas for emergency mobile hydraulic hose repair:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Sarasota, FL",
                    "Bradenton, FL",
                    "Venice, FL",
                    "Englewood, FL",
                    "North Port, FL",
                    "Osprey, FL",
                    "Nokomis, FL",
                    "Palmetto, FL",
                    "Parrish, FL",
                    "Lakewood Ranch, FL",
                    "Longboat Key, FL",
                    "Siesta Key, FL",
                  ].map((city) => (
                    <div key={city} className="flex items-center gap-2 p-2 rounded" style={{ backgroundColor: "#27272A" }}>
                      <MapPin size={12} style={{ color: "#DC2626", flexShrink: 0 }} />
                      <span style={{ color: "#A1A1AA", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  HOW IT WORKS
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Call Us Immediately", desc: "Call 941-377-4673 as soon as the hose fails. Give us your location and a description of the hose (size, length, fittings if known)." },
                    { step: "02", title: "We Dispatch The Hose Doctor", desc: "Our mobile unit is dispatched to your location. We'll give you an estimated arrival time based on your location." },
                    { step: "03", title: "On-Site Diagnosis & Fabrication", desc: "Our technician assesses the failed hose, selects the correct replacement hose and fittings from our mobile inventory, and crimps a new assembly on the spot." },
                    { step: "04", title: "Install & Test", desc: "We install the new hose assembly, bleed the system if necessary, and test to confirm proper operation before we leave." },
                  ].map((step) => (
                    <div key={step.step} className="flex gap-5 p-5 rounded-lg" style={{ backgroundColor: "#27272A", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#DC2626", lineHeight: 1, flexShrink: 0, width: "2.5rem" }}>
                        {step.step}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                          {step.title}
                        </div>
                        <p style={{ color: "#71717A", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.4)" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                  HOSE FAILURE?
                </h3>
                <p style={{ color: "#A1A1AA", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem" }}>
                  Call us now. The Hose Doctor will come to your location.
                </p>
                <a href="tel:+19413774673" className="flex items-center justify-center gap-2 w-full py-4 rounded font-bold text-xl transition-all hover:scale-105 emergency-pulse" style={{ backgroundColor: "#DC2626", color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <Phone size={20} /> 941-377-4673
                </a>
              </div>

              <div className="overflow-hidden rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={EMERGENCY_IMG} alt="The Hose Doctor emergency mobile hose repair truck serving Sarasota FL" className="w-full object-cover" style={{ height: "220px" }} loading="lazy" />
              </div>

              {[
                { icon: <Clock size={20} />, title: "Fast Response", desc: "We dispatch quickly to minimize your downtime." },
                { icon: <Truck size={20} />, title: "Fully Equipped", desc: "Full hose & fitting inventory on the truck." },
                { icon: <MapPin size={20} />, title: "We Come to You", desc: "Sarasota, Bradenton, and surrounding areas." },
              ].map((f) => (
                <div key={f.title} className="p-5 rounded-lg flex gap-4" style={{ backgroundColor: "#27272A", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(220,38,38,0.12)", color: "#DC2626" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1rem" }}>{f.title}</div>
                    <div style={{ color: "#71717A", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif", marginTop: "0.25rem" }}>{f.desc}</div>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-lg" style={{ backgroundColor: "#27272A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#F59E0B", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Shop Locations
                </div>
                <p style={{ color: "#A1A1AA", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                  <strong style={{ color: "#E4E4E7" }}>Sarasota:</strong><br />552 Catarzi Way, Sarasota, FL 34232<br /><br />
                  <strong style={{ color: "#E4E4E7" }}>Bradenton:</strong><br />Bradenton, FL — Manatee County<br /><br />
                  Mon–Fri: 7:30am – 5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

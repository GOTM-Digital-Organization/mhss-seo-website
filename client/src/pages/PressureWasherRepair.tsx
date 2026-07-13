import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, Zap } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-hero-FUu5TVKLCe2R2eFu96xyHE.webp";

export default function PressureWasherRepair() {
  return (
    <Layout
      title="Pressure Washer Repair Sarasota FL | Honda Sales & Service | MHSS Inc."
      description="Expert pressure washer repair and sales in Sarasota, FL. Honda pressure washers, AR and General pumps, unloaders, burners, and full machine rebuilds. Call MHSS: 941-377-4673."
      canonical="https://www.mhss-inc.com/pressure-washer-repair-sarasota"
    >
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(58,58,58,0.75) 40%, rgba(58,58,58,0.20) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#FFD100" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFD100" }}>
              Pressure Washer Repair & Sales — Sarasota, FL
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            PRESSURE WASHER REPAIR<br /><span style={{ color: "#FFD100" }}>&amp; SALES — SARASOTA</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            Certified warranty repair center for BE Power, Mi-T-M, Pressure Pro, and more. Factory-trained service on Honda, AR, General Pump, and all major brands. Pumps, unloaders, burners, carburetors, and complete machine rebuilds — all in our Sarasota shop. Factory direct sales — no middleman.
          </p>
          <a href="tel:+19413774673" className="inline-flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: "#FFD100", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            <Phone size={18} /> Call 941-377-4673
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#FFD100", marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  COMMERCIAL PRESSURE WASHER REPAIR IN SARASOTA
                </h2>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  MHSS is a certified warranty repair center and factory direct dealer for pressure washing equipment in Sarasota. We've been servicing commercial and industrial pressure washers for over 35 years. We work on gas-engine machines from Honda, Simpson, BE Power, Mi-T-M, and other leading brands, as well as electric-motor units used in commercial and industrial settings.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  Our factory-trained technicians are experienced with all major pump brands including AR (Annovi Reverberi), General Pump, Comet, and Cat Pumps. Whether your machine needs a simple unloader valve replacement or a complete pump rebuild, we have the parts and expertise to get it running right — most repairs completed same-day or next-day.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  REPAIR SERVICES WE OFFER
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Pressure washer pump repair & rebuild",
                    "Unloader valve replacement & adjustment",
                    "Honda GX engine service & repair",
                    "Carburetor cleaning & rebuild",
                    "Thermal relief valve replacement",
                    "High-pressure hose replacement",
                    "Spray gun and wand repair",
                    "Nozzle replacement & tip selection",
                    "Hot water burner service & repair",
                    "Fuel system cleaning & repair",
                    "Pressure regulator adjustment",
                    "Complete machine inspection & tune-up",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: "#4A4A4A" }}>
                      <CheckCircle size={16} style={{ color: "#FFD100", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ color: "#C0C0C0", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  HONDA PRESSURE WASHERS — SALES &amp; SERVICE
                </h3>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                  MHSS is your local source for Honda-powered pressure washers in Sarasota. Honda GX series engines are the industry standard for commercial pressure washing — known for reliability, fuel efficiency, and long service life. We stock Honda-powered units in a range of PSI and GPM ratings to suit residential, commercial, and industrial applications.
                </p>
                <p style={{ color: "#C0C0C0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  We also provide full service and parts support for Honda GX160, GX200, GX270, GX390, and other GX series engines used in pressure washers, pumps, and other equipment.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "1rem" }}>
                  BRANDS WE SERVICE
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Honda", "AR Pumps", "General Pump", "Comet", "Cat Pumps", "Simpson", "Landa", "Hotsy", "Karcher (Commercial)", "Mi-T-M", "NorthStar", "PowerBoss"].map((brand) => (
                    <div key={brand} className="p-3 rounded text-center" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFD100", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#FFD100" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  SCHEDULE SERVICE
                </h3>
                <p style={{ color: "#C0C0C0", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "1.25rem" }}>
                  Bring your pressure washer to our Sarasota shop or call for a quote. We service most brands and models.
                </p>
                <a href="tel:+19413774673" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold transition-all hover:scale-105" style={{ backgroundColor: "#FFD100", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <Phone size={16} /> 941-377-4673
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold mt-3 transition-all hover:bg-zinc-700" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#E4E4E7", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Request a Quote
                </Link>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFD100", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Also See
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Pressure Washing Supply Store", href: "/pressure-washing-supply-store" },
                    { label: "Custom Rig Builds", href: "/pressure-washing-rig-builds" },
                    { label: "Hydraulic Hose Repair", href: "/hydraulic-hose-repair-sarasota" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm transition-colors hover:text-yellow-400" style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif" }}>
                      <ArrowRight size={12} style={{ color: "#FFD100" }} /> {link.label}
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

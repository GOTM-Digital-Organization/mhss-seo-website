import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Phone, Wrench, Droplets, Zap, Shield, Star, CheckCircle2, ChevronRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-hero-LwcziuFGZkTbzEXdxZGJAu.webp";
const PW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-pressure-washers-Dn4rXwmHkPMwRBWCbLFQNS.webp";
const HOSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-hydraulic-hose-FcqKNLVYPmjdBrXKdWFJaZ.webp";
const SPRAYER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-airless-sprayers-MrHZbVQrJDMjdBrXKdWFJaZ.webp";
const PARTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss2-parts-wall-HkPMwRBWCbLFQNSMrHZbVQrJDM.webp";

const SERVICES = [
  { icon: <Droplets size={28} />, title: "Pressure Washers", sub: "Sales, Service & Warranty", href: "/pressure-washers", desc: "Authorized dealer for BE Power, Mi-T-M, Pressure Pro & more. Cold and hot water units for every application.", img: PW_IMG },
  { icon: <Wrench size={28} />, title: "Pumps & Parts", sub: "General, Cat, AR, Comet, UDOR", href: "/pumps-parts", desc: "Complete pump kits, replacement parts, guns, wands, tips, chemical injectors, unloaders and more.", img: PARTS_IMG },
  { icon: <Zap size={28} />, title: "Hydraulic Hose", sub: "Made to Order — While You Wait", href: "/hydraulic-hose", desc: "Parker & Bridgestone hose cut and crimped on-site. 2-wire and 4-wire capability. Dump trailer service.", img: HOSE_IMG },
  { icon: <Shield size={28} />, title: "Airless Sprayers", sub: "Graco, Titan/SpeeFlo, Tritech", href: "/airless-sprayers", desc: "Authorized service center for Graco and Titan/SpeeFlo. Warranty repairs, kits, and parts in stock.", img: SPRAYER_IMG },
];

const BRANDS = [
  "Honda", "BE Power", "Mi-T-M", "Pressure Pro", "Pressure Systems Innovations",
  "General Pump", "Cat Pumps", "AR Pumps", "Comet Pumps", "UDOR",
  "Titan Hose Reels", "Summit Hose Reels", "Graco", "Titan/SpeeFlo", "Tritech",
  "Parker", "Bridgestone", "WhisperWash", "Whirlaway", "Hammerhead",
];

const STATS = [
  { value: 35, suffix: "+", label: "Years in Business" },
  { value: 20, suffix: "+", label: "Brands Carried" },
  { value: 5000, suffix: "+", label: "Customers Served" },
  { value: 8, suffix: "", label: "Service Categories" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1600, visible);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ textAlign: "center", padding: "1.5rem" }}>
      <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#F59E0B", lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ color: "#94A3B8", fontSize: "0.875rem", marginTop: "0.5rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.03em" }}>{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="MHSS Inc. | Pressure Washer & Hydraulic Hose Specialists — Sarasota, FL"
      description="Mobile Hose & Spray Systems — Sarasota's industrial equipment experts since 1990. Pressure washer sales & service, hydraulic hose made to order, airless sprayer repair, pumps, parts, and more at 552 Cattaraugus Way."
      canonical="https://www.mhss-inc.com/"
    >
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={HERO_IMG} alt="MHSS industrial equipment shop Sarasota" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,15,23,0.92) 0%, rgba(8,15,23,0.75) 50%, rgba(8,15,23,0.35) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <span style={{ display: "inline-block", backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.875rem", borderRadius: "9999px", marginBottom: "1.25rem" }}>
              Sarasota's Industrial Equipment Specialists Since 1990
            </span>
            <h1 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: "#F1F5F9", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Pressure Washers.<br />
              <span style={{ color: "#F59E0B" }}>Hydraulic Hose.</span><br />
              Industrial Parts.
            </h1>
            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "540px" }}>
              From pump repairs and warranty service to hydraulic hose made while you wait — MHSS is Sarasota and Manatee County's go-to facility for professional-grade equipment sales, service, and parts.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:9413774673" style={{ backgroundColor: "#F59E0B", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "background 0.15s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#D97706")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F59E0B")}>
                <Phone size={16} /> Call (941) 377-4673
              </a>
              <Link href="/contact" style={{ border: "2px solid rgba(245,158,11,0.5)", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", background: "transparent", transition: "all 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,158,11,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                Get a Quote <ArrowRight size={16} />
              </Link>
            </div>
            {/* Trust signals */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              {["Authorized Warranty Service", "Parker & Bridgestone Hose", "Sarasota & Manatee County"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748B", fontSize: "0.8rem" }}>
                  <CheckCircle2 size={13} style={{ color: "#F59E0B" }} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#0a1520", borderTop: "1px solid #1E3A5F", borderBottom: "1px solid #1E3A5F" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            {STATS.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "block", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.5rem" }}>What We Do</span>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F1F5F9", marginBottom: "1rem" }}>
              Equipment Sales, Service & <span style={{ color: "#F59E0B" }}>Parts</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Serving contractors, landscapers, pest control operators, painters, and industrial businesses throughout Sarasota and Manatee County.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map(svc => (
              <Link key={svc.href} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.625rem", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#F59E0B"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.4)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1E3A5F"; el.style.transform = "none"; el.style.boxShadow = "none"; }}>
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "none")} />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span style={{ color: "#F59E0B" }}>{svc.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F1F5F9", margin: 0 }}>{svc.title}</h3>
                        <p style={{ color: "#F59E0B", fontSize: "0.75rem", fontFamily: "Oswald, sans-serif", fontWeight: 500, letterSpacing: "0.05em", margin: 0 }}>{svc.sub}</p>
                      </div>
                    </div>
                    <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{svc.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "1rem", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Learn More <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* More services row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { label: "Surface Cleaners", href: "/surface-cleaners", desc: "Whirlaway, WhisperWash, Hammerhead, Rotoeze" },
              { label: "Hose Reels", href: "/hose-reels", desc: "Summit & Titan — manual and electric" },
              { label: "Pest Control Sprayers", href: "/pest-control-sprayers", desc: "Service all makes, custom builds, lawn spraying" },
              { label: "Deco Products", href: "/deco-products", desc: "Paver sealers, travertine, waterproofing products" },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.25rem", transition: "border-color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "#F59E0B")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "#1E3A5F")}>
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#F1F5F9", marginBottom: "0.35rem" }}>{s.label}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.8rem", margin: 0 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MHSS ── */}
      <section style={{ backgroundColor: "#0a1520", paddingTop: "5rem", paddingBottom: "5rem", borderTop: "1px solid #1E3A5F", borderBottom: "1px solid #1E3A5F" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.5rem" }}>Why Choose MHSS</span>
              <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F1F5F9", marginBottom: "1.25rem", lineHeight: 1.15 }}>
                Sarasota's Trusted <span style={{ color: "#F59E0B" }}>Industrial Equipment</span> Facility
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Since 1990, MHSS has been the go-to source for contractors, landscapers, pest control operators, and industrial businesses throughout Sarasota and Manatee County. We don't just sell equipment — we service it, repair it, and keep you running.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Authorized warranty service center for major brands",
                  "Hydraulic hose cut and crimped while you wait",
                  "Full parts inventory — most repairs done same day",
                  "Factory-trained technicians with 35+ years experience",
                  "Serving all of Sarasota and Manatee County",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#94A3B8", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} style={{ color: "#F59E0B", flexShrink: 0, marginTop: "0.15rem" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                  Our Story <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Equipment Brands", value: "20+" },
                { label: "Years Experience", value: "35+" },
                { label: "Service Categories", value: "8" },
                { label: "Sarasota & Manatee", value: "2 Counties" },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.5rem", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "2rem", color: "#F59E0B" }}>{s.value}</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B" }}>Authorized Dealer & Service Center</span>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", marginTop: "0.5rem" }}>Brands We Carry & Service</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {BRANDS.map(b => (
              <span key={b} style={{ backgroundColor: "#0d1b2a", border: "1px solid #1E3A5F", color: "#94A3B8", fontFamily: "Oswald, sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "0.5rem 1rem", borderRadius: "0.375rem" }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: "#0a1520", paddingTop: "5rem", paddingBottom: "5rem", borderTop: "1px solid #1E3A5F" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", display: "block", marginBottom: "0.5rem" }}>Customer Reviews</span>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#F1F5F9" }}>What Our Customers Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Mike T.", role: "Pressure Washing Contractor", text: "MHSS has been my go-to for pump repairs and parts for over 10 years. They always have what I need in stock and the turnaround is fast. Best shop in Sarasota." },
              { name: "Carlos R.", role: "Landscaping Company Owner", text: "Brought in a broken hydraulic line on my dump trailer and they had it fixed in under an hour. Incredible service. I won't go anywhere else for hose work." },
              { name: "Jennifer L.", role: "Pest Control Operator", text: "They serviced my entire fleet of spray rigs and even built a custom unit for a new application. Knowledgeable staff and fair pricing. Highly recommend." },
              { name: "Dave S.", role: "Painting Contractor", text: "My Graco sprayer went down on a job and they got it back to me same day. They're an authorized service center and it shows — they know these machines inside and out." },
            ].map(r => (
              <div key={r.name} style={{ backgroundColor: "#0F1923", border: "1px solid #1E3A5F", borderRadius: "0.625rem", padding: "1.5rem", borderLeftWidth: "3px", borderLeftStyle: "solid", borderLeftColor: "#F59E0B" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>"{r.text}"</p>
                <div>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#F1F5F9" }}>{r.name}</div>
                  <div style={{ color: "#64748B", fontSize: "0.78rem" }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: "#F59E0B", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0a0f14", marginBottom: "0.75rem" }}>
            Ready to Get Your Equipment Running?
          </h2>
          <p style={{ color: "rgba(10,15,20,0.75)", fontSize: "1rem", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Visit us at 552 Cattaraugus Way, Sarasota — or call to discuss your equipment needs.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ backgroundColor: "#0a0f14", color: "#F59E0B", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} /> (941) 377-4673
            </a>
            <Link href="/contact" style={{ backgroundColor: "transparent", border: "2px solid #0a0f14", color: "#0a0f14", fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.75rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

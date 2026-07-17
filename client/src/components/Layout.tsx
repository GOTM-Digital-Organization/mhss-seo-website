import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, MapPin, Clock } from "lucide-react";

const LOGO_URL = "/manus-storage/mhss-logo-transparent_e4c54822.png";
const OG_IMG = "/manus-storage/mhss-og-breadtruck_ebafbd14.png";

const NAV_ITEMS = [
  { label: "Products", children: [
    { label: "All Products", href: "/products" },
    { label: "Cleaners & Chemicals", href: "/products?cat=Cleaners+%26+Chemicals" },
    { label: "Deco Sealers", href: "/products?cat=Deco+Sealers" },
    { label: "Lubricants & Oils", href: "/products?cat=Lubricants+%26+Oils" },
    { label: "Fittings & Valves", href: "/products?cat=Fittings+%26+Valves" },
    { label: "Hose & Reels", href: "/products?cat=Hose+%26+Reels" },
    { label: "Pressure Washer Parts", href: "/products?cat=Pressure+Washer+Parts" },
    { label: "Engines", href: "/products?cat=Engines" },
    { label: "Filters & Strainers", href: "/products?cat=Filters+%26+Strainers" },
  ]},
  { label: "Services", children: [
    { label: "Hydraulic Hose Fabrication & Repair", href: "/hydraulic-hose" },
    { label: "Pressure Washer Repair", href: "/pressure-washer-repair" },
    { label: "Airless Sprayer Service & Repair", href: "/airless-sprayers" },
    { label: "Pressure Washing Rig Builds", href: "/pressure-washing-rigs" },
    { label: "Ag & Pest Control Spray Systems", href: "/pest-control-sprayers" },
    { label: "Certified Warranty Repair", href: "/pressure-washer-repair#warranty" },
  ]},
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function Layout({ children, title, description, canonical, ogImage }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location]);

  useEffect(() => {
    if (title) document.title = title;
    const setMeta = (sel: string, content: string) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute("content", content);
    };
    if (description) { setMeta('meta[name="description"]', description); setMeta('meta[property="og:description"]', description); }
    if (title) { setMeta('meta[property="og:title"]', title); }
    const img = ogImage || OG_IMG;
    setMeta('meta[property="og:image"]', img); setMeta('meta[name="twitter:image"]', img);
    if (canonical) {
      setMeta('meta[property="og:url"]', canonical);
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogImage]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F2EFE9", color: "#1C1C1C", fontFamily: "Inter, sans-serif" }}>
      {/* Top info bar */}
      <div style={{ backgroundColor: "#1C1C1C", borderBottom: "1px solid #333333", padding: "0.35rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a href="tel:9413774673" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#FFD100", fontSize: "0.82rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>
              <Phone size={12} /> (941) 377-4673
            </a>
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#9CA3AF", fontSize: "0.78rem" }}>
                <MapPin size={11} /> 552 Catarzi Way, Sarasota, FL 34232
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#9CA3AF", fontSize: "0.78rem" }}>
                <Clock size={11} /> Mon–Fri 8am–5pm
              </span>
          </div>
          <span style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>Serving Sarasota &amp; Manatee County Since 1990</span>
        </div>
      </div>

      {/* Sticky nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: scrolled ? "#1C1C1C" : "rgba(28,28,28,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #333333", transition: "background 0.3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "66px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={LOGO_URL} alt="MHSS Inc." style={{ height: "50px", width: "auto" }} />
          </Link>

          {/* Desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.125rem" }} className="nav-desktop">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  <button style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem 0.875rem", color: openDropdown === item.label ? "#FFD100" : "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s" }}>
                    {item.label} <ChevronDown size={13} style={{ transition: "transform 0.2s", transform: openDropdown === item.label ? "rotate(180deg)" : "none" }} />
                  </button>
                  {openDropdown === item.label && (
                    <div style={{ position: "absolute", top: "100%", left: 0, minWidth: "230px", backgroundColor: "#FFFFFF", border: "1px solid #333333", borderRadius: "0.5rem", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", padding: "0.5rem 0", zIndex: 100 }}>
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} style={{ display: "block", padding: "0.6rem 1.25rem", color: "#1C1C1C", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s, background 0.15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#CC2020"; (e.currentTarget as HTMLElement).style.backgroundColor = "#FFF9E0"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1C1C1C"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href!} style={{ padding: "0.5rem 0.875rem", color: location === item.href ? "#FFD100" : "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FFD100")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = location === item.href ? "#FFD100" : "#FFFFFF")}>
                  {item.label}
                </Link>
              )
            )}
            <a href="tel:9413774673" style={{ marginLeft: "0.75rem", backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.6rem 1.25rem", borderRadius: "0.375rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "background 0.15s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E6C200")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FFD100")}>
              <Phone size={13} /> Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#FFFFFF", background: "none", border: "none", padding: "0.5rem" }} className="nav-mobile-btn" aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: "#1C1C1C", borderTop: "1px solid #333333", padding: "1rem 0" }}>
            <div className="container">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.65rem 0", color: "#FFD100", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}>
                      {item.label} <ChevronDown size={14} style={{ transform: mobileExpanded === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    {mobileExpanded === item.label && item.children.map((child) => (
                      <Link key={child.label} href={child.href} style={{ display: "block", padding: "0.5rem 1rem", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", textDecoration: "none" }}>{child.label}</Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href!} style={{ display: "block", padding: "0.65rem 0", color: "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 500, fontSize: "0.95rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>{item.label}</Link>
                )
              )}
              <a href="tel:9413774673" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem", backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.25rem", borderRadius: "0.375rem", textDecoration: "none" }}>
                <Phone size={15} /> (941) 377-4673
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1C1C1C", borderTop: "1px solid #333333", paddingTop: "3.5rem", paddingBottom: "2rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
            <div>
              <img src={LOGO_URL} alt="MHSS Inc." style={{ height: "54px", width: "auto", marginBottom: "1rem" }} />
              <p style={{ color: "#9CA3AF", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem" }}>Sarasota's industrial equipment specialists since 1990. Pressure washers, hydraulic hose, airless sprayers, pumps, parts &amp; more.</p>
              <a href="tel:9413774673" style={{ color: "#FFD100", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}><Phone size={14} /> (941) 377-4673</a>
              <p style={{ color: "#9CA3AF", fontSize: "0.8rem", marginTop: "0.4rem" }}>552 Catarzi Way, Sarasota, FL 34232</p>
              <p style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>Mon–Fri 8:00am–5:00pm</p>
            </div>
            <div>
              <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFD100", marginBottom: "1rem" }}>Products</h4>
              {[{ label: "All Products", href: "/products" }, { label: "Cleaners & Chemicals", href: "/products" }, { label: "Deco Sealers", href: "/products" }, { label: "Fittings & Valves", href: "/products" }, { label: "Hose & Reels", href: "/products" }, { label: "Engines", href: "/products" }].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "block", color: "#9CA3AF", fontSize: "0.85rem", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FFD100")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}>{l.label}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFD100", marginBottom: "1rem" }}>Services</h4>
              {[{ label: "Hydraulic Hose Fabrication & Repair", href: "/hydraulic-hose" }, { label: "Pressure Washer Repair", href: "/pressure-washer-repair" }, { label: "Airless Sprayer Service & Repair", href: "/airless-sprayers" }, { label: "Pressure Washing Rig Builds", href: "/pressure-washing-rigs" }, { label: "Ag & Pest Control Spray Systems", href: "/pest-control-sprayers" }, { label: "Certified Warranty Repair", href: "/pressure-washer-repair" }].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "block", color: "#9CA3AF", fontSize: "0.85rem", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FFD100")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}>{l.label}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFD100", marginBottom: "1rem" }}>Brands We Carry</h4>
              {["Honda", "BE Power Equipment", "Mi-T-M", "Pressure Pro", "General Pump", "Cat Pumps", "AR Pumps", "Comet Pumps", "UDOR", "Titan Hose Reels", "Summit Hose Reels", "Graco", "Titan/SpeeFlo", "Tritech", "Parker", "Bridgestone", "WhisperWash", "Whirlaway", "Hammerhead", "Rotoeze"].map(b => (
                <span key={b} style={{ display: "block", color: "#9CA3AF", fontSize: "0.78rem", marginBottom: "0.3rem" }}>{b}</span>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #333333", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <p style={{ color: "#6B7280", fontSize: "0.78rem" }}>© {new Date().getFullYear()} Mobile Hose &amp; Spray Systems, Inc. All rights reserved. Serving Sarasota &amp; Manatee County, FL.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/contact" style={{ color: "#9CA3AF", fontSize: "0.78rem", textDecoration: "none" }}>Contact</Link>
              <Link href="/about" style={{ color: "#9CA3AF", fontSize: "0.78rem", textDecoration: "none" }}>About</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }
        @media (min-width: 901px) { .nav-desktop { display: flex !important; } .nav-mobile-btn { display: none !important; } }
      `}</style>
    </div>
  );
}

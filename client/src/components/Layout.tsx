/* =============================================================================
   MHSS Layout — Medium Grey + Amber + Red
   BG: #404040  |  Surface: #4A4A4A  |  Raised: #525252
   Amber: #F5A623  |  Red: #E03030  |  Text: #F5F5F5  |  Muted: #C0C0C0
   ============================================================================= */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, Truck } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const NAV_LINKS = [
  {
    label: "Services", href: "#", children: [
      { label: "Hydraulic Hose Repair",        href: "/hydraulic-hose-repair-sarasota" },
      { label: "Pressure Washer Repair & Sales", href: "/pressure-washer-repair-sarasota" },
      { label: "Pressure Washing Supply Store", href: "/pressure-washing-supply-store" },
      { label: "Custom Rig Builds",             href: "/pressure-washing-rig-builds" },
    ]
  },
  { label: "Emergency Service", href: "/emergency-mobile-hose-repair", emergency: true },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

const OG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-og-breadtruck-97hgXTcgDLPnRRQHdFuAze.png";

// ── colour constants ──────────────────────────────────────────────────────────
const C = {
  bg:      "#404040",
  surface: "#4A4A4A",
  raised:  "#525252",
  hover:   "#5A5A5A",
  border:  "rgba(255,255,255,0.12)",
  text:    "#F5F5F5",
  muted:   "#C0C0C0",
  dim:     "#909090",
  amber:   "#F5A623",
  red:     "#E03030",
  redBg:   "rgba(224,48,48,0.15)",
  redBdr:  "rgba(224,48,48,0.35)",
};

export default function Layout({ children, title, description, canonical, ogImage }: LayoutProps) {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [location]                    = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);

  useEffect(() => {
    if (title) document.title = title;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    if (description) { setMeta("description", description); setMeta("og:description", description, true); setMeta("twitter:description", description); }
    if (title)       { setMeta("og:title", title, true); setMeta("twitter:title", title); }
    const img = ogImage || OG_IMG;
    setMeta("og:image", img, true); setMeta("twitter:image", img);
    if (canonical) {
      setMeta("og:url", canonical, true);
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogImage]);

  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── STICKY NAV ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(58,58,58,0.97)" : C.surface,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: `1px solid ${C.border}`,
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-logo-modern-WJoGhvntmz3jbf5JioUutP.webp"
                alt="MHSS Inc. — Mobile Hose & Spray Systems, Inc."
                style={{ height: "52px", width: "auto", display: "block" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase", backgroundColor: "transparent" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.hover)}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {link.label} <ChevronDown size={13} />
                    </button>
                    <div
                      className="absolute top-full left-0 mt-1 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      style={{ backgroundColor: C.raised, border: `1px solid ${C.border}`, minWidth: "230px", boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: C.muted, borderBottom: `1px solid ${C.border}` }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.hover; (e.currentTarget as HTMLElement).style.color = C.text; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = C.muted; }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.emergency ? (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="flex items-center gap-1.5 px-4 py-2 rounded transition-all"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: C.red, letterSpacing: "0.06em", textTransform: "uppercase", border: `1px solid ${C.redBdr}`, backgroundColor: C.redBg }}
                  >
                    <Truck size={13} /> {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="px-4 py-2 rounded transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.hover; (e.currentTarget as HTMLElement).style.color = C.text; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = C.muted; }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+19413774673"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded font-bold transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: C.amber, color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                <Phone size={14} /> 941-377-4673
              </a>
              <button
                className="lg:hidden p-2 rounded transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ color: C.muted, backgroundColor: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.hover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: C.raised, borderTop: `1px solid ${C.border}` }}>
            <div className="container py-4 space-y-1">
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 rounded"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text, letterSpacing: "0.06em", textTransform: "uppercase", backgroundColor: "transparent" }}
                >
                  Services <ChevronDown size={16} style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {NAV_LINKS[0].children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 rounded"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.muted, backgroundColor: "transparent" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/emergency-mobile-hose-repair" className="flex items-center gap-2 px-4 py-3 rounded" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.red, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <Truck size={16} /> Emergency Service
              </Link>
              <Link href="/about"   className="block px-4 py-3 rounded" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text, letterSpacing: "0.06em", textTransform: "uppercase" }}>About</Link>
              <Link href="/contact" className="block px-4 py-3 rounded" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text, letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</Link>
              <div className="pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
                <a
                  href="tel:+19413774673"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold"
                  style={{ backgroundColor: C.amber, color: "#1A1A1A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  <Phone size={16} /> Call 941-377-4673
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── PAGE CONTENT ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#363636", borderTop: `1px solid ${C.border}` }}>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <div className="mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-logo-dark-LCTv5KtFyiBJyuuzAyUuCC.webp"
                  alt="MHSS Inc. — Mobile Hose & Spray Systems, Inc."
                  style={{ height: "56px", width: "auto", display: "block" }}
                />
              </div>
              <p style={{ color: C.muted, fontSize: "0.82rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                Sarasota's trusted hydraulic hose repair, pressure washer sales &amp; service, and emergency mobile repair since 1990. Family-owned.
              </p>
              <a href="tel:+19413774673" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.amber, display: "block", marginTop: "0.75rem" }}>
                941-377-4673
              </a>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.amber, marginBottom: "1rem" }}>Services</div>
              <ul className="space-y-2">
                {[
                  { label: "Hydraulic Hose Repair",        href: "/hydraulic-hose-repair-sarasota" },
                  { label: "Pressure Washer Repair",       href: "/pressure-washer-repair-sarasota" },
                  { label: "Pressure Washing Supply",      href: "/pressure-washing-supply-store" },
                  { label: "Custom Rig Builds",            href: "/pressure-washing-rig-builds" },
                  { label: "Emergency Mobile Service",     href: "/emergency-mobile-hose-repair" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: C.muted, fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.amber)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = C.muted)}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.amber, marginBottom: "1rem" }}>Locations</div>
              <div className="space-y-4">
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: C.text, fontSize: "0.85rem" }}>Sarasota</div>
                  <p style={{ color: C.muted, fontSize: "0.8rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>552 Catarzi Way<br />Sarasota, FL 34232</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: C.text, fontSize: "0.85rem" }}>Bradenton</div>
                  <p style={{ color: C.muted, fontSize: "0.8rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>Bradenton, FL<br />Manatee County</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.amber, marginBottom: "1rem" }}>Hours</div>
              <p style={{ color: C.muted, fontSize: "0.82rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                Mon–Fri: 7:30am – 5:00pm<br />Sat–Sun: Closed
              </p>
              <div className="p-3 rounded" style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBdr}` }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: C.red, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Emergency Service</div>
                <p style={{ color: C.muted, fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>The Hose Doctor — we come to you.</p>
                <a href="tel:+19413774673" style={{ color: C.red, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>941-377-4673</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
            <p style={{ color: C.dim, fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} MHSS Inc. — Mobile Hose &amp; Spray Systems. All rights reserved. Sarasota, FL.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" key="privacy" style={{ color: C.dim, fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>Privacy Policy</Link>
              <Link href="/contact" key="sitemap" style={{ color: C.dim, fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>Sitemap</Link>
            </div>
          </div>
        </div>

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "MHSS Inc. — Mobile Hose & Spray Systems",
          "image": OG_IMG,
          "url": "https://www.mhss-inc.com",
          "telephone": "+19413774673",
          "address": { "@type": "PostalAddress", "streetAddress": "552 Catarzi Way", "addressLocality": "Sarasota", "addressRegion": "FL", "postalCode": "34232", "addressCountry": "US" },
          "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:30", "closes": "17:00" }],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "48" }
        })}} />
      </footer>
    </div>
  );
}

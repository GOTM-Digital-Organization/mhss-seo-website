/* =============================================================================
   MHSS Layout — Precision Trade Dark
   Sticky Nav | Mobile Drawer | Footer | SEO Head
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
  { label: "Services", href: "#", children: [
    { label: "Hydraulic Hose Repair", href: "/hydraulic-hose-repair-sarasota" },
    { label: "Pressure Washer Repair & Sales", href: "/pressure-washer-repair-sarasota" },
    { label: "Pressure Washing Supply Store", href: "/pressure-washing-supply-store" },
    { label: "Custom Rig Builds", href: "/pressure-washing-rig-builds" },
  ]},
  { label: "Emergency Service", href: "/emergency-mobile-hose-repair", emergency: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const OG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-og-image-BuWuBJAJABkMNEJhJFUYdB.webp";

export default function Layout({ children, title, description, canonical, ogImage }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Update document head
  useEffect(() => {
    if (title) document.title = title;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }
    if (title) {
      setMeta("og:title", title, true);
      setMeta("twitter:title", title);
    }
    const img = ogImage || OG_IMG;
    setMeta("og:image", img, true);
    setMeta("twitter:image", img);
    if (canonical) {
      setMeta("og:url", canonical, true);
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogImage]);

  return (
    <div style={{ backgroundColor: "#18181B", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ── STICKY NAV ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(24,24,27,0.97)" : "#18181B",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="flex items-center justify-center rounded"
                style={{ width: "42px", height: "42px", backgroundColor: "#F59E0B" }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#18181B", letterSpacing: "0.02em" }}>
                  MH
                </span>
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "0.04em", lineHeight: 1.1 }}>
                  MHSS INC.
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "#71717A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Mobile Hose & Spray Systems
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded transition-colors hover:bg-zinc-800"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#A1A1AA", letterSpacing: "0.06em", textTransform: "uppercase" }}
                    >
                      {link.label} <ChevronDown size={14} />
                    </button>
                    <div
                      className="absolute top-full left-0 mt-1 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      style={{ backgroundColor: "#27272A", border: "1px solid rgba(255,255,255,0.08)", minWidth: "220px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 transition-colors hover:bg-zinc-700"
                          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#A1A1AA", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
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
                    className="flex items-center gap-1 px-4 py-2 rounded transition-all hover:bg-red-700"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#DC2626", letterSpacing: "0.06em", textTransform: "uppercase", border: "1px solid rgba(220,38,38,0.3)" }}
                  >
                    <Truck size={14} /> {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="px-4 py-2 rounded transition-colors hover:bg-zinc-800"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#A1A1AA", letterSpacing: "0.06em", textTransform: "uppercase" }}
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
                style={{ backgroundColor: "#F59E0B", color: "#18181B", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                <Phone size={15} /> 941-377-4673
              </a>
              <button
                className="lg:hidden p-2 rounded transition-colors hover:bg-zinc-800"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ color: "#A1A1AA" }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: "#27272A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="container py-4 space-y-1">
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 rounded transition-colors hover:bg-zinc-700"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  Services <ChevronDown size={16} style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {NAV_LINKS[0].children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 rounded transition-colors hover:bg-zinc-700"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#A1A1AA" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/emergency-mobile-hose-repair" className="flex items-center gap-2 px-4 py-3 rounded" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#DC2626", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <Truck size={16} /> Emergency Service
              </Link>
              <Link href="/about" className="block px-4 py-3 rounded transition-colors hover:bg-zinc-700" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                About
              </Link>
              <Link href="/contact" className="block px-4 py-3 rounded transition-colors hover:bg-zinc-700" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Contact
              </Link>
              <div className="pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <a
                  href="tel:+19413774673"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold transition-all hover:scale-105"
                  style={{ backgroundColor: "#F59E0B", color: "#18181B", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  <Phone size={16} /> Call 941-377-4673
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── PAGE CONTENT ── */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#09090B", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center rounded" style={{ width: "38px", height: "38px", backgroundColor: "#F59E0B" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#18181B" }}>MH</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#FFFFFF" }}>MHSS INC.</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "#52525B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mobile Hose & Spray Systems</div>
                </div>
              </div>
              <p style={{ color: "#52525B", fontSize: "0.8rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                Sarasota's trusted hydraulic hose repair, pressure washer sales & service, and emergency mobile repair since 1990. Family-owned and operated.
              </p>
              <div className="mt-4">
                <a href="tel:+19413774673" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#F59E0B" }}>
                  941-377-4673
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Services
              </div>
              <ul className="space-y-2">
                {[
                  { label: "Hydraulic Hose Repair", href: "/hydraulic-hose-repair-sarasota" },
                  { label: "Pressure Washer Repair", href: "/pressure-washer-repair-sarasota" },
                  { label: "Pressure Washing Supply", href: "/pressure-washing-supply-store" },
                  { label: "Custom Rig Builds", href: "/pressure-washing-rig-builds" },
                  { label: "Emergency Mobile Service", href: "/emergency-mobile-hose-repair" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-yellow-400" style={{ color: "#52525B", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Locations
              </div>
              <div className="space-y-4">
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#A1A1AA", fontSize: "0.85rem" }}>Sarasota</div>
                  <p style={{ color: "#52525B", fontSize: "0.8rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                    552 Catarzi Way<br />Sarasota, FL 34232
                  </p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#A1A1AA", fontSize: "0.85rem" }}>Bradenton</div>
                  <p style={{ color: "#52525B", fontSize: "0.8rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                    Bradenton, FL<br />Manatee County
                  </p>
                </div>
              </div>
            </div>

            {/* Hours + Emergency */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Hours
              </div>
              <p style={{ color: "#52525B", fontSize: "0.8rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>
                Mon–Fri: 7:30am – 5:00pm<br />
                Sat–Sun: Closed
              </p>
              <div className="p-3 rounded" style={{ backgroundColor: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#DC2626", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  Emergency Service
                </div>
                <p style={{ color: "#71717A", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
                  The Hose Doctor — we come to you.
                </p>
                <a href="tel:+19413774673" style={{ color: "#DC2626", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                  941-377-4673
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <p style={{ color: "#3F3F46", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} MHSS Inc. — Mobile Hose &amp; Spray Systems. All rights reserved. Sarasota, FL.
            </p>
            <div className="flex gap-4">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Sitemap", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-zinc-400" style={{ color: "#3F3F46", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Schema.org LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MHSS Inc. — Mobile Hose & Spray Systems",
              "image": OG_IMG,
              "url": "https://www.mhss-inc.com",
              "telephone": "+19413774673",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "552 Catarzi Way",
                "addressLocality": "Sarasota",
                "addressRegion": "FL",
                "postalCode": "34232",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.3364,
                "longitude": -82.4774
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "07:30",
                  "closes": "17:00"
                }
              ],
              "description": "Mobile Hose & Spray Systems — Sarasota's trusted hydraulic hose repair, pressure washer sales & service, Honda pressure washers, Titan hose reels, custom rig builds, and emergency mobile repair since 1990.",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "48"
              },
              "sameAs": [
                "https://www.mhss-inc.com"
              ]
            })
          }}
        />
      </footer>
    </div>
  );
}

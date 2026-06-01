/* =============================================================================
   MHSS Home Page — Precision Trade Dark
   Hero | Trust Signals | Services | Brands | Emergency CTA | Testimonials | Map
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone, MapPin, Star, ChevronRight, Wrench, Zap, Truck, Settings,
  Package, ArrowRight, Shield, Clock, Award
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-hero-FUu5TVKLCe2R2eFu96xyHE.webp";
const EMERGENCY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-emergency-truck-4JFDGxCTvwiZJEva7tmW7J.webp";
const RIG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-pressure-wash-rig-hUMDh8jp3YwkZzcRFL6ywp.webp";
const SUPPLY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/f5LotiXXfaNaenzonCtfkX/mhss-parts-supply-77WHPyM4LQGtKLHAgFW8bo.webp";

const SERVICES = [
  {
    icon: <Wrench size={28} />,
    title: "Hydraulic Hose Repair",
    desc: "Same-day custom hydraulic hose assemblies, crimping, and fittings for industrial, agricultural, and commercial equipment. All sizes and pressure ratings.",
    href: "/hydraulic-hose-repair-sarasota",
    label: "Hose Repair",
  },
  {
    icon: <Zap size={28} />,
    title: "Pressure Washer Repair & Sales",
    desc: "Factory-trained service on Honda, AR, and other commercial pressure washers. Pumps, unloaders, burners, and full machine rebuilds.",
    href: "/pressure-washer-repair-sarasota",
    label: "PW Repair",
  },
  {
    icon: <Package size={28} />,
    title: "Pressure Washing Supply Store",
    desc: "In-stock Honda pressure washers, Titan hose reels, spray nozzles, quick couplers, surface cleaners, hoses, fittings, and all the parts you need.",
    href: "/pressure-washing-supply-store",
    label: "Supply Store",
  },
  {
    icon: <Settings size={28} />,
    title: "Custom Rig Builds",
    desc: "We design and build complete pressure washing rigs — trailer-mounted or skid systems — with Honda engines, Titan reels, poly tanks, and custom plumbing.",
    href: "/pressure-washing-rig-builds",
    label: "Rig Builds",
  },
  {
    icon: <Truck size={28} />,
    title: "Emergency Mobile Service",
    desc: '"The Hose Doctor" emergency unit comes to you. Hydraulic hose failures, pressure washer breakdowns — we repair on-site to get you back to work fast.',
    href: "/emergency-mobile-hose-repair",
    label: "Emergency",
    emergency: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Andrew B.",
    rating: 5,
    text: "Great guys, very professional, reasonable prices. Unlike some of the other power washing equipment companies in town who are borderline scam artists.",
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Been coming here for years for all my hydraulic hose needs. They always have what I need in stock and can make custom assemblies while I wait. Best in Sarasota.",
  },
  {
    name: "Carlos R.",
    rating: 5,
    text: "Had a hydraulic hose blow on my excavator at 7am. Called MHSS and The Hose Doctor was on site within the hour with a new assembly. Saved our whole day.",
  },
];

function AnimatedStat({ end, label }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start = Math.min(start + step, end);
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref}>{count}</div>;
}

export default function Home() {
  return (
    <Layout
      title="MHSS Inc. | Hydraulic Hose Repair & Pressure Washer Sales Sarasota FL"
      description="Mobile Hose & Spray Systems — Sarasota's trusted hydraulic hose repair, pressure washer sales & service, and emergency mobile hose repair since 1990. Honda pressure washers, Titan hose reels, custom rig builds. Call 941-377-4673."
      canonical="https://www.mhss-inc.com/"
    >
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#404040" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            opacity: 0.70,
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(58,58,58,0.78) 40%, rgba(58,58,58,0.25) 100%)",
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#F5A623",
                }}
              >
                Sarasota, FL · Est. 1990
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: 1.0,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              SARASOTA'S HOSE{" "}
              <span style={{ color: "#F5A623" }}>REPAIR</span> &amp;{" "}
              <br className="hidden sm:block" />
              PRESSURE WASHING{" "}
              <span style={{ color: "#F5A623" }}>EXPERTS</span>
            </h1>

            <p
              className="mb-8 max-w-xl"
              style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}
            >
              Family-owned since 1990. Hydraulic hose repair, pressure washer sales &amp; service, Honda engines, Titan hose reels, custom rig builds, and emergency mobile repair — all under one roof.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:+19413774673"
                className="flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#404040",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Phone size={18} />
                Call 941-377-4673
              </a>
              <Link
                href="/emergency-mobile-hose-repair"
                className="flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95 emergency-pulse"
                style={{
                  backgroundColor: "#E03030",
                  color: "#FFFFFF",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Truck size={18} />
                Emergency Service
              </Link>
              <Link
                href="/hydraulic-hose-repair-sarasota"
                className="flex items-center gap-2 px-7 py-4 rounded font-bold text-lg transition-all hover:bg-zinc-700"
                style={{
                  border: "2px solid rgba(255,255,255,0.15)",
                  color: "#E4E4E7",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Our Services
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <Star size={14} fill="#F5A623" color="#F5A623" />, text: "4.8★ Google Rating (48 Reviews)" },
                { icon: <Award size={14} color="#F5A623" />, text: "35+ Years in Business" },
                { icon: <MapPin size={14} color="#F5A623" />, text: "2 Locations: Sarasota & Bradenton" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  {badge.icon}
                  <span style={{ color: "#C0C0C0", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "80px",
            background: "linear-gradient(to bottom right, transparent 49%, #404040 50%)",
          }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#4A4A4A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 35, suffix: "+", label: "Years in Business" },
              { end: 2, suffix: "", label: "Shop Locations" },
              { end: 48, suffix: "+", label: "Google Reviews" },
              { end: 1, suffix: "", label: "Emergency Mobile Unit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "3rem",
                    color: "#F5A623",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedStat end={stat.end} label={stat.label} />
                  <span>{stat.suffix}</span>
                </div>
                <div style={{ color: "#909090", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "#FFFFFF",
                lineHeight: 1.05,
              }}
            >
              COMPLETE HOSE &amp; PRESSURE WASHING
              <br />
              <span style={{ color: "#F5A623" }}>SERVICES IN SARASOTA, FL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="block p-6 rounded-lg transition-all group"
                style={{
                  backgroundColor: "#4A4A4A",
                  borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: svc.emergency ? "rgba(220,38,38,0.3)" : "rgba(255,255,255,0.06)",
                  borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: svc.emergency ? "rgba(220,38,38,0.3)" : "rgba(255,255,255,0.06)",
                  borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: svc.emergency ? "rgba(220,38,38,0.3)" : "rgba(255,255,255,0.06)",
                  borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: svc.emergency ? "#E03030" : "#F5A623",
                }}
              >
                <div
                  className="mb-4 w-12 h-12 rounded flex items-center justify-center"
                  style={{ backgroundColor: svc.emergency ? "rgba(220,38,38,0.15)" : "rgba(245,158,11,0.12)", color: svc.emergency ? "#E03030" : "#F5A623" }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#FFFFFF",
                    letterSpacing: "0.02em",
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                  {svc.desc}
                </p>
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: svc.emergency ? "#E03030" : "#F5A623", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA BANNER ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "#E03030" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${EMERGENCY_IMG})` }}
        />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-white emergency-pulse" />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
                  Emergency Mobile Service
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                }}
              >
                HYDRAULIC HOSE FAILURE?
                <br />
                WE COME TO YOU.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}>
                "The Hose Doctor" emergency mobile unit serves Sarasota, Bradenton, and surrounding areas. On-site repair to get your equipment running fast.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="tel:+19413774673"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#E03030",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                <Phone size={20} />
                Call Now: 941-377-4673
              </a>
              <Link
                href="/emergency-mobile-hose-repair"
                className="text-center text-sm underline transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn about emergency service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ backgroundColor: "#4A4A4A" }} className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Brands We Carry & Service
            </span>
            <h2
              className="mt-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#FFFFFF",
              }}
            >
              TRUSTED BRANDS, EXPERT SERVICE
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Honda", sub: "Pressure Washers & Engines" },
              { name: "Titan", sub: "Hose Reels" },
              { name: "AR Pumps", sub: "Pressure Washer Pumps" },
              { name: "General Pump", sub: "Commercial Pumps" },
              { name: "Comet", sub: "Pump Systems" },
              { name: "Simpson", sub: "Pressure Washers" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="p-4 rounded-lg text-center"
                style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#F5A623",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {brand.name}
                </div>
                <div style={{ color: "#909090", fontSize: "0.7rem", marginTop: "0.25rem", fontFamily: "'DM Sans', sans-serif" }}>
                  {brand.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RIG BUILDS FEATURE ── */}
      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
                  Custom Builds
                </span>
              </div>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                }}
              >
                CUSTOM PRESSURE WASHING
                <br />
                <span style={{ color: "#F5A623" }}>RIG BUILDS</span>
              </h2>
              <p style={{ color: "#C0C0C0", lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                We design and build complete pressure washing rigs from the ground up — trailer-mounted systems, skid units, and truck-bed setups. Every build uses commercial-grade components: Honda GX engines, Titan hose reels, poly water tanks, stainless fittings, and custom high-pressure hose assemblies.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Honda GX Series gas engines (up to 13 HP)",
                  "Titan hose reels — manual and electric retract",
                  "High-pressure hose assemblies — all lengths",
                  "Poly water tanks — 100 to 500+ gallons",
                  "Surface cleaners, telescoping wands, nozzle sets",
                  "Custom trailer fabrication available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#F5A623", marginTop: "8px", flexShrink: 0 }} />
                    <span style={{ color: "#C0C0C0", fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pressure-washing-rig-builds"
                className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#404040",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                View Rig Builds <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={RIG_IMG}
                alt="Custom pressure washing rig with Honda engine and Titan hose reel built by MHSS Sarasota"
                className="rounded-lg w-full object-cover"
                style={{ height: "420px", border: "1px solid rgba(255,255,255,0.08)" }}
                loading="lazy"
              />
              <div
                className="absolute -bottom-4 -left-4 p-4 rounded-lg"
                style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(245,158,11,0.3)" }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#F5A623" }}>
                  HONDA + TITAN
                </div>
                <div style={{ color: "#909090", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
                  Authorized Dealer & Service Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPLY STORE FEATURE ── */}
      <section style={{ backgroundColor: "#4A4A4A" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={SUPPLY_IMG}
                alt="MHSS pressure washing supply store with Honda engines, Titan hose reels, and pressure washer parts in Sarasota FL"
                className="rounded-lg w-full object-cover"
                style={{ height: "420px", border: "1px solid rgba(255,255,255,0.08)" }}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
                  Supply Store
                </span>
              </div>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                }}
              >
                EVERYTHING YOU NEED
                <br />
                <span style={{ color: "#F5A623" }}>IN STOCK, IN SARASOTA</span>
              </h2>
              <p style={{ color: "#C0C0C0", lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                Our Sarasota shop stocks the parts, hoses, and equipment that pressure washing contractors and industrial customers need — available same day, no waiting on shipping.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Honda Pressure Washers",
                  "Titan Hose Reels",
                  "High-Pressure Hose",
                  "Hydraulic Hose & Fittings",
                  "Spray Nozzles & Tips",
                  "Quick Couplers",
                  "Surface Cleaners",
                  "Pump Repair Parts",
                  "Air Hose Assemblies",
                  "Discharge / Suction Hose",
                  "Telescoping Wands",
                  "Poly Tanks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#F5A623", flexShrink: 0 }} />
                    <span style={{ color: "#C0C0C0", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/pressure-washing-supply-store"
                className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#404040",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Browse Supply Store <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
                What Customers Say
              </span>
              <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#FFFFFF",
              }}
            >
              4.8 STARS ON GOOGLE — 48 REVIEWS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#4A4A4A",
                  borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)",
                  borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)",
                  borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)",
                  borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F5A623" color="#F5A623" />
                  ))}
                </div>
                <p style={{ color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontStyle: "italic", marginBottom: "1rem" }}>
                  "{t.text}"
                </p>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#E4E4E7", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Mobile+Hose+Spray+Systems+Sarasota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold transition-all hover:scale-105"
              style={{
                border: "2px solid #F5A623",
                color: "#F5A623",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Star size={16} fill="#F5A623" />
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY MHSS ── */}
      <section style={{ backgroundColor: "#4A4A4A" }} className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#FFFFFF",
              }}
            >
              WHY SARASOTA CHOOSES <span style={{ color: "#F5A623" }}>MHSS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award size={28} />,
                title: "35+ Years Experience",
                desc: "Family-owned since 1990. We started from a bread truck and grew into Sarasota's most trusted hose and spray systems shop.",
              },
              {
                icon: <Truck size={28} />,
                title: "Emergency Mobile Unit",
                desc: '"The Hose Doctor" comes to your job site. Hydraulic hose failures don\'t wait — neither do we. On-site repair across Sarasota and Bradenton.',
              },
              {
                icon: <Shield size={28} />,
                title: "Commercial Grade Only",
                desc: "We only sell and install commercial and industrial grade products. No consumer-grade shortcuts — your equipment deserves better.",
              },
              {
                icon: <Clock size={28} />,
                title: "Same-Day Assemblies",
                desc: "Need a custom hydraulic hose assembly? We crimp and test same-day in our Sarasota shop. Walk in with a broken hose, leave with a new one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="mb-4 w-12 h-12 rounded flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245,158,11,0.12)", color: "#F5A623" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#FFFFFF",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#909090", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS MAP CTA ── */}
      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
                  Find Us
                </span>
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                }}
              >
                TWO LOCATIONS SERVING
                <br />
                <span style={{ color: "#F5A623" }}>SARASOTA &amp; BRADENTON</span>
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  {
                    city: "Sarasota",
                    address: "552 Catarzi Way, Sarasota, FL 34232",
                    phone: "941-377-4673",
                    hours: "Mon–Fri: 7:30am – 5:00pm",
                    maps: "https://maps.google.com/?q=552+Catarzi+Way+Sarasota+FL+34232",
                  },
                  {
                    city: "Bradenton",
                    address: "Bradenton, FL — Serving Manatee County",
                    phone: "941-377-4673",
                    hours: "Mon–Fri: 7:30am – 5:00pm",
                    maps: "https://maps.google.com/?q=Bradenton+FL",
                  },
                ].map((loc) => (
                  <div
                    key={loc.city}
                    className="p-5 rounded-lg"
                    style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}
                  >
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#F5A623",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {loc.city} Location
                    </div>
                    <p style={{ color: "#C0C0C0", fontSize: "0.875rem", marginBottom: "0.25rem", fontFamily: "'DM Sans', sans-serif" }}>{loc.address}</p>
                    <p style={{ color: "#C0C0C0", fontSize: "0.875rem", marginBottom: "0.25rem", fontFamily: "'DM Sans', sans-serif" }}>{loc.hours}</p>
                    <a href={`tel:+1${loc.phone.replace(/-/g, "")}`} style={{ color: "#F5A623", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>{loc.phone}</a>
                    <div className="mt-3">
                      <a
                        href={loc.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:text-yellow-300"
                        style={{ color: "#F5A623", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        <MapPin size={12} /> Get Directions
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#404040",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden" style={{ height: "420px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.3!2d-82.4774!3d27.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzExLjAiTiA4MsKwMjgnMzguNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MHSS Sarasota Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #4A4A4A 0%, #404040 100%)",
          borderTop: "1px solid rgba(245,158,11,0.2)",
        }}
      >
        <div className="container text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#FFFFFF",
            }}
          >
            READY TO GET STARTED?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif" }}>
            Call us, stop by our Sarasota shop, or request a free quote online. We're here Mon–Fri 7:30am–5:00pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+19413774673"
              className="flex items-center gap-2 px-8 py-4 rounded font-bold text-lg transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#F5A623",
                color: "#404040",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Phone size={18} />
              Call 941-377-4673
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded font-bold text-lg transition-all hover:bg-zinc-700"
              style={{
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#E4E4E7",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

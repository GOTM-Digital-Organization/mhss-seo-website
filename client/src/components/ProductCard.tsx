/**
 * ProductCard — reusable product listing card for all MHSS catalog pages
 * Design: MHSS dark industrial theme — white card, yellow accents, dark text
 *
 * Usage:
 *   <ProductCard
 *     brand="General Pump"
 *     model="TS2021"
 *     name="Triplex Plunger Pump"
 *     specs={["2000 PSI / 2.1 GPM", "3/4\" shaft", "Belt drive compatible"]}
 *     price="Call for Pricing"          // or "$349.00" or "Starting at $299"
 *     badge="In Stock"                  // optional: "In Stock" | "Special Order" | "Sale" | etc.
 *     imageUrl="/manus-storage/..."     // optional: leave undefined for placeholder
 *     onQuote={() => openModal()}       // opens QuoteModal with this product pre-filled
 *   />
 */

import { Phone, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  brand?: string;
  model?: string;
  name: string;
  specs?: string[];
  price?: string;
  priceNote?: string;       // e.g. "plus installation" or "per foot"
  badge?: string;
  badgeColor?: "yellow" | "green" | "red" | "blue";
  imageUrl?: string;
  imageAlt?: string;
  onQuote?: () => void;
}

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  yellow: { bg: "rgba(255,209,0,0.15)", color: "#FFD100" },
  green:  { bg: "rgba(34,197,94,0.15)",  color: "#4ADE80" },
  red:    { bg: "rgba(239,68,68,0.15)",  color: "#F87171" },
  blue:   { bg: "rgba(59,130,246,0.15)", color: "#60A5FA" },
};

export default function ProductCard({
  brand,
  model,
  name,
  specs = [],
  price = "Call for Pricing",
  priceNote,
  badge,
  badgeColor = "yellow",
  imageUrl,
  imageAlt,
  onQuote,
}: ProductCardProps) {
  const badgeStyle = BADGE_COLORS[badgeColor] ?? BADGE_COLORS.yellow;

  return (
    <div style={{
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E0D8",
      borderRadius: "0.625rem",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Product Image / Placeholder */}
      <div style={{ position: "relative", backgroundColor: "#F0EEEA", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #E5E0D8", overflow: "hidden" }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt ?? `${brand ?? ""} ${model ?? ""} ${name}`.trim()}
            style={{ width: "100%", height: "100%", objectFit: "contain", padding: "0.75rem" }}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C4BFB8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ color: "#C4BFB8", fontSize: "0.65rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Photo Coming Soon
            </span>
          </div>
        )}
        {badge && (
          <span style={{
            position: "absolute", top: "0.625rem", right: "0.625rem",
            backgroundColor: badgeStyle.bg,
            color: badgeStyle.color,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.2rem 0.6rem",
            borderRadius: "9999px",
            border: `1px solid ${badgeStyle.color}40`,
          }}>
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {brand && (
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFD100" }}>
            {brand}
          </span>
        )}
        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1C1C1C", lineHeight: 1.2 }}>
            {name}
          </div>
          {model && (
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#6B7280", marginTop: "0.15rem" }}>
              Model: {model}
            </div>
          )}
        </div>

        {specs.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0, margin: "0.25rem 0 0", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {specs.map((s, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", color: "#3D3D3D", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                <span style={{ color: "#FFD100", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.6rem" }}>▶</span>
                {s}
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Price */}
        <div style={{ borderTop: "1px solid #F0EEEA", paddingTop: "0.75rem", marginTop: "0.25rem" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#1C1C1C" }}>
            {price}
          </div>
          {priceNote && (
            <div style={{ color: "#9CA3AF", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", marginTop: "0.1rem" }}>
              {priceNote}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
          <a
            href="tel:9413774673"
            style={{
              flex: 1,
              backgroundColor: "#FFD100",
              color: "#1C1C1C",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.6rem 0.5rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E6C200")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FFD100")}
          >
            <Phone size={12} /> Call
          </a>
          {onQuote && (
            <button
              onClick={onQuote}
              style={{
                flex: 2,
                backgroundColor: "#1C1C1C",
                color: "#FFFFFF",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.6rem 0.5rem",
                borderRadius: "0.375rem",
                border: "1px solid #444",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
                transition: "background-color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#2A2A2A";
                (e.currentTarget as HTMLElement).style.borderColor = "#FFD100";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#1C1C1C";
                (e.currentTarget as HTMLElement).style.borderColor = "#444";
              }}
            >
              <ShoppingCart size={12} /> Request Quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

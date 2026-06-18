/**
 * QuoteModal — shared quote request modal for all product pages
 * Design: MHSS dark industrial theme — charcoal, yellow (#FFD100), white
 *
 * TO CONFIGURE EMAIL: Replace QUOTE_EMAIL_ENDPOINT below with the
 * actual Formspree endpoint once the client's email is confirmed.
 * e.g. "https://formspree.io/f/YOUR_FORM_ID"
 */

import { useState, useEffect } from "react";
import { X, Phone, Send, CheckCircle2 } from "lucide-react";

// ─── SWAP THIS when client email is confirmed ───────────────────────────────
const QUOTE_EMAIL_ENDPOINT = "PLACEHOLDER_FORMSPREE_ENDPOINT";
// ────────────────────────────────────────────────────────────────────────────

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productModel?: string;
}

export default function QuoteModal({ isOpen, onClose, productName, productModel }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: productName ? `${productName}${productModel ? ` — ${productModel}` : ""}` : "",
    quantity: "",
    message: "",
  });

  // Update product field when modal opens with a new product
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setForm(f => ({
        ...f,
        product: productName ? `${productName}${productModel ? ` — ${productModel}` : ""}` : f.product,
      }));
    }
  }, [isOpen, productName, productModel]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Google Ads conversion tracking hook
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", { send_to: "AW-CONVERSION_ID/CONVERSION_LABEL" });
      }

      if (QUOTE_EMAIL_ENDPOINT === "PLACEHOLDER_FORMSPREE_ENDPOINT") {
        // Dev mode: simulate success
        await new Promise(r => setTimeout(r, 800));
        setSubmitted(true);
      } else {
        const res = await fetch(QUOTE_EMAIL_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            product: form.product,
            quantity: form.quantity,
            message: form.message,
            _subject: `MHSS Quote Request — ${form.product || "General Inquiry"} from ${form.name}`,
          }),
        });
        if (res.ok) {
          setSubmitted(true);
        } else {
          alert("There was a problem sending your request. Please call us at (941) 377-4673.");
        }
      }
    } catch {
      alert("There was a problem sending your request. Please call us at (941) 377-4673.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(4px)",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        backgroundColor: "#1C1C1C",
        border: "1px solid #333",
        borderRadius: "0.75rem",
        width: "100%",
        maxWidth: "520px",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
        animation: "modalIn 0.2s cubic-bezier(0.23,1,0.32,1)",
      }}>
        <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.95) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>

        {/* Header */}
        <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#FFFFFF", lineHeight: 1.1 }}>
              Request a <span style={{ color: "#FFD100" }}>Quote</span>
            </div>
            {form.product && (
              <div style={{ color: "#9CA3AF", fontSize: "0.8rem", marginTop: "0.3rem", fontFamily: "'Inter', sans-serif" }}>
                {form.product}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "0.25rem", borderRadius: "0.25rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={20} />
          </button>
        </div>

        {/* Call CTA strip */}
        <div style={{ backgroundColor: "rgba(255,209,0,0.08)", borderBottom: "1px solid #333", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Phone size={14} style={{ color: "#FFD100", flexShrink: 0 }} />
          <span style={{ color: "#D0D0D0", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>
            Prefer to talk? Call us directly:
          </span>
          <a href="tel:9413774673" style={{ color: "#FFD100", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.04em" }}>
            (941) 377-4673
          </a>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <CheckCircle2 size={48} style={{ color: "#FFD100", margin: "0 auto 1rem" }} />
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                Quote Request Sent!
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                We'll get back to you shortly. For urgent needs, call us at <a href="tel:9413774673" style={{ color: "#FFD100", textDecoration: "none" }}>(941) 377-4673</a>.
              </p>
              <button onClick={onClose} style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.7rem 1.5rem", borderRadius: "0.375rem", border: "none", cursor: "pointer" }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Smith" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="(941) 555-0000" type="tel" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" type="email" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Product / Item *</label>
                <input required value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))} placeholder="e.g. General Pump TS2021, Honda GX390 Pressure Washer..." style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Quantity / Quantity Needed</label>
                <input value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} placeholder="e.g. 1 unit, 50 ft of hose, 2 pump kits..." style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Additional Details</label>
                <textarea rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Any specific requirements, model numbers, or questions..." style={{ ...inputStyle, resize: "vertical" } as React.CSSProperties} />
              </div>
              <button type="submit" disabled={submitting} style={{
                backgroundColor: submitting ? "#E6C200" : "#FFD100",
                color: "#1C1C1C",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.875rem 1.5rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                opacity: submitting ? 0.8 : 1,
                transition: "all 0.15s",
              }}>
                <Send size={15} /> {submitting ? "Sending..." : "Send Quote Request"}
              </button>
              <p style={{ color: "#6B7280", fontSize: "0.72rem", textAlign: "center", fontFamily: "'Inter', sans-serif", margin: 0 }}>
                Mon–Fri 8am–5pm · 552 Catarzi Way, Sarasota, FL 34232
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: "0.72rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#9CA3AF",
  marginBottom: "0.35rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#2A2A2A",
  border: "1px solid #444",
  borderRadius: "0.375rem",
  padding: "0.65rem 0.875rem",
  color: "#FFFFFF",
  fontSize: "0.875rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Inter', sans-serif",
};

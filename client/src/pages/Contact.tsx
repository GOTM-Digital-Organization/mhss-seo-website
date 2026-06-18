import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout
      title="Contact MHSS Inc. | Sarasota, FL — (941) 377-4673"
      description="Contact MHSS Inc. in Sarasota, FL. 552 Catarzi Way. Call (941) 377-4673. Hydraulic hose, pressure washers, airless sprayers, and more. Monday–Friday 8AM–5PM."
      canonical="https://www.mhss-inc.com/contact"
    >
      <section style={{ backgroundColor: "#F2EFE9", borderBottom: "1px solid #E5E0D8", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#2D2D2D" }}>
            <Link href="/" style={{ color: "#2D2D2D", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#FFD100" }}>Contact</span>
          </nav>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
            Contact <span style={{ color: "#FFD100" }}>MHSS Inc.</span>
          </h1>
          <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px" }}>
            Located in Sarasota, FL. Call us, stop by, or fill out the form below and we'll get back to you promptly.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {[
                  { icon: <Phone size={20} />, title: "Phone", content: <a href="tel:9413774673" style={{ color: "#FFD100", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>(941) 377-4673</a> },
                  { icon: <MapPin size={20} />, title: "Address", content: <span style={{ color: "#1A1A1A", fontSize: "0.9rem", lineHeight: 1.6 }}>552 Catarzi Way<br />Sarasota, FL 34232<br /><a href="https://maps.google.com/?q=552+Catarzi+Way+Sarasota+FL" target="_blank" rel="noopener noreferrer" style={{ color: "#FFD100", textDecoration: "none", fontSize: "0.8rem" }}>Get Directions →</a></span> },
                  { icon: <Clock size={20} />, title: "Hours", content: <span style={{ color: "#1A1A1A", fontSize: "0.9rem", lineHeight: 1.6 }}>Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: By appointment<br />Sunday: Closed</span> },
                  { icon: <Mail size={20} />, title: "Email", content: <a href="mailto:info@mhss-inc.com" style={{ color: "#FFD100", textDecoration: "none", fontSize: "0.9rem" }}>info@mhss-inc.com</a> },
                ].map(item => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", padding: "1.25rem" }}>
                    <span style={{ color: "#FFD100", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D2D2D", marginBottom: "0.35rem" }}>{item.title}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.5rem", overflow: "hidden", height: "220px" }}>
                <iframe
                  title="MHSS Inc. Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1!2d-82.4774!3d27.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzExLjAiTiA4MsKwMjgnMzguNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.625rem", padding: "2.5rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(245,158,11,0.15)", border: "2px solid #FFD100", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                    <Phone size={24} style={{ color: "#FFD100" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1C1C1C", marginBottom: "0.5rem" }}>Message Received</h3>
                  <p style={{ color: "#2D2D2D", fontSize: "0.9rem", marginBottom: "1.5rem" }}>We'll get back to you shortly. For urgent needs, call us directly at (941) 377-4673.</p>
                  <a href="tel:9413774673" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#1C1C1C", marginBottom: "0.5rem" }}>Request a Quote</h2>
                  <p style={{ color: "#2D2D2D", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Tell us what you need and we'll respond promptly.</p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { id: "name", label: "Name *", type: "text", placeholder: "Your name", required: true },
                      { id: "phone", label: "Phone *", type: "tel", placeholder: "(941) 000-0000", required: true },
                      { id: "email", label: "Email", type: "email", placeholder: "your@email.com", required: false },
                    ].map(field => (
                      <div key={field.id}>
                        <label htmlFor={field.id} style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2D2D", marginBottom: "0.4rem" }}>{field.label}</label>
                        <input id={field.id} type={field.type} placeholder={field.placeholder} required={field.required} value={form[field.id as keyof typeof form]} onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))} style={{ width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.375rem", padding: "0.7rem 0.875rem", color: "#1C1C1C", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="service" style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2D2D", marginBottom: "0.4rem" }}>Service Needed</label>
                      <select id="service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} style={{ width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.375rem", padding: "0.7rem 0.875rem", color: form.service ? "#1C1C1C" : "#6B7280", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}>
                        <option value="">Select a service...</option>
                        <option value="hydraulic-hose">Hydraulic Hose Fabrication / Repair</option>
                        <option value="pressure-washer">Pressure Washer Sales / Service</option>
                        <option value="airless-sprayer">Airless Sprayer Service</option>
                        <option value="pumps-parts">Pumps & Parts</option>
                        <option value="hose-reels">Hose Reels</option>
                        <option value="surface-cleaners">Surface Cleaners</option>
                        <option value="pest-control">Pest Control Sprayer</option>
                        <option value="deco-products">Deco Products / Sealers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2D2D", marginBottom: "0.4rem" }}>Message</label>
                      <textarea id="message" rows={4} placeholder="Describe what you need..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #E5E0D8", borderRadius: "0.375rem", padding: "0.7rem 0.875rem", color: "#1C1C1C", fontSize: "0.875rem", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                    </div>
                    <button type="submit" style={{ backgroundColor: "#FFD100", color: "#1C1C1C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.875rem 1.5rem", borderRadius: "0.375rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <Phone size={15} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

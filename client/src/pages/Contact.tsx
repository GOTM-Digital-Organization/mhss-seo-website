import Layout from "@/components/Layout";
import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout
      title="Contact MHSS Inc. | Sarasota Hose Repair & Pressure Washing | 941-377-4673"
      description="Contact Mobile Hose & Spray Systems in Sarasota, FL. Two locations, emergency mobile service, and a free quote form. Call 941-377-4673 or visit 552 Catarzi Way, Sarasota."
      canonical="https://www.mhss-inc.com/contact"
    >
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#404040" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #4A4A4A 0%, #404040 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623" }}>
              Get in Touch
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.0, marginBottom: "1.25rem" }}>
            CONTACT <span style={{ color: "#F5A623" }}>MHSS INC.</span>
          </h1>
          <p style={{ color: "#C0C0C0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", fontFamily: "'DM Sans', sans-serif" }}>
            Call us, stop by our Sarasota shop, or fill out the form below for a free quote. We respond fast.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#404040" }} className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgba(255,255,255,0.06)", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: "#F5A623" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} style={{ color: "#F5A623" }} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.1rem" }}>Call Us</span>
                </div>
                <a href="tel:+19413774673" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#F5A623", letterSpacing: "0.02em" }}>
                  941-377-4673
                </a>
                <p style={{ color: "#909090", fontSize: "0.8rem", marginTop: "0.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                  For emergency hose repair, call immediately — we dispatch fast.
                </p>
              </div>

              {/* Sarasota Location */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} style={{ color: "#F5A623" }} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.1rem" }}>Sarasota Shop</span>
                </div>
                <p style={{ color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                  552 Catarzi Way<br />Sarasota, FL 34232
                </p>
                <a
                  href="https://maps.google.com/?q=552+Catarzi+Way+Sarasota+FL+34232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-semibold"
                  style={{ color: "#F5A623", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Get Directions →
                </a>
              </div>

              {/* Bradenton Location */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} style={{ color: "#F5A623" }} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.1rem" }}>Bradenton Shop</span>
                </div>
                <p style={{ color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                  Bradenton, FL<br />Serving Manatee County
                </p>
                <a
                  href="https://maps.google.com/?q=Bradenton+FL+Mobile+Hose+Spray+Systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-semibold"
                  style={{ color: "#F5A623", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Get Directions →
                </a>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} style={{ color: "#F5A623" }} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.1rem" }}>Hours</span>
                </div>
                <table style={{ width: "100%", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>
                  <tbody>
                    {[
                      ["Monday – Friday", "7:30am – 5:00pm"],
                      ["Saturday", "Closed"],
                      ["Sunday", "Closed"],
                    ].map(([day, hours]) => (
                      <tr key={day}>
                        <td style={{ color: "#C0C0C0", paddingBottom: "0.4rem", paddingRight: "1rem" }}>{day}</td>
                        <td style={{ color: hours === "Closed" ? "#909090" : "#F5A623", fontWeight: 600 }}>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-3 p-3 rounded" style={{ backgroundColor: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
                  <p style={{ color: "#E03030", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                    Emergency mobile service available — call 941-377-4673
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-lg" style={{ backgroundColor: "#4A4A4A", border: "1px solid rgba(255,255,255,0.06)" }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} style={{ color: "#F5A623", margin: "0 auto 1.5rem" }} />
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                      THANKS! WE'LL BE IN TOUCH SOON.
                    </h3>
                    <p style={{ color: "#C0C0C0", fontFamily: "'DM Sans', sans-serif" }}>
                      We typically respond within a few hours during business hours. For urgent needs, call us directly at <a href="tel:+19413774673" style={{ color: "#F5A623" }}>941-377-4673</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <div style={{ width: "2.5rem", height: "3px", backgroundColor: "#F5A623", marginBottom: "1rem" }} />
                    <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                      REQUEST A FREE QUOTE
                    </h2>
                    <p style={{ color: "#909090", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", marginBottom: "2rem" }}>
                      Fill out the form below and we'll get back to you quickly. For emergencies, call us directly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0C0C0", display: "block", marginBottom: "0.5rem" }}>
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded outline-none transition-colors"
                            style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.1)", color: "#E4E4E7", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0C0C0", display: "block", marginBottom: "0.5rem" }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded outline-none transition-colors"
                            style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.1)", color: "#E4E4E7", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                            placeholder="941-555-0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0C0C0", display: "block", marginBottom: "0.5rem" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded outline-none transition-colors"
                          style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.1)", color: "#E4E4E7", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                          placeholder="john@yourcompany.com"
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0C0C0", display: "block", marginBottom: "0.5rem" }}>
                          Service Needed *
                        </label>
                        <select
                          required
                          value={form.service}
                          onChange={e => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded outline-none transition-colors"
                          style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.1)", color: form.service ? "#E4E4E7" : "#909090", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="hydraulic-hose">Hydraulic Hose Repair / Assembly</option>
                          <option value="pressure-washer-repair">Pressure Washer Repair</option>
                          <option value="pressure-washer-sales">Pressure Washer Sales (Honda)</option>
                          <option value="supply-store">Supply Store / Parts</option>
                          <option value="rig-build">Custom Rig Build</option>
                          <option value="emergency">Emergency Mobile Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0C0C0", display: "block", marginBottom: "0.5rem" }}>
                          Tell Us More
                        </label>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded outline-none transition-colors resize-none"
                          style={{ backgroundColor: "#404040", border: "1px solid rgba(255,255,255,0.1)", color: "#E4E4E7", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
                          placeholder="Describe what you need — hose size, equipment type, urgency, etc."
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded font-bold text-lg transition-all hover:scale-[1.02] active:scale-95"
                        style={{ backgroundColor: "#F5A623", color: "#404040", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}
                      >
                        <Send size={18} /> Send Request
                      </button>
                      <p style={{ color: "#909090", fontSize: "0.75rem", textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>
                        For emergencies, call directly: <a href="tel:+19413774673" style={{ color: "#F5A623" }}>941-377-4673</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-lg overflow-hidden" style={{ height: "400px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.3!2d-82.4774!3d27.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzExLjAiTiA4MsKwMjgnMzguNiJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MHSS Sarasota Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

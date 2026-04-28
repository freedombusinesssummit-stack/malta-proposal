"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const G = { green: '#8FD600', greenMid: '#C8F000', gray: '#6B7280', border: '#E5E7EB', light: '#F7F7F5' };

const funnelSteps = [
  { num: "01", label: "Traffic", desc: "Targeted video & static ads by geo, income bracket, mobility intent.", color: G.green },
  { num: "02", label: "Registration", desc: "High-converting summit sign-up with embedded qualification questions.", color: G.greenMid },
  { num: "03", label: "Survey Funnel", desc: "Malta Mobility Index — prospects score by programme fit, budget, and timeline.", color: G.gray },
  { num: "04", label: "Lead Delivery", desc: "HOT/WARM/COLD scored prospects delivered via Airtable or CRM within 7 days.", color: G.green },
];

const LEADS = [
  { name: "James W.", country: "🇬🇧 UK", program: "Malta MPRP", budget: "€350K–€500K", timeline: "1–3 mo", email: "james.w●●●@gmail.com", tier: "HOT", score: 24 },
  { name: "Sarah M.", country: "🇺🇸 USA", program: "Malta Citizenship", budget: "€750K–€1M+", timeline: "1–3 mo", email: "sarah.m●●●@out●.com", tier: "HOT", score: 23 },
  { name: "Raj K.", country: "🇮🇳 India", program: "Malta MPRP", budget: "€500K–€750K", timeline: "1–3 mo", email: "raj.k●●●@●●.in", tier: "HOT", score: 22 },
  { name: "Nguyen T.", country: "🇦🇪 UAE", program: "Nomad Permit", budget: "€150K–€350K", timeline: "3–6 mo", email: "nguyen.t●●●@●●.ae", tier: "HOT", score: 21 },
  { name: "Emily R.", country: "🇨🇦 Canada", program: "Family Office", budget: "€500K–€1M+", timeline: "3–6 mo", email: "emily.r●●●@gmail.com", tier: "HOT", score: 20 },
  { name: "Michael B.", country: "🇩🇪 Germany", program: "iGaming License", budget: "€250K–€500K", timeline: "3–6 mo", email: "m.b●●●@gmail.com", tier: "HOT", score: 19 },
  { name: "Arjun S.", country: "🇸🇬 Singapore", program: "Startup Permit", budget: "€100K–€250K", timeline: "6–12 mo", email: "arjun.s●●●@●●.sg", tier: "WARM", score: 16 },
  { name: "Lisa T.", country: "🇫🇷 France", program: "Malta MPRP", budget: "€350K–€500K", timeline: "6–12 mo", email: "lisa.t●●●@gmail.com", tier: "WARM", score: 14 },
  { name: "David L.", country: "🇬🇧 UK", program: "Malta Citizenship", budget: "€750K–€1M+", timeline: "6–12 mo", email: "david.l●●●@gmail.com", tier: "WARM", score: 13 },
  { name: "Priya M.", country: "🇮🇳 India", program: "Family Office", budget: "€500K–€750K", timeline: "12 mo+", email: "priya.m●●●@●●.in", tier: "COLD", score: 9 },
  { name: "Robert C.", country: "🇺🇸 USA", program: "Nomad Permit", budget: "€100K–€250K", timeline: "12 mo+", email: "robert.c●●●@gmail.com", tier: "COLD", score: 8 },
  { name: "Chen W.", country: "🇨🇳 China", program: "Malta MPRP", budget: "€500K–€1M+", timeline: "1–3 mo", email: "chen.w●●●@●●.cn", tier: "HOT", score: 22 },
];

const MASKS = [
  { label: "Email", blur: true },
  { label: "WhatsApp", blur: true },
];

export default function IntelSlides() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Funnel */}
      <section id="funnel" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">08 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <p className="section-label">FBS Intelligence · Funnel & Insights</p>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>
              FBS: Index Score<br />Funnel &amp; Insights
            </h2>
            <p className="text-carbon-500 mb-8 max-w-xl">
              A purpose-built funnel — targeted ads → registration → Malta Mobility Index survey → segmented lead delivery — turns traffic into pre-qualified, opt-in prospects.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {funnelSteps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="rounded-xl border border-carbon-200 bg-white p-5 h-full hover:shadow-md transition-shadow">
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.5, color: s.color, marginBottom: 5, textTransform: 'uppercase' }}>{s.label}</div>
                  <div className="text-3xl font-black text-carbon-200 mb-3">{s.num}</div>
                  <p className="text-sm text-carbon-600 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Playbook banner */}
          <AnimatedSection delay={400}>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#b5f55a', background: 'linear-gradient(135deg, #f3ffe3, #f8fff0)' }}>
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: G.green }}>Participants Playbook · Malta Mobility Score Index</p>
                    <p className="font-black text-carbon-900 text-lg leading-tight">Malta Mobility Index</p>
                    <p className="text-sm text-carbon-600 mt-1">MPRP · Nomad Permit · iGaming · Fintech · Corporate Structuring</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-carbon-400">Partner Audience Intelligence</p>
                    <p className="font-black text-carbon-900">FBS Malta 2026</p>
                    <p className="text-xs text-lime-600 font-semibold">Full Consent · GDPR</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intel / Leads */}
      <section id="intel" className="slide-section py-14 border-b border-carbon-100 bg-white" ref={ref}>
        <span className="slide-number">09 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <p className="section-label">Audience Insights Output</p>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Audience Insights Output</h2>
            <p className="text-carbon-500 mb-8">Every lead captured through the FBS Malta funnel is enriched with structured data — geo, demographics, interests, and a proprietary Index Score.</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="rounded-xl border border-carbon-200 overflow-hidden mb-6">
              {/* Table header */}
              <div className="grid text-xs font-bold uppercase tracking-widest text-carbon-400 bg-carbon-50 border-b border-carbon-200"
                style={{ gridTemplateColumns: "1fr 0.7fr 1fr 0.9fr 1fr 1fr 0.5fr 0.4fr" }}>
                {["Name", "Country", "Programme", "Budget", "📧 Email", "💬 WhatsApp", "Tier", "Score"].map((h, i) => (
                  <div key={i} className="px-3 py-3">{h}</div>
                ))}
              </div>

              {/* Rows */}
              {LEADS.map((lead, i) => (
                <div key={i}
                  className="grid border-b border-carbon-100 last:border-0 text-sm hover:bg-carbon-50 transition-colors"
                  style={{ gridTemplateColumns: "1fr 0.7fr 1fr 0.9fr 1fr 1fr 0.5fr 0.4fr" }}>
                  <div className="px-3 py-3 font-semibold text-carbon-900">{lead.name}</div>
                  <div className="px-3 py-3 text-carbon-600">{lead.country}</div>
                  <div className="px-3 py-3 text-carbon-600">{lead.program}</div>
                  <div className="px-3 py-3 text-carbon-600">{lead.budget}</div>
                  <div className="px-3 py-3 text-carbon-400 text-xs" style={{ filter: "blur(4px)", userSelect: "none" }}>{lead.email}</div>
                  <div className="px-3 py-3 text-carbon-400 text-xs" style={{ filter: "blur(4px)", userSelect: "none" }}>+{i % 3 === 0 ? "44" : i % 3 === 1 ? "1" : "91"} ●●● ●●●●●</div>
                  <div className="px-3 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${lead.tier === "HOT" ? "bg-red-50 text-red-600 border border-red-200" : lead.tier === "WARM" ? "bg-orange-50 text-orange-500 border border-orange-200" : "bg-carbon-100 text-carbon-500"}`}>
                      {lead.tier}
                    </span>
                  </div>
                  <div className="px-3 py-3 font-black text-carbon-900">{lead.score}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap items-center gap-3 text-sm text-carbon-500">
              <span className="font-bold text-carbon-900">300+ prospects</span>
              <span>·</span>
              <span className="font-bold" style={{ color: G.green }}>50% HOT</span>
              <span>·</span>
              <span>12 fields per record</span>
              <span>·</span>
              <span>✓ Email + WhatsApp included</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-lime-50 text-lime-700 border border-lime-200 font-semibold text-xs">
                ☑ Consent · GDPR
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

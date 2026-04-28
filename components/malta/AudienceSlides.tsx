"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const roles = [
  { role: "Founder / Co-Founder / CEO / Managing Director", pct: 56, note: "Decision-makers" },
  { role: "C-Level / VP / Head / Director", pct: 19, note: "Senior executives" },
  { role: "Consultant / Advisor / Manager", pct: 14, note: "Specialists" },
  { role: "Investor / VC", pct: 5, note: "Capital allocators" },
  { role: "Freelancer / Independent Professional", pct: 7, note: "Solopreneurs" },
  { role: "Employee / Analyst / Researcher", pct: 4, note: "Staff" },
];

const behavioral = [
  { label: "Residency / Second Passport", pct: 72, note: "3 out of 4 want actionable advice on Malta residency, CBI, or EU citizenship." },
  { label: "Malta Residency Specifically (MPRP)", pct: 58, note: "More than half actively researching Malta's official residency programmes." },
  { label: "Tax Optimization & Corporate Setup", pct: 64, note: "Founders need guidance on Malta's refund system, holding structures, and compliance." },
  { label: "EU Market Access via Malta", pct: 51, note: "Over half seeking a credible EU gateway for business expansion." },
  { label: "iGaming / Fintech Licensing", pct: 38, note: "Significant segment of operators seeking MGA licenses and regulated setup." },
];

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        setTimeout(() => setV(value), delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, delay]);
  return <div ref={ref}><Progress value={v} className="h-1.5" /></div>;
}

export default function AudienceSlides() {
  return (
    <>
      <section id="audience" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">05 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Profile</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Who&apos;s in the Room</h2>
            <p className="text-carbon-500 mb-8">Blend of direct clients B2C and high-value industry partners B2B.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={80}>
              <div className="spotlight-card rounded-xl p-6 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full" style={{ borderTop: "4px solid #9ef01a", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#f8fafc" }}>
                <div className="text-4xl font-black mb-2 gradient-text">60%</div>
                <p className="font-bold text-carbon-900 mb-1">B2C Clients</p>
                <p className="text-sm text-carbon-600">HNWIs, entrepreneurs, investors, and families seeking Malta residency, EU access, and investment</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={130}>
              <div className="spotlight-card rounded-xl p-6 border border-carbon-200 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full">
                <div className="text-4xl font-black text-carbon-900 mb-2">40%</div>
                <p className="font-bold text-carbon-900 mb-1">B2B Partners</p>
                <p className="text-sm text-carbon-600">Service providers, agencies, law firms, and consultants seeking partnerships and qualified referrals</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={180}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Individuals</p>
                {["HNWIs / Investors", "Digital Entrepreneurs / Consultants", "Relocating Families", "iGaming / Fintech Founders"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#9ef01a" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={220}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Service Providers</p>
                {["Legal, Tax, Banking, Residency", "Real Estate Developers & Agencies", "iGaming & Fintech Firms", "Investment Companies & Family Offices"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#6b7280" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={260}>
            <div className="rounded-xl border border-carbon-100 bg-carbon-50 p-5">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Industry Breakdown</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Finance & Legal", pct: "28%" },
                  { label: "Technology & AI", pct: "22%" },
                  { label: "Real Estate", pct: "16%" },
                  { label: "iGaming & Fintech", pct: "14%" },
                  { label: "Consulting", pct: "10%" },
                  { label: "Other", pct: "10%" },
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-carbon-200 text-carbon-700">
                    <span className="font-black" style={{ color: "#9ef01a" }}>{item.pct}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Snapshot */}
      <section id="snapshot" className="slide-section py-14 bg-white border-b border-carbon-100">
        <span className="slide-number">06 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Snapshot</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2">Position &amp; Role Breakdown</h2>
            <p className="text-carbon-500 mb-8">Senior decision-maker dominant audience with direct budget authority.</p>
          </AnimatedSection>

          <div className="space-y-4 mb-8">
            {roles.map((r, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-carbon-800">{r.role}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-carbon-400">{r.note}</span>
                        <span className="font-black text-carbon-900 text-sm">{r.pct}%</span>
                      </div>
                    </div>
                    <AnimatedProgress value={r.pct} delay={i * 60 + 200} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="rounded-xl p-5 border" style={{ background: "linear-gradient(135deg, #f8fafc, #eff6ff)", borderColor: "#bfdbfe" }}>
              <p className="text-sm font-bold text-carbon-800 mb-1">Key Takeaway</p>
              <p className="text-sm text-carbon-600">
                Founder-heavy audience — over <strong className="text-blue-600">75% are entrepreneurs or senior executives</strong> with direct authority over investment, residency, and structuring decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Behavioral */}
      <section id="behavioral" className="slide-section py-14 bg-white border-b border-carbon-100">
        <span className="slide-number">07 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Behavioral Insights</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2">Top Priority Needs</h2>
            <p className="text-carbon-500 mb-8">Multiple selections allowed — what Malta Edition attendees actively seek.</p>
          </AnimatedSection>

          <div className="space-y-5">
            {behavioral.map((b, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card-muted rounded-xl">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-bold text-carbon-900 text-sm">{b.label}</p>
                      <p className="text-xs text-carbon-500 mt-0.5">{b.note}</p>
                    </div>
                    <span className="font-black text-xl" style={{ color: "#9ef01a" }}>{b.pct}%</span>
                  </div>
                  <AnimatedProgress value={b.pct} delay={i * 80 + 300} />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="mt-6 rounded-xl p-4 border border-blue-200 bg-blue-50">
              <p className="text-sm font-bold text-carbon-800">Takeaway</p>
              <p className="text-sm text-carbon-600 mt-1">
                Malta-first mindset — <strong className="text-blue-600">72% want residency or citizenship</strong> options.{" "}
                The #1 need is <strong className="text-carbon-800">&ldquo;trusted service providers&rdquo;</strong> in the Malta ecosystem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

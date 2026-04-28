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
  { label: "Relocation / Second Residency", pct: 68, note: "2 out of 3 want actionable advice on visas, residencies, or citizenship." },
  { label: "Building & Scaling Borderless Businesses", pct: 66, note: "Founders need guidance on cross-border operations and compliance." },
  { label: "Tax Optimization & Company Formations", pct: 56, note: "More than half ready for practical steps — SG, MY, HK setups dominate." },
  { label: "Real Estate Investment Opportunities", pct: 46, note: "Nearly half are investor-minded with readiness to diversify geographically." },
  { label: "Health, Mobility & Security", pct: 29, note: "Lifestyle and family-focused relocators. Opportunity for wellness providers." },
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
      {/* AUDIENCE PROFILE */}
      <section id="audience" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">06 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Profile</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Who's in the Room</h2>
            <p className="text-carbon-500 mb-8">Blend of direct clients B2C and high-value industry partners B2B.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={80}>
              <div className="spotlight-card rounded-xl p-6 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full" style={{ borderTop: "4px solid #9ef01a", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#f8fff0" }}>
                <div className="text-4xl font-black mb-2 gradient-text">60%</div>
                <p className="font-bold text-carbon-900 mb-1">B2C Clients</p>
                <p className="text-sm text-carbon-600">Entrepreneurs, investors, expats & families seeking relocation, residency, and investment</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={130}>
              <div className="spotlight-card rounded-xl p-6 border border-carbon-200 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full">
                <div className="text-4xl font-black text-carbon-900 mb-2">40%</div>
                <p className="font-bold text-carbon-900 mb-1">B2B Partners</p>
                <p className="text-sm text-carbon-600">Service providers, agencies looking for partnerships, cross-referrals and deals</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={180}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4">Individuals</p>
                {["Digital Entrepreneurs / Consultants","HNWI / Investors","Relocating Expats / Families","Agency & E-Commerce Owners"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#9ef01a" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={220}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4">Service Providers</p>
                {["Legal, Tax, Banking, Visa, Relocation","Real Estate Developers & Agencies","Mobility & Investment Migration Firms","Investment Companies & Family Offices"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#9ef01a" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={280}>
            <div className="rounded-xl border border-carbon-200 bg-carbon-50 p-5">
              <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-4">Industry Breakdown</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Technology, IT & AI", pct: "24%" },
                  { label: "Real Estate & Property", pct: "14.7%" },
                  { label: "Finance & Consulting", pct: "12%" },
                  { label: "Law & Government", pct: "8%" },
                  { label: "Healthcare & MedTech", pct: "5%" },
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-carbon-200 rounded-xl p-3 text-center hover:border-lime-300 hover:shadow-sm transition-all cursor-default">
                    <div className="text-xl font-black mb-0.5 gradient-text">{ind.pct}</div>
                    <div className="text-xs text-carbon-500 font-medium leading-tight">{ind.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section id="snapshot" className="slide-section py-14 border-b border-carbon-100 bg-carbon-50">
        <span className="slide-number">07 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Snapshot</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Position & Role Breakdown</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {roles.map((r, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border border-carbon-200 p-4 hover:shadow-sm hover:border-lime-200 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-black w-14 text-right flex-shrink-0 tabular-nums gradient-text">{r.pct}%</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm text-carbon-900 truncate">{r.role}</p>
                        <Badge variant="outline" className="ml-2 hidden md:flex text-xs shrink-0">{r.note}</Badge>
                      </div>
                      <AnimatedProgress value={r.pct} delay={i * 60 + 200} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="rounded-xl mt-6 p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Takeaway:</strong> Founder-heavy audience — over{" "}
                <strong style={{ color: "#3d8000" }}>75% are entrepreneurs or senior executives</strong> with direct authority over investment, expansion, and partnership decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BEHAVIORAL */}
      <section id="behavioral" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">08 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Behavioral Insights</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Top Priority Needs</h2>
            <p className="text-carbon-500 mb-8">Multiple selections allowed — what respondents actively seek.</p>
          </AnimatedSection>

          <div className="space-y-4">
            {behavioral.map((b, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="rounded-xl border border-carbon-200 bg-white p-5 hover:shadow-sm hover:border-lime-200 transition-all duration-200 group">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-2xl font-black w-14 text-right flex-shrink-0 tabular-nums gradient-text leading-tight">{b.pct}%</span>
                    <div>
                      <p className="font-bold text-carbon-900 mb-0.5">{b.label}</p>
                      <p className="text-sm text-carbon-500">{b.note}</p>
                    </div>
                  </div>
                  <div className="ml-[72px]">
                    <AnimatedProgress value={b.pct} delay={i * 70 + 200} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="rounded-xl mt-6 p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Takeaway:</strong> Mobility-first mindset —{" "}
                <strong style={{ color: "#3d8000" }}>68% want</strong> residency or citizenship.{" "}
                <strong className="text-carbon-900">The #1 need is "trusted service providers."</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

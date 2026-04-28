"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const STATS = [
  { raw: "500–700", label: "Expected Attendees", icon: "🎯" },
  { raw: "10.2K", label: "Email Audience", icon: "📊" },
  { raw: "33–52%", label: "Email Open Rate", icon: "📬" },
  { raw: "30+", label: "Countries", icon: "🌐" },
  { val: 10, suffix: "", label: "Speakers", icon: "🎤" },
  { raw: "2", label: "Day Event", icon: "📅" },
];

const FEATURES = [
  { icon: "📡", title: "Real Intent Signals", text: "Data-driven virtual summit capturing real mobility intent — not vanity traffic." },
  { icon: "🌍", title: "Global Exposure", text: "100% global distribution and media exposure across 30+ countries." },
  { icon: "🎯", title: "Full Funnel Tracking", text: "Intent tracking from day one — survey, session, and post-event behavior." },
  { icon: "🔒", title: "Category Exclusivity", text: "Exclusive positioning per category and jurisdiction. No direct competitors." },
  { icon: "👔", title: "Decision-Maker Audience", text: "75% founders/execs with direct budget authority. Not gatekept by assistants." },
];

const TOPICS = [
  { icon: "🇺🇸", title: "Inbound Mobility to the U.S.: Visas, Capital & Market Access", text: "How founders and investors enter the US — from EB-5 and E-2 to structuring market access and deploying capital efficiently." },
  { icon: "🌍", title: "Second Passports & Residencies for U.S. Citizens", text: "Building a Plan B through CBI/RBI programs and strategic residency options beyond the US." },
  { icon: "🗺️", title: "Health, Security & Mobility: Building a Personal Safety Net", text: "How globally mobile individuals protect their families, assets, and lifestyle across jurisdictions." },
  { icon: "💻", title: "U.S. Company Structures: Tax Optimization & Asset Protection", text: "How to structure entities in the US for efficiency, scalability, and cross-border operations." },
  { icon: "🛸", title: "Legal Tax Optimization for U.S. Citizens", text: "What actually works (and what doesn't) when reducing tax exposure as a US person." },
  { icon: "🏠", title: "Global Real Estate for U.S. Investors", text: "Using property as a tool for residency, diversification, and capital preservation." },
  { icon: "🇪🇺", title: "Where Americans Are Moving and Why", text: "European residency, LATAM, and Caribbean jurisdictions — what's driving the shift and where opportunities are." },
  { icon: "🌐", title: "Cross-Border Structuring: Combining Residency, Tax & Business", text: "How to align citizenship, company structure, and tax strategy into one coherent global setup." },
];

export default function AboutSlide() {
  return (
    <>
      {/* ABOUT — Section 02 */}
      <section id="about" className="slide-section py-16 border-b border-carbon-100 bg-white">
        <span className="slide-number">02 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-4">About the Event</Badge>
            <h2 className="font-black text-carbon-900 mb-6" style={{ fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-1px", lineHeight: 1.1 }}>
              What is FBS USA Mobility Edition?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="mb-8">
              <p className="text-carbon-700 leading-relaxed mb-4" style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
                FBS USA Mobility Edition is our <strong className="text-carbon-900">flagship event focused on the American market</strong> — the core hub of global mobility, capital, and cross-border structuring.
              </p>
              <p className="text-carbon-700 leading-relaxed mb-4" style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
                This is not just another regional event. The US sits at the center of global flows — where capital enters, exits, and gets structured.
              </p>
              <p className="text-carbon-700 leading-relaxed" style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
                A two-day <strong className="text-carbon-900">virtual summit</strong> designed around inbound and outbound US mobility strategies for founders, investors, and globally mobile individuals.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats grid — bigger numbers */}
          <AnimatedSection delay={160}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-xl border border-carbon-200 bg-white p-5 hover:border-lime-300 hover:shadow-sm transition-all text-center group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <div className="font-black mb-1 text-carbon-900" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.5px" }}>
                    {s.raw ? s.raw : <NumberTicker value={s.val!} suffix={s.suffix} duration={1800} />}
                  </div>
                  <p className="text-xs text-carbon-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={240}>
            <div className="inline-flex items-start gap-3 rounded-xl px-5 py-3.5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <span className="text-xl">📊</span>
              <p className="font-semibold" style={{ color: "#3d8000" }}>For speakers: full access to audience insights, segmented leads & intent signals</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES — Section 03 */}
      <section id="features" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">03 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Why Partner with FBS</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-10" style={{ letterSpacing: "-0.5px" }}>What Makes Us Different</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="spotlight-card bg-white rounded-xl border border-carbon-200 border-l-4 p-5 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 group" style={{ borderLeftColor: "#9ef01a" }}>
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                  <p className="font-bold text-carbon-900 mb-1.5 text-sm">{f.title}</p>
                  <p className="text-sm text-carbon-600 leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={FEATURES.length * 80}>
              <div className="rounded-xl p-5 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4"
                style={{ background: "#111827", borderLeftColor: "#9ef01a", border: "1px solid #1f2937", borderLeftWidth: "4px" }}>
                <div className="text-2xl mb-3">🚀</div>
                <p className="font-black text-base mb-1.5"><AnimatedGradientText>8–10 Partner Slots Only</AnimatedGradientText></p>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>We work with a select group per edition to guarantee real visibility — not a crowded sponsorship list.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DIRECTIONS — Section 04 */}
      <section id="directions" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">04 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Two Directions</Badge>
            <h2 className="font-black text-carbon-900 mb-8" style={{ fontSize: "clamp(20px, 2.8vw, 36px)", letterSpacing: "-0.8px", lineHeight: 1.1 }}>Inbound & Outbound US Mobility</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            <AnimatedSection delay={80}>
              <div className="rounded-xl border border-carbon-200 bg-white p-6 hover:shadow-md transition-all duration-300" style={{ borderLeft: "4px solid #9ef01a" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black" style={{ color: "#9ef01a" }}>→</span>
                  <h3 className="font-black text-carbon-900" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.3px" }}>🌍 Outbound Mobility</h3>
                </div>
                <p className="text-carbon-600 leading-relaxed mb-4 text-sm" style={{ maxWidth: 760 }}>
                  Americans seeking legitimate ways to reduce their tax exposure, obtain a <strong className="text-carbon-900">Plan B, or renounce citizenship.</strong> Focus on <strong className="text-carbon-900">CBI/RBI Programs (Caribbean), European Residency, Tax-Advantaged Residency (LATAM)</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Caribbean CBI", "European Residency", "LATAM", "Tax Residency", "Second Passport"].map((t, i) => (
                    <Badge key={i} variant="success" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="rounded-xl border border-carbon-200 bg-white p-6 hover:shadow-md transition-all duration-300" style={{ borderLeft: "4px solid #111827" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black text-carbon-300">←</span>
                  <h3 className="font-black text-carbon-900" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.3px" }}>🇺🇸 Inbound Mobility</h3>
                </div>
                <p className="text-carbon-600 leading-relaxed mb-4 text-sm" style={{ maxWidth: 760 }}>
                  HNWI from <strong className="text-carbon-900">India, China, and Southeast Asia</strong> seeking U.S. residency/visas for capital protection. Focus on <strong className="text-carbon-900">EB-5, E-2 Investment Visas</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["EB-5 Visa", "E-2 Treaty", "India", "SE Asia", "China"].map((t, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* KEY TOPICS — Section 05 */}
      <section id="topics" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">05 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Agenda Themes</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Key Topics To Discuss</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 55}>
                <div className="spotlight-card bg-white rounded-xl border border-carbon-200 p-5 hover:shadow-sm hover:border-lime-300 hover:-translate-y-0.5 transition-all duration-200 h-full group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 mt-0.5">{t.icon}</span>
                    <div>
                      <p className="font-bold text-carbon-900 mb-1.5 text-sm leading-snug">{t.title}</p>
                      <p className="text-xs text-carbon-500 leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS — Section 06 — REMOVED as requested */}
    </>
  );
}

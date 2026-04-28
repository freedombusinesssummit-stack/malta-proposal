"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const STATS = [
  { raw: "500+", label: "Expected Attendees", icon: "🎯" },
  { raw: "10.2K", label: "Email Audience", icon: "📊" },
  { raw: "40%+", label: "Email Open Rate", icon: "📬" },
  { raw: "30+", label: "Countries", icon: "🌐" },
  { val: 8, suffix: "", label: "Sessions", icon: "🎤" },
  { raw: "2", label: "Day Event", icon: "📅" },
];

const FEATURES = [
  { icon: "🏛️", title: "Government-Backed Credibility", text: "Only summit produced in collaboration with Residency Malta Agency — direct government endorsement for your brand." },
  { icon: "📡", title: "Real Intent Signals", text: "Data-driven summit capturing real mobility intent — not vanity traffic. Every attendee is pre-qualified." },
  { icon: "🌍", title: "Global Exposure", text: "100% global distribution and media exposure across EU, UK, MENA, India, and Asia-Pacific markets." },
  { icon: "🔒", title: "Category Exclusivity", text: "Exclusive positioning per category and jurisdiction. No direct competitors on the same stage." },
  { icon: "👔", title: "Decision-Maker Audience", text: "75% founders and senior executives with direct budget authority. Not gatekept by assistants." },
];

const TOPICS = [
  { icon: "🇲🇹", title: "Inbound Investment: Why Malta", text: "Industries in focus, regulatory framework, EU single market access, funding instruments, and government support for international capital." },
  { icon: "💰", title: "Capital Markets & Financial Infrastructure", text: "Malta's capital markets ecosystem, banking access, financial services gateway, and EU international finance hub positioning." },
  { icon: "🚀", title: "Startup in Malta — Malta Venture Capital", text: "MVC invests in high-potential startups driving economic diversification, sustainable development, and meaningful social impact." },
  { icon: "🏠", title: "Relocation & Residency Programmes", text: "MPRP · Nomad Permit · Startup Permit · Family Office Residency — all official Malta residency pathways." },
  { icon: "🏢", title: "Tax Optimization & Corporate Structuring", text: "Malta's 6/7ths refund system, participation exemption, double tax treaty network, and practical structuring for founders and HNWIs." },
  { icon: "🎮", title: "iGaming: Licensing, Payments & Compliance", text: "MGA licensing framework, payment processing, AML/KYC obligations, and what it takes to operate a regulated gaming business from Malta." },
  { icon: "💻", title: "Fintech, SaaS & Digital-Native Companies", text: "Structuring Fintech, SaaS, and crypto/digital asset companies under Malta's MFSA-regulated environment and VFA framework." },
  { icon: "🌐", title: "EU Market Access via Malta", text: "How to incorporate in Malta, structure holding companies, and access the EU single market for scalable cross-border operations." },
];

export default function AboutSlide() {
  return (
    <>
      <section id="about" className="slide-section bg-white">
        <span className="slide-number">02 / 18</span>
        <div className="wrap py-16 md:py-20">
          <AnimatedSection className="anim">
            <p className="section-label">About the Event</p>
            <h2 className="text-3xl md:text-4xl font-black text-carbon-900 leading-tight mb-6">
              What is FBS Malta Edition?
            </h2>
            <p className="text-carbon-600 text-base md:text-lg mb-4 leading-relaxed">
              FBS Malta Edition is a two-day in-person summit at the intersection of investment migration,
              EU corporate structuring, and global mobility. Held in Valletta — the EU&apos;s smallest capital
              with outsized strategic significance — convening HNWIs, founders, and service providers around
              Malta&apos;s unique proposition as a gateway jurisdiction.
            </p>
            <p className="text-carbon-500 text-sm mb-8 leading-relaxed">
              <strong className="text-carbon-800">Day 1</strong> features government entities on stage. {" "}
              <strong className="text-carbon-800">Day 2</strong> features commercial agents — lawyers, tax advisors, iGaming specialists, and Fintech experts.
              Produced in official collaboration with{" "}
              <strong className="text-blue-600">Residency Malta Agency</strong>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150} className="anim">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {STATS.map((s, i) => (
                <div key={i} className="card text-center py-5">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-black text-2xl text-carbon-900 leading-none mb-1">
                    {s.val !== undefined ? <NumberTicker value={s.val} suffix={s.suffix ?? ""} /> : s.raw}
                  </div>
                  <div className="text-xs text-carbon-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="partnership" className="slide-section" style={{ background: "#f0fdf4", borderTop: "1px solid #d1fae5" }}>
        <span className="slide-number">03 / 18</span>
        <div className="wrap py-16 md:py-20">
          <AnimatedSection className="anim">
            <p className="section-label">Official Government Partnership</p>
            <h2 className="text-3xl md:text-4xl font-black text-carbon-900 leading-tight mb-4">
              Produced in Collaboration with <span className="text-blue-600">Residency Malta Agency</span>
            </h2>
            <p className="text-carbon-600 text-base max-w-2xl mb-6 leading-relaxed">
              FBS Malta is the only private summit produced in direct collaboration with Malta&apos;s official Residency Agency.
              This gives commercial partners co-branding alongside a government authority — an unmatched trust signal
              for HNWI prospects evaluating Malta&apos;s residency and citizenship programmes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: "🏛️", label: "Residency Malta Agency", sub: "Official Government Partner" },
                { icon: "🏢", label: "Malta Enterprise", sub: "Inbound Investment Body" },
                { icon: "💰", label: "Finance Malta", sub: "Capital Markets Authority" },
                { icon: "🚀", label: "Malta Venture Capital", sub: "Startup Ecosystem Fund" },
              ].map((p, i) => (
                <div key={i} className="card-green flex flex-col items-center text-center py-4">
                  <span className="text-2xl mb-2">{p.icon}</span>
                  <p className="text-sm font-bold text-carbon-800 mb-1">{p.label}</p>
                  <p className="text-xs text-carbon-500">{p.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="features" className="slide-section bg-white">
        <span className="slide-number">04 / 18</span>
        <div className="wrap py-16 md:py-20">
          <AnimatedSection className="anim">
            <p className="section-label">Why Partner with FBS</p>
            <h2 className="text-3xl md:text-4xl font-black text-carbon-900 leading-tight mb-8">What Makes Us Different</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {FEATURES.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 flex-shrink-0">{f.icon}</span>
                    <div>
                      <p className="font-bold text-carbon-900 text-sm mb-1">{f.title}</p>
                      <p className="text-carbon-500 text-sm leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="anim">
            <p className="section-label mb-3">Key Topics</p>
            <h3 className="text-xl font-black text-carbon-900 mb-5">8 Sessions Across 2 Days</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TOPICS.map((t, i) => (
                <div key={i} className="card hover:border-lime-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 flex-shrink-0">{t.icon}</span>
                    <div>
                      <p className="font-bold text-carbon-900 text-sm mb-1">{t.title}</p>
                      <p className="text-carbon-500 text-xs leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

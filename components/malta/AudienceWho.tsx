"use client";
import AnimatedSection from "@/components/AnimatedSection";

const B2B = [
  { icon: "⚖️", title: "Immigration & Mobility Firms", desc: "Relocation consultants, immigration lawyers, and global mobility advisors seeking qualified Malta prospects" },
  { icon: "💼", title: "Wealth Managers & Financial Advisors", desc: "Professionals advising HNWIs on cross-border asset structuring, EU market access, and investment migration" },
  { icon: "🏛️", title: "Family Offices & Private Client Advisors", desc: "Multi-generational wealth structures exploring Malta's Family Office Residency and capital market access" },
  { icon: "📋", title: "Legal & Tax Professionals", desc: "Lawyers and tax advisors specialising in Malta's 6/7ths refund system, international structuring, and treaty planning" },
  { icon: "🏢", title: "Corporate Service Providers", desc: "Company formation, registered address, compliance, and directorship service firms targeting Malta incorporations" },
  { icon: "🚀", title: "Founders & Operators", desc: "Entrepreneurs exploring relocation to Malta, EU company structuring, iGaming licensing, or Fintech/SaaS setup" },
];

export default function AudienceWho() {
  return (
    <section id="who-for" className="slide-section bg-white border-b border-carbon-100">
      <div className="wrap py-14 md:py-18">
        <AnimatedSection>
          <p className="section-label">Audience</p>
          <h2 className="text-3xl md:text-4xl font-black text-carbon-900 mb-2">Who is This For?</h2>
          <p className="text-carbon-500 mb-10 max-w-2xl">
            FBS Malta Edition connects B2B service providers with pre-qualified HNWIs — creating a direct matching environment between providers and decision-ready prospects.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">

          {/* B2B Column */}
          <AnimatedSection delay={80}>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">🏢 B2B — Service Providers</span>
              <span className="text-xs text-carbon-400">Our Partners</span>
            </div>
            <div className="space-y-3">
              {B2B.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-carbon-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-black text-carbon-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-carbon-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* B2C Column */}
          <AnimatedSection delay={160}>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-red-50 text-red-700 border border-red-200">👤 B2C — HNWI Attendees</span>
              <span className="text-xs text-carbon-400">Your Prospects</span>
            </div>

            {/* HNWI profile card */}
            <div className="rounded-2xl border border-carbon-200 bg-white overflow-hidden mb-4">
              <div className="px-5 py-4 border-b border-carbon-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-sm flex-shrink-0">HN</div>
                <div>
                  <p className="font-black text-carbon-900 text-sm">High-Net-Worth Individual</p>
                  <p className="text-xs text-carbon-400">Active relocation or investment decision</p>
                </div>
                <span className="ml-auto inline-flex items-center px-2 py-1 rounded-md text-xs font-bold bg-red-50 text-red-600 flex-shrink-0">🔴 HOT</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-carbon-100">
                {[
                  { icon: "👤", label: "Profile", value: "HNWI / Investor" },
                  { icon: "🇪🇺", label: "Primary Goal", value: "EU Residency / Citizenship" },
                  { icon: "🌍", label: "Geography", value: "USA, Middle East, Asia" },
                  { icon: "📅", label: "Timeline", value: "9–12 months" },
                  { icon: "✅", label: "Status", value: "Active Decision-Making" },
                  { icon: "🎯", label: "Intent", value: "Malta MPRP / EU Passport" },
                ].map((item, i) => (
                  <div key={i} className="bg-white px-4 py-3">
                    <p className="text-xs text-carbon-400 mb-0.5">{item.icon} {item.label}</p>
                    <p className="font-black text-carbon-900 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* USA primary audience highlight */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇺🇸</span>
                <div>
                  <p className="font-black text-carbon-900 text-sm">Primary Audience: United States</p>
                  <p className="text-xs text-blue-600 font-semibold">Largest segment of registered attendees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "82%", label: "US-based registrations" },
                  { val: "9–12mo", label: "Avg. decision timeline" },
                  { val: "67%", label: "Evaluating EU residency" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-lg p-2.5 border border-blue-100">
                    <p className="font-black text-blue-700 text-lg leading-none mb-1">{s.val}</p>
                    <p className="text-xs text-carbon-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

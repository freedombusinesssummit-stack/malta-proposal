"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const REASONS = [
  "Data-driven virtual summit — real intent signals",
  "100% global distribution and media exposure",
  "Full funnel intent tracking from day one",
  "Exclusivity per category and jurisdiction",
  "Decision-maker dominant audience (75% founders/execs)",
  "Direct access to pre-qualified prospects with active timelines (0–12 months)",
  "Pre-qualified audience surveyed on jurisdiction, budget & timeline",
  "8–10 selected partners per event — no overcrowding",
];

const CONTACTS = [
  {
    photo: "/denis.jpg",
    init: "DD",
    name: "Denys Dovgal",
    role: "CEO · Freedom Business Summit",
    lime: true,
    links: [
      { icon: "📧", label: "denis@fsummit.net", href: "mailto:denis@fsummit.net" },
      { icon: "💬", label: "+1 415 316 36 38", href: "https://wa.me/14153163638" },
    ],
  },
  {
    photo: "/eleonora.jpg",
    init: "ED",
    name: "Eleonora Davtyan",
    role: "Partners & Sponsorships",
    lime: false,
    links: [
      { icon: "📧", label: "eleonora@fsummit.net", href: "mailto:eleonora@fsummit.net" },
    ],
  },
  {
    photo: "/kristine.jpg",
    init: "KA",
    name: "Kristine Aghabekyan",
    role: "Partners & Sponsorships",
    lime: true,
    links: [
      { icon: "📧", label: "kristine@fsummit.net", href: "mailto:kristine@fsummit.net" },
      { icon: "💬", label: "+374 98 625 147", href: "https://wa.me/37498625147" },
    ],
  },
];

export default function ContactSlide() {
  return (
    <section id="contact" className="slide-section py-14 bg-white">
      <span className="slide-number">18 / 18</span>
      <div className="wrap">
        <AnimatedSection>
          <Badge variant="success" className="mb-3">Contact</Badge>
          <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h2>
          <p className="text-carbon-500 mb-8 max-w-xl">
            We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 20th.
          </p>
        </AnimatedSection>

        {/* 8 reasons — 2 cols, white bg with border */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
            {REASONS.map((r, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border border-carbon-200 bg-white hover:border-carbon-300 transition-colors">
                <span className="font-black text-base flex-shrink-0 mt-0.5" style={{ color: "#9ef01a" }}>→</span>
                <p className="text-sm text-carbon-700 font-medium leading-snug">{r}</p>
              </div>
            ))}
          </div>
          <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerColor="rgba(255,255,255,0.4)" shimmerDuration="1.8s" className="text-sm font-bold px-6 py-3 mb-10">
            Become a Partner →
          </ShimmerButton>
        </AnimatedSection>

        {/* 3 contact cards with REAL photos as avatars */}
        <AnimatedSection delay={160}>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {CONTACTS.map((c, i) => (
              <div key={i} className="rounded-xl border border-carbon-200 bg-white overflow-hidden"
                style={c.lime ? { borderLeft: "3px solid #9ef01a" } : {}}>
                {/* Photo — circular avatar style */}
                <div className="flex flex-col items-center pt-6 pb-4 px-5">
                  <div className="relative mb-3">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-carbon-200"
                      style={c.lime ? { borderColor: "#9ef01a" } : {}}>
                      <img
                        src={c.photo}
                        alt={c.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.background = c.lime ? "#eff6ff" : "#f3f4f6";
                            parent.style.display = "flex";
                            parent.style.alignItems = "center";
                            parent.style.justifyContent = "center";
                            parent.innerHTML = `<span style="font-size:24px;font-weight:900;color:${c.lime ? '#3d8000' : '#6b7280'}">${c.init}</span>`;
                          }
                        }}
                      />
                    </div>
                    {c.lime && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ background: "#9ef01a", color: "#111827" }}>
                        FS
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-carbon-900 text-sm text-center">{c.name}</p>
                  <p className="text-xs text-carbon-500 text-center mb-3">{c.role}</p>
                  <div className="w-full space-y-2">
                    {c.links.map((l, j) => (
                      <a key={j} href={l.href}
                        target={l.href.startsWith("https") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium w-full">
                        <span>{l.icon}</span> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Website */}
        <AnimatedSection delay={250}>
          <div className="rounded-xl p-5 flex items-center justify-between" style={{ background: "#f8fff0", border: "1px solid #bfdbfe" }}>
            <div>
              <p className="text-xs text-carbon-500 font-medium mb-0.5">Website</p>
              <p className="font-bold text-carbon-900">maltaedition.fsummit.net</p>
            </div>
            <a href="https://fsummit.net" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-carbon-900 hover:opacity-90 transition-all"
              style={{ background: "#9ef01a" }}>Visit →</a>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-14 border-t border-carbon-100">
        <div className="wrap">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center font-black text-xs" style={{ background: "#9ef01a", color: "#111827" }}>FS</div>
              <span className="font-bold text-sm text-carbon-900">Freedom Business Summit</span>
            </div>
            <p className="text-xs text-carbon-400">© 2026 Freedom Business Summit · fsummit.net · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

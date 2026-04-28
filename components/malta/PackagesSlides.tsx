"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedList } from "@/components/magicui/animated-list";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

function Check() { return <span className="font-bold text-xl" style={{ color: "#2563eb" }}>✓</span>; }
function Dash() { return <span className="text-carbon-300 text-lg">–</span>; }
function Cell({ val }: { val: string }) {
  if (val === "✓") return <Check />;
  if (val === "–") return <Dash />;
  return <span className="text-xs font-semibold text-carbon-600">{val}</span>;
}

const FLOW = [
  { dir: "→", tag: "You Receive", label: "Direct Exposure to 500+ global founders & investors", green: true },
  { dir: "←", tag: "You Deliver", label: "Deliver Keynote or Panel Talk to showcase your expertise", green: false },
  { dir: "→", tag: "You Receive", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", green: true },
  { dir: "←", tag: "You Deliver", label: "Custom video invitation for maximum pre-event exposure", green: false },
  { dir: "→", tag: "You Receive", label: "Positioning as premium service provider & thought leader", green: true },
  { dir: "→", tag: "You Receive", label: "Custom question block in our audience survey funnel", green: true },
];

const brandRows = [
  { cat: "Branding Visibility", items: [
    { label: '"Presented by" headline logo placement', g: "–", s: "✓" },
    { label: "Website feature block (logo + brand story)", g: "✓", s: "✓" },
    { label: "Exclusive Partner Per Industry & Category", g: "✓", s: "✓" },
    { label: "Mention in all early-stage PR as Co-Organizer", g: "–", s: "✓" },
    { label: "Custom Branded Frame in all live sessions", g: "–", s: "✓" },
    { label: "Sponsored Video Ads", g: "✓", s: "✓" },
  ]},
  { cat: "Thought Leadership", items: [
    { label: "Keynote / Panel", g: "30min Keynote", s: "45min Keynote+Panel" },
    { label: "Summit Industry Survey", g: "Highlight", s: "Co-Branded" },
    { label: "Thought Leadership Articles (Substack)", g: "1 article", s: "3 articles" },
    { label: "Podcast/Interview Recording (45 min)", g: "–", s: "✓" },
  ]},
  { cat: "Audience Insights & Prospects", items: [
    { label: "Online Session Attendee List", g: "✓", s: "✓" },
    { label: "Registered Attendee via UTM Ads Tag", g: "✓", s: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", g: "✓", s: "✓" },
    { label: "Full Registered Event Attendees List", g: "–", s: "✓" },
  ]},
  { cat: "Media & PR", items: [
    { label: "Dedicated Email Newsletter 10K List", g: "4 emails", s: "6 emails" },
    { label: "Press Release Distribution", g: "✓", s: "✓" },
    { label: "Exclusive Interview in Tier 1 Media", g: "–", s: "✓" },
  ]},
  { cat: "Post Event", items: [
    { label: "Branded Post Event Analytics Report", g: "✓", s: "✓" },
    { label: "Post event AMA Session with attendees", g: "–", s: "✓" },
    { label: "Freedom Business Playbook (PDF)", g: "✓", s: "✓" },
    { label: "Integration Timeline", g: "8 Weeks", s: "12 Weeks" },
  ]},
];

const speakingRows = [
  { cat: "Branding Visibility", items: [
    { label: "Website Logo Placement + Speaker Section", p: "✓", b: "✓" },
    { label: "Exclusive Speaker Per Industry & Category", p: "✓", b: "✓" },
    { label: "Sponsored Video Ads", p: "✓", b: "✓" },
    { label: "Speaker photo, bio, and topic on event website", p: "✓", b: "✓" },
  ]},
  { cat: "Thought Leadership", items: [
    { label: "Keynote / Panel", p: "30–45 min Keynote", b: "15–30 min Panel" },
  ]},
  { cat: "Audience Insights", items: [
    { label: "Online Session Attendee List", p: "✓", b: "✓" },
    { label: "Registered Attendee via UTM Ads Tag", p: "✓", b: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", p: "✓", b: "–" },
  ]},
  { cat: "Post Event", items: [
    { label: "Branded Post Event Analytics Report", p: "✓", b: "✓" },
    { label: "Freedom Business Playbook (PDF)", p: "✓", b: "✓" },
    { label: "Dedicated Newsletter Feature (8K+)", p: "✓", b: "–" },
  ]},
];

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

export default function PackagesSlides() {
  return (
    <>
      {/* ENGAGEMENT FLOW */}
      <section id="flow" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fafc" }}>
        <span className="slide-number">14 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Engagement Flow</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>How the Partnership Works</h2>
            <p className="text-carbon-500 mb-10">A structured 8–12 week journey — from pre-event exposure to post-event lead delivery</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-5 top-8 bottom-8 w-0.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #9ef01a, #2563eb, rgba(158,240,26,0.15))" }} />
            <AnimatedList delay={90} className="space-y-3">
              {FLOW.map((f, i) => (
                <div key={i} className="spotlight-card relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: f.green ? "#f8fafc" : "white", border: `1px solid ${f.green ? "#bfdbfe" : "#e5e7eb"}`, boxShadow: f.green ? "0 2px 16px rgba(158,240,26,0.08)" : "none" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 relative z-10"
                    style={{ background: f.green ? "#9ef01a" : "#f3f4f6", color: f.green ? "#111827" : "#6b7280" }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-black text-xl" style={{ color: f.green ? "#2563eb" : "#d1d5db" }}>{f.dir}</span>
                      <Badge variant={f.green ? "success" : "outline"} className="text-xs">{f.tag}</Badge>
                    </div>
                    <p className="text-carbon-700 font-medium text-sm">{f.label}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* PACKAGES OVERVIEW */}
      <section id="packages" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">15 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Engagement Options</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Partnership Engagement</h2>
            <p className="text-carbon-500 mb-2">For this event we allocated <strong className="text-carbon-900">8–10 partnerships/speaking slots only</strong>.</p>
            <p className="text-carbon-500 mb-8">8–10 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.</p>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="rounded-xl p-5 mb-8" style={{ background: "#f8fafc", border: "1px solid #bfdbfe" }}>
              <p className="text-sm text-carbon-600 mb-1">Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="font-bold text-carbon-900">
                You invest to get{" "}
                <AnimatedGradientText className="font-black">Audience Insights</AnimatedGradientText>
                {" "}and access to{" "}
                <AnimatedGradientText className="font-black">High-Intent Pre-Qualified Prospects.</AnimatedGradientText>
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <AnimatedSection delay={130}>
              <div className="bento-card relative p-6 h-full" style={{ borderTop: "4px solid #9ef01a" }}>
                <Badge variant="success" className="mb-3 text-xs">Only ONE Brand Partner Per Event</Badge>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Brand Integration Partnership</h3>
                <p className="text-sm text-carbon-500 mb-4">8–12 weeks integration</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6">8–12 weeks integrated presence with <strong className="text-carbon-900">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong></p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <AnimatedGradientText className="text-3xl font-black tracking-tight">€3,750</AnimatedGradientText>
                  </div>
                  <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" className="text-sm px-4 py-2">Claim Slot →</ShimmerButton>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <div className="bento-card p-6 h-full" style={{ borderTop: "4px solid #e5e7eb" }}>
                <Badge variant="outline" className="mb-3 text-xs">Limited Slots Per Industry</Badge>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Speaking & Visibility</h3>
                <p className="text-sm text-carbon-500 mb-4">Per speaking slot</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6"><strong className="text-carbon-900">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience and collect leads without full sponsorship.</p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black text-carbon-900 tracking-tight">€1,550</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border border-carbon-200 text-carbon-700 hover:border-blue-200 transition-all">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA block — NO button */}
          <AnimatedSection delay={250}>
            <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: "#f8fafc", border: "2px solid #bfdbfe" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#3d8000" }}>Ready to Reach This Audience?</p>
              <h2 className="font-black text-carbon-900 leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}>
                Speaking &{" "}
                <AnimatedGradientText className="font-black">Partnership Engagement</AnimatedGradientText>
              </h2>
              <p className="text-carbon-500 max-w-lg mx-auto">
                8–10 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.
              </p>
            </div>
          </AnimatedSection>

          {/* READY TO PARTNER — directly under CTA */}
          <AnimatedSection delay={320}>
            <div className="mt-5 rounded-2xl border border-carbon-200 bg-white p-6 md:p-8">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#9ef01a" }}>Contact</p>
                <h3 className="text-2xl font-black text-carbon-900 mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h3>
                <p className="text-sm text-carbon-500 mb-5">We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 20th.</p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerColor="rgba(255,255,255,0.4)" shimmerDuration="1.8s" className="text-sm font-bold px-6 py-3">
                  Become a Partner →
                </ShimmerButton>
              </div>
              {/* Benefit boxes — highlighted 2-col grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  { icon: "📡", text: "Data-driven virtual summit — real intent signals" },
                  { icon: "🌍", text: "100% global distribution and media exposure" },
                  { icon: "🎯", text: "Full funnel intent tracking from day one" },
                  { icon: "🔒", text: "Exclusivity per category and jurisdiction" },
                  { icon: "👔", text: "Decision-maker dominant audience (75% founders/execs)" },
                  { icon: "⏱️", text: "Direct access to pre-qualified prospects (0–12 months)" },
                  { icon: "📋", text: "Audience surveyed on jurisdiction, budget & timeline" },
                  { icon: "✅", text: "8–10 selected partners per event — no overcrowding" },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-carbon-200 bg-carbon-50 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group">
                    <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform">{r.icon}</span>
                    <p className="text-xs text-carbon-700 font-semibold leading-snug">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING — BRAND INTEGRATION */}
      <section id="pricing-brand" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fafc" }}>
        <span className="slide-number">16 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Pricing · Brand Integration</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Brand Integration Partnership</h2>
            <p className="text-carbon-500 mb-8">An 8–12 week full summit integration — from pre-event content to summit exposure and post-event data.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-carbon-50 border-b border-carbon-200">
                    <th className="px-4 py-3 text-xs font-bold text-carbon-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-center w-1/4 border-l border-carbon-200" style={{ background: "#eff6ff", color: "#3d8000" }}>GROWTH</th>
                    <th className="px-4 py-3 text-xs font-bold text-carbon-700 uppercase tracking-wide text-center w-1/4 border-l border-carbon-200">STRATEGIC</th>
                  </tr>
                </thead>
                <tbody>
                  {brandRows.map((cat, ci) => (
                    <>
                      <tr key={`hd${ci}`} className="bg-carbon-50 border-t border-carbon-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-carbon-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item, ii) => (
                        <tr key={`${ci}${ii}`} className="border-t border-carbon-100 hover:bg-carbon-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-carbon-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100" style={{ background: "rgba(158,240,26,0.02)" }}><Cell val={item.g} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.s} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative rounded-xl p-6 overflow-hidden" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">GROWTH · Early Bird</p>
                <AnimatedGradientText className="text-4xl font-black tracking-tight">€3,750</AnimatedGradientText>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 20th): <span className="line-through">€4,450</span></p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerDuration="1.6s">Claim Growth Slot →</ShimmerButton>
              </div>
              <div className="relative bento-card p-6 overflow-hidden">
                <BorderBeam size={150} duration={12} colorFrom="#9ef01a" colorTo="#4ade80" borderWidth={1.5} />
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">STRATEGIC · Early Bird</p>
                <span className="text-4xl font-black text-carbon-900 tracking-tight">€4,950</span>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 20th): <span className="line-through">€5,950</span></p>
                <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold border border-carbon-200 text-carbon-700 hover:border-blue-200 hover:text-carbon-900 transition-all">Claim Strategic Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING — SPEAKING */}
      <section id="pricing-speaking" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fafc" }}>
        <span className="slide-number">17 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Pricing · Speaking</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Visibility</h2>
            <p className="text-carbon-500 mb-8">Secure your speaking slot without a full partnership commitment. Limited slots per industry.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-carbon-50 border-b border-carbon-200">
                    <th className="px-4 py-3 text-xs font-bold text-carbon-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-center w-1/4 border-l border-carbon-200" style={{ background: "#eff6ff" }}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#3d8000" }}>PREMIUM</span>
                        <Badge variant="lime" className="text-xs">✦ Best Choice</Badge>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-xs font-bold text-carbon-700 uppercase tracking-wide text-center w-1/4 border-l border-carbon-200">BUSINESS</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingRows.map((cat, ci) => (
                    <>
                      <tr key={`sh${ci}`} className="bg-carbon-50 border-t border-carbon-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-carbon-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item: { label: string; p: string; b: string }, ii: number) => (
                        <tr key={`s${ci}${ii}`} className="border-t border-carbon-100 hover:bg-carbon-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-carbon-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100" style={{ background: "rgba(158,240,26,0.03)" }}><Cell val={item.p} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.b} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative bento-card p-6 overflow-hidden" style={{ border: "2px solid #9ef01a", background: "#f8fafc" }}>
                <BorderBeam size={120} duration={10} colorFrom="#9ef01a" colorTo="#4ade80" borderWidth={2} />
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest">PREMIUM · Early Bird</p>
                  <Badge variant="lime" className="text-xs">✦ Best Choice</Badge>
                </div>
<AnimatedGradientText className="text-4xl font-black tracking-tight">€1,950</AnimatedGradientText>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 20th): <span className="line-through">€2,450</span></p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerDuration="1.6s">Claim Premium Slot →</ShimmerButton>
              </div>
              <div className="bento-card p-6">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">BUSINESS · Early Bird</p>
                <span className="text-4xl font-black text-carbon-900 tracking-tight">€1,550</span>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 20th): <span className="line-through">€1,950</span></p>
                <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold border border-carbon-200 text-carbon-700 hover:border-blue-200 hover:text-carbon-900 transition-all">Claim Business Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

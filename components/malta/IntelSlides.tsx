"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

/* ── Exact colours from HTML files ── */
const G = { green: '#8FD600', greenMid: '#C8F000', gray: '#6B7280', border: '#E5E7EB', light: '#F7F7F5' };

/* ── Funnel steps (from Funnel_Flow.html) ── */
const funnelSteps = [
  { id:1, label:'TRAFFIC', color:'#8FD600', bg:'#F2FFD6', border:'#C5EF6A', detail:'Targeted Video Ads', description:'Paid video ads reach the right audience by geography, interest, and background — driving qualified traffic to FBS.', tags:['Reach Relevant Audience','Specific Geo','By Interest, Age, Background'] },
  { id:2, label:'FBS WEBSITE', color:'#D97706', bg:'#FFFBEB', border:'#FCD34D', detail:'Website Sign-up', description:'Visitors land on the Freedom Business Summit USA page — a high-converting registration with a clear offer.', tags:['Landing Page','Free Access CTA','4.9★ Social Proof'] },
  { id:3, label:'SURVEY FUNNEL', color:'#7C3AED', bg:'#F5F3FF', border:'#C4B5FD', detail:'Mobility Score Index', description:'Leads calculate their Mobility Score — unlocking the Participants Playbook and segmenting themselves by readiness.', tags:['Mobility Score Quiz','Playbook Unlock','500+ completed'] },
  { id:4, label:'AUDIENCE INSIGHTS', color:'#0369A1', bg:'#EFF8FF', border:'#BAE6FD', detail:'Highly Targeted Output', description:'A qualified, opted-in lead list enriched with geo, interests, score tier, and demographics — with full ROI tracking.', tags:['Geo & Demographics','Interest Segments','Opt-in Verified Data'] },
];

/* ── Insight categories (from Audience_Insights.html) ── */
const insightCats = [
  { title:'Geography', color:'#8FD600', bg:'#F2FFD6', border:'#C5EF6A', items:['Country & City','Southeast Asia Focus','Region Heatmap','Timezone Clusters'] },
  { title:'Demographics', color:'#D97706', bg:'#FFFBEB', border:'#FCD34D', items:['Age Groups','Gender Split','Education Level','Income Bracket'] },
  { title:'Interests', color:'#7C3AED', bg:'#F5F3FF', border:'#C4B5FD', items:['Investment Topics','Business Stage','Travel Frequency','Event History'] },
  { title:'Index Score', color:'#0369A1', bg:'#EFF8FF', border:'#BAE6FD', items:['Engagement Score','Lead Quality Tier','Segment Tag','Follow-up Priority'] },
];

/* ── Funnel stages for bars (from Audience_Insights.html) ── */
const funnelBars = [
  { label:'Traffic', sub:'Paid Video Ads', pct:100, color:'#8FD600', bg:'#F2FFD6' },
  { label:'Website Visits', sub:'Landing Page', pct:76, color:'#D97706', bg:'#FFFBEB' },
  { label:'Survey Starts', sub:'Sign-up Form', pct:56, color:'#7C3AED', bg:'#F5F3FF' },
  { label:'Qualified Leads', sub:'Opted-in Data', pct:38, color:'#0369A1', bg:'#EFF8FF' },
];

function StepCard({ step, index }: { step: typeof funnelSteps[0]; index: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ flex:1, minWidth:0, background: hov ? step.bg : '#fff', border:`1.5px solid ${hov ? step.border : G.border}`, borderRadius:14, padding:'20px 16px', transition:'all 0.2s', position:'relative', boxShadow: hov ? `0 8px 28px ${step.color}18` : '0 1px 4px rgba(0,0,0,0.06)' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background: hov ? step.color : 'transparent', borderRadius:'14px 14px 0 0', transition:'background 0.2s' }} />
      <div style={{ position:'absolute', top:10, right:12, fontSize:10, fontWeight:700, color:step.color, opacity:0.35, letterSpacing:1 }}>0{index+1}</div>
      <div style={{ fontSize:10, fontWeight:800, letterSpacing:1.5, color:step.color, marginBottom:5, textTransform:'uppercase' as const }}>{step.label}</div>
      <div style={{ display:'inline-block', background:step.bg, border:`1px solid ${step.border}`, color:step.color, fontSize:10, fontWeight:600, padding:'2px 8px', borderRadius:20, marginBottom:9, letterSpacing:0.3 }}>{step.detail}</div>
      <p style={{ fontSize:11, color:G.gray, lineHeight:1.55, marginBottom:10 }}>{step.description}</p>
      <div style={{ display:'flex', flexDirection:'column' as const, gap:5 }}>
        {step.tags.map((tag,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
            <div style={{ width:4, height:4, borderRadius:'50%', background:step.color, flexShrink:0 }} />
            <span style={{ fontSize:11, color:'#374151', fontWeight:500 }}>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightCard({ cat }: { cat: typeof insightCats[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ flex:1, background: hov ? cat.bg : '#fff', border:`1.5px solid ${hov ? cat.border : G.border}`, borderRadius:12, padding:'15px 13px', transition:'all 0.2s', boxShadow: hov ? `0 4px 18px ${cat.color}16` : '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:11 }}>
        <div style={{ width:28, height:28, borderRadius:7, background:cat.bg, border:`1px solid ${cat.border}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:14 }}>
          {cat.title==='Geography'?'🌍':cat.title==='Demographics'?'👥':cat.title==='Interests'?'⭐':'📊'}
        </div>
        <span style={{ fontSize:11, fontWeight:800, color:cat.color, letterSpacing:0.7 }}>{cat.title.toUpperCase()}</span>
      </div>
      <div style={{ display:'flex', flexDirection:'column' as const, gap:6 }}>
        {cat.items.map((item,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
            <div style={{ width:14, height:14, borderRadius:3, background:cat.bg, border:`1px solid ${cat.border}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg width="7" height="7"><polyline points="1,3.5 2.5,5.5 6,1.5" stroke={cat.color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize:11, color:'#374151', fontWeight:500 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimBar({ bar, animate }: { bar: typeof funnelBars[0]; animate: boolean }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setW(bar.pct), 200);
    return () => clearTimeout(t);
  }, [animate, bar.pct]);
  return (
    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
      <div style={{ width:80, flexShrink:0, textAlign:'right' as const }}>
        <div style={{ fontSize:11, fontWeight:700, color:'#111' }}>{bar.label}</div>
        <div style={{ fontSize:10, color:G.gray }}>{bar.sub}</div>
      </div>
      <div style={{ flex:1, height:30, background:G.light, borderRadius:6, overflow:'hidden', position:'relative' as const }}>
        <div style={{ width:`${w}%`, height:'100%', background:bar.color, borderRadius:6, transition:'width 1s cubic-bezier(0.22,1,0.36,1)', display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight:8, minWidth:36 }}>
          <span style={{ fontSize:11, fontWeight:800, color:'#fff' }}>{bar.pct}%</span>
        </div>
      </div>
    </div>
  );
}

/* ── Prospect table ── */
const LEADS = [
  { name:"James W.", flag:"🇺🇸", country:"USA", timeline:"1–3 mo", jurisdiction:"Portugal Golden Visa", income:"$350K–$500K", tier:"HOT", score:24 },
  { name:"Sarah M.", flag:"🇺🇸", country:"USA", timeline:"1–3 mo", jurisdiction:"Caribbean CBI — Grenada", income:"$250K–$400K", tier:"HOT", score:22 },
  { name:"Raj K.", flag:"🇮🇳", country:"India", timeline:"1–3 mo", jurisdiction:"EB-5 / Green Card", income:"$500K–$1M+", tier:"HOT", score:23 },
  { name:"Nguyen T.", flag:"🇻🇳", country:"Vietnam", timeline:"1–3 mo", jurisdiction:"EB-5 Investor Visa", income:"$500K–$1M+", tier:"HOT", score:21 },
  { name:"Emily R.", flag:"🇺🇸", country:"USA", timeline:"3–6 mo", jurisdiction:"Greece Golden Visa", income:"$350K–$500K", tier:"HOT", score:20 },
  { name:"Michael B.", flag:"🇺🇸", country:"USA", timeline:"3–6 mo", jurisdiction:"Malta CBI Program", income:"$500K–$1M+", tier:"HOT", score:19 },
  { name:"Arjun S.", flag:"🇮🇳", country:"India", timeline:"3–6 mo", jurisdiction:"EB-5 Regional Center", income:"$350K–$500K", tier:"HOT", score:18 },
  { name:"Lisa T.", flag:"🇺🇸", country:"USA", timeline:"3–6 mo", jurisdiction:"Portugal NHR / D7 Visa", income:"$150K–$350K", tier:"WARM", score:16 },
  { name:"Tuan N.", flag:"🇻🇳", country:"Vietnam", timeline:"6–12 mo", jurisdiction:"EB-5 Direct Investment", income:"$350K–$500K", tier:"WARM", score:15 },
  { name:"David L.", flag:"🇺🇸", country:"USA", timeline:"6–12 mo", jurisdiction:"Caribbean CBI — St. Kitts", income:"$250K–$400K", tier:"WARM", score:14 },
  { name:"Priya M.", flag:"🇮🇳", country:"India", timeline:"6–12 mo", jurisdiction:"EB-5 / Investor Visa", income:"$500K–$1M+", tier:"WARM", score:13 },
  { name:"Robert C.", flag:"🇺🇸", country:"USA", timeline:"12 mo+", jurisdiction:"Portugal D7 / NHR", income:"$150K–$350K", tier:"COLD", score:10 },
];
const MASKS = [
  { email:"james.w●●●@gmail.com", wa:"+1 (650) ●●●-●●●●" },
  { email:"sarah.m●●●@out●.com", wa:"+1 (415) ●●●-●●●●" },
  { email:"raj.k●●●@●●.in", wa:"+91 98●● ●●●●●●" },
  { email:"nguyen.t●●●@●●.vn", wa:"+84 90●● ●●●●●●" },
  { email:"emily.r●●●@gmail.com", wa:"+1 (646) ●●●-●●●●" },
  { email:"m.b●●●@gmail.com", wa:"+1 (212) ●●●-●●●●" },
  { email:"arjun.s●●●@●●.in", wa:"+91 95●● ●●●●●●" },
  { email:"lisa.t●●●@gmail.com", wa:"+1 (917) ●●●-●●●●" },
  { email:"tuan.n●●●@●●.vn", wa:"+84 91●● ●●●●●●" },
  { email:"david.l●●●@gmail.com", wa:"+1 (310) ●●●-●●●●" },
  { email:"priya.m●●●@●●.in", wa:"+91 97●● ●●●●●●" },
  { email:"robert.c●●●@gmail.com", wa:"+1 (347) ●●●-●●●●" },
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
      {/* ── SECTION 09: FBS Index Score Funnel (from Funnel_Flow.html) ── */}
      <section id="funnel" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">09 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ background:'#0D0D0D', borderRadius:7, padding:'4px 10px', fontSize:11, fontWeight:900, color:'#C8F000', letterSpacing:2 }}>FS</div>
              <span style={{ fontSize:11, fontWeight:700, color:G.gray, letterSpacing:2.5 }}>FREEDOM BUSINESS SUMMIT</span>
            </div>
            <h2 className="font-black text-carbon-900 mb-3" style={{ fontSize:'clamp(24px, 3.5vw, 40px)', letterSpacing:-1, lineHeight:1.05 }}>
              FBS: <span style={{ background:'#0D0D0D', color:'#C8F000', padding:'2px 10px', borderRadius:6, display:'inline-block' }}>INDEX SCORE</span> FUNNEL &amp; INSIGHTS
            </h2>
            <p style={{ fontSize:14, color:G.gray, lineHeight:1.65, maxWidth:680, marginBottom:32 }}>
              A purpose-built funnel — <strong style={{ color:'#0D0D0D' }}>targeted ads → website signup → data-rich survey → segmented follow-ups</strong> — turns traffic into a qualified, opt-in lead list.
            </p>
          </AnimatedSection>

          {/* Step cards row */}
          <AnimatedSection delay={80}>
            <div style={{ display:'flex', alignItems:'stretch', gap:0, marginBottom:20 }}>
              {funnelSteps.map((step, i) => (
                <div key={step.id} style={{ display:'flex', alignItems:'stretch', flex:1 }}>
                  <StepCard step={step} index={i} />
                  {i < funnelSteps.length - 1 && (
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:32, flexShrink:0 }}>
                      <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                        <line x1="0" y1="7" x2="22" y2="7" stroke="#D1D5DB" strokeWidth="2"/>
                        <polygon points="22,2.5 32,7 22,11.5" fill="#D1D5DB"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ height:5, borderRadius:99, background:G.light, overflow:'hidden', display:'flex', marginBottom:7 }}>
              {funnelSteps.map((s,i) => <div key={i} style={{ flex:1, background:s.color, opacity:0.65+i*0.09 }} />)}
            </div>
            <div style={{ display:'flex' }}>
              {funnelSteps.map((s,i) => (
                <div key={i} style={{ flex:1 }}>
                  <span style={{ fontSize:9, fontWeight:700, color:s.color, letterSpacing:0.5, textTransform:'uppercase' as const }}>{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 10: Audience Insights Output (from Audience_Insights.html) ── */}
      <section id="intel" className="slide-section py-14 border-b border-carbon-100 bg-white" ref={ref}>
        <span className="slide-number">10 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ background:'#0D0D0D', borderRadius:7, padding:'4px 10px', fontSize:11, fontWeight:900, color:'#C8F000', letterSpacing:2 }}>FS</div>
              <span style={{ fontSize:11, fontWeight:700, color:G.gray, letterSpacing:2.5 }}>FREEDOM BUSINESS SUMMIT</span>
            </div>
            <h2 className="font-black text-carbon-900 mb-3" style={{ fontSize:'clamp(22px, 3vw, 38px)', letterSpacing:-0.5, lineHeight:1.1 }}>
              AUDIENCE <span style={{ background:'#0D0D0D', color:'#C8F000', padding:'2px 10px', borderRadius:6 }}>INSIGHTS</span> OUTPUT
            </h2>
            <p style={{ fontSize:14, color:G.gray, lineHeight:1.65, maxWidth:580, marginBottom:32 }}>
              Every lead captured through the FBS funnel is enriched with structured data — geo, demographics, interests, and a proprietary Index Score — ready for targeting and ROI measurement.
            </p>
          </AnimatedSection>

          {/* Two-column layout: bars + insight cards */}
          <AnimatedSection delay={80}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:20, alignItems:'start' }}>
              {/* Left: conversion funnel bars */}
              <div style={{ background:'#fff', border:`1.5px solid ${G.border}`, borderRadius:16, padding:'22px 20px', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize:10, fontWeight:800, color:G.gray, letterSpacing:2, marginBottom:20 }}>CONVERSION FUNNEL</div>
                <div style={{ display:'flex', flexDirection:'column' as const, gap:0 }}>
                  {funnelBars.map((bar, i) => (
                    <div key={i}>
                      <AnimBar bar={bar} animate={animated} />
                      {i < funnelBars.length-1 && (
                        <div style={{ marginLeft:90, height:12, display:'flex', alignItems:'center' }}>
                          <svg width="10" height="12" viewBox="0 0 10 12">
                            <polyline points="5,0 5,8 2,5.5" stroke={G.border} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* Score badge */}
                <div style={{ marginTop:18, padding:'12px 14px', background:'#F2FFD6', border:'1px solid #C5EF6A', borderRadius:12, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:42, height:42, borderRadius:10, background:'#8FD600', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ fontSize:15, fontWeight:900, color:'#fff' }}>8.4</span>
                  </div>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, color:'#374151', marginBottom:2 }}>Avg Lead Quality Score</div>
                    <div style={{ fontSize:11, color:G.gray }}>Opted-in, geo-targeted leads</div>
                  </div>
                </div>
              </div>

              {/* Right: insight cards 2×2 + key outputs */}
              <div style={{ display:'flex', flexDirection:'column' as const, gap:14 }}>
                <div style={{ display:'flex', gap:12 }}>
                  <InsightCard cat={insightCats[0]} />
                  <InsightCard cat={insightCats[1]} />
                </div>
                <div style={{ display:'flex', gap:12 }}>
                  <InsightCard cat={insightCats[2]} />
                  <InsightCard cat={insightCats[3]} />
                </div>
                {/* Key outputs */}
                <div style={{ background:'#fff', border:`1.5px solid ${G.border}`, borderRadius:12, padding:'14px 16px', display:'flex', alignItems:'center', flexWrap:'wrap' as const, gap:8 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:G.gray, letterSpacing:1.5, marginRight:4 }}>KEY OUTPUTS</span>
                  {[
                    { label:'Opt-in Lead List', color:'#8FD600' },
                    { label:'Geo + Interest Tags', color:'#D97706' },
                    { label:'Survey Responses', color:'#7C3AED' },
                    { label:'Index Score / Lead', color:'#0369A1' },
                    { label:'ROI Attribution', color:'#8FD600' },
                  ].map((item,i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:5, background:'#F9FAFB', border:`1.5px solid ${G.border}`, borderRadius:20, padding:'4px 10px' }}>
                      <div style={{ width:6, height:6, borderRadius:'50%', background:item.color }} />
                      <span style={{ fontSize:11, fontWeight:600, color:'#374151' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Playbook banner */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-carbon-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between px-8 py-6" style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)" }}>
                <div>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="font-black text-white" style={{ fontSize: "clamp(14px, 2vw, 20px)", background: "#e05a4e", padding: "2px 10px", borderRadius: 4 }}>PARTICIPANTS PLAYBOOK</span>
                    <span className="font-black text-white" style={{ fontSize: "clamp(14px, 2vw, 20px)", background: "#111", padding: "2px 10px", borderRadius: 4, border: "1px solid #333" }}>FREEDOM SCORE INDEX</span>
                  </div>
                  <p className="font-bold text-white mb-1" style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "#e5e7eb" }}>STRATEGIES, FRAMEWORKS, DATA INSIGHTS</p>
                  <p className="font-bold text-white" style={{ fontSize: "clamp(12px, 1.3vw, 15px)", color: "#9ca3af" }}>CONNECT WITH <strong className="text-white">INDUSTRY EXPERTS, SPEAKERS, ATTENDEES</strong></p>
                  <p className="mt-2 font-bold" style={{ color: "#8FD600", fontSize: "clamp(12px, 1.2vw, 14px)" }}>☆ EXPLORE HOW READY YOU ARE TO GO GLOBAL</p>
                </div>
                <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-6">
                  <div className="rounded-xl overflow-hidden" style={{ width: 90, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", transform: "rotate(-3deg)" }}>
                    <div style={{ background: "linear-gradient(135deg, #f4a090 0%, #e05a4e 100%)", padding: "8px 10px" }}>
                      <p style={{ fontSize: 7, fontWeight: 900, color: "white", opacity: 0.8 }}>FREEDOM BUSINESS SUMMIT</p>
                      <p style={{ fontSize: 7, fontWeight: 700, color: "white", opacity: 0.7, marginTop: 1 }}>PLAYBOOK</p>
                    </div>
                    <div style={{ background: "#0D0D0D", padding: "6px 10px 10px" }}>
                      <p style={{ fontSize: 10, fontWeight: 900, color: "white", lineHeight: 1.2 }}>FREEDOM BUSINESS SUMMIT 2026</p>
                      <p style={{ fontSize: 7, color: "#8FD600", marginTop: 3 }}>USA MOBILITY EDITION</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden" style={{ width: 90, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", transform: "rotate(2deg)" }}>
                    <div style={{ background: "#0D0D0D", padding: "8px 10px 10px", border: "1px solid #222" }}>
                      <p style={{ fontSize: 9, fontWeight: 900, color: "#8FD600", lineHeight: 1.2 }}>MOBILITY SCORE INDEX</p>
                      <p style={{ fontSize: 7, color: "#6b7280", marginTop: 3 }}>USA EDITION</p>
                      <p style={{ fontSize: 7, color: "#4b5563", marginTop: 2 }}>PLAN B · RELOCATION · GLOBAL STRUCTURE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer divider */}
            <div style={{ marginTop:20, paddingTop:16, borderTop:`1px solid ${G.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span style={{ fontSize:11, color:G.gray }}>Participants Playbook · Score Index Dataset · Segmented CRM Export</span>
              <div style={{ background:'#0D0D0D', borderRadius:7, padding:'4px 10px', fontSize:10, fontWeight:900, color:'#C8F000', letterSpacing:1.5 }}>FREEDOM SUMMIT</div>
            </div>
          </AnimatedSection>

          {/* Prospect table */}
          <AnimatedSection delay={200}>
            <div className="rounded-2xl overflow-hidden border border-carbon-200 bg-white mt-8">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-carbon-100" style={{ background:"#111827" }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color:"#9ef01a" }}>Partner Audience Intelligence</p>
                  <p className="text-sm font-bold text-white">FBS USA 2026 — Prospect Database</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background:"rgba(158,240,26,0.15)", color:"#9ef01a" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 animate-pulse" />Full Consent · GDPR
                  </div>
                  <div className="text-xs px-2.5 py-1.5 rounded-full font-medium" style={{ background:"rgba(255,255,255,0.08)", color:"#9ca3af" }}>364+ Records</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div style={{ minWidth:880 }}>
                  <div className="grid text-xs font-bold text-carbon-400 uppercase tracking-wider px-4 py-2.5 border-b border-carbon-100 bg-carbon-50"
                    style={{ gridTemplateColumns:"140px 80px 72px 155px 120px 120px 90px 64px 50px" }}>
                    <span>Name</span><span>Country</span><span>Timeline</span><span>Jurisdiction</span><span>Income</span>
                    <span className="text-lime-600">📧 Email</span><span className="text-lime-600">💬 WA</span>
                    <span className="text-center">Tier</span><span className="text-center">Score</span>
                  </div>
                  {LEADS.map((lead,i) => (
                    <div key={i} className="grid items-center px-4 py-3 border-b border-carbon-50 hover:bg-carbon-50 transition-colors"
                      style={{ gridTemplateColumns:"140px 80px 72px 155px 120px 120px 90px 64px 50px" }}>
                      <div>
                        <p className="font-semibold text-sm text-carbon-900">{lead.name}</p>
                        <p className="text-xs text-carbon-400">{lead.flag}</p>
                      </div>
                      <span className="text-xs text-carbon-600">{lead.country}</span>
                      <span className="text-xs text-carbon-600">{lead.timeline}</span>
                      <span className="text-xs text-carbon-700 font-medium">{lead.jurisdiction}</span>
                      <span className="text-xs text-carbon-500">{lead.income}</span>
                      <div className="relative h-5">
                        <span className="text-xs font-mono text-carbon-600 select-none absolute top-0" style={{ filter:"blur(3.5px)", userSelect:"none" }}>{MASKS[i].email}</span>
                        <span className="absolute inset-0 flex items-center text-xs font-semibold" style={{ color:"#9ef01a" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-1 flex-shrink-0" />Included
                        </span>
                      </div>
                      <div className="relative h-5">
                        <span className="text-xs font-mono text-carbon-600 select-none absolute top-0" style={{ filter:"blur(3.5px)", userSelect:"none" }}>{MASKS[i].wa}</span>
                        <span className="absolute inset-0 flex items-center text-xs font-semibold" style={{ color:"#9ef01a" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-1 flex-shrink-0" />Included
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: lead.tier==="HOT" ? "#fef2f2" : "#fffbeb", color: lead.tier==="HOT" ? "#dc2626" : "#d97706" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: lead.tier==="HOT" ? "#dc2626" : "#f59e0b" }} />{lead.tier}
                        </span>
                      </div>
                      <div className="text-center"><span className="font-black text-sm text-carbon-900">{lead.score}</span></div>
                    </div>
                  ))}
                  {/* Consent row */}
                  <div className="grid items-center px-4 py-2.5 bg-lime-50 border-t border-lime-200"
                    style={{ gridTemplateColumns:"140px 80px 72px 155px 120px 120px 90px 64px 50px" }}>
                    <div className="col-span-5 text-xs text-carbon-500 font-medium">✅ All contact data is <strong className="text-carbon-800">opt-in consent</strong> — collected at registration</div>
                    <div className="text-xs font-bold" style={{ color:"#3d8000" }}>☑ Consent</div>
                    <div className="text-xs font-bold" style={{ color:"#3d8000" }}>☑ Consent</div>
                    <div className="col-span-2 text-xs text-carbon-400">GDPR</div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-carbon-50 flex flex-wrap items-center justify-between gap-3 border-t border-carbon-100">
                <div className="flex items-center gap-5 flex-wrap text-xs text-carbon-500">
                  <span><strong className="text-carbon-900">364+</strong> prospects</span>
                  <span><strong style={{ color:"#dc2626" }}>50%</strong> HOT</span>
                  <span><strong className="text-carbon-900">12</strong> records · 9 fields each</span>
                  <span className="font-semibold" style={{ color:"#3d8000" }}>✓ Email + WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-carbon-400">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />Full consent · Airtable or CSV
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

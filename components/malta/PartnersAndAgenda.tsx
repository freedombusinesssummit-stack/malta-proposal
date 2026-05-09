"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const PARTNERS = [
  "Estonia e-Residency","Insured Nomads","Binance","Globalization Partners",
  "Startup Island","In.Corp","Evercoach by Mindvalley","Spaces",
  "SafetyWing","Upwork","Ruul","Cinvest","NomadCruise","EC Holdings","TravelMBA",
];

const MEDIA = [
  "Khaleej Times","Gulf News","EIN Presswire","Associated Press",
  "Al Bayan","Hala London TV","Thailand Business News","ASEAN Briefing","CoinMarketCap",
];

const SPEAKERS = [
  { init: "DD", name: "Denys Dovgal", role: "FBS · Organizer" },
  { init: "PM", name: "Philippe A. May", role: "EC Holdings · SG" },
  { init: "SZ", name: "Sergei Zunajev", role: "e-Residency Estonia" },
  { init: "DC", name: "David Cantor", role: "CitizenRemote · Italy" },
  { init: "WW", name: "William Wang", role: "RNS.ID · Palau" },
  { init: "MC", name: "Max Chernov", role: "YouTuber · Singapore" },
  { init: "AR", name: "Alex Recouso", role: "Citizen X Global" },
  { init: "MU", name: "Mohammed Ungsi", role: "Embassy Indonesia · UAE" },
];

const FLOW_STEPS = [
  { n: "1", dir: "→", label: "You Receive", text: "Direct exposure to 500+ qualified founders, investors & HNWIs interested in Malta" },
  { n: "2", dir: "←", label: "You Deliver", text: "Keynote or Panel Talk to showcase your expertise to decision-makers" },
  { n: "3", dir: "→", label: "You Receive", text: "Lead Generation with Pre-Qualified Prospects filtered by programme, income & timeline" },
  { n: "4", dir: "←", label: "You Deliver", text: "Custom video invitation for maximum pre-event exposure across our 10K+ audience" },
  { n: "5", dir: "→", label: "You Receive", text: "Positioning as premium service provider alongside official Residency Malta Agency" },
  { n: "6", dir: "→", label: "You Receive", text: "Custom question block in our Malta Mobility Index survey funnel" },
];

const DAY1 = [
  { num: 1, time: "11:00 AM EST", org: "Malta Enterprise", title: "Inbound Investment: Why Malta", desc: "Industries in focus · EU market access · Regulation · Funding · Government support", type: "GOV" },
  { num: 2, time: "11:45 AM EST", org: "Finance Malta", title: "Financial Infrastructure & EU Market Access", desc: "Malta's capital markets ecosystem, banking access, and EU financial gateway", type: "GOV" },
  { num: 3, time: "12:30 PM EST", org: "Malta Venture Capital (MVC)", title: "Startup Ecosystem in Malta", desc: "MVC invests in high-potential startups driving economic diversification and social impact", type: "GOV" },
  { num: 4, time: "1:15 PM EST", org: "Residency Malta Agency", title: "Malta Residency Programmes: MPRP, Nomad & Family Office", desc: "Full overview of Malta's residency pathways — MPRP · Nomad Permit · Startup Permit · Family Office Residency", type: "GOV" },
];

const DAY2 = [
  { num: 5, time: "11:00 AM EST", org: "Residency & Citizenship Advisory", title: "Pathways to EU Residency & Citizenship via Malta", desc: "Practical guide for HNWIs — residency by investment, MPRP thresholds, timelines, and long-term EU access", type: "COMMERCIAL" },
  { num: 6, time: "11:45 AM EST", org: "Corporate Structuring", title: "Structuring Your Corporate Presence & EU Market Access", desc: "How to incorporate in Malta, structure holding companies, and access the EU single market", type: "COMMERCIAL" },
  { num: 7, time: "12:30 PM EST", org: "Tax & Legal", title: "Tax Optimization & Legal Frameworks for International Founders", desc: "Malta's 6/7ths refund system, participation exemption, double tax treaties, and practical structuring", type: "COMMERCIAL" },
  { num: 8, time: "1:15 PM EST", org: "iGaming & Compliance", title: "iGaming: Licensing, Payments & Compliance in Practice", desc: "MGA licensing, payment processing, AML/KYC — what it takes to run a regulated gaming business", type: "COMMERCIAL" },
];

export default function PartnersAndAgenda() {
  return (
    <>
      {/* Flow */}
      {/* Previous Partners */}
      <section id="partners-prev" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">11 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Track Record</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-carbon-900 mb-2">Our Previous Partners</h2>
            <p className="text-carbon-500 mb-8">Trusted by global brands across mobility, fintech, real estate and legal sectors</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative overflow-hidden mb-8">
              <div className="flex gap-2 flex-wrap mb-2">
                {PARTNERS.map((p, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-carbon-200 text-carbon-700 bg-white hover:border-blue-200 transition-colors cursor-default">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xs font-bold uppercase tracking-widest text-carbon-400 mb-3">Our Previous Speakers</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {SPEAKERS.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-carbon-100 bg-white">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs text-white flex-shrink-0"
                    style={{ background: `hsl(${125 + i * 20}, 45%, 35%)` }}>
                    {s.init}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-carbon-900 leading-tight">{s.name}</p>
                    <p className="text-xs text-carbon-400">{s.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-xs font-bold uppercase tracking-widest text-carbon-400 mb-3">Media Coverage</p>
            <div className="flex flex-wrap gap-2">
              {MEDIA.map((m, i) => (
                <span key={i} className="px-3 py-1.5 text-xs text-carbon-500 border border-carbon-200 rounded">{m}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">12 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Summit Agenda</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-carbon-900 mb-2">23–24 June 2026</h2>
            <p className="text-carbon-500 mb-2">Virtual Summit · Government Entities on Day 1 · Commercial Agents on Day 2</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-carbon-100 text-carbon-700">🕐 11:00 AM – 3:00 PM EST</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-carbon-100 text-carbon-700">⏱ 45 min per session</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">🇺🇸 Primary Audience: USA</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Day 1 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-red-50 text-red-700 border border-red-200 whitespace-nowrap">🏛 GOV</span>
                  <h3 className="font-black text-carbon-900 text-lg leading-tight">Day 1: Malta as a Strategic Solution</h3>
                </div>
                <div className="space-y-3">
                  {DAY1.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-carbon-200 bg-white p-4 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <span className="font-black text-2xl text-carbon-100 flex-shrink-0 leading-none w-8">{s.num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <p className="text-xs font-bold uppercase tracking-widest text-red-600">{s.org}</p>
                          <span className="text-xs font-semibold text-carbon-400 bg-carbon-50 px-2 py-0.5 rounded">{s.time}</span>
                        </div>
                        <p className="font-black text-carbon-900 text-sm leading-snug">{s.title}</p>
                        <p className="text-xs text-carbon-500 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">🏢 ASP</span>
                  <h3 className="font-black text-carbon-900 text-lg leading-tight">Day 2: Residency, Incorporation &amp; Tax Optimization</h3>
                </div>
                <div className="space-y-3">
                  {DAY2.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-carbon-200 bg-white p-4 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <span className="font-black text-2xl text-carbon-100 flex-shrink-0 leading-none w-8">{s.num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{s.org}</p>
                          <span className="text-xs font-semibold text-carbon-400 bg-carbon-50 px-2 py-0.5 rounded">{s.time}</span>
                        </div>
                        <p className="font-black text-carbon-900 text-sm leading-snug">{s.title}</p>
                        <p className="text-xs text-carbon-500 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

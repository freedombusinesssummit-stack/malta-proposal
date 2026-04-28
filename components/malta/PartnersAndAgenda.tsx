"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  { num: 1, org: "Malta Enterprise", title: "Inbound Investment: Why Malta", desc: "Industries in focus · EU market access · Regulation · Funding · Government support", type: "GOV" },
  { num: 2, org: "Finance Malta", title: "Capitals: Financial Infrastructure & Market Access", desc: "Malta's capital markets ecosystem, banking access, and EU financial gateway", type: "GOV" },
  { num: 3, org: "Malta Venture Capital (MVC)", title: "Startup in Malta", desc: "MVC invests in high-potential startups driving economic diversification and social impact", type: "GOV" },
  { num: 4, org: "Residency Malta Agency", title: "Relocation & Residency Programmes", desc: "MPRP · Nomad Permit · Startup Permit · Family Office Residency", type: "GOV" },
];

const DAY2 = [
  { num: 5, org: "Corporate Structuring", title: "Structuring Your Corporate Presence & EU Market Access", desc: "How to incorporate in Malta, structure holding companies, and access the EU single market", type: "COMMERCIAL" },
  { num: 6, org: "Tax & Legal", title: "Tax Optimization & Legal Frameworks for International Founders", desc: "Malta's 6/7ths refund system, participation exemption, double tax treaties, and practical structuring", type: "COMMERCIAL" },
  { num: 7, org: "iGaming & Compliance", title: "iGaming: Licensing, Payments & Compliance in Practice", desc: "MGA licensing, payment processing, AML/KYC — what it takes to run a regulated gaming business", type: "COMMERCIAL" },
  { num: 8, org: "Fintech & Digital Assets", title: "Digital-First Assets: Fintech, SaaS & Digital-Native Companies", desc: "Structuring Fintech, SaaS, and crypto companies under Malta's MFSA-regulated VFA framework", type: "COMMERCIAL" },
];

export default function PartnersAndAgenda() {
  return (
    <>
      {/* Flow */}
      <section id="flow" className="slide-section py-14 bg-white border-b border-carbon-100">
        <span className="slide-number">10 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Engagement Flow</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2">How the Partnership Works</h2>
            <p className="text-carbon-500 mb-8">A structured 8–12 week journey — from pre-event exposure to post-event lead delivery</p>
          </AnimatedSection>

          <div className="space-y-2">
            {FLOW_STEPS.map((s, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-carbon-100 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0" style={{ background: "#9ef01a", color: "#111827" }}>
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-lg font-black" style={{ color: s.dir === "→" ? "#9ef01a" : "#d1d5db" }}>{s.dir}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-carbon-400">{s.label}</span>
                    </div>
                    <p className="text-sm font-semibold text-carbon-800">{s.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Partners */}
      <section id="partners-prev" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">11 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Track Record</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2">Our Previous Partners</h2>
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
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2">23–24 June 2026</h2>
            <p className="text-carbon-500 mb-8">Virtual Summit · Government Entities on Day 1 · Commercial Agents on Day 2</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Tabs defaultValue="day1">
              <TabsList className="mb-6 w-full justify-start gap-1 bg-carbon-100 p-1 rounded-xl h-auto">
                <TabsTrigger value="day1" className="rounded-lg text-xs sm:text-sm font-semibold">
                  Day 1: Malta as a Strategic Solution
                </TabsTrigger>
                <TabsTrigger value="day2" className="rounded-lg text-xs sm:text-sm font-semibold">
                  Day 2: Incorporation &amp; Tax Optimization
                </TabsTrigger>
              </TabsList>

              <TabsContent value="day1">
                <div className="space-y-2">
                  {DAY1.map((s, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl border border-carbon-200 p-4 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <span className="font-black text-3xl text-carbon-100 flex-shrink-0 leading-none w-10">{s.num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{s.org}</p>
                          <span className="text-xs px-2 py-0.5 rounded font-bold bg-red-50 text-red-600 border border-red-200">🏛 GOV</span>
                        </div>
                        <p className="font-black text-carbon-900 text-base leading-snug">{s.title}</p>
                        <p className="text-sm text-carbon-500 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="day2">
                <div className="space-y-2">
                  {DAY2.map((s, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl border border-carbon-200 p-4 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <span className="font-black text-3xl text-carbon-100 flex-shrink-0 leading-none w-10">{s.num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{s.org}</p>
                          <span className="text-xs px-2 py-0.5 rounded font-bold bg-blue-50 text-blue-700 border border-blue-200">🏢 COMMERCIAL</span>
                        </div>
                        <p className="font-black text-carbon-900 text-base leading-snug">{s.title}</p>
                        <p className="text-sm text-carbon-500 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

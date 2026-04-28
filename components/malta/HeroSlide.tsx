"use client";
import { useEffect, useState } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

function Countdown() {
  const target = new Date("2026-06-27T11:00:00-05:00").getTime();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-end gap-0.5">
      {[{ val: pad(t.d), label: "days" }, { val: pad(t.h), label: "hrs" }, { val: pad(t.m), label: "min" }, { val: pad(t.s), label: "sec" }].map((seg, i) => (
        <div key={i} className="flex items-end">
          <div className="text-center">
            <div className="font-black text-carbon-900 leading-none tabular-nums" style={{ fontSize: "clamp(36px, 10vw, 64px)", letterSpacing: "-1px" }}>{seg.val}</div>
            <div className="text-xs font-medium text-carbon-400 mt-0.5">{seg.label}</div>
          </div>
          {i < 3 && <span className="font-black mx-1 mb-5" style={{ fontSize: "clamp(28px, 8vw, 48px)", color: "#9ef01a", lineHeight: 1 }}>:</span>}
        </div>
      ))}
    </div>
  );
}

const AVATARS = ["DD","PM","SZ","DC","WW","MC","AR","MU"];

export default function HeroSlide() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);
  const fade = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section id="hero" className="slide-section pt-14 bg-white overflow-x-hidden">
      <span className="slide-number">01 / 18</span>

      <div className="wrap">
        <div className="py-10 md:py-14">

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-5" style={fade(0)}>
            {["27-28 June 2026", "Virtual Event", "Worldwide Online"].map((t, i) => (
              <span key={i} className="pill">{t}</span>
            ))}
          </div>

          {/* Headings — full container width, left-aligned, no maxWidth constraint */}
          <div style={fade(80)}>
            <h1 className="font-black text-carbon-900 leading-tight mb-1 w-full" style={{ fontSize: "clamp(22px, 4vw, 48px)", letterSpacing: "-1.5px" }}>
              Freedom Business Summit 2026
            </h1>
            <h2 className="font-black text-carbon-900 leading-none mb-4 w-full" style={{ fontSize: "clamp(28px, 5.5vw, 62px)", letterSpacing: "-2px", whiteSpace: "nowrap" }}>
              USA Mobility Edition 🇺🇸
            </h2>
            <p className="font-semibold text-carbon-600 leading-snug mb-5 w-full" style={{ fontSize: "clamp(14px, 1.8vw, 20px)" }}>
              A Data-Driven Virtual Summit for Founders, Investors Exploring Inbound & Outbound Strategies
            </p>
          </div>

          <div className="flex flex-col gap-1.5 mb-5" style={fade(200)}>
            {[
              { bold: "2 days", text: "of content you won't find anywhere" },
              { bold: "10+", text: "keynotes and talks by industry experts" },
            ].map((b, i) => (
              <p key={i} className="text-carbon-600 text-sm md:text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#9ef01a" }} />
                <strong className="text-carbon-900">{b.bold}</strong>&nbsp;{b.text}
              </p>
            ))}
          </div>

          <div className="mb-4" style={fade(260)}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold" style={{ background: "#111827", color: "#9ef01a" }}>
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse flex-shrink-0" />
              Get Early Bird Access! Act Fast
            </span>
          </div>

          <div className="mb-7" style={fade(320)}><Countdown /></div>

          <div className="flex flex-wrap gap-3 mb-8" style={fade(380)}>
            <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerColor="rgba(255,255,255,0.5)" shimmerDuration="1.8s" className="text-sm font-bold px-5 py-2.5">
              Partner With Us →
            </ShimmerButton>
            <button onClick={() => document.getElementById("pricing-brand")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-carbon-700 border border-carbon-200 hover:border-lime-300 hover:text-carbon-900 transition-all bg-white">
              View Packages
            </button>
          </div>

          {/* Avatars */}
          <div className="mb-2" style={fade(430)}>
            <div className="flex -space-x-2.5">
              {AVATARS.map((init, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: `hsl(${125 + i * 18}, 50%, 32%)`, zIndex: AVATARS.length - i }}>
                  {init}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2" style={fade(470)}>
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-black text-carbon-900 text-sm">4.9</span>
            <span className="text-carbon-400 text-xs">(Previous Attendees Feedback)</span>
          </div>
        </div>
      </div>

    </section>
  );
}

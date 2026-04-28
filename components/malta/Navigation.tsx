"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "features", label: "Why FBS" },
  { id: "directions", label: "Directions" },
  { id: "topics", label: "Topics" },
  { id: "numbers", label: "Numbers" },
  { id: "audience", label: "Audience" },
  { id: "snapshot", label: "Snapshot" },
  { id: "behavioral", label: "Insights" },
  { id: "intel", label: "Data" },
  { id: "funnel", label: "Funnel" },
  { id: "partners-prev", label: "Partners" },
  { id: "agenda", label: "Agenda" },
  { id: "flow", label: "Flow" },
  { id: "packages", label: "Packages" },
  { id: "pricing-brand", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const mid = window.scrollY + 130;
      for (let i = SLIDES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SLIDES[i].id);
        if (el && el.offsetTop <= mid) { setActive(SLIDES[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.07 });
    document.querySelectorAll(".anim").forEach(el => obs.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${scrolled ? "border-b border-carbon-200 shadow-sm" : "border-b border-transparent"}`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-md flex items-center justify-center font-black text-xs flex-shrink-0" style={{ background: "#9ef01a", color: "#111827" }}>FS</div>
            <span className="font-bold text-carbon-900 text-sm hidden sm:block">Freedom Summit</span>
          </div>

          {/* Nav links desktop */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
            {[
              { id: "about", label: "About" },
              { id: "audience", label: "Audience" },
              { id: "agenda", label: "Agenda" },
              { id: "pricing-brand", label: "Pricing" },
            ].map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`text-sm font-medium transition-colors ${active === l.id ? "text-lime-500" : "text-carbon-500 hover:text-carbon-800"}`}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Right side — progress dots + equal-size CTA */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Progress dots */}
            <div className="hidden xl:flex items-center gap-1">
              {SLIDES.map(s => (
                <button key={s.id} onClick={() => go(s.id)} title={s.label}
                  className="rounded-full border-none p-0 cursor-pointer transition-all duration-300"
                  style={{ width: active === s.id ? "14px" : "6px", height: "6px", background: active === s.id ? "#9ef01a" : "#d1d5db" }} />
              ))}
            </div>

            {/* View Packages — same size as Partner button */}
            <button
              onClick={() => go("pricing-brand")}
              className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg text-sm font-semibold border border-carbon-200 text-carbon-700 hover:border-lime-300 hover:text-carbon-900 transition-all whitespace-nowrap"
            >
              View Packages
            </button>

            {/* Partner CTA */}
            <a
              href="mailto:denis@fsummit.net"
              className="flex items-center justify-center h-9 px-4 rounded-lg text-sm font-bold text-carbon-900 transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "#9ef01a" }}
            >
              Partner With Us
            </a>

            {/* Mobile menu toggle */}
            <button className="lg:hidden p-1 ml-1" onClick={() => setOpen(!open)}>
              <div className="w-5 space-y-1">
                <span className="block h-0.5 bg-carbon-600 transition-all" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "none" }} />
                <span className="block h-0.5 bg-carbon-600" style={{ opacity: open ? 0 : 1 }} />
                <span className="block h-0.5 bg-carbon-600 transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-carbon-100 bg-white py-2">
          {SLIDES.map(s => (
            <button key={s.id} onClick={() => go(s.id)}
              className={`w-full text-left px-6 py-2.5 text-sm font-medium transition-colors ${active === s.id ? "text-lime-500 bg-lime-50" : "text-carbon-600 hover:bg-carbon-50"}`}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

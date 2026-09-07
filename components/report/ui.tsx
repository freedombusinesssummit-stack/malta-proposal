import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Layout primitives — McKinsey-style report shell                     */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  tone?: "light" | "tint";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-[#e3e6ea] ${
        tone === "tint" ? "bg-[#f7f8f9]" : "bg-white"
      }`}
    >
      <div className="rpt-wrap py-14 sm:py-20">
        <div className="max-w-3xl">
          <div className="rpt-eyebrow">{eyebrow}</div>
          <h2 className="rpt-h2 mt-3">{title}</h2>
          {lead ? <p className="rpt-lead mt-4">{lead}</p> : null}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Exhibit({
  n,
  title,
  subtitle,
  source = "Freedom Business Summit 2026 — Malta Event Edition, application data (n = 78 unique respondents).",
  children,
  className = "",
}: {
  n: number | string;
  title: string;
  subtitle?: string;
  source?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`rpt-exhibit ${className}`}>
      <figcaption>
        <div className="rpt-exhibit-no">Exhibit {n}</div>
        <div className="rpt-exhibit-title">{title}</div>
        {subtitle ? <div className="rpt-exhibit-sub">{subtitle}</div> : null}
      </figcaption>
      <div className="mt-6">{children}</div>
      <div className="rpt-source">Source: {source}</div>
    </figure>
  );
}

export function Grid({
  cols = 2,
  children,
}: {
  cols?: 1 | 2 | 3;
  children: ReactNode;
}) {
  const map = { 1: "", 2: "lg:grid-cols-2", 3: "md:grid-cols-2 xl:grid-cols-3" };
  return <div className={`grid gap-6 ${map[cols]}`}>{children}</div>;
}

export function Kpi({
  value,
  unit,
  label,
  note,
}: {
  value: string | number;
  unit?: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="border-t-2 border-[#051c2c] pt-4">
      <div className="flex items-baseline gap-1">
        <span className="rpt-kpi">{value}</span>
        {unit ? <span className="rpt-kpi-unit">{unit}</span> : null}
      </div>
      <div className="mt-2 text-[13px] font-semibold leading-snug text-[#051c2c]">
        {label}
      </div>
      {note ? (
        <div className="mt-1 text-[12px] leading-snug text-[#6b7681]">{note}</div>
      ) : null}
    </div>
  );
}

export function Finding({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 border-t border-[#e3e6ea] pt-6">
      <div className="shrink-0 font-serif text-[26px] leading-none text-[#2251ff]">
        {String(n).padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-[16px] font-semibold leading-snug text-[#051c2c]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#4a5560]">{children}</p>
      </div>
    </div>
  );
}

export function SoWhat({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-8 border-l-[3px] border-[#2251ff] bg-[#f2f5ff] px-6 py-5">
      <div className="rpt-eyebrow text-[#2251ff]">So what</div>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#051c2c]">{children}</p>
    </aside>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 border-l-2 border-[#d7dbe0] pl-4 text-[12.5px] leading-relaxed text-[#6b7681]">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                          */
/* ------------------------------------------------------------------ */

const NAV = [
  { id: "summary", label: "Executive summary" },
  { id: "audience", label: "Who they are" },
  { id: "capital", label: "Income & capital" },
  { id: "geography", label: "Geography" },
  { id: "demand", label: "Programme demand" },
  { id: "readiness", label: "Readiness" },
  { id: "momentum", label: "Momentum" },
  { id: "implications", label: "Implications" },
];

export function ReportNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-[#e3e6ea] bg-white/95 backdrop-blur">
      <div className="rpt-wrap flex h-14 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="h-4 w-[3px] bg-[#2251ff]" />
          <span className="text-[13px] font-semibold tracking-tight text-[#051c2c]">
            Malta Event Report
          </span>
        </a>
        <div className="hidden items-center gap-6 overflow-x-auto lg:flex">
          {NAV.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className="whitespace-nowrap text-[12.5px] text-[#4a5560] transition-colors hover:text-[#2251ff]"
            >
              {i.label}
            </a>
          ))}
        </div>
        <a
          href="https://fsummit.net"
          className="hidden shrink-0 border border-[#051c2c] px-4 py-2 text-[12px] font-semibold text-[#051c2c] transition-colors hover:bg-[#051c2c] hover:text-white sm:block"
        >
          Summit site
        </a>
      </div>
    </nav>
  );
}

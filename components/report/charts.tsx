import type { ReactNode } from "react";

export type Slice = { label: string; value: number; share: number };
export type Segment = { label: string; n: number; avg: number };

/* Exhibit palette — navy → blue → cyan ramp, McKinsey-style */
export const INK = "#051c2c";
export const BLUE = "#2251ff";
export const RAMP = ["#051c2c", "#134a72", "#2251ff", "#4b7dff", "#00a9f4", "#8fb8ff", "#c3d2e6", "#dfe4ea"];

const pctLabel = (n: number) => `${n % 1 === 0 ? n.toFixed(0) : n.toFixed(1)}%`;

/* ------------------------------------------------------------------ */
/*  Horizontal bar list                                                 */
/* ------------------------------------------------------------------ */

export function BarList({
  items,
  color = BLUE,
  emphasis = 0,
  showValue = true,
  max,
}: {
  items: Slice[];
  color?: string;
  /** Index of the bar to render in the accent colour; -1 colours all bars. */
  emphasis?: number;
  showValue?: boolean;
  max?: number;
}) {
  const top = max ?? Math.max(...items.map((i) => i.share));
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={it.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1">
          <span className="text-[13px] leading-snug text-[#051c2c]">{it.label}</span>
          <span className="tabular-nums text-[13px] font-semibold text-[#051c2c]">
            {pctLabel(it.share)}
            {showValue ? (
              <span className="ml-2 font-normal text-[#8a939c]">n={it.value}</span>
            ) : null}
          </span>
          <span className="col-span-2 block h-[10px] w-full bg-[#eef0f2]">
            <span
              className="block h-full"
              style={{
                width: `${(it.share / top) * 100}%`,
                background: emphasis === -1 || i === emphasis ? color : "#b9c4d1",
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  100% stacked bar                                                    */
/* ------------------------------------------------------------------ */

export function SplitBar({ items, colors = RAMP }: { items: Slice[]; colors?: string[] }) {
  return (
    <div>
      <div className="flex h-11 w-full overflow-hidden">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="flex items-center justify-center"
            style={{ width: `${it.share}%`, background: colors[i % colors.length] }}
            title={`${it.label} — ${pctLabel(it.share)}`}
          >
            {it.share >= 8 ? (
              <span className="text-[12px] font-semibold text-white tabular-nums">
                {pctLabel(it.share)}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2 text-[12.5px] text-[#4a5560]">
            <span
              className="h-[10px] w-[10px] shrink-0"
              style={{ background: colors[i % colors.length] }}
            />
            {it.label}
            <span className="tabular-nums font-semibold text-[#051c2c]">
              {pctLabel(it.share)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Donut — single share                                                */
/* ------------------------------------------------------------------ */

export function Donut({
  share,
  caption,
  sub,
  color = BLUE,
}: {
  share: number;
  caption: string;
  sub?: string;
  color?: string;
}) {
  const r = 54;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 140 140" className="h-[128px] w-[128px] shrink-0">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#eef0f2" strokeWidth="16" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="16"
          strokeDasharray={`${(share / 100) * c} ${c}`}
          transform="rotate(-90 70 70)"
        />
        <text
          x="70"
          y="76"
          textAnchor="middle"
          className="fill-[#051c2c]"
          style={{ fontSize: 26, fontWeight: 700 }}
        >
          {Math.round(share)}%
        </text>
      </svg>
      <div>
        <div className="text-[14px] font-semibold leading-snug text-[#051c2c]">{caption}</div>
        {sub ? <div className="mt-1 text-[12.5px] leading-snug text-[#6b7681]">{sub}</div> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dot plot — average score by segment                                 */
/* ------------------------------------------------------------------ */

export function DotPlot({
  items,
  min = 0,
  max = 70,
  benchmark,
  benchmarkLabel = "Average",
}: {
  items: Segment[];
  min?: number;
  max?: number;
  benchmark?: number;
  benchmarkLabel?: string;
}) {
  const pos = (v: number) => ((v - min) / (max - min)) * 100;
  return (
    <div>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.label} className="grid grid-cols-[minmax(120px,0.9fr)_1fr_auto] items-center gap-4">
            <span className="text-[12.5px] leading-snug text-[#051c2c]">
              {it.label}
              <span className="ml-1.5 text-[#8a939c]">n={it.n}</span>
            </span>
            <span className="relative block h-[2px] bg-[#eef0f2]">
              {benchmark !== undefined ? (
                <span
                  className="absolute top-[-9px] h-5 w-px bg-[#c3cbd4]"
                  style={{ left: `${pos(benchmark)}%` }}
                />
              ) : null}
              <span
                className="absolute top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${pos(it.avg)}%`,
                  background: benchmark !== undefined && it.avg >= benchmark ? BLUE : "#9aa6b2",
                }}
              />
            </span>
            <span className="tabular-nums text-[13px] font-semibold text-[#051c2c]">
              {it.avg}
            </span>
          </li>
        ))}
      </ul>
      {benchmark !== undefined ? (
        <div className="mt-5 flex items-center gap-2 text-[12px] text-[#6b7681]">
          <span className="h-3 w-px bg-[#c3cbd4]" />
          {benchmarkLabel}: {benchmark}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Heat matrix                                                         */
/* ------------------------------------------------------------------ */

export function Matrix({
  rows,
  cols,
  values,
  rowTitle,
  colTitle,
}: {
  rows: string[];
  cols: string[];
  values: number[][];
  rowTitle: string;
  colTitle: string;
}) {
  const flat = values.flat();
  const max = Math.max(...flat);
  const shade = (v: number) => {
    if (v === 0) return { bg: "#fafbfc", fg: "#c3cbd4" };
    const t = v / max;
    return {
      bg: `rgba(34, 81, 255, ${0.10 + t * 0.85})`,
      fg: t > 0.45 ? "#ffffff" : "#051c2c",
    };
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr>
            <th className="w-[34%] p-0 pb-3 text-left align-bottom">
              <span className="rpt-eyebrow">{rowTitle}</span>
            </th>
            <th colSpan={cols.length} className="p-0 pb-3 text-left align-bottom">
              <span className="rpt-eyebrow">{colTitle}</span>
            </th>
          </tr>
          <tr>
            <th />
            {cols.map((c) => (
              <th
                key={c}
                className="border-b border-[#e3e6ea] px-2 pb-2 text-left text-[11.5px] font-semibold leading-tight text-[#4a5560]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={r}>
              <th className="border-b border-[#eef0f2] py-2 pr-3 text-left text-[12.5px] font-normal leading-snug text-[#051c2c]">
                {r}
              </th>
              {values[ri].map((v, ci) => {
                const s = shade(v);
                return (
                  <td key={ci} className="border-b border-white p-[3px]">
                    <div
                      className="flex h-9 items-center justify-center text-[13px] font-semibold tabular-nums"
                      style={{ background: s.bg, color: s.fg }}
                    >
                      {v}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Time series — daily columns + cumulative line                       */
/* ------------------------------------------------------------------ */

export function TimeSeries({
  series,
  peakLabel,
}: {
  series: { date: string; n: number; cum: number }[];
  peakLabel?: string;
}) {
  const W = 720;
  const H = 240;
  const PAD = { t: 12, r: 40, b: 28, l: 28 };
  const iw = W - PAD.l - PAD.r;
  const ih = H - PAD.t - PAD.b;
  const maxN = Math.max(...series.map((s) => s.n));
  const maxC = Math.max(...series.map((s) => s.cum));
  const bw = iw / series.length;
  const line = series
    .map((s, i) => {
      const x = PAD.l + i * bw + bw / 2;
      const y = PAD.t + ih - (s.cum / maxC) * ih;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const peak = series.reduce((a, b) => (b.n > a.n ? b : a));
  const peakX = PAD.l + series.indexOf(peak) * bw + bw / 2;
  const fmt = (d: string) =>
    new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    });

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img">
        {[0, 0.5, 1].map((t) => (
          <line
            key={t}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={PAD.t + ih - t * ih}
            y2={PAD.t + ih - t * ih}
            stroke="#eef0f2"
          />
        ))}
        {series.map((s, i) => (
          <rect
            key={s.date}
            x={PAD.l + i * bw + bw * 0.18}
            y={PAD.t + ih - (s.n / maxN) * ih}
            width={bw * 0.64}
            height={(s.n / maxN) * ih}
            fill={s.n === maxN ? BLUE : "#b9c4d1"}
          />
        ))}
        <path d={line} fill="none" stroke={INK} strokeWidth="1.6" />
        {peakLabel ? (
          <>
            <line x1={peakX} x2={peakX} y1={PAD.t} y2={PAD.t + ih} stroke={BLUE} strokeDasharray="3 3" />
            <text
              x={peakX - 8}
              y={PAD.t + ih - 10}
              fontSize="11"
              fill={BLUE}
              fontWeight={600}
              textAnchor="end"
            >
              {peakLabel}
            </text>
          </>
        ) : null}
        <text x={PAD.l} y={H - 8} fontSize="11" fill="#6b7681">
          {fmt(series[0].date)}
        </text>
        <text x={W - PAD.r} y={H - 8} fontSize="11" fill="#6b7681" textAnchor="end">
          {fmt(series[series.length - 1].date)}
        </text>
        <text x={W - PAD.r + 6} y={PAD.t + 10} fontSize="11" fill={INK} fontWeight={600}>
          {maxC}
        </text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[#4a5560]">
        <span className="flex items-center gap-2">
          <span className="h-[10px] w-[10px] bg-[#b9c4d1]" /> Applications per day
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#051c2c]" /> Cumulative applications
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ranked table                                                        */
/* ------------------------------------------------------------------ */

export function RankTable({
  items,
  head = ["Market", "Respondents", "Share"],
  flags,
}: {
  items: Slice[];
  head?: [string, string, string];
  flags?: Record<string, string>;
}) {
  const iso = (label: string) => flags?.[label];
  const flag = (code?: string) =>
    code
      ? String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65))
      : "";
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-[#051c2c]">
          {head.map((h, i) => (
            <th
              key={h}
              className={`pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6b7681] ${
                i === 0 ? "text-left" : "text-right"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((it) => (
          <tr key={it.label} className="border-b border-[#eef0f2]">
            <td className="py-2 text-[13px] text-[#051c2c]">
              {flags ? <span className="mr-2">{flag(iso(it.label))}</span> : null}
              {it.label}
            </td>
            <td className="py-2 text-right text-[13px] tabular-nums text-[#4a5560]">
              {it.value}
            </td>
            <td className="py-2 text-right text-[13px] font-semibold tabular-nums text-[#051c2c]">
              {pctLabel(it.share)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ------------------------------------------------------------------ */
/*  Funnel                                                              */
/* ------------------------------------------------------------------ */

export function Funnel({
  steps,
}: {
  steps: { label: string; value: number; share: number; note?: string }[];
}) {
  return (
    <ul className="space-y-2">
      {steps.map((s, i) => (
        <li key={s.label} className="flex items-center gap-4">
          <div
            className="flex h-14 items-center px-4 text-white"
            style={{
              width: `${Math.max(s.share, 12)}%`,
              background: RAMP[Math.min(i, RAMP.length - 1)],
            }}
          >
            <span className="text-[15px] font-bold tabular-nums">{s.value}</span>
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-semibold leading-snug text-[#051c2c]">
              {s.label}
              <span className="ml-2 font-normal tabular-nums text-[#6b7681]">
                {pctLabel(s.share)}
              </span>
            </div>
            {s.note ? (
              <div className="text-[12px] leading-snug text-[#6b7681]">{s.note}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Quote card                                                          */
/* ------------------------------------------------------------------ */

export function Quote({
  children,
  role,
  country,
}: {
  children: ReactNode;
  role: string;
  country: string;
}) {
  return (
    <blockquote className="flex h-full flex-col justify-between border-t-2 border-[#051c2c] pt-5">
      <p className="text-[14px] leading-relaxed text-[#051c2c]">“{children}”</p>
      <footer className="mt-4 text-[12px] uppercase tracking-[0.06em] text-[#6b7681]">
        {role} · {country}
      </footer>
    </blockquote>
  );
}

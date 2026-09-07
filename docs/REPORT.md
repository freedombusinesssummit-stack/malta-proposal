# Malta Event Report — `malta.report.fsummit.net`

Audience & demand report for **Freedom Business Summit 2026: Malta Event Edition**,
built from the application form export (82 submissions → 78 unique respondents,
16 Aug – 7 Sep 2026).

## Where it lives

| Piece | Path |
| --- | --- |
| Page | `app/report/page.tsx` (+ `app/report/layout.tsx` for metadata) |
| Chart primitives | `components/report/charts.tsx` |
| Report shell (sections, exhibits, KPIs) | `components/report/ui.tsx` |
| Aggregated data | `lib/report-data.ts` (generated) |
| Aggregation script | `scripts/aggregate.py` |
| Styles | `.rpt-*` block at the end of `app/globals.css` |

The page is a server component with no client-side JS (~0 kB route JS) and is
statically prerendered at build time.

## Regenerating the data

The raw CSV contains personal data (names, emails, phone numbers, LinkedIn
profiles) and **must not be committed**. Keep it outside the repo.

```bash
python3 scripts/aggregate.py ~/Downloads/submissions.csv /tmp/report.json
```

Then paste the JSON into `lib/report-data.ts` (keep the header comment and the
`export const report = … ;` wrapper). Only aggregates — counts and percentages —
ever enter the repository. Verbatim quotes in `scripts/aggregate.py` (`QUOTES`)
are selected by row index and carry role + country only, no names.

The script de-duplicates on email (keeping the highest-scoring submission per
person), classifies free-text industry and job titles into standard categories,
groups countries into regions, and computes cross-tabs (readiness × capital,
average lead score by segment).

## Deployment: domain setup

The report is served at `/report` inside this same Next.js app, and
`next.config.js` rewrites the **root path of `malta.report.fsummit.net`** to
`/report`:

```js
// next.config.js
beforeFiles: [{ source: '/', has: [{ type: 'host', value: 'malta.report.fsummit.net' }],
               destination: '/report' }]
```

So no second Vercel project and no second repository are needed.

**Steps in Vercel** (existing project for this repo):

1. Project → **Settings → Domains → Add** → `malta.report.fsummit.net`.
2. Vercel shows the DNS record to create. In the DNS zone for `fsummit.net` add:

   ```
   malta.report   CNAME   cname.vercel-dns.com.
   ```

   (`malta.report.fsummit.net` is a third-level name; a plain CNAME works — no
   wildcard needed. If the zone is on Vercel DNS, the record is added for you.)
3. Wait for the certificate to be issued. Both URLs then work:
   `https://malta.report.fsummit.net/` and `https://fsummit.net/report`.

**If a separate project is preferred later** (independent deploys, separate
access control, its own analytics), the alternative is: create a second Vercel
project from the same GitHub repo, set **Root Directory** to a dedicated app
folder, and move `app/report` there — this requires splitting the repo into a
monorepo, so it is only worth doing if the report needs its own release cycle.

To add a canonical redirect instead of dual access, add a redirect from
`/report` to the subdomain in `next.config.js` once the domain is live.

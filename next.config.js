/** @type {import('next').NextConfig} */

// The Malta Event Edition audience & demand report lives in its own repo and
// Vercel project (freedombusinesssummit-stack/maltareport). Old links to /report
// on this site keep working via the redirect below.
//
// Target: the report's own production URL. Once malta.report.fsummit.net is
// attached to the maltareport project, switch by setting the REPORT_URL
// environment variable in Vercel — no code change or redeploy of this repo's
// source needed.
//
// The redirect is temporary (307) on purpose: browsers cache permanent (308)
// redirects aggressively, so keep it temporary until the final domain is stable.
const REPORT_URL = process.env.REPORT_URL || 'https://maltareport.vercel.app'

const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/report', destination: REPORT_URL, permanent: false },
      { source: '/report/:path*', destination: REPORT_URL, permanent: false },
    ]
  },
}
module.exports = nextConfig

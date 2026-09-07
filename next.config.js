/** @type {import('next').NextConfig} */

// The Malta Event Edition audience & demand report lives in its own repo and
// Vercel project (freedombusinesssummit-stack/maltareport), served at
// maltareport.fsummit.net. Old links to /report on this site keep working via
// the redirect below.
//
// To move the report to a different URL later, set the REPORT_URL environment
// variable in Vercel — no code change needed.
//
// The redirect is temporary (307) on purpose: browsers cache permanent (308)
// redirects aggressively, so keep it temporary until the domain is settled.
const REPORT_URL = process.env.REPORT_URL || 'https://maltareport.fsummit.net'

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

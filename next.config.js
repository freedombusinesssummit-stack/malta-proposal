/** @type {import('next').NextConfig} */

// The Malta Event Edition audience & demand report now lives in its own repo and
// Vercel project (freedombusinesssummit-stack/maltareport → malta.report.fsummit.net).
// Old links to /report on this site keep working via this redirect.
// It is temporary (307) on purpose — flip `permanent` to true once the report
// domain has been live and stable for a while, as browsers cache 308s hard.
const REPORT_URL = 'https://malta.report.fsummit.net'

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

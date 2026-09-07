/** @type {import('next').NextConfig} */

// The audience & demand report lives at /report inside this app, and is served
// at the root of its own hostname. Adding malta.report.fsummit.net to this
// Vercel project is therefore enough — no second project or repo is required.
const REPORT_HOSTS = ['malta.report.fsummit.net']

const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: REPORT_HOSTS.map((host) => ({
        source: '/',
        has: [{ type: 'host', value: host }],
        destination: '/report',
      })),
    }
  },
}
module.exports = nextConfig

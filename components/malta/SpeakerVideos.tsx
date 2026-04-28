"use client";
import AnimatedSection from "@/components/AnimatedSection";

// Malta Edition - Placeholder for speaker videos section
// This can be populated when Malta speakers are confirmed
export default function SpeakerVideos() {
  return (
    <section id="speakers" className="py-12 border-b border-carbon-100 bg-carbon-50">
      <div className="wrap">
        <AnimatedSection>
          <p className="section-label">Sponsored Exposure</p>
          <h2 className="text-2xl font-black text-carbon-900 mb-3">Sponsored Video Ads</h2>
          <p className="text-carbon-500 text-sm max-w-xl mb-6">
            Targeted video ads featuring our speakers and partners run across social platforms — driving qualified, intent-rich registrations directly to the Malta Edition funnel.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🎯", label: "Geo-targeted ads", sub: "EU, UK, MENA, India focus" },
              { icon: "📊", label: "110K+ Unique Reach", sub: "Per campaign sprint" },
              { icon: "✅", label: "UTM tracked registrations", sub: "Full attribution per partner" },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-bold text-carbon-900 text-sm mb-1">{item.label}</p>
                <p className="text-xs text-carbon-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

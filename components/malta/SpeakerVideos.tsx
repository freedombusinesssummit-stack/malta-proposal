"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
  { id: "HdV3fbnsBxGTqGhs02xBL023Njuo01CKTPfLOMCvj02kMTE" },
  { id: "xmy7Hfmwhjbcrio25900J1OhXVGldoZce02OKpoOINOqM" },
  { id: "ZCDG5qNaC02GoEiuaq6oFVUu7mXOyGJgXYrVFwQZPY2k" },
  { id: "GB01sPWkUqcq3a4Euhk01pzVlGoWaY01SQbIE002DaQrbPI" },
  { id: "IpjmtckTnJzwVNEIv3YT01WbTsPAqtPzlR02DMy4gD6JA" },
  { id: "bjA29v9I8dDjJoYQHsLzRK9yiNCpUGmX3As6GOmjjF4" },
  { id: "b01C02DcwOHKl7dcvxdKtbV7sXnw8iYi00t2qlgXdLw2Pg" },
];

function MuxPlayer({ playbackId }: { playbackId: string }) {
  const [playing, setPlaying] = useState(false);
  // Portrait thumbnail — 9:16 aspect ratio, crop to portrait
  const thumbUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=1&width=300&height=540&fit_mode=smartcrop`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-carbon-900 group cursor-pointer w-full"
      style={{ aspectRatio: "9/16" }}  // Portrait format
      onClick={() => setPlaying(true)}
    >
      {!playing ? (
        <>
          <img
            src={thumbUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 group-hover:from-black/40 transition-all" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
              style={{ background: "#9ef01a" }}
            >
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M1.5 1.5L16.5 10L1.5 18.5V1.5Z" fill="#111827" />
              </svg>
            </div>
          </div>
          {/* Sponsored badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: "rgba(0,0,0,0.65)", color: "#9ef01a" }}>
              Sponsored
            </span>
          </div>
        </>
      ) : (
        <iframe
          src={`https://player.mux.com/${playbackId}?autoplay=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ border: "none" }}
        />
      )}
    </div>
  );
}

export default function SpeakerVideos() {
  return (
    <section id="speaker-videos" className="slide-section py-14 border-b border-carbon-100 bg-white">
      <span className="slide-number">11 / 18</span>
      <div className="wrap">
        <AnimatedSection>
          <Badge variant="success" className="mb-3">Sponsored Video Ads</Badge>
          <h2 className="font-black text-carbon-900 mb-2" style={{ fontSize: "clamp(22px, 3.5vw, 44px)", letterSpacing: "-1px" }}>
            Speaker Ads That Drive Registrations
          </h2>
          <p className="text-carbon-500 mb-8 max-w-2xl">
            Targeted video ads featuring our speakers run across social platforms — driving qualified, intent-rich registrations directly to the event funnel.
          </p>
        </AnimatedSection>

        {/* Portrait grid — 7 videos, 4 on top / 3 on bottom */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
            {VIDEOS.slice(0, 4).map((v, i) => (
              <MuxPlayer key={i} playbackId={v.id} />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {VIDEOS.slice(4, 7).map((v, i) => (
              <MuxPlayer key={i} playbackId={v.id} />
            ))}
          </div>
        </AnimatedSection>

        {/* Stats — no green bg, clean white with border */}
        <AnimatedSection delay={200}>
          <div className="mt-6 rounded-xl border border-carbon-200 bg-white p-5 flex flex-wrap items-center gap-6">
            {[
              { icon: "🎯", title: "Geo-targeted ads", sub: "US, India, UAE, EU focus" },
              { icon: "📊", title: "110K+ Unique Reach", sub: "Per campaign sprint" },
              { icon: "✅", title: "UTM tracked registrations", sub: "Full attribution per partner" },
              { icon: "🎬", title: "Custom video per speaker", sub: "Branded for each partner" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="text-xs font-bold text-carbon-900">{s.title}</p>
                  <p className="text-xs text-carbon-400">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

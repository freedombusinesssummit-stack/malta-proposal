"use client";
import Navigation from "@/components/malta/Navigation";
import HeroSlide from "@/components/malta/HeroSlide";
import AboutSlide from "@/components/malta/AboutSlide";
import AudienceSlides from "@/components/malta/AudienceSlides";
import AudienceWho from "@/components/malta/AudienceWho";
import IntelSlides from "@/components/malta/IntelSlides";
import SpeakerVideos from "@/components/malta/SpeakerVideos";
import PartnersAndAgenda from "@/components/malta/PartnersAndAgenda";
// import PackagesSlides from "@/components/malta/PackagesSlides";
import ContactSlide from "@/components/malta/ContactSlide";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSlide />
      <AboutSlide />
      <AudienceSlides />
      <AudienceWho />
      <IntelSlides />
      <SpeakerVideos />
      <PartnersAndAgenda />
      {/* <PackagesSlides /> */}
      <ContactSlide />
    </main>
  );
}

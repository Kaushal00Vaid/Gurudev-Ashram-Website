import React from "react";
import { Helmet } from "react-helmet-async";
import HeroBanner from "../components/home/HeroBanner";
import AboutSection from "../components/home/AboutSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import EventsSection from "../components/home/EventsSection";
import SocialInitiativesSection from "../components/home/SocialInitiativesSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Shri Gurudev Ashram - Spiritual Sanctuary & Social Service
        </title>
        <meta
          name="description"
          content="Shri Gurudev Ashram - Dedicated to spiritual enlightenment and social welfare. Serving orphans, elderly, tribal communities through education, healthcare and compassion."
        />
        <meta
          name="keywords"
          content="gurudev ashram, spiritual ashram, social service, orphan care, elder care, cow protection, tribal welfare, gurukul education, donation, charity"
        />
      </Helmet>

      <main>
        <HeroBanner />
        <AboutSection />
        <ActivitiesSection />
        <EventsSection />
        <SocialInitiativesSection />
      </main>
    </>
  );
}

export default Home;

import { createContext, useContext, useState, useEffect } from "react";

const AshramContext = createContext();

export const useAshram = () => {
  const context = useContext(AshramContext);
  if (!context) {
    throw new Error("useAshram must be used within AshramProvider");
  }
  return context;
};

export const AshramProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([
    "Join us for our Annual Spiritual Retreat - Starting Next Month!",
    "Free Medical Camp for Senior Citizens - Every Sunday",
    "Gurukul Admissions Open for New Academic Year",
    "Support Our Anath Seva - Donate Now to Help Orphan Children",
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "Bal Sanskar Shivir",
      date: "2025-01-15",
      description: "Annual children's cultural and spiritual camp",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Bhakt Pheri",
      date: "2025-02-01",
      description: "Village outreach program for social awareness",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Guru Purnima Celebration",
      date: "2025-07-21",
      description: "Grand celebration honoring the Guru tradition",
      registrationOpen: false,
    },
  ]);

  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Anath Seva (Orphan Care)",
      description:
        "Providing shelter, education, food, and healthcare to orphaned children. Creating a safe and loving environment for their better future.",
      icon: "👶",
    },
    {
      id: 2,
      title: "Vridh Seva (Elder Care)",
      description:
        "Residential facility for elderly persons providing accommodation, meals, medical care, and social activities with dignity and respect.",
      icon: "👴",
    },
    {
      id: 3,
      title: "Gau Seva (Cow Protection)",
      description:
        "Dedicated gaushala for protection and care of indigenous cow breeds, preventing neglect and cruelty.",
      icon: "🐄",
    },
    {
      id: 4,
      title: "Adivasi Seva (Tribal Welfare)",
      description:
        "Educational scholarships, health camps, and training programs for tribal communities' social and economic development.",
      icon: "📚",
    },
    {
      id: 5,
      title: "Gurukul Education",
      description:
        "Traditional residential education system providing spiritual, moral, and academic knowledge along with arts and music.",
      icon: "🎓",
    },
    {
      id: 6,
      title: "Shri Gurudev Vidyalaya",
      description:
        "School for poor and tribal children providing quality education and holistic development opportunities.",
      icon: "🏫",
    },
    {
      id: 7,
      title: "Annakshetra (Food Service)",
      description:
        "Daily free meal service for devotees, saints, poor, and tribal people ensuring no one goes hungry.",
      icon: "🍽️",
    },
    {
      id: 8,
      title: "Bal Sanskar Shivir",
      description:
        "Annual cultural camp for 600-700 children focusing on moral, social, and spiritual values development.",
      icon: "⛺",
    },
  ]);

  const [socialInitiatives, setSocialInitiatives] = useState([
    {
      id: 1,
      title: "Beti Padhao Campaign",
      description: "Promoting girl child education in rural areas",
    },
    {
      id: 2,
      title: "Water Conservation",
      description: "Village awareness programs for water preservation",
    },
    {
      id: 3,
      title: "Swachh Bharat",
      description: "Cleanliness and hygiene awareness drives",
    },
    {
      id: 4,
      title: "Anti-Dowry Campaign",
      description: "Social awareness against dowry practices",
    },
    {
      id: 5,
      title: "Agricultural Guidance",
      description: "Farmer training and agricultural support programs",
    },
  ]);

  const value = {
    announcements,
    setAnnouncements,
    upcomingEvents,
    setUpcomingEvents,
    activities,
    setActivities,
    socialInitiatives,
    setSocialInitiatives,
  };

  return (
    <AshramContext.Provider value={value}>{children}</AshramContext.Provider>
  );
};

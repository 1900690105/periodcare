"use client";
import React, { useEffect, useState } from "react";
import { Sparkles, Globe, Heart, Menu, X } from "lucide-react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AIChatbot from "./components/ChatBot";
import FeaturesSection from "./components/Features";
import JourneyTimeline from "./components/TimeLine";
import EducationAwareness from "./components/Education";
import StateSection from "./components/StateSection";
import PeriodCareCommunity from "./components/Community";
import PrivacySecurity from "./components/Privacy";
import PeriodCareFooter from "./components/Footer";
import AIChatbot2 from "./components/chatbot2";

export default function PeriodCareHero() {
  const [language, setLanguage] = useState("mr");
  const [chatbot, setChatBot] = useState(
    process.env.NODE_ENV === "development" ? 1 : 2
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Navigation */}
      <NavBar setLanguage={setLanguage} language={language} />

      {/* Hero Section */}
      <HeroSection language={language} />

      {chatbot == 2 ? (
        <AIChatbot2 lan={language} />
      ) : (
        <AIChatbot lan={language} />
      )}

      <FeaturesSection language={language} />

      <JourneyTimeline language={language} />

      <EducationAwareness language={language} />

      <StateSection language={language} />

      <PeriodCareCommunity language={language} />

      <PrivacySecurity language={language} />

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
      <PeriodCareFooter language={language} />
    </div>
  );
}

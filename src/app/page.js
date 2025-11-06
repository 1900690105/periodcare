"use client";
import React, { useState } from "react";
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

export default function PeriodCareHero() {
  const [language, setLanguage] = useState("en");

  const scrollToSection = (sectionId) => {
    // Smooth scroll functionality
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Navigation */}
      <NavBar setLanguage={setLanguage} language={language} />

      {/* Hero Section */}
      <HeroSection />

      <AIChatbot />

      <FeaturesSection />

      <JourneyTimeline />

      <EducationAwareness />

      <StateSection />

      <PeriodCareCommunity language={language} setLanguage={setLanguage} />

      <PrivacySecurity language={language} setLanguage={setLanguage} />

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
      <PeriodCareFooter language={language} setLanguage={setLanguage} />
    </div>
  );
}

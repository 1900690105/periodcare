"use client";
import React, { useState } from "react";
import { Sparkles, Globe, Heart, Menu, X } from "lucide-react";
import NavBar from "./components/NavBar";
import StateSection from "./components/StateSection";
import HeroSection from "./components/HeroSection";
import AIChatbot from "./components/ChatBot";

export default function PeriodCareHero() {
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
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StateSection />

      <AIChatbot />

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
    </div>
  );
}

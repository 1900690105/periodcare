"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Globe,
  Sparkles,
  ArrowRight,
  Heart,
  Book,
  Video,
  FileText,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import VisualLearningCarousel from "./components/VisualLearn";
import IntroSection from "./components/IntroSection";
import ExploreLearningModules from "./components/ExploreLearningModules";
import MenstrualHealthQuiz from "./components/QuizeSection";
import PeriodCareFooter from "../components/Footer";

export default function EducationPage() {
  const [language, setLanguage] = useState("mr");
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
        <NavBar setLanguage={setLanguage} language={language} />
        {/* Hero / Intro Section */}
        <IntroSection language={language} />
        <ExploreLearningModules language={language} />
        {/* <VisualLearningCarousel language={language} /> */}
        <MenstrualHealthQuiz language={language} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
          <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join thousands of women empowering themselves with knowledge
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2">
              <span>Begin Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <PeriodCareFooter language={language} setLanguage={setLanguage} />
    </>
  );
}

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

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      <NavBar />
      {/* Hero / Intro Section */}
      <IntroSection />

      {/* Learning Path Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-pink-700 font-medium text-sm">
              Start Your Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You&rsquo;ll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive modules designed for learners of all levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🔄",
              title: "Menstrual Cycle",
              color: "from-pink-400 to-rose-400",
              topics: "5 lessons",
            },
            {
              icon: "🧼",
              title: "Hygiene Practices",
              color: "from-blue-400 to-cyan-400",
              topics: "4 lessons",
            },
            {
              icon: "💪",
              title: "Health & Wellness",
              color: "from-purple-400 to-pink-400",
              topics: "6 lessons",
            },
            {
              icon: "🧠",
              title: "Emotional Care",
              color: "from-rose-400 to-pink-400",
              topics: "4 lessons",
            },
          ].map((module, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 p-6 space-y-4 cursor-pointer group"
            >
              <div
                className={`w-14 h-14 bg-linear-to-br ${module.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
              >
                {module.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600">{module.topics}</p>
              </div>
              <div className="pt-2">
                <button className="text-pink-600 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                  <span>Start Module</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExploreLearningModules />

      <VisualLearningCarousel />

      <MenstrualHealthQuiz />

      {/* CTA Section */}
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
  );
}

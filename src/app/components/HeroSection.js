import React, { useState } from "react";
import { Sparkles, Heart, Globe } from "lucide-react";
import Image from "next/image";

export default function PeriodCareHero({ language }) {
  // --- Translations ---
  const translations = {
    en: {
      badge: "AI-Powered Health Support",
      headline1: "Empowering Every Woman with",
      headline2: "Knowledge and Care",
      subtext:
        "AI-driven menstrual health guidance in your language. Get personalized support, education, and care anytime, anywhere.",
      start: "Start Your Journey",
      learn: "Learn More",
      private: "100% Private",
      multi: "Multi-Language",

      bot1: "Hello! How can I support you today? 💜",
    },
    hi: {
      badge: "एआई-संचालित स्वास्थ्य सहायता",
      headline1: "हर महिला को सशक्त बनाएं",
      headline2: "ज्ञान और देखभाल के साथ",
      subtext:
        "आपकी भाषा में एआई-आधारित मासिक धर्म स्वास्थ्य मार्गदर्शन। किसी भी समय, कहीं भी व्यक्तिगत सहायता और शिक्षा प्राप्त करें।",
      start: "अपनी यात्रा शुरू करें",
      learn: "और जानें",
      private: "100% निजी",
      multi: "बहुभाषी समर्थन",
      offline: "ऑफ़लाइन कार्य करता है",
      bot1: "नमस्ते! मैं आपकी किस प्रकार सहायता कर सकती हूँ? 💜",
    },
    mr: {
      badge: "एआय-संचालित आरोग्य सहाय्य",
      headline1: "प्रत्येक महिलेला सक्षम बनवा",
      headline2: "ज्ञान आणि काळजीसह",
      subtext:
        "तुमच्या भाषेत एआय-आधारित मासिक पाळी आरोग्य मार्गदर्शन. कोणत्याही वेळी, कुठेही वैयक्तिक सहाय्य आणि शिक्षण मिळवा.",
      start: "तुमची यात्रा सुरू करा",
      learn: "अधिक जाणून घ्या",
      private: "१००% खाजगी",
      multi: "अनेक भाषा समर्थन",
      offline: "ऑफलाइन कार्य करते",
      bot1: "नमस्कार! मी तुम्हाला कशी मदत करू शकते? 💜",
    },
  };

  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 md:-mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 font-medium text-sm">
                {t?.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.headline1} <span className="text-pink-500">{t.headline2}</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {t.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-linear-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>{t.start}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("education")}
                className="bg-white text-pink-600 border-2 border-pink-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
              >
                {t.learn}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t.private}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t.multi}</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/heroimg2.png"
                alt="Woman using PeriodCare app"
                width={700}
                height={700}
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Heart className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
    </div>
  );
}

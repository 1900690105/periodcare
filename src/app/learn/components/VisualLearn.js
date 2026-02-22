// File: VisualLearningCarouselMultilingual.jsx
"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  Pause,
  Play,
} from "lucide-react";
import VideoPlayer from "./YoutubeVideo";

/**
 * VisualLearningCarouselMultilingual
 * Option 1: Language Toggle (en / hi / mr)
 *
 * - All visible UI text is provided in translations object.
 * - Language switcher updates UI instantly.
 * - Keeps original structure and features (videos, infographic SVG, downloads).
 */

const translations = {
  ui: {
    langLabels: { en: "English", hi: "हिन्दी", mr: "मराठी" },
    features: {
      availableLanguages: {
        en: "Available in multiple languages",
        hi: "कई भाषाओं में उपलब्ध",
        mr: "अनेक भाषांमध्ये उपलब्ध",
      },

      expertVerified: {
        en: "Expert verified content",
        hi: "विशेषज्ञ द्वारा सत्यापित",
        mr: "तज्ज्ञांनी प्रमाणित केलेले",
      },
      size: { en: "Size", hi: "आकार", mr: "आकार" },
    },
    buttons: {
      downloadInfographic: {
        en: "Download Infographic",
        hi: "इन्फोग्राफ़िक डाउनलोड करें",
        mr: "इन्फोग्राफिक डाउनलोड करा",
      },
      viewFullSize: {
        en: "View Full Size",
        hi: "पूर्ण आकार देखें",
        mr: "पूर्ण आकार पहा",
      },
      playLesson: {
        en: "Play Lesson Video",
        hi: "पाठ वीडियो चलाएं",
        mr: "धडा व्हिडिओ प्ले करा",
      },
      downloadVideo: { en: "Download", hi: "डाउनलोड", mr: "डाउनलोड" },
    },
    nav: {
      previous: {
        en: "Previous slide",
        hi: "पिछला स्लाइड",
        mr: "मागील स्लाइड",
      },
      next: { en: "Next slide", hi: "अगला स्लाइड", mr: "पुढील स्लाइड" },
      slideCounter: {
        en: "{current} / {total}",
        hi: "{current} / {total}",
        mr: "{current} / {total}",
      },
    },
    infographicLabels: {
      menstrual: { en: "Menstrual", hi: "मासिक", mr: "मासिक" },
      follicular: { en: "Follicular", hi: "फॉलिक्यूलर", mr: "फॉलिक्युलर" },
      ovulation: { en: "Ovulation", hi: "डिंबोत्सर्जन", mr: "उत्सर्जन" },
      luteal: { en: "Luteal", hi: "ल्यूटल", mr: "ल्यूटल" },
      days: { en: "Days", hi: "दिन", mr: "दिवस" },
    },
  },

  // The main content array — keep order in sync with UI
  visualContent: [
    {
      id: 1,
      type: "infographic",
      // for titles/descriptions/duration we provide per-language entries
      title: {
        en: "Menstrual Cycle Stages",
        hi: "मासिक चक्र के चरण",
        mr: "मासिक पाळी टप्पे",
      },
      description: {
        en: "Understanding the 4 phases of your menstrual cycle",
        hi: "आपके मासिक चक्र के 4 चरणों को समझना",
        mr: "तुमच्या मासिक चक्रातील 4 टप्प्यांचे आकलन",
      },
      duration: {
        en: "28 days cycle",
        hi: "28 दिनों का चक्र",
        mr: "28 दिवसांचा चक्र",
      },
      color: "from-pink-400 to-rose-400",
      icon: "🔄",
      downloadSize: { en: "1.2 MB", hi: "1.2 MB", mr: "1.2 MB" },
      // SVG labels (so infographic labels can be translated)
      svgLabels: {
        menstrualKey: "infographicLabels.menstrual",
        follicularKey: "infographicLabels.follicular",
        ovulationKey: "infographicLabels.ovulation",
        lutealKey: "infographicLabels.luteal",
        daysKey: "infographicLabels.days",
      },
    },
    {
      id: 2,
      type: "video",
      title: {
        en: "Period Symptoms Guide",
        hi: "पिरीड लक्षण गाइड",
        mr: "पाळीचे लक्षण मार्गदर्शक",
      },
      description: {
        en: "Common symptoms and how to manage them",
        hi: "सामान्य लक्षण और उन्हें कैसे संभालें",
        mr: "सामान्य लक्षण आणि त्यांना कसे हाताळावे",
      },
      duration: { en: "3:45 min", hi: "3:45 मिनट", mr: "3:45 मिनिटे" },
      color: "from-purple-400 to-pink-400",
      icon: "💊",
      downloadSize: { en: "8.5 MB", hi: "8.5 MB", mr: "8.5 MB" },
      videoId: "q-6MgBDqK9E",
    },
    {
      id: 3,
      type: "video",
      title: {
        en: "Hygiene Best Practices",
        hi: "स्वच्छता सर्वोत्तम कार्यप्रणाली",
        mr: "स्वच्छतेच्या उत्तम पद्धती",
      },
      description: {
        en: "Step-by-step hygiene guide for menstruation",
        hi: "मासिक धर्म के लिए चरण-दर-चरण स्वच्छता गाइड",
        mr: "मासिक पाळीसाठी टप्प्याटप्प्याने स्वच्छतेचा मार्गदर्शक",
      },
      duration: {
        en: "Quick guide",
        hi: "त्वरित मार्गदर्शक",
        mr: "त्वरित मार्गदर्शक",
      },
      color: "from-blue-400 to-cyan-400",
      icon: "🧼",
      downloadSize: { en: "980 KB", hi: "980 KB", mr: "980 KB" },
      videoId: "kmWbOC8Fbb0",
    },
    {
      id: 4,
      type: "video",
      title: {
        en: "Nutrition During Periods",
        hi: "पीरियड्स के दौरान पोषण",
        mr: "पाळीच्या काळातील आहार",
      },
      description: {
        en: "What to eat and avoid during your cycle",
        hi: "अपने चक्र के दौरान क्या खाएं और क्या बचें",
        mr: "तुमच्या चक्रात काय खावे व काय टाळावे",
      },
      duration: { en: "4:20 min", hi: "4:20 मिनट", mr: "4:20 मिनिटे" },
      color: "from-green-400 to-emerald-400",
      icon: "🥗",
      downloadSize: { en: "9.2 MB", hi: "9.2 MB", mr: "9.2 MB" },
      videoId: "E-8gvJlkY8c",
    },
    {
      id: 5,
      type: "infographic",
      title: {
        en: "Pain Management Tips",
        hi: "दर्द प्रबंधन सुझाव",
        mr: "दुखः व्यवस्थापन टिप्स",
      },
      description: {
        en: "Natural and medical ways to ease period pain",
        hi: "मासिक धर्म के दर्द को कम करने के प्राकृतिक और औषधीय तरीके",
        mr: "पाळी दुखः कमी करण्याचे नैसर्गिक आणि वैद्यकीय मार्ग",
      },
      duration: {
        en: "Illustrated guide",
        hi: "चित्रित मार्गदर्शक",
        mr: "चित्रांसहित मार्गदर्शक",
      },
      color: "from-red-400 to-orange-400",
      icon: "💆",
      downloadSize: { en: "1.5 MB", hi: "1.5 MB", mr: "1.5 MB" },
      videoId: "vU3LmEc-hCI",
    },
  ],
};

function t(path, lang, fallback = "") {
  if (typeof path !== "string") {
    console.warn("Invalid translation key:", path);
    return fallback;
  }

  const parts = path.split(".");
  let cur = translations;

  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return fallback;
    }
  }

  return cur?.[lang] || cur?.en || fallback;
}

export default function VisualLearningCarouselMultilingual({ language }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});

  const visualContent = translations.visualContent;
  const ui = translations.ui;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visualContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + visualContent.length) % visualContent.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = (id) => {
    setIsPlaying((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentItem = visualContent[currentSlide];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Language Switcher */}

      <div className="relative">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: Visual Content */}
            <div
              className={`p-8 lg:p-12 flex items-center justify-center relative min-h-[250px] lg:min-h-[500px] ${currentItem.color}`}
            >
              <div className="w-full h-full flex items-center justify-center">
                {currentItem.type === "infographic" ? (
                  // Infographic SVG with translated labels
                  <svg viewBox="0 0 300 300" className="w-full h-full max-w-md">
                    <circle
                      cx="150"
                      cy="150"
                      r="120"
                      fill="white"
                      opacity="0.95"
                    />
                    {/* Four colored arcs (kept same visual) */}
                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      fill="none"
                      stroke="#EC4899"
                      strokeWidth="20"
                      strokeDasharray="157 157"
                      transform="rotate(-90 150 150)"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="20"
                      strokeDasharray="157 157"
                      strokeDashoffset="157"
                      transform="rotate(-90 150 150)"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="20"
                      strokeDasharray="78.5 235.5"
                      strokeDashoffset="-157"
                      transform="rotate(-90 150 150)"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="20"
                      strokeDasharray="78.5 235.5"
                      strokeDashoffset="-235.5"
                      transform="rotate(-90 150 150)"
                    />

                    {/* Center Days */}
                    <text
                      x="150"
                      y="155"
                      fontSize="24"
                      textAnchor="middle"
                      fill="#EC4899"
                      fontWeight="bold"
                    >
                      {/* for the first item we used duration "28" in the original — render the number if present */}
                      {String(
                        t(
                          "visualContent.0.duration",
                          language,
                          t(currentItem.duration, language),
                        ),
                      ).match(/\d+/)
                        ? "28"
                        : ""}
                    </text>
                    <text
                      x="150"
                      y="180"
                      fontSize="14"
                      textAnchor="middle"
                      fill="#666"
                    >
                      {t("ui.infographicLabels.days", language)}
                    </text>

                    {/* Labels around circle (translated) */}
                    <text
                      x="150"
                      y="40"
                      fontSize="14"
                      textAnchor="middle"
                      fill="#EC4899"
                    >
                      {t("ui.infographicLabels.menstrual", language)}
                    </text>
                    <text
                      x="260"
                      y="155"
                      fontSize="14"
                      textAnchor="middle"
                      fill="#A855F7"
                    >
                      {t("ui.infographicLabels.follicular", language)}
                    </text>
                    <text
                      x="150"
                      y="280"
                      fontSize="14"
                      textAnchor="middle"
                      fill="#F59E0B"
                    >
                      {t("ui.infographicLabels.ovulation", language)}
                    </text>
                    <text
                      x="40"
                      y="155"
                      fontSize="14"
                      textAnchor="middle"
                      fill="#10B981"
                    >
                      {t("ui.infographicLabels.luteal", language)}
                    </text>
                  </svg>
                ) : (
                  // Video Player (uses provided VideoPlayer component)
                  <div className="w-full max-w-3xl aspect-video bg-gray-900 rounded-2xl overflow-hidden relative shadow-2xl">
                    <VideoPlayer
                      id={currentItem.videoId}
                      playing={!!isPlaying[currentItem.id]}
                    />
                    {/* overlay play/pause toggle */}
                    <button
                      onClick={() => togglePlay(currentItem.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
                      aria-label={
                        isPlaying[currentItem.id]
                          ? `${t("ui.buttons.playLesson", language)} - pause`
                          : `${t("ui.buttons.playLesson", language)} - play`
                      }
                    >
                      {isPlaying[currentItem.id] ? (
                        <Pause className="w-20 h-20 text-white" />
                      ) : (
                        <Play className="w-20 h-20 text-white" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Content Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-4xl">{currentItem.icon}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {typeof currentItem.duration === "object"
                        ? currentItem.duration[language]
                        : currentItem.duration}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {typeof currentItem.title === "object"
                      ? currentItem.title[language]
                      : currentItem.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {typeof currentItem.description === "object"
                      ? currentItem.description[language]
                      : currentItem.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">
                      {t("ui.features.availableLanguages", language)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">
                      {t("ui.features.offline", language)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">
                      {t("ui.features.expertVerified", language)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">
                      {t("ui.features.size", language)}:{" "}
                      {typeof currentItem.downloadSize === "object"
                        ? currentItem.downloadSize[language]
                        : currentItem.downloadSize}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {currentItem.type === "infographic" ? (
                    <>
                      <button
                        className="flex-1 bg-linear-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                        aria-label={t(
                          "ui.buttons.downloadInfographic",
                          language,
                        )}
                        // attach download handling in your app: onClick={() => handleDownload(currentItem)}
                      >
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        <span>
                          {t("ui.buttons.downloadInfographic", language)}
                        </span>
                      </button>

                      <button
                        className="bg-pink-100 text-pink-600 py-4 px-6 rounded-xl font-semibold hover:bg-pink-200 transition-all flex items-center justify-center space-x-2"
                        aria-label={t("ui.buttons.viewFullSize", language)}
                      >
                        <span>{t("ui.buttons.viewFullSize", language)}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                        onClick={() => togglePlay(currentItem.id)}
                        aria-label={t("ui.buttons.playLesson", language)}
                      >
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{t("ui.buttons.playLesson", language)}</span>
                      </button>

                      <button
                        className="bg-purple-100 text-purple-600 py-4 px-6 rounded-xl font-semibold hover:bg-purple-200 transition-all flex items-center justify-center space-x-2"
                        aria-label={t("ui.buttons.downloadVideo", language)}
                      >
                        <Download className="w-5 h-5" />
                        <span>{t("ui.buttons.downloadVideo", language)}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center space-x-2 pt-8">
                {visualContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-pink-500"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows (desktop) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl hidden lg:flex items-center justify-center"
          aria-label={t("ui.nav.previous", language)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl hidden lg:flex items-center justify-center"
          aria-label={t("ui.nav.next", language)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center space-x-4 mt-6">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all"
            aria-label={t("ui.nav.previous", language)}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-gray-600 font-medium">
            {t("ui.nav.slideCounter", language)
              .replace("{current}", String(currentSlide + 1))
              .replace("{total}", String(visualContent.length))}
          </span>

          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all"
            aria-label={t("ui.nav.next", language)}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

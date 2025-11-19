"use client";
import React, { useState } from "react";
import {
  Calendar,
  TrendingUp,
  Heart,
  Droplet,
  AlertCircle,
  Check,
  Zap,
  Moon,
  Sun,
  Activity,
  Apple,
  Wind,
  ChevronRight,
  Edit2,
  Stethoscope,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function CyclePrediction() {
  const params = useSearchParams();
  const lan = params.get("lan") || "en";
  const [language, setLanguage] = useState(lan || "en");
  const [showLangMenu, setShowLangMenu] = useState(false);

  const translations = {
    en: {
      title: "AI Cycle Prediction",
      nextPeriod: "Next Period:",
      accuracy: "Accuracy",
      seeFullInsight: "See Full Insight",
      healthAlert: "High Irregularity Detected",
      alertDesc: "Symptoms and timelines indicate possible hormonal imbalance.",
      checkDetails: "Check Risk Details",
      cycleTimeline: "Cycle Timeline",
      hormoneTitle: "Hormone Forecast",
      todayRec: "Today's Recommendation",
      editData: "Edit Cycle Data",
      connectDoc: "Connect with Doctor",
      highEnergy: "High Energy Day!",
      pmsRisk: "PMS Risk Soon",
      tips: [
        "Eat iron-rich food to balance energy.",
        "15-min light stretching for cramps.",
        "Drink warm water for digestion.",
      ],
      safeStatus: "Cycle is normal!",
      cautionStatus: "Slight delay detected",
      symptoms: "Symptoms Trends",
      lastCycle: "Last Cycle",
      avgLength: "Avg. Length",
      days: "days",
      phase: "Current Phase",
    },
    hi: {
      title: "AI चक्र भविष्यवाणी",
      nextPeriod: "अगली माहवारी:",
      accuracy: "सटीकता",
      seeFullInsight: "पूरी जानकारी देखें",
      healthAlert: "उच्च अनियमितता का पता चला",
      alertDesc: "लक्षण और समयरेखा संभावित हार्मोनल असंतुलन का संकेत देते हैं।",
      checkDetails: "जोखिम विवरण जांचें",
      cycleTimeline: "चक्र समयरेखा",
      hormoneTitle: "हार्मोन पूर्वानुमान",
      todayRec: "आज की सिफारिश",
      editData: "चक्र डेटा संपादित करें",
      connectDoc: "डॉक्टर से संपर्क करें",
      highEnergy: "उच्च ऊर्जा दिवस!",
      pmsRisk: "जल्द PMS जोखिम",
      tips: [
        "ऊर्जा संतुलन के लिए आयरन युक्त भोजन खाएं।",
        "ऐंठन के लिए 15 मिनट हल्की स्ट्रेचिंग।",
        "पाचन के लिए गर्म पानी पिएं।",
      ],
      safeStatus: "चक्र सामान्य है!",
      cautionStatus: "थोड़ी देरी का पता चला",
      symptoms: "लक्षण रुझान",
      lastCycle: "आखिरी चक्र",
      avgLength: "औसत लंबाई",
      days: "दिन",
      phase: "वर्तमान चरण",
    },
    mr: {
      title: "AI चक्र अंदाज",
      nextPeriod: "पुढील मासिक पाळी:",
      accuracy: "अचूकता",
      seeFullInsight: "संपूर्ण माहिती पहा",
      healthAlert: "उच्च अनियमितता आढळली",
      alertDesc: "लक्षणे आणि वेळापत्रक संभाव्य हार्मोनल असंतुलन दर्शवितात.",
      checkDetails: "जोखीम तपशील तपासा",
      cycleTimeline: "चक्र वेळापत्रक",
      hormoneTitle: "हार्मोन अंदाज",
      todayRec: "आजची शिफारस",
      editData: "चक्र डेटा संपादित करा",
      connectDoc: "डॉक्टरांशी संपर्क साधा",
      highEnergy: "उच्च ऊर्जा दिवस!",
      pmsRisk: "लवकरच PMS धोका",
      tips: [
        "ऊर्जा संतुलित करण्यासाठी लोह-समृद्ध अन्न खा.",
        "पेटदुखीसाठी 15 मिनिटे हलके व्यायाम.",
        "पचनासाठी कोमट पाणी प्या.",
      ],
      safeStatus: "चक्र सामान्य आहे!",
      cautionStatus: "थोडा विलंब आढळला",
      symptoms: "लक्षण ट्रेंड",
      lastCycle: "शेवटचे चक्र",
      avgLength: "सरासरी लांबी",
      days: "दिवस",
      phase: "सध्याचा टप्पा",
    },
  };

  const t = translations[language];

  const cycleData = {
    nextPeriod: "Feb 12, 2025",
    confidence: 86,
    lastCycle: "Jan 15",
    avgLength: 28,
    currentPhase: "Follicular",
  };

  const hormoneEvents = [
    { day: 12, hormone: "Estrogen ↑", effect: t.highEnergy, color: "purple" },
    { day: 25, hormone: "Progesterone ↑", effect: t.pmsRisk, color: "yellow" },
  ];

  const cycleHistory = [
    { month: "Aug", length: 28 },
    { month: "Sep", length: 29 },
    { month: "Oct", length: 27 },
    { month: "Nov", length: 30 },
    { month: "Dec", length: 28 },
    { month: "Jan", length: 28 },
  ];

  const symptoms = [
    { name: "Cramps", severity: 3, icon: Activity },
    { name: "Mood", severity: 2, icon: Heart },
    { name: "Energy", severity: 4, icon: Zap },
    { name: "Flow", severity: 3, icon: Droplet },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 pb-8">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tracking → Smart Insights</p>
              <h1 className="text-xl font-bold text-gray-900">
                Smart Cycle Prediction
              </h1>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="hidden sm:inline text-sm font-medium text-gray-700">
                  {languages.find((l) => l.code === language)?.name}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 ${
                        language === lang.code ? "bg-[#FFD6E0]" : ""
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-gray-700">
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* AI Prediction Card */}
        <div className="bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Moon className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">{t.title}</h2>
            </div>

            <div className="mt-6">
              <p className="text-sm opacity-90 mb-2">{t.nextPeriod}</p>
              <p className="text-4xl sm:text-5xl font-bold mb-4">
                {cycleData.nextPeriod}
              </p>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Check className="w-4 h-4" />
                {cycleData.confidence}% {t.accuracy}
              </span>
            </div>

            <button className="w-full bg-white text-[#E75480] mt-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
              {t.seeFullInsight}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <Calendar className="w-8 h-8 text-[#5D3FD3] mb-2" />
            <p className="text-sm text-gray-600">{t.lastCycle}</p>
            <p className="text-xl font-bold text-gray-900">
              {cycleData.lastCycle}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <Activity className="w-8 h-8 text-[#E75480] mb-2" />
            <p className="text-sm text-gray-600">{t.avgLength}</p>
            <p className="text-xl font-bold text-gray-900">
              {cycleData.avgLength} {t.days}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md col-span-2 sm:col-span-1">
            <Heart className="w-8 h-8 text-[#4CAF50] mb-2" />
            <p className="text-sm text-gray-600">{t.phase}</p>
            <p className="text-xl font-bold text-gray-900">
              {cycleData.currentPhase}
            </p>
          </div>
        </div>

        {/* Health Risk Alert */}
        <div className="bg-red-50 border-l-8 border-red-500 rounded-2xl p-5 sm:p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-red-700 font-bold text-lg mb-2">
                ⚠️ {t.healthAlert}
              </h3>
              <p className="text-red-600 mb-4">{t.alertDesc}</p>
              <button className="text-red-700 font-semibold flex items-center gap-2 hover:underline">
                {t.checkDetails}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Symptoms Trends */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#5D3FD3]" />
            {t.symptoms}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-4 bg-linear-to-r from-[#FFD6E0] to-white rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <symptom.icon className="w-5 h-5 text-[#E75480]" />
                    <span className="font-semibold text-gray-900">
                      {symptom.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#5D3FD3]">
                    {symptom.severity}/5
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-[#E75480] to-[#5D3FD3] h-2 rounded-full transition-all"
                    style={{ width: `${(symptom.severity / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle Timeline Graph */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#5D3FD3]" />
            {t.cycleTimeline}
          </h3>
          <div className="flex items-end justify-between gap-2 h-48">
            {cycleHistory.map((data, idx) => {
              const maxLength = Math.max(...cycleHistory.map((d) => d.length));
              const height = (data.length / maxLength) * 100;
              const isLast = idx === cycleHistory.length - 1;

              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full group cursor-pointer">
                    <div
                      className={`w-full rounded-t-lg transition-all ${
                        isLast
                          ? "bg-linear-to-t from-[#E75480] to-[#5D3FD3]"
                          : "bg-gray-300"
                      }`}
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.length} {t.days}
                      </div>
                    </div>
                    {isLast && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-3 bg-[#E75480] rounded-full animate-ping"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    {data.month}
                  </p>
                </div>
              );
            })}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-linear-to-r from-[#E75480] to-[#5D3FD3] rounded-full flex items-center justify-center mb-2 animate-pulse mx-auto">
                    <Moon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Feb 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hormone Forecast */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-[#5D3FD3]" />
            {t.hormoneTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hormoneEvents.map((event, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl ${
                  event.color === "purple"
                    ? "bg-purple-100 border-2 border-purple-300"
                    : "bg-yellow-100 border-2 border-yellow-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-2xl ${
                      event.color === "purple"
                        ? "text-purple-700"
                        : "text-yellow-700"
                    }`}
                  >
                    {event.color === "purple" ? "⭐" : "😣"}
                  </span>
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      event.color === "purple"
                        ? "bg-purple-200 text-purple-700"
                        : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    Day {event.day}
                  </span>
                </div>
                <p
                  className={`font-bold mb-1 ${
                    event.color === "purple"
                      ? "text-purple-700"
                      : "text-yellow-700"
                  }`}
                >
                  {event.hormone}
                </p>
                <p
                  className={`text-sm ${
                    event.color === "purple"
                      ? "text-purple-600"
                      : "text-yellow-600"
                  }`}
                >
                  {event.effect}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Guidance */}
        <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg border-2 border-[#4CAF50]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{t.todayRec} 🌱</h3>
          </div>
          <ul className="space-y-3">
            {t.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 flex-1">{tip}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all">
            <Edit2 className="w-5 h-5" />
            {t.editData}
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-2xl font-bold hover:shadow-xl transition-all">
            <Stethoscope className="w-5 h-5" />
            {t.connectDoc}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

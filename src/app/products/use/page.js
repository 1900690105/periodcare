"use client";

import React, { useState } from "react";
import {
  Droplet,
  AlertTriangle,
  TrendingUp,
  Leaf,
  Clock,
  Plus,
  Minus,
  ShoppingBag,
  Stethoscope,
  BookOpen,
  Trash2,
  Award,
  Check,
  ChevronRight,
  Globe,
  ChevronDown,
  Apple,
  Shield,
  Zap,
  Calendar,
} from "lucide-react";

export default function ProductUsageTracker() {
  const [padCount, setPadCount] = useState(2);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [showLangMenu, setShowLangMenu] = useState(false);

  const translations = {
    en: {
      title: "Product Usage Tracker",
      nav: "Tracker → Product Usage",
      usageSummary: "Usage Summary",
      cycle: "Cycle",
      padsUsed: "Pads Used",
      tampons: "Tampons",
      cup: "Cup",
      active: "Active",
      heavyDays: "Heavy flow days detected",
      flowPredictor: "Flow Predictor",
      heavyFlow: "Heavy Flow Today",
      changeEvery: "Change every 3-4 hours to stay safe",
      riskAlert: "Risk: Leak & rash",
      dailyUsage: "Daily Usage Graph",
      day: "Day",
      flow: "Flow",
      rashRisk: "Rash Risk",
      high: "High",
      medium: "Medium",
      low: "Low",
      hygieneWarning: "Hygiene Warning",
      warningText: "Wearing pad over 8 hours can cause infections & rashes",
      sustainability: "Sustainability Badge",
      wasteSaved: "Waste saved this cycle",
      plasticAvoided: "Plastic pads avoided",
      approx: "approx.",
      smartSuggestions: "Smart Suggestions",
      suggestions: [
        "Try softer pads if rashes continue",
        "Switch to menstrual cup for lower cost + zero waste 🌿",
        "Backup pantyliner recommended on heavy flow days",
      ],
      quickInput: "Quick Input",
      today: "today",
      selectProduct: "Select Product",
      pad: "Pad",
      tampon: "Tampon",
      quantity: "Quantity",
      flowLevel: "Flow level",
      light: "Light",
      moderate: "Moderate",
      heavy: "Heavy",
      medicalInsight: "Medical Insight",
      menorrhagia: "Possible Menorrhagia (Heavy bleeding)",
      anemiaRisk: "Risk of anemia — consider iron-rich food",
      pmsTracking: "PMS signs increasing this cycle — track symptoms?",
      talkDoctor: "Talk to a Doctor",
      learnHygiene: "Learn Hygiene Tips",
      ecoProducts: "See Eco-friendly Products",
      addUsage: "Add Usage",
    },
    hi: {
      title: "उत्पाद उपयोग ट्रैकर",
      nav: "ट्रैकर → उत्पाद उपयोग",
      usageSummary: "उपयोग सारांश",
      cycle: "चक्र",
      padsUsed: "पैड उपयोग",
      tampons: "टैम्पोन",
      cup: "कप",
      active: "सक्रिय",
      heavyDays: "भारी प्रवाह दिन पाए गए",
      flowPredictor: "प्रवाह पूर्वानुमान",
      heavyFlow: "आज भारी प्रवाह",
      changeEvery: "सुरक्षित रहने के लिए हर 3-4 घंटे में बदलें",
      riskAlert: "जोखिम: रिसाव और चकत्ते",
      dailyUsage: "दैनिक उपयोग ग्राफ",
      day: "दिन",
      flow: "प्रवाह",
      rashRisk: "चकत्ते का जोखिम",
      high: "उच्च",
      medium: "मध्यम",
      low: "कम",
      hygieneWarning: "स्वच्छता चेतावनी",
      warningText:
        "8 घंटे से अधिक समय तक पैड पहनने से संक्रमण और चकत्ते हो सकते हैं",
      sustainability: "स्थिरता बैज",
      wasteSaved: "इस चक्र में बचाया गया कचरा",
      plasticAvoided: "प्लास्टिक पैड से बचा",
      approx: "लगभग।",
      smartSuggestions: "स्मार्ट सुझाव",
      suggestions: [
        "यदि चकत्ते जारी रहें तो नरम पैड आज़माएं",
        "कम लागत + शून्य अपशिष्ट के लिए मासिक धर्म कप पर स्विच करें 🌿",
        "भारी प्रवाह वाले दिनों में बैकअप पैंटीलाइनर की सिफारिश की जाती है",
      ],
      quickInput: "त्वरित इनपुट",
      today: "आज",
      selectProduct: "उत्पाद चुनें",
      pad: "पैड",
      tampon: "टैम्पोन",
      quantity: "मात्रा",
      flowLevel: "प्रवाह स्तर",
      light: "हल्का",
      moderate: "मध्यम",
      heavy: "भारी",
      medicalInsight: "चिकित्सा अंतर्दृष्टि",
      menorrhagia: "संभावित मेनोरेजिया (भारी रक्तस्राव)",
      anemiaRisk: "एनीमिया का खतरा — आयरन युक्त भोजन पर विचार करें",
      pmsTracking: "इस चक्र में PMS संकेत बढ़ रहे हैं — लक्षणों को ट्रैक करें?",
      talkDoctor: "डॉक्टर से बात करें",
      learnHygiene: "स्वच्छता युक्तियाँ सीखें",
      ecoProducts: "पर्यावरण के अनुकूल उत्पाद देखें",
      addUsage: "उपयोग जोड़ें",
    },
    mr: {
      title: "उत्पाद वापर ट्रॅकर",
      nav: "ट्रॅकर → उत्पाद वापर",
      usageSummary: "वापर सारांश",
      cycle: "चक्र",
      padsUsed: "पॅड वापर",
      tampons: "टॅम्पॉन",
      cup: "कप",
      active: "सक्रिय",
      heavyDays: "जास्त प्रवाह दिवस आढळले",
      flowPredictor: "प्रवाह अंदाज",
      heavyFlow: "आज जास्त प्रवाह",
      changeEvery: "सुरक्षित राहण्यासाठी दर 3-4 तासांनी बदला",
      riskAlert: "धोका: गळती आणि पुरळ",
      dailyUsage: "दैनंदिन वापर आलेख",
      day: "दिवस",
      flow: "प्रवाह",
      rashRisk: "पुरळ धोका",
      high: "उच्च",
      medium: "मध्यम",
      low: "कमी",
      hygieneWarning: "स्वच्छता चेतावणी",
      warningText:
        "8 तासांपेक्षा जास्त काळ पॅड घालल्याने संसर्ग आणि पुरळ होऊ शकतात",
      sustainability: "स्थिरता बॅज",
      wasteSaved: "या चक्रात वाचवलेला कचरा",
      plasticAvoided: "प्लास्टिक पॅड टाळले",
      approx: "अंदाजे।",
      smartSuggestions: "स्मार्ट सूचना",
      suggestions: [
        "पुरळ चालू राहिल्यास मऊ पॅड वापरून पहा",
        "कमी खर्च + शून्य कचरा साठी मासिक पाळी कप वर स्विच करा 🌿",
        "जास्त प्रवाह असलेल्या दिवशी बॅकअप पॅन्टीलाइनरची शिफारस",
      ],
      quickInput: "जलद इनपुट",
      today: "आज",
      selectProduct: "उत्पाद निवडा",
      pad: "पॅड",
      tampon: "टॅम्पॉन",
      quantity: "प्रमाण",
      flowLevel: "प्रवाह पातळी",
      light: "हलका",
      moderate: "मध्यम",
      heavy: "जास्त",
      medicalInsight: "वैद्यकीय अंतर्दृष्टी",
      menorrhagia: "संभाव्य मेनोरेजिया (जास्त रक्तस्त्राव)",
      anemiaRisk: "अशक्तपणाचा धोका — लोह-समृद्ध अन्नाचा विचार करा",
      pmsTracking: "या चक्रात PMS चिन्हे वाढत आहेत — लक्षणे ट्रॅक करा?",
      talkDoctor: "डॉक्टरांशी बोला",
      learnHygiene: "स्वच्छता टिप्स शिका",
      ecoProducts: "पर्यावरणपूरक उत्पादने पहा",
      addUsage: "वापर जोडा",
    },
  };

  const t = translations[language];

  const usageData = {
    cycle: "Feb 2–7",
    padsUsed: 12,
    tampons: 0,
    cup: true,
    heavyDays: 2,
  };

  const dailyUsage = [
    { day: 1, pads: 3, flow: "heavy", rash: "high", color: "🔴" },
    { day: 2, pads: 2, flow: "moderate", rash: "medium", color: "🟠" },
    { day: 3, pads: 3, flow: "heavy", rash: "high", color: "🔴" },
    { day: 4, pads: 2, flow: "moderate", rash: "medium", color: "🟠" },
    { day: 5, pads: 2, flow: "light", rash: "low", color: "🟡" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  const getRashColor = (level) => {
    if (level === "high") return "text-red-600 bg-red-100";
    if (level === "medium") return "text-yellow-600 bg-yellow-100";
    return "text-green-600 bg-green-100";
  };

  const getRashText = (level) => {
    if (level === "high") return t.high;
    if (level === "medium") return t.medium;
    return t.low;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 pb-8">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{t.nav}</p>
              <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
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
        {/* Usage Summary Card */}
        <div className="bg-linear-to-r from-pink-100 to-purple-100 p-6 rounded-2xl shadow-lg border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#E75480] rounded-full flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              {t.usageSummary}
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            {t.cycle}: {usageData.cycle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600">{t.padsUsed}</p>
              <p className="text-3xl font-bold text-[#E75480]">
                {usageData.padsUsed}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600">{t.tampons}</p>
              <p className="text-3xl font-bold text-[#5D3FD3]">
                {usageData.tampons}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600">{t.cup}</p>
              <p className="text-2xl font-bold text-[#4CAF50]">
                {usageData.cup ? "✓ " + t.active : "—"}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 bg-rose-100 p-3 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span className="text-sm text-rose-700 font-semibold">
              {t.heavyDays}: {usageData.heavyDays}
            </span>
          </div>
        </div>

        {/* Flow Predictor */}
        <div className="bg-linear-to-br from-rose-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{t.flowPredictor}</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <p className="text-2xl font-bold mb-2">🔥 {t.heavyFlow}</p>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5" />
              <p className="text-sm">{t.changeEvery}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-semibold">{t.riskAlert}</span>
            </div>
          </div>
        </div>

        {/* Daily Usage Graph */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#5D3FD3]" />
            {t.dailyUsage}
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="flex items-end justify-between gap-3 h-64 mb-6">
                {dailyUsage.map((data, idx) => {
                  const maxPads = Math.max(...dailyUsage.map((d) => d.pads));
                  const height = (data.pads / maxPads) * 100;

                  return (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="relative w-full group cursor-pointer">
                        <div
                          className="w-full bg-linear-to-t from-[#E75480] to-[#FFD6E0] rounded-t-xl transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <p className="font-semibold">{data.pads} pads</p>
                            <p>
                              {data.color} {data.flow}
                            </p>
                          </div>
                        </div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
                          {data.color}
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mt-3">
                        {t.day} {data.day}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full mt-2 font-semibold ${getRashColor(
                          data.rash
                        )}`}
                      >
                        {getRashText(data.rash)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Hygiene Warning */}
        <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-5 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-red-700 font-bold text-lg mb-2">
                ⚠️ {t.hygieneWarning}
              </h3>
              <p className="text-red-600">{t.warningText}</p>
            </div>
          </div>
        </div>

        {/* Sustainability Badge */}
        <div className="bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl p-6 shadow-lg border-2 border-green-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {t.sustainability} 🌱
            </h3>
          </div>
          <p className="text-gray-700 font-semibold mb-2">{t.wasteSaved}</p>
          <div className="flex items-center gap-2 bg-white rounded-xl p-4">
            <Award className="w-8 h-8 text-[#4CAF50]" />
            <div>
              <p className="text-2xl font-bold text-[#4CAF50]">8</p>
              <p className="text-sm text-gray-600">
                {t.plasticAvoided} {t.approx}
              </p>
            </div>
          </div>
        </div>

        {/* Smart Suggestions */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#5D3FD3]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#5D3FD3] rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {t.smartSuggestions}
            </h3>
          </div>
          <ul className="space-y-3">
            {t.suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl"
              >
                <div className="w-6 h-6 bg-[#5D3FD3] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 flex-1">{suggestion}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Input Widget */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            {t.quickInput}
          </h3>
          <div className="flex items-center justify-between bg-linear-to-r from-[#FFD6E0] to-white p-4 rounded-xl">
            <button
              onClick={() => padCount > 0 && setPadCount(padCount - 1)}
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-gray-700" />
            </button>
            <span className="text-xl font-bold text-gray-900">
              {t.padsUsed}: {padCount} {t.today}
            </span>
            <button
              onClick={() => setPadCount(padCount + 1)}
              className="w-12 h-12 bg-linear-to-r from-[#E75480] to-[#5D3FD3] rounded-xl hover:shadow-lg transition-all flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button className="py-3 px-4 border-2 border-[#E75480] text-[#E75480] rounded-xl font-semibold hover:bg-[#FFD6E0] transition-colors">
              {t.pad}
            </button>
            <button className="py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              {t.tampon}
            </button>
            <button className="py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              {t.cup}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                {t.flowLevel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2 bg-yellow-100 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-200">
                  {t.light}
                </button>
                <button className="py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold hover:bg-orange-200">
                  {t.moderate}
                </button>
                <button className="py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200">
                  {t.heavy}
                </button>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 py-4 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-xl font-bold hover:shadow-xl transition-all">
            {t.addUsage}
          </button>
        </div>

        {/* Medical Insight */}
        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-blue-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {t.medicalInsight}
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-gray-700">{t.menorrhagia}</p>
            </li>
            <li className="flex items-start gap-3">
              <Apple className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-gray-700">{t.anemiaRisk} 🍎</p>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-gray-700">{t.pmsTracking}</p>
            </li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex items-center justify-center gap-2 py-4 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-xl font-bold hover:shadow-xl transition-all">
            <Stethoscope className="w-5 h-5" />
            {t.talkDoctor}
          </button>
          <button className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
            <BookOpen className="w-5 h-5" />
            {t.learnHygiene}
          </button>
          <button className="flex items-center justify-center gap-2 py-4 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-xl transition-all">
            <Leaf className="w-5 h-5" />
            {t.ecoProducts}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Heart,
  Apple,
  Sun,
  Droplet,
  Zap,
  Brain,
  Moon,
  ChevronRight,
  ChevronLeft,
  Share2,
  Calendar,
  Globe,
  ChevronDown,
  Check,
  AlertCircle,
  Pill,
  Utensils,
  Star,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const ResultsPage = ({ t, formData, getEnergyEmoji }) => {
  const risks = [
    {
      name: t.deficiencies.iron,
      level: t.highRisk,
      color: "red",
      percentage: 85,
    },
    {
      name: t.deficiencies.b12,
      level: t.moderateRisk,
      color: "orange",
      percentage: 60,
    },
    {
      name: t.deficiencies.vitd,
      level: t.lowRisk,
      color: "green",
      percentage: 30,
    },
    {
      name: t.deficiencies.omega,
      level: t.possibleNeed,
      color: "yellow",
      percentage: 45,
    },
  ];

  const foods = [
    {
      title: t.foods.ironTitle,
      list: t.foods.ironList,
      icon: "🥬",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: t.foods.b12Title,
      list: t.foods.b12List,
      icon: "🍳",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: t.foods.vitdTitle,
      list: t.foods.vitdList,
      icon: "🌞",
      color: "from-yellow-300 to-yellow-500",
    },
    {
      title: t.foods.omegaTitle,
      list: t.foods.omegaList,
      icon: "🐟",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FF6FAE]">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-[#FF6FAE]" />
          {t.yourSummary}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-pink-50 rounded-xl">
            <p className="text-xs text-gray-600 mb-1">Symptoms</p>
            <p className="font-semibold text-gray-900">
              {formData.symptoms.length} selected
            </p>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl">
            <p className="text-xs text-gray-600 mb-1">Energy</p>
            <p className="font-semibold text-gray-900">
              {getEnergyEmoji(formData.energy)} {formData.energy}%
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-xs text-gray-600 mb-1">Flow</p>
            <p className="font-semibold text-gray-900">
              {formData.flow || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* AI Analysis Score */}
      <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{t.aiScore}</h3>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-medium">
              Overall Health Score
            </span>
            <span className="text-2xl font-bold text-[#FF6FAE]">72/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] h-3 rounded-full"
              style={{ width: "72%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Risk Detection */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-[#FF6FAE]" />
          {t.riskDetection}
        </h3>
        <div className="space-y-4">
          {risks.map((risk, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{risk.name}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    risk.color === "red"
                      ? "bg-red-100 text-red-700"
                      : risk.color === "orange"
                      ? "bg-orange-100 text-orange-700"
                      : risk.color === "green"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {risk.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    risk.color === "red"
                      ? "bg-red-500"
                      : risk.color === "orange"
                      ? "bg-orange-500"
                      : risk.color === "green"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                  style={{ width: `${risk.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Apple className="w-6 h-6 text-[#FF6FAE]" />
          {t.foodRec}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {foods.map((food, idx) => (
            <div
              key={idx}
              className={`bg-linear-to-br ${food.color} rounded-2xl p-5 text-white shadow-lg`}
            >
              <div className="text-4xl mb-3">{food.icon}</div>
              <h4 className="font-bold text-lg mb-2">{food.title}</h4>
              <p className="text-sm opacity-90">{food.list}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supplement Guide */}
      <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-blue-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Pill className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            {t.supplementGuide}
          </h3>
        </div>
        <p className="text-gray-700 mb-4 font-medium">
          💊 {t.supplementWarning}
        </p>
        <ul className="space-y-2 mb-4">
          {t.supplements.map((supp, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-white p-3 rounded-xl"
            >
              <Check className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-gray-700">{supp}</span>
            </li>
          ))}
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">{t.disclaimer}</p>
        </div>
      </div>

      {/* Bonus Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-5 shadow-lg border-2 border-green-300">
          <Utensils className="w-8 h-8 text-green-600 mb-3" />
          <h4 className="font-bold text-gray-900 mb-2">{t.mealPlan}</h4>
          <p className="text-sm text-gray-600">
            Get personalized daily meal suggestions
          </p>
        </div>
        <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-5 shadow-lg border-2 border-pink-300">
          <Calendar className="w-8 h-8 text-pink-600 mb-3" />
          <h4 className="font-bold text-gray-900 mb-2">{t.cycleTips}</h4>
          <p className="text-sm text-gray-600">
            Nutrition tips for each cycle phase
          </p>
        </div>
      </div>

      {/* Share Button */}
      <button className="w-full py-4 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] text-white rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
        <Share2 className="w-5 h-5" />
        {t.shareReport}
      </button>
    </div>
  );
};

export default function NutritionDeficiencyTracker() {
  const params = useSearchParams();
  const lan = params.get("lang") || "en";
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [language, setLanguage] = useState(lan || "en");
  const [showLangMenu, setShowLangMenu] = useState(false);

  const [formData, setFormData] = useState({
    symptoms: [],
    energy: 50,
    flow: "",
    acne: "",
    hairFall: "",
    tongueSign: "",
    skinSigns: [],
  });

  const translations = {
    en: {
      title: "Nutrition Deficiency Risk Detection",
      subtitle: "Understand your body's signals to improve your cycle health",
      step: "Step",
      of: "of",
      next: "Next Step",
      back: "Back",
      showReport: "Show My Risk Report",

      // Step 1
      step1Title: "Select Your Symptoms",
      symptoms: {
        fatigue: "Fatigue",
        cramps: "Leg Cramps",
        stamina: "Low Stamina",
        mood: "Mood Swings",
        dizzy: "Dizziness",
        fog: "Brain Fog",
      },

      // Step 2
      step2Title: "Energy Levels",
      energyLow: "Low",
      energyMed: "Medium",
      energyHigh: "High",

      // Step 3
      step3Title: "Flow Level",
      light: "Light",
      medium: "Medium",
      heavy: "Heavy",
      veryHeavy: "Very Heavy",

      // Step 4
      step4Title: "Acne & Hair Fall",
      acneLabel: "Acne Level",
      hairLabel: "Hair Fall",
      none: "None",
      mild: "Mild",
      moderate: "Moderate",
      severe: "Severe",
      heavyFall: "Heavy",

      // Step 5
      step5Title: "Tongue & Skin Signs",
      tongueLabel: "Tongue Signs",
      skinLabel: "Skin Signs",
      tongueTip:
        "These indicators can help detect vitamin + mineral deficiencies",
      pale: "Pale",
      red: "Red",
      cracked: "Cracked",
      coated: "Coated White",
      smooth: "Smooth/Glossy",
      dry: "Dry Skin",
      dark: "Dark Patches",
      nails: "Brittle Nails",
      lips: "Cracked Lips",

      // Results
      yourSummary: "Your Summary",
      riskDetection: "Risk Detection Summary",
      highRisk: "High Risk",
      moderateRisk: "Moderate Risk",
      lowRisk: "Low Risk",
      possibleNeed: "Possible Need",
      foodRec: "Food Recommendations",
      supplementGuide: "Supplement Guidance",
      supplementWarning: "If diet is not enough, consider these...",
      disclaimer: "⚠️ Ask your doctor before starting new supplements",
      shareReport: "Share Report",

      deficiencies: {
        iron: "Iron Deficiency",
        b12: "Vitamin B12",
        vitd: "Vitamin D",
        omega: "Omega-3",
      },

      foods: {
        ironTitle: "Iron-rich Foods",
        ironList: "Spinach, beetroot, ragi, jaggery",
        b12Title: "B12 Foods",
        b12List: "Eggs, fortified cereals, dairy",
        vitdTitle: "Vitamin D",
        vitdList: "Sunlight + mushrooms",
        omegaTitle: "Omega-3 Foods",
        omegaList: "Walnuts, flaxseeds, fish",
      },

      supplements: [
        "Iron + Vitamin C combo",
        "B-complex vitamins",
        "Omega-3 capsules",
        "Vitamin D3 weekly drops",
      ],

      aiScore: "AI Analysis Score",
      mealPlan: "Daily Meal Plan Suggestion",
      cycleTips: "Cycle Phase Nutrition Tips",
    },
    hi: {
      title: "पोषण की कमी जोखिम पता लगाना",
      subtitle:
        "अपने चक्र स्वास्थ्य को बेहतर बनाने के लिए अपने शरीर के संकेतों को समझें",
      step: "चरण",
      of: "का",
      next: "अगला कदम",
      back: "पीछे",
      showReport: "मेरी जोखिम रिपोर्ट दिखाएं",

      step1Title: "अपने लक्षण चुनें",
      symptoms: {
        fatigue: "थकान",
        cramps: "पैर में ऐंठन",
        stamina: "कम सहनशक्ति",
        mood: "मूड स्विंग",
        dizzy: "चक्कर आना",
        fog: "दिमाग में धुंध",
      },

      step2Title: "ऊर्जा स्तर",
      energyLow: "कम",
      energyMed: "मध्यम",
      energyHigh: "उच्च",

      step3Title: "प्रवाह स्तर",
      light: "हल्का",
      medium: "मध्यम",
      heavy: "भारी",
      veryHeavy: "बहुत भारी",

      step4Title: "मुंहासे और बाल झड़ना",
      acneLabel: "मुंहासे स्तर",
      hairLabel: "बाल झड़ना",
      none: "कोई नहीं",
      mild: "हल्का",
      moderate: "मध्यम",
      severe: "गंभीर",
      heavyFall: "भारी",

      step5Title: "जीभ और त्वचा के संकेत",
      tongueLabel: "जीभ के संकेत",
      skinLabel: "त्वचा के संकेत",
      tongueTip:
        "ये संकेतक विटामिन + खनिज की कमी का पता लगाने में मदद कर सकते हैं",
      pale: "पीला",
      red: "लाल",
      cracked: "फटा हुआ",
      coated: "सफेद लेपित",
      smooth: "चिकना/चमकदार",
      dry: "रूखी त्वचा",
      dark: "काले धब्बे",
      nails: "भंगुर नाखून",
      lips: "फटे होंठ",

      yourSummary: "आपका सारांश",
      riskDetection: "जोखिम पहचान सारांश",
      highRisk: "उच्च जोखिम",
      moderateRisk: "मध्यम जोखिम",
      lowRisk: "कम जोखिम",
      possibleNeed: "संभावित आवश्यकता",
      foodRec: "भोजन की सिफारिशें",
      supplementGuide: "पूरक मार्गदर्शन",
      supplementWarning: "यदि आहार पर्याप्त नहीं है, तो इन पर विचार करें...",
      disclaimer: "⚠️ नए सप्लीमेंट्स शुरू करने से पहले अपने डॉक्टर से पूछें",
      shareReport: "रिपोर्ट साझा करें",

      deficiencies: {
        iron: "आयरन की कमी",
        b12: "विटामिन B12",
        vitd: "विटामिन D",
        omega: "ओमेगा-3",
      },

      foods: {
        ironTitle: "आयरन युक्त खाद्य पदार्थ",
        ironList: "पालक, चुकंदर, रागी, गुड़",
        b12Title: "B12 खाद्य पदार्थ",
        b12List: "अंडे, फोर्टिफाइड अनाज, डेयरी",
        vitdTitle: "विटामिन D",
        vitdList: "धूप + मशरूम",
        omegaTitle: "ओमेगा-3 खाद्य पदार्थ",
        omegaList: "अखरोट, अलसी के बीज, मछली",
      },

      supplements: [
        "आयरन + विटामिन C कॉम्बो",
        "B-कॉम्प्लेक्स विटामिन",
        "ओमेगा-3 कैप्सूल",
        "विटामिन D3 साप्ताहिक ड्रॉप्स",
      ],

      aiScore: "AI विश्लेषण स्कोर",
      mealPlan: "दैनिक भोजन योजना सुझाव",
      cycleTips: "चक्र चरण पोषण युक्तियाँ",
    },
    mr: {
      title: "पोषण कमतरता जोखीम शोध",
      subtitle:
        "तुमच्या चक्र आरोग्य सुधारण्यासाठी तुमच्या शरीराचे संकेत समजून घ्या",
      step: "पायरी",
      of: "चा",
      next: "पुढील पायरी",
      back: "मागे",
      showReport: "माझा जोखीम अहवाल दाखवा",

      step1Title: "तुमची लक्षणे निवडा",
      symptoms: {
        fatigue: "थकवा",
        cramps: "पाय दुखणे",
        stamina: "कमी तग",
        mood: "मूड बदल",
        dizzy: "चक्कर येणे",
        fog: "मेंदूत अंधुक",
      },

      step2Title: "ऊर्जा पातळी",
      energyLow: "कमी",
      energyMed: "मध्यम",
      energyHigh: "उच्च",

      step3Title: "प्रवाह पातळी",
      light: "हलका",
      medium: "मध्यम",
      heavy: "जास्त",
      veryHeavy: "खूप जास्त",

      step4Title: "पुरळ आणि केस गळणे",
      acneLabel: "पुरळ पातळी",
      hairLabel: "केस गळणे",
      none: "काहीही नाही",
      mild: "हलके",
      moderate: "मध्यम",
      severe: "गंभीर",
      heavyFall: "जास्त",

      step5Title: "जीभ आणि त्वचा चिन्हे",
      tongueLabel: "जीभ चिन्हे",
      skinLabel: "त्वचा चिन्हे",
      tongueTip:
        "हे संकेतक जीवनसत्त्वे + खनिजांची कमतरता ओळखण्यास मदत करू शकतात",
      pale: "फिकट",
      red: "लाल",
      cracked: "फाटलेली",
      coated: "पांढरी लेप",
      smooth: "गुळगुळीत/चमकदार",
      dry: "कोरडी त्वचा",
      dark: "गडद ठिपके",
      nails: "नाजूक नखे",
      lips: "फाटलेले ओठ",

      yourSummary: "तुमचा सारांश",
      riskDetection: "जोखीम शोध सारांश",
      highRisk: "उच्च जोखीम",
      moderateRisk: "मध्यम जोखीम",
      lowRisk: "कमी जोखीम",
      possibleNeed: "संभाव्य गरज",
      foodRec: "अन्न शिफारसी",
      supplementGuide: "पूरक मार्गदर्शन",
      supplementWarning: "जर आहार पुरेसा नसेल तर याचा विचार करा...",
      disclaimer:
        "⚠️ नवीन सप्लिमेंट्स सुरू करण्यापूर्वी तुमच्या डॉक्टरांना विचारा",
      shareReport: "अहवाल सामायिक करा",

      deficiencies: {
        iron: "लोहाची कमतरता",
        b12: "व्हिटॅमिन B12",
        vitd: "व्हिटॅमिन D",
        omega: "ओमेगा-3",
      },

      foods: {
        ironTitle: "लोह-समृद्ध अन्न",
        ironList: "पालक, बीट, रागी, गूळ",
        b12Title: "B12 अन्न",
        b12List: "अंडी, फोर्टिफाइड धान्य, दुग्धपदार्थ",
        vitdTitle: "व्हिटॅमिन D",
        vitdList: "सूर्यप्रकाश + मशरूम",
        omegaTitle: "ओमेगा-3 अन्न",
        omegaList: "अक्रोड, जवस बियाणे, मासे",
      },

      supplements: [
        "लोह + व्हिटॅमिन C कॉम्बो",
        "B-कॉम्प्लेक्स जीवनसत्त्वे",
        "ओमेगा-3 कॅप्सूल",
        "व्हिटॅमिन D3 साप्ताहिक थेंब",
      ],

      aiScore: "AI विश्लेषण स्कोअर",
      mealPlan: "दैनंदिन जेवणाची योजना सूचना",
      cycleTips: "चक्र टप्पा पोषण टिप्स",
    },
  };

  const t = translations[language];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  const symptomsList = [
    { id: "fatigue", label: t.symptoms.fatigue, icon: "😴", color: "pink" },
    { id: "cramps", label: t.symptoms.cramps, icon: "🦵", color: "purple" },
    { id: "stamina", label: t.symptoms.stamina, icon: "💪", color: "blue" },
    { id: "mood", label: t.symptoms.mood, icon: "😢", color: "yellow" },
    { id: "dizzy", label: t.symptoms.dizzy, icon: "😵", color: "red" },
    { id: "fog", label: t.symptoms.fog, icon: "🧠", color: "indigo" },
  ];

  const toggleSymptom = (symptom) => {
    setFormData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const getEnergyEmoji = (value) => {
    if (value < 35) return "😴";
    if (value < 70) return "🙂";
    return "⚡";
  };

  const totalSteps = 5;

  if (showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#FFF8FC] via-[#FFE8F5] to-[#F5E8FF] pb-8">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
              <button
                onClick={() => setShowResults(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                {t.back}
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <ResultsPage
            t={t}
            formData={formData}
            getEnergyEmoji={getEnergyEmoji}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-gray-600 mt-1">{t.subtitle}</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-5 h-5 text-gray-600" />
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
                        language === lang.code ? "bg-[#FFE8F5]" : ""
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

          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-4">
            {[...Array(totalSteps)].map((_, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex-1 h-2 rounded-full transition-all ${
                    idx + 1 <= currentStep
                      ? "bg-linear-to-r from-[#FF6FAE] to-[#B48DF1]"
                      : "bg-gray-200"
                  }`}
                ></div>
                {idx < totalSteps - 1 && (
                  <span className="text-xs font-semibold text-gray-500">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            {t.step} {currentStep} {t.of} {totalSteps}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          {/* Step 1 - Symptoms */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.step1Title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {symptomsList.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`p-4 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.symptoms.includes(symptom.id)
                        ? "border-[#FF6FAE] bg-linear-to-br from-pink-50 to-purple-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-[#B48DF1]"
                    }`}
                  >
                    <div className="text-3xl mb-2">{symptom.icon}</div>
                    <p className="font-semibold text-gray-900">
                      {symptom.label}
                    </p>
                    {formData.symptoms.includes(symptom.id) && (
                      <div className="mt-2">
                        <Check className="w-5 h-5 text-[#FF6FAE] mx-auto" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Energy Levels */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.step2Title}
                </h2>
              </div>

              <div className="text-center mb-6">
                <div className="text-7xl mb-4 animate-bounce">
                  {getEnergyEmoji(formData.energy)}
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  {formData.energy}%
                </p>
              </div>

              <div className="px-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.energy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      energy: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-linear(to right, #FF6FAE 0%, #B48DF1 ${formData.energy}%, #e5e7eb ${formData.energy}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>😴 {t.energyLow}</span>
                  <span>🙂 {t.energyMed}</span>
                  <span>⚡ {t.energyHigh}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 - Flow Level */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Droplet className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.step3Title}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    value: t.light,
                    drops: 1,
                    color: "from-pink-200 to-pink-300",
                  },
                  {
                    value: t.medium,
                    drops: 2,
                    color: "from-pink-300 to-pink-400",
                  },
                  {
                    value: t.heavy,
                    drops: 3,
                    color: "from-pink-400 to-pink-500",
                  },
                  {
                    value: t.veryHeavy,
                    drops: 4,
                    color: "from-pink-500 to-pink-600",
                  },
                ].map((flow, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setFormData({ ...formData, flow: flow.value })
                    }
                    className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.flow === flow.value
                        ? "border-[#FF6FAE] bg-linear-to-br from-pink-50 to-purple-50 shadow-xl"
                        : "border-gray-200 bg-white hover:border-[#B48DF1]"
                    }`}
                  >
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(flow.drops)].map((_, i) => (
                        <Droplet
                          key={i}
                          className={`w-6 h-6 fill-pink-400 text-pink-400 ${
                            formData.flow === flow.value ? "animate-pulse" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-bold text-gray-900">{flow.value}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 - Acne & Hair Fall */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sun className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.step4Title}
                </h2>
              </div>

              {/* Acne Level */}
              <div className="mb-8">
                <label className="font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                  <span className="text-2xl">🌸</span>
                  {t.acneLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[t.none, t.mild, t.moderate, t.severe].map((level, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFormData({ ...formData, acne: level })}
                      className={`py-4 px-4 rounded-xl border-2 font-semibold transition-all ${
                        formData.acne === level
                          ? "border-[#FF6FAE] bg-linear-to-r from-pink-100 to-purple-100 text-[#FF6FAE]"
                          : "border-gray-200 text-gray-700 hover:border-[#B48DF1]"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Fall */}
              <div>
                <label className="font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                  <span className="text-2xl">💧</span>
                  {t.hairLabel}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[t.none, t.mild, t.heavyFall].map((level, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setFormData({ ...formData, hairFall: level })
                      }
                      className={`py-4 px-4 rounded-xl border-2 font-semibold transition-all ${
                        formData.hairFall === level
                          ? "border-[#FF6FAE] bg-linear-to-r from-pink-100 to-purple-100 text-[#FF6FAE]"
                          : "border-gray-200 text-gray-700 hover:border-[#B48DF1]"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5 - Tongue & Skin Signs */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.step5Title}
                </h2>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">💡 {t.tongueTip}</p>
                </div>
              </div>

              {/* Tongue Signs */}
              <div className="mb-8">
                <label className="font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                  <span className="text-2xl">👅</span>
                  {t.tongueLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[t.pale, t.red, t.cracked, t.coated, t.smooth].map(
                    (sign, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setFormData({ ...formData, tongueSign: sign })
                        }
                        className={`py-4 px-4 rounded-xl border-2 font-semibold transition-all ${
                          formData.tongueSign === sign
                            ? "border-[#FF6FAE] bg-linear-to-r from-pink-100 to-purple-100 text-[#FF6FAE]"
                            : "border-gray-200 text-gray-700 hover:border-[#B48DF1]"
                        }`}
                      >
                        {sign}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Skin Signs */}
              <div>
                <label className="font-semibold text-gray-900 mb-4 block flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  {t.skinLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[t.dry, t.dark, t.nails, t.lips].map((sign, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const signs = formData.skinSigns.includes(sign)
                          ? formData.skinSigns.filter((s) => s !== sign)
                          : [...formData.skinSigns, sign];
                        setFormData({ ...formData, skinSigns: signs });
                      }}
                      className={`py-4 px-4 rounded-xl border-2 font-semibold transition-all ${
                        formData.skinSigns.includes(sign)
                          ? "border-[#FF6FAE] bg-linear-to-r from-pink-100 to-purple-100 text-[#FF6FAE]"
                          : "border-gray-200 text-gray-700 hover:border-[#B48DF1]"
                      }`}
                    >
                      {sign}
                      {formData.skinSigns.includes(sign) && (
                        <Check className="w-4 h-4 inline-block ml-1" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                {t.back}
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex-1 py-4 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] text-white rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {t.next}
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => setShowResults(true)}
                className="flex-1 py-4 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] text-white rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {t.showReport}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

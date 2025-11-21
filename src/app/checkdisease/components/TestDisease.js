"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Plus, X, Globe } from "lucide-react";

const translations = {
  en: {
    title: "Select Your Symptoms",
    subtitle: "Choose the signs you have",
    categories: {
      pain: "Pain & Cramps",
      bleeding: "Bleeding & Flow",
      hormonal: "Hormonal / Cycle",
      skin: "Skin & Hair",
      digestive: "Digestive",
      urinary: "Urinary",
      general: "General Body",
    },
    symptoms: {
      pain: [
        "Severe abdominal cramps",
        "Sharp one-side pelvic pain",
        "Lower back pain",
        "Pain during intercourse",
        "Pain after period",
        "Pain not relieved by medication",
      ],
      bleeding: [
        "Heavy bleeding",
        "Passing blood clots",
        "Spotting between periods",
        "Very light flow",
        "Irregular bleeding",
        "Period lasting > 7 days",
      ],
      hormonal: [
        "Irregular periods",
        "Missed periods",
        "PMS mood swings",
        "PMDD extreme emotions",
        "Sudden weight change",
        "Oily skin",
      ],
      skin: [
        "Severe acne",
        "Hair thinning",
        "Oily scalp",
        "Dark patches on skin",
        "Facial hair growth",
      ],
      digestive: [
        "Nausea during period",
        "Bloating",
        "Diarrhea",
        "Constipation",
        "Vomiting",
      ],
      urinary: [
        "Pain while urinating",
        "Frequent urination",
        "Cloudy urine",
        "Blood in urine",
        "Urgency",
      ],
      general: [
        "Fatigue",
        "Dizziness",
        "Shortness of breath",
        "Headaches",
        "Fainting",
        "Extreme weakness",
      ],
    },
    customSymptom: "Can't find your symptom?",
    customPlaceholder: "Type your symptom...",
    symptomsSelected: "symptoms selected",
    analyzeButton: "Analyze My Symptoms",
    resultsTitle: "Your Results",
    likelyConditions: "Likely Conditions",
    possibleConditions: "Possible Conditions",
    lessLikely: "Less Likely",
    learnMore: "Learn More",
    selfCare: "Self-Care Tips",
    backButton: "Back to Symptoms",
  },
  hi: {
    title: "अपने लक्षण चुनें",
    subtitle: "जो संकेत आपके पास हैं उन्हें चुनें",
    categories: {
      pain: "दर्द और ऐंठन",
      bleeding: "रक्तस्राव और प्रवाह",
      hormonal: "हार्मोनल / चक्र",
      skin: "त्वचा और बाल",
      digestive: "पाचन",
      urinary: "मूत्र संबंधी",
      general: "सामान्य शरीर",
    },
    symptoms: {
      pain: [
        "गंभीर पेट में ऐंठन",
        "एक तरफ तेज पेल्विक दर्द",
        "पीठ के निचले हिस्से में दर्द",
        "संभोग के दौरान दर्द",
        "पीरियड के बाद दर्द",
        "दवा से राहत नहीं मिलना",
      ],
      bleeding: [
        "भारी रक्तस्राव",
        "रक्त के थक्के निकलना",
        "पीरियड्स के बीच स्पॉटिंग",
        "बहुत हल्का प्रवाह",
        "अनियमित रक्तस्राव",
        "पीरियड 7 दिनों से अधिक",
      ],
      hormonal: [
        "अनियमित पीरियड्स",
        "मिस्ड पीरियड्स",
        "पीएमएस मूड स्विंग्स",
        "पीएमडीडी अत्यधिक भावनाएं",
        "अचानक वजन परिवर्तन",
        "तैलीय त्वचा",
      ],
      skin: [
        "गंभीर मुँहासे",
        "बालों का पतला होना",
        "तैलीय खोपड़ी",
        "त्वचा पर काले धब्बे",
        "चेहरे पर बालों का बढ़ना",
      ],
      digestive: ["पीरियड के दौरान मतली", "सूजन", "दस्त", "कब्ज", "उल्टी"],
      urinary: [
        "पेशाब करते समय दर्द",
        "बार-बार पेशाब आना",
        "धुंधला पेशाब",
        "पेशाब में खून",
        "तत्काल पेशाब की आवश्यकता",
      ],
      general: [
        "थकान",
        "चक्कर आना",
        "सांस की तकलीफ",
        "सिरदर्द",
        "बेहोशी",
        "अत्यधिक कमजोरी",
      ],
    },
    customSymptom: "अपना लक्षण नहीं मिल रहा?",
    customPlaceholder: "अपना लक्षण लिखें...",
    symptomsSelected: "लक्षण चुने गए",
    analyzeButton: "मेरे लक्षणों का विश्लेषण करें",
    resultsTitle: "आपके परिणाम",
    likelyConditions: "संभावित स्थितियाँ",
    possibleConditions: "संभव स्थितियाँ",
    lessLikely: "कम संभावित",
    learnMore: "और जानें",
    selfCare: "स्व-देखभाल युक्तियाँ",
    backButton: "लक्षणों पर वापस जाएं",
  },
  mr: {
    title: "तुमची लक्षणे निवडा",
    subtitle: "तुम्हाला असलेली चिन्हे निवडा",
    categories: {
      pain: "वेदना आणि पेटदुखी",
      bleeding: "रक्तस्त्राव आणि प्रवाह",
      hormonal: "हार्मोनल / चक्र",
      skin: "त्वचा आणि केस",
      digestive: "पाचन",
      urinary: "मूत्र संबंधित",
      general: "सामान्य शरीर",
    },
    symptoms: {
      pain: [
        "तीव्र ओटीपोटात पेटदुखी",
        "एका बाजूला तीव्र श्रोणि वेदना",
        "पाठीच्या खालच्या भागात दुखणे",
        "संभोगाच्या वेळी वेदना",
        "पीरियड नंतर वेदना",
        "औषधाने आराम न मिळणे",
      ],
      bleeding: [
        "जास्त रक्तस्त्राव",
        "रक्ताच्या गुठळ्या पडणे",
        "पीरियड्स दरम्यान स्पॉटिंग",
        "खूप कमी प्रवाह",
        "अनियमित रक्तस्त्राव",
        "पीरियड 7 दिवसांपेक्षा जास्त",
      ],
      hormonal: [
        "अनियमित पीरियड्स",
        "मिस्ड पीरियड्स",
        "पीएमएस मूड बदल",
        "पीएमडीडी तीव्र भावना",
        "अचानक वजन बदल",
        "तैलकट त्वचा",
      ],
      skin: [
        "तीव्र मुरुम",
        "केस पातळ होणे",
        "तैलकट टाळू",
        "त्वचेवर काळे डाग",
        "चेहऱ्यावर केसांची वाढ",
      ],
      digestive: [
        "पीरियड दरम्यान मळमळ",
        "सूज येणे",
        "जुलाब",
        "बद्धकोष्ठता",
        "उलट्या",
      ],
      urinary: [
        "लघवी करताना वेदना",
        "वारंवार लघवी",
        "ढगाळ लघवी",
        "लघवीमध्ये रक्त",
        "त्वरित लघवीची गरज",
      ],
      general: [
        "थकवा",
        "चक्कर येणे",
        "श्वास लागणे",
        "डोकेदुखी",
        "बेशुद्ध पडणे",
        "अतिशय कमजोरी",
      ],
    },
    customSymptom: "तुमचे लक्षण सापडत नाही?",
    customPlaceholder: "तुमचे लक्षण टाइप करा...",
    symptomsSelected: "लक्षणे निवडली",
    analyzeButton: "माझ्या लक्षणांचे विश्लेषण करा",
    resultsTitle: "तुमचे परिणाम",
    likelyConditions: "संभाव्य स्थिती",
    possibleConditions: "शक्य स्थिती",
    lessLikely: "कमी संभाव्य",
    learnMore: "अधिक जाणून घ्या",
    selfCare: "स्व-काळजी टिप्स",
    backButton: "लक्षणांकडे परत जा",
  },
};

const categoryIcons = {
  pain: "🔥",
  bleeding: "💧",
  hormonal: "🌙",
  skin: "🌸",
  digestive: "🍽",
  urinary: "🚽",
  general: "🧘",
};

const diseaseDatabase = {
  endometriosis: {
    name: { en: "Endometriosis", hi: "एंडोमेट्रियोसिस", mr: "एंडोमेट्रिओसिस" },
    symptoms: [
      "Severe abdominal cramps",
      "Sharp one-side pelvic pain",
      "Pain during intercourse",
      "Heavy bleeding",
      "Pain not relieved by medication",
      "Nausea during period",
    ],
  },
  adenomyosis: {
    name: { en: "Adenomyosis", hi: "एडिनोमायोसिस", mr: "एडेनोमायोसिस" },
    symptoms: [
      "Severe abdominal cramps",
      "Heavy bleeding",
      "Lower back pain",
      "Period lasting > 7 days",
      "Bloating",
    ],
  },
  pcos: {
    name: { en: "PCOS", hi: "पीसीओएस", mr: "पीसीओएस" },
    symptoms: [
      "Irregular periods",
      "Missed periods",
      "Severe acne",
      "Facial hair growth",
      "Sudden weight change",
      "Oily skin",
      "Hair thinning",
    ],
  },
  fibroids: {
    name: { en: "Fibroids", hi: "फाइब्रॉयड्स", mr: "फायब्रॉइड्स" },
    symptoms: [
      "Heavy bleeding",
      "Passing blood clots",
      "Period lasting > 7 days",
      "Lower back pain",
      "Frequent urination",
      "Bloating",
    ],
  },
  pmdd: {
    name: { en: "PMS/PMDD", hi: "पीएमएस/पीएमडीडी", mr: "पीएमएस/पीएमडीडी" },
    symptoms: [
      "PMS mood swings",
      "PMDD extreme emotions",
      "Fatigue",
      "Bloating",
      "Headaches",
      "Nausea during period",
    ],
  },
};

export default function PeriodSymptomTracker() {
  const [lang, setLang] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("pain");
  const [openCategories, setOpenCategories] = useState(["pain"]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const t = translations[lang];

  const toggleCategory = (cat) => {
    setOpenCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const addCustomSymptom = () => {
    if (customSymptom.trim()) {
      setSelectedSymptoms((prev) => [...prev, `🌼 ${customSymptom.trim()}`]);
      setCustomSymptom("");
    }
  };

  const removeCustomSymptom = (symptom) => {
    setSelectedSymptoms((prev) => prev.filter((s) => s !== symptom));
  };

  const analyzeSymptoms = () => {
    const analysis = Object.entries(diseaseDatabase)
      .map(([key, disease]) => {
        const matches = disease.symptoms.filter((s) =>
          selectedSymptoms.some(
            (sel) => sel.includes(s) || s.includes(sel.replace("🌼 ", ""))
          )
        );
        const percentage = Math.round(
          (matches.length / disease.symptoms.length) * 100
        );
        return {
          name: disease.name[lang],
          percentage,
          matches: matches.length,
        };
      })
      .filter((d) => d.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage);

    setResults(analysis);
    setShowResults(true);
  };

  const resetAnalysis = () => {
    setShowResults(false);
    setResults([]);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 p-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-900">
              {t.resultsTitle}
            </h1>
            <button
              onClick={() =>
                setLang(lang === "en" ? "hi" : lang === "hi" ? "mr" : "en")
              }
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Globe className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 mb-4 shadow-lg">
            <p className="text-purple-700 mb-4">
              {selectedSymptoms.length} {t.symptomsSelected}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {results.filter((r) => r.percentage >= 60).length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-3">
                🔮 {t.likelyConditions}
              </h2>
              {results
                .filter((r) => r.percentage >= 60)
                .map((result, i) => (
                  <div
                    key={i}
                    className="bg-linear-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-3 shadow-md"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-purple-900">
                        {result.name}
                      </h3>
                      <span className="text-2xl font-bold text-pink-600">
                        {result.percentage}%
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 mb-3">
                      {result.matches} matching symptoms
                    </p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors">
                        {t.learnMore}
                      </button>
                      <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors">
                        {t.selfCare}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {results.filter((r) => r.percentage >= 30 && r.percentage < 60)
            .length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-3">
                🌼 {t.possibleConditions}
              </h2>
              {results
                .filter((r) => r.percentage >= 30 && r.percentage < 60)
                .map((result, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 mb-3 shadow-md"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-purple-800">
                        {result.name}
                      </h3>
                      <span className="text-xl font-bold text-purple-600">
                        {result.percentage}%
                      </span>
                    </div>
                    <p className="text-sm text-purple-600">
                      {result.matches} matching symptoms
                    </p>
                  </div>
                ))}
            </div>
          )}

          {results.filter((r) => r.percentage < 30).length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-3">
                💗 {t.lessLikely}
              </h2>
              {results
                .filter((r) => r.percentage < 30)
                .map((result, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-4 mb-3 shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {result.name}
                      </h3>
                      <span className="text-lg font-bold text-gray-500">
                        {result.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <button
            onClick={resetAnalysis}
            className="w-full py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            {t.backButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-purple-900">
                {t.title}
              </h1>
              <p className="text-sm text-purple-600">{t.subtitle}</p>
            </div>
            <button
              onClick={() =>
                setLang(lang === "en" ? "hi" : lang === "hi" ? "mr" : "en")
              }
              className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
            >
              <Globe className="w-5 h-5 text-pink-600" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {Object.keys(t.categories).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (!openCategories.includes(cat)) toggleCategory(cat);
                }}
                className={`flex items-center gap-1 px-3 py-2 rounded-full whitespace-nowrap text-sm md:text-base transition-all ${
                  selectedCategory === cat
                    ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{categoryIcons[cat]}</span>
                <span>{t.categories[cat]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {Object.keys(t.categories).map((cat) => (
          <div key={cat} className="mb-4">
            <button
              onClick={() => toggleCategory(cat)}
              className="w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{categoryIcons[cat]}</span>
                <span className="font-semibold text-purple-900">
                  {t.categories[cat]}
                </span>
              </div>
              {openCategories.includes(cat) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {openCategories.includes(cat) && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
                {t.symptoms[cat].map((symptom, i) => {
                  const isSelected = selectedSymptoms.includes(symptom);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleSymptom(symptom)}
                      className={`p-3 rounded-xl text-left text-sm transition-all ${
                        isSelected
                          ? "bg-linear-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105"
                          : "bg-white border-2 border-pink-200 text-purple-800 hover:border-pink-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span>{symptom}</span>
                        {isSelected && <span className="text-lg">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Custom Symptom */}
        <div className="bg-white rounded-xl p-4 shadow-md mt-6">
          <p className="text-purple-900 font-semibold mb-3 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            {t.customSymptom}
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={customSymptom}
              onChange={(e) => setCustomSymptom(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addCustomSymptom()}
              placeholder={t.customPlaceholder}
              className="flex-1 px-4 py-2 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
            />
            <button
              onClick={addCustomSymptom}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          {selectedSymptoms.filter((s) => s.startsWith("🌼")).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedSymptoms
                .filter((s) => s.startsWith("🌼"))
                .map((s, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {s}
                    <button onClick={() => removeCustomSymptom(s)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t-2 border-pink-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-purple-900">
              <span className="text-2xl font-bold">
                {selectedSymptoms.length}
              </span>
              <span className="text-sm ml-2">{t.symptomsSelected}</span>
            </div>
            <button
              onClick={analyzeSymptoms}
              disabled={selectedSymptoms.length === 0}
              className={`flex-1 max-w-md py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all ${
                selectedSymptoms.length > 0
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {t.analyzeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

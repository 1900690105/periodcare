"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Info,
  Heart,
  Sparkles,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const Cycle = () => {
  const params = useSearchParams();
  const lan = params.get("lang") || "en";
  const [selectedLang, setSelectedLang] = useState(lan || "en");
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const cycle = [
    {
      id: "menstrual_phase",
      phase: {
        en: "Menstrual Phase",
        hi: "मासिक धर्म चरण",
        mr: "मासिक पाळी टप्पा",
      },
      emoji: "🌸",
      duration: "Day 1 - 5",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50",
      what: {
        en: "The uterus sheds its lining causing bleeding.",
        hi: "गर्भाशय की परत झड़ती है जिससे रक्तस्राव होता है।",
        mr: "गर्भाशयाची अस्तर निघून जाते त्यामुळे रक्तस्त्राव होतो.",
      },
      importance: {
        en: "It resets the reproductive system for a new cycle.",
        hi: "यह प्रजनन प्रणाली को नए चक्र के लिए तैयार करता है।",
        mr: "हा टप्पा प्रजनन प्रणालीला नव्या चक्रासाठी तयार करतो.",
      },
      scientific_explanation: {
        en: "Progesterone drops, causing the uterine lining to break down and exit the body.",
        hi: "प्रोजेस्टेरोन कम होने पर गर्भाशय की परत टूटकर शरीर से बाहर निकलती है।",
        mr: "प्रोजेस्टेरोन कमी झाल्यावर गर्भाशयाचे अस्तर तुटून बाहेर पडते.",
      },
      symptoms: {
        en: ["Cramps", "Fatigue", "Back pain", "Bloating"],
        hi: ["ऐंठन", "थकान", "पीठ दर्द", "सूजन"],
        mr: ["पोटदुखी", "थकवा", "पाठदुखी", "फुगणे"],
      },
      myths_reality: {
        en: [
          "Myth: Period blood is dirty. Reality: It's a natural body process.",
          "Myth: You shouldn't exercise. Reality: Light exercise may reduce cramps.",
        ],
        hi: [
          "मिथक: पीरियड का खून गंदा होता है। सच: यह प्राकृतिक प्रक्रिया है।",
          "मिथक: व्यायाम नहीं करना चाहिए। सच: हल्का व्यायाम दर्द कम करता है।",
        ],
        mr: [
          "गैरसमज: पाळीचे रक्त घाण असते. खरे: हे नैसर्गिक आहे.",
          "गैरसमज: व्यायाम करू नये. खरे: हलका व्यायाम वेदना कमी करतो.",
        ],
      },
      hygiene_care: {
        en: [
          "Change pads every 4–6 hours.",
          "Wash hands before and after changing.",
        ],
        hi: [
          "पैड हर 4-6 घंटे में बदलें।",
          "बदलने से पहले और बाद में हाथ धोएँ।",
        ],
        mr: ["पॅड 4-6 तासांनी बदला.", "पॅड बदलण्यापूर्वी आणि नंतर हात धुवा."],
      },
      voice_over: {
        en: "Your body is cleansing and renewing. Be gentle with yourself.",
        hi: "आपका शरीर खुद को नया बना रहा है। अपनी देखभाल करें।",
        mr: "तुमचं शरीर नवं होत आहे. स्वतःची काळजी घ्या.",
      },
    },
    {
      id: "follicular_phase",
      phase: {
        en: "Follicular Phase",
        hi: "फॉलिक्युलर चरण",
        mr: "फॉलिक्युलर टप्पा",
      },
      emoji: "🌱",
      duration: "Day 6 - 14",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      what: {
        en: "A new egg starts developing in the ovary.",
        hi: "अंडाशय में एक नया अंडा विकसित होने लगता है।",
        mr: "अंडाशयात नवे अंड विकसित होते.",
      },
      importance: {
        en: "Prepares the body for possible pregnancy and increases energy.",
        hi: "संभवित गर्भावस्था की तैयारी करता है और ऊर्जा बढ़ाता है।",
        mr: "संभाव्य गर्भधारणेसाठी शरीराची तयारी होते आणि ऊर्जा वाढते.",
      },
      scientific_explanation: {
        en: "FSH hormone stimulates the growth of follicles; estrogen increases, improving mood and skin.",
        hi: "FSH हार्मोन फॉलिकल को विकसित करता है; एस्ट्रोजन बढ़ता है जिससे मूड और त्वचा बेहतर होती है।",
        mr: "FSH हार्मोन फॉलिकल वाढवतो; इस्ट्रोजेन वाढल्याने मूड आणि त्वचा सुधारते.",
      },
      symptoms: {
        en: ["High energy", "Improved mood", "Glowing skin"],
        hi: ["ऊर्जा बढ़ना", "बेहतर मूड", "त्वचा में चमक"],
        mr: ["जास्त ऊर्जा", "चांगला मूड", "त्वचेत तेज"],
      },
      myths_reality: {
        en: [
          "Myth: Fertility is constant each day. Reality: Fertility increases in this phase.",
          "Myth: Skin changes only because of products. Reality: Hormones also improve skin.",
        ],
        hi: [
          "मिथक: हर दिन प्रजनन क्षमता समान रहती है। सच: इस चरण में प्रजनन क्षमता बढ़ती है।",
          "मिथक: त्वचा सिर्फ प्रोडक्ट से बेहतर होती है। सच: हार्मोन भी महत्वपूर्ण भूमिका निभाते हैं।",
        ],
        mr: [
          "गैरसमज: दररोज फलनक्षमता सारखीच असते. खरे: या टप्प्यात ती वाढते.",
          "गैरसमज: त्वचा उत्पादने वापरूनच सुधारते. खरे: हार्मोन्स देखील महत्त्वाचे आहेत.",
        ],
      },
      hygiene_care: {
        en: [
          "Stay hydrated and maintain a balanced diet.",
          "Wear breathable cotton underwear.",
        ],
        hi: [
          "भरपूर पानी पिएँ और संतुलित आहार लें।",
          "सांस लेने योग्य कॉटन अंडरवियर पहनें।",
        ],
        mr: [
          "पुरेसे पाणी प्या आणि संतुलित आहार घ्या.",
          "कॉटनचे अंतर्वस्त्र वापरा.",
        ],
      },
      voice_over: {
        en: "You feel strong and confident — make the most of it!",
        hi: "आप मजबूत और आत्मविश्वासी महसूस करती हैं — इसका पूरा लाभ उठाएँ!",
        mr: "तुम्ही ताकदीने आणि आत्मविश्वासाने भरलेले आहात — याचा लाभ घ्या!",
      },
    },
    {
      id: "ovulation_phase",
      phase: {
        en: "Ovulation Phase",
        hi: "ओव्यूलेशन चरण",
        mr: "अंडोत्सर्जन टप्पा",
      },
      emoji: "☀️",
      duration: "Around Day 14",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      what: {
        en: "The egg is released from the ovary.",
        hi: "अंडाशय से अंडा निकलता है।",
        mr: "अंडाशयातून अंड सोडले जाते.",
      },
      importance: {
        en: "Peak fertility phase — highest chance of pregnancy.",
        hi: "सबसे अधिक प्रजनन क्षमता वाला चरण — गर्भ ठहरने की अधिक संभावना।",
        mr: "सर्वाधिक फलनक्षमता टप्पा — गर्भधारणेची जास्त शक्यता.",
      },
      scientific_explanation: {
        en: "LH hormone spikes, causing the follicle to break open and release the egg.",
        hi: "LH हार्मोन बढ़ने से फॉलिकल फटकर अंडा बाहर आता है।",
        mr: "LH हार्मोन वाढल्याने फॉलिकल फुटून अंड बाहेर येते.",
      },
      symptoms: {
        en: ["Increased confidence", "Stretchy cervical mucus"],
        hi: ["आत्मविश्वास बढ़ना", "चिपचिपा और पारदर्शी डिस्चार्ज"],
        mr: ["आत्मविश्वास वाढलेला", "ताणता येणारा पारदर्शक स्त्राव"],
      },
      myths_reality: {
        en: [
          "Myth: Pregnancy can occur any day. Reality: Highest chance during ovulation.",
          "Myth: Cervical mucus is a sign of infection. Reality: It's a natural fertility sign.",
        ],
        hi: [
          "मिथक: किसी भी दिन गर्भ ठहर सकता है। सच: ओव्यूलेशन में सबसे अधिक संभावना होती है।",
          "मिथक: डिस्चार्ज का मतलब संक्रमण है। सच: यह प्रजनन क्षमता का संकेत है।",
        ],
        mr: [
          "गैरसमज: कोणत्याही दिवशी गर्भ राहू शकतो. खरे: या टप्प्यात सर्वात जास्त शक्यता असते.",
          "गैरसमज: स्त्राव म्हणजे संसर्ग. खरे: हा फलनक्षमतेचा नैसर्गिक संकेत आहे.",
        ],
      },
      hygiene_care: {
        en: [
          "Keep the intimate area clean and dry.",
          "Wear loose, airy clothes to avoid irritation.",
        ],
        hi: [
          "अंतरंग क्षेत्र को साफ और सूखा रखें।",
          "जलन से बचने के लिए ढीले कपड़े पहनें।",
        ],
        mr: [
          "अंतरंग भाग स्वच्छ आणि कोरडा ठेवा.",
          "त्रास होऊ नये म्हणून सैल कपडे घाला.",
        ],
      },
      voice_over: {
        en: "This is your natural power phase. Shine and feel amazing!",
        hi: "यह आपका पावर फेज है — खुद को शानदार महसूस करें!",
        mr: "हा तुमचा शक्तीशाली टप्पा आहे — आत्मविश्वासाने झळका!",
      },
    },
    {
      id: "luteal_phase",
      phase: {
        en: "Luteal Phase",
        hi: "ल्यूटियल चरण",
        mr: "ल्यूटियल टप्पा",
      },
      emoji: "🌕",
      duration: "Day 15 - 28",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
      what: {
        en: "Body prepares for pregnancy by thickening the uterine lining.",
        hi: "गर्भाशय की परत मोटी करके गर्भावस्था की तैयारी होती है।",
        mr: "गर्भाशयाची अस्तर जाड होऊन गर्भासाठी तयारी होते.",
      },
      importance: {
        en: "Supports possible embryo implantation.",
        hi: "संभवित भ्रूण को स्थिर होने में मदद करता है।",
        mr: "संभाव्य भ्रूणाला आधार मिळतो.",
      },
      scientific_explanation: {
        en: "Progesterone rises; if pregnancy doesn't occur, hormones drop and period begins.",
        hi: "प्रोजेस्टेरोन बढ़ता है; गर्भ न बने तो हार्मोन गिरते हैं और पीरियड शुरू होता है।",
        mr: "प्रोजेस्टेरोन वाढते; गर्भ न ठरल्यास हार्मोन्स कमी होऊन पाळी सुरू होते.",
      },
      symptoms: {
        en: ["PMS", "Breast tenderness", "Cravings"],
        hi: ["पीएमएस", "स्तन में दर्द", "खाने की इच्छा"],
        mr: ["PMS", "स्तन दुखी", "खाण्याची इच्छा"],
      },
      myths_reality: {
        en: [
          "Myth: Mood swings are dramatics. Reality: They are hormone-driven.",
          "Myth: Cravings mean lack of self-control. Reality: Hormonal hunger is real.",
        ],
        hi: [
          "मिथक: मूड स्विंग्स नाटक है। सच: यह हार्मोन की वजह से होता है।",
          "मिथक: क्रेविंग्स का मतलब नियंत्रण कम है। सच: यह हार्मोनल भूख है।",
        ],
        mr: [
          "गैरसमज: मूड स्विंग्स नाटक असतात. खरे: ते हार्मोन्समुळे होतात.",
          "गैरसमज: क्रेविंग्स म्हणजे नियंत्रण कमी. खरे: हार्मोनल भूक खरी आहे.",
        ],
      },
      hygiene_care: {
        en: [
          "Eat nutritious foods and reduce excess sugar.",
          "Practice relaxation to reduce PMS symptoms.",
        ],
        hi: [
          "पोषक आहार लें और अधिक चीनी कम करें।",
          "पीएमएस कम करने के लिए रिलैक्सेशन तकनीक अपनाएँ।",
        ],
        mr: [
          "पौष्टिक आहार घ्या आणि जास्त साखर टाळा.",
          "PMS कमी करण्यासाठी रिलॅक्सेशन करा.",
        ],
      },
      voice_over: {
        en: "It's okay to slow down. Your body needs care and calmness.",
        hi: "धीरे चलिए — आपका शरीर देखभाल चाहता है।",
        mr: "हळू चला — तुमच्या शरीराला काळजी आणि विश्रांती हवी आहे.",
      },
    },
  ];

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const setPhaseTab = (phaseId, tab) => {
    setActiveTab((prev) => ({ ...prev, [phaseId]: tab }));
  };

  const getPhaseTab = (phaseId) => {
    return activeTab[phaseId] || "overview";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌺</div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Cycle Guide
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedLang("en")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLang === "en"
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLang("hi")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLang === "hi"
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setSelectedLang("mr")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLang === "mr"
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                मराठी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-500" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {selectedLang === "en" && "Understanding Your Menstrual Cycle"}
              {selectedLang === "hi" && "अपने मासिक चक्र को समझें"}
              {selectedLang === "mr" && "तुमच्या मासिक पाळी चक्राला समजून घ्या"}
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            {selectedLang === "en" &&
              "Your menstrual cycle has four distinct phases, each with unique characteristics and changes. Learn about each phase to better understand your body."}
            {selectedLang === "hi" &&
              "आपके मासिक चक्र में चार अलग-अलग चरण होते हैं, प्रत्येक की अपनी विशेषताएं होती हैं। अपने शरीर को बेहतर ढंग से समझने के लिए हर चरण के बारे में जानें।"}
            {selectedLang === "mr" &&
              "तुमच्या मासिक पाळी चक्रात चार वेगवेगळे टप्पे आहेत, प्रत्येकाची स्वतःची वैशिष्ट्ये आहेत. तुमच्या शरीराला चांगल्या प्रकारे समजून घेण्यासाठी प्रत्येक टप्प्याबद्दल जाणून घ्या।"}
          </p>
        </div>

        {/* Cycle Phases */}
        <div className="space-y-6">
          {cycle.map((phase, index) => (
            <div
              key={phase.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Phase Header */}
              <div
                className={`bg-linear-to-r ${phase.color} p-6 sm:p-8 cursor-pointer`}
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl sm:text-5xl">{phase.emoji}</span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {phase.phase[selectedLang]}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base font-medium">
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  <button className="text-white p-2 hover:bg-white/20 rounded-full transition-colors">
                    {expandedPhase === phase.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPhase === phase.id && (
                <div className="p-6 sm:p-8">
                  {/* Voice Over Message */}
                  <div
                    className={`${
                      phase.bgColor
                    } rounded-xl p-4 mb-6 border-l-4 border-${
                      phase.color.split("-")[1]
                    }-500`}
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles
                        className="text-purple-500 shrink-0 mt-1"
                        size={20}
                      />
                      <p className="text-gray-700 italic font-medium">
                        {phase.voice_over[selectedLang]}
                      </p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                    {["overview", "symptoms", "myths", "hygiene", "video"].map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setPhaseTab(phase.id, tab)}
                          className={`px-4 py-2 font-medium rounded-t-lg transition-all ${
                            getPhaseTab(phase.id) === tab
                              ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {tab === "overview" &&
                            (selectedLang === "en"
                              ? "Overview"
                              : selectedLang === "hi"
                              ? "विवरण"
                              : "विहंगावलोकन")}
                          {tab === "symptoms" &&
                            (selectedLang === "en"
                              ? "Symptoms"
                              : selectedLang === "hi"
                              ? "लक्षण"
                              : "लक्षणे")}
                          {tab === "myths" &&
                            (selectedLang === "en"
                              ? "Myths & Facts"
                              : selectedLang === "hi"
                              ? "मिथक और सच"
                              : "गैरसमज")}
                          {tab === "hygiene" &&
                            (selectedLang === "en"
                              ? "Hygiene"
                              : selectedLang === "hi"
                              ? "स्वच्छता"
                              : "स्वच्छता")}
                          {tab === "video" &&
                            (selectedLang === "en"
                              ? "Video"
                              : selectedLang === "hi"
                              ? "वीडियो"
                              : "व्हिडिओ")}
                        </button>
                      )
                    )}
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-6">
                    {getPhaseTab(phase.id) === "overview" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Info size={20} className="text-purple-500" />
                            {selectedLang === "en" && "What Happens"}
                            {selectedLang === "hi" && "क्या होता है"}
                            {selectedLang === "mr" && "काय होते"}
                          </h4>
                          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            {phase.what[selectedLang]}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">
                            {selectedLang === "en" && "Why It Matters"}
                            {selectedLang === "hi" && "यह क्यों महत्वपूर्ण है"}
                            {selectedLang === "mr" && "हे का महत्त्वाचे"}
                          </h4>
                          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            {phase.importance[selectedLang]}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">
                            {selectedLang === "en" && "Scientific Explanation"}
                            {selectedLang === "hi" && "वैज्ञानिक व्याख्या"}
                            {selectedLang === "mr" && "वैज्ञानिक स्पष्टीकरण"}
                          </h4>
                          <p className="text-gray-700 leading-relaxed bg-linear-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                            {phase.scientific_explanation[selectedLang]}
                          </p>
                        </div>
                      </div>
                    )}

                    {getPhaseTab(phase.id) === "symptoms" && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                          {selectedLang === "en" && "Common Symptoms"}
                          {selectedLang === "hi" && "सामान्य लक्षण"}
                          {selectedLang === "mr" && "सामान्य लक्षणे"}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {phase.symptoms[selectedLang].map((symptom, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 bg-linear-to-r from-pink-50 to-purple-50 p-4 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-pink-500 rounded-full shrink-0"></div>
                              <span className="text-gray-700 font-medium">
                                {symptom}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {getPhaseTab(phase.id) === "myths" && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                          {selectedLang === "en" && "Myths vs Reality"}
                          {selectedLang === "hi" && "मिथक बनाम वास्तविकता"}
                          {selectedLang === "mr" && "गैरसमज विरुद्ध वास्तव"}
                        </h4>
                        <div className="space-y-4">
                          {phase.myths_reality[selectedLang].map(
                            (item, idx) => {
                              const [myth, reality] = item.split("Reality:");
                              return (
                                <div
                                  key={idx}
                                  className="bg-gray-50 rounded-lg p-5 space-y-3"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold text-lg shrink-0">
                                      ✗
                                    </span>
                                    <p className="text-gray-700">
                                      <span className="font-semibold text-red-600">
                                        {myth
                                          .replace("Myth:", "")
                                          .replace("मिथक:", "")
                                          .replace("गैरसमज:", "")
                                          .trim()}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-lg shrink-0">
                                      ✓
                                    </span>
                                    <p className="text-gray-700">
                                      <span className="font-semibold text-green-600">
                                        {selectedLang === "en" && "Reality: "}
                                        {selectedLang === "hi" && "सच: "}
                                        {selectedLang === "mr" && "खरे: "}
                                      </span>
                                      {reality
                                        .replace("सच:", "")
                                        .replace("खरे:", "")
                                        .trim()}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}

                    {getPhaseTab(phase.id) === "hygiene" && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                          {selectedLang === "en" && "Hygiene & Self-Care"}
                          {selectedLang === "hi" && "स्वच्छता और देखभाल"}
                          {selectedLang === "mr" && "स्वच्छता आणि काळजी"}
                        </h4>
                        <div className="space-y-3">
                          {phase.hygiene_care[selectedLang].map((tip, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-4 bg-linear-to-r from-blue-50 to-cyan-50 p-4 rounded-lg"
                            >
                              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                {idx + 1}
                              </div>
                              <p className="text-gray-700 leading-relaxed pt-1">
                                {tip}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {getPhaseTab(phase.id) === "video" && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                          {selectedLang === "en" && "Educational Video"}
                          {selectedLang === "hi" && "शैक्षिक वीडियो"}
                          {selectedLang === "mr" && "शैक्षणिक व्हिडिओ"}
                        </h4>
                        <div className="bg-gray-900 rounded-xl overflow-hidden aspect-video relative group">
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-purple-600/90 to-pink-600/90">
                            <Play
                              className="text-white mb-4 group-hover:scale-110 transition-transform"
                              size={64}
                            />
                            <p className="text-white text-lg font-semibold mb-2">
                              {phase.phase[selectedLang]}
                            </p>
                            <p className="text-white/80 text-sm px-4 text-center">
                              {selectedLang === "en" &&
                                "Click to watch educational content about this phase"}
                              {selectedLang === "hi" &&
                                "इस चरण के बारे में शैक्षिक सामग्री देखने के लिए क्लिक करें"}
                              {selectedLang === "mr" &&
                                "या टप्प्याबद्दल शैक्षणिक सामग्री पाहण्यासाठी क्लिक करा"}
                            </p>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-white text-sm">
                              {selectedLang === "en" &&
                                `Learn more about ${phase.phase.en.toLowerCase()} - Duration: 5:30`}
                              {selectedLang === "hi" &&
                                `${phase.phase.hi} के बारे में और जानें - अवधि: 5:30`}
                              {selectedLang === "mr" &&
                                `${phase.phase.mr} बद्दल अधिक जाणून घ्या - कालावधी: 5:30`}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-600">
                            {selectedLang === "en" &&
                              "💡 Tip: Videos provide visual explanations that make understanding easier and more engaging."}
                            {selectedLang === "hi" &&
                              "💡 सुझाव: वीडियो दृश्य स्पष्टीकरण प्रदान करते हैं जो समझना आसान और आकर्षक बनाते हैं।"}
                            {selectedLang === "mr" &&
                              "💡 सूचना: व्हिडिओ दृश्य स्पष्टीकरण देतात जे समजून घेणे सोपे आणि आकर्षक बनवतात."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedLang === "en" && "Remember"}
              {selectedLang === "hi" && "याद रखें"}
              {selectedLang === "mr" && "लक्षात ठेवा"}
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {selectedLang === "en" &&
                "Every body is unique, and your cycle may vary. If you experience unusual symptoms or have concerns, always consult with a healthcare professional."}
              {selectedLang === "hi" &&
                "हर शरीर अनोखा है, और आपका चक्र भिन्न हो सकता है। यदि आपको असामान्य लक्षण महसूस होते हैं या चिंता है, तो हमेशा स्वास्थ्य पेशेवर से परामर्श करें।"}
              {selectedLang === "mr" &&
                "प्रत्येक शरीर अद्वितीय आहे आणि तुमचे चक्र वेगळे असू शकते. तुम्हाला असामान्य लक्षणे जाणवल्यास किंवा चिंता असल्यास, नेहमी आरोग्य व्यावसायिकांचा सल्ला घ्या."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;

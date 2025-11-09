"use client";
import React, { useState } from "react";
import { MessageCircle, Book, Wifi, Bell, Users, Lock } from "lucide-react";

export default function FeaturesSection({ language = "en" }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // 🌍 Translations
  const translations = {
    en: {
      heading: "Your Health Journey, Simplified",
      subheading:
        "Empowering you with knowledge, support, and tools for confident menstrual health management",
      features: [
        {
          id: 1,
          icon: MessageCircle,
          title: "AI Chatbot Guidance",
          description:
            "Personalized tips for diet, hygiene, and emotional care.",
          linear: "from-pink-400 to-rose-400",
          color: "bg-pink-100",
          iconColor: "text-pink-500",
        },
        {
          id: 2,
          icon: Book,
          title: "Cultural Education",
          description: "Learn about menstrual health in your local language.",
          linear: "from-purple-400 to-pink-400",
          color: "bg-purple-100",
          iconColor: "text-purple-500",
        },
        {
          id: 3,
          icon: Wifi,
          title: "Low Internet Access",
          description: "Continue learning even with low or no internet.",
          linear: "from-blue-400 to-cyan-400",
          color: "bg-blue-100",
          iconColor: "text-blue-500",
        },
        {
          id: 4,
          icon: Bell,
          title: "Smart Reminders",
          description: "Get cycle and hygiene alerts when needed.",
          linear: "from-orange-400 to-pink-400",
          color: "bg-orange-100",
          iconColor: "text-orange-500",
        },
        {
          id: 5,
          icon: Users,
          title: "Community Support",
          description: "Connect with parents, teachers, and peers.",
          linear: "from-green-400 to-teal-400",
          color: "bg-green-100",
          iconColor: "text-green-500",
        },
        {
          id: 6,
          icon: Lock,
          title: "Private & Secure",
          description: "Your health data stays encrypted and anonymous.",
          linear: "from-indigo-400 to-purple-400",
          color: "bg-indigo-100",
          iconColor: "text-indigo-500",
        },
      ],
    },

    hi: {
      heading: "आपकी स्वास्थ्य यात्रा, अब सरल",
      subheading:
        "ज्ञान, सहयोग और आत्मविश्वासपूर्ण माहवारी स्वास्थ्य प्रबंधन के लिए उपकरण प्रदान करना",
      features: [
        {
          id: 1,
          icon: MessageCircle,
          title: "एआई चैटबॉट मार्गदर्शन",
          description:
            "डाइट, स्वच्छता और मानसिक देखभाल के लिए व्यक्तिगत सुझाव।",
          linear: "from-pink-400 to-rose-400",
          color: "bg-pink-100",
          iconColor: "text-pink-500",
        },
        {
          id: 2,
          icon: Book,
          title: "सांस्कृतिक शिक्षा",
          description: "अपनी भाषा में माहवारी स्वास्थ्य के बारे में जानें।",
          linear: "from-purple-400 to-pink-400",
          color: "bg-purple-100",
          iconColor: "text-purple-500",
        },
        {
          id: 3,
          icon: Wifi,
          title: "कम इंटरनेट एक्सेस",
          description: "कम या बिना इंटरनेट के भी सीखना जारी रखें।",
          linear: "from-blue-400 to-cyan-400",
          color: "bg-blue-100",
          iconColor: "text-blue-500",
        },
        {
          id: 4,
          icon: Bell,
          title: "स्मार्ट रिमाइंडर",
          description: "चक्र और स्वच्छता से जुड़े अलर्ट प्राप्त करें।",
          linear: "from-orange-400 to-pink-400",
          color: "bg-orange-100",
          iconColor: "text-orange-500",
        },
        {
          id: 5,
          icon: Users,
          title: "समुदाय सहयोग",
          description: "माता-पिता, शिक्षकों और साथियों से जुड़ें।",
          linear: "from-green-400 to-teal-400",
          color: "bg-green-100",
          iconColor: "text-green-500",
        },
        {
          id: 6,
          icon: Lock,
          title: "निजी और सुरक्षित",
          description: "आपका स्वास्थ्य डेटा एन्क्रिप्टेड और गुमनाम रहता है।",
          linear: "from-indigo-400 to-purple-400",
          color: "bg-indigo-100",
          iconColor: "text-indigo-500",
        },
      ],
    },

    mr: {
      heading: "तुमचा आरोग्य प्रवास, सोपा केला",
      subheading:
        "ज्ञान, मदत आणि आत्मविश्वासाने मासिक पाळी आरोग्य व्यवस्थापनासाठी साधने उपलब्ध करणे",
      features: [
        {
          id: 1,
          icon: MessageCircle,
          title: "एआय चॅटबॉट मार्गदर्शन",
          description: "आहार, स्वच्छता आणि भावनिक काळजीसाठी वैयक्तिक टिपा.",
          linear: "from-pink-400 to-rose-400",
          color: "bg-pink-100",
          iconColor: "text-pink-500",
        },
        {
          id: 2,
          icon: Book,
          title: "सांस्कृतिक शिक्षण",
          description: "तुमच्या भाषेत मासिक पाळी आरोग्याबद्दल शिका.",
          linear: "from-purple-400 to-pink-400",
          color: "bg-purple-100",
          iconColor: "text-purple-500",
        },
        {
          id: 3,
          icon: Wifi,
          title: "कमी इंटरनेट प्रवेश",
          description: "कमी किंवा नाही इंटरनेट असतानाही शिकणे सुरू ठेवा.",
          linear: "from-blue-400 to-cyan-400",
          color: "bg-blue-100",
          iconColor: "text-blue-500",
        },
        {
          id: 4,
          icon: Bell,
          title: "स्मार्ट रिमाइंडर्स",
          description: "चक्र आणि स्वच्छतेबद्दल अलर्ट मिळवा.",
          linear: "from-orange-400 to-pink-400",
          color: "bg-orange-100",
          iconColor: "text-orange-500",
        },
        {
          id: 5,
          icon: Users,
          title: "समुदाय समर्थन",
          description: "पालक, शिक्षक आणि मित्रांसोबत जोडा.",
          linear: "from-green-400 to-teal-400",
          color: "bg-green-100",
          iconColor: "text-green-500",
        },
        {
          id: 6,
          icon: Lock,
          title: "खाजगी आणि सुरक्षित",
          description: "तुमचा आरोग्य डेटा एन्क्रिप्टेड आणि गुप्त राहतो.",
          linear: "from-indigo-400 to-purple-400",
          color: "bg-indigo-100",
          iconColor: "text-indigo-500",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-4xl">🌸</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-sans">
          {t.heading}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {t.subheading}
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {t.features.map((feature) => {
          const Icon = feature.icon;
          const isHovered = hoveredCard === feature.id;

          return (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out ${
                isHovered ? "transform -translate-y-2 shadow-2xl" : "shadow-md"
              } hover:shadow-2xl cursor-pointer`}
            >
              {isHovered && (
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.linear} opacity-5`}
                />
              )}
              <div className="relative mb-5">
                <div
                  className={`${
                    feature.color
                  } w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                >
                  <Icon
                    className={`${feature.iconColor} w-7 h-7 sm:w-8 sm:h-8`}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                {feature.description}
              </p>
              {isHovered && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-linear-to-r ${feature.linear}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

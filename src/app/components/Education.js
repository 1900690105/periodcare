import { useState } from "react";
import {
  Droplet,
  Sparkles,
  Heart,
  Brain,
  ArrowRight,
  BookOpen,
  Play,
  Globe,
} from "lucide-react";

export default function EducationAwareness({ language }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const translations = {
    en: {
      badge: "Education & Awareness",
      title: "Learn About Your Body —",
      titleHighlight: "With Clarity and Confidence",
      subtitle:
        "Empower yourself with knowledge. Explore our comprehensive guides designed to help you understand and embrace your menstrual health journey.",
      cards: [
        {
          title: "Menstrual Cycle Basics",
          description:
            "Understand the phases of your cycle, what's normal, and how your body changes throughout the month.",
          topics: ["Cycle Phases", "Hormones 101", "Period Tracking"],
        },
        {
          title: "Hygiene & Myths",
          description:
            "Bust common myths and learn evidence-based hygiene practices for your menstrual health.",
          topics: ["Product Safety", "Myth Busting", "Care Tips"],
        },
        {
          title: "Wellness & Lifestyle",
          description:
            "Discover nutrition, exercise, and lifestyle habits that support your overall menstrual wellness.",
          topics: ["Nutrition Guide", "Exercise Tips", "Sleep & Rest"],
        },
        {
          title: "Emotional Health",
          description:
            "Learn to manage mood changes, stress, and emotional wellbeing throughout your cycle.",
          topics: ["Mood Tracking", "Stress Relief", "Self-Care"],
        },
      ],
      startLearning: "Start Learning",
      newContent: "New Content Available",
      videoLibraryTitle: "Explore Our Video Library",
      videoLibraryDesc:
        "Watch expert-led videos, interactive lessons, and personal stories from women around the world. Learn at your own pace in your preferred language.",
      watchNow: "Watch Now",
      browseArticles: "Browse Articles",
      resources: "Resources",
      videoLessons: "Video Lessons",
      articles: "Articles",
      languages: "Languages",
      freeAccess: "Free Access",
      trustedBy: "Trusted by healthcare professionals and women worldwide",
      medicallyReviewed: "Medically Reviewed",
      evidenceBased: "Evidence-Based",
      culturallySensitive: "Culturally Sensitive",
      privacyProtected: "Privacy Protected",
    },
    hi: {
      badge: "शिक्षा और जागरूकता",
      title: "अपने शरीर के बारे में जानें —",
      titleHighlight: "स्पष्टता और आत्मविश्वास के साथ",
      subtitle:
        "ज्ञान के साथ खुद को सशक्त बनाएं। अपनी मासिक धर्म स्वास्थ्य यात्रा को समझने और अपनाने में मदद के लिए हमारे व्यापक गाइड देखें।",
      cards: [
        {
          title: "मासिक धर्म चक्र की मूल बातें",
          description:
            "अपने चक्र के चरणों, क्या सामान्य है, और पूरे महीने में आपके शरीर में कैसे बदलाव होते हैं, यह समझें।",
          topics: ["चक्र के चरण", "हार्मोन 101", "पीरियड ट्रैकिंग"],
        },
        {
          title: "स्वच्छता और मिथक",
          description:
            "आम मिथकों को तोड़ें और अपने मासिक धर्म स्वास्थ्य के लिए साक्ष्य-आधारित स्वच्छता प्रथाओं को सीखें।",
          topics: ["उत्पाद सुरक्षा", "मिथक तोड़ना", "देखभाल युक्तियाँ"],
        },
        {
          title: "कल्याण और जीवनशैली",
          description:
            "पोषण, व्यायाम और जीवनशैली की आदतों की खोज करें जो आपके समग्र मासिक धर्म कल्याण का समर्थन करती हैं।",
          topics: ["पोषण गाइड", "व्यायाम युक्तियाँ", "नींद और आराम"],
        },
        {
          title: "भावनात्मक स्वास्थ्य",
          description:
            "अपने चक्र के दौरान मूड परिवर्तन, तनाव और भावनात्मक कल्याण को प्रबंधित करना सीखें।",
          topics: ["मूड ट्रैकिंग", "तनाव राहत", "आत्म-देखभाल"],
        },
      ],
      startLearning: "सीखना शुरू करें",
      newContent: "नई सामग्री उपलब्ध",
      videoLibraryTitle: "हमारी वीडियो लाइब्रेरी देखें",
      videoLibraryDesc:
        "विशेषज्ञों द्वारा संचालित वीडियो, इंटरैक्टिव पाठ और दुनिया भर की महिलाओं की व्यक्तिगत कहानियाँ देखें। अपनी पसंदीदा भाषा में अपनी गति से सीखें।",
      watchNow: "अभी देखें",
      browseArticles: "लेख ब्राउज़ करें",
      resources: "संसाधन",
      videoLessons: "वीडियो पाठ",
      articles: "लेख",
      languages: "भाषाएं",
      freeAccess: "मुफ्त एक्सेस",
      trustedBy: "स्वास्थ्य पेशेवरों और दुनिया भर की महिलाओं द्वारा विश्वसनीय",
      medicallyReviewed: "चिकित्सकीय रूप से समीक्षित",
      evidenceBased: "साक्ष्य-आधारित",
      culturallySensitive: "सांस्कृतिक रूप से संवेदनशील",
      privacyProtected: "गोपनीयता संरक्षित",
    },
    mr: {
      badge: "शिक्षण आणि जागरूकता",
      title: "तुमच्या शरीराबद्दल जाणून घ्या —",
      titleHighlight: "स्पष्टता आणि आत्मविश्वासासह",
      subtitle:
        "ज्ञानाने स्वतःला सशक्त करा. तुमच्या मासिक पाळी आरोग्य प्रवासाला समजून घेण्यास आणि स्वीकारण्यास मदत करण्यासाठी डिझाइन केलेल्या आमच्या सर्वसमावेशक मार्गदर्शकांचा शोध घ्या.",
      cards: [
        {
          title: "मासिक पाळी चक्राची मूलभूत माहिती",
          description:
            "तुमच्या चक्राचे टप्पे, काय सामान्य आहे आणि संपूर्ण महिन्यात तुमच्या शरीरात कसे बदल होतात हे समजून घ्या.",
          topics: ["चक्र टप्पे", "संप्रेरक 101", "पीरियड ट्रॅकिंग"],
        },
        {
          title: "स्वच्छता आणि गैरसमज",
          description:
            "सामान्य गैरसमज दूर करा आणि तुमच्या मासिक पाळी आरोग्यासाठी पुराव्यावर आधारित स्वच्छता पद्धती शिका.",
          topics: ["उत्पादन सुरक्षा", "गैरसमज दूर करणे", "काळजी टिपा"],
        },
        {
          title: "निरोगीपणा आणि जीवनशैली",
          description:
            "तुमच्या एकूण मासिक पाळी निरोगीपणास समर्थन देणाऱ्या पोषण, व्यायाम आणि जीवनशैली सवयी शोधा.",
          topics: ["पोषण मार्गदर्शक", "व्यायाम टिपा", "झोप आणि विश्रांती"],
        },
        {
          title: "भावनिक आरोग्य",
          description:
            "तुमच्या चक्रादरम्यान मनःस्थिती बदल, ताण आणि भावनिक कल्याण व्यवस्थापित करायला शिका.",
          topics: ["मूड ट्रॅकिंग", "तणाव निवारण", "स्वत:ची काळजी"],
        },
      ],
      startLearning: "शिकायला सुरुवात करा",
      newContent: "नवीन सामग्री उपलब्ध",
      videoLibraryTitle: "आमचे व्हिडिओ लायब्ररी पहा",
      videoLibraryDesc:
        "तज्ञांनी नेतृत्व केलेले व्हिडिओ, परस्पर धडे आणि जगभरातील महिलांच्या वैयक्तिक कथा पहा. तुमच्या पसंतीच्या भाषेत तुमच्या गतीने शिका.",
      watchNow: "आता पहा",
      browseArticles: "लेख ब्राउझ करा",
      resources: "संसाधने",
      videoLessons: "व्हिडिओ धडे",
      articles: "लेख",
      languages: "भाषा",
      freeAccess: "मोफत प्रवेश",
      trustedBy: "आरोग्य व्यावसायिक आणि जगभरातील महिलांनी विश्वासार्ह",
      medicallyReviewed: "वैद्यकीयदृष्ट्या पुनरावलोकन केलेले",
      evidenceBased: "पुराव्यावर आधारित",
      culturallySensitive: "सांस्कृतिकदृष्ट्या संवेदनशील",
      privacyProtected: "गोपनीयता संरक्षित",
    },
  };

  const educationCards = [
    {
      id: 1,
      icon: Droplet,
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      emoji: "🩸",
    },
    {
      id: 2,
      icon: Sparkles,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      emoji: "🧼",
    },
    {
      id: 3,
      icon: Heart,
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-500",
      emoji: "🧘",
    },
    {
      id: 4,
      icon: Brain,
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      emoji: "🧠",
    },
  ];

  const t = translations[language];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div
        className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        📚
      </div>
      <div
        className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        💡
      </div>
      <div
        className="absolute bottom-40 left-20 text-4xl opacity-20 animate-bounce"
        style={{ animationDuration: "3.5s", animationDelay: "1s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-20 right-32 text-5xl opacity-20 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
      >
        🌸
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md mb-6">
            <BookOpen className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-semibold text-gray-700">
              {t.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {t.title}
            <br />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {educationCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;
            const cardContent = t.cards[index];

            return (
              <div
                key={card.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isHovered ? "scale-105" : ""
                  }`}
                >
                  {/* Card Header with Icon */}
                  <div className={`${card.bgColor} p-8 pb-6 relative`}>
                    <div
                      className={`${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-4 transition-all duration-500`}
                    >
                      <Icon className={`w-8 h-8 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {cardContent.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 pt-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {cardContent.description}
                    </p>

                    {/* Topics Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cardContent.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${card.iconBg} ${card.iconColor}`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full bg-linear-to-r ${card.color} text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4`}
                    >
                      <span>{t.startLearning}</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Decorative linear on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${
                      card.color
                    } transition-all duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Resources Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
                  <Play className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-semibold text-pink-600">
                    {t.newContent}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {t.videoLibraryTitle}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {t.videoLibraryDesc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-linear-to-r from-pink-400 to-rose-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    {t.watchNow}
                  </button>
                  <button className="bg-gray-100 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300">
                    {t.browseArticles}
                  </button>
                </div>
              </div>

              <div className="shrink-0">
                <div className="relative">
                  <div className="w-64 h-64 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="text-8xl transform -rotate-6">📖</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg">
                    <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      500+ {t.resources}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
                <div className="text-sm text-gray-600">{t.videoLessons}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  200+
                </div>
                <div className="text-sm text-gray-600">{t.articles}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">12+</div>
                <div className="text-sm text-gray-600">{t.languages}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">{t.freeAccess}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">{t.trustedBy}</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">
                {t.medicallyReviewed}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">{t.evidenceBased}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">
                {t.culturallySensitive}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">
                {t.privacyProtected}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import {
//   Droplet,
//   Sparkles,
//   Heart,
//   Brain,
//   ArrowRight,
//   BookOpen,
//   Play,
// } from "lucide-react";
// import Image from "next/image";

// export default function EducationAwareness() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const educationCards = [
//     {
//       id: 1,
//       icon: Droplet,
//       title: "Menstrual Cycle Basics",
//       description:
//         "Understand the phases of your cycle, what's normal, and how your body changes throughout the month.",
//       color: "from-pink-400 to-rose-400",
//       bgColor: "bg-pink-50",
//       iconBg: "bg-pink-100",
//       iconColor: "text-pink-500",
//       topics: ["Cycle Phases", "Hormones 101", "Period Tracking"],
//       emoji: "🩸",
//     },
//     {
//       id: 2,
//       icon: Sparkles,
//       title: "Hygiene & Myths",
//       description:
//         "Bust common myths and learn evidence-based hygiene practices for your menstrual health.",
//       color: "from-purple-400 to-pink-400",
//       bgColor: "bg-purple-50",
//       iconBg: "bg-purple-100",
//       iconColor: "text-purple-500",
//       topics: ["Product Safety", "Myth Busting", "Care Tips"],
//       emoji: "🧼",
//     },
//     {
//       id: 3,
//       icon: Heart,
//       title: "Wellness & Lifestyle",
//       description:
//         "Discover nutrition, exercise, and lifestyle habits that support your overall menstrual wellness.",
//       color: "from-teal-400 to-cyan-400",
//       bgColor: "bg-teal-50",
//       iconBg: "bg-teal-100",
//       iconColor: "text-teal-500",
//       topics: ["Nutrition Guide", "Exercise Tips", "Sleep & Rest"],
//       emoji: "🧘",
//     },
//     {
//       id: 4,
//       icon: Brain,
//       title: "Emotional Health",
//       description:
//         "Learn to manage mood changes, stress, and emotional wellbeing throughout your cycle.",
//       color: "from-blue-400 to-indigo-400",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       iconColor: "text-blue-500",
//       topics: ["Mood Tracking", "Stress Relief", "Self-Care"],
//       emoji: "🧠",
//     },
//   ];

//   return (
//     <div className=" py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Floating decorative elements */}
//       <div
//         className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce"
//         style={{ animationDuration: "3s" }}
//       >
//         📚
//       </div>
//       <div
//         className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce"
//         style={{ animationDuration: "4s", animationDelay: "0.5s" }}
//       >
//         💡
//       </div>
//       <div
//         className="absolute bottom-40 left-20 text-4xl opacity-20 animate-bounce"
//         style={{ animationDuration: "3.5s", animationDelay: "1s" }}
//       >
//         ✨
//       </div>
//       <div
//         className="absolute bottom-20 right-32 text-5xl opacity-20 animate-bounce"
//         style={{ animationDuration: "4s", animationDelay: "1.5s" }}
//       >
//         🌸
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md mb-6">
//             <BookOpen className="w-5 h-5 text-pink-500" />
//             <span className="text-sm font-semibold text-gray-700">
//               Education & Awareness
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
//             Learn About Your Body —<br />
//             <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//               With Clarity and Confidence
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Empower yourself with knowledge. Explore our comprehensive guides
//             designed to help you understand and embrace your menstrual health
//             journey.
//           </p>
//         </div>

//         {/* Education Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {educationCards.map((card, index) => {
//             const Icon = card.icon;
//             const isHovered = hoveredCard === card.id;

//             return (
//               <div
//                 key={card.id}
//                 className="group relative"
//                 onMouseEnter={() => setHoveredCard(card.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div
//                   className={`h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
//                     isHovered ? "scale-105" : ""
//                   }`}
//                 >
//                   {/* Card Header with Icon */}
//                   <div className={`${card.bgColor} p-8 pb-6 relative`}>
//                     <div
//                       className={`${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-4 transition-all duration-500 `}
//                     >
//                       <Image
//                         src={`/img/educard${card.id}.png`}
//                         alt="bg image"
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                       {card.title}
//                     </h3>
//                   </div>

//                   {/* Card Body */}
//                   <div className="p-8 pt-6">
//                     <p className="text-gray-600 leading-relaxed mb-6">
//                       {card.description}
//                     </p>

//                     {/* Topics Pills */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {card.topics.map((topic, idx) => (
//                         <span
//                           key={idx}
//                           className={`px-3 py-1 text-xs font-medium rounded-full ${card.iconBg} ${card.iconColor}`}
//                         >
//                           {topic}
//                         </span>
//                       ))}
//                     </div>

//                     {/* CTA Button */}
//                     <button
//                       className={`w-full bg-linear-to-r ${card.color} text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4`}
//                     >
//                       <span>Start Learning</span>
//                       <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                     </button>
//                   </div>

//                   {/* Decorative linear on hover */}
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${
//                       card.color
//                     } transition-all duration-500 ${
//                       isHovered ? "opacity-100" : "opacity-0"
//                     }`}
//                   ></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Featured Resources Section */}
//         <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
//           {/* Background decoration */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>

//           <div className="relative z-10">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="flex-1">
//                 <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
//                   <Play className="w-4 h-4 text-pink-500" />
//                   <span className="text-sm font-semibold text-pink-600">
//                     New Content Available
//                   </span>
//                 </div>
//                 <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//                   Explore Our Video Library
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-6">
//                   Watch expert-led videos, interactive lessons, and personal
//                   stories from women around the world. Learn at your own pace in
//                   your preferred language.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <button className="bg-linear-to-r from-pink-400 to-rose-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                     <Play className="w-5 h-5" />
//                     Watch Now
//                   </button>
//                   <button className="bg-gray-100 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300">
//                     Browse Articles
//                   </button>
//                 </div>
//               </div>

//               <div className="shrink-0">
//                 <div className="relative">
//                   <div className="w-64 h-64 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
//                     <div className="text-8xl transform -rotate-6">📖</div>
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg">
//                     <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//                       500+ Resources
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Bar */}
//             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
//                 <div className="text-sm text-gray-600">Video Lessons</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-800 mb-1">
//                   200+
//                 </div>
//                 <div className="text-sm text-gray-600">Articles</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-800 mb-1">12+</div>
//                 <div className="text-sm text-gray-600">Languages</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-800 mb-1">
//                   100%
//                 </div>
//                 <div className="text-sm text-gray-600">Free Access</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-500 mb-4">
//             Trusted by healthcare professionals and women worldwide
//           </p>
//           <div className="flex items-center justify-center gap-8 flex-wrap">
//             <div className="flex items-center gap-2">
//               <span className="text-pink-500">✓</span>
//               <span className="text-sm text-gray-600">Medically Reviewed</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-pink-500">✓</span>
//               <span className="text-sm text-gray-600">Evidence-Based</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-pink-500">✓</span>
//               <span className="text-sm text-gray-600">
//                 Culturally Sensitive
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-pink-500">✓</span>
//               <span className="text-sm text-gray-600">Privacy Protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

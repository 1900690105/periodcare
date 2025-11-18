import {
  ArrowRight,
  Book,
  BookOpen,
  CheckCircle,
  FileText,
  Heart,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function IntroSection({ language }) {
  const content = {
    en: {
      badge: "Knowledge is Power",
      heading1: "Learn About Your Body",
      heading2: "With Clarity, Confidence, and Care",
      subtext:
        "Everything you need to know about menstrual health, hygiene, and emotional well-being — explained simply, scientifically, and sensitively.",
      btnStart: "Start Learning",
      btnExplore: "Explore Topics",
      stats: ["50+ Articles", "Video Guides", "Expert Verified"],
      whyTitle: "Why Learn With PeriodCare?",
      whySubtitle: "Trusted, scientific, and culturally sensitive education",
      simpleTitle: "Simple & Clear",
      simpleDesc: "Complex topics explained in easy-to-understand language",
      visualTitle: "Visual Learning",
      visualDesc:
        "Diagrams, videos, and illustrations for better understanding",
      mythTitle: "Myth-Busting",
      mythDesc: "Breaking taboos with facts and cultural sensitivity",
      freeLabel: "100% Free",
    },
    hi: {
      badge: "ज्ञान ही शक्ति है",
      heading1: "अपने शरीर को जानें",
      heading2: "विश्वास, स्पष्टता और देखभाल के साथ",
      subtext:
        "मासिक धर्म स्वास्थ्य, स्वच्छता और भावनात्मक देखभाल से जुड़ी हर जानकारी — सरल, वैज्ञानिक और संवेदनशील तरीके से।",
      btnStart: "सीखना शुरू करें",
      btnExplore: "विषय देखें",
      stats: ["50+ लेख", "वीडियो मार्गदर्शन", "विशेषज्ञ द्वारा प्रमाणित"],
      whyTitle: "PeriodCare क्यों?",
      whySubtitle: "विश्वसनीय, वैज्ञानिक और सांस्कृतिक रूप से संवेदनशील शिक्षा",
      simpleTitle: "सरल और स्पष्ट",
      simpleDesc: "जटिल विषयों को आसान भाषा में समझाया गया",
      visualTitle: "दृश्य शिक्षा",
      visualDesc: "बेहतर समझ के लिए चित्र और वीडियो",
      mythTitle: "भ्रम दूर करना",
      mythDesc: "तथ्यों और समझदारी से गलत धारणाएं खत्म",
      freeLabel: "100% निःशुल्क",
    },
    mr: {
      badge: "ज्ञान म्हणजे शक्ती",
      heading1: "तुमच्या शरीराबद्दल जाणून घ्या",
      heading2: "आत्मविश्वास, स्पष्टता आणि काळजीने",
      subtext:
        "मासिक पाळी-स्वच्छता, आरोग्य आणि मानसिक स्वास्थ्य याबद्दल सर्व माहिती — सोप्या, वैज्ञानिक आणि संवेदनशील पद्धतीने.",
      btnStart: "शिकणे सुरू करा",
      btnExplore: "विषय पहा",
      stats: ["50+ लेख", "व्हिडिओ मार्गदर्शन", "तज्ञांनी प्रमाणित"],
      whyTitle: "PeriodCare का?",
      whySubtitle:
        "विश्वासार्ह, वैज्ञानिक आणि सांस्कृतिकदृष्ट्या संवेदनशील शिक्षण",
      simpleTitle: "सोपे आणि स्पष्ट",
      simpleDesc: "कठीण विषय सोप्या भाषेत समजावले",
      visualTitle: "दृश्य शिक्षण",
      visualDesc: "चांगल्या समजेसाठी चित्रे आणि व्हिडिओ",
      mythTitle: "गैरसमज दूर करणे",
      mythDesc: "तथ्यांच्या आधारे गैरसमज दूर",
      freeLabel: "100% मोफत",
    },
  };

  const t = content[language] || content.en;

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full border border-pink-200">
                <BookOpen className="w-4 h-4 text-pink-600" />
                <span className="text-pink-700 font-medium text-sm">
                  {t.badge}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t.heading1}
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  {t.heading2}
                </p>
              </div>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.subtext}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="bg-linear-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>{t.btnStart}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="bg-white text-pink-600 border-2 border-pink-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300">
                  {t.btnExplore}
                </button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={"/img/edu.png"}
                  alt="edu"
                  width={500}
                  height={500}
                />

                <div className="absolute -top-4 -right-4 bg-linear-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                  <span className="text-sm font-semibold">{t.freeLabel}</span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t.whyTitle}
            </h2>
            <p className="text-gray-600">{t.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-linear-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto">
                <Book className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t.simpleTitle}
              </h3>
              <p className="text-gray-600 text-sm">{t.simpleDesc}</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t.visualTitle}
              </h3>
              <p className="text-gray-600 text-sm">{t.visualDesc}</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-linear-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t.mythTitle}
              </h3>
              <p className="text-gray-600 text-sm">{t.mythDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroSection;

// import {
//   ArrowRight,
//   Book,
//   BookOpen,
//   CheckCircle,
//   FileText,
//   Heart,
//   Video,
// } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// function IntroSection({language}) {
//   return (
//     <>
//       <div className="relative overflow-hidden">
//         {/* Decorative Elements */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
//               {/* Badge */}
//               <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full border border-pink-200">
//                 <BookOpen className="w-4 h-4 text-pink-600" />
//                 <span className="text-pink-700 font-medium text-sm">
//                   Knowledge is Power
//                 </span>
//               </div>

//               {/* Main Headline */}
//               <div className="space-y-3">
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                   Learn About Your Body
//                 </h1>
//                 <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
//                   With Clarity, Confidence, and Care
//                 </p>
//               </div>

//               {/* Subtext */}
//               <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 Everything you need to know about menstrual health, hygiene, and
//                 emotional well-being — explained simply, scientifically, and
//                 sensitively.
//               </p>

//               {/* CTA Button */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//                 <button className="bg-linear-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group">
//                   <span>Start Learning</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>

//                 <button className="bg-white text-pink-600 border-2 border-pink-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
//                   Explore Topics
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700 font-medium">
//                     50+ Articles
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700 font-medium">
//                     Video Guides
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700 font-medium">
//                     Expert Verified
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Illustration */}
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute inset-0 bg-linear-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl"></div>

//               {/* Main Illustration Container */}
//               <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
//                 <Image
//                   src={"/img/edu.png"}
//                   alt="edu"
//                   width={500}
//                   height={500}
//                 />

//                 <div className="absolute -top-4 -right-4 bg-linear-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
//                   <span className="text-sm font-semibold">100% Free</span>
//                 </div>

//                 <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
//                   <Heart className="w-8 h-8 text-pink-500" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Section */}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-12">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//               Why Learn With PeriodCare?
//             </h2>
//             <p className="text-gray-600">
//               Trusted, scientific, and culturally sensitive education
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             <div className="text-center space-y-3">
//               <div className="w-16 h-16 bg-linear-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto">
//                 <Book className="w-8 h-8 text-pink-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Simple & Clear
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Complex topics explained in easy-to-understand language
//               </p>
//             </div>

//             <div className="text-center space-y-3">
//               <div className="w-16 h-16 bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
//                 <Video className="w-8 h-8 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Visual Learning
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Diagrams, videos, and illustrations for better understanding
//               </p>
//             </div>

//             <div className="text-center space-y-3">
//               <div className="w-16 h-16 bg-linear-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
//                 <FileText className="w-8 h-8 text-rose-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Myth-Busting
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Breaking taboos with facts and cultural sensitivity
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default IntroSection;

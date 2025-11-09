"use client";

import Image from "next/image";

export default function JourneyTimeline({ language = "en" }) {
  // --- Translations ---
  const content = {
    en: {
      heading: "Your Wellness Journey",
      subheading:
        "Follow these simple steps to start your personalized health and wellness experience",
      tagline: "Your health companion",
      steps: [
        {
          id: 1,
          title: "Create Your Account",
          description:
            "Create your account and choose from 12+ local languages for a personalized experience.",
        },
        {
          id: 2,
          title: "Enter Period Info",
          description:
            "Add your cycle details for accurate tracking and personalized predictions.",
        },
        {
          id: 3,
          title: "Chat with AI Guide & Recommendation",
          description:
            "Get instant answers to your questions about diet, hygiene, and emotional wellbeing.",
        },
        {
          id: 4,
          title: "Explore Education Hub",
          description:
            "Learn with videos, articles, and interactive lessons tailored to your needs.",
        },
        {
          id: 5,
          title: "Track Progress & Insights",
          description:
            "Monitor your health journey with smart analytics and personalized insights.",
        },
      ],
    },
    hi: {
      heading: "आपकी वेलनेस यात्रा",
      subheading:
        "अपना व्यक्तिगत स्वास्थ्य और वेलनेस अनुभव शुरू करने के लिए इन सरल चरणों का पालन करें",
      tagline: "आपका स्वास्थ्य साथी",
      steps: [
        {
          id: 1,
          title: "अपना खाता बनाएं",
          description:
            "अपना खाता बनाएं और 12+ स्थानीय भाषाओं में से अपनी पसंद की भाषा चुनें।",
        },
        {
          id: 2,
          title: "पीरियड जानकारी दर्ज करें",
          description:
            "सटीक ट्रैकिंग और व्यक्तिगत भविष्यवाणियों के लिए अपने चक्र के विवरण जोड़ें।",
        },
        {
          id: 3,
          title: "AI गाइड से चैट करें",
          description:
            "डाइट, स्वच्छता और भावनात्मक स्वास्थ्य से जुड़े प्रश्नों के तुरंत उत्तर पाएं।",
        },
        {
          id: 4,
          title: "शैक्षणिक हब एक्सप्लोर करें",
          description:
            "वीडियो, लेख और आपकी आवश्यकताओं के अनुरूप इंटरैक्टिव पाठों से सीखें।",
        },
        {
          id: 5,
          title: "प्रगति और जानकारी ट्रैक करें",
          description:
            "स्मार्ट एनालिटिक्स और व्यक्तिगत अंतर्दृष्टि के साथ अपनी स्वास्थ्य यात्रा की निगरानी करें।",
        },
      ],
    },
    mr: {
      heading: "तुमची आरोग्य यात्रा",
      subheading:
        "तुमचा वैयक्तिक आरोग्य आणि वेलनेस अनुभव सुरू करण्यासाठी या सोप्या टप्प्यांचे पालन करा",
      tagline: "तुमचा आरोग्य सहकारी",
      steps: [
        {
          id: 1,
          title: "तुमचे खाते तयार करा",
          description:
            "तुमचे खाते तयार करा आणि 12+ स्थानिक भाषांमधून तुमची पसंतीची भाषा निवडा.",
        },
        {
          id: 2,
          title: "पाळीची माहिती भरा",
          description:
            "अचूक ट्रॅकिंग आणि वैयक्तिक अंदाजांसाठी तुमच्या चक्राची माहिती जोडा.",
        },
        {
          id: 3,
          title: "AI मार्गदर्शकाशी चॅट करा",
          description:
            "आहार, स्वच्छता आणि भावनिक आरोग्यावरील प्रश्नांसाठी तत्काळ उत्तरे मिळवा.",
        },
        {
          id: 4,
          title: "शैक्षणिक केंद्र एक्सप्लोर करा",
          description:
            "व्हिडिओ, लेख आणि तुमच्या गरजेनुसार तयार केलेल्या संवादात्मक धड्यांद्वारे शिका.",
        },
        {
          id: 5,
          title: "प्रगती आणि माहिती ट्रॅक करा",
          description:
            "स्मार्ट विश्लेषण आणि वैयक्तिक अंतर्दृष्टीसह तुमची आरोग्य यात्रा ट्रॅक करा.",
        },
      ],
    },
  };

  const t = content[language] || content.en;

  const colors = [
    {
      color: "from-pink-400 to-rose-400",
      bg: "bg-pink-100",
      dot: "bg-pink-400",
    },
    {
      color: "from-purple-400 to-pink-400",
      bg: "bg-purple-100",
      dot: "bg-purple-400",
    },
    {
      color: "from-blue-400 to-cyan-400",
      bg: "bg-blue-100",
      dot: "bg-blue-400",
    },
    {
      color: "from-green-400 to-teal-400",
      bg: "bg-green-100",
      dot: "bg-green-400",
    },
    {
      color: "from-orange-400 to-pink-400",
      bg: "bg-orange-100",
      dot: "bg-orange-400",
    },
  ];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t.heading}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subheading}
          </p>
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-xl sm:text-2xl">🌸</span>
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              {t.tagline}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-pink-200 via-purple-200 to-orange-200 hidden md:block" />
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {t.steps.map((step, i) => (
              <div key={step.id} className="relative group">
                {/* Line Dot */}
                <div
                  className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-white shadow-md hidden md:block z-10 ${colors[i].dot}`}
                />
                {/* Card */}
                <div className="md:ml-20 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Image */}
                    <div
                      className={`shrink-0 w-20 h-20 sm:w-24 sm:h-24 ${colors[i].bg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
                    >
                      <Image
                        src={`/img/timeline${step.id}.png`}
                        alt={step.title}
                        width={150}
                        height={150}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-r ${colors[i].color} text-white text-sm font-bold shadow-sm`}
                        >
                          {step.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

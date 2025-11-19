"use client";

import React, { useEffect, useState } from "react";
import {
  Heart,
  Book,
  Video,
  Bell,
  Gift,
  Shield,
  CheckCircle,
  Circle,
  Smile,
  Frown,
  Thermometer,
  AlertCircle,
  Zap,
  X,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PeriodCareFooter from "@/app/components/Footer";
import { useSearchParams } from "next/navigation";

export default function FirstPeriodGuide() {
  const [checklist, setChecklist] = useState({
    pad: false,
    tissue: false,
    pouch: false,
    patch: false,
    water: false,
    underwear: false,
  });
  const [selectedMood, setSelectedMood] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const params = useSearchParams();
  const lan = params.get("lan");
  const [language, setLanguage] = useState(lan || "en");

  const translations = {
    en: {
      title: "First-Period Guide",
      subtitle: "Your first period doesn't have to be scary",
      tagline: "Know what to expect, what to carry & how to stay confident!",
      whatIs: "What is a period?",
      whatIsDesc:
        "Your body removes what it doesn't need. It's natural. It's healthy. It's YOU growing up!",
      watchAnim: "Watch Animation",
      readStory: "Read Storybook",
      carryTitle: "What To Carry To School",
      timerTitle: "Pad Changing Timer",
      timerDesc: "Recommended change time: Every 4–6 hours",
      enableNotif: "Enable Notification",
      feelingsTitle: "Feelings are Normal",
      storiesTitle: "Real Girl Stories",
      storyText:
        "My first period started in school… this is how a friend helped me!",
      boostTitle: "You're strong. You're growing beautifully!",
      helpTitle: "When to Ask for Help",
      privacyTitle: "Privacy First",
      privacyText:
        "No photos required • No real name needed • Everything stays private — Always ♡",
      ctaTitle: "You're not alone.",
      ctaText: "Thousands of girls are learning with you",
      startBtn: "Start your journey",
    },
    hi: {
      title: "पहली माहवारी गाइड",
      subtitle: "आपकी पहली माहवारी डरावनी नहीं है",
      tagline:
        "जानें क्या उम्मीद करें, क्या लेकर जाएं और आत्मविश्वास से कैसे रहें!",
      whatIs: "माहवारी क्या है?",
      whatIsDesc:
        "आपका शरीर वह निकालता है जिसकी जरूरत नहीं। यह प्राकृतिक है। यह स्वस्थ है। यह आपका बढ़ना है!",
      watchAnim: "एनिमेशन देखें",
      readStory: "कहानी पढ़ें",
      carryTitle: "स्कूल में क्या लेकर जाएं",
      timerTitle: "पैड बदलने का समय",
      timerDesc: "अनुशंसित बदलाव समय: हर 4-6 घंटे",
      enableNotif: "सूचना सक्षम करें",
      feelingsTitle: "भावनाएं सामान्य हैं",
      storiesTitle: "असली लड़कियों की कहानियां",
      storyText:
        "मेरी पहली माहवारी स्कूल में शुरू हुई... एक दोस्त ने मेरी मदद की!",
      boostTitle: "तुम मजबूत हो। तुम खूबसूरती से बढ़ रही हो!",
      helpTitle: "कब मदद मांगें",
      privacyTitle: "गोपनीयता पहले",
      privacyText:
        "कोई फोटो की आवश्यकता नहीं • कोई असली नाम नहीं • सब कुछ निजी रहता है — हमेशा ♡",
      ctaTitle: "तुम अकेली नहीं हो।",
      ctaText: "हजारों लड़कियां तुम्हारे साथ सीख रही हैं",
      startBtn: "अपनी यात्रा शुरू करें",
    },
    mr: {
      title: "पहिल्या मासिक पाळीचे मार्गदर्शन",
      subtitle: "तुमची पहिली मासिक पाळी भीतिदायक नाही",
      tagline:
        "काय अपेक्षा करावी, काय घेऊन जावे आणि आत्मविश्वासाने कसे राहावे!",
      whatIs: "मासिक पाळी म्हणजे काय?",
      whatIsDesc:
        "तुमचे शरीर ज्याची गरज नाही ते काढून टाकते. हे नैसर्गिक आहे. हे निरोगी आहे. तुमची वाढ आहे!",
      watchAnim: "अॅनिमेशन पहा",
      readStory: "कथा वाचा",
      carryTitle: "शाळेत काय घेऊन जावे",
      timerTitle: "पॅड बदलण्याची वेळ",
      timerDesc: "शिफारस केलेली बदल वेळ: दर 4-6 तास",
      enableNotif: "सूचना सक्षम करा",
      feelingsTitle: "भावना सामान्य आहेत",
      storiesTitle: "खऱ्या मुलींच्या गोष्टी",
      storyText:
        "माझी पहिली मासिक पाळी शाळेत सुरू झाली... एका मैत्रिणीने मला मदत केली!",
      boostTitle: "तू मजबूत आहेस. तू सुंदरपणे वाढत आहेस!",
      helpTitle: "मदत कधी मागावी",
      privacyTitle: "गोपनीयता प्रथम",
      privacyText:
        "फोटो आवश्यक नाही • खरे नाव नाही • सर्वकाही खाजगी राहते — नेहमी ♡",
      ctaTitle: "तू एकटी नाहीस.",
      ctaText: "हजारो मुली तुझ्यासोबत शिकत आहेत",
      startBtn: "तुझा प्रवास सुरू करा",
    },
  };

  const t = translations[language];

  const checklistItems = [
    { key: "pad", emoji: "🩹", label: "Extra Pad" },
    { key: "tissue", emoji: "🧻", label: "Handkerchief/Tissue" },
    { key: "pouch", emoji: "🎒", label: "Small Zip Pouch" },
    { key: "patch", emoji: "♨️", label: "Pain Relief Patch" },
    { key: "water", emoji: "💧", label: "Water Bottle" },
    { key: "underwear", emoji: "🩲", label: "Extra Underwear" },
  ];

  const moods = [
    {
      emoji: "😊",
      label: "Happy",
      message: "That's wonderful! Keep that positive energy flowing! ✨",
    },
    {
      emoji: "😕",
      label: "Confused",
      message:
        "It's okay to feel confused. Take your time to learn and ask questions! 💜",
    },
    {
      emoji: "🤒",
      label: "Painful",
      message:
        "Try a warm compress and rest. If pain is severe, talk to an adult. 🌸",
    },
    {
      emoji: "😣",
      label: "Embarrassed",
      message:
        "This is completely natural! Every girl goes through this. You're amazing! 🦋",
    },
    {
      emoji: "😡",
      label: "Irritated",
      message:
        "Mood swings are normal! Take deep breaths and be kind to yourself. 🌺",
    },
  ];

  const stories = [
    {
      text: "My first period started in school… this is how a friend helped me!",
      color: "bg-pink-100",
    },
    {
      text: "I was scared but my mom made everything easier with her guidance!",
      color: "bg-purple-100",
    },
    {
      text: "My teacher was so understanding when I needed help!",
      color: "bg-blue-100",
    },
  ];

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
    if (!checklist[key]) {
      // Play sound effect simulation
      console.log("✨ Checkbox sound!");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white rounded-full shadow-lg p-2">
        {["en", "hi", "mr"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              language === lang
                ? "bg-linear-to-r from-pink-400 to-purple-400 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-block mb-4 text-6xl animate-bounce">🩰</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          {t?.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-2">
          {t?.subtitle} 🌟
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t?.tagline}</p>

        {/* Hero Illustration Placeholder */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-64 bg-linear-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-8xl">
            👧
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        {/* What is Menstruation Card */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto border-4 border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🩸</span>
              <h2 className="text-3xl font-bold text-gray-800">{t?.whatIs}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">{t?.whatIsDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <p className="bg-linear-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Watch Now</span>
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" w-[480px] md:w-[750px]  h-[415px]">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex justify-between">
                        Exercise Tips
                        <AlertDialogCancel>
                          <X />
                        </AlertDialogCancel>
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {language === "mr" && (
                          <iframe
                            className="w-[350px] md:w-[450px] h-[220px] md:h-[300px]"
                            src="https://www.youtube.com/embed/CC6xIYpDkEQ?si=s-AZl7RH5g53-LTq"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        )}
                        {language === "hi" && (
                          <iframe
                            className="w-[350px] md:w-[450px] h-[220px] md:h-[300px]"
                            src="https://www.youtube.com/embed/84B8DrvzjFI?si=zPKDjziaQwqhvzjC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        )}
                        {language === "en" && (
                          <iframe
                            className="w-[350px] md:w-[450px] h-[220px] md:h-[300px]"
                            src="https://www.youtube.com/embed/cjbgZwgdY7Q?si=-yRd4lVw7PTYheix"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        )}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              {language === "mr" && (
                <button
                  onClick={() => {
                    window.open(
                      `https://gemini.google.com/gem/storybook/a28dc5414132f2cf`,
                      "_blank"
                    );
                  }}
                  className="flex-1 bg-linear-to-r from-purple-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <Book className="w-5 h-5" />
                  {t.readStory} 📘
                </button>
              )}
              {language === "hi" && (
                <button
                  onClick={() => {
                    window.open(
                      `https://gemini.google.com/gem/storybook/c251187f6e19e3fa`,
                      "_blank"
                    );
                  }}
                  className="flex-1 bg-linear-to-r from-purple-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <Book className="w-5 h-5" />
                  {t.readStory} 📘
                </button>
              )}
              {language === "en" && (
                <button
                  onClick={() => {
                    // Open in a new tab
                    window.open(
                      "https://gemini.google.com/gem/storybook/f6ba2e6cb78582cf",
                      "_blank"
                    );
                  }}
                  className="flex-1 bg-linear-to-r from-purple-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <Book className="w-5 h-5" />
                  {t.readStory} 📘
                </button>
              )}
            </div>
          </div>
        </section>

        {/* What To Carry Checklist */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎒</span>
              <h2 className="text-3xl font-bold text-gray-800">
                {t.carryTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checklistItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className="flex items-center gap-4 p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl hover:shadow-md transition-all"
                >
                  {checklist[item.key] ? (
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300 shrink-0" />
                  )}
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-lg font-medium text-gray-700">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pad Changing Timer */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-purple-100 to-pink-100 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⏱</span>
              <h2 className="text-3xl font-bold text-gray-800">
                {t.timerTitle}
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 mb-4">
              <p className="text-lg text-gray-700 mb-2">🌟 {t.timerDesc}</p>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-full mt-4 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                  notificationsEnabled
                    ? "bg-green-500 text-white"
                    : "bg-linear-to-r from-pink-400 to-purple-400 text-white hover:scale-105"
                }`}
              >
                <Bell className="w-5 h-5" />⏰{" "}
                {notificationsEnabled ? "Notifications On ✓" : t.enableNotif}
              </button>
            </div>
          </div>
        </section>

        {/* Feelings Support */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🌈</span>
              <h2 className="text-3xl font-bold text-gray-800">
                {t.feelingsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {moods.map((mood, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMood(mood)}
                  className="flex flex-col items-center gap-2 p-4 bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl hover:scale-105 transition-transform"
                >
                  <span className="text-4xl">{mood.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
                <p className="text-lg text-gray-700">{selectedMood.message}</p>
              </div>
            )}
          </div>
        </section>

        {/* Real Girl Stories */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎭</span>
              <h2 className="text-3xl font-bold text-gray-800">
                {t.storiesTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className={`${story.color} rounded-2xl p-6 border-2 border-pink-200`}
                >
                  <p className="text-lg text-gray-700 italic">
                    &#34;{story.text}&#34; 💛
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confidence Boost */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4">🧚</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🌟 {t.boostTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="font-semibold text-pink-600">
                  🦸‍♀️ Brave Girl Badge
                </span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="font-semibold text-purple-600">
                  🌸 Health Hero
                </span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="font-semibold text-blue-600">
                  ✨ Self-Care Star
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* When to Ask for Help */}
        <section className="mb-12">
          <div className="bg-red-50 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto border-4 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🩺</span>
              <h2 className="text-3xl font-bold text-gray-800">
                {t.helpTitle}
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 mb-4">
              <p className="text-lg font-semibold text-gray-700 mb-3">
                Seek help if:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>Bleeding very heavy &gt; 7 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>Severely painful cramps</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>You feel too weak/dizzy often</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-linear-to-r from-red-400 to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
              Talk to Doctor 👩‍⚕️
            </button>
          </div>
        </section>

        {/* Privacy First */}
        <section className="mb-12">
          <div className="bg-linear-to-r from-blue-100 to-purple-100 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-12 h-12 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                {t.privacyTitle}
              </h2>
            </div>
            <p className="text-lg text-gray-700">{t.privacyText}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-xl mb-8">{t.ctaText} 🌼</p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform shadow-xl">
              {t.startBtn} 🚀
            </button>
          </div>
        </section>
      </main>
      <PeriodCareFooter language={language} />
    </div>
  );
}

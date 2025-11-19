import React, { useState, useEffect } from "react";
import {
  Heart,
  Music,
  BookOpen,
  TrendingUp,
  Bell,
  Wind,
  Play,
  Pause,
  Volume2,
  Smartphone,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Sun,
  Moon,
  Waves,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function MentalWellnessSupport() {
  const [selectedMood, setSelectedMood] = useState("");
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathScale, setBreathScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState("");
  const [partnerAlerts, setPartnerAlerts] = useState(true);
  const params = useSearchParams();
  const language = params.get("lang") || "en";
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (isBreathing) {
      const interval = setInterval(() => {
        setBreathScale((prev) => (prev === 1 ? 1.5 : 1));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isBreathing]);

  useEffect(() => {
    // Cleanup audio on unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, [audio]);

  const translations = {
    en: {
      title: "AI Mental Wellness Support",
      subtitle:
        "Track your mood, calm your mind, and feel supported throughout your cycle",
      dailyMood: "Daily Mood",
      moodQuestion: "How are you feeling today?",
      weeklyTrends: "Weekly Mood Trends",
      instantTools: "Instant Calming Tools",
      breathing: "Breathing Exercises",
      breathSubtitle: "Calm in 60 seconds",
      startBreathing: "Start Breathing Cycle",
      stopBreathing: "Stop Breathing",
      meditation: "Meditation Music",
      playMeditation: "Play Meditation",
      stopMeditation: "Stop Music",
      journaling: "Stress Journaling",
      openJournal: "Open Journal",
      journalHint: "Write out your feelings, we'll map your stress pattern",
      aiSupport: "AI Support Recommendations",
      aiSuggestions: [
        "You seem a bit overwhelmed today. Try a 1-minute breathing session.",
        "Your stress is linked to PMS days. Should I prepare calming routines for you?",
      ],
      partnerSupport: "Partner Support Alerts",
      partnerSubtitle: "Send gentle support alerts to your partner",
      whenNotify: "When to notify?",
      notifyOptions: {
        stress: "High stress detected",
        mood: "Mood drop",
        journal: "Journal mentions sadness",
        pms: "PMS phase start",
      },
      messagePreview: "She might need emotional support today 💗",
      startRoutine: "Start My Wellness Routine",
      moods: {
        happy: "Happy",
        neutral: "Neutral",
        low: "Low",
        stressed: "Stressed",
        irritable: "Irritable",
      },
      musicPresets: {
        ocean: "Ocean Calm",
        fire: "Warm Fireplace",
        forest: "Forest Air",
      },
    },
    hi: {
      title: "AI मानसिक कल्याण समर्थन",
      subtitle:
        "अपने मूड को ट्रैक करें, अपने दिमाग को शांत करें, और अपने चक्र में समर्थित महसूस करें",
      dailyMood: "दैनिक मूड",
      moodQuestion: "आज आप कैसा महसूस कर रहे हैं?",
      weeklyTrends: "साप्ताहिक मूड रुझान",
      instantTools: "त्वरित शांत करने के उपकरण",
      breathing: "श्वास व्यायाम",
      breathSubtitle: "60 सेकंड में शांत",
      startBreathing: "श्वास चक्र शुरू करें",
      stopBreathing: "श्वास बंद करें",
      meditation: "ध्यान संगीत",
      playMeditation: "ध्यान चलाएं",
      stopMeditation: "संगीत बंद करें",
      journaling: "तनाव डायरी",
      openJournal: "डायरी खोलें",
      journalHint: "अपनी भावनाएं लिखें, हम आपके तनाव पैटर्न को मैप करेंगे",
      aiSupport: "AI समर्थन सिफारिशें",
      aiSuggestions: [
        "आज आप थोड़ा अभिभूत लग रहे हैं। 1 मिनट का श्वास सत्र आजमाएं।",
        "आपका तनाव PMS दिनों से जुड़ा है। क्या मैं आपके लिए शांत दिनचर्या तैयार करूं?",
      ],
      partnerSupport: "साथी समर्थन अलर्ट",
      partnerSubtitle: "अपने साथी को कोमल समर्थन अलर्ट भेजें",
      whenNotify: "कब सूचित करें?",
      notifyOptions: {
        stress: "उच्च तनाव का पता चला",
        mood: "मूड में गिरावट",
        journal: "डायरी में उदासी का उल्लेख",
        pms: "PMS चरण शुरू",
      },
      messagePreview: "उसे आज भावनात्मक समर्थन की आवश्यकता हो सकती है 💗",
      startRoutine: "मेरी कल्याण दिनचर्या शुरू करें",
      moods: {
        happy: "खुश",
        neutral: "तटस्थ",
        low: "कम",
        stressed: "तनावग्रस्त",
        irritable: "चिड़चिड़ा",
      },
      musicPresets: {
        ocean: "सागर शांति",
        fire: "गर्म अलाव",
        forest: "वन हवा",
      },
    },
    mr: {
      title: "AI मानसिक कल्याण समर्थन",
      subtitle:
        "तुमचा मूड ट्रॅक करा, तुमचे मन शांत करा, आणि तुमच्या चक्रात समर्थित वाटा",
      dailyMood: "दैनंदिन मूड",
      moodQuestion: "आज तुम्हाला कसे वाटते?",
      weeklyTrends: "साप्ताहिक मूड ट्रेंड",
      instantTools: "त्वरित शांत करणारी साधने",
      breathing: "श्वास व्यायाम",
      breathSubtitle: "60 सेकंदात शांत",
      startBreathing: "श्वास चक्र सुरू करा",
      stopBreathing: "श्वास थांबवा",
      meditation: "ध्यान संगीत",
      playMeditation: "ध्यान चालवा",
      stopMeditation: "संगीत थांबवा",
      journaling: "तणाव डायरी",
      openJournal: "डायरी उघडा",
      journalHint: "तुमच्या भावना लिहा, आम्ही तुमचा तणाव पॅटर्न मॅप करू",
      aiSupport: "AI समर्थन शिफारसी",
      aiSuggestions: [
        "आज तुम्ही थोडे भारावलेले दिसत आहात। 1 मिनिट श्वास सत्र करून पहा।",
        "तुमचा तणाव PMS दिवसांशी जोडलेला आहे. मी तुमच्यासाठी शांत दिनचर्या तयार करू?",
      ],
      partnerSupport: "भागीदार समर्थन सूचना",
      partnerSubtitle: "तुमच्या भागीदाराला सौम्य समर्थन सूचना पाठवा",
      whenNotify: "कधी सूचित करावे?",
      notifyOptions: {
        stress: "उच्च तणाव आढळला",
        mood: "मूडमध्ये घट",
        journal: "डायरीमध्ये दुःखाचा उल्लेख",
        pms: "PMS टप्पा सुरू",
      },
      messagePreview: "तिला आज भावनिक समर्थनाची गरज असू शकते 💗",
      startRoutine: "माझी कल्याण दिनचर्या सुरू करा",
      moods: {
        happy: "आनंदी",
        neutral: "तटस्थ",
        low: "कमी",
        stressed: "तणावग्रस्त",
        irritable: "चिडचिड",
      },
      musicPresets: {
        ocean: "सागर शांती",
        fire: "उबदार पेटका",
        forest: "जंगल हवा",
      },
    },
  };

  const t = translations[language];

  const moods = [
    {
      id: "happy",
      emoji: "😊",
      label: t.moods.happy,
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: "neutral",
      emoji: "😐",
      label: t.moods.neutral,
      color: "from-gray-400 to-gray-500",
    },
    {
      id: "low",
      emoji: "😔",
      label: t.moods.low,
      color: "from-blue-400 to-blue-500",
    },
    {
      id: "stressed",
      emoji: "😣",
      label: t.moods.stressed,
      color: "from-red-400 to-red-500",
    },
    {
      id: "irritable",
      emoji: "😡",
      label: t.moods.irritable,
      color: "from-purple-400 to-purple-500",
    },
  ];

  const musicPresets = [
    {
      id: "ocean",
      icon: Waves,
      label: t.musicPresets.ocean,
      color: "text-blue-500",
      link: "/audio/ocean.mp3",
    },
    {
      id: "fire",
      icon: Sun,
      label: t.musicPresets.fire,
      color: "text-orange-500",
      link: "/audio/fire.mp3",
    },
    {
      id: "forest",
      icon: Wind,
      label: t.musicPresets.forest,
      color: "text-green-500",
      link: "/audio/forest.mp3",
    },
  ];

  const handleMusicSelect = (presetId, audioLink) => {
    // Stop current audio if playing
    if (audio) {
      audio.pause();
      setAudio(null);
    }

    // If same music is selected and playing, stop it
    if (selectedMusic === presetId && isPlaying) {
      setIsPlaying(false);
      setSelectedMusic("");
      return;
    }

    // Set new music
    setSelectedMusic(presetId);

    // Create and play new audio
    const newAudio = new Audio(audioLink);
    newAudio.loop = true;
    newAudio.volume = 0.5;

    newAudio
      .play()
      .then(() => {
        setIsPlaying(true);
        setAudio(newAudio);
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
        alert("Unable to play audio. User interaction may be required first.");
        setIsPlaying(false);
      });
  };

  const togglePlayPause = () => {
    if (!selectedMusic) {
      alert("Please select a music preset first");
      return;
    }

    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
    } else if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error playing audio:", error);
          alert("Unable to play audio.");
        });
    } else {
      // If no audio loaded, load and play the selected music
      const preset = musicPresets.find((p) => p.id === selectedMusic);
      if (preset) {
        handleMusicSelect(preset.id, preset.link);
      }
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#B48DF1] via-[#FFE8F2] to-[#FF6FAE] pb-8">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <Heart className="w-8 h-8 text-[#FF6FAE] animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6FAE] rounded-full animate-ping"></div>
                </div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] bg-clip-text text-transparent">
                  {t.title}
                </h1>
              </div>
              <p className="text-gray-600">{t.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] rounded-full text-white text-sm font-semibold shadow-lg">
                {t.dailyMood}:{" "}
                {selectedMood
                  ? moods.find((m) => m.id === selectedMood)?.emoji
                  : "😊"}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Globe className="w-5 h-5 text-gray-600" />
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Icons Animation */}
          <div className="flex justify-center gap-6 mt-4">
            <Heart
              className="w-6 h-6 text-[#FF6FAE] animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <Music
              className="w-6 h-6 text-[#B48DF1] animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <Wind
              className="w-6 h-6 text-[#AEE9D1] animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
            <BookOpen
              className="w-6 h-6 text-[#FF6FAE] animate-bounce"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Mood Tracking Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {t.moodQuestion}
            </h2>
            <button className="flex items-center gap-2 text-[#B48DF1] font-semibold text-sm hover:underline">
              <TrendingUp className="w-5 h-5" />
              {t.weeklyTrends}
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all transform ${
                  selectedMood === mood.id
                    ? `bg-linear-to-br ${mood.color} text-white shadow-2xl scale-110`
                    : "bg-gray-100 text-gray-600 hover:scale-105"
                }`}
              >
                <div
                  className={`text-4xl mb-2 ${
                    selectedMood === mood.id ? "animate-bounce" : ""
                  }`}
                >
                  {mood.emoji}
                </div>
                <p className="text-xs font-semibold">{mood.label}</p>
                {selectedMood === mood.id && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#FF6FAE]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* AI Support Recommendations */}
        <div className="bg-linear-to-br from-pink-100 to-purple-100 rounded-3xl shadow-xl p-6 border-2 border-[#FF6FAE]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-linear-to-br from-[#FF6FAE] to-[#B48DF1] rounded-2xl flex items-center justify-center shrink-0 animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.aiSupport}
              </h3>
              <div className="space-y-3">
                {t.aiSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md"
                  >
                    <p className="text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instant Calming Tools */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">
            {t.instantTools}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Breathing Exercises */}
            <div className="bg-linear-to-br from-[#AEE9D1] to-[#7DD3C0] rounded-3xl shadow-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
              <Wind className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {t.breathing}
              </h3>
              <p className="text-white/90 text-sm mb-4">{t.breathSubtitle}</p>

              <div className="flex items-center justify-center my-6">
                <div
                  className="w-32 h-32 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-2000 ease-in-out"
                  style={{ transform: `scale(${breathScale})` }}
                >
                  <div className="w-24 h-24 rounded-full bg-white/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsBreathing(!isBreathing)}
                className="w-full py-3 bg-white text-[#7DD3C0] rounded-xl font-bold hover:shadow-xl transition-all"
              >
                {isBreathing ? t.stopBreathing : t.startBreathing}
              </button>
            </div>

            {/* Meditation Music */}
            <div className="bg-linear-to-br from-[#B48DF1] to-[#8B5CF6] rounded-3xl shadow-2xl p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mb-16"></div>
              <Music className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {t.meditation}
              </h3>

              <div className="space-y-2 my-4">
                {musicPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleMusicSelect(preset.id, preset.link)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      selectedMusic === preset.id
                        ? "bg-white text-[#B48DF1] shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <preset.icon
                      className={`w-5 h-5 ${
                        selectedMusic === preset.id ? preset.color : ""
                      }`}
                    />
                    <span className="text-sm font-semibold">
                      {preset.label}
                    </span>
                    {selectedMusic === preset.id && isPlaying && (
                      <div className="ml-auto flex gap-1">
                        <div className="w-1 h-4 bg-[#B48DF1] rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-4 bg-[#B48DF1] rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1 h-4 bg-[#B48DF1] rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={togglePlayPause}
                className="w-full py-3 bg-white text-[#B48DF1] rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
                {isPlaying ? t.stopMeditation : t.playMeditation}
              </button>
            </div>

            {/* Stress Journaling */}
            <div className="bg-linear-to-br from-[#FFE8F2] to-[#FFC9E0] rounded-3xl shadow-2xl p-6 relative overflow-hidden border-2 border-[#FF6FAE]">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/30 rounded-full -ml-12 -mt-12"></div>
              <BookOpen className="w-12 h-12 text-[#FF6FAE] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.journaling}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{t.journalHint}</p>

              <div className="bg-white rounded-xl p-4 mb-4 min-h-[100px] border-2 border-dashed border-[#FF6FAE]">
                <p className="text-gray-400 text-sm italic">Start writing...</p>
              </div>

              <button className="w-full py-3 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] text-white rounded-xl font-bold hover:shadow-xl transition-all">
                {t.openJournal}
              </button>
            </div>
          </div>
        </div>

        {/* Partner Support Alerts */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-[#FF6FAE]">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <Bell className="absolute -top-2 -right-2 w-6 h-6 text-[#FF6FAE] animate-bounce" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.partnerSupport}
              </h3>
              <p className="text-gray-600">{t.partnerSubtitle}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={partnerAlerts}
                onChange={() => setPartnerAlerts(!partnerAlerts)}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-linear-to-r peer-checked:from-[#FF6FAE] peer-checked:to-[#B48DF1]"></div>
            </label>
          </div>

          {partnerAlerts && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-rose-50 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {t.whenNotify}
                </h4>
                <div className="space-y-2">
                  {Object.entries(t.notifyOptions).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 rounded border-gray-300 text-[#FF6FAE] focus:ring-[#FF6FAE]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {value}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-r from-pink-100 to-purple-100 rounded-2xl p-4 border-2 border-[#FF6FAE]">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-[#FF6FAE] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Message Preview:
                    </p>
                    <p className="text-gray-900 font-medium">
                      {t.messagePreview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <button className="w-full py-5 bg-linear-to-r from-[#FF6FAE] to-[#B48DF1] text-white rounded-3xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 group">
          <Heart className="w-6 h-6 group-hover:animate-pulse" />
          {t.startRoutine}
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import {
  Heart,
  Lock,
  Share2,
  Settings,
  Copy,
  Check,
  Users,
  Activity,
  Sparkles,
  MessageCircle,
  Calendar,
  Shield,
  Info,
  TrendingUp,
  RefreshCw,
  X,
  ChevronRight,
  Sun,
  Moon,
  Zap,
  Wind,
} from "lucide-react";

export default function PartnerMode() {
  const [isConnected, setIsConnected] = useState(false);
  const [partnerCode, setPartnerCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [codeCopied, setCodeCopied] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [connectionType, setConnectionType] = useState(""); // 'partner' or 'parent'
  const [partnerName, setPartnerName] = useState("");
  const [syncSettings, setSyncSettings] = useState({
    mood: true,
    symptoms: true,
    phase: true,
  });

  // Mock data for connected state
  const mockPartnerData = {
    name: "Rahul",
    lastSync: "2 hours ago",
    isOnline: true,
  };

  const mockParentData = {
    name: "Mom",
    lastSync: "5 hours ago",
    isOnline: false,
  };

  const currentCycle = {
    phase: "Luteal Phase",
    daysInPhase: 5,
    nextPhase: "Menstrual",
    daysToNext: 3,
    phaseColor: "from-green-400 to-teal-400",
  };

  const todayMood = {
    emoji: "😊",
    label: "Calm & Balanced",
    color: "bg-blue-100 text-blue-700",
  };

  const todaySymptoms = ["Mild cramps", "Low energy", "Slight bloating"];

  const aiSuggestions = [
    {
      icon: "🍽️",
      title: "Support Tip",
      description: "Offer to cook or order her favorite comfort food today.",
      color: "from-orange-100 to-red-100",
    },
    {
      icon: "🧠",
      title: "Emotional Note",
      description:
        "Patience and small surprises go a long way during this phase.",
      color: "from-purple-100 to-pink-100",
    },
    {
      icon: "🫶",
      title: "Try Together",
      description: "Light walk or breathing exercise can help reduce stress.",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: "💝",
      title: "Communication",
      description:
        "Ask how she's feeling instead of assuming. Active listening matters.",
      color: "from-pink-100 to-rose-100",
    },
  ];

  const phases = [
    { name: "Menstrual", icon: "🌸", color: "bg-red-400" },
    { name: "Follicular", icon: "🌱", color: "bg-purple-400" },
    { name: "Ovulation", icon: "☀️", color: "bg-yellow-400" },
    { name: "Luteal", icon: "🍃", color: "bg-green-400" },
  ];

  const generatePartnerCode = (type) => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
    setConnectionType(type);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const connectPartner = (type) => {
    if (partnerCode.trim()) {
      setIsConnected(true);
      setConnectionType(type);
      setPartnerName(
        type === "partner" ? mockPartnerData.name : mockParentData.name
      );
    }
  };

  const disconnectPartner = () => {
    if (
      window.confirm("Are you sure you want to disconnect from your partner?")
    ) {
      setIsConnected(false);
      setPartnerCode("");
      setPartnerName("");
    }
  };

  const toggleSyncSetting = (setting) => {
    setSyncSettings({ ...syncSettings, [setting]: !syncSettings[setting] });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header / Hero Section */}
      <div className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 py-12 lg:py-16 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Better Together</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Partner & Parent Mode 💞
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Connect with your partner or parent to share and receive support
              during your menstrual cycle
            </p>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              You choose what to share — moods, symptoms, or cycle info. Your
              data is always private and secure.
            </p>

            {!isConnected && (
              <button
                onClick={() => setShowCodeModal(true)}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Connect Partner or Parent</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Partner Connection Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
          {!isConnected ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-linear-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Connect with Partner or Parent
                </h2>
                <p className="text-gray-600">
                  Share your code or enter theirs to start syncing
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Generate Code */}
                <div className="bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                    <Share2 className="w-5 h-5 text-pink-600" />
                    <span>Generate Your Code</span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Choose who you want to connect with
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        generatePartnerCode("partner");
                        setShowCodeModal(true);
                      }}
                      className="w-full bg-linear-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Heart className="w-5 h-5" />
                      <span>For Partner</span>
                    </button>
                    <button
                      onClick={() => {
                        generatePartnerCode("parent");
                        setShowCodeModal(true);
                      }}
                      className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Users className="w-5 h-5" />
                      <span>For Parent</span>
                    </button>
                  </div>
                </div>

                {/* Enter Code */}
                <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-indigo-600" />
                    <span>Enter Connection Code</span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have a code? Select type and enter it
                  </p>
                  <div className="space-y-3">
                    {/* Connection Type Selection */}
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <button
                        onClick={() => setConnectionType("partner")}
                        className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                          connectionType === "partner"
                            ? "bg-pink-500 text-white"
                            : "bg-white text-gray-700 border-2 border-gray-200"
                        }`}
                      >
                        💑 Partner
                      </button>
                      <button
                        onClick={() => setConnectionType("parent")}
                        className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                          connectionType === "parent"
                            ? "bg-purple-500 text-white"
                            : "bg-white text-gray-700 border-2 border-gray-200"
                        }`}
                      >
                        👨‍👩‍👧 Parent
                      </button>
                    </div>

                    <input
                      type="text"
                      value={partnerCode}
                      onChange={(e) =>
                        setPartnerCode(e.target.value.toUpperCase())
                      }
                      placeholder="XXXXXX"
                      maxLength="6"
                      className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center text-lg font-bold uppercase tracking-widest"
                    />
                    <button
                      onClick={() => connectPartner(connectionType)}
                      disabled={partnerCode.length !== 6 || !connectionType}
                      className="w-full bg-linear-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Connect Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${
                      connectionType === "partner"
                        ? "from-pink-400 to-rose-400"
                        : "from-purple-400 to-indigo-400"
                    } rounded-full flex items-center justify-center`}
                  >
                    {connectionType === "partner" ? (
                      <Heart className="w-8 h-8 text-white" />
                    ) : (
                      <Users className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Connected with {partnerName}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          connectionType === "partner"
                            ? "bg-pink-100 text-pink-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {connectionType === "partner"
                          ? "💑 Partner"
                          : "👨‍👩‍👧 Parent"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      {(
                        connectionType === "partner"
                          ? mockPartnerData.isOnline
                          : mockParentData.isOnline
                      ) ? (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">
                            Online
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-500">
                          Last sync:{" "}
                          {connectionType === "partner"
                            ? mockPartnerData.lastSync
                            : mockParentData.lastSync}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={disconnectPartner}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition-colors"
                >
                  Disconnect
                </button>
              </div>

              <div className="flex items-center justify-center space-x-4 py-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-green-700 font-semibold">
                  Successfully synced with your{" "}
                  {connectionType === "partner" ? "partner" : "parent"}
                </span>
              </div>
            </div>
          )}
        </div>

        {isConnected && (
          <>
            {/* Sync Settings Section */}
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  What would you like to share?
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                You can edit this anytime. Only summarized info will be visible
                to your partner.
              </p>

              <div className="space-y-4">
                {/* Mood Toggle */}
                <div className="flex items-center justify-between p-4 bg-linear-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                      😊
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Share Mood Changes
                      </p>
                      <p className="text-sm text-gray-600">
                        Let your partner know how you&#39;re feeling
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSyncSetting("mood")}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      syncSettings.mood ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        syncSettings.mood ? "translate-x-8" : "translate-x-1"
                      }`}
                    ></div>
                  </button>
                </div>

                {/* Symptoms Toggle */}
                <div className="flex items-center justify-between p-4 bg-linear-to-r from-purple-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      💊
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Share Physical Symptoms
                      </p>
                      <p className="text-sm text-gray-600">
                        Help them understand your physical state
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSyncSetting("symptoms")}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      syncSettings.symptoms ? "bg-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        syncSettings.symptoms
                          ? "translate-x-8"
                          : "translate-x-1"
                      }`}
                    ></div>
                  </button>
                </div>

                {/* Phase Toggle */}
                <div className="flex items-center justify-between p-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                      🔄
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Share Cycle Phase Info
                      </p>
                      <p className="text-sm text-gray-600">
                        Show current menstrual phase
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSyncSetting("phase")}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      syncSettings.phase ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        syncSettings.phase ? "translate-x-8" : "translate-x-1"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              <button className="w-full mt-6 bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Save Preferences</span>
              </button>
            </div>

            {/* Cycle Overview Widget */}
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Current Cycle Phase
                </h2>
              </div>

              <div
                className={`bg-linear-to-r ${currentCycle.phaseColor} rounded-2xl p-6 mb-6`}
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-medium opacity-90">
                      Currently in
                    </p>
                    <h3 className="text-3xl font-bold">{currentCycle.phase}</h3>
                    <p className="text-sm mt-2 opacity-90">
                      Day {currentCycle.daysInPhase} of this phase
                    </p>
                  </div>
                  <div className="text-6xl">🍃</div>
                </div>
              </div>

              {/* Phase Timeline */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  {phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div
                        className={`w-12 h-12 ${
                          phase.color
                        } rounded-full flex items-center justify-center text-2xl ${
                          currentCycle.phase === phase.name
                            ? "ring-4 ring-offset-2 ring-purple-400"
                            : ""
                        }`}
                      >
                        {phase.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {phase.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-red-400 via-purple-400 via-yellow-400 to-green-400 w-3/4"></div>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-xl">
                <Info className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-900">
                  <span className="font-semibold">
                    {currentCycle.nextPhase} phase
                  </span>{" "}
                  starts in {currentCycle.daysToNext} days
                </span>
              </div>
            </div>

            {/* Mood & Symptom Summary */}
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Activity className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Today&#39;s Shared Summary
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Mood */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Current Mood</h3>
                  <div
                    className={`${todayMood.color} rounded-2xl p-6 flex items-center space-x-4`}
                  >
                    <div className="text-5xl">{todayMood.emoji}</div>
                    <div>
                      <p className="text-2xl font-bold">{todayMood.label}</p>
                      <p className="text-sm opacity-75">
                        Feeling generally positive today
                      </p>
                    </div>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">
                    Physical Symptoms
                  </h3>
                  <div className="space-y-2">
                    {todaySymptoms.map((symptom, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Partner Tip */}
              <div className="mt-6 bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">
                      AI Partner Tip
                    </h4>
                    <p className="text-amber-800">
                      Offer emotional support and help with small tasks today.
                      Physical symptoms may reduce energy levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Support Suggestions */}
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  AI Support Suggestions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {aiSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className={`bg-linear-to-br ${suggestion.color} rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-4xl">{suggestion.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">
                          {suggestion.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {suggestion.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relationship Insights */}
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Relationship Insights
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-purple-600 mb-2">20</p>
                  <p className="text-sm text-gray-600">
                    Days synced this month 💫
                  </p>
                </div>

                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">82%</p>
                  <p className="text-sm text-gray-600">
                    Emotional compatibility ❤️
                  </p>
                </div>

                <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-amber-600 mb-2">
                    Ovulation
                  </p>
                  <p className="text-sm text-gray-600">
                    Most supportive phase ☀️
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & Security Card */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Your Privacy Matters
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center space-x-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Your data is 100% private and encrypted</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Partner mode only shares what you approve</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>
                        You can disconnect anytime without consequences
                      </span>
                    </li>
                  </ul>
                  <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:space-x-2 transition-all">
                    <span>View Data Policy</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Code Generation Modal */}
      {showCodeModal && !isConnected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <button
                onClick={() => setShowCodeModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="w-20 h-20 bg-linear-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-10 h-10 text-white" />
              </div>

              {!generatedCode ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Who do you want to connect with?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Choose the type of connection
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => generatePartnerCode("partner")}
                      className="w-full bg-linear-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Generate Code for Partner</span>
                    </button>
                    <button
                      onClick={() => generatePartnerCode("parent")}
                      className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Users className="w-5 h-5" />
                      <span>Generate Code for Parent</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your {connectionType === "partner" ? "Partner" : "Parent"}{" "}
                    Code
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Share this code privately with your{" "}
                    {connectionType === "partner" ? "partner" : "parent"}
                  </p>

                  <div
                    className={`bg-linear-to-br ${
                      connectionType === "partner"
                        ? "from-pink-50 to-rose-50"
                        : "from-purple-50 to-indigo-50"
                    } rounded-2xl p-6 mb-6`}
                  >
                    <div className="text-center mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                          connectionType === "partner"
                            ? "bg-pink-200 text-pink-700"
                            : "bg-purple-200 text-purple-700"
                        }`}
                      >
                        {connectionType === "partner"
                          ? "💑 Partner Mode"
                          : "👨‍👩‍👧 Parent Mode"}
                      </span>
                    </div>
                    <p
                      className={`text-5xl font-bold tracking-widest mb-4 ${
                        connectionType === "partner"
                          ? "text-pink-600"
                          : "text-purple-600"
                      }`}
                    >
                      {generatedCode}
                    </p>
                    <button
                      onClick={copyCode}
                      className={`w-full border-2 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                        connectionType === "partner"
                          ? "bg-pink-500 border-pink-600 hover:bg-pink-600"
                          : "bg-purple-500 border-purple-600 hover:bg-purple-600"
                      }`}
                    >
                      {codeCopied ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500">
                    Code expires in 24 hours
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

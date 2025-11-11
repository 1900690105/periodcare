"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  Calendar,
  Heart,
  TrendingUp,
  Book,
  Droplet,
  Activity,
  Moon,
  Sun,
  Apple,
  Dumbbell,
  GlassWater,
  Smile,
  User,
  Settings,
  Download,
  ChevronRight,
  Video,
  Clock,
  Award,
  Bell,
  Globe,
  FileText,
  BarChart3,
  Target,
  Sparkles,
  Stethoscope,
  Play,
  Plus,
} from "lucide-react";
import NavBar from "../components/NavBar";

export default function UserDashboard() {
  const [userName] = useState("Nikhita");
  const [currentDay] = useState(12);
  const [currentPhase] = useState("Follicular");
  const [cycleLength] = useState(28);
  const [daysUntilPeriod] = useState(16);
  const [language, setLanguage] = useState("en");

  // Calculate cycle progress percentage
  const cycleProgress = (currentDay / cycleLength) * 100;

  // Phase data
  const phaseInfo = {
    Menstrual: { color: "from-red-400 to-pink-400", icon: "🌸", emoji: "💮" },
    Follicular: {
      color: "from-purple-400 to-pink-400",
      icon: "🌱",
      emoji: "🌷",
    },
    Ovulation: {
      color: "from-amber-400 to-orange-400",
      icon: "☀️",
      emoji: "🌻",
    },
    Luteal: { color: "from-green-400 to-teal-400", icon: "🍃", emoji: "🌿" },
  };

  const currentPhaseInfo = phaseInfo[currentPhase];

  // Wellness recommendations
  const wellnessRecommendations = [
    {
      icon: Apple,
      title: "Nutrition Tip",
      description: "Eat iron-rich foods like spinach and lentils",
      color: "from-green-400 to-emerald-400",
      emoji: "🥗",
    },
    {
      icon: Dumbbell,
      title: "Exercise",
      description: "Try light cardio or yoga today",
      color: "from-purple-400 to-pink-400",
      emoji: "🧘",
    },
    {
      icon: GlassWater,
      title: "Hydration",
      description: "Drink 8 glasses of water today",
      color: "from-blue-400 to-cyan-400",
      emoji: "💧",
    },
    {
      icon: Heart,
      title: "Mood Care",
      description: "Practice deep breathing for 5 mins",
      color: "from-pink-400 to-rose-400",
      emoji: "💜",
    },
  ];

  // Recent AI conversations
  const recentChats = [
    { message: "What should I eat during my period?", time: "2h ago" },
    { message: "How to reduce cramps naturally?", time: "1 day ago" },
  ];

  // Learning topics
  const learningTopics = [
    {
      icon: Droplet,
      title: "Menstrual Basics",
      color: "from-pink-400 to-rose-400",
      lessons: 5,
    },
    {
      icon: Sparkles,
      title: "Hygiene",
      color: "from-blue-400 to-cyan-400",
      lessons: 4,
    },
    {
      icon: Heart,
      title: "Wellness",
      color: "from-purple-400 to-pink-400",
      lessons: 6,
    },
    {
      icon: Smile,
      title: "Emotional Health",
      color: "from-amber-400 to-orange-400",
      lessons: 4,
    },
  ];

  // Doctors
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Gynecologist",
      available: true,
      rating: 4.8,
    },
    {
      name: "Dr. Anjali Verma",
      specialty: "Endocrinologist",
      available: false,
      rating: 4.9,
    },
    {
      name: "Dr. Meera Patel",
      specialty: "Nutritionist",
      available: true,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Top Navigation Bar */}
      <NavBar language={language} setLanguage={setLanguage} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 1. Hero / Welcome Panel */}
        <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Hi, {userName}! 🌸
                  </h1>
                  <p className="text-pink-100">
                    Welcome back to your wellness journey
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-semibold">
                  Day {currentDay} of your cycle
                </p>
                <p className="text-pink-100 text-lg">
                  {currentPhase} Phase {currentPhaseInfo.emoji}
                </p>
              </div>

              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat with PeriodCare AI</span>
              </button>
            </div>

            {/* Circular Progress Tracker */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="20"
                    fill="none"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="white"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 110}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 110 * (1 - cycleProgress / 100)
                    }`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <p className="text-5xl font-bold text-white">{currentDay}</p>
                  <p className="text-white text-sm">of {cycleLength} days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* 2. Cycle Overview Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Cycle Overview
              </h2>
              <button className="text-pink-600 font-semibold flex items-center space-x-1 hover:space-x-2 transition-all">
                <span>View Full Tracker</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-5 space-y-2">
                <Calendar className="w-8 h-8 text-pink-500" />
                <p className="text-3xl font-bold text-gray-900">
                  {daysUntilPeriod}
                </p>
                <p className="text-gray-600">Days until period</p>
              </div>

              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-5 space-y-2">
                <Activity className="w-8 h-8 text-purple-500" />
                <p className="text-3xl font-bold text-gray-900">High</p>
                <p className="text-gray-600">Energy Level</p>
              </div>

              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-5 space-y-2">
                <Sun className="w-8 h-8 text-amber-500" />
                <p className="text-3xl font-bold text-gray-900">Good</p>
                <p className="text-gray-600">Mood Today</p>
              </div>
            </div>

            {/* Phase Timeline */}
            <div className="relative">
              <div className="flex justify-between mb-2">
                {Object.keys(phaseInfo).map((phase) => (
                  <div key={phase} className="text-center">
                    <p className="text-sm font-semibold text-gray-700">
                      {phase}
                    </p>
                    <p className="text-2xl">{phaseInfo[phase].icon}</p>
                  </div>
                ))}
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-linear-to-r ${currentPhaseInfo.color} transition-all duration-500`}
                  style={{ width: `${cycleProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* 4. AI Insights Panel (Right Side) */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">AI Assistant</h3>
              <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {recentChats.map((chat, idx) => (
                <div key={idx} className="bg-pink-50 rounded-xl p-3">
                  <p className="text-sm text-gray-700 mb-1">{chat.message}</p>
                  <p className="text-xs text-gray-500">{chat.time}</p>
                </div>
              ))}
            </div>

            <button className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Continue Chat</span>
            </button>
          </div>
        </div>

        {/* 3. Today's Wellness Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Today&rsquo;s Wellness Tips
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessRecommendations.map((rec, idx) => (
              <div
                key={idx}
                className={`bg-linear-to-br ${rec.color} rounded-2xl p-6 text-white hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer`}
              >
                <div className="text-4xl mb-3">{rec.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
                <p className="text-white/90 text-sm">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid for Doctor & Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* 6. Doctor Consultation Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Consult Doctor
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {doctors.map((doctor, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-100 rounded-2xl p-4 hover:border-pink-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-linear-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-7 h-7 text-pink-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            doctor.available ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></span>
                        <span className="text-xs text-gray-600">
                          {doctor.available ? "Available" : "Busy"}
                        </span>
                        <span className="text-xs text-amber-600">
                          ⭐ {doctor.rating}
                        </span>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        doctor.available
                          ? "bg-linear-to-r from-teal-500 to-cyan-500 text-white hover:shadow-lg"
                          : "bg-gray-100 text-gray-500"
                      } transition-all`}
                    >
                      {doctor.available ? "Chat Now" : "Book"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Analytics / History */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Analytics
                </h2>
              </div>
              <button className="text-gray-600 hover:text-pink-600 transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>

            {/* Simple Graph Visualization */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-4">
              <div className="flex items-end justify-between h-32 space-x-2">
                {[65, 80, 70, 85, 75, 90, 80].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-linear-to-t from-pink-400 to-purple-400 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs text-gray-600">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>History</span>
              </button>
              <button className="bg-pink-100 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-200 transition-all flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* 8. Settings / Profile Management */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Settings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
              <User className="w-8 h-8 text-pink-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-1">Edit Profile</h3>
              <p className="text-sm text-gray-600">Update your information</p>
            </button>

            <button className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
              <Bell className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-1">Notifications</h3>
              <p className="text-sm text-gray-600">Manage alerts</p>
            </button>

            <button className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
              <Globe className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-1">Language</h3>
              <p className="text-sm text-gray-600">Choose your language</p>
            </button>

            <button className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
              <Settings className="w-8 h-8 text-teal-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-1">Privacy</h3>
              <p className="text-sm text-gray-600">Security settings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

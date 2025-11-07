import React, { useState } from "react";
import { Sparkles, Globe, Heart, Menu, X, Send, Mic } from "lucide-react";
import Image from "next/image";

export default function PeriodCareHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I support you today? 💜" },
    { type: "user", text: "I need diet tips for my cycle" },
    {
      type: "bot",
      text: "I'd be happy to help! Let me share personalized nutrition tips... 🥗",
    },
  ]);

  const languages = ["English", "हिंदी", "मराठी", "தமிழ்", "বাংলা", "తెలుగు"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setMessages([...messages, { type: "user", text: chatMessage }]);
      setChatMessage("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thank you for your question! I can help you with personalized health guidance. 🌸",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 md:-mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 font-medium text-sm">
                AI-Powered Health Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Every Woman with{" "}
              <span className="text-pink-500">Knowledge and Care</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              AI-driven menstrual health guidance in your language. Get
              personalized support, education, and care anytime, anywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-linear-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("education")}
                className="bg-white text-pink-600 border-2 border-pink-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">100% Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Multi-Language
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Works Offline</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

            {/* Main Image Container */}
            <div className="relative">
              {/* Placeholder Image - Replace with your actual image */}
              <div className="relative bg-linear-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/heroimg.png"
                  alt="Woman using PeriodCare app"
                  width={700}
                  height={700}
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
    </div>
  );
}

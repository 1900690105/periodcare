import React, { useState } from "react";
import { Sparkles, Globe, Heart, Menu, X } from "lucide-react";

export default function PeriodCareHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = ["English", "हिंदी", "मराठी", "தமிழ்", "বাংলা", "తెలుగు"];

  const scrollToSection = (sectionId) => {
    // Smooth scroll functionality
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-lavender-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-linear-to-br from-pink-400 to-coral-400 p-2 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-pink-600">
                PeriodCare
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#education"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Education
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Contact
              </a>

              {/* Language Selector */}
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none pr-10"
                  aria-label="Select Language"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-600 pointer-events-none" />
              </div>

              <button className="bg-linear-to-r from-pink-500 to-coral-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-600" />
              ) : (
                <Menu className="w-6 h-6 text-pink-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-pink-100">
              <a
                href="#features"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Features
              </a>
              <a
                href="#education"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Education
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Contact
              </a>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-pink-100 text-pink-700 px-4 py-3 rounded-lg font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Select Language"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>

              <button className="w-full bg-linear-to-r from-pink-500 to-coral-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-coral-500">
                Knowledge and Care
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              AI-driven menstrual health guidance in your language — online or
              offline. Get personalized support, education, and care anytime,
              anywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-linear-to-r from-pink-500 to-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
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
                <span className="text-gray-700 font-medium">Works Offline</span>
              </div>
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
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-pink-200/30 to-coral-200/30 rounded-full blur-3xl"></div>

            {/* Main Illustration Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* Mobile Phone Frame */}
              <div className="bg-linear-to-br from-pink-400 to-coral-400 rounded-3xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Screen */}
                  <div className="bg-linear-to-br from-pink-50 to-white p-6 space-y-4">
                    {/* App Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            PeriodCare AI
                          </p>
                          <p className="text-xs text-green-600">● Online</p>
                        </div>
                      </div>
                      <Globe className="w-5 h-5 text-pink-500" />
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3">
                      <div className="bg-pink-100 rounded-2xl rounded-tl-none p-4">
                        <p className="text-sm text-gray-800">
                          Hello! How can I support you today? 💜
                        </p>
                      </div>

                      <div className="bg-coral-100 rounded-2xl rounded-tr-none p-4 ml-8">
                        <p className="text-sm text-gray-800">
                          I need diet tips for my cycle
                        </p>
                      </div>

                      <div className="bg-pink-100 rounded-2xl rounded-tl-none p-4">
                        <p className="text-sm text-gray-800">
                          I'd be happy to help! Let me share personalized
                          nutrition tips... 🥗
                        </p>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="bg-white border-2 border-pink-200 rounded-xl p-3 text-xs font-medium text-gray-700 hover:bg-pink-50 transition-colors">
                        📅 Track Cycle
                      </button>
                      <button className="bg-white border-2 border-pink-200 rounded-xl p-3 text-xs font-medium text-gray-700 hover:bg-pink-50 transition-colors">
                        🧘 Exercises
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="w-8 h-8 text-coral-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-pink-600">50K+</p>
              <p className="text-gray-600 font-medium">Women Empowered</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-coral-600">10+</p>
              <p className="text-gray-600 font-medium">Languages Supported</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-purple-600">24/7</p>
              <p className="text-gray-600 font-medium">AI Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for next sections */}
      <div id="education" className="h-20"></div>
    </div>
  );
}

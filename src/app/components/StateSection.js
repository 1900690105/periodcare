import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Globe,
  TrendingUp,
  School,
  Droplets,
} from "lucide-react";

export default function StateSection() {
  const [language, setLanguage] = useState("English");
  const [counters, setCounters] = useState({
    awareness: 0,
    absenteeism: 0,
    hygiene: 0,
    languages: 0,
  });

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      awareness: 50,
      absenteeism: 30,
      hygiene: 60,
      languages: 10,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        awareness: Math.min(
          Math.floor((targets.awareness * step) / steps),
          targets.awareness
        ),
        absenteeism: Math.min(
          Math.floor((targets.absenteeism * step) / steps),
          targets.absenteeism
        ),
        hygiene: Math.min(
          Math.floor((targets.hygiene * step) / steps),
          targets.hygiene
        ),
        languages: Math.min(
          Math.floor((targets.languages * step) / steps),
          targets.languages
        ),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const languages = ["English", "हिंदी", "मराठी", "தமிழ்", "বাংলা", "తెలుగు"];

  return (
    <div>
      {/* Impact & Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Creating Change That Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real impact through education, technology, and community
              engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Awareness Increase */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-pink-400 to-pink-500 rounded-2xl mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {counters.awareness}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  Awareness Increase
                </div>
                <div className="text-sm text-gray-500">
                  In menstrual health knowledge
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-pink-400 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.awareness}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* School Absenteeism */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-400 to-purple-500 rounded-2xl mb-6 mx-auto">
                <School className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {counters.absenteeism}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  Absenteeism Reduced
                </div>
                <div className="text-sm text-gray-500">
                  More girls staying in school
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-purple-400 to-purple-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.absenteeism}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Hygiene Adoption */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-pink-400 to-purple-400 rounded-2xl mb-6 mx-auto">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {counters.hygiene}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  Hygiene Improved
                </div>
                <div className="text-sm text-gray-500">
                  Better health practices adopted
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-pink-400 to-purple-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.hygiene}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Languages Supported */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-400 to-pink-400 rounded-2xl mb-6 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {counters.languages}+
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  Languages Supported
                </div>
                <div className="text-sm text-gray-500">
                  Accessible to diverse communities
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-purple-400 to-pink-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(counters.languages / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Impact Metrics */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600 font-medium">Women Empowered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Communities Reached
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-medium">
                  User Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

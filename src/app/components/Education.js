import { useState } from "react";
import {
  Droplet,
  Sparkles,
  Heart,
  Brain,
  ArrowRight,
  BookOpen,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function EducationAwareness() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const educationCards = [
    {
      id: 1,
      icon: Droplet,
      title: "Menstrual Cycle Basics",
      description:
        "Understand the phases of your cycle, what's normal, and how your body changes throughout the month.",
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      topics: ["Cycle Phases", "Hormones 101", "Period Tracking"],
      emoji: "🩸",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Hygiene & Myths",
      description:
        "Bust common myths and learn evidence-based hygiene practices for your menstrual health.",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      topics: ["Product Safety", "Myth Busting", "Care Tips"],
      emoji: "🧼",
    },
    {
      id: 3,
      icon: Heart,
      title: "Wellness & Lifestyle",
      description:
        "Discover nutrition, exercise, and lifestyle habits that support your overall menstrual wellness.",
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-500",
      topics: ["Nutrition Guide", "Exercise Tips", "Sleep & Rest"],
      emoji: "🧘",
    },
    {
      id: 4,
      icon: Brain,
      title: "Emotional Health",
      description:
        "Learn to manage mood changes, stress, and emotional wellbeing throughout your cycle.",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      topics: ["Mood Tracking", "Stress Relief", "Self-Care"],
      emoji: "🧠",
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
              Education & Awareness
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Learn About Your Body —<br />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              With Clarity and Confidence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empower yourself with knowledge. Explore our comprehensive guides
            designed to help you understand and embrace your menstrual health
            journey.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {educationCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

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
                      className={`${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-4 transition-all duration-500 `}
                    >
                      <Image
                        src={`/img/educard${card.id}.png`}
                        alt="bg image"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 pt-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Topics Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.topics.map((topic, idx) => (
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
                      <span>Start Learning</span>
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
                    New Content Available
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Explore Our Video Library
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Watch expert-led videos, interactive lessons, and personal
                  stories from women around the world. Learn at your own pace in
                  your preferred language.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-linear-to-r from-pink-400 to-rose-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Now
                  </button>
                  <button className="bg-gray-100 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300">
                    Browse Articles
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
                      500+ Resources
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
                <div className="text-sm text-gray-600">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  200+
                </div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">12+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Trusted by healthcare professionals and women worldwide
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">Medically Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">
                Culturally Sensitive
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">✓</span>
              <span className="text-sm text-gray-600">Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

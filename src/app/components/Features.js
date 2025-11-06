import React, { useState } from "react";
import { MessageCircle, Book, Wifi, Bell, Users, Lock } from "lucide-react";

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: MessageCircle,
      title: "AI Chatbot Guidance",
      description: "Personalized tips for diet, hygiene, and emotional care.",
      color: "bg-pink-100",
      iconColor: "text-pink-500",
      linear: "from-pink-400 to-rose-400",
    },
    {
      id: 2,
      icon: Book,
      title: "Cultural Education",
      description: "Learn about menstrual health in your local language.",
      color: "bg-purple-100",
      iconColor: "text-purple-500",
      linear: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      icon: Wifi,
      title: "Low Internet Access",
      description: "Continue learning even with low or no internet.",
      color: "bg-blue-100",
      iconColor: "text-blue-500",
      linear: "from-blue-400 to-cyan-400",
    },
    {
      id: 4,
      icon: Bell,
      title: "Smart Reminders",
      description: "Get cycle and hygiene alerts when needed.",
      color: "bg-coral-100",
      iconColor: "text-orange-500",
      linear: "from-orange-400 to-pink-400",
    },
    {
      id: 5,
      icon: Users,
      title: "Community Support",
      description: "Connect with parents, teachers, and peers.",
      color: "bg-green-100",
      iconColor: "text-green-500",
      linear: "from-green-400 to-teal-400",
    },
    {
      id: 6,
      icon: Lock,
      title: "Private & Secure",
      description: "Your health data stays encrypted and anonymous.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-500",
      linear: "from-indigo-400 to-purple-400",
    },
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-4xl">🌸</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-sans">
          Your Health Journey, Simplified
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering you with knowledge, support, and tools for confident
          menstrual health management
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => {
          const Icon = feature.icon;
          const isHovered = hoveredCard === feature.id;

          return (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative bg-white rounded-2xl p-6 sm:p-8 
                transition-all duration-300 ease-out
                ${
                  isHovered
                    ? "transform -translate-y-2 shadow-2xl"
                    : "shadow-md"
                }
                hover:shadow-2xl cursor-pointer
                border-2 border-transparent
                ${isHovered ? "border-opacity-100" : "border-opacity-0"}
              `}
              style={{
                borderImage: isHovered
                  ? `linear-linear(135deg, var(--tw-linear-stops)) 1`
                  : "none",
                borderImageSlice: isHovered ? 1 : 0,
              }}
            >
              {/* linear overlay on hover */}
              {isHovered && (
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.linear} opacity-5`}
                />
              )}

              {/* Icon Circle */}
              <div className="relative mb-5">
                <div
                  className={`
                  ${feature.color} 
                  w-14 h-14 sm:w-16 sm:h-16 
                  rounded-full flex items-center justify-center
                  transition-transform duration-300
                  ${isHovered ? "scale-110" : "scale-100"}
                `}
                >
                  <Icon
                    className={`${feature.iconColor} w-7 h-7 sm:w-8 sm:h-8`}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                {feature.description}
              </p>

              {/* Decorative element on hover */}
              {isHovered && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-linear-to-r ${feature.linear}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import {
  UserPlus,
  Calendar,
  MessageCircle,
  Book,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function JourneyTimeline() {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Create Your account",
      description:
        "Create your account and choose from 12+ local languages for a personalized experience.",
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-500",
      dotColor: "bg-pink-400",
    },
    {
      id: 2,
      icon: Calendar,
      title: "Enter Period Info",
      description:
        "Add your cycle details for accurate tracking and personalized predictions.",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      dotColor: "bg-purple-400",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Chat with AI Guide & Recommendation",
      description:
        "Get instant answers to your questions about diet, hygiene, and emotional wellbeing.",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      dotColor: "bg-blue-400",
    },
    {
      id: 4,
      icon: Book,
      title: "Explore Education Hub",
      description:
        "Learn with videos, articles, and interactive lessons tailored to your needs.",
      color: "from-green-400 to-teal-400",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      dotColor: "bg-green-400",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Track Progress & Insights",
      description:
        "Monitor your health journey with smart analytics and personalized insights.",
      color: "from-orange-400 to-pink-400",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      dotColor: "bg-orange-400",
    },
  ];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Your Wellness Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Follow these simple steps to start your personalized health and
            wellness experience
          </p>
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-xl sm:text-2xl">🌸</span>
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Your health companion
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-200 to-orange-200 hidden md:block"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div
                    className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-white shadow-md hidden md:block z-10 ${step.dotColor}`}
                  ></div>

                  {/* Card */}
                  <div className="md:ml-20 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        {/* Icon container */}
                        <div
                          className={`shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 ${step.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
                        >
                          <Image
                            src={`/img/timeline${step.id}.png`}
                            alt={step.title}
                            width={150}
                            height={150}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <span
                              className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold shadow-sm`}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

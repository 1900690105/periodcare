import { ArrowRight, Video } from "lucide-react";
import React from "react";

function ExploreLearningModules() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Learning Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive lessons designed to answer all your questions
          </p>
        </div>

        {/* Hygiene & Care Module */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl">
              🧼
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Hygiene & Care
              </h3>
              <p className="text-gray-600">
                Essential practices for your health and comfort
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Proper Pad Usage */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect
                    x="60"
                    y="40"
                    width="80"
                    height="120"
                    rx="10"
                    fill="#BAE6FD"
                  />
                  <rect
                    x="70"
                    y="50"
                    width="60"
                    height="100"
                    rx="5"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M80 70 Q100 60, 120 70"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M80 90 Q100 80, 120 90"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M80 110 Q100 100, 120 110"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    fill="none"
                  />
                  <text x="95" y="150" fontSize="24" textAnchor="middle">
                    🧼
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  5 min
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Proper Pad Usage
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Learn the correct way to use and change menstrual pads for
                  maximum comfort and hygiene. Understand when to change and how
                  often.
                </p>
                <button className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Importance of Cleanliness */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-teal-50 to-emerald-50 p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="80" r="40" fill="#A7F3D0" />
                  <circle cx="100" cy="80" r="30" fill="#FFFFFF" />
                  <path
                    d="M85 75 L95 85 L115 65"
                    stroke="#10B981"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse
                    cx="100"
                    cy="140"
                    rx="35"
                    ry="15"
                    fill="#6EE7B7"
                    opacity="0.5"
                  />
                  <text x="70" y="175" fontSize="18">
                    🚿
                  </text>
                  <text x="110" y="175" fontSize="18">
                    💧
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  4 min
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Importance of Cleanliness
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Discover why maintaining proper hygiene during menstruation is
                  crucial for preventing infections and staying healthy.
                </p>
                <button className="w-full bg-linear-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Safe Disposal Practices */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-green-50 to-lime-50 p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect
                    x="60"
                    y="60"
                    width="80"
                    height="90"
                    rx="8"
                    fill="#BBF7D0"
                  />
                  <rect
                    x="70"
                    y="70"
                    width="60"
                    height="70"
                    rx="5"
                    fill="#FFFFFF"
                  />
                  <circle cx="100" cy="105" r="20" fill="#86EFAC" />
                  <path
                    d="M95 105 L100 110 L110 95"
                    stroke="#22C55E"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="85"
                    y="35"
                    width="30"
                    height="30"
                    rx="5"
                    fill="#4ADE80"
                  />
                  <text x="95" y="55" fontSize="16" textAnchor="middle">
                    🗑️
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Video
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Safe Disposal Practices
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Learn the environmentally friendly and hygienic ways to
                  dispose of menstrual products properly and safely.
                </p>
                <button className="w-full bg-linear-to-r from-green-500 to-lime-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
                  <Video className="w-4 h-4" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Card 4: Myths Busting */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-red-50 to-orange-50 p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="60" fill="#FECACA" />
                  <circle cx="100" cy="100" r="50" fill="#FFFFFF" />
                  <line
                    x1="75"
                    y1="75"
                    x2="125"
                    y2="125"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="125"
                    y1="75"
                    x2="75"
                    y2="125"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <text x="85" y="175" fontSize="20">
                    ❌
                  </text>
                  <text x="115" y="175" fontSize="20">
                    ✅
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Myths About Periods
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  Break free from false beliefs about washing, eating habits,
                  and activities during menstruation. Get the facts!
                </p>
                <button className="w-full bg-linear-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menstrual Cycle Module */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center text-2xl">
              🔄
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Understanding Your Cycle
              </h3>
              <p className="text-gray-600">
                Know what happens in your body each month
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cycle Phase Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-pink-50 to-rose-50 p-6 h-48 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="#FBCFE8"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="100" r="50" fill="#FFF" />
                  <text x="100" y="110" fontSize="40" textAnchor="middle">
                    🌸
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Phase 1
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Menstrual Phase
                </h4>
                <p className="text-gray-600 text-sm">
                  Day 1-5: Understanding what happens during your period and how
                  to stay comfortable.
                </p>
                <button className="w-full bg-linear-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cycle Phase Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-purple-50 to-pink-50 p-6 h-48 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="#E9D5FF"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="100" r="50" fill="#FFF" />
                  <text x="100" y="110" fontSize="40" textAnchor="middle">
                    🌱
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Phase 2
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Follicular Phase
                </h4>
                <p className="text-gray-600 text-sm">
                  Day 6-14: Energy levels rise and your body prepares for
                  ovulation.
                </p>
                <button className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cycle Phase Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="bg-linear-to-br from-amber-50 to-orange-50 p-6 h-48 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="#FED7AA"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="100" r="50" fill="#FFF" />
                  <text x="100" y="110" fontSize="40" textAnchor="middle">
                    ☀️
                  </text>
                </svg>
                <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Video
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  Ovulation Phase
                </h4>
                <p className="text-gray-600 text-sm">
                  Day 14: Peak fertility time with specific body changes to
                  notice.
                </p>
                <button className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Video className="w-4 h-4" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Health & Wellness Module */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-2xl">
              💪
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Feel your best throughout your cycle
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Wellness Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col md:flex-row">
              <div className="bg-linear-to-br from-green-50 to-emerald-50 p-6 md:w-1/3 flex items-center justify-center">
                <svg viewBox="0 0 150 150" className="w-full h-32">
                  <circle cx="75" cy="75" r="60" fill="#BBF7D0" opacity="0.5" />
                  <text x="75" y="90" fontSize="50" textAnchor="middle">
                    🥗
                  </text>
                </svg>
              </div>
              <div className="p-6 flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold text-gray-900">
                    Nutrition Guide
                  </h4>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                    New
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Discover the best foods to eat during each phase of your cycle
                  for optimal energy and wellness.
                </p>
                <button className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Wellness Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col md:flex-row">
              <div className="bg-linear-to-br from-purple-50 to-indigo-50 p-6 md:w-1/3 flex items-center justify-center">
                <svg viewBox="0 0 150 150" className="w-full h-32">
                  <circle cx="75" cy="75" r="60" fill="#DDD6FE" opacity="0.5" />
                  <text x="75" y="90" fontSize="50" textAnchor="middle">
                    🧘
                  </text>
                </svg>
              </div>
              <div className="p-6 flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold text-gray-900">
                    Exercise Tips
                  </h4>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-semibold">
                    Video
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Safe and effective exercises for each phase of your menstrual
                  cycle, from yoga to cardio.
                </p>
                <button className="bg-linear-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                  <Video className="w-4 h-4" />
                  <span>Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreLearningModules;

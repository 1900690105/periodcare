"use client";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Pause,
  Play,
  Video,
} from "lucide-react";
import { useState } from "react";
import VideoPlayer from "./YoutubeVideo";

function VisualLearningCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});

  const visualContent = [
    {
      id: 1,
      type: "infographic",
      title: "Menstrual Cycle Stages",
      description: "Understanding the 4 phases of your menstrual cycle",
      duration: "28 days cycle",
      color: "from-pink-400 to-rose-400",
      icon: "🔄",
      downloadSize: "1.2 MB",
    },
    {
      id: 2,
      type: "infographic",
      title: "Period Symptoms Guide",
      description: "Common symptoms and how to manage them",
      duration: "3:45 min",
      color: "from-purple-400 to-pink-400",
      icon: "💊",
      downloadSize: "8.5 MB",
    },
    {
      id: 3,
      type: "infographic",
      title: "Hygiene Best Practices",
      description: "Step-by-step hygiene guide for menstruation",
      duration: "Quick guide",
      color: "from-blue-400 to-cyan-400",
      icon: "🧼",
      downloadSize: "980 KB",
    },
    {
      id: 4,
      type: "infographic",
      title: "Nutrition During Periods",
      description: "What to eat and avoid during your cycle",
      duration: "4:20 min",
      color: "from-green-400 to-emerald-400",
      icon: "🥗",
      downloadSize: "9.2 MB",
    },
    {
      id: 5,
      type: "infographic",
      title: "Pain Management Tips",
      description: "Natural and medical ways to ease period pain",
      duration: "Illustrated guide",
      color: "from-red-400 to-orange-400",
      icon: "💆",
      downloadSize: "1.5 MB",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visualContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + visualContent.length) % visualContent.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = (id) => {
    setIsPlaying((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentItem = visualContent[currentSlide];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="relative">
          {/* Main Carousel Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: Visual Content */}
              <div
                className={`bg-linear-to-br ${currentItem.color} p-8 lg:p-12 flex items-center justify-center relative min-h-[250px] lg:min-h-[500px]`}
              >
                {currentItem.type === "infographic" ? (
                  // Infographic SVG
                  <div className="w-full h-full flex items-center justify-center">
                    {currentSlide === 0 && (
                      <svg
                        viewBox="0 0 300 300"
                        className="w-full h-full max-w-md"
                      >
                        <circle
                          cx="150"
                          cy="150"
                          r="120"
                          fill="white"
                          opacity="0.9"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#EC4899"
                          strokeWidth="20"
                          strokeDasharray="157 157"
                          transform="rotate(-90 150 150)"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#A855F7"
                          strokeWidth="20"
                          strokeDasharray="157 157"
                          strokeDashoffset="157"
                          transform="rotate(-90 150 150)"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="20"
                          strokeDasharray="78.5 235.5"
                          strokeDashoffset="-157"
                          transform="rotate(-90 150 150)"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="20"
                          strokeDasharray="78.5 235.5"
                          strokeDashoffset="-235.5"
                          transform="rotate(-90 150 150)"
                        />
                        <text
                          x="150"
                          y="155"
                          fontSize="24"
                          textAnchor="middle"
                          fill="#EC4899"
                          fontWeight="bold"
                        >
                          28
                        </text>
                        <text
                          x="150"
                          y="180"
                          fontSize="14"
                          textAnchor="middle"
                          fill="#666"
                        >
                          Days
                        </text>
                        <text
                          x="150"
                          y="40"
                          fontSize="16"
                          textAnchor="middle"
                          fill="#EC4899"
                        >
                          Menstrual
                        </text>
                        <text
                          x="260"
                          y="155"
                          fontSize="16"
                          textAnchor="middle"
                          fill="#A855F7"
                        >
                          Follicular
                        </text>
                        <text
                          x="150"
                          y="280"
                          fontSize="16"
                          textAnchor="middle"
                          fill="#F59E0B"
                        >
                          Ovulation
                        </text>
                        <text
                          x="40"
                          y="155"
                          fontSize="16"
                          textAnchor="middle"
                          fill="#10B981"
                        >
                          Luteal
                        </text>
                      </svg>
                    )}
                    {currentSlide === 1 && <VideoPlayer id="q-6MgBDqK9E" />}
                    {currentSlide === 2 && <VideoPlayer id="kmWbOC8Fbb0" />}
                    {currentSlide === 3 && <VideoPlayer id="E-8gvJlkY8c" />}
                    {currentSlide === 4 && <VideoPlayer id="vU3LmEc-hCI" />}
                  </div>
                ) : (
                  // Video Player
                  <div className="w-full max-w-md aspect-video bg-gray-900 rounded-2xl overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                      <div className="text-center text-white space-y-4">
                        <div className="text-6xl">{currentItem.icon}</div>
                        <p className="text-sm text-gray-300">Video Preview</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePlay(currentItem.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                      aria-label={isPlaying[currentItem.id] ? "Pause" : "Play"}
                    >
                      {isPlaying[currentItem.id] ? (
                        <Pause className="w-20 h-20 text-white group-hover:scale-110 transition-transform" />
                      ) : (
                        <Play className="w-20 h-20 text-white group-hover:scale-110 transition-transform" />
                      )}
                    </button>
                    {/* Video Progress Bar */}
                    {isPlaying[currentItem.id] && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                        <div className="h-full bg-pink-500 w-1/3"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right: Content Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-4xl">{currentItem.icon}</span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {currentItem.duration}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {currentItem.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {currentItem.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm">
                        Available in multiple languages
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm">
                        Works offline after download
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm">Expert verified content</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm">
                        Size: {currentItem.downloadSize}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {currentItem.type === "infographic" ? (
                      <>
                        <button className="flex-1 bg-linear-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2 group">
                          <Download className="w-5 h-5 group-hover:animate-bounce" />
                          <span>Download Infographic</span>
                        </button>
                        <button className="bg-pink-100 text-pink-600 py-4 px-6 rounded-xl font-semibold hover:bg-pink-200 transition-all flex items-center justify-center space-x-2">
                          <span>View Full Size</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2 group">
                          <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span>Play Lesson Video</span>
                        </button>
                        <button className="bg-purple-100 text-purple-600 py-4 px-6 rounded-xl font-semibold hover:bg-purple-200 transition-all flex items-center justify-center space-x-2">
                          <Download className="w-5 h-5" />
                          <span>Download</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center space-x-2 pt-8">
                  {visualContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? "w-8 h-2 bg-pink-500"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 hidden lg:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 hidden lg:flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-center space-x-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-gray-600 font-medium">
              {currentSlide + 1} / {visualContent.length}
            </span>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualLearningCarousel;

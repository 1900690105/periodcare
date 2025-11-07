"use client";
import React, { useState } from "react";
import {
  Heart,
  Droplet,
  Sun,
  Moon,
  Flower,
  Play,
  Clock,
  TrendingUp,
  Info,
  CheckCircle,
  X,
} from "lucide-react";
import Image from "next/image";

export default function ExercisePage() {
  const [selectedPhase, setSelectedPhase] = useState("menstrual");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const phases = [
    {
      id: "menstrual",
      name: "Menstrual Phase",
      emoji: "🩸",
      icon: Droplet,
      color: "red",
      linear: "from-red-400 to-pink-400",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      description: "Rest & Relaxation",
      detail:
        "Focus on gentle movements, restorative poses, and self-care. Listen to your body and take it easy.",
    },
    {
      id: "follicular",
      name: "Follicular Phase",
      emoji: "🌼",
      icon: Flower,
      color: "yellow",
      linear: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600",
      description: "Energy Boost",
      detail:
        "Your energy is rising! Perfect time for more intense workouts and trying new exercises.",
    },
    {
      id: "ovulation",
      name: "Ovulation Phase",
      emoji: "🌙",
      icon: Moon,
      color: "purple",
      linear: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      description: "Power & Balance",
      detail:
        "Peak energy levels! Ideal for high-intensity workouts and challenging yourself.",
    },
    {
      id: "luteal",
      name: "Luteal Phase",
      emoji: "🍂",
      icon: Sun,
      color: "orange",
      linear: "from-orange-400 to-amber-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
      description: "Cool Down & Care",
      detail:
        "Energy may dip. Focus on moderate exercise, stretching, and stress relief.",
    },
  ];

  const exercises = {
    menstrual: [
      {
        id: 1,
        name: "Gentle Yoga Flow",
        duration: "15-20 min",
        intensity: "Low",
        calories: "50-80",
        benefits: ["Reduces cramps", "Improves flexibility", "Calms mind"],
        description:
          "Slow, restorative poses focusing on hip openers and gentle stretches to ease discomfort.",
        steps: [
          "Child's pose (2 min)",
          "Cat-cow stretches (3 min)",
          "Supine twists (5 min)",
          "Savasana (5 min)",
        ],
        tips: "Use props like cushions for extra support. Breathe deeply and move slowly.",
      },
    ],
    follicular: [
      {
        id: 2,
        name: "HIIT Training",
        duration: "20-30 min",
        intensity: "High",
        calories: "200-300",
        benefits: ["Burns fat", "Builds strength", "Boosts energy"],
        description:
          "High-intensity intervals to take advantage of peak energy levels.",
        steps: [
          "Warm up (5 min)",
          "Burpees (30 sec)",
          "Mountain climbers (30 sec)",
          "Rest (30 sec)",
          "Repeat 8 times",
        ],
        tips: "Stay hydrated and take breaks when needed.",
      },
    ],
    ovulation: [
      {
        id: 3,
        name: "Power Yoga",
        duration: "45-60 min",
        intensity: "High",
        calories: "300-450",
        benefits: ["Builds strength", "Improves balance", "Mental focus"],
        description: "Dynamic yoga sequences with challenging poses.",
        steps: [
          "Sun salutations",
          "Warrior sequences",
          "Balancing poses",
          "Core work",
        ],
        tips: "Challenge yourself but respect your limits.",
      },
    ],
    luteal: [
      {
        id: 4,
        name: "Pilates",
        duration: "30-45 min",
        intensity: "Medium",
        calories: "150-250",
        benefits: ["Core strength", "Flexibility", "Posture"],
        description: "Controlled movements focusing on core and stability.",
        steps: [
          "Breathing exercises",
          "Core work",
          "Leg circles",
          "Stretching",
        ],
        tips: "Engage your core throughout every movement.",
      },
    ],
  };

  const currentPhase = phases.find((p) => p.id === selectedPhase);
  const currentExercises = exercises[selectedPhase];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-70 rounded-full mb-4">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-sm text-gray-700">
                  Personalized for Your Cycle
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Move with <span className="text-pink-500">Comfort</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
                Exercise for Every Phase of Your Cycle
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gentle, empowering, and balanced workouts designed to support
                your body through every stage of your menstrual health.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("exercises")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Exercises
              </button>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute h-[350px] w-[350px] inset-0 bg-linear-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src={"/exercises/hero2.png"}
                  alt="hero"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Filter Section */}
      <section
        id="exercises"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Phase Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Choose Your <span className="text-pink-500">Cycle Phase</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`relative p-6 rounded-2xl border-3 transition-all transform hover:scale-105 ${
                    selectedPhase === phase.id
                      ? `${phase.bgColor} ${phase.borderColor} border-3 shadow-lg`
                      : "bg-white border-gray-200 border-2 hover:border-gray-300"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${phase.linear} rounded-full flex items-center justify-center mb-3 shadow-md`}
                    >
                      <span className="text-3xl">{phase.emoji}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {phase.name}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        selectedPhase === phase.id
                          ? phase.textColor
                          : "text-gray-500"
                      }`}
                    >
                      {phase.description}
                    </p>
                  </div>

                  {selectedPhase === phase.id && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle className={`w-6 h-6 ${phase.textColor}`} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Phase Description Card */}
          <div
            className={`mt-6 p-6 rounded-2xl border-2 ${currentPhase.bgColor} ${currentPhase.borderColor}`}
          >
            <div className="flex items-start space-x-4">
              <Info
                className={`w-6 h-6 ${currentPhase.textColor} shrink-0 mt-1`}
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  About {currentPhase.name}
                </h3>
                <p className="text-gray-600">{currentPhase.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className={`bg-linear-to-br ${currentPhase.linear} p-6 text-white`}
              >
                <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{exercise.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{exercise.intensity}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {exercise.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exercise.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 ${currentPhase.bgColor} ${currentPhase.textColor} rounded-full font-medium`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-600">Calories Burned:</span>
                  <span className="font-bold text-gray-800">
                    {exercise.calories} kcal
                  </span>
                </div>

                {/* Start Button */}
                <button
                  onClick={() => setSelectedExercise(exercise)}
                  className={`w-full py-3 bg-linear-to-r ${currentPhase.linear} text-white rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center space-x-2`}
                >
                  <Play className="w-5 h-5" />
                  <span>Start Exercise</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div
              className={`sticky top-0 bg-linear-to-r ${currentPhase.linear} px-6 py-4 flex items-center justify-between rounded-t-3xl`}
            >
              <h3 className="text-2xl font-bold text-white">
                {selectedExercise.name}
              </h3>
              <button
                onClick={() => setSelectedExercise(null)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Exercise Info */}
              <div className="grid grid-cols-3 gap-4">
                <div
                  className={`p-4 ${currentPhase.bgColor} rounded-xl text-center`}
                >
                  <Clock
                    className={`w-6 h-6 ${currentPhase.textColor} mx-auto mb-2`}
                  />
                  <p className="text-xs text-gray-600">Duration</p>
                  <p className="font-bold text-gray-800">
                    {selectedExercise.duration}
                  </p>
                </div>
                <div
                  className={`p-4 ${currentPhase.bgColor} rounded-xl text-center`}
                >
                  <TrendingUp
                    className={`w-6 h-6 ${currentPhase.textColor} mx-auto mb-2`}
                  />
                  <p className="text-xs text-gray-600">Intensity</p>
                  <p className="font-bold text-gray-800">
                    {selectedExercise.intensity}
                  </p>
                </div>
                <div
                  className={`p-4 ${currentPhase.bgColor} rounded-xl text-center`}
                >
                  <Heart
                    className={`w-6 h-6 ${currentPhase.textColor} mx-auto mb-2`}
                  />
                  <p className="text-xs text-gray-600">Calories</p>
                  <p className="font-bold text-gray-800">
                    {selectedExercise.calories}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={`/exercises/ex${selectedExercise.id}.png`}
                  alt="Exercise"
                  height={200}
                  width={400}
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Description</h4>
                <p className="text-gray-600">{selectedExercise.description}</p>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Exercise Steps</h4>
                <div className="space-y-2">
                  {selectedExercise.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className={`w-6 h-6 bg-linear-to-br ${currentPhase.linear} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div
                className={`p-4 ${currentPhase.bgColor} border-2 ${currentPhase.borderColor} rounded-xl`}
              >
                <h4 className="font-bold text-gray-800 mb-2 flex items-center space-x-2">
                  <Info className={`w-5 h-5 ${currentPhase.textColor}`} />
                  <span>Pro Tips</span>
                </h4>
                <p className="text-gray-600 text-sm">{selectedExercise.tips}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                  Close
                </button>
                <button
                  className={`flex-1 px-6 py-3 bg-linear-to-r ${currentPhase.linear} text-white rounded-xl font-semibold hover:shadow-lg transition`}
                >
                  Begin Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

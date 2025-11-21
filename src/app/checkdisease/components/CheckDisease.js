"use client";
import React, { useEffect, useState } from "react";
import {
  ClipboardCheck,
  AlertCircle,
  CheckCircle,
  Heart,
  ArrowRight,
  ArrowLeft,
  Globe,
  Info,
  Phone,
  Home,
  AlertTriangle,
  Sparkles,
  X,
  TrendingUp,
} from "lucide-react";

import DiseaseResult from "./DiseaseResult";
import { Diseases, Translations } from "@/app/data";
import { useSearchParams } from "next/navigation";

export default function HealthChecker() {
  const params = useSearchParams();
  const lan = params.get("lang");
  const [language, setLanguage] = useState(lan || "en");
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const [selectedDisease, setSelectedDisease] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const diseases = Diseases;

  const handleNext = () => {
    if (!selectedDisease) return;

    const selectedObj = diseases.find((d) => d.id === selectedDisease);
    if (!selectedObj) return;

    if (currentQuestion < selectedObj.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const translations = Translations;

  const t = translations[language];

  const getRiskLevel = (score) => {
    if (score <= 6) return "low";
    if (score <= 12) return "medium";
    return "high";
  };

  const handleAnswerSelect = (score) => {
    setAnswers({ ...answers, [currentQuestion]: score });
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((sum, score) => sum + score, 0);
    setTotalScore(total);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedDisease(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTotalScore(0);
  };

  const selectedDiseaseData = diseases.find((d) => d.id === selectedDisease);
  const currentQuestionData = selectedDiseaseData?.questions[currentQuestion];
  const riskLevel = getRiskLevel(totalScore);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <ClipboardCheck className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Free Health Screening
            </span>
          </div>
          <h1
            suppressHydrationWarning
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t?.title}
          </h1>
          <p suppressHydrationWarning className="text-xl text-white/90">
            {t?.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Language Selection */}
        {!selectedDisease && !showResult && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-purple-600" />
              <h2
                suppressHydrationWarning
                className="text-2xl font-bold text-gray-900"
              >
                {t?.selectLanguage}
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["en", "hi", "mr"].map((lang) => (
                <button
                  suppressHydrationWarning
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    language === lang
                      ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {lang === "en"
                    ? "English"
                    : lang === "hi"
                    ? "हिंदी"
                    : "मराठी"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Condition Selection */}
        {!selectedDisease && !showResult && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h2
              suppressHydrationWarning
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              {t?.selectCondition}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {diseases.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease.id)}
                  className="group bg-white border-2 border-gray-200 hover:border-purple-400 rounded-2xl p-6 transition-all hover:shadow-xl transform hover:-translate-y-1 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${disease.color} rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {disease?.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        suppressHydrationWarning
                        className="text-xl font-bold text-gray-900 mb-2"
                      >
                        {disease?.name[language]}
                      </h3>
                      <p
                        suppressHydrationWarning
                        className="text-sm text-gray-600"
                      >
                        5 {t?.question}s • 2 min
                      </p>
                      <div className="mt-3 flex items-center space-x-2 text-purple-600 font-semibold">
                        <span suppressHydrationWarning>{t?.startTest}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question Screen */}
        {selectedDisease && !showResult && currentQuestionData && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600">
                  {t?.question} {currentQuestion + 1} {t.of}{" "}
                  {selectedDiseaseData?.questions?.length}
                </span>
                <span className="text-sm font-semibold text-purple-600">
                  {Math.round(
                    ((currentQuestion + 1) /
                      selectedDiseaseData?.questions?.length) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-500 rounded-full"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        selectedDiseaseData?.questions?.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <div
                className={`inline-flex items-center space-x-2 bg-linear-to-r ${selectedDiseaseData.color} px-4 py-2 rounded-full mb-6`}
              >
                <span className="text-2xl">{selectedDiseaseData.icon}</span>
                <span className="text-white font-semibold">
                  {selectedDiseaseData.name[language]}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {currentQuestionData.question[language]}
              </h3>

              <div className="space-y-4">
                {currentQuestionData.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion] === option.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option.score)}
                      className={`w-full p-5 rounded-xl text-left transition-all transform ${
                        isSelected
                          ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            isSelected
                              ? "bg-white text-purple-600"
                              : "bg-gray-300 text-gray-700"
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-medium">
                          {option.text[language]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>{t.backToSelection}</span>
                </button>

                {currentQuestion < selectedDiseaseData.questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === undefined}
                    className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{t.next}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answers[currentQuestion] === undefined}
                    className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{t.submit}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {showResult && selectedDiseaseData && (
          <DiseaseResult
            riskLevel={riskLevel}
            t={t}
            selectedDiseaseData={selectedDiseaseData}
            handleReset={handleReset}
            totalScore={totalScore}
            language={language}
          />
        )}
      </div>
    </div>
  );
}

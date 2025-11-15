import {
  AlertTriangle,
  ArrowLeft,
  Heart,
  Home,
  Info,
  Phone,
} from "lucide-react";
import React from "react";

function DiseaseResult({
  riskLevel,
  t,
  selectedDiseaseData,
  handleReset,
  totalScore,
  language,
}) {
  return (
    <>
      <div className="space-y-6">
        {/* Result Card */}
        <div
          className={`bg-linear-to-br ${
            riskLevel === "low"
              ? "from-green-400 to-emerald-400"
              : riskLevel === "medium"
              ? "from-yellow-400 to-orange-400"
              : "from-red-400 to-pink-400"
          } rounded-3xl shadow-2xl p-8 text-white`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">
              {riskLevel === "low"
                ? "✅"
                : riskLevel === "medium"
                ? "⚠️"
                : "🚨"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.yourResult}
            </h2>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
              <span className="text-xl font-semibold">
                {t.riskLevel}:{" "}
                {riskLevel === "low"
                  ? t.lowRisk
                  : riskLevel === "medium"
                  ? t.mediumRisk
                  : t.highRisk}
              </span>
            </div>
            <p className="text-2xl mb-2">
              {t.score}: {totalScore}/20
            </p>
            <p className="text-lg opacity-90">
              {selectedDiseaseData.riskLevels[riskLevel][language]}
            </p>
          </div>
        </div>

        {/* Detailed Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Consultation */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">
                {t.consultation}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>If symptoms persist for more than 3 months</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Pain interferes with daily activities</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Over-the-counter medications don&rsquo;t help</span>
              </li>
            </ul>
          </div>

          {/* Home Remedies */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Home className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">
                {t.homeRemedies}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Apply heat pad on lower abdomen</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Practice gentle yoga and stretching</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Stay hydrated and avoid caffeine</span>
              </li>
            </ul>
          </div>

          {/* Pain Relief */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-900">
                {t.painRelief}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Take prescribed pain medication</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Rest in comfortable position</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Try deep breathing exercises</span>
              </li>
            </ul>
          </div>

          {/* Emergency Symptoms */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">
                {t.emergencySymptoms}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Sudden severe pain</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Heavy bleeding (soaking pad every hour)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>High fever with chills</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleReset}
            className="flex-1 bg-white border-2 border-purple-300 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.takeAnother}</span>
          </button>
          <button className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>{t.consultDoctor}</span>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-2">Important Disclaimer</p>
              <p>
                This is a screening tool and not a medical diagnosis. Results
                are based on self-reported symptoms. Always consult a qualified
                healthcare professional for proper diagnosis and treatment. If
                you&#39;re experiencing severe symptoms, seek immediate medical
                attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiseaseResult;

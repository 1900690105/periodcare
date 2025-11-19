"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  Target,
  Lightbulb,
  Calendar,
  CheckCircle,
  ChevronRight,
  X,
} from "lucide-react";

const HygieneCare = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [expandedSection, setExpandedSection] = useState(0);

  const chapters = [
    {
      id: "proper_pad_usage",
      title: "Proper Pad Usage",
      category: "Hygiene & Care",
      time: "5 min",
      object:
        "To teach users the correct, safe, and hygienic way to use menstrual pads.",
      what: "Understanding what a pad is, how to wear it, when to change it, and why proper usage prevents infections.",
      when: "Used during menstrual bleeding, especially when flow begins, throughout the day, and before sleeping.",
      how: "By following step-by-step pad placement, frequent changing, and good hygiene practices.",
      videoen: "https://www.youtube.com/embed/UoVoUaEySfQ?si=eFXTGxcVAJeUQmLB",
      content: {
        sections: [
          {
            heading: "What is a Menstrual Pad?",
            points: [
              "An absorbent product worn inside underwear to collect menstrual blood.",
              "Available in various sizes, materials, and absorbency levels.",
            ],
          },
          {
            heading: "How to Use a Pad Correctly",
            steps: [
              "Wash hands properly before opening the pad.",
              "Peel off the adhesive strip from the back.",
              "Place the pad at the center of the underwear.",
              "Fold and secure wings (if available).",
              "Adjust to avoid leakage and discomfort.",
            ],
          },
          {
            heading: "How Often to Change",
            points: [
              "Change every 4–6 hours.",
              "During heavy flow, change every 2–3 hours.",
              "Never use a pad longer than 8 hours.",
            ],
          },
          {
            heading: "Why Proper Usage Matters",
            points: [
              "Prevents bacterial growth and infections.",
              "Avoids rashes, itching, and bad odor.",
              "Keeps you comfortable and confident.",
            ],
          },
        ],
      },
    },
    {
      id: "importance_of_cleanliness",
      title: "Importance of Cleanliness",
      category: "Hygiene & Care",
      time: "4 min",
      object:
        "To educate users on why menstrual hygiene is essential for health and comfort.",
      what: "Cleansing practices, daily habits, pad hygiene rules, and mistakes to avoid during menstruation.",
      when: "Important before, during, and after the menstrual period.",
      how: "By maintaining daily hygiene, washing properly, and following safe practices.",
      videoen: "https://www.youtube.com/embed/kmWbOC8Fbb0?si=2AJ8WsoPE18UlB5I",
      content: {
        sections: [
          {
            heading: "Why Cleanliness Matters",
            points: [
              "Menstrual blood is not dirty, but poor hygiene can cause bacterial infections.",
              "Helps prevent irritation, odor, rashes, and discomfort.",
            ],
          },
          {
            heading: "Daily Hygiene Checklist",
            points: [
              "Take a bath or at least wash the genital area daily.",
              "Wear clean, breathable cotton underwear.",
              "Use gentle soap only externally.",
            ],
          },
          {
            heading: "Pad Hygiene Tips",
            points: [
              "Wash hands before and after changing pads.",
              "Carry spare pads when outside.",
              "Ensure pads are stored in clean, dry areas.",
            ],
          },
          {
            heading: "Common Mistakes to Avoid",
            points: [
              "Using unwashed or damp cloth pads.",
              "Applying perfume or talcum powder near the vagina.",
              "Wearing the same underwear for many hours.",
            ],
          },
        ],
      },
    },
    {
      id: "safe_disposal_practices",
      title: "Safe Disposal Practices",

      category: "Hygiene & Care",
      time: "3 min",
      object:
        "To ensure users dispose sanitary products safely, hygienically, and in eco-friendly ways.",
      what: "Learning proper disposal steps, environmental impact, and mistakes to avoid.",
      when: "After every pad change, especially when in public places or shared spaces.",
      how: "Through careful wrapping, sealing, and discarding in sanitary waste bins.",
      videoen: "https://www.youtube.com/embed/j363VU361xY?si=GYpDzwJmUbsZr5j7",
      content: {
        sections: [
          {
            heading: "Why Proper Disposal is Important",
            points: [
              "Reduces smell and infection risk.",
              "Protects sanitation workers.",
              "Prevents environmental damage.",
            ],
          },
          {
            heading: "How to Dispose a Used Pad",
            steps: [
              "Wrap the used pad tightly in its wrapper or newspaper.",
              "Seal properly so blood is not exposed.",
              "Throw it only in sanitary waste bins.",
            ],
          },
          {
            heading: "Avoid These Mistakes",
            points: [
              "Do NOT flush pads — they block drainage.",
              "Avoid throwing pads openly outside.",
              "Do not leave used pads unwrapped.",
            ],
          },
        ],
      },
    },
    {
      id: "myths_about_periods",
      title: "Myths About Periods",
      category: "Hygiene & Care",
      badge: "Popular",
      time: "6 min",
      object:
        "To debunk false beliefs that restrict girls and create fear or shame around periods.",
      what: "Understanding the difference between cultural myths and scientific facts.",
      when: "Important during puberty education or anytime misinformation is present.",
      how: "By comparing each myth with real scientific truth in simple language.",
      videoen: "https://www.youtube.com/embed/SSt9fnEgmFM?si=rbG8BXmOCZ5wJn4p",
      content: {
        sections: [
          {
            heading: "Girls shouldn't wash hair during periods",
            points: [
              "Myth: Washing hair during periods is harmful.",
              "Fact: Bathing improves hygiene and reduces cramps.",
              "Scientific Reason: Warm water relaxes muscles and prevents infection.",
            ],
          },
          {
            heading: "Periods make girls impure",
            points: [
              "Myth: Menstruation makes you impure or dirty.",
              "Fact: Menstruation is a healthy biological process.",
              "Scientific Reason: The uterus simply sheds its lining—nothing impure.",
            ],
          },
          {
            heading: "You should not exercise on your period",
            points: [
              "Myth: Exercise during periods is dangerous.",
              "Fact: Light exercise reduces pain and improves mood.",
              "Scientific Reason: Physical movement releases endorphins, natural painkillers.",
            ],
          },
          {
            heading: "Girls shouldn't enter the temple or kitchen",
            points: [
              "Myth: Menstruating girls should avoid religious or cooking spaces.",
              "Fact: This is cultural, not medical or scientific.",
              "Scientific Reason: Periods do not affect hygiene or food quality in any scientific way.",
            ],
          },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Period Care Learning Hub
          </h1>
          <p className="text-gray-600 text-lg">
            Empower yourself with knowledge about menstrual health
          </p>
        </div>

        {/* Chapter Cards Grid */}
        {!selectedChapter && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-linear-to-r from-pink-400 to-purple-500 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{chapter.title}</h3>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                    {chapter.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock size={18} />
                    <span className="text-sm font-medium">
                      {chapter.time} read
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target
                        size={20}
                        className="text-pink-500 shrink-0 mt-1"
                      />
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {chapter.object}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Lightbulb
                        size={20}
                        className="text-purple-500 shrink-0 mt-1"
                      />
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {chapter.what}
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                    Start Learning
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Chapter Detail View */}
        {selectedChapter && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-linear-to-r from-pink-400 to-purple-500 p-8 text-white relative">
              <button
                onClick={() => {
                  setSelectedChapter(null);
                  setExpandedSection(0);
                }}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold mb-3">
                  {selectedChapter.title}
                </h2>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                    {selectedChapter.category}
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Clock size={16} />
                    {selectedChapter.time}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-pink-50 border-b border-pink-100">
              <div className="flex justify-center mb-5">
                <iframe
                  width="560"
                  height="315"
                  src={`${selectedChapter.videoen}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Learning Objectives */}
              <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Target size={24} className="text-pink-500" />
                    <h4 className="font-bold text-gray-800">Objective</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    {selectedChapter.object}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb size={24} className="text-purple-500" />
                    <h4 className="font-bold text-gray-800">
                      What You&#39;ll Learn
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    {selectedChapter.what}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={24} className="text-blue-500" />
                    <h4 className="font-bold text-gray-800">When to Apply</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    {selectedChapter.when}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8">
              <div className="max-w-4xl mx-auto space-y-4">
                {selectedChapter?.content?.sections?.map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === index ? -1 : index
                        )
                      }
                      className="w-full p-6 flex items-center justify-between bg-linear-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 text-left">
                          {section.heading}
                        </h3>
                      </div>
                      <ChevronRight
                        size={24}
                        className={`text-gray-400 transition-transform ${
                          expandedSection === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedSection === index && (
                      <div className="p-6 bg-white">
                        <ul className="space-y-3">
                          {(section.points || section.steps)?.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 group"
                            >
                              <CheckCircle
                                size={20}
                                className="text-green-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                              />
                              <span className="text-gray-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Completion Button */}
              <div className="max-w-4xl mx-auto mt-8">
                <button className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all">
                  <CheckCircle size={24} />
                  Mark as Complete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HygieneCare;

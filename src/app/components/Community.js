import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function PeriodCareCommunity({ language, setLanguage }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    en: {
      heading: "Together, We Normalize Conversations Around Menstruation.",
      subheading:
        "Real stories from real people building a supportive community",
      cta1: "Join Our Community",
      cta2: "Share Your Story",
      perspectives: {
        parent: "Parent",
        educator: "Educator",
        student: "Student",
      },
    },
    hi: {
      heading:
        "साथ मिलकर, हम मासिक धर्म के बारे में बातचीत को सामान्य बनाते हैं।",
      subheading:
        "एक सहायक समुदाय बनाने वाले वास्तविक लोगों की वास्तविक कहानियां",
      cta1: "हमारे समुदाय में शामिल हों",
      cta2: "अपनी कहानी साझा करें",
      perspectives: {
        parent: "माता-पिता",
        educator: "शिक्षक",
        student: "छात्र",
      },
    },
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      image: "👩‍👧",
      quote:
        "PeriodCare helped me have open conversations with my daughter. The resources are compassionate and easy to understand.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "Anjali Verma",
      role: "Educator",
      image: "👩‍🏫",
      quote:
        "As a teacher, I now have the tools to educate students with sensitivity. This platform is transforming how we approach menstrual health.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      name: "Riya Patel",
      role: "Student",
      image: "👧",
      quote:
        "I used to feel embarrassed, but now I understand my body better. The AI assistant answered all my questions without judgment.",
      color: "bg-coral-50 border-rose-200",
    },
    {
      name: "Meera Kapoor",
      role: "Parent",
      image: "👩‍👧‍👦",
      quote:
        "The community support made all the difference. I'm no longer afraid to discuss periods with my children.",
      color: "bg-pink-50 border-pink-200",
    },
  ];

  const perspectiveCards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: content[language].perspectives.parent,
      description:
        "Empowering parents to support their children through every stage of menstrual health with confidence and care.",
      color: "from-pink-100 to-pink-50",
      iconBg: "bg-pink-100 text-pink-600",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: content[language].perspectives.educator,
      description:
        "Equipping educators with comprehensive resources to teach menstrual health with sensitivity and accuracy.",
      color: "from-purple-100 to-purple-50",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: content[language].perspectives.student,
      description:
        "Creating a safe space for students to learn, ask questions, and understand their bodies without shame.",
      color: "from-rose-100 to-rose-50",
      iconBg: "bg-rose-100 text-rose-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className=" font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-pink-600" />
            <span className="text-pink-600 font-medium text-sm">
              Community Stories
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {content[language].heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subheading}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div
              className={`${testimonials[currentTestimonial].color} border-2 rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-500`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-7xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                    &#34;{testimonials[currentTestimonial].quote}&#34;
                  </p>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-pink-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-pink-50 transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-pink-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-pink-50 transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-pink-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "w-8 bg-pink-500"
                      : "w-2 bg-pink-200 hover:bg-pink-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Perspective Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {perspectiveCards.map((card, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${card.color} rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`${card.iconBg} rounded-2xl p-4 inline-flex mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 text-lg">
            <Users className="w-5 h-5" />
            {content[language].cta1}
          </button>
          <button className="bg-white hover:bg-pink-50 text-pink-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-pink-200 flex items-center gap-2 text-lg">
            <Heart className="w-5 h-5" />
            {content[language].cta2}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
        <div className="fixed bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  );
}

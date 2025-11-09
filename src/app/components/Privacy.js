import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Database,
  CheckCircle,
  FileCheck,
} from "lucide-react";

export default function PrivacySecurity({ language }) {
  const content = {
    en: {
      badge: "Privacy First",
      heading: "Your Privacy. Our Promise.",
      subheading:
        "We protect your personal information with the highest standards of security and confidentiality",
      features: [
        {
          title: "No Personal Identity Tracking",
          description:
            "We never track or store your personal identity. Your menstrual health journey remains completely anonymous and private.",
        },
        {
          title: "Anonymous Data Use",
          description:
            "Any data collected is fully anonymized and used only to improve our services. Your individual information is never shared or sold.",
        },
        {
          title: "Encrypted Cloud Storage",
          description:
            "All your data is protected with military-grade encryption both in transit and at rest, ensuring maximum security.",
        },
      ],
      cta: "Read Full Privacy Policy",
      trustBadges: {
        gdpr: "GDPR Compliant",
        hipaa: "HIPAA Standards",
        ssl: "256-bit SSL",
      },
    },
    hi: {
      badge: "गोपनीयता प्रथम",
      heading: "आपकी गोपनीयता। हमारा वादा।",
      subheading:
        "हम सुरक्षा और गोपनीयता के उच्चतम मानकों के साथ आपकी व्यक्तिगत जानकारी की रक्षा करते हैं",
      features: [
        {
          title: "कोई व्यक्तिगत पहचान ट्रैकिंग नहीं",
          description:
            "हम कभी भी आपकी व्यक्तिगत पहचान को ट्रैक या स्टोर नहीं करते हैं। आपकी मासिक स्वास्थ्य यात्रा पूरी तरह से गुमनाम और निजी रहती है।",
        },
        {
          title: "गुमनाम डेटा उपयोग",
          description:
            "एकत्र किया गया कोई भी डेटा पूरी तरह से गुमनाम है और केवल हमारी सेवाओं को बेहतर बनाने के लिए उपयोग किया जाता है।",
        },
        {
          title: "एन्क्रिप्टेड क्लाउड स्टोरेज",
          description:
            "आपका सभी डेटा सैन्य-ग्रेड एन्क्रिप्शन के साथ सुरक्षित है, जो अधिकतम सुरक्षा सुनिश्चित करता है।",
        },
      ],
      cta: "पूर्ण गोपनीयता नीति पढ़ें",
      trustBadges: {
        gdpr: "GDPR अनुपालन",
        hipaa: "HIPAA मानक",
        ssl: "256-बिट SSL",
      },
    },
    mr: {
      badge: "गोपनीयता प्रथम",
      heading: "तुमची गोपनीयता. आमचं वचन.",
      subheading:
        "आम्ही तुमची वैयक्तिक माहिती सर्वोच्च सुरक्षेच्या आणि गोपनीयतेच्या मानकांनुसार संरक्षित करतो.",
      features: [
        {
          title: "वैयक्तिक ओळख ट्रॅकिंग नाही",
          description:
            "आम्ही कधीही तुमची वैयक्तिक ओळख ट्रॅक किंवा संग्रहित करत नाही. तुमचा मासिक पाळी आरोग्य प्रवास पूर्णपणे गुप्त आणि खाजगी राहतो.",
        },
        {
          title: "अज्ञात डेटाचा वापर",
          description:
            "संकलित केलेला कोणताही डेटा पूर्णपणे अज्ञात ठेवला जातो आणि फक्त आमच्या सेवांचा दर्जा सुधारण्यासाठी वापरला जातो. तुमची वैयक्तिक माहिती कधीही शेअर किंवा विकली जात नाही.",
        },
        {
          title: "एनक्रिप्टेड क्लाउड स्टोरेज",
          description:
            "तुमचा सर्व डेटा सैनिकी दर्जाच्या एनक्रिप्शनसह सुरक्षित आहे, प्रवासात आणि संचयनात दोन्ही ठिकाणी, जे उच्चतम सुरक्षा सुनिश्चित करते.",
        },
      ],
      cta: "पूर्ण गोपनीयता धोरण वाचा",
      trustBadges: {
        gdpr: "GDPR अनुरूप",
        hipaa: "HIPAA मानके",
        ssl: "256-बिट SSL",
      },
    },
  };

  const icons = [
    { icon: <EyeOff className="w-8 h-8" />, color: "text-pink-600" },
    { icon: <Lock className="w-8 h-8" />, color: "text-purple-600" },
    { icon: <Database className="w-8 h-8" />, color: "text-rose-600" },
  ];

  return (
    <div className=" font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-600 font-medium text-sm">
              {content[language].badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {content[language].heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Illustration */}
          <div className="relative">
            <div className="bg-linear-to-br from-pink-100 to-purple-100 rounded-3xl p-12 shadow-xl">
              {/* Central Shield */}
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-linear-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                  <Shield
                    className="w-32 h-32 text-pink-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div
                className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-lg animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <Lock className="w-8 h-8 text-purple-500" />
              </div>
              <div
                className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                <Eye className="w-8 h-8 text-pink-500" />
              </div>
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-lg animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3s" }}
              >
                <Database className="w-8 h-8 text-indigo-500" />
              </div>

              {/* Data Stream Lines */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-pink-300 to-transparent animate-pulse"></div>
                <div
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-300 to-transparent animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-3/4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-indigo-300 to-transparent animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            {content[language].features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${icons[index].color} bg-linear-to-br from-pink-50 to-purple-50 rounded-xl p-3 shrink-0`}
                  >
                    {icons[index].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {feature.title}
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed top-32 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="fixed bottom-32 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
}

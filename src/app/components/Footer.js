"use client";
import React, { useState } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Globe,
  ChevronRight,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";

export default function PeriodCareFooter({ language, setLanguage }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  const content = {
    en: {
      about: {
        title: "About PeriodCare",
        description:
          "PeriodCare is an AI-driven menstrual health awareness platform that provides personalized guidance, educational resources, and emotional support to help women understand their bodies and break menstrual taboos — even in low-connectivity areas.",
        tagline: "Empowering Every Woman, Everywhere.",
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          "Home",
          "Features",
          "Learn",
          "Chatbot",
          "Community",
          "Contact Us",
        ],
      },
      support: {
        title: "Support & Policies",
        links: [
          "Privacy Policy",
          "Terms of Service",
          "FAQs",
          "Accessibility Help",
          "Language Options",
        ],
      },
      social: {
        title: "Social & Contact",
        follow: "Follow Us",
        contact: "Contact",
        email: "support@periodcare.org",
        location: "Nagpur, India",
      },
      footer: {
        copyright: "© 2025 PeriodCare. Made with",
        team: "by Team Gcoey.",
        tagline: "Empowering Menstrual Health through AI & Awareness.",
      },
    },
    hi: {
      about: {
        title: "PeriodCare के बारे में",
        description:
          "PeriodCare एक AI-संचालित मासिक स्वास्थ्य जागरूकता मंच है जो व्यक्तिगत मार्गदर्शन, शैक्षिक संसाधन और भावनात्मक समर्थन प्रदान करता है ताकि महिलाओं को अपने शरीर को समझने और मासिक धर्म की वर्जनाओं को तोड़ने में मदद मिल सके।",
        tagline: "हर महिला को सशक्त बनाना, हर जगह।",
      },
      quickLinks: {
        title: "त्वरित लिंक",
        links: ["होम", "विशेषताएं", "सीखें", "चैटबॉट", "समुदाय", "संपर्क करें"],
      },
      support: {
        title: "सहायता और नीतियां",
        links: [
          "गोपनीयता नीति",
          "सेवा की शर्तें",
          "अक्सर पूछे जाने वाले प्रश्न",
          "पहुंच सहायता",
          "भाषा विकल्प",
        ],
      },
      social: {
        title: "सोशल और संपर्क",
        follow: "हमें फॉलो करें",
        contact: "संपर्क",
        email: "support@periodcare.org",
        location: "नागपुर, भारत",
      },
      footer: {
        copyright: "© 2025 PeriodCare. बनाया गया",
        team: "टीम Gcoey द्वारा।",
        tagline: "AI और जागरूकता के माध्यम से मासिक स्वास्थ्य को सशक्त बनाना।",
      },
    },
  };

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      color: "hover:text-pink-500",
      link: "https://youtu.be/nofxiiMEqeM?si=FQOUoxFGDIvCQ-LI",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      color: "hover:text-blue-600",
      link: "https://youtu.be/nofxiiMEqeM?si=FQOUoxFGDIvCQ-LI",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      color: "hover:text-sky-500",
      link: "https://youtu.be/nofxiiMEqeM?si=FQOUoxFGDIvCQ-LI",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      color: "hover:text-red-600",
      link: "https://youtu.be/nofxiiMEqeM?si=FQOUoxFGDIvCQ-LI",
    },
  ];

  return (
    <footer className="bg-linear-to-br from-pink-50 via-purple-50 to-indigo-50 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-linear-to-br from-pink-500 to-purple-500 rounded-2xl p-3">
                <Heart className="w-7 h-7 text-white" fill="white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">PeriodCare</h2>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {content[language].about.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {content[language].about.description}
            </p>
            <div className="bg-linear-to-r from-pink-100 to-purple-100 rounded-xl p-3 inline-block">
              <p className="text-sm font-semibold text-pink-700">
                {content[language].about.tagline}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-pink-500" />
              {content[language].quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {content[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={"#"}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-600 hover:text-pink-600 transition-all duration-300 inline-block group"
                  >
                    <span
                      className={`${
                        hoveredLink === `quick-${index}`
                          ? "border-b-2 border-pink-500"
                          : ""
                      }`}
                    >
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Policies */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-500" />
              {content[language].support.title}
            </h3>
            <ul className="space-y-3">
              {content[language].support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredLink(`support-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-600 hover:text-purple-600 transition-all duration-300 inline-block group"
                  >
                    <span
                      className={`${
                        hoveredLink === `support-${index}`
                          ? "border-b-2 border-purple-500"
                          : ""
                      }`}
                    >
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {content[language].social.title}
            </h3>

            {/* Social Media */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                {content[language].social.follow}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={`${social.link}-${index}`}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 ${social.color}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                {content[language].social.contact}
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@periodcare.org"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">
                    {content[language].social.email}
                  </span>
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {content[language].social.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="mt-6">
              <div className="bg-white rounded-full shadow-md px-3 py-2 flex gap-2 inline-flex">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === "en"
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-pink-100"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === "hi"
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-pink-100"
                  }`}
                >
                  हिं
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 mb-6"></div>

        {/* Bottom Bar */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600 mb-2">
            <p className="text-sm flex items-center gap-1">
              {content[language].footer.copyright}
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline animate-pulse" />
              {content[language].footer.team}
            </p>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {content[language].footer.tagline}
          </p>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="h-2 bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400"></div>
    </footer>
  );
}

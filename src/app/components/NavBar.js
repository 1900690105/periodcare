"use client";
import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

function NavBar({ setLanguage, language }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // For mobile and desktop submenu
  const navRef = useRef();

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "mr", label: "मराठी" },
  ];

  const translations = {
    en: {
      education: "Education",
      community: "Community",
      donatepad: "DonatePad",
      doctor: "Doctor",
      signIn: "Sign In",
      checkdisease: "Checkdisease",
    },
    hi: {
      education: "शिक्षा",
      community: "समुदाय",
      donatepad: "पैड दान करें",
      doctor: "डॉक्टर",
      signIn: "साइन इन करें",
      checkdisease: "बीमारी जांच",
    },
    mr: {
      education: "शिक्षण",
      community: "समुदाय",
      donatepad: "पॅड दान करा",
      doctor: "डॉक्टर",
      signIn: "साइन इन करा",
      checkdisease: "आजार तपासणी",
    },
  };

  const t = translations[language] || translations.en;

  const subMenus = {
    education: [
      { name: "Learn", path: `/learn?lang=${language || "en"}` },
      { name: "Cycle", path: `/learn/cycle?lang=${language || "en"}` },
      {
        name: "FirstPeriod",
        path: `/learn/firstperiod?lang=${language || "en"}`,
      },
      { name: "Hygiene", path: `/learn/hygienecare?lang=${language || "en"}` },
      {
        name: "NutritionTracker",
        path: `/learn/nutritiontracker?lang=${language || "en"}`,
      },
    ],
    community: [{ name: "Community1", path: "/community" }],
    donatepad: [{ name: "DonatePad", path: "/donation" }],
    doctor: [
      { name: "All Doctor", path: "/doctor" },
      { name: "DoctorLogin", path: "/doctor/profile" },
    ],
    checkdisease: [
      { name: "CheckDisease", path: `/checkdisease?lang=${language || "en"}` },
      { name: "Checkdisease2", path: "/checkdisease/checkdisease2" },
    ],
  };

  const mainMenus = [
    "education",
    "community",
    "donatepad",
    "doctor",
    "checkdisease",
  ];

  return (
    <nav
      ref={navRef}
      className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href={"/"}>
              <Image src={"/logo2.png"} alt="logo" width={60} height={60} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {mainMenus.map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === key ? null : key)
                  }
                  className="text-gray-700 hover:text-pink-600 flex gap-0 transition-colors font-medium focus:outline-none"
                >
                  {t[key]}{" "}
                  {openSubMenu === key ? <ChevronUp /> : <ChevronDown />}
                </button>

                {/* Desktop submenu */}
                {openSubMenu === key && (
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md min-w-[140px] z-50">
                    {subMenus[key].map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none pr-10"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-600 pointer-events-none" />
            </div>

            <button
              onClick={() => (window.location.href = "/createaccount")}
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.signIn}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-pink-600" />
            ) : (
              <Menu className="w-6 h-6 text-pink-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-pink-100">
            {mainMenus.map((key) => (
              <div key={key}>
                <button
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === key ? null : key)
                  }
                  className="w-full flex justify-between items-center px-4 py-2 font-medium text-gray-700 hover:text-pink-600 focus:outline-none"
                >
                  {t[key]}
                  <span>{openSubMenu === key ? "▲" : "▼"}</span>
                </button>

                {openSubMenu === key && (
                  <div className="pl-6 mt-2 space-y-1">
                    {subMenus[key].map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600 rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-pink-100 text-pink-700 px-4 py-3 rounded-lg font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Select Language"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => (window.location.href = "/createaccount")}
              className="w-full bg-linear-to-r from-pink-500 to-coral-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {t.signIn}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

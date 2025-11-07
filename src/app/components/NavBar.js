"use client";
import { Globe, Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavBar({ setLanguage, language }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = ["en", "hi", "मराठी", "தமிழ்", "বাংলা", "తెలుగు"];
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href={"/"}>
                <Image src={"/logo2.png"} alt="logo" width={50} height={50} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href={"/learn"}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Education
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Contact
              </Link>

              {/* Language Selector */}
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none pr-10"
                  aria-label="Select Language"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-600 pointer-events-none" />
              </div>

              <button
                onClick={() => (window.location.href = "/createaccount")}
                className="bg-pink-500  text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
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
              <Link
                href="#features"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Features
              </Link>
              <Link
                href={"/learn"}
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Education
              </Link>
              <Link
                href="#about"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Contact
              </Link>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-pink-100 text-pink-700 px-4 py-3 rounded-lg font-medium cursor-pointer border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Select Language"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>

              <button className="w-full bg-linear-to-r from-pink-500 to-coral-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;

"use client";
import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Globe,
  ArrowRight,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    language: "English",
  });

  const languages = ["English", "हिन्दी", "Marathi"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`welcome back to period care`);
      window.location.href = "/dashbaord";
    }
    alert(`welcome to period care ${formData.name}`);
    window.location.href = "/userdata";
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
        🌸
      </div>
      <div
        className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        💕
      </div>
      <div
        className="absolute bottom-20 left-20 text-4xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-10 right-32 text-5xl opacity-20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      >
        🦋
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Illustration/Image Section */}
        <div className="hidden md:flex flex-col items-center justify-center p-8">
          <div className="relative w-full max-w-md">
            {/* Placeholder for illustration/image */}
            <div
              className={`bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl aspect-square flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 ${
                isLogin ? "" : "-mt-[220px]"
              }`}
            >
              <div className="text-center p-8">
                <div
                  className={`text-8xl mb-2 animate-bounce flex justify-center `}
                  style={{ animationDuration: "3s" }}
                >
                  <Image
                    src={`/img/${isLogin ? `login.png` : "signup.png"}`}
                    alt="img"
                    width={200}
                    height={200}
                  />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Welcome to
                  <br />
                  PeriodCare
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your trusted companion for menstrual health, wellness, and
                  empowerment
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-gray-700">
                Safe & Private
              </span>
            </div>
            <div
              className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              <Globe className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">
                Chat in 12+ Languages
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-pink-400 to-rose-400 rounded-2xl mb-4 shadow-lg">
                <Link href={"/"}>
                  <Image src={"/logo2.png"} alt="logo" width={60} height={60} />
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                {isLogin ? "Welcome Back!" : "Join PeriodCare"}
              </h1>
              <p className="text-gray-600">
                {isLogin
                  ? "Sign in to continue your wellness journey"
                  : "Start your personalized health journey today"}
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl mb-8 md:-mt-5">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-linear-to-r from-pink-400 to-rose-400 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-linear-to-r from-pink-400 to-rose-400 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Name field (only for signup) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-black pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    suppressHydrationWarning
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full text-black pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full text-black pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Language Selector (only for signup) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Language
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      className="w-full text-black pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors duration-300 appearance-none bg-white"
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Remember me / Forgot password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-black rounded border-gray-300 text-pink-500 focus:ring-pink-400"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Terms acceptance (only for signup) */}
              {!isLogin && (
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-black rounded border-gray-300 text-pink-500 focus:ring-pink-400"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <span className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-pink-400 to-rose-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-green-500">🔒</span>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  <span>Private</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">🌍</span>
                  <span>Multiple Languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

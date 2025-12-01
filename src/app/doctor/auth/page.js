"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Calendar,
  ChevronDown,
  Check,
  AlertCircle,
  Heart,
  Globe,
  Utensils,
  Shield,
} from "lucide-react";
import { loginUser } from "./components/Login";
import { signupUser } from "./components/Signup";

const LoginPage = ({
  formData,
  showPassword,
  handleSubmit,
  setIsLogin,
  setFormData,
  setShowPassword,
  loading,
}) => (
  <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      {/* Logo & Welcome */}
      <div className="text-center mb-8 animate-fadeIn">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 bg-linear-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <Heart className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
          PeriodCare
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-1">
          Welcome Back, Sister! 💗
        </p>
        <p className="text-gray-600">Continue your healthy journey.</p>
      </div>

      {/* Login Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-pink-200 animate-slideUp">
        <div className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                suppressHydrationWarning
                type="email"
                placeholder="your.email@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-pink-600 hover:text-pink-700 font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 cursor-pointer bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            {loading ? "Loading..." : "Login"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 bg-white border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-3"
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
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don&#39;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-pink-600 font-bold hover:text-pink-700 hover:underline"
              >
                Sign Up →
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Hint */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
          <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
          <p className="text-sm text-gray-700">
            Your data is secure and private 🔒
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SignupPage = ({
  languages,
  showConfirmPassword,
  showPassword,
  setIsLogin,
  formData,
  handlePasswordChange,
  dietTypes,
  handleSignUp,
  passwordStrength,
  setFormData,
  getPasswordStrengthText,
  getPasswordStrengthColor,
  setShowConfirmPassword,
  setShowPassword,
  loading,
}) => (
  <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center p-4 py-12">
    <div className="w-full max-w-2xl">
      {/* Logo & Welcome */}
      <div className="text-center mb-8 animate-fadeIn">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 bg-linear-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <Heart className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
          PeriodCare
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-1">
          Create Your Free Account
        </p>
        <p className="text-gray-600">Learn, track, and care with us. 🌸</p>
      </div>

      {/* Signup Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-t-4 border-pink-500 animate-slideUp">
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="Your age"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  value={formData.password}
                  onChange={handlePasswordChange}
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
              {/* Password Strength Meter */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          i < passwordStrength
                            ? getPasswordStrengthColor()
                            : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p
                    className="text-xs mt-1 font-semibold"
                    style={{
                      color: passwordStrength >= 3 ? "#10b981" : "#f59e0b",
                    }}
                  >
                    {getPasswordStrengthText()}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Diet Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Diet Type
              </label>
              <div className="relative">
                <Utensils className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <select
                  className="w-full pl-12 pr-10 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all appearance-none bg-white"
                  value={formData.dietType}
                  onChange={(e) =>
                    setFormData({ ...formData, dietType: e.target.value })
                  }
                >
                  {dietTypes.map((diet) => (
                    <option key={diet.value} value={diet.value}>
                      {diet.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Language
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <select
                  className="w-full pl-12 pr-10 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all appearance-none bg-white"
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.flag} {lang.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-5 h-5 text-pink-600 border-pink-300 rounded focus:ring-pink-500"
              checked={formData.agreeTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeTerms: e.target.checked })
              }
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <button
                type="button"
                className="text-pink-600 font-semibold hover:underline"
              >
                Terms & Conditions
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-pink-600 font-semibold hover:underline"
              >
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            onClick={() => {
              handleSignUp();
            }}
            disabled={!formData.agreeTerms || loading}
            className="w-full py-4 cursor-pointer bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Heart className="w-5 h-5" />
            {loading ? "Account Creating..." : "Create Account"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full py-3 bg-white border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-3"
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
            Sign up with Google
          </button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-pink-600 font-bold hover:text-pink-700 hover:underline"
              >
                Login →
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Hint with Animated Character */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="bg-linear-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full shadow-lg border-2 border-pink-300 flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xl">👧</span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-800">Ashatai says:</p>
            <p className="text-gray-600">
              &#34;Welcome! Let&#39;s start your wellness journey together
              🌸&#34;
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    dietType: "vegetarian",
    language: "en",
    agreeTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    calculatePasswordStrength(newPassword);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-300";
    if (passwordStrength === 1) return "bg-red-400";
    if (passwordStrength === 2) return "bg-yellow-400";
    if (passwordStrength === 3) return "bg-blue-400";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "Very Weak";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await loginUser(formData.email, formData.password);
      alert("Login Successful!");

      window.location.href = `/doctor/dashboard`;
    } catch (error) {
      if (!res.success) {
        alert(res.error);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const res = await signupUser(formData);

    setLoading(false);

    if (!res.success) {
      alert(res.error);
      return;
    }

    alert("Signup Successful!");

    // 🟢 This line switches screen to login (most devs forget this)
    setIsLogin(true);
  };

  const dietTypes = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "non-vegetarian", label: "Non-Vegetarian" },
    { value: "eggetarian", label: "Eggetarian" },
  ];

  const languages = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "hi", label: "हिंदी", flag: "🇮🇳" },
    { value: "mr", label: "मराठी", flag: "🇮🇳" },
  ];

  return isLogin ? (
    <LoginPage
      formData={formData}
      showPassword={showPassword}
      handleSubmit={handleSubmit}
      setIsLogin={setIsLogin}
      languages={languages}
      setFormData={setFormData}
      setShowPassword={setShowPassword}
      loading={loading}
    />
  ) : (
    <SignupPage
      showPassword={showPassword}
      setIsLogin={setIsLogin}
      formData={formData}
      handlePasswordChange={handlePasswordChange}
      showConfirmPassword={showConfirmPassword}
      dietTypes={dietTypes}
      languages={languages}
      handleSignUp={handleSignUp}
      passwordStrength={passwordStrength}
      setFormData={setFormData}
      getPasswordStrengthText={getPasswordStrengthText}
      getPasswordStrengthColor={getPasswordStrengthColor}
      setShowConfirmPassword={setShowConfirmPassword}
      setShowPassword={setShowPassword}
      loading={loading}
    />
  );
}

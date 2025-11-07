"use client";
import { Home, Search, ArrowLeft, Heart, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  const quickLinks = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Heart, label: "Wellness Hub", path: "/wellness" },
    { icon: Search, label: "Education", path: "/learn" },
    { icon: Sparkles, label: "AI Guide", path: "/guide" },
  ];

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
        🦋
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
        💕
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl sm:text-[12rem] font-bold text-transparent bg-linear-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text animate-pulse">
              404
            </div>

            {/* Floating emoji around 404 */}
            <div
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              🌺
            </div>
            <div
              className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-6xl animate-bounce"
              style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
            >
              🌼
            </div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-5xl animate-bounce"
              style={{ animationDuration: "2.2s", animationDelay: "0.5s" }}
            >
              🌷
            </div>
          </div>

          {/* Error Message Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-pink-400 to-rose-400 rounded-full mb-6 shadow-lg">
                <span className="text-4xl">🙈</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                Oops! Page Not Found
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-2">
                The page you&rsquo;re looking for seems to have wandered off...
              </p>

              <p className="text-gray-500">
                Don&rsquo;t worry, it happens to the best of us! Let&rsquo;s get
                you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleGoHome}
                className="w-full sm:w-auto bg-linear-to-r from-pink-400 to-rose-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Home className="w-5 h-5" />
                <span>Go to Home</span>
              </button>

              <button
                onClick={handleGoBack}
                className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-gray-300 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Decorative divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-sm text-gray-500">
                  Or explore these sections
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <button
                    key={index}
                    onClick={() => (window.location.href = `${link.path}`)}
                    className="bg-linear-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Icon className="w-8 h-8 text-pink-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-gray-700 block">
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Support Message */}
          <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  Need help?
                </p>
                <p className="text-xs">
                  Contact our support team or visit our{" "}
                  <span className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer">
                    Help Center
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Fun fact section */}
          <div className="mt-8 p-6 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl inline-block">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">💡 Did you know?</span> While
              you&rsquo;re here, remember to stay hydrated and take care of
              yourself! 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-linear(circle, #ec4899 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}

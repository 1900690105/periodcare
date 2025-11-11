import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  Globe,
  WifiOff,
  Wifi,
  Heart,
  Minimize2,
  Maximize2,
  ChevronLeft,
} from "lucide-react";

export default function AIChatbot({ lan }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [language, setLanguage] = useState("English");
  const [activeCategory, setActiveCategory] = useState("all");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 💜 I'm your PeriodCare AI assistant. How can I support you today?",
      category: "general",
      time: "10:30 AM",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (lan === "mr") {
      setLanguage("Marathi");
    } else if (lan === "hi") {
      setLanguage("Hindi");
    } else {
      setLanguage("English");
    }
  }, [lan]);

  const languages = [
    "English",
    "हिंदी (Hindi)",
    "मराठी (Marathi)",
    "தமிழ் (Tamil)",
    "বাংলা (Bengali)",
    "తెలుగు (Telugu)",
    "ગુજરાતી (Gujarati)",
    "ਪੰਜਾਬੀ (Punjabi)",
    "ಕನ್ನಡ (Kannada)",
    "മലയാളം (Malayalam)",
    "ଓଡ଼ିଆ (Odia)",
    "اردو (Urdu)",
    "नेपाली (Nepali)",
    "සිංහල (Sinhala)",
    "ไทย (Thai)",
    "中文 (Chinese - Simplified)",
    "繁體中文 (Chinese - Traditional)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "Français (French)",
    "Deutsch (German)",
    "Español (Spanish)",
    "Português (Portuguese)",
    "Italiano (Italian)",
    "Русский (Russian)",
    "العربية (Arabic)",
    "Türkçe (Turkish)",
    "فارسی (Persian)",
    "Polski (Polish)",
    "Українська (Ukrainian)",
    "Nederlands (Dutch)",
    "Svenska (Swedish)",
    "Dansk (Danish)",
    "Norsk (Norwegian)",
    "Suomi (Finnish)",
    "Čeština (Czech)",
    "Magyar (Hungarian)",
    "Ελληνικά (Greek)",
    "Română (Romanian)",
    "עברית (Hebrew)",
    "Bahasa Indonesia (Indonesian)",
    "Bahasa Melayu (Malay)",
    "Filipino (Tagalog)",
    "Afrikaans",
    "Swahili",
    "Zulu",
    "Amharic",
    "Yoruba",
    "Igbo",
  ];

  const categories = [
    { id: "all", icon: "💬", label: "All", color: "pink" },
    { id: "diet", icon: "🥗", label: "Diet", color: "green" },
    { id: "exercise", icon: "🧘", label: "Exercise", color: "purple" },
    { id: "pain", icon: "💊", label: "Pain", color: "red" },
    { id: "hygiene", icon: "🧼", label: "Hygiene", color: "blue" },
    { id: "emotional", icon: "💗", label: "Support", color: "pink" },
  ];

  const quickQuestions = [
    { text: "What should I eat?", category: "diet" },
    { text: "Best exercises?", category: "exercise" },
    { text: "Manage period pain?", category: "pain" },
    { text: "Hygiene practices?", category: "hygiene" },
    { text: "Feeling emotional", category: "emotional" },
  ];

  // Check device type and online/offline status
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (quickMsg = null) => {
    const msgText = quickMsg || message;
    if (!msgText.trim()) return;

    // Add user message
    const newMessage = {
      type: "user",
      text: msgText,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    try {
      // 🔥 Send message to backend API
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: msgText,
          language: language || "en", // You can store language in state
        }),
      });

      if (!response.ok) throw new Error("Server error");
      const data = await response.json();

      // 🧠 Bot reply from backend
      const botMessage = {
        type: "bot",
        text: data.answer || "Sorry, I couldn't understand that.",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "⚠️ Sorry, I'm having trouble connecting to the server.",
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Floating Widget (Closed State)
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 active:scale-95 relative group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold animate-pulse">
            1
          </span>

          {/* Tooltip - Hidden on mobile */}
          <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              Chat with AI Assistant 💜
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // Full Chat Window (Open State)
  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isMobile || isFullScreen
          ? "inset-0"
          : "bottom-4 right-4 md:bottom-6 md:right-6 w-full max-w-sm md:max-w-md h-[calc(100vh-2rem)] md:h-[600px]"
      }`}
    >
      <div className="bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-pink-500 to-purple-500 p-3 md:p-4">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
              {/* Back button for mobile */}
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors shrink-0"
                aria-label="Close chat"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-sm md:text-base truncate">
                  PeriodCare AI
                </h3>
                <div className="flex items-center space-x-1 text-[10px] md:text-xs">
                  {isOnline ? (
                    <>
                      <Wifi className="w-3 h-3 text-green-300 shrink-0" />
                      <span className="text-green-200">Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-3 h-3 text-red-300 shrink-0" />
                      <span className="text-red-200">Offline</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1 md:space-x-2 shrink-0">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-1 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Select Language"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="text-gray-900">
                    {lang}
                  </option>
                ))}
              </select>

              {/* Desktop controls */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label={isFullScreen ? "Minimize" : "Maximize"}
              >
                {isFullScreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex space-x-1.5 md:space-x-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-white text-pink-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30 active:bg-white/40"
                }`}
              >
                <span className="text-xs md:text-sm">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Offline Banner */}
        {!isOnline && (
          <div className="bg-amber-100 border-b border-amber-200 px-3 md:px-4 py-2 flex items-center space-x-2">
            <WifiOff className="w-3 h-3 md:w-4 md:h-4 text-amber-700 shrink-0" />
            <p className="text-[10px] md:text-xs text-amber-800 font-medium">
              You&rsquo;re offline — chatbot will sync once connected.
            </p>
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-linear-to-b from-pink-50/30 to-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] md:max-w-[80%] ${
                  msg.type === "user" ? "order-2" : ""
                }`}
              >
                <div
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-2xl ${
                    msg.type === "bot"
                      ? "bg-pink-100 text-gray-800 rounded-tl-none"
                      : "bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
                  }`}
                >
                  <p className="text-xs md:text-sm whitespace-pre-line wrap-break-word">
                    {msg.text}
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 px-2">
                  {msg.time}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-pink-100 px-3 md:px-4 py-2 md:py-3 rounded-2xl rounded-tl-none">
                <div className="flex space-x-1.5 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="px-3 md:px-4 py-2 bg-pink-50 border-t border-pink-100">
          <p className="text-[10px] md:text-xs text-gray-600 font-medium mb-1.5 md:mb-2">
            Quick questions:
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {quickQuestions
              .filter(
                (q) => activeCategory === "all" || q.category === activeCategory
              )
              .slice(0, isMobile ? 2 : 3)
              .map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q.text)}
                  className="bg-white border border-pink-200 rounded-full px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-gray-700 hover:bg-pink-100 hover:border-pink-300 active:bg-pink-200 transition-colors"
                >
                  {q.text}
                </button>
              ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 bg-white border-t border-gray-200">
          <div className="flex items-end space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSendMessage()
              }
              placeholder={
                isOnline ? "Type your message..." : "You're offline..."
              }
              disabled={!isOnline}
              className="flex-1 px-3 md:px-4 py-2 md:py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-xs md:text-sm"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!isOnline || !message.trim()}
              className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-2 md:p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              disabled={!isOnline}
              className="bg-pink-100 text-pink-600 p-2 md:p-3 rounded-full hover:bg-pink-200 active:bg-pink-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              aria-label="Voice input"
            >
              <Mic className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          <p className="text-[10px] md:text-xs text-gray-500 mt-1.5 md:mt-2 text-center">
            {isMobile
              ? "Secured & Private 🔒"
              : "Press Enter to send • Secured & Private 🔒"}
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  Globe,
  WifiOff,
  Wifi,
  Apple,
  Dumbbell,
  Pill,
  Droplet,
  Heart,
  ChevronDown,
  Minimize2,
  Maximize2,
} from "lucide-react";

export default function AIChatbot() {
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
  const messagesEndRef = useRef(null);

  const languages = ["English", "हिंदी", "मराठी", "தமிழ்", "বাংলা", "తెలుగు"];

  const categories = [
    { id: "all", icon: "💬", label: "All", color: "pink" },
    { id: "diet", icon: "🥗", label: "Diet", color: "green" },
    { id: "exercise", icon: "🧘", label: "Exercise", color: "purple" },
    { id: "pain", icon: "💊", label: "Pain Relief", color: "red" },
    { id: "hygiene", icon: "🧼", label: "Hygiene", color: "blue" },
    { id: "emotional", icon: "💗", label: "Emotional", color: "pink" },
  ];

  const quickQuestions = [
    { text: "What should I eat during my period?", category: "diet" },
    { text: "Best exercises during menstruation", category: "exercise" },
    { text: "How to manage period pain?", category: "pain" },
    { text: "Menstrual hygiene best practices", category: "hygiene" },
    { text: "I'm feeling emotional today", category: "emotional" },
  ];

  const botResponses = {
    diet: "Great question! During your period, focus on:\n\n🥬 Iron-rich foods (spinach, beans)\n🍌 Potassium (bananas, avocados)\n🥜 Omega-3 (nuts, fish)\n💧 Stay hydrated\n🍫 Small amounts of dark chocolate for magnesium\n\nAvoid: excess salt, caffeine, and processed foods.",
    exercise:
      "Exercise can help! Try:\n\n🧘 Gentle yoga and stretching\n🚶 Light walking (30 mins)\n🏊 Swimming (if comfortable)\n💪 Low-intensity strength training\n\nListen to your body - rest when needed! 💜",
    pain: "For period pain relief:\n\n🌡️ Apply heat pad on abdomen\n💊 Take prescribed pain relievers\n🧘 Practice relaxation techniques\n☕ Chamomile tea helps\n🛁 Warm bath\n\nIf pain is severe, consult a doctor.",
    hygiene:
      "Menstrual hygiene tips:\n\n🧼 Change pad/tampon every 4-6 hours\n💧 Maintain intimate hygiene\n👐 Wash hands before/after\n🚿 Shower regularly\n👗 Wear breathable cotton underwear\n🗑️ Dispose products properly",
    emotional:
      "I understand periods can be emotionally challenging. 💜\n\n✨ Your feelings are valid\n🧘 Try meditation or deep breathing\n📱 Talk to someone you trust\n📝 Journal your thoughts\n🎵 Listen to calming music\n🌸 Practice self-care\n\nYou're not alone in this!",
  };

  // Simulate online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (quickMsg = null) => {
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

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);

      // Determine response based on message content
      let response =
        "I'm here to help! Could you tell me more about what you need?";

      if (
        msgText.toLowerCase().includes("diet") ||
        msgText.toLowerCase().includes("eat")
      ) {
        response = botResponses.diet;
      } else if (
        msgText.toLowerCase().includes("exercise") ||
        msgText.toLowerCase().includes("workout")
      ) {
        response = botResponses.exercise;
      } else if (
        msgText.toLowerCase().includes("pain") ||
        msgText.toLowerCase().includes("cramp")
      ) {
        response = botResponses.pain;
      } else if (
        msgText.toLowerCase().includes("hygiene") ||
        msgText.toLowerCase().includes("clean")
      ) {
        response = botResponses.hygiene;
      } else if (
        msgText.toLowerCase().includes("emotional") ||
        msgText.toLowerCase().includes("feel")
      ) {
        response = botResponses.emotional;
      }

      const botMessage = {
        type: "bot",
        text: response,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  // Floating Widget (Closed State)
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 relative group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </span>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
        isFullScreen
          ? "inset-4 md:inset-8"
          : "bottom-6 right-6 w-full max-w-md h-[600px]"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
        {/* nav bar */}
        <div className="bg-linear-to-r from-pink-500 to-purple-500 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold">PeriodCare AI</h3>
                <div className="flex items-center space-x-1 text-xs">
                  {isOnline ? (
                    <>
                      <Wifi className="w-3 h-3 text-green-300" />
                      <span className="text-green-200">Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-3 h-3 text-red-300" />
                      <span className="text-red-200">Offline</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Select Language"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="text-gray-900">
                    {lang}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
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
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-white text-pink-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Offline Banner */}
        {!isOnline && (
          <div className="bg-amber-100 border-b border-amber-200 px-4 py-2 flex items-center space-x-2">
            <WifiOff className="w-4 h-4 text-amber-700" />
            <p className="text-xs text-amber-800 font-medium">
              You&rsquo;re offline — chatbot will sync once connected.
            </p>
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-pink-50/30 to-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] ${
                  msg.type === "user" ? "order-2" : ""
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    msg.type === "bot"
                      ? "bg-pink-100 text-gray-800 rounded-tl-none"
                      : "bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-pink-100 px-4 py-3 rounded-2xl rounded-tl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="px-4 py-2 bg-pink-50 border-t border-pink-100">
          <p className="text-xs text-gray-600 font-medium mb-2">
            Quick questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions
              .filter(
                (q) => activeCategory === "all" || q.category === activeCategory
              )
              .slice(0, 3)
              .map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q.text)}
                  className="bg-white border border-pink-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-pink-100 hover:border-pink-300 transition-colors"
                >
                  {q.text}
                </button>
              ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={
                isOnline ? "Type your message..." : "You're offline..."
              }
              disabled={!isOnline}
              className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!isOnline || !message.trim()}
              className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
            <button
              disabled={!isOnline}
              className="bg-pink-100 text-pink-600 p-3 rounded-full hover:bg-pink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Voice input"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send •{" "}
            {isOnline
              ? "Secured & Private 🔒"
              : "Messages will sync when online"}
          </p>
        </div>
      </div>
    </div>
  );
}

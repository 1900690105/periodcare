import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  WifiOff,
  Wifi,
  Heart,
  Minimize2,
  Maximize2,
  ChevronLeft,
  Stethoscope,
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  MessageSquareHeart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────
//  Doctor Alert Popup
// ─────────────────────────────────────────────
function DoctorAlertPopup({ onClose, userName }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden animate-in">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-red-400 via-orange-400 to-red-500" />

        {/* Icon + Title */}
        <div className="px-6 pt-6 pb-4 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
            <Stethoscope className="w-8 h-8 text-red-500" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
              Medical Attention Advised
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Please See a Doctor
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {userName ? `${userName}, based` : "Based"} on what you&#39;ve
            described, we recommend consulting a healthcare professional soon.
            Your symptoms may need medical evaluation.
          </p>
        </div>

        {/* Info cards */}
        <div className="px-6 pb-4 space-y-2">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-red-700 mb-0.5">
                Symptoms detected
              </p>
              <p className="text-xs text-red-600">
                Heavy bleeding, severe pain, fever or vomiting need prompt
                medical attention.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-orange-700 mb-0.5">
                Don&#39;t wait too long
              </p>
              <p className="text-xs text-orange-600">
                Try to book an appointment within the next 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-6 pb-6 space-y-2">
          <a
            href="tel:108"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            Call Emergency (108)
          </a>

          <a
            href="https://www.practo.com/doctors"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white border-2 border-red-200 text-red-600 py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95"
          >
            <MapPin className="w-4 h-4" />
            Find Nearby Doctor
            <ChevronRight className="w-3 h-3 ml-auto" />
          </a>

          <button
            onClick={onClose}
            className="w-full text-gray-500 py-2 text-xs hover:text-gray-700 transition-colors"
          >
            I understand, close this
          </button>
        </div>
      </div>

      <style>{`
        @keyframes animateIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-in { animation: animateIn 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
//  Partner Notification Banner
// ─────────────────────────────────────────────
function PartnerNotificationBanner({ onClose, userName, partnerEmail }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 md:right-6 z-[9998] max-w-xs w-full animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden">
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500" />

        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquareHeart className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">
                  Your partner was notified 💜
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  {partnerEmail || "Partner"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 mt-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message */}
          <div className="bg-purple-50 rounded-xl p-3 mb-3">
            <p className="text-xs text-purple-800 leading-relaxed">
              <span className="font-semibold">Message sent:</span> &ldquo;
              {userName || "Someone"} may need emotional support right now —
              she&rsquo;s going through a tough time with her cycle.&rdquo;
            </p>
          </div>

          {/* Info row */}
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
            <p className="text-[10px] text-gray-500">
              Email delivered · They&rsquo;ll reach out when they can
            </p>
          </div>

          {/* Affirmation */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3 flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-600 leading-relaxed">
              You are not alone. It&rsquo;s okay to lean on the people who care
              about you. 🌸
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUp 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
//  Main Chatbot
// ─────────────────────────────────────────────
export default function AIChatbot({ lan, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [language, setLanguage] = useState(lan || "English");
  const [activeCategory, setActiveCategory] = useState("all");
  const [message, setMessage] = useState("");
  const [showDoctorAlert, setShowDoctorAlert] = useState(false);
  const [showPartnerBanner, setShowPartnerBanner] = useState(false);
  const pathname = usePathname();

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm AshaTai your PeriodCare AI assistant. How can I support you today?",
      category: "general",
      time: "10:30 AM",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [userData] = useState({
    user_profile: {
      name: "Ananya",
      age: 14,
      weight: 45,
      bloodGroup: "B+",
      religion: "Hindu",
      state: "Maharashtra",
      country: "India",
      maritalStatus: "Unmarried",
      firstPeriodAge: 13,
      dietType: "Vegetarian",
      allergies: ["mushroom"],
      preferredHealing: ["Home Remedies", "Ayurveda"],
      period_start: "2025-02-14",
      cycle_length: "32",
      period_duration: "5",
      mood: "Sensitive",
      crampSeverity: 6,
      partner_email: "", // e.g. "partner@gmail.com" — set from real user profile
    },
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (lan === "mr") setLanguage("Marathi");
    else if (lan === "hi") setLanguage("Hindi");
    else setLanguage("English");
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
    { id: "all", icon: "💬", label: "All" },
    { id: "diet", icon: "🥗", label: "Diet" },
    { id: "exercise", icon: "🧘", label: "Exercise" },
    { id: "pain", icon: "💊", label: "Pain" },
    { id: "hygiene", icon: "🧼", label: "Hygiene" },
    { id: "emotional", icon: "💗", label: "Support" },
  ];

  const quickQuestions = [
    { text: "What should I eat?", category: "diet" },
    { text: "Best exercises?", category: "exercise" },
    { text: "Manage period pain?", category: "pain" },
    { text: "Hygiene practices?", category: "hygiene" },
    { text: "Feeling emotional", category: "emotional" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const buildUserDescription = () => {
    const p = userData?.user_profile;
    return `
${p?.name} is a ${p?.age}-year-old ${(p?.maritalStatus || "").toLowerCase()} girl who follows a ${(p?.dietType || "").toLowerCase()} diet.
She started her first period at age ${p?.firstPeriodAge} and currently has an average cycle length of ${p?.cycle_length} days with a period duration of around ${p?.period_duration} days.
Her recent mood suggests she often feels ${(p?.mood || "").toLowerCase()}, and she rates her cramp severity at ${p?.crampSeverity}/10.
She prefers ${p?.preferredHealing?.join(", ") || "no specific methods"} for comfort and avoids foods she is allergic to, such as ${p?.allergies?.join(", ") || "none"}.
    `.trim();
  };

  const handleSendMessage = async (quickMsg = null) => {
    const msgText = quickMsg || message;
    if (!msgText.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: msgText,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: msgText,
          language: language || "English",
          user_description: buildUserDescription(),
          partner_email: userData?.user_profile?.partner_email || "",
        }),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      console.log("API response:", data);

      // ── Doctor alert ──────────────────────────────────────
      if (data?.alerts?.doctor === true) {
        setShowDoctorAlert(true);
      }

      // ── Partner alert ─────────────────────────────────────
      if (data?.alerts?.partner === true) {
        setShowPartnerBanner(true);
        // Auto-dismiss after 8 seconds
        setTimeout(() => setShowPartnerBanner(false), 8000);
      }

      const botReply = data.answer?.replace(/\*/g, "") || "Sorry, try again.";

      const displayText = data?.alerts?.doctor
        ? `⚠️ Medical concern detected.\n\n${botReply}`
        : botReply;

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: displayText,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isDoctor: data?.alerts?.doctor === true,
          isPartner: data?.alerts?.partner === true,
        },
      ]);
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

  // ── Floating button (closed state) ───────────────────────
  if (!isOpen) {
    return (
      <>
        {pathname === "/dashboard" ? (
          <button
            onClick={() => setIsOpen(true)}
            className="py-3 px-6 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid rgba(255,255,255,0.4)",
              color: "#fff",
            }}
          >
            <MessageCircle className="w-5 h-5" /> {text}
          </button>
        ) : (
          <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 active:scale-95 relative group"
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold animate-pulse">
                1
              </span>
              <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                  Chat with AI Assistant 💜
                  <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
                </div>
              </div>
            </button>
          </div>
        )}
      </>
    );
  }

  // ── Full chat window ──────────────────────────────────────
  return (
    <>
      {/* Doctor Alert Popup */}
      {showDoctorAlert && (
        <DoctorAlertPopup
          onClose={() => setShowDoctorAlert(false)}
          userName={userData?.user_profile?.name}
        />
      )}

      {/* Partner Notification Banner */}
      {showPartnerBanner && (
        <PartnerNotificationBanner
          onClose={() => setShowPartnerBanner(false)}
          userName={userData?.user_profile?.name}
          partnerEmail={userData?.user_profile?.partner_email || ""}
        />
      )}

      <div
        className={`fixed z-50 transition-all duration-300 ${
          isMobile || isFullScreen
            ? "inset-0"
            : "bottom-4 right-4 md:bottom-6 md:right-6 w-full max-w-sm md:max-w-md h-[calc(100vh-2rem)] md:h-[600px]"
        }`}
      >
        <div className="bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 md:p-4">
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors shrink-0"
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
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-1 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="text-gray-900">
                      {lang}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
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
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <span>{cat.icon}</span>
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-pink-50/30 to-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] ${msg.type === "user" ? "order-2" : ""}`}
                >
                  <div
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-2xl ${
                      msg.type === "bot"
                        ? msg.isDoctor
                          ? "bg-red-50 border border-red-200 text-gray-800 rounded-tl-none"
                          : "bg-pink-100 text-gray-800 rounded-tl-none"
                        : "bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
                    }`}
                  >
                    {/* Doctor badge inside message */}
                    {msg.isDoctor && (
                      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-red-200">
                        <Stethoscope className="w-3 h-3 text-red-500 shrink-0" />
                        <span className="text-[10px] font-semibold text-red-600 uppercase tracking-wide">
                          Medical attention advised
                        </span>
                      </div>
                    )}

                    {/* Partner badge inside message */}
                    {msg.isPartner && (
                      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-purple-200">
                        <Users className="w-3 h-3 text-purple-500 shrink-0" />
                        <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wide">
                          Partner notified · emotional support mode
                        </span>
                      </div>
                    )}
                    <p className="text-xs md:text-sm whitespace-pre-line break-words">
                      {msg.text}
                    </p>

                    {/* "See doctor" inline button on doctor messages */}
                    {msg.isDoctor && (
                      <button
                        onClick={() => setShowDoctorAlert(true)}
                        className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-red-600 hover:text-red-700 transition-colors"
                      >
                        <MapPin className="w-3 h-3" />
                        Find a doctor near you →
                      </button>
                    )}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1 px-2">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-pink-100 px-3 md:px-4 py-2 md:py-3 rounded-2xl rounded-tl-none">
                  <div className="flex space-x-1.5 md:space-x-2">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}s` }}
                      />
                    ))}
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
                  (q) =>
                    activeCategory === "all" || q.category === activeCategory,
                )
                .slice(0, isMobile ? 2 : 3)
                .map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.text)}
                    className="bg-white border border-pink-200 rounded-full px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-gray-700 hover:bg-pink-100 hover:border-pink-300 transition-colors"
                  >
                    {q.text}
                  </button>
                ))}
            </div>
          </div>

          {/* Input */}
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
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 md:p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shrink-0"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                disabled={!isOnline}
                className="bg-pink-100 text-pink-600 p-2 md:p-3 rounded-full hover:bg-pink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
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
    </>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import {
//   MessageCircle,
//   X,
//   Send,
//   Mic,
//   WifiOff,
//   Wifi,
//   Heart,
//   Minimize2,
//   Maximize2,
//   ChevronLeft,
//   Stethoscope,
//   AlertTriangle,
//   Phone,
//   MapPin,
//   Clock,
//   ChevronRight,
// } from "lucide-react";
// import { usePathname } from "next/navigation";

// // ─────────────────────────────────────────────
// //  Doctor Alert Popup
// // ─────────────────────────────────────────────
// function DoctorAlertPopup({ onClose, userName }) {
//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden animate-in">
//         {/* Top accent bar */}
//         <div className="h-2 bg-gradient-to-r from-red-400 via-orange-400 to-red-500" />

//         {/* Icon + Title */}
//         <div className="px-6 pt-6 pb-4 text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
//             <Stethoscope className="w-8 h-8 text-red-500" />
//           </div>
//           <div className="flex items-center justify-center gap-2 mb-2">
//             <AlertTriangle className="w-4 h-4 text-orange-500" />
//             <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
//               Medical Attention Advised
//             </span>
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 mb-2">
//             Please See a Doctor
//           </h2>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             {userName ? `${userName}, based` : "Based"} on what you&#39;ve
//             described, we recommend consulting a healthcare professional soon.
//             Your symptoms may need medical evaluation.
//           </p>
//         </div>

//         {/* Info cards */}
//         <div className="px-6 pb-4 space-y-2">
//           <div className="bg-red-50 border border-red-100 rounded-2xl p-3 flex items-start gap-3">
//             <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
//               <AlertTriangle className="w-4 h-4 text-red-500" />
//             </div>
//             <div>
//               <p className="text-xs font-semibold text-red-700 mb-0.5">
//                 Symptoms detected
//               </p>
//               <p className="text-xs text-red-600">
//                 Heavy bleeding, severe pain, fever or vomiting need prompt
//                 medical attention.
//               </p>
//             </div>
//           </div>

//           <div className="bg-orange-50 border border-orange-100 rounded-2xl p-3 flex items-start gap-3">
//             <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
//               <Clock className="w-4 h-4 text-orange-500" />
//             </div>
//             <div>
//               <p className="text-xs font-semibold text-orange-700 mb-0.5">
//                 Don&#39;t wait too long
//               </p>
//               <p className="text-xs text-orange-600">
//                 Try to book an appointment within the next 24 hours.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action buttons */}
//         <div className="px-6 pb-6 space-y-2">
//           <a
//             href="tel:108"
//             className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95"
//           >
//             <Phone className="w-4 h-4" />
//             Call Emergency (108)
//           </a>

//           <a
//             href="https://www.practo.com/doctors"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full bg-white border-2 border-red-200 text-red-600 py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95"
//           >
//             <MapPin className="w-4 h-4" />
//             Find Nearby Doctor
//             <ChevronRight className="w-3 h-3 ml-auto" />
//           </a>

//           <button
//             onClick={onClose}
//             className="w-full text-gray-500 py-2 text-xs hover:text-gray-700 transition-colors"
//           >
//             I understand, close this
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes animateIn {
//           from { opacity: 0; transform: scale(0.92) translateY(12px); }
//           to   { opacity: 1; transform: scale(1) translateY(0); }
//         }
//         .animate-in { animation: animateIn 0.25s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  Main Chatbot
// // ─────────────────────────────────────────────
// export default function AIChatbot({ lan, text }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isOnline, setIsOnline] = useState(true);
//   const [language, setLanguage] = useState(lan || "English");
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [message, setMessage] = useState("");
//   const [showDoctorAlert, setShowDoctorAlert] = useState(false);
//   const pathname = usePathname();

//   const [messages, setMessages] = useState([
//     {
//       type: "bot",
//       text: "Hello! I'm AshaTai your PeriodCare AI assistant. How can I support you today?",
//       category: "general",
//       time: "10:30 AM",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [userData] = useState({
//     user_profile: {
//       name: "Ananya",
//       age: 14,
//       weight: 45,
//       bloodGroup: "B+",
//       religion: "Hindu",
//       state: "Maharashtra",
//       country: "India",
//       maritalStatus: "Unmarried",
//       firstPeriodAge: 13,
//       dietType: "Vegetarian",
//       allergies: ["mushroom"],
//       preferredHealing: ["Home Remedies", "Ayurveda"],
//       period_start: "2025-02-14",
//       cycle_length: "32",
//       period_duration: "5",
//       mood: "Sensitive",
//       crampSeverity: 6,
//     },
//   });

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (lan === "mr") setLanguage("Marathi");
//     else if (lan === "hi") setLanguage("Hindi");
//     else setLanguage("English");
//   }, [lan]);

//   const languages = [
//     "English",
//     "हिंदी (Hindi)",
//     "मराठी (Marathi)",
//     "தமிழ் (Tamil)",
//     "বাংলা (Bengali)",
//     "తెలుగు (Telugu)",
//     "ગુજરાતી (Gujarati)",
//     "ਪੰਜਾਬੀ (Punjabi)",
//     "ಕನ್ನಡ (Kannada)",
//     "മലയാളം (Malayalam)",
//     "ଓଡ଼ିଆ (Odia)",
//     "اردو (Urdu)",
//     "नेपाली (Nepali)",
//     "සිංහල (Sinhala)",
//     "ไทย (Thai)",
//     "中文 (Chinese - Simplified)",
//     "繁體中文 (Chinese - Traditional)",
//     "日本語 (Japanese)",
//     "한국어 (Korean)",
//     "Français (French)",
//     "Deutsch (German)",
//     "Español (Spanish)",
//     "Português (Portuguese)",
//     "Italiano (Italian)",
//     "Русский (Russian)",
//     "العربية (Arabic)",
//     "Türkçe (Turkish)",
//     "فارسی (Persian)",
//     "Polski (Polish)",
//     "Українська (Ukrainian)",
//     "Nederlands (Dutch)",
//     "Svenska (Swedish)",
//     "Dansk (Danish)",
//     "Norsk (Norwegian)",
//     "Suomi (Finnish)",
//     "Čeština (Czech)",
//     "Magyar (Hungarian)",
//     "Ελληνικά (Greek)",
//     "Română (Romanian)",
//     "עברית (Hebrew)",
//     "Bahasa Indonesia (Indonesian)",
//     "Bahasa Melayu (Malay)",
//     "Filipino (Tagalog)",
//     "Afrikaans",
//     "Swahili",
//     "Zulu",
//     "Amharic",
//     "Yoruba",
//     "Igbo",
//   ];

//   const categories = [
//     { id: "all", icon: "💬", label: "All" },
//     { id: "diet", icon: "🥗", label: "Diet" },
//     { id: "exercise", icon: "🧘", label: "Exercise" },
//     { id: "pain", icon: "💊", label: "Pain" },
//     { id: "hygiene", icon: "🧼", label: "Hygiene" },
//     { id: "emotional", icon: "💗", label: "Support" },
//   ];

//   const quickQuestions = [
//     { text: "What should I eat?", category: "diet" },
//     { text: "Best exercises?", category: "exercise" },
//     { text: "Manage period pain?", category: "pain" },
//     { text: "Hygiene practices?", category: "hygiene" },
//     { text: "Feeling emotional", category: "emotional" },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     window.addEventListener("online", () => setIsOnline(true));
//     window.addEventListener("offline", () => setIsOnline(false));
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const buildUserDescription = () => {
//     const p = userData?.user_profile;
//     return `
// ${p?.name} is a ${p?.age}-year-old ${(p?.maritalStatus || "").toLowerCase()} girl who follows a ${(p?.dietType || "").toLowerCase()} diet.
// She started her first period at age ${p?.firstPeriodAge} and currently has an average cycle length of ${p?.cycle_length} days with a period duration of around ${p?.period_duration} days.
// Her recent mood suggests she often feels ${(p?.mood || "").toLowerCase()}, and she rates her cramp severity at ${p?.crampSeverity}/10.
// She prefers ${p?.preferredHealing?.join(", ") || "no specific methods"} for comfort and avoids foods she is allergic to, such as ${p?.allergies?.join(", ") || "none"}.
//     `.trim();
//   };

//   const handleSendMessage = async (quickMsg = null) => {
//     const msgText = quickMsg || message;
//     if (!msgText.trim()) return;

//     setMessages((prev) => [
//       ...prev,
//       {
//         type: "user",
//         text: msgText,
//         time: new Date().toLocaleTimeString("en-US", {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);
//     setMessage("");
//     setIsTyping(true);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           question: msgText,
//           language: language || "English",
//           user_description: buildUserDescription(),
//           partner_email: "", // set from user profile if available
//         }),
//       });

//       if (!response.ok) throw new Error("Server error");

//       const data = await response.json();
//       console.log("API response:", data);

//       // ── Doctor alert ──────────────────────────────────────
//       if (data?.alerts?.doctor === true) {
//         setShowDoctorAlert(true);
//       }

//       const botReply = data.answer?.replace(/\*/g, "") || "Sorry, try again.";

//       // Prefix a subtle badge if doctor alert fired
//       const displayText = data?.alerts?.doctor
//         ? `⚠️ Medical concern detected.\n\n${botReply}`
//         : botReply;

//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text: displayText,
//           time: new Date().toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           isDoctor: data?.alerts?.doctor === true,
//         },
//       ]);
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text: "⚠️ Sorry, I'm having trouble connecting to the server.",
//           time: new Date().toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   // ── Floating button (closed state) ───────────────────────
//   if (!isOpen) {
//     return (
//       <>
//         {pathname === "/dashboard" ? (
//           <button
//             onClick={() => setIsOpen(true)}
//             className="py-3 px-6 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
//             style={{
//               background: "rgba(255,255,255,0.2)",
//               backdropFilter: "blur(8px)",
//               border: "1.5px solid rgba(255,255,255,0.4)",
//               color: "#fff",
//             }}
//           >
//             <MessageCircle className="w-5 h-5" /> {text}
//           </button>
//         ) : (
//           <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
//             <button
//               onClick={() => setIsOpen(true)}
//               className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 active:scale-95 relative group"
//               aria-label="Open chat"
//             >
//               <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold animate-pulse">
//                 1
//               </span>
//               <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
//                   Chat with AI Assistant 💜
//                   <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         )}
//       </>
//     );
//   }

//   // ── Full chat window ──────────────────────────────────────
//   return (
//     <>
//       {/* Doctor Alert Popup — rendered outside chat window so it's always on top */}
//       {showDoctorAlert && (
//         <DoctorAlertPopup
//           onClose={() => setShowDoctorAlert(false)}
//           userName={userData?.user_profile?.name}
//         />
//       )}

//       <div
//         className={`fixed z-50 transition-all duration-300 ${
//           isMobile || isFullScreen
//             ? "inset-0"
//             : "bottom-4 right-4 md:bottom-6 md:right-6 w-full max-w-sm md:max-w-md h-[calc(100vh-2rem)] md:h-[600px]"
//         }`}
//       >
//         <div className="bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 md:p-4">
//             <div className="flex items-center justify-between mb-2 md:mb-3">
//               <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="md:hidden text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors shrink-0"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shrink-0">
//                   <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-white font-semibold text-sm md:text-base truncate">
//                     PeriodCare AI
//                   </h3>
//                   <div className="flex items-center space-x-1 text-[10px] md:text-xs">
//                     {isOnline ? (
//                       <>
//                         <Wifi className="w-3 h-3 text-green-300 shrink-0" />
//                         <span className="text-green-200">Online</span>
//                       </>
//                     ) : (
//                       <>
//                         <WifiOff className="w-3 h-3 text-red-300 shrink-0" />
//                         <span className="text-red-200">Offline</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-1 md:space-x-2 shrink-0">
//                 <select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                   className="bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-1 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
//                 >
//                   {languages.map((lang) => (
//                     <option key={lang} value={lang} className="text-gray-900">
//                       {lang}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   onClick={() => setIsFullScreen(!isFullScreen)}
//                   className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
//                 >
//                   {isFullScreen ? (
//                     <Minimize2 className="w-4 h-4" />
//                   ) : (
//                     <Maximize2 className="w-4 h-4" />
//                   )}
//                 </button>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="flex space-x-1.5 md:space-x-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveCategory(cat.id)}
//                   className={`flex items-center space-x-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
//                     activeCategory === cat.id
//                       ? "bg-white text-pink-600 shadow-lg"
//                       : "bg-white/20 text-white hover:bg-white/30"
//                   }`}
//                 >
//                   <span>{cat.icon}</span>
//                   <span className="hidden sm:inline">{cat.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Offline Banner */}
//           {!isOnline && (
//             <div className="bg-amber-100 border-b border-amber-200 px-3 md:px-4 py-2 flex items-center space-x-2">
//               <WifiOff className="w-3 h-3 md:w-4 md:h-4 text-amber-700 shrink-0" />
//               <p className="text-[10px] md:text-xs text-amber-800 font-medium">
//                 You&rsquo;re offline — chatbot will sync once connected.
//               </p>
//             </div>
//           )}

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-pink-50/30 to-white">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-[85%] md:max-w-[80%] ${msg.type === "user" ? "order-2" : ""}`}
//                 >
//                   <div
//                     className={`px-3 md:px-4 py-2 md:py-3 rounded-2xl ${
//                       msg.type === "bot"
//                         ? msg.isDoctor
//                           ? "bg-red-50 border border-red-200 text-gray-800 rounded-tl-none"
//                           : "bg-pink-100 text-gray-800 rounded-tl-none"
//                         : "bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
//                     }`}
//                   >
//                     {/* Doctor badge inside message */}
//                     {msg.isDoctor && (
//                       <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-red-200">
//                         <Stethoscope className="w-3 h-3 text-red-500 shrink-0" />
//                         <span className="text-[10px] font-semibold text-red-600 uppercase tracking-wide">
//                           Medical attention advised
//                         </span>
//                       </div>
//                     )}
//                     <p className="text-xs md:text-sm whitespace-pre-line break-words">
//                       {msg.text}
//                     </p>

//                     {/* "See doctor" inline button on doctor messages */}
//                     {msg.isDoctor && (
//                       <button
//                         onClick={() => setShowDoctorAlert(true)}
//                         className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-red-600 hover:text-red-700 transition-colors"
//                       >
//                         <MapPin className="w-3 h-3" />
//                         Find a doctor near you →
//                       </button>
//                     )}
//                   </div>
//                   <p className="text-[10px] md:text-xs text-gray-500 mt-1 px-2">
//                     {msg.time}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* Typing indicator */}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-pink-100 px-3 md:px-4 py-2 md:py-3 rounded-2xl rounded-tl-none">
//                   <div className="flex space-x-1.5 md:space-x-2">
//                     {[0, 0.2, 0.4].map((delay, i) => (
//                       <div
//                         key={i}
//                         className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
//                         style={{ animationDelay: `${delay}s` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Quick Questions */}
//           <div className="px-3 md:px-4 py-2 bg-pink-50 border-t border-pink-100">
//             <p className="text-[10px] md:text-xs text-gray-600 font-medium mb-1.5 md:mb-2">
//               Quick questions:
//             </p>
//             <div className="flex flex-wrap gap-1.5 md:gap-2">
//               {quickQuestions
//                 .filter(
//                   (q) =>
//                     activeCategory === "all" || q.category === activeCategory,
//                 )
//                 .slice(0, isMobile ? 2 : 3)
//                 .map((q, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleSendMessage(q.text)}
//                     className="bg-white border border-pink-200 rounded-full px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-gray-700 hover:bg-pink-100 hover:border-pink-300 transition-colors"
//                   >
//                     {q.text}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           {/* Input */}
//           <div className="p-3 md:p-4 bg-white border-t border-gray-200">
//             <div className="flex items-end space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyPress={(e) =>
//                   e.key === "Enter" && !e.shiftKey && handleSendMessage()
//                 }
//                 placeholder={
//                   isOnline ? "Type your message..." : "You're offline..."
//                 }
//                 disabled={!isOnline}
//                 className="flex-1 px-3 md:px-4 py-2 md:py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-xs md:text-sm"
//               />
//               <button
//                 onClick={() => handleSendMessage()}
//                 disabled={!isOnline || !message.trim()}
//                 className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 md:p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shrink-0"
//               >
//                 <Send className="w-4 h-4 md:w-5 md:h-5" />
//               </button>
//               <button
//                 disabled={!isOnline}
//                 className="bg-pink-100 text-pink-600 p-2 md:p-3 rounded-full hover:bg-pink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
//               >
//                 <Mic className="w-4 h-4 md:w-5 md:h-5" />
//               </button>
//             </div>
//             <p className="text-[10px] md:text-xs text-gray-500 mt-1.5 md:mt-2 text-center">
//               {isMobile
//                 ? "Secured & Private 🔒"
//                 : "Press Enter to send • Secured & Private 🔒"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   MessageCircle,
// //   X,
// //   Send,
// //   Mic,
// //   Globe,
// //   WifiOff,
// //   Wifi,
// //   Heart,
// //   Minimize2,
// //   Maximize2,
// //   ChevronLeft,
// // } from "lucide-react";
// // import { usePathname } from "next/navigation";

// // export default function AIChatbot({ lan, text }) {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isFullScreen, setIsFullScreen] = useState(false);
// //   const [isOnline, setIsOnline] = useState(true);
// //   const [language, setLanguage] = useState(lan || "English");
// //   const [activeCategory, setActiveCategory] = useState("all");
// //   const [message, setMessage] = useState("");
// //   const pathname = usePathname();
// //   const [messages, setMessages] = useState([
// //     {
// //       type: "bot",
// //       text: "Hello! I'm  AshaTai your PeriodCare AI assistant. How can I support you today?",
// //       category: "general",
// //       time: "10:30 AM",
// //     },
// //   ]);
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const [userData, setUserData] = useState({
// //     user_profile: {
// //       name: "Ananya",
// //       age: 14,
// //       weight: 45,
// //       bloodGroup: "B+",
// //       religion: "Hindu",
// //       state: "Maharashtra",
// //       country: "India",
// //       maritalStatus: "Unmarried",
// //       firstPeriodAge: 13,
// //       dietType: "Vegetarian",
// //       allergies: ["mushroom"],
// //       preferredHealing: ["Home Remedies", "Ayurveda"],
// //       period_start: "2025-02-14",
// //       cycle_length: "32",
// //       period_duration: "5",
// //       mood: "Sensitive",
// //       crampSeverity: 6,
// //     },
// //   });
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     if (lan === "mr") {
// //       setLanguage("Marathi");
// //     } else if (lan === "hi") {
// //       setLanguage("Hindi");
// //     } else {
// //       setLanguage("English");
// //     }
// //   }, [lan]);

// //   const languages = [
// //     "English",
// //     "हिंदी (Hindi)",
// //     "मराठी (Marathi)",
// //     "தமிழ் (Tamil)",
// //     "বাংলা (Bengali)",
// //     "తెలుగు (Telugu)",
// //     "ગુજરાતી (Gujarati)",
// //     "ਪੰਜਾਬੀ (Punjabi)",
// //     "ಕನ್ನಡ (Kannada)",
// //     "മലയാളം (Malayalam)",
// //     "ଓଡ଼ିଆ (Odia)",
// //     "اردو (Urdu)",
// //     "नेपाली (Nepali)",
// //     "සිංහල (Sinhala)",
// //     "ไทย (Thai)",
// //     "中文 (Chinese - Simplified)",
// //     "繁體中文 (Chinese - Traditional)",
// //     "日本語 (Japanese)",
// //     "한국어 (Korean)",
// //     "Français (French)",
// //     "Deutsch (German)",
// //     "Español (Spanish)",
// //     "Português (Portuguese)",
// //     "Italiano (Italian)",
// //     "Русский (Russian)",
// //     "العربية (Arabic)",
// //     "Türkçe (Turkish)",
// //     "فارسی (Persian)",
// //     "Polski (Polish)",
// //     "Українська (Ukrainian)",
// //     "Nederlands (Dutch)",
// //     "Svenska (Swedish)",
// //     "Dansk (Danish)",
// //     "Norsk (Norwegian)",
// //     "Suomi (Finnish)",
// //     "Čeština (Czech)",
// //     "Magyar (Hungarian)",
// //     "Ελληνικά (Greek)",
// //     "Română (Romanian)",
// //     "עברית (Hebrew)",
// //     "Bahasa Indonesia (Indonesian)",
// //     "Bahasa Melayu (Malay)",
// //     "Filipino (Tagalog)",
// //     "Afrikaans",
// //     "Swahili",
// //     "Zulu",
// //     "Amharic",
// //     "Yoruba",
// //     "Igbo",
// //   ];

// //   const categories = [
// //     { id: "all", icon: "💬", label: "All", color: "pink" },
// //     { id: "diet", icon: "🥗", label: "Diet", color: "green" },
// //     { id: "exercise", icon: "🧘", label: "Exercise", color: "purple" },
// //     { id: "pain", icon: "💊", label: "Pain", color: "red" },
// //     { id: "hygiene", icon: "🧼", label: "Hygiene", color: "blue" },
// //     { id: "emotional", icon: "💗", label: "Support", color: "pink" },
// //   ];

// //   const quickQuestions = [
// //     { text: "What should I eat?", category: "diet" },
// //     { text: "Best exercises?", category: "exercise" },
// //     { text: "Manage period pain?", category: "pain" },
// //     { text: "Hygiene practices?", category: "hygiene" },
// //     { text: "Feeling emotional", category: "emotional" },
// //   ];

// //   // Check device type and online/offline status
// //   useEffect(() => {
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };

// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);

// //     const handleOnline = () => setIsOnline(true);
// //     const handleOffline = () => setIsOnline(false);

// //     window.addEventListener("online", handleOnline);
// //     window.addEventListener("offline", handleOffline);

// //     return () => {
// //       window.removeEventListener("resize", checkMobile);
// //       window.removeEventListener("online", handleOnline);
// //       window.removeEventListener("offline", handleOffline);
// //     };
// //   }, []);

// //   // Auto scroll to bottom
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSendMessage = async (quickMsg = null) => {
// //     const msgText = quickMsg || message;
// //     if (!msgText.trim()) return;

// //     // Add user message
// //     const newMessage = {
// //       type: "user",
// //       text: msgText,
// //       time: new Date().toLocaleTimeString("en-US", {
// //         hour: "2-digit",
// //         minute: "2-digit",
// //       }),
// //     };
// //     setMessages((prev) => [...prev, newMessage]);
// //     setMessage("");
// //     setIsTyping(true);

// //     try {
// //       const response = await fetch("http://127.0.0.1:8000/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           question: msgText,
// //           language: language || "en",
// //           user_description: `
// //           ${userData?.user_profile?.name} is a ${
// //             userData?.user_profile?.age
// //           }-year-old ${(
// //             userData?.user_profile?.maritalStatus || ""
// //           ).toLowerCase()} girl who follows a ${(
// //             userData?.user_profile?.dietType || ""
// //           ).toLowerCase()} diet.

// // She started her first period at age ${userData?.user_profile?.firstPeriodAge}
// // and currently has an average cycle length of ${
// //             userData?.user_profile?.cycle_length
// //           } days
// // with a period duration of around ${
// //             userData?.user_profile?.period_duration
// //           } days.

// // Her recent mood suggests she often feels ${(
// //             userData?.user_profile?.mood || ""
// //           ).toLowerCase()}, and she rates her cramp severity at ${
// //             userData?.user_profile?.crampSeverity
// //           }/10.

// // She prefers ${
// //             userData?.user_profile?.preferredHealing?.join(", ") ||
// //             "no specific methods"
// //           } for comfort and avoids foods she is allergic to, such as ${
// //             userData?.user_profile?.allergies?.join(", ") || "none"
// //           }.

// // This information helps personalize period, nutrition, and mood support for her.
// // `,
// //         }),
// //       });

// //       if (!response.ok) throw new Error("Server error");
// //       const data = await response.json();
// //       const botReply = data.answer?.replace(/\*/g, "") || "Sorry, try again.";
// //       console.log(data);

// //       // 🧠 Bot reply from backend
// //       const botMessage = {
// //         type: "bot",
// //         text: botReply || "Sorry, I couldn't understand that.",
// //         time: new Date().toLocaleTimeString("en-US", {
// //           hour: "2-digit",
// //           minute: "2-digit",
// //         }),
// //       };

// //       setMessages((prev) => [...prev, botMessage]);
// //     } catch (error) {
// //       console.error("Chat error:", error);
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           type: "bot",
// //           text: "⚠️ Sorry, I'm having trouble connecting to the server.",
// //           time: new Date().toLocaleTimeString("en-US", {
// //             hour: "2-digit",
// //             minute: "2-digit",
// //           }),
// //         },
// //       ]);
// //     } finally {
// //       setIsTyping(false);
// //     }
// //   };

// //   // Floating Widget (Closed State)
// //   if (!isOpen) {
// //     return (
// //       <>
// //         {pathname == "/dashboard" ? (
// //           <>
// //             <button
// //               onClick={() => setIsOpen(true)}
// //               className="py-3 px-6 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
// //               style={{
// //                 background: "rgba(255,255,255,0.2)",
// //                 backdropFilter: "blur(8px)",
// //                 border: "1.5px solid rgba(255,255,255,0.4)",
// //                 color: "#fff",
// //               }}
// //             >
// //               <MessageCircle className="w-5 h-5" /> {text}
// //             </button>
// //           </>
// //         ) : (
// //           <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
// //             <button
// //               onClick={() => setIsOpen(true)}
// //               className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 transform hover:scale-110 active:scale-95 relative group"
// //               aria-label="Open chat"
// //             >
// //               <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
// //               <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold animate-pulse">
// //                 1
// //               </span>

// //               {/* Tooltip - Hidden on mobile */}
// //               <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
// //                 <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
// //                   Chat with AI Assistant 💜
// //                   <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
// //                 </div>
// //               </div>
// //             </button>
// //           </div>
// //         )}
// //       </>
// //     );
// //   }

// //   // Full Chat Window (Open State)
// //   return (
// //     <div
// //       className={`fixed z-50 transition-all duration-300 ${
// //         isMobile || isFullScreen
// //           ? "inset-0"
// //           : "bottom-4 right-4 md:bottom-6 md:right-6 w-full max-w-sm md:max-w-md h-[calc(100vh-2rem)] md:h-[600px]"
// //       }`}
// //     >
// //       <div className="bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
// //         {/* Header */}
// //         <div className="bg-linear-to-r from-pink-500 to-purple-500 p-3 md:p-4">
// //           <div className="flex items-center justify-between mb-2 md:mb-3">
// //             <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
// //               {/* Back button for mobile */}
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="md:hidden text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors shrink-0"
// //                 aria-label="Close chat"
// //               >
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>

// //               <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shrink-0">
// //                 <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
// //               </div>
// //               <div className="min-w-0 flex-1">
// //                 <h3 className="text-white font-semibold text-sm md:text-base truncate">
// //                   PeriodCare AI
// //                 </h3>
// //                 <div className="flex items-center space-x-1 text-[10px] md:text-xs">
// //                   {isOnline ? (
// //                     <>
// //                       <Wifi className="w-3 h-3 text-green-300 shrink-0" />
// //                       <span className="text-green-200">Online</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <WifiOff className="w-3 h-3 text-red-300 shrink-0" />
// //                       <span className="text-red-200">Offline</span>
// //                     </>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex items-center space-x-1 md:space-x-2 shrink-0">
// //               {/* Language Selector */}
// //               <select
// //                 value={language}
// //                 onChange={(e) => setLanguage(e.target.value)}
// //                 className="bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-1 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
// //                 aria-label="Select Language"
// //               >
// //                 {languages.map((lang) => (
// //                   <option key={lang} value={lang} className="text-gray-900">
// //                     {lang}
// //                   </option>
// //                 ))}
// //               </select>

// //               {/* Desktop controls */}
// //               <button
// //                 onClick={() => setIsFullScreen(!isFullScreen)}
// //                 className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
// //                 aria-label={isFullScreen ? "Minimize" : "Maximize"}
// //               >
// //                 {isFullScreen ? (
// //                   <Minimize2 className="w-4 h-4" />
// //                 ) : (
// //                   <Maximize2 className="w-4 h-4" />
// //                 )}
// //               </button>

// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
// //                 aria-label="Close chat"
// //               >
// //                 <X className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Categories */}
// //           <div className="flex space-x-1.5 md:space-x-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat.id}
// //                 onClick={() => setActiveCategory(cat.id)}
// //                 className={`flex items-center space-x-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
// //                   activeCategory === cat.id
// //                     ? "bg-white text-pink-600 shadow-lg"
// //                     : "bg-white/20 text-white hover:bg-white/30 active:bg-white/40"
// //                 }`}
// //               >
// //                 <span className="text-xs md:text-sm">{cat.icon}</span>
// //                 <span className="hidden sm:inline">{cat.label}</span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Offline Banner */}
// //         {!isOnline && (
// //           <div className="bg-amber-100 border-b border-amber-200 px-3 md:px-4 py-2 flex items-center space-x-2">
// //             <WifiOff className="w-3 h-3 md:w-4 md:h-4 text-amber-700 shrink-0" />
// //             <p className="text-[10px] md:text-xs text-amber-800 font-medium">
// //               You&rsquo;re offline — chatbot will sync once connected.
// //             </p>
// //           </div>
// //         )}

// //         {/* Messages Area */}
// //         <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-linear-to-b from-pink-50/30 to-white">
// //           {messages.map((msg, idx) => (
// //             <div
// //               key={idx}
// //               className={`flex ${
// //                 msg.type === "user" ? "justify-end" : "justify-start"
// //               }`}
// //             >
// //               <div
// //                 className={`max-w-[85%] md:max-w-[80%] ${
// //                   msg.type === "user" ? "order-2" : ""
// //                 }`}
// //               >
// //                 <div
// //                   className={`px-3 md:px-4 py-2 md:py-3 rounded-2xl ${
// //                     msg.type === "bot"
// //                       ? "bg-pink-100 text-gray-800 rounded-tl-none"
// //                       : "bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-tr-none"
// //                   }`}
// //                 >
// //                   <p className="text-xs md:text-sm whitespace-pre-line wrap-break-word">
// //                     {msg.text}
// //                   </p>
// //                 </div>
// //                 <p className="text-[10px] md:text-xs text-gray-500 mt-1 px-2">
// //                   {msg.time}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}

// //           {/* Typing Indicator */}
// //           {isTyping && (
// //             <div className="flex justify-start">
// //               <div className="bg-pink-100 px-3 md:px-4 py-2 md:py-3 rounded-2xl rounded-tl-none">
// //                 <div className="flex space-x-1.5 md:space-x-2">
// //                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"></div>
// //                   <div
// //                     className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
// //                     style={{ animationDelay: "0.2s" }}
// //                   ></div>
// //                   <div
// //                     className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-bounce"
// //                     style={{ animationDelay: "0.4s" }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           <div ref={messagesEndRef} />
// //         </div>

// //         {/* Quick Questions */}
// //         <div className="px-3 md:px-4 py-2 bg-pink-50 border-t border-pink-100">
// //           <p className="text-[10px] md:text-xs text-gray-600 font-medium mb-1.5 md:mb-2">
// //             Quick questions:
// //           </p>
// //           <div className="flex flex-wrap gap-1.5 md:gap-2">
// //             {quickQuestions
// //               .filter(
// //                 (q) =>
// //                   activeCategory === "all" || q.category === activeCategory,
// //               )
// //               .slice(0, isMobile ? 2 : 3)
// //               .map((q, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => handleSendMessage(q.text)}
// //                   className="bg-white border border-pink-200 rounded-full px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-gray-700 hover:bg-pink-100 hover:border-pink-300 active:bg-pink-200 transition-colors"
// //                 >
// //                   {q.text}
// //                 </button>
// //               ))}
// //           </div>
// //         </div>

// //         {/* Input Area */}
// //         <div className="p-3 md:p-4 bg-white border-t border-gray-200">
// //           <div className="flex items-end space-x-2">
// //             <input
// //               type="text"
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //               onKeyPress={(e) =>
// //                 e.key === "Enter" && !e.shiftKey && handleSendMessage()
// //               }
// //               placeholder={
// //                 isOnline ? "Type your message..." : "You're offline..."
// //               }
// //               disabled={!isOnline}
// //               className="flex-1 px-3 md:px-4 py-2 md:py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-xs md:text-sm"
// //             />
// //             <button
// //               onClick={() => handleSendMessage()}
// //               disabled={!isOnline || !message.trim()}
// //               className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-2 md:p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shrink-0"
// //               aria-label="Send message"
// //             >
// //               <Send className="w-4 h-4 md:w-5 md:h-5" />
// //             </button>
// //             <button
// //               disabled={!isOnline}
// //               className="bg-pink-100 text-pink-600 p-2 md:p-3 rounded-full hover:bg-pink-200 active:bg-pink-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
// //               aria-label="Voice input"
// //             >
// //               <Mic className="w-4 h-4 md:w-5 md:h-5" />
// //             </button>
// //           </div>
// //           <p className="text-[10px] md:text-xs text-gray-500 mt-1.5 md:mt-2 text-center">
// //             {isMobile
// //               ? "Secured & Private 🔒"
// //               : "Press Enter to send • Secured & Private 🔒"}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

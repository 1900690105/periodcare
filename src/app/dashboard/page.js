"use client";
import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Calendar,
  Activity,
  User,
  Settings,
  Download,
  ChevronRight,
  Bell,
  Globe,
  BarChart3,
  Target,
  Sparkles,
  Stethoscope,
  AlertCircle,
  Moon,
  Sun,
  Wind,
  Leaf,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import AIChatbot from "../components/ChatBot";

/* ─────────────────────────────────────────────
   PHASE THEME SYSTEM
   Each phase = unique CSS variables + personality
───────────────────────────────────────────── */
const PHASE_THEMES = {
  Menstrual: {
    name: "Menstrual",
    emoji: "🌑",
    icon: <Moon className="w-6 h-6" />,
    tagline: "Rest. Restore. Release.",
    description: "Honor your body's natural renewal",
    cssVars: {
      "--phase-bg": "#1a0a0e",
      "--phase-bg2": "#2d1018",
      "--phase-surface": "#2a1015",
      "--phase-card": "#1f0c11",
      "--phase-card-border": "#5c1a28",
      "--phase-accent": "#c0392b",
      "--phase-accent2": "#8e1a2b",
      "--phase-text": "#f5d0d8",
      "--phase-text-muted": "#9b6b74",
      "--phase-text-strong": "#ffeef2",
      "--phase-glow": "rgba(192,57,43,0.3)",
      "--phase-hero-from": "#7b1530",
      "--phase-hero-to": "#2d0810",
      "--phase-progress": "#c0392b",
      "--phase-badge-bg": "rgba(192,57,43,0.2)",
      "--phase-badge-text": "#f5a0ae",
      "--phase-stat-bg": "rgba(44,16,21,0.8)",
      "--phase-dot": "#e74c3c",
    },
    isDark: true,
    decorativeSymbol: "○",
    // font: "'Georgia', 'Times New Roman', serif",

    wellnessTips: [
      {
        emoji: "🍵",
        title: "Warm Nourishment",
        desc: "Ginger tea, warm soups & iron-rich foods",
        color: "#c0392b",
      },
      {
        emoji: "🛁",
        title: "Rest & Restore",
        desc: "Gentle yin yoga or full rest today",
        color: "#8e1a2b",
      },
      {
        emoji: "💧",
        title: "Hydration",
        desc: "Warm water with lemon & electrolytes",
        color: "#a93226",
      },
      {
        emoji: "🕯️",
        title: "Inner Peace",
        desc: "Journaling & candlelit meditation",
        color: "#7b241c",
      },
    ],
  },

  Follicular: {
    name: "Follicular",
    emoji: "🌱",
    icon: <Leaf className="w-6 h-6" />,
    tagline: "Bloom. Begin. Rise.",
    description: "Your energy is awakening",
    cssVars: {
      "--phase-bg": "#f0faf4",
      "--phase-bg2": "#e8f5ee",
      "--phase-surface": "#ffffff",
      "--phase-card": "#ffffff",
      "--phase-card-border": "#a8d5b5",
      "--phase-accent": "#2e7d52",
      "--phase-accent2": "#52b788",
      "--phase-text": "#1b4332",
      "--phase-text-muted": "#52796f",
      "--phase-text-strong": "#0d2818",
      "--phase-glow": "rgba(82,183,136,0.25)",
      "--phase-hero-from": "#52b788",
      "--phase-hero-to": "#2d6a4f",
      "--phase-progress": "#52b788",
      "--phase-badge-bg": "rgba(82,183,136,0.15)",
      "--phase-badge-text": "#1b4332",
      "--phase-stat-bg": "rgba(232,245,238,0.9)",
      "--phase-dot": "#52b788",
    },
    isDark: false,
    decorativeSymbol: "◇",
    // font: "'Palatino Linotype', 'Book Antiqua', serif",
    wellnessTips: [
      {
        emoji: "🥬",
        title: "Fresh Foods",
        desc: "Leafy greens, sprouts & seeds for energy",
        color: "#2e7d52",
      },
      {
        emoji: "🏃",
        title: "Active Movement",
        desc: "Running, cycling or dance class",
        color: "#52b788",
      },
      {
        emoji: "🌊",
        title: "Hydrate Well",
        desc: "Cool water with cucumber & mint",
        color: "#48cae4",
      },
      {
        emoji: "📓",
        title: "New Goals",
        desc: "Plan & journal — your mind is sharp",
        color: "#74c69d",
      },
    ],
  },

  Ovulation: {
    name: "Ovulation",
    emoji: "☀️",
    icon: <Sun className="w-6 h-6" />,
    tagline: "Shine. Connect. Lead.",
    description: "You're at your most radiant",
    cssVars: {
      "--phase-bg": "#fffbf0",
      "--phase-bg2": "#fff8e8",
      "--phase-surface": "#ffffff",
      "--phase-card": "#ffffff",
      "--phase-card-border": "#f4c94e",
      "--phase-accent": "#d97706",
      "--phase-accent2": "#f59e0b",
      "--phase-text": "#451a03",
      "--phase-text-muted": "#92400e",
      "--phase-text-strong": "#1c0a00",
      "--phase-glow": "rgba(245,158,11,0.3)",
      "--phase-hero-from": "#f59e0b",
      "--phase-hero-to": "#d97706",
      "--phase-progress": "#f59e0b",
      "--phase-badge-bg": "rgba(245,158,11,0.15)",
      "--phase-badge-text": "#451a03",
      "--phase-stat-bg": "rgba(255,248,232,0.9)",
      "--phase-dot": "#f59e0b",
    },
    isDark: false,
    decorativeSymbol: "◉",
    // font: "'Trebuchet MS', 'Gill Sans', sans-serif",
    wellnessTips: [
      {
        emoji: "🥑",
        title: "Peak Nutrition",
        desc: "Healthy fats, eggs & vibrant salads",
        color: "#d97706",
      },
      {
        emoji: "💃",
        title: "High Intensity",
        desc: "HIIT, strength training or dancing",
        color: "#f59e0b",
      },
      {
        emoji: "🍊",
        title: "Energize",
        desc: "Fresh juices & vitamin C boost",
        color: "#ea580c",
      },
      {
        emoji: "🌟",
        title: "Social Energy",
        desc: "Connect, create & collaborate",
        color: "#b45309",
      },
    ],
  },

  Luteal: {
    name: "Luteal",
    emoji: "🌙",
    icon: <Wind className="w-6 h-6" />,
    tagline: "Ground. Reflect. Soften.",
    description: "Turn inward and find your calm",
    cssVars: {
      "--phase-bg": "#faf7ff",
      "--phase-bg2": "#f3eeff",
      "--phase-surface": "#ffffff",
      "--phase-card": "#ffffff",
      "--phase-card-border": "#c4b5fd",
      "--phase-accent": "#7c3aed",
      "--phase-accent2": "#a78bfa",
      "--phase-text": "#2d1b69",
      "--phase-text-muted": "#6d5a9c",
      "--phase-text-strong": "#1a0a40",
      "--phase-glow": "rgba(167,139,250,0.25)",
      "--phase-hero-from": "#7c3aed",
      "--phase-hero-to": "#4c1d95",
      "--phase-progress": "#a78bfa",
      "--phase-badge-bg": "rgba(167,139,250,0.15)",
      "--phase-badge-text": "#2d1b69",
      "--phase-stat-bg": "rgba(243,238,255,0.9)",
      "--phase-dot": "#a78bfa",
    },
    isDark: false,
    decorativeSymbol: "◑",
    // font: "'Garamond', 'EB Garamond', serif",
    wellnessTips: [
      {
        emoji: "🍫",
        title: "Comfort Foods",
        desc: "Dark chocolate, magnesium & complex carbs",
        color: "#7c3aed",
      },
      {
        emoji: "🧘",
        title: "Slow Movement",
        desc: "Restorative yoga & long walks",
        color: "#a78bfa",
      },
      {
        emoji: "🫖",
        title: "Herbal Care",
        desc: "Chamomile, raspberry leaf & calm teas",
        color: "#6d28d9",
      },
      {
        emoji: "🌌",
        title: "Inner Work",
        desc: "Breathwork & reflective journaling",
        color: "#5b21b6",
      },
    ],
  },
};

/* ── Helpers ── */
function daysBetween(startDate) {
  const today = new Date();
  const start = new Date(startDate);
  return Math.floor((today.getTime() - start.getTime()) / 86400000) + 1;
}
function getPhase(day, cycleLength) {
  const ovDay = Math.round(cycleLength / 2);
  if (day <= 5) return "Menstrual";
  if (day <= ovDay - 2) return "Follicular";
  if (day <= ovDay + 2) return "Ovulation";
  return "Luteal";
}
function crampLabel(s) {
  if (s <= 2) return { text: "Mild", hex: "#22c55e" };
  if (s <= 5) return { text: "Moderate", hex: "#f59e0b" };
  if (s <= 7) return { text: "Strong", hex: "#f97316" };
  return { text: "Severe", hex: "#ef4444" };
}
const moodEmoji = {
  Happy: "😊",
  Calm: "😌",
  Anxious: "😰",
  Sad: "😢",
  Irritable: "😤",
  Energetic: "⚡",
  Tired: "😴",
  Neutral: "😐",
};

/* ── Main Component ── */
export default function UserDashboard() {
  const [language, setLanguage] = useState("en");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDay, setCurrentDay] = useState(1);
  const [currentPhase, setCurrentPhase] = useState("Menstrual");
  const [daysUntilPeriod, setDaysUntilPeriod] = useState(0);
  const [cycleProgress, setCycleProgress] = useState(0);
  const [previewPhase, setPreviewPhase] = useState(null);
  const router = useRouter();

  const activePhase = previewPhase || currentPhase;
  const theme = PHASE_THEMES[activePhase];
  const { isDark } = theme;
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/get-profile", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      console.log(data);

      setProfile(data);
      const cycleLen = parseInt(data.cycle_length) || 28;
      const day = data.period_start
        ? ((daysBetween(data.period_start) - 1) % cycleLen) + 1
        : 1;
      setCurrentDay(day);
      setCurrentPhase(getPhase(day, cycleLen));
      setDaysUntilPeriod(cycleLen - day);
      setCycleProgress((day / cycleLen) * 100);
      setLanguage(data.language === "Hindi" ? "hi" : "en");
    } catch {
      const demo = {
        name: "Priya",
        age: "24",
        weight: "58",
        language: "English",
        bloodGroup: "B+",
        state: "Maharashtra",
        country: "India",
        maritalStatus: "Single",
        firstPeriodAge: "13",
        dietType: "Vegetarian",
        allergies: ["Dairy"],
        goals: "Regulate cycle",
        preferredHealing: ["Yoga", "Herbal"],
        knownConditions: ["PCOS"],
        period_start: new Date(Date.now() - 10 * 86400000).toISOString(),
        cycle_length: "28",
        period_duration: "5",
        symptoms: ["Cramps", "Bloating"],
        mood: "Calm",
        crampSeverity: 4,
      };
      setProfile(demo);
      setCurrentDay(11);
      setCurrentPhase("Follicular");
      setDaysUntilPeriod(17);
      setCycleProgress((11 / 28) * 100);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser.email);
        console.log(firebaseUser);
        fetchProfile();
      } else {
        router.push("/userauth");
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Inject CSS variables on phase change
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([k, v]) =>
      root.style.setProperty(k, v),
    );
  }, [activePhase, theme.cssVars]);

  const cycleLength = parseInt(profile?.cycle_length) || 28;
  const cramp = profile?.crampSeverity
    ? crampLabel(profile.crampSeverity)
    : null;

  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Gynecologist",
      available: true,
      rating: 4.8,
    },
    {
      name: "Dr. Anjali Verma",
      specialty: "Endocrinologist",
      available: false,
      rating: 4.9,
    },
    {
      name: "Dr. Meera Patel",
      specialty: "Nutritionist",
      available: true,
      rating: 4.7,
    },
  ];

  if (loading) {
    return (
      <div
        style={{ background: "#1a0a0e" }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <div
            className="w-16 h-16 border-4 rounded-full animate-spin mx-auto"
            style={{ borderColor: "#5c1a28", borderTopColor: "#c0392b" }}
          />
          <p
            style={{ color: "#f5d0d8", fontFamily: "Georgia, serif" }}
            className="text-lg"
          >
            Loading your wellness journey…
          </p>
        </div>
      </div>
    );
  }

  /* ── Themed primitives ── */
  const Card = ({ children, className = "", style = {} }) => (
    <div
      className={`rounded-3xl p-6 md:p-8 transition-all duration-700 ${className}`}
      style={{
        background: "var(--phase-surface)",
        border: "1.5px solid var(--phase-card-border)",
        boxShadow: "0 4px 32px var(--phase-glow)",
        ...style,
      }}
    >
      {children}
    </div>
  );

  const StatBox = ({ icon, value, label }) => (
    <div
      className="rounded-2xl p-5 space-y-2 transition-all duration-700"
      style={{
        background: "var(--phase-stat-bg)",
        border: "1px solid var(--phase-card-border)",
      }}
    >
      <div style={{ color: "var(--phase-accent)" }}>{icon}</div>
      <p
        className="text-3xl font-bold"
        style={{ color: "var(--phase-text-strong)" }}
      >
        {value}
      </p>
      <p className="text-sm" style={{ color: "var(--phase-text-muted)" }}>
        {label}
      </p>
    </div>
  );

  const Badge = ({ children }) => (
    <span
      className="text-xs px-3 py-1 rounded-full"
      style={{
        background: "var(--phase-badge-bg)",
        color: "var(--phase-badge-text)",
      }}
    >
      {children}
    </span>
  );

  const PrimaryBtn = ({
    children,
    className = "",
    style: s = {},
    ...props
  }) => (
    <button
      className={`py-3 px-6 rounded-xl font-semibold transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))",
        color: "#fff",
        ...s,
      }}
      {...props}
    >
      {children}
    </button>
  );

  const energyLevel =
    activePhase === "Ovulation"
      ? "Peak"
      : activePhase === "Follicular"
        ? "High"
        : activePhase === "Menstrual"
          ? "Low"
          : "Moderate";

  return (
    <>
      <style>{`
        .phase-transition { transition: background 0.8s ease, color 0.5s ease; }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseGlow { 0%,100%{opacity:0.6} 50%{opacity:1} }
        .phase-particle { animation: floatUp 4s ease-in-out infinite; }
        .glow-pulse { animation: pulseGlow 3s ease-in-out infinite; }
        .progress-ring { transition: stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-3px); transition: transform 0.2s ease; }
      `}</style>

      <div
        className="min-h-screen phase-transition"
        style={{
          background: `linear-gradient(160deg, var(--phase-bg), var(--phase-bg2))`,
        }}
      >
        {/* ── Phase Switcher Bar ── */}
        <div
          className="sticky top-0 z-50 backdrop-blur-md border-b phase-transition"
          style={{
            background: isDark
              ? "rgba(26,10,14,0.92)"
              : "rgba(255,255,255,0.88)",
            borderColor: "var(--phase-card-border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-2">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--phase-text-muted)" }}
            >
              PeriodCareForYou
            </span>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(PHASE_THEMES).map((p) => (
                <button
                  key={p}
                  onClick={() =>
                    setPreviewPhase(
                      p === activePhase && previewPhase ? null : p,
                    )
                  }
                  className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                  style={{
                    background:
                      p === activePhase
                        ? "var(--phase-accent)"
                        : "var(--phase-badge-bg)",
                    color:
                      p === activePhase ? "#fff" : "var(--phase-text-muted)",
                    border: "1px solid var(--phase-card-border)",
                  }}
                >
                  {PHASE_THEMES[p].emoji} {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* ═══ HERO ═══ */}
          <div
            className="rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))`,
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-15 phase-particle"
              style={{
                background: "rgba(255,255,255,0.3)",
                transform: "translate(30%,-30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10"
              style={{
                background: "rgba(255,255,255,0.2)",
                transform: "translate(-30%,30%)",
              }}
            />
            <div
              className="absolute top-6 right-10 text-[110px] opacity-10 leading-none select-none pointer-events-none"
              style={{ color: "#fff" }}
            >
              {theme.decorativeSymbol}
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/40">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      Hi, {profile?.name || "there"}!
                    </h1>
                    <p className="text-white/70 text-sm italic">
                      {theme.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/15 backdrop-blur rounded-2xl p-4 w-fit">
                  <span className="text-4xl phase-particle">{theme.emoji}</span>
                  <div>
                    <p className="text-xl font-bold text-white">
                      Day {currentDay} · {theme.name} Phase
                    </p>
                    <p className="text-white/80 text-sm">{theme.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {profile?.age && (
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {profile.age} yrs
                    </span>
                  )}
                  {profile?.bloodGroup && (
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      🩸 {profile.bloodGroup}
                    </span>
                  )}
                  {profile?.mood && (
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {moodEmoji[profile.mood]} {profile.mood}
                    </span>
                  )}
                  {profile?.dietType && (
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      🌿 {profile.dietType}
                    </span>
                  )}
                </div>

                {profile?.symptoms?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {profile.symptoms.map((s, i) => (
                      <span
                        key={i}
                        className="bg-black/20 border border-white/20 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {profile?.knownConditions?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {profile.knownConditions.map((c, i) => (
                      <span
                        key={i}
                        className="bg-red-500/30 border border-red-300/40 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {c}
                      </span>
                    ))}
                  </div>
                )}

                <AIChatbot lan={"english"} text={"Chat with PeriodCare AI"} />
              </div>

              {/* Circular tracker */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-60 h-60">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="120"
                      cy="120"
                      r="104"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="120"
                      cy="120"
                      r="104"
                      stroke="white"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 104}`}
                      strokeDashoffset={`${2 * Math.PI * 104 * (1 - cycleProgress / 100)}`}
                      strokeLinecap="round"
                      className="progress-ring"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl phase-particle">
                      {theme.emoji}
                    </span>
                    <p className="text-4xl font-bold text-white mt-1">
                      {currentDay}
                    </p>
                    <p className="text-white/70 text-xs">
                      of {cycleLength} days
                    </p>
                    <p className="text-white/90 text-sm font-semibold mt-1">
                      {theme.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ CYCLE OVERVIEW + AI ═══ */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--phase-text-strong)",
                  }}
                >
                  Cycle Overview
                </h2>
                <button
                  className="text-sm font-semibold flex items-center gap-1"
                  style={{ color: "var(--phase-accent)" }}
                >
                  Full Tracker <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <StatBox
                  icon={<Calendar className="w-6 h-6" />}
                  value={daysUntilPeriod}
                  label="Days until period"
                />
                <StatBox
                  icon={<Activity className="w-6 h-6" />}
                  value={energyLevel}
                  label="Energy Level"
                />
                <StatBox
                  icon={
                    <span className="text-2xl leading-none">
                      {moodEmoji[profile?.mood] || "😊"}
                    </span>
                  }
                  value={profile?.mood || "Good"}
                  label="Mood Today"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                {[
                  { v: `${cycleLength}d`, l: "Cycle Length" },
                  {
                    v: `${parseInt(profile?.period_duration) || 5}d`,
                    l: "Period Duration",
                  },
                  {
                    v: profile?.firstPeriodAge
                      ? `Age ${profile.firstPeriodAge}`
                      : "—",
                    l: "First Period",
                  },
                ].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3"
                    style={{
                      background: "var(--phase-stat-bg)",
                      border: "1px solid var(--phase-card-border)",
                    }}
                  >
                    <p
                      className="text-xl font-bold"
                      style={{
                        color: "var(--phase-text-strong)",
                      }}
                    >
                      {x.v}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--phase-text-muted)" }}
                    >
                      {x.l}
                    </p>
                  </div>
                ))}
              </div>
              {/* Phase timeline */}
              <div>
                <div className="flex justify-between mb-3">
                  {Object.keys(PHASE_THEMES).map((p) => (
                    <div
                      key={p}
                      className={`text-center transition-all duration-500 ${p === activePhase ? "scale-110" : "opacity-40"}`}
                    >
                      <p
                        className="text-xs font-bold"
                        style={{
                          color:
                            p === activePhase
                              ? "var(--phase-accent)"
                              : "var(--phase-text-muted)",
                        }}
                      >
                        {p}
                      </p>
                      <p className="text-xl">{PHASE_THEMES[p].emoji}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{ background: "var(--phase-stat-bg)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${cycleProgress}%`,
                      background:
                        "linear-gradient(90deg, var(--phase-hero-from), var(--phase-progress))",
                    }}
                  />
                </div>
                <p
                  className="text-xs mt-1 text-right"
                  style={{ color: "var(--phase-text-muted)" }}
                >
                  {Math.round(cycleProgress)}% through cycle
                </p>
              </div>
            </Card>

            {/* AI Panel */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-xl font-bold"
                  style={{
                    color: "var(--phase-text-strong)",
                  }}
                >
                  AI Assistant
                </h3>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center glow-pulse"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>

              {profile?.goals && (
                <div
                  className="mb-4 p-3 rounded-xl flex items-start gap-2"
                  style={{
                    background: "var(--phase-stat-bg)",
                    border: "1px solid var(--phase-card-border)",
                  }}
                >
                  <Target
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "var(--phase-accent)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "var(--phase-text-muted)" }}
                    >
                      Your Goal
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--phase-text)" }}
                    >
                      {profile.goals}
                    </p>
                  </div>
                </div>
              )}

              {profile?.preferredHealing?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {profile.preferredHealing.map((h, i) => (
                    <Badge key={i}>{h}</Badge>
                  ))}
                </div>
              )}

              {profile?.allergies?.length > 0 && (
                <div
                  className="mb-4 p-3 rounded-xl flex items-start gap-2"
                  style={{
                    background: "rgba(234,179,8,0.08)",
                    border: "1px solid rgba(234,179,8,0.3)",
                  }}
                >
                  <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                  <p className="text-xs" style={{ color: "var(--phase-text)" }}>
                    <span className="font-semibold">Allergies:</span>{" "}
                    {profile.allergies.join(", ")}
                  </p>
                </div>
              )}

              <div className="space-y-3 mb-4">
                {[
                  {
                    msg: "What should I eat during my period?",
                    time: "2h ago",
                  },
                  { msg: "How to reduce cramps naturally?", time: "1 day ago" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3"
                    style={{
                      background: "var(--phase-stat-bg)",
                      border: "1px solid var(--phase-card-border)",
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: "var(--phase-text)" }}
                    >
                      {c.msg}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--phase-text-muted)" }}
                    >
                      {c.time}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full bg-amber-300">
                <AIChatbot lan={"english"} text={"Continue Chat"} />
              </div>
            </Card>
          </div>

          {/* ═══ PHASE WELLNESS TIPS ═══ */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold mb-1"
              style={{
                color: "var(--phase-text-strong)",
              }}
            >
              {theme.name} Phase Wellness
            </h2>
            <p
              className="text-sm mb-5 italic"
              style={{ color: "var(--phase-text-muted)" }}
            >
              {theme.description}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {theme.wellnessTips.map((tip, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 cursor-pointer card-hover"
                  style={{
                    background: isDark
                      ? `linear-gradient(135deg, ${tip.color}25, ${tip.color}12)`
                      : `linear-gradient(135deg, ${tip.color}12, ${tip.color}06)`,
                    border: `1.5px solid ${tip.color}45`,
                    boxShadow: `0 4px 20px ${tip.color}18`,
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div className="text-4xl mb-3">{tip.emoji}</div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      color: isDark ? "#fff" : tip.color,
                    }}
                  >
                    {tip.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.65)"
                        : "var(--phase-text-muted)",
                    }}
                  >
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ HEALTH PROFILE STRIP ═══ */}
          <Card className="mb-8">
            <h2
              className="text-xl font-bold mb-4"
              style={{
                color: "var(--phase-text-strong)",
              }}
            >
              Your Health Profile
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              {[
                {
                  label: "Age",
                  value: profile?.age ? `${profile.age} yrs` : "—",
                },
                {
                  label: "Weight",
                  value: profile?.weight ? `${profile.weight} kg` : "—",
                },
                { label: "Blood Group", value: profile?.bloodGroup || "—" },
                { label: "Diet", value: profile?.dietType || "—" },
                {
                  label: "Marital Status",
                  value: profile?.maritalStatus || "—",
                },
                {
                  label: "Location",
                  value: profile?.state || profile?.country || "—",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3"
                  style={{
                    background: "var(--phase-stat-bg)",
                    border: "1px solid var(--phase-card-border)",
                  }}
                >
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--phase-text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-bold text-sm"
                    style={{
                      color: "var(--phase-text-strong)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* ═══ DOCTOR + ANALYTICS ═══ */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))",
                  }}
                >
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--phase-text-strong)",
                  }}
                >
                  Consult Doctor
                </h2>
              </div>

              {profile?.knownConditions?.length > 0 && (
                <div
                  className="mb-4 p-3 rounded-xl flex items-start gap-2"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.25)",
                  }}
                >
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-sm" style={{ color: "var(--phase-text)" }}>
                    Relevant for:{" "}
                    <span className="font-semibold">
                      {profile.knownConditions.join(", ")}
                    </span>
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {doctors.map((doc, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 card-hover"
                    style={{
                      border: "1.5px solid var(--phase-card-border)",
                      background: "var(--phase-stat-bg)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: "var(--phase-badge-bg)",
                          border: "1px solid var(--phase-card-border)",
                        }}
                      >
                        <User
                          className="w-6 h-6"
                          style={{ color: "var(--phase-accent)" }}
                        />
                      </div>
                      <div className="flex-1">
                        <p
                          className="font-bold text-sm"
                          style={{
                            color: "var(--phase-text-strong)",
                          }}
                        >
                          {doc.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--phase-text-muted)" }}
                        >
                          {doc.specialty}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: doc.available
                                ? "var(--phase-dot)"
                                : "#9ca3af",
                            }}
                          />
                          <span
                            className="text-xs"
                            style={{ color: "var(--phase-text-muted)" }}
                          >
                            {doc.available ? "Available" : "Busy"}
                          </span>
                          <span className="text-xs text-amber-500">
                            ⭐ {doc.rating}
                          </span>
                        </div>
                      </div>
                      <button
                        className="px-4 py-2 rounded-lg font-semibold text-xs transition-all"
                        style={
                          doc.available
                            ? {
                                background:
                                  "linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))",
                                color: "#fff",
                              }
                            : {
                                background: "var(--phase-stat-bg)",
                                color: "var(--phase-text-muted)",
                                border: "1px solid var(--phase-card-border)",
                              }
                        }
                      >
                        {doc.available ? "Chat Now" : "Book"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--phase-hero-from), var(--phase-hero-to))",
                    }}
                  >
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{
                      color: "var(--phase-text-strong)",
                    }}
                  >
                    Analytics
                  </h2>
                </div>
                <button style={{ color: "var(--phase-text-muted)" }}>
                  <Download className="w-5 h-5" />
                </button>
              </div>

              {cramp && (
                <div className="mb-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: "var(--phase-text-muted)" }}>
                      Cramp Severity
                    </span>
                    <span className="font-bold" style={{ color: cramp.hex }}>
                      {cramp.text} ({profile.crampSeverity}/10)
                    </span>
                  </div>
                  <div
                    className="w-full h-3 rounded-full overflow-hidden"
                    style={{ background: "var(--phase-stat-bg)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${profile.crampSeverity * 10}%`,
                        background:
                          "linear-gradient(90deg, #22c55e, #f59e0b, #ef4444)",
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              )}

              <div
                className="rounded-2xl p-5 mb-5"
                style={{
                  background: "var(--phase-stat-bg)",
                  border: "1px solid var(--phase-card-border)",
                }}
              >
                <div className="flex items-end justify-between h-28 gap-2">
                  {[65, 80, 70, 85, 75, 90, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg transition-all hover:opacity-80 card-hover"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(180deg, var(--phase-hero-from), var(--phase-progress))`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span
                      key={i}
                      className="flex-1 text-center text-xs"
                      style={{ color: "var(--phase-text-muted)" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <PrimaryBtn>
                  <Calendar className="w-4 h-4" /> History
                </PrimaryBtn>
                <button
                  className="py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-80"
                  style={{
                    background: "var(--phase-badge-bg)",
                    color: "var(--phase-accent)",
                    border: "1px solid var(--phase-card-border)",
                  }}
                >
                  <Download className="w-4 h-4" /> Export PDF
                </button>
              </div>
            </Card>
          </div>

          {/* ═══ QUICK SETTINGS ═══ */}
          <Card>
            <h2
              className="text-2xl font-bold mb-6"
              style={{
                color: "var(--phase-text-strong)",
              }}
            >
              Quick Settings
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <User className="w-7 h-7" />,
                  title: "Edit Profile",
                  sub: profile?.name
                    ? `${profile.name} · ${profile.age || ""}`
                    : "Update info",
                },
                {
                  icon: <Bell className="w-7 h-7" />,
                  title: "Notifications",
                  sub: "Manage alerts",
                },
                {
                  icon: <Globe className="w-7 h-7" />,
                  title: "Language",
                  sub: profile?.language || "English",
                },
                {
                  icon: <Settings className="w-7 h-7" />,
                  title: "Privacy",
                  sub: "Security settings",
                },
              ].map((item, i) => (
                <button
                  key={i}
                  className="rounded-2xl p-5 text-left group card-hover"
                  style={{
                    background: "var(--phase-stat-bg)",
                    border: "1.5px solid var(--phase-card-border)",
                  }}
                >
                  <div
                    className="mb-3 group-hover:scale-110 transition-transform"
                    style={{ color: "var(--phase-accent)" }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{
                      color: "var(--phase-text-strong)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--phase-text-muted)" }}
                  >
                    {item.sub}
                  </p>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   MessageCircle,
//   Calendar,
//   Heart,
//   TrendingUp,
//   Book,
//   Droplet,
//   Activity,
//   Moon,
//   Sun,
//   Apple,
//   Dumbbell,
//   GlassWater,
//   Smile,
//   User,
//   Settings,
//   Download,
//   ChevronRight,
//   Video,
//   Clock,
//   Award,
//   Bell,
//   Globe,
//   FileText,
//   BarChart3,
//   Target,
//   Sparkles,
//   Stethoscope,
//   Play,
//   Plus,
// } from "lucide-react";
// import NavBar from "../components/NavBar";

// export default function UserDashboard() {
//   const [userName, setUserName] = useState("");
//   const [currentDay, setCurrentDay] = useState(12);
//   const [currentPhase] = useState("Follicular");
//   const [cycleLength] = useState(28);
//   const [daysUntilPeriod] = useState(16);
//   const [language, setLanguage] = useState("en");

//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   function daysBetween(startDate) {
//     const today = new Date();

//     const start = new Date(startDate);

//     const diffMs = today.getTime() - start.getTime();

//     const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

//     return diffDays;
//   }

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("/api/get-profile", {
//           method: "GET",
//           credentials: "include", // IMPORTANT → sends cookies
//         });

//         if (!res.ok) throw new Error("Failed to fetch");

//         const data = await res.json();
//         console.log(data);

//         setProfile(data);
//         setUserName(data.name);
//         const cycleDay = daysBetween(data.period_start);
//         setCurrentDay(cycleDay);
//       } catch (err) {
//         console.error("Profile load error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Calculate cycle progress percentage
//   const cycleProgress = (currentDay / cycleLength) * 100;

//   // Phase data
//   const phaseInfo = {
//     Menstrual: { color: "from-red-400 to-pink-400", icon: "🌸", emoji: "💮" },
//     Follicular: {
//       color: "from-purple-400 to-pink-400",
//       icon: "🌱",
//       emoji: "🌷",
//     },
//     Ovulation: {
//       color: "from-amber-400 to-orange-400",
//       icon: "☀️",
//       emoji: "🌻",
//     },
//     Luteal: { color: "from-green-400 to-teal-400", icon: "🍃", emoji: "🌿" },
//   };

//   const currentPhaseInfo = phaseInfo[currentPhase];

//   // Wellness recommendations
//   const wellnessRecommendations = [
//     {
//       icon: Apple,
//       title: "Nutrition Tip",
//       description: "Eat iron-rich foods like spinach and lentils",
//       color: "from-green-400 to-emerald-400",
//       emoji: "🥗",
//     },
//     {
//       icon: Dumbbell,
//       title: "Exercise",
//       description: "Try light cardio or yoga today",
//       color: "from-purple-400 to-pink-400",
//       emoji: "🧘",
//     },
//     {
//       icon: GlassWater,
//       title: "Hydration",
//       description: "Drink 8 glasses of water today",
//       color: "from-blue-400 to-cyan-400",
//       emoji: "💧",
//     },
//     {
//       icon: Heart,
//       title: "Mood Care",
//       description: "Practice deep breathing for 5 mins",
//       color: "from-pink-400 to-rose-400",
//       emoji: "💜",
//     },
//   ];

//   // Recent AI conversations
//   const recentChats = [
//     { message: "What should I eat during my period?", time: "2h ago" },
//     { message: "How to reduce cramps naturally?", time: "1 day ago" },
//   ];

//   // Learning topics
//   const learningTopics = [
//     {
//       icon: Droplet,
//       title: "Menstrual Basics",
//       color: "from-pink-400 to-rose-400",
//       lessons: 5,
//     },
//     {
//       icon: Sparkles,
//       title: "Hygiene",
//       color: "from-blue-400 to-cyan-400",
//       lessons: 4,
//     },
//     {
//       icon: Heart,
//       title: "Wellness",
//       color: "from-purple-400 to-pink-400",
//       lessons: 6,
//     },
//     {
//       icon: Smile,
//       title: "Emotional Health",
//       color: "from-amber-400 to-orange-400",
//       lessons: 4,
//     },
//   ];

//   // Doctors
//   const doctors = [
//     {
//       name: "Dr. Priya Sharma",
//       specialty: "Gynecologist",
//       available: true,
//       rating: 4.8,
//     },
//     {
//       name: "Dr. Anjali Verma",
//       specialty: "Endocrinologist",
//       available: false,
//       rating: 4.9,
//     },
//     {
//       name: "Dr. Meera Patel",
//       specialty: "Nutritionist",
//       available: true,
//       rating: 4.7,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
//       {/* Top Navigation Bar */}
//       <NavBar language={language} setLanguage={setLanguage} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* 1. Hero / Welcome Panel */}
//         <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

//           <div className="relative grid lg:grid-cols-2 gap-8 items-center">
//             <div className="text-white space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
//                   <User className="w-8 h-8 text-pink-500" />
//                 </div>
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold">
//                     Hi, {userName}! 🌸
//                   </h1>
//                   <p className="text-pink-100">
//                     Welcome back to your wellness journey
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <p className="text-2xl font-semibold">
//                   Day {currentDay} of your cycle
//                 </p>
//                 <p className="text-pink-100 text-lg">
//                   {currentPhase} Phase {currentPhaseInfo.emoji}
//                 </p>
//               </div>

//               <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2">
//                 <MessageCircle className="w-5 h-5" />
//                 <span>Chat with PeriodCare AI</span>
//               </button>
//             </div>

//             {/* Circular Progress Tracker */}
//             <div className="flex justify-center lg:justify-end">
//               <div className="relative w-64 h-64">
//                 <svg className="w-full h-full transform -rotate-90">
//                   <circle
//                     cx="128"
//                     cy="128"
//                     r="110"
//                     stroke="rgba(255,255,255,0.2)"
//                     strokeWidth="20"
//                     fill="none"
//                   />
//                   <circle
//                     cx="128"
//                     cy="128"
//                     r="110"
//                     stroke="white"
//                     strokeWidth="20"
//                     fill="none"
//                     strokeDasharray={`${2 * Math.PI * 110}`}
//                     strokeDashoffset={`${
//                       2 * Math.PI * 110 * (1 - cycleProgress / 100)
//                     }`}
//                     strokeLinecap="round"
//                     className="transition-all duration-1000"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center flex-col">
//                   <p className="text-5xl font-bold text-white">{currentDay}</p>
//                   <p className="text-white text-sm">of {cycleLength} days</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Grid Layout */}
//         <div className="grid lg:grid-cols-3 gap-6 mb-8">
//           {/* 2. Cycle Overview Card */}
//           <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 md:p-8">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Cycle Overview
//               </h2>
//               <button className="text-pink-600 font-semibold flex items-center space-x-1 hover:space-x-2 transition-all">
//                 <span>View Full Tracker</span>
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mb-6">
//               <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-5 space-y-2">
//                 <Calendar className="w-8 h-8 text-pink-500" />
//                 <p className="text-3xl font-bold text-gray-900">
//                   {daysUntilPeriod}
//                 </p>
//                 <p className="text-gray-600">Days until period</p>
//               </div>

//               <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-5 space-y-2">
//                 <Activity className="w-8 h-8 text-purple-500" />
//                 <p className="text-3xl font-bold text-gray-900">High</p>
//                 <p className="text-gray-600">Energy Level</p>
//               </div>

//               <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-5 space-y-2">
//                 <Sun className="w-8 h-8 text-amber-500" />
//                 <p className="text-3xl font-bold text-gray-900">Good</p>
//                 <p className="text-gray-600">Mood Today</p>
//               </div>
//             </div>

//             {/* Phase Timeline */}
//             <div className="relative">
//               <div className="flex justify-between mb-2">
//                 {Object.keys(phaseInfo).map((phase) => (
//                   <div key={phase} className="text-center">
//                     <p className="text-sm font-semibold text-gray-700">
//                       {phase}
//                     </p>
//                     <p className="text-2xl">{phaseInfo[phase].icon}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className={`h-full bg-linear-to-r ${currentPhaseInfo.color} transition-all duration-500`}
//                   style={{ width: `${cycleProgress}%` }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* 4. AI Insights Panel (Right Side) */}
//           <div className="bg-white rounded-3xl shadow-xl p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-900">AI Assistant</h3>
//               <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
//                 <Sparkles className="w-5 h-5 text-white animate-pulse" />
//               </div>
//             </div>

//             <div className="space-y-3 mb-4">
//               {recentChats.map((chat, idx) => (
//                 <div key={idx} className="bg-pink-50 rounded-xl p-3">
//                   <p className="text-sm text-gray-700 mb-1">{chat.message}</p>
//                   <p className="text-xs text-gray-500">{chat.time}</p>
//                 </div>
//               ))}
//             </div>

//             <button className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
//               <MessageCircle className="w-5 h-5" />
//               <span>Continue Chat</span>
//             </button>
//           </div>
//         </div>

//         {/* 3. Today's Wellness Recommendations */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">
//             Today&rsquo;s Wellness Tips
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {wellnessRecommendations.map((rec, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-linear-to-br ${rec.color} rounded-2xl p-6 text-white hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer`}
//               >
//                 <div className="text-4xl mb-3">{rec.emoji}</div>
//                 <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
//                 <p className="text-white/90 text-sm">{rec.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Grid for Doctor & Analytics */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {/* 6. Doctor Consultation Section */}
//           <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-linear-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
//                   <Stethoscope className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Consult Doctor
//                 </h2>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {doctors.map((doctor, idx) => (
//                 <div
//                   key={idx}
//                   className="border-2 border-gray-100 rounded-2xl p-4 hover:border-pink-200 hover:shadow-md transition-all"
//                 >
//                   <div className="flex items-center space-x-4">
//                     <div className="w-14 h-14 bg-linear-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shrink-0">
//                       <User className="w-7 h-7 text-pink-600" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="font-bold text-gray-900">{doctor.name}</h3>
//                       <p className="text-sm text-gray-600">
//                         {doctor.specialty}
//                       </p>
//                       <div className="flex items-center space-x-2 mt-1">
//                         <span
//                           className={`w-2 h-2 rounded-full ${
//                             doctor.available ? "bg-green-500" : "bg-gray-400"
//                           }`}
//                         ></span>
//                         <span className="text-xs text-gray-600">
//                           {doctor.available ? "Available" : "Busy"}
//                         </span>
//                         <span className="text-xs text-amber-600">
//                           ⭐ {doctor.rating}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       className={`px-4 py-2 rounded-lg font-semibold text-sm ${
//                         doctor.available
//                           ? "bg-linear-to-r from-teal-500 to-cyan-500 text-white hover:shadow-lg"
//                           : "bg-gray-100 text-gray-500"
//                       } transition-all`}
//                     >
//                       {doctor.available ? "Chat Now" : "Book"}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 7. Analytics / History */}
//           <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
//                   <BarChart3 className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Your Analytics
//                 </h2>
//               </div>
//               <button className="text-gray-600 hover:text-pink-600 transition-colors">
//                 <Download className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Simple Graph Visualization */}
//             <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-4">
//               <div className="flex items-end justify-between h-32 space-x-2">
//                 {[65, 80, 70, 85, 75, 90, 80].map((height, idx) => (
//                   <div
//                     key={idx}
//                     className="flex-1 bg-linear-to-t from-pink-400 to-purple-400 rounded-t-lg transition-all hover:opacity-80"
//                     style={{ height: `${height}%` }}
//                   ></div>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-3 text-xs text-gray-600">
//                 <span>Mon</span>
//                 <span>Tue</span>
//                 <span>Wed</span>
//                 <span>Thu</span>
//                 <span>Fri</span>
//                 <span>Sat</span>
//                 <span>Sun</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
//                 <Calendar className="w-4 h-4" />
//                 <span>History</span>
//               </button>
//               <button className="bg-pink-100 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-200 transition-all flex items-center justify-center space-x-2">
//                 <Download className="w-4 h-4" />
//                 <span>Export PDF</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 8. Settings / Profile Management */}
//         <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">
//             Quick Settings
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <button className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
//               <User className="w-8 h-8 text-pink-500 mb-3 group-hover:scale-110 transition-transform" />
//               <h3 className="font-bold text-gray-900 mb-1">Edit Profile</h3>
//               <p className="text-sm text-gray-600">Update your information</p>
//             </button>

//             <button className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
//               <Bell className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
//               <h3 className="font-bold text-gray-900 mb-1">Notifications</h3>
//               <p className="text-sm text-gray-600">Manage alerts</p>
//             </button>

//             <button className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
//               <Globe className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
//               <h3 className="font-bold text-gray-900 mb-1">Language</h3>
//               <p className="text-sm text-gray-600">Choose your language</p>
//             </button>

//             <button className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all text-left group">
//               <Settings className="w-8 h-8 text-teal-500 mb-3 group-hover:scale-110 transition-transform" />
//               <h3 className="font-bold text-gray-900 mb-1">Privacy</h3>
//               <p className="text-sm text-gray-600">Security settings</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

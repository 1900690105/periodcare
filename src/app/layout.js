import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeriodCare | AI Menstrual Health & Wellness Platform",
  description:
    "PeriodCare is an AI-powered menstrual health awareness and support platform designed to educate, guide, and empower women. Discover cycle-based nutrition, exercise, emotional wellness, and hygiene tips — all in one safe, empathetic space.",
  keywords: [
    "PeriodCare",
    "menstrual health",
    "women wellness",
    "AI health assistant",
    "menstrual cycle tracker",
    "nutrition for women",
    "period exercise tips",
    "emotional health",
    "hygiene and myths",
    "AI menstrual education",
  ],
  authors: [{ name: "PeriodCare Team" }],
  openGraph: {
    title: "PeriodCare – Your AI Guide for Menstrual Health & Wellness",
    description:
      "Personalized menstrual health insights, nutrition guides, exercise tips, and emotional wellness — powered by AI, designed for you.",
    url: "https://periodcareforyou.vercel.app/",
    siteName: "PeriodCare",
    images: [
      {
        url: "/logo2.png", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "PeriodCare Menstrual Health Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

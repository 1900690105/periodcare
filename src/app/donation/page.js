"use client";
import { useEffect, useState } from "react";
import {
  Heart,
  Users,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Check,
  AlertCircle,
  School,
  Home,
  Droplet,
  ArrowRight,
  Gift,
  Star,
  IndianRupee,
  User,
  Book,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { RiUserCommunityLine } from "react-icons/ri";
import Script from "next/script";
import MakePayment from "./components/MakePayment";

export default function DonationPage() {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(30);
  const [customAmount, setCustomAmount] = useState(30);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setCustomAmount(selectedAmount);
  }, [selectedAmount]);

  const impactData = [
    {
      amount: 5,
      impact:
        "Delivers a starter kit with pads and education booklet to one student, reducing absenteeism by enabling safe school attendance",
      icon: User, // Single user icon for individual focus
      color: "from-blue-400 to-indigo-400",
    },
    {
      amount: 10,
      impact:
        "Provides reusable pads and soap for two students for a full month, empowering them to manage periods without stress",
      icon: Users,
      color: "from-pink-400 to-rose-400",
    },
    {
      amount: 25,
      impact:
        "Equips a classroom with 20 emergency period kits, including wipes and liners, for immediate access during school hours",
      icon: School,
      color: "from-purple-400 to-pink-400",
    },
    {
      amount: 50,
      impact:
        "Supplies absorbent underwear and tampons for 10 teens over a month, promoting dignity and confidence in daily activities",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
    },
    {
      amount: 100,
      impact:
        "Fully stocks a school dispenser's shelves with mixed products for three months, ensuring no girl misses class due to lack of supplies",
      icon: Home,
      color: "from-pink-500 to-purple-500",
    },
    {
      amount: 200,
      impact:
        "Funds a workshop on menstrual health for 50 girls plus product distribution, breaking stigma and building long-term awareness",
      icon: Book, // Icon for education/discussion
      color: "from-green-400 to-teal-400",
    },
    {
      amount: 500,
      impact:
        "Launches a community drive with biodegradable cups for 100 girls, including hygiene training to support sustainable practices for a year",
      icon: RiUserCommunityLine, // Icon for broader community reach
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const stats = [
    {
      value: "70%",
      label: "of families cannot afford menstrual products",
      icon: AlertCircle,
      color: "text-rose-500",
      source: "WHEELS Global Foundation, 2024",
    },
    {
      value: "36%",
      label: "of menstruating women in India use sanitary pads",
      icon: Clock,
      color: "text-purple-500",
      source: "Dasra Report via Changeincontent, 2024-2025",
    },
    {
      value: "64.4%",
      label: "young women (15-24) use sanitary napkins",
      icon: Users,
      color: "text-pink-500",
      source: "NFHS-5 (2019-21) analysis, 2024",
    },
    {
      value: "50%",
      label: "young women (15-24) use cloth during periods",
      icon: TrendingUp,
      color: "text-rose-600",
      source: "DHS Program / NFHS-5, 2024",
    },
  ];

  const testimonials = [
    {
      quote:
        "Having free period products at school changed everything. I can focus on learning instead of worrying.",
      name: "Maya, 16",
      location: "California",
    },
    {
      quote:
        "I used to miss sports practice because I couldn't afford products. Now I'm back on the team.",
      name: "Priya, 15",
      location: "Texas",
    },
    {
      quote:
        "Period poverty is real. These donations mean I don't have to choose between products and lunch.",
      name: "Anonymous, 17",
      location: "New York",
    },
  ];

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
        <NavBar />
        {/* Hero Section */}
        <div className="relative overflow-hidden  text-white py-20 px-4">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Period Equity Initiative</span>
              </div>

              <h1 className="text-5xl text-black sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                End Period Poverty
                <br />
                <span className="text-pink-600">One Donation at a Time</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
                64% of teens struggle to afford period products. Your donation
                provides dignity, education, and opportunity to those who need
                it most.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-gray-500 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Check className="w-4 h-4" />
                  <span>100% Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-500 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-500 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span>Direct Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl -mt-24 flex justify-center">
          <iframe
            className="flex justify-center w-[450px] h-60 md:w-[700px] md:h-[390px]"
            src="https://www.youtube.com/embed/5XNY94_g8ng?si=UOYAw_C_AStdDwz6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-black ">
          Note: The numbers shown in the video are based on data from 8 years
          ago. The video is for awareness purposes only.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Crisis Stats */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
              The Crisis in Numbers
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Based on the 2025 State of the Period Study
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <stat.icon className={`w-12 h-12 ₹{stat.color} mb-4`} />
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Donation Section */}
          <MakePayment
            setSelectedAmount={setSelectedAmount}
            setDonationType={setDonationType}
            donationType={donationType}
            selectedAmount={selectedAmount}
            customAmount={customAmount}
            impactData={impactData}
            setCustomAmount={setCustomAmount}
          />
          <div className="flex gap-5 justify-between mb-16">
            {/* Why Donate */}
            <div className="bg-linear-to-br from-pink-100 to-purple-100 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Your Donation Matters
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    70% of families cannot afford menstrual products, leading to
                    reliance on cheaper or free alternatives.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Only 36% of India&#39;s ~355 million menstruating women use
                    sanitary pads; the remaining 64% use cloth, husk, ash, or
                    other substitutes due to cost.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Prevents students from missing crucial learning time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Reduces stigma and promotes menstrual equity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Supports lower-income students disproportionately affected
                  </span>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Trusted & Verified
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    501(c)(3) Nonprofit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    100% Tax Deductible
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    90% Goes Directly to Programs
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
              Stories from Students We&#39;ve Helped
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-pink-500 text-5xl mb-4">&rdquo;</div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Ways to Help */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Other Ways to Support
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Can&#39;t donate right now? Here are other ways you can help
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-linear-to-r from-pink-400 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Spread Awareness
                </h3>
                <p className="text-gray-600 text-sm">
                  Share our mission on social media and talk about period equity
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-linear-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Advocate at School
                </h3>
                <p className="text-gray-600 text-sm">
                  Ask your school to provide free period products in bathrooms
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-linear-to-r from-pink-400 to-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Volunteer</h3>
                <p className="text-gray-600 text-sm">
                  Join our team and help distribute products to those in need
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl transform scale-100 animate-in">
              <div className="text-center">
                <div className="bg-linear-to-r from-pink-400 to-purple-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Thank You! 💝
                </h2>
                <p className="text-gray-600 mb-6">
                  Your generous donation of ${customAmount || selectedAmount}{" "}
                  will make a real difference in someone&#39;s life. Together,
                  we&#39;re ending period poverty.
                </p>
                <button
                  onClick={() => setShowThankYou(false)}
                  className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

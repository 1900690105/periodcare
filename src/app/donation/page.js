"use client";
import { useState } from "react";
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
} from "lucide-react";
import NavBar from "../components/NavBar";

export default function DonationPage() {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const impactData = [
    {
      amount: 10,
      impact: "Provides period products for 2 students for a month",
      icon: Users,
      color: "from-pink-400 to-rose-400",
    },
    {
      amount: 25,
      impact: "Supplies a classroom with emergency period kits",
      icon: School,
      color: "from-purple-400 to-pink-400",
    },
    {
      amount: 50,
      impact: "Supports 10 teens with period products for a month",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
    },
    {
      amount: 100,
      impact: "Stocks a school bathroom dispenser for 3 months",
      icon: Home,
      color: "from-pink-500 to-purple-500",
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

  const handleDonate = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
    console.log({
      type: donationType,
      amount: customAmount || selectedAmount,
    });
  };

  const getCurrentImpact = () => {
    const amount = parseInt(customAmount) || selectedAmount;
    return (
      impactData.reverse().find((item) => amount >= item.amount) ||
      impactData[0]
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      <NavBar />
      {/* Hero Section */}
      <div className="relative overflow-hidden  text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💝</div>
          <div className="absolute top-40 right-20 text-7xl">🌸</div>
          <div className="absolute bottom-20 left-1/4 text-8xl">💗</div>
          <div className="absolute bottom-10 right-1/3 text-6xl">✨</div>
        </div>

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
              24% of teens struggle to afford period products. Your donation
              provides dignity, education, and opportunity to those who need it
              most.
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

      <div className="max-w-8xl mx-auto flex justify-center">
        <iframe
          width="700"
          height="415"
          className="flex justify-center"
          src="https://www.youtube.com/embed/5XNY94_g8ng?si=UOYAw_C_AStdDwz6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center text-black ">
        Note: The numbers shown in the video are based on data from 8 years ago.
        The video is for awareness purposes only.
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
                <stat.icon className={`w-12 h-12 ${stat.color} mb-4`} />
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Make Your Donation
              </h2>

              {/* Donation Type Toggle */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    donationType === "one-time"
                      ? "bg-linear-to-r from-pink-400 to-purple-400 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    donationType === "monthly"
                      ? "bg-linear-to-r from-pink-400 to-purple-400 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    Monthly
                    <Star className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Preset Amounts */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount && !customAmount
                          ? "bg-linear-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* Impact Display */}
              <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-r from-pink-400 to-purple-400 p-3 rounded-full">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Your Impact
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {getCurrentImpact().impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-5 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {donationType === "monthly"
                  ? "Start Monthly Donation"
                  : "Donate Now"}
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Secure payment powered by industry-leading encryption
              </p>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-6">
            {/* Quick Impact Guide */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Donation Impact Guide
              </h3>
              <div className="space-y-4">
                {impactData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`bg-linear-to-r ${item.color} p-2 rounded-lg shrink-0`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        ${item.amount}
                      </div>
                      <div className="text-sm text-gray-600">{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
              <h3 className="font-bold text-gray-800 mb-2">Spread Awareness</h3>
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
                Your generous donation of ${customAmount || selectedAmount} will
                make a real difference in someone&#39;s life. Together,
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
  );
}

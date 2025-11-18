import {
  ArrowRight,
  Gift,
  IndianRupee,
  Star,
  User,
  Mail,
  Phone,
  Check,
  X,
} from "lucide-react";
import React, { useState } from "react";

function MakePayment({
  impactData,
  customAmount,
  setCustomAmount,
  setDonationType,
  setSelectedAmount,
  donationType,
  selectedAmount,
}) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const donationAmounts = [30, 50, 100, 150, 200, 250, 350, 500];

  const handleDonate = async () => {
    // Validate user info if not anonymous
    if (!isAnonymous) {
      if (!userInfo.name || !userInfo.email || !userInfo.phone) {
        alert(
          'Please fill in all required fields or select "Donate Anonymously"'
        );
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInfo.email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Basic phone validation (10 digits)
      if (!/^\d{10}$/.test(userInfo.phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }
    }

    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Payment SDK not loaded. Please try again...");
      return;
    }

    const amount = parseInt(customAmount) || selectedAmount;

    if (!amount || amount < 1) {
      alert("Please select or enter a valid donation amount");
      return;
    }

    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          userInfo: isAnonymous
            ? { name: "Anonymous", email: "", phone: "" }
            : userInfo,
        }),
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Whisper India",
        description: `${
          donationType === "monthly" ? "Monthly" : "One-Time"
        } Donation`,
        order_id: order.id,
        prefill: isAnonymous
          ? {}
          : {
              name: userInfo.name,
              email: userInfo.email,
              contact: userInfo.phone,
            },
        handler: (response) => {
          console.log("Payment Success:", response);
          setPaymentDetails({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            amount: amount,
            name: isAnonymous ? "Anonymous Donor" : userInfo.name,
            type: donationType,
          });
          setShowThankYou(true);
        },
        modal: {
          ondismiss: function () {
            console.log("Payment cancelled by user");
          },
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  const getCurrentImpact = () => {
    const amount = parseInt(customAmount) || selectedAmount;
    return impactData.find((item) => amount >= item.amount) || impactData[0];
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    // Reset form
    setUserInfo({ name: "", email: "", phone: "" });
    setCustomAmount(30);
    setSelectedAmount(30);
    setIsAnonymous(false);
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Donation Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Make Your Donation
            </h2>

            {/* User Information Section */}
            <div className="mb-8 bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Your Information
                </h3>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    Donate Anonymously
                  </span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full pl-12 text-black pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        className="w-full pl-12 text-black pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            phone: e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10),
                          })
                        }
                        placeholder="10-digit mobile number"
                        maxLength="10"
                        className="w-full text-black pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {isAnonymous && (
                <div className="text-center py-4">
                  <p className="text-gray-600">
                    ✅ Your donation will be anonymous. No personal information
                    required.
                  </p>
                </div>
              )}
            </div>

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
                      selectedAmount === amount
                        ? "bg-linear-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                    }`}
                  >
                    ₹{amount}
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
                <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-12 pr-4 text-black py-4 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none text-lg"
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
                  <h3 className="font-bold text-gray-800 mb-2">Your Impact</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getCurrentImpact().impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-5 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                      ₹
                      {Math.round(
                        item.amount *
                          (process.env.NEXT_PUBLIC_DOLLERTOINR || 83)
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{item.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && paymentDetails && (
        <div className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 ">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-scale-in">
            <button
              onClick={handleCloseThankYou}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="text-center h-[550px]">
              {/* Success Animation */}
              <div className="w-20 h-20 bg-linear-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-1 animate-bounce">
                <Check className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-1">
                Thank You for Your Generosity!
              </h2>

              <p className="text-base text-gray-600 mb-2">
                Your{" "}
                {paymentDetails.type === "monthly" ? "monthly" : "one-time"}{" "}
                donation of{" "}
                <span className="font-bold text-pink-600">
                  ₹{paymentDetails.amount}
                </span>{" "}
                will make a real difference!
              </p>

              {/* Payment Details */}
              <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-bold text-gray-900 mb-4">
                  Payment Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-mono text-gray-900">
                      {paymentDetails.paymentId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-gray-900">
                      {paymentDetails.orderId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Donor Name:</span>
                    <span className="font-semibold text-gray-900">
                      {paymentDetails.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-bold text-pink-600">
                      ₹{paymentDetails.amount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Message */}
              <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-2">Your Impact 🌟</h3>
                <p className="text-gray-700">{getCurrentImpact().impact}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseThankYou}
                className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MakePayment;

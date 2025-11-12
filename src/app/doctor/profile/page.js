"use client";
import React, { useState } from "react";
import {
  Calendar,
  Star,
  Award,
  MapPin,
  Clock,
  MessageCircle,
  Video,
  Phone,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const doctor = {
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: 4.8,
    reviews: 342,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    qualifications: [
      "MBBS",
      "MD - Cardiology",
      "Fellowship in Interventional Cardiology",
    ],
    hospital: "City Heart Medical Center",
    location: "Downtown, Medical District",
    consultationFee: "$150",
    languages: ["English", "Spanish"],
    about:
      "Dr. Sarah Mitchell is a renowned cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in interventional cardiology and has helped thousands of patients achieve better heart health.",
  };

  const reviews = [
    {
      name: "John Davis",
      rating: 5,
      date: "2 days ago",
      text: "Excellent doctor! Very thorough and caring. Took time to explain everything.",
    },
    {
      name: "Maria Garcia",
      rating: 5,
      date: "1 week ago",
      text: "Dr. Mitchell is amazing. She diagnosed my condition quickly and treatment is working well.",
    },
    {
      name: "Robert Chen",
      rating: 4,
      date: "2 weeks ago",
      text: "Professional and knowledgeable. Wait time was a bit long but worth it.",
    },
  ];

  const availableSlots = {
    morning: ["09:00 AM", "09:30 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "04:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const today = new Date();
  const isToday = (day) => {
    return (
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear() &&
      day === today.getDate()
    );
  };

  const isPastDate = (day) => {
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return (
      checkDate <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    if (newMonth >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(newMonth);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center text-gray-600 hover:text-[#E75480] transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="font-medium">Back to Search</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-2xl object-cover shadow-md mx-auto sm:mx-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {doctor.name}
                  </h1>
                  <p className="text-lg text-[#5D3FD3] font-medium mt-1">
                    {doctor.specialty}
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">
                        {doctor.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-[#E75480]" />
                      <span>{doctor.experience} experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                    {doctor.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#FFD6E0] text-[#E75480] rounded-full text-sm font-medium"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-[#5D3FD3]" />
                      <span>
                        {doctor.hospital} • {doctor.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <span className="font-semibold text-gray-900">
                        Languages:
                      </span>
                      <span>{doctor.languages.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Patient Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold text-gray-900">
                    {doctor.rating}
                  </span>
                  <span className="text-gray-500">/ 5</span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Ask a Question
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-[#FFD6E0] text-[#E75480] py-3 rounded-xl font-semibold hover:bg-[#ffc5d6] transition-colors">
                  <Phone className="w-5 h-5" />
                  Voice Note
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Select Date</h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="text-center mb-4">
                <p className="font-semibold text-gray-900">
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-semibold text-gray-500 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {[...Array(startingDayOfWeek)].map((_, idx) => (
                  <div key={`empty-${idx}`} />
                ))}
                {[...Array(daysInMonth)].map((_, idx) => {
                  const day = idx + 1;
                  const past = isPastDate(day);
                  const current = isToday(day);
                  const selected = selectedDate === day;

                  return (
                    <button
                      key={day}
                      disabled={past}
                      onClick={() => !past && setSelectedDate(day)}
                      className={`
                        aspect-square p-2 rounded-lg text-sm font-medium transition-all
                        ${
                          past
                            ? "text-gray-300 cursor-not-allowed"
                            : "hover:bg-[#FFD6E0] cursor-pointer"
                        }
                        ${current && !selected ? "bg-[#5D3FD3] text-white" : ""}
                        ${
                          selected
                            ? "bg-[#E75480] text-white shadow-lg"
                            : "text-gray-700"
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Available Times
                </h3>

                <div className="space-y-4">
                  {Object.entries(availableSlots).map(([period, slots]) => (
                    <div key={period}>
                      <p className="text-sm font-semibold text-gray-500 mb-2 capitalize">
                        {period}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {slots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              py-2 px-3 rounded-lg text-sm font-medium transition-all
                              ${
                                selectedTime === time
                                  ? "bg-[#5D3FD3] text-white shadow-md"
                                  : "bg-gray-100 text-gray-700 hover:bg-[#FFD6E0]"
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Summary */}
            {selectedDate && selectedTime && (
              <div className="bg-linear-to-br from-[#E75480] to-[#5D3FD3] rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Booking Summary</h3>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                    })}{" "}
                    {selectedDate}, {currentMonth.getFullYear()}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span> {selectedTime}
                  </p>
                  <p>
                    <span className="font-semibold">Consultation Fee:</span>{" "}
                    {doctor.consultationFee}
                  </p>
                </div>
                <button className="w-full bg-white text-[#E75480] py-3 rounded-xl font-bold hover:shadow-xl transition-all">
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Stethoscope,
  Video,
  Phone,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

export default function DoctorConsultationSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [consultationType, setConsultationType] = useState("video");

  const filters = [
    { id: "all", label: "All", icon: "🩺" },
    { id: "gynecologist", label: "Gynecologist", icon: "👩‍⚕️" },
    { id: "nutritionist", label: "Nutritionist", icon: "🥗" },
    { id: "psychologist", label: "Psychologist", icon: "🧠" },
    { id: "general", label: "General Health", icon: "💬" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Gynecologist",
      experience: "12+ years",
      languages: ["English", "Hindi", "Marathi"],
      avatar: "PS",
      available: true,
      rating: 4.9,
      consultations: 2500,
      category: "gynecologist",
      bio: "Specialized in adolescent gynecology and menstrual health. Compassionate approach to sensitive topics.",
      education: "MBBS, MD (Obstetrics & Gynecology)",
    },
    {
      id: 2,
      name: "Dr. Anjali Mehta",
      specialty: "Psychologist",
      experience: "8+ years",
      languages: ["English", "Hindi", "Gujarati"],
      avatar: "AM",
      available: true,
      rating: 4.8,
      consultations: 1800,
      category: "psychologist",
      bio: "Expert in adolescent psychology, body image issues, and emotional wellness during puberty.",
      education: "MA Psychology, PhD Clinical Psychology",
    },
    {
      id: 3,
      name: "Dr. Meera Reddy",
      specialty: "Nutritionist",
      experience: "10+ years",
      languages: ["English", "Hindi", "Telugu"],
      avatar: "MR",
      available: false,
      rating: 4.7,
      consultations: 2100,
      category: "nutritionist",
      bio: "Specializes in nutrition for menstrual health, PCOS management, and adolescent dietary needs.",
      education: "MSc Clinical Nutrition, Certified Dietitian",
    },
    {
      id: 4,
      name: "Dr. Kavita Desai",
      specialty: "General Physician",
      experience: "15+ years",
      languages: ["English", "Hindi", "Marathi"],
      avatar: "KD",
      available: true,
      rating: 4.9,
      consultations: 3200,
      category: "general",
      bio: "General health expert with special focus on women's wellness and preventive care.",
      education: "MBBS, MD Internal Medicine",
    },
    {
      id: 5,
      name: "Dr. Radhika Iyer",
      specialty: "Gynecologist",
      experience: "9+ years",
      languages: ["English", "Hindi", "Tamil"],
      avatar: "RI",
      available: true,
      rating: 4.8,
      consultations: 1900,
      category: "gynecologist",
      bio: "Focuses on menstrual disorders, adolescent health, and hormonal imbalances with a gentle approach.",
      education: "MBBS, DNB (Obstetrics & Gynecology)",
    },
    {
      id: 6,
      name: "Dr. Sanjana Gupta",
      specialty: "Psychologist",
      experience: "7+ years",
      languages: ["English", "Hindi", "Punjabi"],
      avatar: "SG",
      available: false,
      rating: 4.7,
      consultations: 1500,
      category: "psychologist",
      bio: "Specializes in anxiety, stress management, and building confidence during adolescence.",
      education: "MA Psychology, PG Diploma Counseling",
    },
  ];

  const filteredDoctors =
    selectedFilter === "all"
      ? doctors
      : doctors.filter((doc) => doc.category === selectedFilter);

  const handleConsultClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBookSession = () => {
    // Here you would integrate with your booking system
    alert(
      `Booking ${consultationType} consultation with ${selectedDoctor.name}`
    );
    setSelectedDoctor(null);
  };

  return (
    <div className="max-w-7xl shadow-2xl rounded-2xl py-16 bg-linear-to-r from-purple-100 to-pink-100 p-6 mb-8 border-2 border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full mb-4">
            <Stethoscope className="w-5 h-5" />
            <span className="font-semibold text-sm">
              Professional Healthcare
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Talk to <span className="text-pink-500">Certified Doctors</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Get professional menstrual and wellness advice from trusted experts.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from gynecologists, nutritionists, and counselors who care
            about your comfort and privacy.
          </p>
        </div>

        {/* AI Suggestion Area */}
        <div className="bg-linear-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8 border-2 border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Ask AI Before Consulting
              </h3>
              <p className="text-gray-600 mb-3">
                Get instant answers to common questions or let our AI help you
                prepare for your doctor consultation.
              </p>
              <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition shadow-md">
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition shadow-md hover:shadow-lg ${
                selectedFilter === filter.id
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-50"
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-linear-to-br from-pink-100 to-purple-100 p-6 relative">
                <div className="absolute top-4 right-4">
                  {doctor.available ? (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Available</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span>Offline</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {doctor.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-pink-600 font-semibold">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-pink-500" />
                    <span className="text-sm font-medium">
                      {doctor.experience} Experience
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="text-sm">
                      {doctor.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      {doctor.consultations}+ Consultations
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-lg mr-1">★</span>
                  <span className="font-bold text-gray-800">
                    {doctor.rating}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">/5.0</span>
                </div>

                {/* Consult Button */}
                <button
                  onClick={() => handleConsultClick(doctor)}
                  disabled={!doctor.available}
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    doctor.available
                      ? "bg-linear-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md hover:shadow-lg"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {doctor.available ? "Consult Now" : "Currently Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No Doctors Found
            </h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* Nearby Doctors & Hospitals Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Find Nearby{" "}
              <span className="text-pink-500">Healthcare Centers</span>
            </h2>
            <p className="text-gray-600">
              Locate doctors and hospitals near you for in-person consultations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Container */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-linear-to-r from-pink-500 to-purple-500 px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Map View</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      📍 Pune, Maharashtra
                    </span>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="relative h-96 bg-linear-to-br from-blue-50 to-purple-50">
                  {/* Map placeholder with markers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Grid lines for map effect */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={`h-${i}`}
                            className="h-px bg-gray-400"
                            style={{ marginTop: `${i * 12.5}%` }}
                          />
                        ))}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={`v-${i}`}
                            className="w-px h-full bg-gray-400 inline-block"
                            style={{ marginLeft: `${i * 12.5}%` }}
                          />
                        ))}
                      </div>

                      {/* Location Markers */}
                      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                        <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition">
                          🏥
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap">
                          City Hospital
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition">
                          👩‍⚕️
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap">
                          Dr. Sharma Clinic
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </div>

                      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition">
                          🏥
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap">
                          Women&rsquo;s Health Center
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </div>

                      <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition">
                          👨‍⚕️
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap">
                          Apollo Clinic
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </div>

                      {/* Current Location */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse shadow-lg"></div>
                          <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                    <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition">
                      <span className="text-lg">➕</span>
                    </button>
                    <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition">
                      <span className="text-lg">➖</span>
                    </button>
                    <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition">
                      <span className="text-lg">🎯</span>
                    </button>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <span>Hospital</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Clinic</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span>Your Location</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Locations List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Nearby Healthcare (5km)
                </h3>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {[
                    {
                      name: "City Hospital",
                      type: "Multi-Specialty Hospital",
                      distance: "1.2 km",
                      rating: 4.5,
                      address: "FC Road, Pune",
                      open: true,
                      specialties: ["Gynecology", "Pediatrics"],
                    },
                    {
                      name: "Dr. Sharma Clinic",
                      type: "Gynecology Clinic",
                      distance: "2.5 km",
                      rating: 4.8,
                      address: "Koregaon Park, Pune",
                      open: true,
                      specialties: ["Women's Health"],
                    },
                    {
                      name: "Women's Health Center",
                      type: "Specialized Care",
                      distance: "3.1 km",
                      rating: 4.6,
                      address: "Deccan, Pune",
                      open: false,
                      specialties: ["Obstetrics", "Counseling"],
                    },
                    {
                      name: "Apollo Clinic",
                      type: "General Hospital",
                      distance: "4.2 km",
                      rating: 4.4,
                      address: "Baner, Pune",
                      open: true,
                      specialties: ["All Departments"],
                    },
                  ].map((location, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-100 rounded-xl p-4 hover:border-pink-300 transition cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {location.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {location.type}
                          </p>
                        </div>
                        {location.open ? (
                          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Open
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            Closed
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-xs text-gray-600 mb-2">
                        <span className="mr-2">📍</span>
                        <span>{location.address}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-500">
                            ★ {location.rating}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-pink-600 font-semibold">
                            {location.distance}
                          </span>
                        </div>
                        <button className="text-pink-500 font-semibold hover:text-pink-600">
                          Directions →
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {location.specialties.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-md">
                  View All on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-linear-to-r from-pink-500 to-purple-500 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-lg font-bold">
                  {selectedDoctor.avatar}
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                  <p className="text-pink-100 text-sm">
                    {selectedDoctor.specialty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Doctor Info */}
              <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-100">
                <h4 className="font-bold text-gray-800 mb-2">About</h4>
                <p className="text-gray-600 text-sm mb-3">
                  {selectedDoctor.bio}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedDoctor.education}
                </p>
              </div>

              {/* Consultation Type Selection */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3">
                  Choose Consultation Type
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setConsultationType("video")}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
                      consultationType === "video"
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <Video
                      className={`w-6 h-6 mb-2 ${
                        consultationType === "video"
                          ? "text-pink-500"
                          : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        consultationType === "video"
                          ? "text-pink-700"
                          : "text-gray-700"
                      }`}
                    >
                      Video Call
                    </span>
                    <span className="text-xs text-gray-500 mt-1">₹500</span>
                  </button>

                  <button
                    onClick={() => setConsultationType("audio")}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
                      consultationType === "audio"
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <Phone
                      className={`w-6 h-6 mb-2 ${
                        consultationType === "audio"
                          ? "text-purple-500"
                          : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        consultationType === "audio"
                          ? "text-purple-700"
                          : "text-gray-700"
                      }`}
                    >
                      Audio Call
                    </span>
                    <span className="text-xs text-gray-500 mt-1">₹300</span>
                  </button>

                  <button
                    onClick={() => setConsultationType("chat")}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
                      consultationType === "chat"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <MessageCircle
                      className={`w-6 h-6 mb-2 ${
                        consultationType === "chat"
                          ? "text-blue-500"
                          : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        consultationType === "chat"
                          ? "text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      Text Chat
                    </span>
                    <span className="text-xs text-gray-500 mt-1">₹200</span>
                  </button>
                </div>
              </div>

              {/* Available Time Slots */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3">
                  Available Today
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "10:00 AM",
                    "11:30 AM",
                    "2:00 PM",
                    "4:30 PM",
                    "6:00 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-pink-400 hover:bg-pink-50 transition text-sm font-medium"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Assurance */}
              <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-4 flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    100% Confidential
                  </h4>
                  <p className="text-sm text-gray-600">
                    All consultations are private and secure. Your medical
                    information is protected and never shared.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookSession}
                  className="flex-1 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-lg hover:shadow-xl"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

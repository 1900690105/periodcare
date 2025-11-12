"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Video,
  Phone,
  ChevronRight,
  Award,
  Languages,
  Stethoscope,
  User,
  Heart,
  CheckCircle,
  X,
  Globe,
  Sparkles,
} from "lucide-react";
import NavBar from "../components/NavBar";

export default function DoctorConsultation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Sample doctors data
  const doctors = [
    {
      doctor_id: "D001",
      name: "Dr. Priya Sharma",
      specialization: "Gynecologist",
      experience: "10 years",
      languages: ["English", "Hindi", "Marathi"],
      city: "Pune",
      rating: 4.8,
      consultations: 1250,
      available_slots: ["10:00 AM", "11:00 AM", "4:30 PM"],
      gender: "Female",
      education: "MBBS, MD (Gynecology)",
      fee: 800,
      available_today: true,
    },
    {
      doctor_id: "D002",
      name: "Dr. Anjali Verma",
      specialization: "Nutritionist",
      experience: "8 years",
      languages: ["English", "Hindi"],
      city: "Mumbai",
      rating: 4.9,
      consultations: 980,
      available_slots: ["2:00 PM", "3:00 PM", "5:00 PM"],
      gender: "Female",
      education: "MSc Nutrition, Certified Dietitian",
      fee: 600,
      available_today: true,
    },
    {
      doctor_id: "D003",
      name: "Dr. Meera Patel",
      specialization: "Mental Health Counselor",
      experience: "12 years",
      languages: ["English", "Gujarati", "Hindi"],
      city: "Ahmedabad",
      rating: 4.7,
      consultations: 1500,
      available_slots: ["11:00 AM", "1:00 PM", "6:00 PM"],
      gender: "Female",
      education: "MA Psychology, Licensed Therapist",
      fee: 700,
      available_today: false,
    },
    {
      doctor_id: "D004",
      name: "Dr. Kavita Rao",
      specialization: "Gynecologist",
      experience: "15 years",
      languages: ["English", "Kannada", "Tamil"],
      city: "Bangalore",
      rating: 4.9,
      consultations: 2100,
      available_slots: ["9:00 AM", "12:00 PM", "3:30 PM"],
      gender: "Female",
      education: "MBBS, MD, Fellowship in Reproductive Medicine",
      fee: 1000,
      available_today: true,
    },
    {
      doctor_id: "D005",
      name: "Dr. Suman Desai",
      specialization: "Nutritionist",
      experience: "6 years",
      languages: ["English", "Marathi"],
      city: "Pune",
      rating: 4.6,
      consultations: 650,
      available_slots: ["10:30 AM", "2:30 PM", "4:00 PM"],
      gender: "Female",
      education: "MSc Clinical Nutrition",
      fee: 500,
      available_today: true,
    },
    {
      doctor_id: "D006",
      name: "Dr. Radha Iyer",
      specialization: "Mental Health Counselor",
      experience: "9 years",
      languages: ["English", "Tamil", "Malayalam"],
      city: "Chennai",
      rating: 4.8,
      consultations: 1100,
      available_slots: ["11:30 AM", "3:00 PM", "5:30 PM"],
      gender: "Female",
      education: "PhD Psychology, Certified CBT Therapist",
      fee: 750,
      available_today: true,
    },
  ];

  const specializations = [
    "All",
    "Gynecologist",
    "Nutritionist",
    "Mental Health Counselor",
  ];
  const languages = [
    "All",
    "English",
    "Hindi",
    "Marathi",
    "Tamil",
    "Gujarati",
    "Kannada",
    "Malayalam",
  ];
  const genders = ["All", "Female", "Male"];
  const cities = [
    "All",
    "Pune",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Ahmedabad",
    "Delhi",
    "Hyderabad",
  ];

  // Filter doctors
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialization =
      selectedSpecialization === "all" ||
      doctor.specialization.toLowerCase() ===
        selectedSpecialization.toLowerCase();
    const matchesLanguage =
      selectedLanguage === "all" ||
      doctor.languages.some(
        (lang) => lang.toLowerCase() === selectedLanguage.toLowerCase()
      );
    const matchesGender =
      selectedGender === "all" ||
      doctor.gender.toLowerCase() === selectedGender.toLowerCase();
    const matchesCity =
      selectedCity === "all" ||
      doctor.city.toLowerCase() === selectedCity.toLowerCase();

    return (
      matchesSearch &&
      matchesSpecialization &&
      matchesLanguage &&
      matchesGender &&
      matchesCity
    );
  });

  const getSpecializationColor = (specialization) => {
    switch (specialization) {
      case "Gynecologist":
        return "from-pink-400 to-rose-400";
      case "Nutritionist":
        return "from-green-400 to-emerald-400";
      case "Mental Health Counselor":
        return "from-purple-400 to-indigo-400";
      default:
        return "from-blue-400 to-cyan-400";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Header */}
      <NavBar />
      <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Stethoscope className="w-5 h-5 text-white" />
              <span className="text-white font-medium">
                Expert Medical Care
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Consult Verified Doctors
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Connect with experienced gynecologists, nutritionists, and mental
              health counselors
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center space-x-3">
              <Search className="w-6 h-6 text-gray-400 ml-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by doctor name or specialization..."
                className="flex-1 text-black px-4 py-3 focus:outline-none text-lg"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Filter Doctors
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Specialization Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Specialization
                </label>
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec.toLowerCase()}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                >
                  {genders.map((gender) => (
                    <option key={gender} value={gender.toLowerCase()}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Found{" "}
            <span className="font-bold text-gray-900">
              {filteredDoctors.length}
            </span>{" "}
            doctors
          </p>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">
              All doctors are verified
            </span>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.doctor_id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className={`bg-linear-to-r ${getSpecializationColor(
                  doctor.specialization
                )} p-6 relative`}
              >
                {doctor.available_today && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Available Today</span>
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  {/* Doctor Photo */}
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <User className="w-10 h-10 text-pink-400" />
                  </div>
                  <div className="flex-1 text-white">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-sm text-white/90 mb-2">
                      {doctor.specialization}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-xs text-white/75">
                        ({doctor.consultations}+ consultations)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Experience */}
                <div className="flex items-center space-x-2 text-gray-700">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">
                    <span className="font-semibold">{doctor.experience}</span>{" "}
                    experience
                  </span>
                </div>

                {/* Languages */}
                <div className="flex items-start space-x-2 text-gray-700">
                  <Languages className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-sm">{doctor.city}</span>
                </div>

                {/* Fee */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">
                    Consultation Fee:
                  </span>
                  <span className="text-xl font-bold text-green-600">
                    ₹{doctor.fee}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                  <button className="bg-pink-50 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-100 transition-all flex items-center justify-center space-x-2">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSpecialization("all");
                setSelectedLanguage("all");
                setSelectedGender("all");
                setSelectedCity("all");
              }}
              className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal (Simple version - you can expand this) */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div
              className={`bg-linear-to-r ${getSpecializationColor(
                selectedDoctor.specialization
              )} p-6 relative`}
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-1">
                    {selectedDoctor.name}
                  </h2>
                  <p className="text-white/90">
                    {selectedDoctor.specialization}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Available Time Slots Today
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedDoctor.available_slots.map((slot, idx) => (
                    <button
                      key={idx}
                      className="bg-pink-50 hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-500 text-pink-700 hover:text-white py-3 rounded-xl font-semibold transition-all border-2 border-pink-200 hover:border-transparent"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Choose Consultation Type
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-all text-center">
                    <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-blue-900">Video Call</p>
                  </button>
                  <button className="bg-green-50 hover:bg-green-100 p-4 rounded-xl transition-all text-center">
                    <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-900">Phone Call</p>
                  </button>
                  <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-xl transition-all text-center">
                    <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold text-purple-900">Chat</p>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl">
                <span className="text-gray-700 font-medium">Total Fee:</span>
                <span className="text-3xl font-bold text-pink-600">
                  ₹{selectedDoctor.fee}
                </span>
              </div>

              <button className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span>Confirm Booking</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

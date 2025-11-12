"use client";
import React, { useState } from "react";
import {
  Calendar,
  MessageCircle,
  DollarSign,
  FileText,
  Settings,
  Clock,
  User,
  TrendingUp,
  Bell,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Phone,
  Video,
  Plus,
  Edit2,
  Eye,
  BarChart3,
  Home,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    {
      label: "Today's Appointments",
      value: "12",
      icon: Calendar,
      color: "from-[#E75480] to-pink-400",
      change: "+3",
    },
    {
      label: "Pending Questions",
      value: "8",
      icon: MessageCircle,
      color: "from-[#5D3FD3] to-purple-400",
      change: "+2",
    },
    {
      label: "This Month Earnings",
      value: "$8,450",
      icon: DollarSign,
      color: "from-[#4CAF50] to-green-400",
      change: "+12%",
    },
    {
      label: "Total Patients",
      value: "342",
      icon: User,
      color: "from-blue-500 to-blue-400",
      change: "+28",
    },
  ];

  const appointments = [
    {
      id: 1,
      patient: "John Davis",
      time: "09:00 AM",
      type: "Video",
      status: "upcoming",
      condition: "Follow-up",
    },
    {
      id: 2,
      patient: "Maria Garcia",
      time: "10:30 AM",
      type: "In-person",
      status: "upcoming",
      condition: "Initial Consultation",
    },
    {
      id: 3,
      patient: "Robert Chen",
      time: "02:00 PM",
      type: "Video",
      status: "completed",
      condition: "Check-up",
    },
    {
      id: 4,
      patient: "Emma Wilson",
      time: "03:30 PM",
      type: "Phone",
      status: "cancelled",
      condition: "Follow-up",
    },
  ];

  const questions = [
    {
      id: 1,
      patient: "Sarah Johnson",
      question: "Is it normal to feel chest discomfort after exercise?",
      time: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      patient: "Michael Brown",
      question: "Can I take my medication with food?",
      time: "5 hours ago",
      priority: "low",
    },
    {
      id: 3,
      patient: "Lisa Anderson",
      question: "Should I be concerned about irregular heartbeat?",
      time: "1 day ago",
      priority: "high",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Heart Health in Your 40s",
      views: 1234,
      date: "2024-11-10",
      status: "published",
    },
    {
      id: 2,
      title: "5 Tips for Managing Blood Pressure",
      views: 892,
      date: "2024-11-05",
      status: "published",
    },
    {
      id: 3,
      title: "Exercise Guidelines for Cardiac Patients",
      views: 0,
      date: "2024-11-12",
      status: "draft",
    },
  ];

  const earnings = [
    { month: "Jan", amount: 7200 },
    { month: "Feb", amount: 7800 },
    { month: "Mar", amount: 8100 },
    { month: "Apr", amount: 7500 },
    { month: "May", amount: 8450 },
  ];

  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "questions", label: "Questions", icon: MessageCircle },
    { id: "availability", label: "Availability", icon: Clock },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "earnings", label: "Earnings", icon: DollarSign },
  ];

  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center mb-4`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <span className="text-sm font-semibold text-[#4CAF50]">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">
              Today&rsquo;s Schedule
            </h3>
            <button className="text-[#5D3FD3] text-sm font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {appointments
              .filter((a) => a.status === "upcoming")
              .map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center justify-between p-4 bg-[#FFD6E0] rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E75480] flex items-center justify-center text-white font-semibold">
                      {apt.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {apt.patient}
                      </p>
                      <p className="text-sm text-gray-600">{apt.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{apt.time}</p>
                    <div className="flex items-center gap-1 text-sm text-[#5D3FD3] mt-1">
                      {apt.type === "Video" && <Video className="w-4 h-4" />}
                      {apt.type === "Phone" && <Phone className="w-4 h-4" />}
                      <span>{apt.type}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">
              Urgent Questions
            </h3>
            <button className="text-[#5D3FD3] text-sm font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {questions
              .filter((q) => q.priority === "high")
              .map((q) => (
                <div
                  key={q.id}
                  className="p-4 border border-[#E75480] bg-red-50 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-gray-900">{q.patient}</p>
                    <span className="text-xs bg-[#E75480] text-white px-2 py-1 rounded-full">
                      High Priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{q.question}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{q.time}</span>
                    <button className="text-sm text-[#5D3FD3] font-semibold hover:underline">
                      Respond
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          Monthly Earnings Trend
        </h3>
        <div className="h-64 flex items-end justify-between gap-4">
          {earnings.map((item, idx) => {
            const maxAmount = Math.max(...earnings.map((e) => e.amount));
            const height = (item.amount / maxAmount) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-linear-to-t from-[#E75480] to-[#5D3FD3] rounded-t-lg relative group cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${item.amount.toLocaleString()}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  {item.month}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const AppointmentsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-gray-900">All Appointments</h3>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patient..."
                className="w-full text-black sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5D3FD3]"
              />
            </div>
            <button className="flex text-black items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Patient
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Time
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Condition
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr
                  key={apt.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E75480] flex items-center justify-center text-white font-semibold">
                        {apt.patient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-gray-900">
                        {apt.patient}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{apt.time}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      {apt.type === "Video" && (
                        <Video className="w-4 h-4 text-[#5D3FD3]" />
                      )}
                      {apt.type === "Phone" && (
                        <Phone className="w-4 h-4 text-[#5D3FD3]" />
                      )}
                      <span>{apt.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{apt.condition}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        apt.status === "upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : apt.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-[#5D3FD3] hover:bg-purple-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-[#E75480] hover:bg-pink-50 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const QuestionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Patient Questions</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#E75480] text-white rounded-lg font-semibold text-sm hover:bg-[#d64771]">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200">
              Urgent
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200">
              Answered
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`p-5 rounded-xl border-2 ${
                q.priority === "high"
                  ? "border-[#E75480] bg-red-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#5D3FD3] flex items-center justify-center text-white font-semibold">
                    {q.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{q.patient}</p>
                    <p className="text-sm text-gray-500">{q.time}</p>
                  </div>
                </div>
                {q.priority === "high" && (
                  <span className="bg-[#E75480] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    High Priority
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-4">{q.question}</p>
              <div className="flex gap-3">
                <button className="flex-1 sm:flex-initial px-6 py-2 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Respond
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
                  View History
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AvailabilityTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          Manage Availability
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div key={day} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{day}</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={day !== "Sunday"}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>
              {day !== "Sunday" && (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="time"
                      defaultValue="09:00"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <span className="flex items-center text-gray-500">to</span>
                    <input
                      type="time"
                      defaultValue="17:00"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="text-sm text-[#5D3FD3] font-semibold hover:underline">
                    + Add time slot
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-8 py-3 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-xl font-bold hover:shadow-lg transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const ArticlesTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-gray-900">Your Articles</h3>
          <button className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
            <Plus className="w-5 h-5" />
            Write New Article
          </button>
        </div>
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {article.title}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {article.status.charAt(0).toUpperCase() +
                        article.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views.toLocaleString()} views
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-[#5D3FD3] hover:bg-purple-50 rounded-lg">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-[#E75480] hover:bg-pink-50 rounded-lg">
                    <Edit2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EarningsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">This Month</p>
            <TrendingUp className="w-5 h-5 text-[#4CAF50]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">$8,450</p>
          <p className="text-sm text-[#4CAF50] font-semibold mt-1">
            +12% from last month
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-gray-600 mb-2">Total Earnings</p>
          <p className="text-3xl font-bold text-gray-900">$42,300</p>
          <p className="text-sm text-gray-500 mt-1">All time</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-gray-600 mb-2">Avg. per Consultation</p>
          <p className="text-3xl font-bold text-gray-900">$150</p>
          <p className="text-sm text-gray-500 mt-1">56 consultations</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          Recent Transactions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Patient
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "2024-11-12",
                  patient: "John Davis",
                  type: "Video Call",
                  amount: "$150",
                  status: "Completed",
                },
                {
                  date: "2024-11-11",
                  patient: "Maria Garcia",
                  type: "In-person",
                  amount: "$200",
                  status: "Completed",
                },
                {
                  date: "2024-11-10",
                  patient: "Robert Chen",
                  type: "Phone Call",
                  amount: "$100",
                  status: "Completed",
                },
                {
                  date: "2024-11-09",
                  patient: "Emma Wilson",
                  type: "Video Call",
                  amount: "$150",
                  status: "Pending",
                },
              ].map((trans, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 text-gray-700">{trans.date}</td>
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {trans.patient}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{trans.type}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    {trans.amount}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trans.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {trans.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "appointments":
        return <AppointmentsTab />;
      case "questions":
        return <QuestionsTab />;
      case "availability":
        return <AvailabilityTab />;
      case "articles":
        return <ArticlesTab />;
      case "earnings":
        return <EarningsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <h1 className="text-xl font-bold bg-linear-to-r from-[#E75480] to-[#5D3FD3] bg-clip-text text-transparent">
                Doctor Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#E75480] rounded-full"></span>
              </button>
              <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#E75480] to-[#5D3FD3] flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div className="hidden md:block">
                  <p className="font-semibold text-gray-900">
                    Dr. Sarah Mitchell
                  </p>
                  <p className="text-sm text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-4 sticky top-24">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === item.id
                        ? "bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white shadow-lg"
                        : "text-gray-700 hover:bg-[#FFD6E0]"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all mt-2">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className="bg-white w-64 h-full shadow-xl p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                        activeTab === item.id
                          ? "bg-linear-to-r from-[#E75480] to-[#5D3FD3] text-white shadow-lg"
                          : "text-gray-700 hover:bg-[#FFD6E0]"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all">
                    <Settings className="w-5 h-5" />
                    Settings
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all mt-2">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

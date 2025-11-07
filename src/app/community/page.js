"use client";
import React, { useState } from "react";
import {
  Users,
  Heart,
  MessageCircle,
  BookOpen,
  Globe,
  Search,
  Plus,
  ThumbsUp,
  MessageSquare,
  Share2,
  Shield,
  Bell,
  TrendingUp,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import DoctorConsultationSection from "./components/DoctorConnect";

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [language, setLanguage] = useState("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "health",
    anonymous: false,
  });

  const categories = [
    { id: "all", name: "All Topics", icon: Users },
    { id: "health", name: "Health & Wellness", icon: Heart },
    { id: "education", name: "Education", icon: BookOpen },
    { id: "support", name: "Emotional Support", icon: MessageCircle },
  ];

  const discussions = [
    {
      id: 1,
      author: "Priya S.",
      avatar: "PS",
      time: "2 hours ago",
      category: "health",
      title: "Understanding menstrual health - sharing my journey",
      excerpt:
        "I wanted to share my experience learning about menstrual health and how it helped me...",
      likes: 24,
      comments: 12,
      trending: true,
    },
    {
      id: 2,
      author: "Anonymous",
      avatar: "A",
      time: "5 hours ago",
      category: "support",
      title: "Feeling anxious about talking to my daughter",
      excerpt:
        "As a mother, I want to support my daughter but I'm not sure how to start the conversation...",
      likes: 18,
      comments: 8,
      trending: false,
    },
    {
      id: 3,
      author: "Dr. Meera K.",
      avatar: "MK",
      time: "1 day ago",
      category: "education",
      title: "Myth vs Fact: Common misconceptions about women's health",
      excerpt:
        "Let's address some common myths I hear in my practice and provide accurate information...",
      likes: 45,
      comments: 23,
      trending: true,
    },
  ];

  const handleSubmitPost = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New post:", newPost);

    // Reset form and close modal
    setNewPost({
      title: "",
      content: "",
      category: "health",
      anonymous: false,
    });
    setIsModalOpen(false);

    // Show success message (you can implement a toast notification)
    alert("Post submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden  py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Together, We Break{" "}
                <span className="text-pink-500">the Silence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Share stories, ask questions, and support each other with care
                and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Join Discussion
                </button>
                <button className="px-8 py-4 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition border-2 border-pink-200">
                  Learn More
                </button>
              </div>
            </div>

            <Image
              src={"/img/community1.png"}
              alt="community"
              width={500}
              height={500}
            />

            {/* Illustration */}
            {/* <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-linear-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center">
                      <Users className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-coral-200 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-pink-100 rounded-full w-full"></div>
                    <div className="h-3 bg-purple-100 rounded-full w-5/6"></div>
                    <div className="h-3 bg-pink-100 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                        selectedCategory === cat.id
                          ? "bg-pink-100 text-pink-700"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-linear-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-pink-100">
                <h4 className="font-bold text-gray-800 mb-2">
                  Community Guidelines
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Be kind, respectful, and supportive. This is a safe space for
                  everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Search & New Post */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 transition"
                  />
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  <span>New Post</span>
                </button>
              </div>
            </div>

            {/* Discussion Feed */}
            <div className="space-y-6">
              {discussions.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold shrink-0">
                      {post.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-gray-800">
                            {post.author}
                          </h4>
                          {post.trending && (
                            <span className="flex items-center space-x-1 px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
                              <TrendingUp className="w-3 h-3" />
                              <span>Trending</span>
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {post.time}
                        </span>
                      </div>

                      <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full mb-3">
                        {categories.find((c) => c.id === post.category)?.name}
                      </span>

                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-pink-600 cursor-pointer">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center space-x-6 text-gray-500">
                        <button className="flex items-center space-x-2 hover:text-pink-500 transition">
                          <ThumbsUp className="w-5 h-5" />
                          <span className="font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-purple-500 transition">
                          <MessageSquare className="w-5 h-5" />
                          <span className="font-medium">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition">
                          <Share2 className="w-5 h-5" />
                          <span className="font-medium">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-white text-pink-500 rounded-xl font-semibold hover:bg-pink-50 transition border-2 border-pink-200 shadow-md">
                Load More Discussions
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <DoctorConsultationSection />
      </div>

      {/* Footer CTA */}
      <section className="bg-linear-to-r from-pink-500 to-purple-500 py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Voice Matters
          </h2>
          <p className="text-pink-100 text-lg mb-6">
            Join thousands of women, parents, and educators creating a
            supportive community.
          </p>
          <button className="px-8 py-4 bg-white text-pink-500 rounded-full font-bold hover:bg-pink-50 transition shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-linear-to-r from-pink-500 to-purple-500 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white">Create New Post</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitPost} className="p-6 space-y-6">
              {/* Anonymous Toggle */}
              <div className="bg-purple-50 border-2 border-purple-100 rounded-2xl p-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Post Anonymously
                      </span>
                      <p className="text-sm text-gray-600">
                        Your identity will be hidden
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={newPost.anonymous}
                    onChange={(e) =>
                      setNewPost({ ...newPost, anonymous: e.target.checked })
                    }
                    className="w-6 h-6 rounded accent-purple-500"
                  />
                </label>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Category *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories
                    .filter((cat) => cat.id !== "all")
                    .map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() =>
                            setNewPost({ ...newPost, category: cat.id })
                          }
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl border-2 transition ${
                            newPost.category === cat.id
                              ? "border-pink-500 bg-pink-50 text-pink-700"
                              : "border-gray-200 hover:border-pink-300 text-gray-600"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium text-sm">
                            {cat.name}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  placeholder="Give your post a clear, descriptive title..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 transition"
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {newPost.title.length}/100 characters
                </p>
              </div>

              {/* Content Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Share Your Story *
                </label>
                <textarea
                  required
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  placeholder="Share your experience, ask questions, or offer support to others..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 transition resize-none"
                  maxLength={2000}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {newPost.content.length}/2000 characters
                </p>
              </div>

              {/* Community Guidelines Reminder */}
              <div className="bg-pink-50 border-2 border-pink-100 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Community Guidelines</span>
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Be kind, respectful, and supportive</li>
                  <li>• Protect everyone&#39;s privacy and confidentiality</li>
                  <li>• Share constructive and helpful content</li>
                  <li>
                    • Avoid medical advice - encourage professional consultation
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition shadow-lg hover:shadow-xl"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

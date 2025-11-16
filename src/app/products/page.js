"use client";
import React, { useState } from "react";
import {
  Filter,
  Star,
  Heart,
  Check,
  X,
  Info,
  ShoppingCart,
  ChevronRight,
  Droplets,
  Leaf,
  Shield,
  TrendingUp,
  BarChart3,
  Grid,
  Eye,
  AlertCircle,
  Sparkles,
  Plus,
  Phone,
} from "lucide-react";

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [activeTab, setActiveTab] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [flowLevel, setFlowLevel] = useState("");
  const [comfort, setComfort] = useState("");
  const [reusable, setReusable] = useState("");

  const categories = [
    { id: "all", name: "All Products", icon: "🌸" },
    { id: "pads", name: "Pads", icon: "🩸" },
    { id: "tampons", name: "Tampons", icon: "🎯" },
    { id: "cups", name: "Menstrual Cups", icon: "🥤" },
    { id: "panties", name: "Period Panties", icon: "👙" },
    { id: "painRelief", name: "Pain Relief", icon: "💊" },
    { id: "hygiene", name: "Hygiene", icon: "🧴" },
  ];

  const products = [
    {
      id: 1,
      name: "Organic Cotton Pads - Ultra Soft",
      category: "pads",
      image: "🩸",
      absorbency: 4,
      rating: 4.8,
      reviews: 234,
      price: "₹150-200",
      sustainability: 3,
      advantages: [
        "Made from 100% organic cotton",
        "Hypoallergenic and breathable",
        "No chemicals or fragrances",
        "Suitable for sensitive skin",
      ],
      disadvantages: [
        "Higher price point",
        "Limited availability in rural areas",
        "Not reusable",
      ],
      usage: "Change every 4-6 hours",
      material: "Organic Cotton",
      ecoFriendly: false,
      rashRisk: "Low",
      reusableDays: 0,
    },
    {
      id: 2,
      name: "Medical Grade Silicone Cup",
      category: "cups",
      image: "🥤",
      absorbency: 5,
      rating: 4.9,
      reviews: 187,
      price: "₹800-1200",
      sustainability: 5,
      advantages: [
        "Reusable for up to 10 years",
        "Eco-friendly and cost-effective",
        "Can be worn for 12 hours",
        "No chemicals or additives",
      ],
      disadvantages: [
        "Learning curve for insertion",
        "Requires proper cleaning",
        "Not suitable for everyone",
        "Higher initial cost",
      ],
      usage: "Empty and rinse every 8-12 hours",
      material: "Medical Grade Silicone",
      ecoFriendly: true,
      rashRisk: "Very Low",
      reusableDays: 3650,
    },
    {
      id: 3,
      name: "Reusable Period Panties - Bamboo",
      category: "panties",
      image: "👙",
      absorbency: 3,
      rating: 4.7,
      reviews: 156,
      price: "₹600-900",
      sustainability: 5,
      advantages: [
        "Washable and reusable",
        "Comfortable all-day wear",
        "Eco-friendly bamboo fabric",
        "No plastic or chemicals",
      ],
      disadvantages: [
        "Needs washing after each use",
        "May require backup on heavy days",
        "Drying time required",
      ],
      usage: "Wear up to 12 hours, wash and reuse",
      material: "Bamboo Fiber",
      ecoFriendly: true,
      rashRisk: "Very Low",
      reusableDays: 730,
    },
    {
      id: 4,
      name: "Herbal Pain Relief Patch",
      category: "painRelief",
      image: "💊",
      absorbency: 0,
      rating: 4.6,
      reviews: 298,
      price: "₹200-300",
      sustainability: 4,
      advantages: [
        "Natural herbal ingredients",
        "No oral medication needed",
        "Provides targeted relief",
        "Long-lasting effect (8-12 hours)",
      ],
      disadvantages: [
        "May cause skin irritation in some",
        "Takes 15-20 mins to work",
        "Not suitable for severe pain",
      ],
      usage: "Apply on lower abdomen, change after 12 hours",
      material: "Herbal Extract",
      ecoFriendly: true,
      rashRisk: "Medium",
      reusableDays: 0,
    },
    {
      id: 5,
      name: "pH Balanced Intimate Wash",
      category: "hygiene",
      image: "🧴",
      absorbency: 0,
      rating: 4.8,
      reviews: 412,
      price: "₹250-350",
      sustainability: 3,
      advantages: [
        "Maintains natural pH balance",
        "Prevents infections",
        "Gentle and soap-free",
        "Gynecologist recommended",
      ],
      disadvantages: [
        "Must be used regularly",
        "May cause dryness if overused",
        "Not suitable for internal use",
      ],
      usage: "Use daily during shower",
      material: "Natural Extracts",
      ecoFriendly: false,
      rashRisk: "Low",
      reusableDays: 0,
    },
    {
      id: 6,
      name: "Overnight Heavy Flow Pads",
      category: "pads",
      image: "🩸",
      absorbency: 5,
      rating: 4.7,
      reviews: 321,
      price: "₹180-250",
      sustainability: 2,
      advantages: [
        "Extra long for night protection",
        "High absorbency capacity",
        "Leak-proof backing",
        "Wings for security",
      ],
      disadvantages: [
        "Bulky feel",
        "Not eco-friendly",
        "Plastic backing may cause sweating",
      ],
      usage: "Change every 6-8 hours",
      material: "Cotton + Polymer",
      ecoFriendly: false,
      rashRisk: "Medium",
      reusableDays: 0,
    },
  ];

  const educationalCards = [
    {
      title: "When to Change Pads?",
      description: "Change every 4-6 hours to prevent infections",
      icon: "🕐",
      color: "from-pink-100 to-rose-100",
    },
    {
      title: "How to Clean Menstrual Cup?",
      description: "Boil for 5-10 minutes between cycles",
      icon: "🧼",
      color: "from-blue-100 to-cyan-100",
    },
    {
      title: "Disposal Guidelines",
      description: "Wrap in paper, dispose in bin - never flush",
      icon: "♻️",
      color: "from-green-100 to-emerald-100",
    },
    {
      title: "Choosing Right Absorbency",
      description: "Match product to your flow level",
      icon: "💧",
      color: "from-purple-100 to-pink-100",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const getRecommendation = () => {
    if (!flowLevel || !comfort || !reusable) return null;

    if (reusable === "reusable") {
      if (flowLevel === "high") return products.find((p) => p.id === 2); // Cup
      return products.find((p) => p.id === 3); // Period Panties
    } else {
      if (flowLevel === "high") return products.find((p) => p.id === 6); // Heavy flow pads
      return products.find((p) => p.id === 1); // Regular pads
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <div className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Safe & Verified Products
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Period Care Products
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose safe, comfortable, and sustainable menstrual products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 overflow-x-auto">
          <div className="flex items-center space-x-3 min-w-max">
            <Filter className="w-5 h-5 text-gray-600 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                  selectedCategory === cat.id
                    ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Smart Recommendation Section */}
        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Which product suits me?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Flow Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Flow Level
              </label>
              <select
                value={flowLevel}
                onChange={(e) => setFlowLevel(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Comfort Preference */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Comfort
              </label>
              <select
                value={comfort}
                onChange={(e) => setComfort(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select...</option>
                <option value="soft">Soft & Gentle</option>
                <option value="secure">Secure & Leak-proof</option>
                <option value="breathable">Breathable</option>
              </select>
            </div>

            {/* Reusable vs Disposable */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preference
              </label>
              <select
                value={reusable}
                onChange={(e) => setReusable(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select...</option>
                <option value="disposable">Disposable</option>
                <option value="reusable">Reusable</option>
              </select>
            </div>
          </div>

          {/* Recommendation Result */}
          {recommendation && (
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-300">
              <div className="flex items-start space-x-4">
                <div className="text-6xl">{recommendation.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ✨ Recommended: {recommendation.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Based on your preferences, this product offers the best
                    match for your needs.
                  </p>
                  <button
                    onClick={() => setSelectedProduct(recommendation)}
                    className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Toggle */}
        {selectedProducts.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-900">
                {selectedProducts.length} product(s) selected for comparison
              </span>
            </div>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              {showComparison ? "Hide" : "Compare Now"}
            </button>
          </div>
        )}

        {/* Comparison Table */}
        {showComparison && selectedProducts.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Product Comparison
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">
                    Feature
                  </th>
                  {selectedProducts.map((id) => {
                    const product = products.find((p) => p.id === id);
                    return (
                      <th key={id} className="text-center py-4 px-4">
                        <div className="text-4xl mb-2">{product.image}</div>
                        <p className="font-semibold text-sm text-gray-900">
                          {product.name}
                        </p>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">Price</td>
                  {selectedProducts.map((id) => (
                    <td
                      key={id}
                      className="text-center py-4 px-4 text-gray-900"
                    >
                      {products.find((p) => p.id === id).price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-700">
                    Absorbency
                  </td>
                  {selectedProducts.map((id) => (
                    <td key={id} className="text-center py-4 px-4">
                      <div className="flex justify-center space-x-1">
                        {[
                          ...Array(
                            products.find((p) => p.id === id).absorbency
                          ),
                        ].map((_, i) => (
                          <Droplets
                            key={i}
                            className="w-4 h-4 text-blue-500 fill-blue-500"
                          />
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">
                    Eco-Friendly
                  </td>
                  {selectedProducts.map((id) => (
                    <td key={id} className="text-center py-4 px-4">
                      {products.find((p) => p.id === id).ecoFriendly ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-700">
                    Rash Risk
                  </td>
                  {selectedProducts.map((id) => (
                    <td
                      key={id}
                      className="text-center py-4 px-4 text-gray-900"
                    >
                      {products.find((p) => p.id === id).rashRisk}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">
                    Reusable Days
                  </td>
                  {selectedProducts.map((id) => (
                    <td
                      key={id}
                      className="text-center py-4 px-4 text-gray-900"
                    >
                      {products.find((p) => p.id === id).reusableDays || "N/A"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-600">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Product Image */}
                <div className="bg-linear-to-br from-pink-100 to-purple-100 p-8 flex items-center justify-center relative">
                  <div className="text-7xl">{product.image}</div>
                  {product.ecoFriendly && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Leaf className="w-3 h-3" />
                      <span>Eco</span>
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 left-3 p-2 rounded-full transition-all ${
                      wishlist.includes(product.id)
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-600 hover:bg-pink-100"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id) ? "fill-white" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Rating & Absorbency */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-gray-900">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.absorbency)].map((_, i) => (
                        <Droplets
                          key={i}
                          className="w-4 h-4 text-blue-500 fill-blue-500"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold text-pink-600 mb-4">
                    {product.price}
                  </p>

                  {/* Tabs */}
                  <div className="mb-4">
                    <div className="flex space-x-2 mb-3">
                      <button
                        onClick={() =>
                          setActiveTab({
                            ...activeTab,
                            [product.id]: "advantages",
                          })
                        }
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                          !activeTab[product.id] ||
                          activeTab[product.id] === "advantages"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        Advantages
                      </button>
                      <button
                        onClick={() =>
                          setActiveTab({
                            ...activeTab,
                            [product.id]: "disadvantages",
                          })
                        }
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                          activeTab[product.id] === "disadvantages"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        Disadvantages
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 min-h-[120px]">
                      {!activeTab[product.id] ||
                      activeTab[product.id] === "advantages" ? (
                        <ul className="space-y-2">
                          {product.advantages.slice(0, 3).map((adv, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-700"
                            >
                              <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-2">
                          {product.disadvantages.slice(0, 3).map((dis, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-700"
                            >
                              <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                              <span>{dis}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        disabled={
                          !selectedProducts.includes(product.id) &&
                          selectedProducts.length >= 3
                        }
                        className="w-5 h-5 text-purple-600 rounded"
                      />
                      <span className="text-sm text-gray-600">Compare</span>
                    </label>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Info Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Tips & Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalCards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-linear-to-br ${card.color} rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="text-5xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{card.description}</p>
                <button className="text-purple-600 font-semibold text-sm flex items-center space-x-1">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Product Image & Price */}
              <div className="flex items-start space-x-6">
                <div className="bg-linear-to-br from-pink-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-8xl">{selectedProduct.image}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">
                      {selectedProduct.rating}
                    </span>
                    <span className="text-gray-600">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-pink-600 mb-4">
                    {selectedProduct.price}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>{selectedProduct.material}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Leaf className="w-4 h-4" />
                      <span>
                        Sustainability: {selectedProduct.sustainability}/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Advantages</span>
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.advantages.map((adv, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <span>Disadvantages</span>
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.disadvantages.map((dis, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage Guide */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  <span>How to Use</span>
                </h3>
                <p className="text-gray-700">{selectedProduct.usage}</p>
              </div>

              {/* Product Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Absorbency Level</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(selectedProduct.absorbency)].map((_, i) => (
                      <Droplets
                        key={i}
                        className="w-5 h-5 text-blue-500 fill-blue-500"
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Eco-Friendly</p>
                  <p className="font-bold text-gray-900">
                    {selectedProduct.ecoFriendly ? "Yes ✅" : "No"}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Rash Risk</p>
                  <p className="font-bold text-gray-900">
                    {selectedProduct.rashRisk}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Reusable</p>
                  <p className="font-bold text-gray-900">
                    {selectedProduct.reusableDays > 0
                      ? `${selectedProduct.reusableDays} days`
                      : "Disposable"}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                    wishlist.includes(selectedProduct.id)
                      ? "bg-pink-500 text-white"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(selectedProduct.id) ? "fill-white" : ""
                    }`}
                  />
                  <span>
                    {wishlist.includes(selectedProduct.id)
                      ? "In Wishlist"
                      : "Add to Wishlist"}
                  </span>
                </button>
                <button className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Safety Badge */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-bold text-green-900">
                    Doctor Verified & Safe
                  </p>
                  <p className="text-sm text-green-700">
                    Gynecologist recommended and tested
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our AI assistant can help you find the perfect product based on your
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Chat with AI</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Consult Doctor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

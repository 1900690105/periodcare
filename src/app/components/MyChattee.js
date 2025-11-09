"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Sparkles } from "lucide-react";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const [language, setLanguage] = useState("Marathi");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!question.trim()) return;
    setLoading(true);

    const userMessage = question;
    setChatHistory((prev) => [...prev, { type: "user", text: userMessage }]);
    setQuestion("");

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage, language: language }),
      });
      const data = await res.json();
      console.log(data);

      setChatHistory((prev) => [...prev, { type: "bot", text: data.answer }]);
    } catch (err) {
      console.error("Error:", err);
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">PeriodCare Assistant</h2>
              <p className="text-sm text-white/80">
                Your personal health companion
              </p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {chatHistory.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="bg-linear-to-br from-pink-400 to-purple-500 p-4 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Welcome to PeriodCare!
              </h3>
              <p className="text-gray-500 max-w-sm">
                Ask me anything about menstrual health, symptoms, or wellness
                tips.
              </p>
            </div>
          )}

          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  msg.type === "user"
                    ? "bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-br-sm"
                    : "bg-white text-gray-800 shadow-md rounded-bl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 shadow-md rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2 items-end">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows="1"
              className="flex-1 resize-none p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              style={{ maxHeight: "100px" }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !question.trim()}
              className="bg-linear-to-r from-pink-500 to-purple-500 text-white p-3 rounded-2xl hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

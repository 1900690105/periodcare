"use client";
import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Heart, Sparkles, Check } from "lucide-react";

export default function MenstrualHealthChatbot() {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    language: "English",
    bloodGroup: "",
    religion: "",
    state: "",
    country: "India",
    maritalStatus: "",
    firstPeriodAge: "",
    dietType: "",
    allergies: [],
    goals: [],
    preferredHealing: [],
    knownConditions: [],
    period_start: "",
    cycle_length: "28",
    period_duration: "5",
    symptoms: [],
    mood: "",
    crampSeverity: 5,
  });

  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Tamil",
    "Telugu",
    "Bengali",
    "Kannada",
    "Malayalam",
    "Gujarati",
    "Punjabi",
    "Urdu",
    "Odia",
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Other",
    "Prefer not to say",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const goals = [
    { id: "reduceCramps", label: "Reduce Cramps" },
    { id: "weightManagement", label: "Weight Management" },
    { id: "betterNutrition", label: "Better Nutrition" },
    { id: "trackCycle", label: "Track Cycle" },
    { id: "improveMood", label: "Improve Mood" },
    { id: "generalWellness", label: "General Wellness" },
  ];

  const healingOptions = [
    { id: "yoga", label: "Yoga" },
    { id: "breathing", label: "Breathing Exercises" },
    { id: "herbalRemedy", label: "Herbal Remedy" },
    { id: "meditation", label: "Meditation" },
    { id: "exercise", label: "Exercise" },
  ];

  const conditions = [
    { id: "pcos", label: "PCOS" },
    { id: "endometriosis", label: "Endometriosis" },
    { id: "fibroids", label: "Fibroids" },
    { id: "thyroid", label: "Thyroid Issues" },
    { id: "anemia", label: "Anemia" },
    { id: "noneCondition", label: "None" },
  ];

  const symptoms = [
    { id: "cramps", label: "Cramps" },
    { id: "bloating", label: "Bloating" },
    { id: "headache", label: "Headache" },
    { id: "fatigue", label: "Fatigue" },
    { id: "mood_swings", label: "Mood Swings" },
    { id: "breast_tenderness", label: "Breast Tenderness" },
    { id: "back_pain", label: "Back Pain" },
    { id: "acne", label: "Acne" },
  ];

  const moods = [
    "Happy",
    "Anxious",
    "Irritable",
    "Sad",
    "Energetic",
    "Tired",
    "Normal",
  ];

  const dietTypes = ["Vegetarian", "Non-Vegetarian", "Vegan", "Eggetarian"];

  const questions = [
    {
      id: "name",
      text: "Hello! 👋 I'm here to help you with your menstrual health journey. What's your name?",
      type: "text",
      field: "name",
    },
    {
      id: "age",
      text: "Nice to meet you, {name}! 🌸 How old are you?",
      type: "number",
      field: "age",
    },
    {
      id: "language",
      text: "Which language do you prefer for communication?",
      type: "select",
      field: "language",
      options: languages,
    },
    {
      id: "bloodGroup",
      text: "What's your blood group?",
      type: "select",
      field: "bloodGroup",
      options: bloodGroups,
    },
    {
      id: "religion",
      text: "Which religion do you identify with? (Optional)",
      type: "select",
      field: "religion",
      options: religions,
    },
    {
      id: "state",
      text: "Which state are you from?",
      type: "select",
      field: "state",
      options: indianStates,
    },
    {
      id: "maritalStatus",
      text: "What's your marital status?",
      type: "select",
      field: "maritalStatus",
      options: ["Single", "Married"],
    },
    {
      id: "firstPeriodAge",
      text: "At what age did you get your first period?",
      type: "number",
      field: "firstPeriodAge",
    },
    {
      id: "dietType",
      text: "What's your diet type?",
      type: "select",
      field: "dietType",
      options: dietTypes,
    },
    {
      id: "allergies",
      text: "Do you have any food allergies? (Type them separated by commas, or type 'none')",
      type: "text",
      field: "allergies",
    },
    {
      id: "goals",
      text: "What are your wellness goals? (Select all that apply)",
      type: "multiselect",
      field: "goals",
      options: goals,
    },
    {
      id: "preferredHealing",
      text: "What healing practices do you prefer? (Select all that apply)",
      type: "multiselect",
      field: "preferredHealing",
      options: healingOptions,
    },
    {
      id: "knownConditions",
      text: "Do you have any known health conditions? (Select all that apply)",
      type: "multiselect",
      field: "knownConditions",
      options: conditions,
    },
    {
      id: "period_start",
      text: "When was the first day of your last period? (YYYY-MM-DD)",
      type: "date",
      field: "period_start",
    },
    {
      id: "cycle_length",
      text: "What's your average cycle length in days? (Default is 28)",
      type: "number",
      field: "cycle_length",
    },
    {
      id: "period_duration",
      text: "How many days does your period usually last? (Default is 5)",
      type: "number",
      field: "period_duration",
    },
    {
      id: "symptoms",
      text: "What symptoms do you typically experience? (Select all that apply)",
      type: "multiselect",
      field: "symptoms",
      options: symptoms,
    },
    {
      id: "mood",
      text: "How are you feeling today?",
      type: "select",
      field: "mood",
      options: moods,
    },
    {
      id: "crampSeverity",
      text: "On a scale of 1-10, how severe are your cramps usually? (1 = minimal, 10 = severe)",
      type: "slider",
      field: "crampSeverity",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  const addBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text }]);
      setIsTyping(false);
    }, 500);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
  };

  const handleTextSubmit = () => {
    if (!currentInput.trim()) return;

    const question = questions[currentQuestion];
    addUserMessage(currentInput);

    let value = currentInput;
    if (question.field === "allergies") {
      value =
        currentInput.toLowerCase() === "none"
          ? []
          : currentInput.split(",").map((s) => s.trim());
    }

    setFormData((prev) => ({ ...prev, [question.field]: value }));
    setCurrentInput("");

    moveToNextQuestion();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTextSubmit();
    }
  };

  const handleOptionSelect = (value) => {
    const question = questions[currentQuestion];
    addUserMessage(value);
    setFormData((prev) => ({ ...prev, [question.field]: value }));
    moveToNextQuestion();
  };

  const handleMultiSelect = (selectedItems) => {
    const question = questions[currentQuestion];
    const selectedLabels = selectedItems.map((item) => item.label).join(", ");
    addUserMessage(selectedLabels || "None selected");

    const selectedIds = selectedItems.map((item) => item.id);
    setFormData((prev) => ({ ...prev, [question.field]: selectedIds }));
    moveToNextQuestion();
  };

  const handleSliderSubmit = (value) => {
    addUserMessage(`${value}/10`);
    setFormData((prev) => ({ ...prev, crampSeverity: value }));
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        const nextQuestion = questions[currentQuestion + 1];
        let questionText = nextQuestion.text.replace("{name}", formData.name);
        addBotMessage(questionText);
        setCurrentQuestion(currentQuestion + 1);
      }, 800);
    } else {
      setTimeout(() => {
        addBotMessage(
          "🎉 Thank you for completing your profile! Your personalized wellness plan is being prepared. We'll help you track your cycle and improve your health journey!"
        );
        console.log("Final Form Data:", formData);
      }, 800);
    }
  };

  const renderCurrentInput = () => {
    const question = questions[currentQuestion];

    if (
      question.type === "text" ||
      question.type === "number" ||
      question.type === "date"
    ) {
      return (
        <div className="flex gap-2">
          <input
            type={question.type}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-3 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none"
            placeholder={
              question.type === "date" ? "YYYY-MM-DD" : "Type here..."
            }
            autoFocus
          />
          <button
            onClick={handleTextSubmit}
            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      );
    }

    if (question.type === "select") {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-3 bg-white border-2 border-pink-200 rounded-xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 font-medium text-gray-700"
            >
              {option}
            </button>
          ))}
        </div>
      );
    }

    if (question.type === "multiselect") {
      return (
        <MultiSelectInput
          options={question.options}
          onSubmit={handleMultiSelect}
        />
      );
    }

    if (question.type === "slider") {
      return <SliderInput onSubmit={handleSliderSubmit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Wellness Assistant
              </h1>
              <p className="text-sm text-gray-500">
                Your personal menstrual health companion
              </p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Chat Messages */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4 h-[500px] overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[80%] ${
                    message.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "bot"
                        ? "bg-gradient-to-r from-pink-400 to-purple-400"
                        : "bg-gradient-to-r from-blue-400 to-cyan-400"
                    }`}
                  >
                    {message.type === "bot" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.type === "bot"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gray-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        {currentQuestion < questions.length && !isTyping && (
          <div className="bg-white rounded-3xl shadow-lg p-6">
            {renderCurrentInput()}
          </div>
        )}
      </div>
    </div>
  );
}

function MultiSelectInput({ options, onSubmit }) {
  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    if (selected.find((s) => s.id === option.id)) {
      setSelected(selected.filter((s) => s.id !== option.id));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 max-h-80 overflow-y-auto p-2">
        {options.map((option) => {
          const isSelected = selected.find((s) => s.id === option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggleOption(option)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white border-2 border-pink-400"
                  : "bg-white border-2 border-pink-200 text-gray-700 hover:border-pink-400 hover:bg-pink-50"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {isSelected && <Check className="w-4 h-4" />}
                {option.label}
              </div>
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onSubmit(selected)}
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
      >
        Continue ({selected.length} selected)
      </button>
    </div>
  );
}

function SliderInput({ onSubmit }) {
  const [value, setValue] = useState(5);

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Minimal</span>
          <span className="text-2xl font-bold text-pink-500">{value}</span>
          <span className="text-sm text-gray-600">Severe</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-pink-400"
        />
        <div className="flex justify-between mt-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <span key={num} className="text-xs text-gray-400">
              {num}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => onSubmit(value)}
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
      >
        Continue
      </button>
    </div>
  );
}

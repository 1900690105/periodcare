import React, { useState } from "react";
import {
  Trophy,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
  Target,
} from "lucide-react";

export default function MenstrualHealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How long does a typical menstrual cycle last?",
      options: ["10-15 days", "21-35 days", "40-45 days", "50-60 days"],
      correctAnswer: 1,
      explanation:
        "A typical menstrual cycle lasts between 21-35 days, with 28 days being the average. Every woman's cycle is unique!",
    },
    {
      id: 2,
      question: "How often should you change your menstrual pad?",
      options: [
        "Once a day",
        "Every 8-10 hours",
        "Every 4-6 hours",
        "Only when it's full",
      ],
      correctAnswer: 2,
      explanation:
        "For proper hygiene and to prevent infections, you should change your pad every 4-6 hours, even if it's not completely soaked.",
    },
    {
      id: 3,
      question: "Which of these foods can help reduce period cramps?",
      options: [
        "Salty snacks",
        "Caffeinated drinks",
        "Leafy greens and bananas",
        "Processed foods",
      ],
      correctAnswer: 2,
      explanation:
        "Foods rich in magnesium and potassium like leafy greens and bananas can help reduce cramps. Avoid excess salt and caffeine.",
    },
    {
      id: 4,
      question: "Is it safe to exercise during your period?",
      options: [
        "No, never exercise",
        "Yes, light to moderate exercise is beneficial",
        "Only on the last day",
        "Exercise makes it worse",
      ],
      correctAnswer: 1,
      explanation:
        "Light to moderate exercise can actually help reduce cramps and improve mood during menstruation. Listen to your body!",
    },
    {
      id: 5,
      question: "What is a healthy way to manage period pain?",
      options: [
        "Ignore it completely",
        "Use heat therapy and prescribed pain relievers",
        "Avoid all activities",
        "Skip meals",
      ],
      correctAnswer: 1,
      explanation:
        "Heat therapy (heating pads), prescribed pain relievers, and gentle exercise are healthy ways to manage period pain. Always consult a doctor for severe pain.",
    },
  ];

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return; // Don't allow changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId: questions[currentQuestion].id,
        selectedAnswer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      return {
        title: "Perfect Score! 🎉",
        message: "You're a menstrual health expert! Keep spreading awareness!",
        emoji: "🏆",
        color: "from-yellow-400 to-orange-400",
      };
    } else if (percentage >= 80) {
      return {
        title: "Excellent Work! 💪",
        message:
          "Great job! You're breaking the taboo and empowering yourself!",
        emoji: "🌟",
        color: "from-green-400 to-emerald-400",
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Effort! 👍",
        message: "You're on the right track! Keep learning and growing!",
        emoji: "💜",
        color: "from-purple-400 to-pink-400",
      };
    } else {
      return {
        title: "Keep Learning! 📚",
        message:
          "Every step counts! Explore our education section to learn more!",
        emoji: "🌸",
        color: "from-pink-400 to-rose-400",
      };
    }
  };

  // Quiz Completed Screen
  if (quizCompleted) {
    const result = getScoreMessage();
    return (
      <div className="flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Confetti Background */}
            <div
              className={`bg-linear-to-br ${result.color} p-8 md:p-12 text-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 text-4xl animate-bounce">
                  🎉
                </div>
                <div
                  className="absolute top-20 right-10 text-3xl animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  ✨
                </div>
                <div
                  className="absolute bottom-20 left-20 text-3xl animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  🌟
                </div>
                <div
                  className="absolute bottom-10 right-20 text-4xl animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                >
                  💫
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-7xl mb-4">{result.emoji}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {result.title}
                </h2>
                <p className="text-white/90 text-lg">{result.message}</p>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {/* Score Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center space-x-3 bg-linear-to-r from-pink-100 to-purple-100 px-8 py-4 rounded-2xl">
                  <Trophy className="w-8 h-8 text-pink-600" />
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">
                      Your Score
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {score} / {questions.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Breakdown */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quiz Summary
                </h3>
                {questions.map((q, index) => {
                  const userAnswer = answeredQuestions[index];
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border-2 ${
                        userAnswer.isCorrect
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {userAnswer.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">
                            Question {index + 1}
                          </p>
                          <p className="text-gray-700 text-sm">{q.question}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Retake Quiz</span>
                </button>
                <button className="flex-1 bg-white border-2 border-pink-300 text-pink-600 py-4 px-6 rounded-xl font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
                  <span>Continue Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Share Achievement */}
              <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
                <p className="text-gray-700 font-medium mb-3">
                  🎯 Share your achievement and inspire others!
                </p>
                <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all text-sm">
                  Share Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Questions Screen
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Quiz Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-medium text-sm">
              Awareness Check
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            How much do you know about{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
              menstruation?
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Test your knowledge and learn something new!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-pink-600">
              Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-pink-500 to-purple-500 transition-all duration-500 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-linear-to-r from-pink-500 to-purple-500 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {questions[currentQuestion].question}
            </h2>
          </div>

          <div className="p-6 md:p-8 space-y-4">
            {/* Answer Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect =
                  index === questions[currentQuestion].correctAnswer;
                const showCorrectAnswer = showResult && isCorrect;
                const showWrongAnswer = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 md:p-5 rounded-xl border-2 text-left transition-all transform hover:scale-102 active:scale-98 ${
                      showCorrectAnswer
                        ? "bg-green-50 border-green-500 shadow-lg"
                        : showWrongAnswer
                        ? "bg-red-50 border-red-500"
                        : isSelected
                        ? "bg-pink-50 border-pink-500 shadow-lg"
                        : "bg-white border-gray-200 hover:border-pink-300 hover:shadow-md"
                    } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Option Indicator */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${
                          showCorrectAnswer
                            ? "bg-green-500 text-white"
                            : showWrongAnswer
                            ? "bg-red-500 text-white"
                            : isSelected
                            ? "bg-pink-500 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {showCorrectAnswer ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : showWrongAnswer ? (
                          <XCircle className="w-5 h-5" />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>

                      {/* Option Text */}
                      <span
                        className={`flex-1 font-medium ${
                          showCorrectAnswer
                            ? "text-green-900"
                            : showWrongAnswer
                            ? "text-red-900"
                            : isSelected
                            ? "text-pink-900"
                            : "text-gray-700"
                        }`}
                      >
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation (shown after answer) */}
            {showResult && (
              <div className="mt-6 p-5 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">
                      Did you know?
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="pt-4">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <span>Submit Answer</span>
                  <CheckCircle className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "View Results"}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            💜 Every question you answer helps break the stigma around
            menstruation!
          </p>
        </div>
      </div>
    </div>
  );
}

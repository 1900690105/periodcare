"use client";
import React, { useState } from "react";
import {
  ClipboardCheck,
  AlertCircle,
  CheckCircle,
  Heart,
  ArrowRight,
  ArrowLeft,
  Globe,
  Info,
  Phone,
  Home,
  AlertTriangle,
  Sparkles,
  X,
  TrendingUp,
} from "lucide-react";

export default function HealthChecker() {
  const [language, setLanguage] = useState("en");

  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const [selectedDisease, setSelectedDisease] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const diseases = [
    {
      id: "endometriosis",
      name: {
        en: "Endometriosis",
        hi: "एंडोमेट्रियोसिस",
        mr: "एंडोमेट्रिओसिस",
      },
      icon: "🌸",
      color: "from-pink-400 to-rose-400",
      questions: [
        {
          id: 1,
          question: {
            en: "Where do you feel pain during periods?",
            hi: "पीरियड्स के दौरान आपको कहाँ दर्द होता है?",
            mr: "पिरियड्स दरम्यान तुम्हाला कुठे दुखते?",
          },
          options: [
            {
              text: {
                en: "Lower abdomen",
                hi: "निचले पेट में",
                mr: "खालच्या पोटात",
              },
              score: 1,
            },
            {
              text: {
                en: "Lower back/thighs",
                hi: "पीठ/जांघों में",
                mr: "पाठ/मांड्यांमध्ये",
              },
              score: 2,
            },
            {
              text: {
                en: "Pelvic + thighs + lower back",
                hi: "श्रोणि + जांघें + पीठ",
                mr: "श्रोणी + मांड्या + पाठ",
              },
              score: 3,
            },
            {
              text: {
                en: "Entire pelvis",
                hi: "पूरे श्रोणि में",
                mr: "संपूर्ण श्रोणीमध्ये",
              },
              score: 4,
            },
          ],
        },
        {
          id: 2,
          question: {
            en: "How intense is your pelvic pain during periods?",
            hi: "पीरियड्स के दौरान आपके श्रोणि दर्द की तीव्रता कैसी होती है?",
            mr: "पिरियड्स दरम्यान तुमचा पेल्विक दुखापत किती तीव्र असतो?",
          },
          options: [
            { text: { en: "Mild", hi: "हल्का", mr: "हलका" }, score: 1 },
            { text: { en: "Moderate", hi: "मध्यम", mr: "मध्यम" }, score: 2 },
            { text: { en: "Severe", hi: "तेज़", mr: "जोरदार" }, score: 3 },
            {
              text: {
                en: "Unbearable (can't walk/stand)",
                hi: "बहुत तेज़ (चलना मुश्किल)",
                mr: "असह्य (उभे राहणे कठीण)",
              },
              score: 4,
            },
          ],
        },
        {
          id: 3,
          question: {
            en: "Do you experience pain during/after intercourse?",
            hi: "क्या आपको संभोग के दौरान/बाद में दर्द होता है?",
            mr: "संभोग दरम्यान/नंतर तुम्हाला दुखते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            { text: { en: "Rarely", hi: "कभी-कभी", mr: "क्वचितच" }, score: 2 },
            { text: { en: "Sometimes", hi: "कई बार", mr: "कधीकधी" }, score: 3 },
            {
              text: { en: "Yes, always", hi: "हाँ, हमेशा", mr: "होय, नेहमी" },
              score: 4,
            },
          ],
        },
        {
          id: 4,
          question: {
            en: "Do you have painful bowel movements during periods?",
            hi: "क्या पीरियड्स के दौरान मल त्याग में दर्द होता है?",
            mr: "पिरियड्स दरम्यान मलत्याग वेदनादायक असतो का?",
          },
          options: [
            {
              text: { en: "Never", hi: "कभी नहीं", mr: "कधीच नाही" },
              score: 1,
            },
            {
              text: { en: "Sometimes", hi: "कभी-कभी", mr: "कधीकधी" },
              score: 2,
            },
            { text: { en: "Often", hi: "अक्सर", mr: "अनेकदा" }, score: 3 },
            { text: { en: "Always", hi: "हमेशा", mr: "नेहमी" }, score: 4 },
          ],
        },
        {
          id: 5,
          question: {
            en: "Does pain continue after the period ends?",
            hi: "क्या पीरियड खत्म होने के बाद भी दर्द रहता है?",
            mr: "पिरियड संपल्यानंतरही दुखणे चालू राहते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "1-2 days", hi: "1-2 दिन", mr: "1-2 दिवस" },
              score: 2,
            },
            {
              text: { en: "3-5 days", hi: "3-5 दिन", mr: "3-5 दिवस" },
              score: 3,
            },
            {
              text: {
                en: "Whole month",
                hi: "पूरे महीने",
                mr: "संपूर्ण महिना",
              },
              score: 4,
            },
          ],
        },
      ],
      riskLevels: {
        low: {
          en: "Low possibility of Endometriosis",
          hi: "एंडोमेट्रियोसिस की कम संभावना",
          mr: "एंडोमेट्रिओसिसची कमी शक्यता",
        },
        medium: {
          en: "Some symptoms match, medical consultation recommended",
          hi: "कुछ लक्षण मेल खाते हैं, डॉक्टर से सलाह लें",
          mr: "काही लक्षणे जुळतात, डॉक्टरांचा सल्ला घ्या",
        },
        high: {
          en: "High possibility — consult a gynecologist soon",
          hi: "अधिक संभावना — जल्द स्त्री रोग विशेषज्ञ से मिलें",
          mr: "जास्त शक्यता — लवकरच स्त्रीरोग तज्ञांना भेटा",
        },
      },
    },
    {
      id: "adenomyosis",
      name: {
        en: "Adenomyosis",
        hi: "एडेनोमायोसिस",
        mr: "एडेनोमायोसिस",
      },
      icon: "💮",
      color: "from-purple-400 to-pink-400",
      questions: [
        {
          id: 1,
          question: {
            en: "How heavy is your menstrual bleeding?",
            hi: "आपका मासिक रक्तस्राव कितना भारी है?",
            mr: "तुमचा मासिक रक्तस्त्राव किती जास्त आहे?",
          },
          options: [
            { text: { en: "Normal", hi: "सामान्य", mr: "सामान्य" }, score: 1 },
            {
              text: {
                en: "Slightly heavy",
                hi: "थोड़ा भारी",
                mr: "थोडा जास्त",
              },
              score: 2,
            },
            {
              text: { en: "Very heavy", hi: "बहुत भारी", mr: "खूप जास्त" },
              score: 3,
            },
            {
              text: {
                en: "Extremely heavy (changing pad hourly)",
                hi: "बेहद भारी (हर घंटे पैड बदलना)",
                mr: "अत्यंत जास्त (दर तासाला पॅड बदलणे)",
              },
              score: 4,
            },
          ],
        },
        {
          id: 2,
          question: {
            en: "Do you pass large blood clots?",
            hi: "क्या आपको बड़े खून के थक्के निकलते हैं?",
            mr: "तुम्हाला मोठे रक्ताचे गुठळे येतात का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "Small clots", hi: "छोटे थक्के", mr: "लहान गुठळे" },
              score: 2,
            },
            {
              text: {
                en: "Medium sized clots",
                hi: "मध्यम आकार के थक्के",
                mr: "मध्यम आकाराचे गुठळे",
              },
              score: 3,
            },
            {
              text: {
                en: "Large clots (coin-sized or bigger)",
                hi: "बड़े थक्के (सिक्के के आकार या बड़े)",
                mr: "मोठे गुठळे (नाण्यापेक्षा मोठे)",
              },
              score: 4,
            },
          ],
        },
        {
          id: 3,
          question: {
            en: "Do you experience deep uterine pain?",
            hi: "क्या आपको गहरा गर्भाशय दर्द होता है?",
            mr: "तुम्हाला खोल गर्भाशयाची वेदना होते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            { text: { en: "Mild", hi: "हल्का", mr: "हलका" }, score: 2 },
            { text: { en: "Moderate", hi: "मध्यम", mr: "मध्यम" }, score: 3 },
            { text: { en: "Severe", hi: "तीव्र", mr: "तीव्र" }, score: 4 },
          ],
        },
        {
          id: 4,
          question: {
            en: "How long does your period bleeding last?",
            hi: "आपका पीरियड कितने दिन चलता है?",
            mr: "तुमचा पिरियड किती दिवस चालतो?",
          },
          options: [
            {
              text: { en: "3-5 days", hi: "3-5 दिन", mr: "3-5 दिवस" },
              score: 1,
            },
            {
              text: { en: "5-7 days", hi: "5-7 दिन", mr: "5-7 दिवस" },
              score: 2,
            },
            {
              text: { en: "7-10 days", hi: "7-10 दिन", mr: "7-10 दिवस" },
              score: 3,
            },
            {
              text: {
                en: "More than 10 days",
                hi: "10 दिन से अधिक",
                mr: "10 दिवसांपेक्षा जास्त",
              },
              score: 4,
            },
          ],
        },
        {
          id: 5,
          question: {
            en: "Do you feel uterine heaviness or swelling?",
            hi: "क्या आपको गर्भाशय में भारीपन या सूजन महसूस होती है?",
            mr: "तुम्हाला गर्भाशयात जडपणा किंवा सूज जाणवते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            { text: { en: "Slightly", hi: "थोड़ा", mr: "थोडे" }, score: 2 },
            { text: { en: "Moderately", hi: "मध्यम", mr: "मध्यम" }, score: 3 },
            {
              text: {
                en: "Severe swelling/bloating",
                hi: "गंभीर सूजन",
                mr: "गंभीर सूज",
              },
              score: 4,
            },
          ],
        },
      ],
      riskLevels: {
        low: {
          en: "Low risk of Adenomyosis",
          hi: "एडेनोमायोसिस का कम जोखिम",
          mr: "एडेनोमायोसिसचा कमी धोका",
        },
        medium: {
          en: "Moderate symptoms present, consult doctor",
          hi: "मध्यम लक्षण हैं, डॉक्टर से मिलें",
          mr: "मध्यम लक्षणे आहेत, डॉक्टरांना भेटा",
        },
        high: {
          en: "High risk — immediate medical attention needed",
          hi: "उच्च जोखिम — तुरंत चिकित्सा ध्यान की आवश्यकता",
          mr: "जास्त धोका — त्वरित वैद्यकीय लक्ष आवश्यक",
        },
      },
    },
    {
      id: "dysmenorrhea",
      name: {
        en: "Severe Dysmenorrhea",
        hi: "गंभीर कष्टार्तव",
        mr: "तीव्र कष्टार्तव",
      },
      icon: "💊",
      color: "from-red-400 to-orange-400",
      questions: [
        {
          id: 1,
          question: {
            en: "Do you experience severe cramps during periods?",
            hi: "क्या पीरियड्स के दौरान गंभीर ऐंठन होती है?",
            mr: "पिरियड्स दरम्यान तीव्र पेटदुखी होते का?",
          },
          options: [
            {
              text: {
                en: "No cramps",
                hi: "कोई ऐंठन नहीं",
                mr: "पेटदुखी नाही",
              },
              score: 1,
            },
            {
              text: { en: "Mild cramps", hi: "हल्की ऐंठन", mr: "हलकी पेटदुखी" },
              score: 2,
            },
            {
              text: {
                en: "Moderate cramps",
                hi: "मध्यम ऐंठन",
                mr: "मध्यम पेटदुखी",
              },
              score: 3,
            },
            {
              text: {
                en: "Severe unbearable cramps",
                hi: "असहनीय तेज ऐंठन",
                mr: "असह्य तीव्र पेटदुखी",
              },
              score: 4,
            },
          ],
        },
        {
          id: 2,
          question: {
            en: "Do you need painkillers every menstrual cycle?",
            hi: "क्या हर मासिक चक्र में दर्द निवारक की आवश्यकता होती है?",
            mr: "प्रत्येक मासिक पाळीमध्ये वेदनाशामकांची गरज असते का?",
          },
          options: [
            {
              text: { en: "Never", hi: "कभी नहीं", mr: "कधीच नाही" },
              score: 1,
            },
            { text: { en: "Rarely", hi: "कभी-कभी", mr: "क्वचितच" }, score: 2 },
            { text: { en: "Often", hi: "अक्सर", mr: "अनेकदा" }, score: 3 },
            {
              text: {
                en: "Every time, multiple doses",
                hi: "हर बार, कई खुराक",
                mr: "प्रत्येक वेळी, अनेक डोस",
              },
              score: 4,
            },
          ],
        },
        {
          id: 3,
          question: {
            en: "Do you experience vomiting or nausea during periods?",
            hi: "क्या पीरियड्स के दौरान उल्टी या मतली होती है?",
            mr: "पिरियड्स दरम्यान उलटी किंवा मळमळ होते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "Mild nausea", hi: "हल्की मतली", mr: "हलकी मळमळ" },
              score: 2,
            },
            {
              text: {
                en: "Frequent nausea",
                hi: "बार-बार मतली",
                mr: "वारंवार मळमळ",
              },
              score: 3,
            },
            {
              text: {
                en: "Vomiting episodes",
                hi: "उल्टी होती है",
                mr: "उलटी होते",
              },
              score: 4,
            },
          ],
        },
        {
          id: 4,
          question: {
            en: "Is pain worse on day 1-2 of your period?",
            hi: "क्या पीरियड के पहले 1-2 दिन दर्द अधिक होता है?",
            mr: "पिरियडच्या पहिल्या 1-2 दिवसात वेदना जास्त असते का?",
          },
          options: [
            {
              text: {
                en: "No specific pattern",
                hi: "कोई विशेष पैटर्न नहीं",
                mr: "विशिष्ट पॅटर्न नाही",
              },
              score: 1,
            },
            {
              text: {
                en: "Slightly worse",
                hi: "थोड़ा अधिक",
                mr: "थोडे जास्त",
              },
              score: 2,
            },
            {
              text: { en: "Much worse", hi: "बहुत अधिक", mr: "खूप जास्त" },
              score: 3,
            },
            {
              text: {
                en: "Unbearable first 2 days",
                hi: "पहले 2 दिन असहनीय",
                mr: "पहिले 2 दिवस असह्य",
              },
              score: 4,
            },
          ],
        },
        {
          id: 5,
          question: {
            en: "Does pain relief occur after period ends?",
            hi: "क्या पीरियड खत्म होने के बाद दर्द से राहत मिलती है?",
            mr: "पिरियड संपल्यानंतर वेदना कमी होते का?",
          },
          options: [
            {
              text: {
                en: "Yes, immediate relief",
                hi: "हाँ, तुरंत राहत",
                mr: "होय, त्वरित आराम",
              },
              score: 1,
            },
            {
              text: {
                en: "Relief after 1-2 days",
                hi: "1-2 दिन बाद राहत",
                mr: "1-2 दिवसांनी आराम",
              },
              score: 2,
            },
            {
              text: {
                en: "Gradual relief",
                hi: "धीरे-धीरे राहत",
                mr: "हळूहळू आराम",
              },
              score: 3,
            },
            {
              text: {
                en: "Pain continues after period",
                hi: "पीरियड के बाद भी दर्द",
                mr: "पिरियडनंतरही वेदना",
              },
              score: 4,
            },
          ],
        },
      ],
      riskLevels: {
        low: {
          en: "Mild dysmenorrhea, manageable",
          hi: "हल्का कष्टार्तव, प्रबंधनीय",
          mr: "हलका कष्टार्तव, व्यवस्थापन करण्यायोग्य",
        },
        medium: {
          en: "Moderate symptoms, lifestyle changes may help",
          hi: "मध्यम लक्षण, जीवनशैली में बदलाव मदद कर सकते हैं",
          mr: "मध्यम लक्षणे, जीवनशैली बदल मदत करू शकतात",
        },
        high: {
          en: "Severe dysmenorrhea — medical treatment recommended",
          hi: "गंभीर कष्टार्तव — चिकित्सा उपचार की सिफारिश",
          mr: "तीव्र कष्टार्तव — वैद्यकीय उपचार शिफारसी",
        },
      },
    },
    {
      id: "pms_pmdd",
      name: {
        en: "PMS/PMDD",
        hi: "पीएमएस/पीएमडीडी",
        mr: "पीएमएस/पीएमडीडी",
      },
      icon: "🌙",
      color: "from-indigo-400 to-purple-400",
      questions: [
        {
          id: 1,
          question: {
            en: "Do you experience mood swings 7-10 days before period?",
            hi: "क्या पीरियड से 7-10 दिन पहले मूड स्विंग होता है?",
            mr: "पिरियडच्या 7-10 दिवस आधी मूड बदल होतो का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "Mild changes", hi: "हल्के बदलाव", mr: "हलके बदल" },
              score: 2,
            },
            {
              text: {
                en: "Noticeable mood swings",
                hi: "ध्यान देने योग्य मूड स्विंग",
                mr: "लक्षणीय मूड बदल",
              },
              score: 3,
            },
            {
              text: {
                en: "Severe emotional distress",
                hi: "गंभीर भावनात्मक संकट",
                mr: "गंभीर भावनिक त्रास",
              },
              score: 4,
            },
          ],
        },
        {
          id: 2,
          question: {
            en: "Do you feel anxiety or emotional distress before periods?",
            hi: "क्या पीरियड से पहले चिंता या भावनात्मक परेशानी महसूस होती है?",
            mr: "पिरियडच्या आधी चिंता किंवा भावनिक अस्वस्थता जाणवते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "Mild anxiety", hi: "हल्की चिंता", mr: "हलकी चिंता" },
              score: 2,
            },
            {
              text: {
                en: "Moderate anxiety",
                hi: "मध्यम चिंता",
                mr: "मध्यम चिंता",
              },
              score: 3,
            },
            {
              text: {
                en: "Severe anxiety/depression",
                hi: "गंभीर चिंता/अवसाद",
                mr: "गंभीर चिंता/नैराश्य",
              },
              score: 4,
            },
          ],
        },
        {
          id: 3,
          question: {
            en: "Do you have intense food cravings before periods?",
            hi: "क्या पीरियड से पहले तीव्र खाने की इच्छा होती है?",
            mr: "पिरियडच्या आधी तीव्र खाण्याची इच्छा होते का?",
          },
          options: [
            {
              text: {
                en: "No specific cravings",
                hi: "कोई विशेष इच्छा नहीं",
                mr: "विशिष्ट इच्छा नाही",
              },
              score: 1,
            },
            {
              text: {
                en: "Mild cravings",
                hi: "हल्की इच्छा",
                mr: "हलकी इच्छा",
              },
              score: 2,
            },
            {
              text: {
                en: "Strong cravings",
                hi: "तेज इच्छा",
                mr: "तीव्र इच्छा",
              },
              score: 3,
            },
            {
              text: {
                en: "Uncontrollable cravings",
                hi: "अनियंत्रित इच्छा",
                mr: "अनियंत्रित इच्छा",
              },
              score: 4,
            },
          ],
        },
        {
          id: 4,
          question: {
            en: "Do you have sleep disturbances before periods?",
            hi: "क्या पीरियड से पहले नींद में परेशानी होती है?",
            mr: "पिरियडच्या आधी झोपेत अडचण येते का?",
          },
          options: [
            { text: { en: "No", hi: "नहीं", mr: "नाही" }, score: 1 },
            {
              text: { en: "Slight changes", hi: "थोड़े बदलाव", mr: "थोडे बदल" },
              score: 2,
            },
            {
              text: {
                en: "Difficulty sleeping",
                hi: "नींद आने में कठिनाई",
                mr: "झोपेत अडचण",
              },
              score: 3,
            },
            {
              text: {
                en: "Severe insomnia",
                hi: "गंभीर अनिद्रा",
                mr: "गंभीर निद्रानाश",
              },
              score: 4,
            },
          ],
        },
        {
          id: 5,
          question: {
            en: "Do symptoms disappear once period starts?",
            hi: "क्या पीरियड शुरू होते ही लक्षण गायब हो जाते हैं?",
            mr: "पिरियड सुरू झाल्यावर लक्षणे नाहीशी होतात का?",
          },
          options: [
            {
              text: {
                en: "Yes, immediate relief",
                hi: "हाँ, तुरंत राहत",
                mr: "होय, त्वरित आराम",
              },
              score: 1,
            },
            {
              text: {
                en: "Relief after 1-2 days",
                hi: "1-2 दिन बाद राहत",
                mr: "1-2 दिवसांनी आराम",
              },
              score: 2,
            },
            {
              text: {
                en: "Gradual improvement",
                hi: "धीरे-धीरे सुधार",
                mr: "हळूहळू सुधार",
              },
              score: 3,
            },
            {
              text: {
                en: "Symptoms continue",
                hi: "लक्षण जारी रहते हैं",
                mr: "लक्षणे चालू राहतात",
              },
              score: 4,
            },
          ],
        },
      ],
      riskLevels: {
        low: {
          en: "Mild PMS, normal premenstrual changes",
          hi: "हल्का पीएमएस, सामान्य मासिक पूर्व परिवर्तन",
          mr: "हलका पीएमएस, सामान्य मासिकपूर्व बदल",
        },
        medium: {
          en: "Moderate PMS symptoms, lifestyle changes recommended",
          hi: "मध्यम पीएमएस लक्षण, जीवनशैली परिवर्तन की सिफारिश",
          mr: "मध्यम पीएमएस लक्षणे, जीवनशैली बदल शिफारसी",
        },
        high: {
          en: "Possible PMDD — psychiatric consultation advised",
          hi: "संभावित पीएमडीडी — मनोचिकित्सक परामर्श की सलाह",
          mr: "संभाव्य पीएमडीडी — मनोचिकित्सक सल्ला शिफारसी",
        },
      },
    },
  ];

  const handleNext = () => {
    if (!selectedDisease) return;

    const selectedObj = diseases.find((d) => d.id === selectedDisease);
    if (!selectedObj) return;

    if (currentQuestion < selectedObj.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const translations = {
    en: {
      title: "Menstrual Health Checker",
      subtitle: "Symptom-based screening for common menstrual conditions",
      selectLanguage: "Select Language",
      selectCondition: "Select Condition to Check",
      startTest: "Start Test",
      backToSelection: "Back to Selection",
      question: "Question",
      of: "of",
      next: "Next Question",
      submit: "Submit & Get Results",
      yourResult: "Your Result",
      riskLevel: "Risk Level",
      lowRisk: "Low Risk",
      mediumRisk: "Medium Risk",
      highRisk: "High Risk",
      score: "Your Score",
      whatNext: "What Should You Do Next?",
      consultation: "When to Consult Doctor",
      homeRemedies: "Home Remedies",
      painRelief: "Immediate Pain Relief",
      emergencySymptoms: "Emergency Warning Signs",
      takeAnother: "Take Another Test",
      consultDoctor: "Consult Doctor Now",
    },
    hi: {
      title: "मासिक स्वास्थ्य जांच",
      subtitle: "सामान्य मासिक स्थितियों के लिए लक्षण-आधारित जांच",
      selectLanguage: "भाषा चुनें",
      selectCondition: "जांच के लिए स्थिति चुनें",
      startTest: "परीक्षण शुरू करें",
      backToSelection: "चयन पर वापस जाएं",
      question: "प्रश्न",
      of: "का",
      next: "अगला प्रश्न",
      submit: "जमा करें और परिणाम प्राप्त करें",
      yourResult: "आपका परिणाम",
      riskLevel: "जोखिम स्तर",
      lowRisk: "कम जोखिम",
      mediumRisk: "मध्यम जोखिम",
      highRisk: "उच्च जोखिम",
      score: "आपका स्कोर",
      whatNext: "आगे क्या करना चाहिए?",
      consultation: "डॉक्टर से कब मिलें",
      homeRemedies: "घरेलू उपचार",
      painRelief: "तत्काल दर्द से राहत",
      emergencySymptoms: "आपातकालीन चेतावनी संकेत",
      takeAnother: "एक और परीक्षण लें",
      consultDoctor: "अभी डॉक्टर से परामर्श लें",
    },
    mr: {
      title: "मासिक आरोग्य तपासणी",
      subtitle: "सामान्य मासिक स्थितींसाठी लक्षण-आधारित तपासणी",
      selectLanguage: "भाषा निवडा",
      selectCondition: "तपासणीसाठी स्थिती निवडा",
      startTest: "चाचणी सुरू करा",
      backToSelection: "निवडीवर परत जा",
      question: "प्रश्न",
      of: "चा",
      next: "पुढील प्रश्न",
      submit: "सबमिट करा आणि निकाल मिळवा",
      yourResult: "तुमचा निकाल",
      riskLevel: "धोक्याचा स्तर",
      lowRisk: "कमी धोका",
      mediumRisk: "मध्यम धोका",
      highRisk: "जास्त धोका",
      score: "तुमचा स्कोअर",
      whatNext: "पुढे काय करावे?",
      consultation: "डॉक्टरांना कधी भेटावे",
      homeRemedies: "घरगुती उपाय",
      painRelief: "त्वरित वेदना कमी करणे",
      emergencySymptoms: "आणीबाणीची चेतावणी चिन्हे",
      takeAnother: "दुसरी चाचणी घ्या",
      consultDoctor: "आता डॉक्टरांचा सल्ला घ्या",
    },
  };

  const t = translations[language];

  const getRiskLevel = (score) => {
    if (score <= 6) return "low";
    if (score <= 12) return "medium";
    return "high";
  };

  const handleAnswerSelect = (score) => {
    setAnswers({ ...answers, [currentQuestion]: score });
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((sum, score) => sum + score, 0);
    setTotalScore(total);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedDisease(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTotalScore(0);
  };

  const selectedDiseaseData = diseases.find((d) => d.id === selectedDisease);
  const currentQuestionData = selectedDiseaseData?.questions[currentQuestion];
  const riskLevel = getRiskLevel(totalScore);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <ClipboardCheck className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Free Health Screening
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Language Selection */}
        {!selectedDisease && !showResult && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {t.selectLanguage}
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["en", "hi", "mr"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    language === lang
                      ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {lang === "en"
                    ? "English"
                    : lang === "hi"
                    ? "हिंदी"
                    : "मराठी"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Condition Selection */}
        {!selectedDisease && !showResult && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.selectCondition}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {diseases.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease.id)}
                  className="group bg-white border-2 border-gray-200 hover:border-purple-400 rounded-2xl p-6 transition-all hover:shadow-xl transform hover:-translate-y-1 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${disease.color} rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {disease.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {disease.name[language]}
                      </h3>
                      <p className="text-sm text-gray-600">
                        5 {t.question}s • 2 min
                      </p>
                      <div className="mt-3 flex items-center space-x-2 text-purple-600 font-semibold">
                        <span>{t.startTest}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question Screen */}
        {selectedDisease && !showResult && currentQuestionData && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600">
                  {t.question} {currentQuestion + 1} {t.of}{" "}
                  {selectedDiseaseData.questions.length}
                </span>
                <span className="text-sm font-semibold text-purple-600">
                  {Math.round(
                    ((currentQuestion + 1) /
                      selectedDiseaseData.questions.length) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-500 rounded-full"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        selectedDiseaseData.questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <div
                className={`inline-flex items-center space-x-2 bg-linear-to-r ${selectedDiseaseData.color} px-4 py-2 rounded-full mb-6`}
              >
                <span className="text-2xl">{selectedDiseaseData.icon}</span>
                <span className="text-white font-semibold">
                  {selectedDiseaseData.name[language]}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {currentQuestionData.question[language]}
              </h3>

              <div className="space-y-4">
                {currentQuestionData.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion] === option.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option.score)}
                      className={`w-full p-5 rounded-xl text-left transition-all transform ${
                        isSelected
                          ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            isSelected
                              ? "bg-white text-purple-600"
                              : "bg-gray-300 text-gray-700"
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-medium">
                          {option.text[language]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>{t.backToSelection}</span>
                </button>

                {currentQuestion < selectedDiseaseData.questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === undefined}
                    className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{t.next}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answers[currentQuestion] === undefined}
                    className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{t.submit}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {showResult && selectedDiseaseData && (
          <div className="space-y-6">
            {/* Result Card */}
            <div
              className={`bg-linear-to-br ${
                riskLevel === "low"
                  ? "from-green-400 to-emerald-400"
                  : riskLevel === "medium"
                  ? "from-yellow-400 to-orange-400"
                  : "from-red-400 to-pink-400"
              } rounded-3xl shadow-2xl p-8 text-white`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {riskLevel === "low"
                    ? "✅"
                    : riskLevel === "medium"
                    ? "⚠️"
                    : "🚨"}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.yourResult}
                </h2>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <span className="text-xl font-semibold">
                    {t.riskLevel}:{" "}
                    {riskLevel === "low"
                      ? t.lowRisk
                      : riskLevel === "medium"
                      ? t.mediumRisk
                      : t.highRisk}
                  </span>
                </div>
                <p className="text-2xl mb-2">
                  {t.score}: {totalScore}/20
                </p>
                <p className="text-lg opacity-90">
                  {selectedDiseaseData.riskLevels[riskLevel][language]}
                </p>
              </div>
            </div>

            {/* Detailed Recommendations */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Consultation */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.consultation}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>If symptoms persist for more than 3 months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Pain interferes with daily activities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Over-the-counter medications don&rsquo;t help</span>
                  </li>
                </ul>
              </div>

              {/* Home Remedies */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.homeRemedies}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Apply heat pad on lower abdomen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Practice gentle yoga and stretching</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Stay hydrated and avoid caffeine</span>
                  </li>
                </ul>
              </div>

              {/* Pain Relief */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.painRelief}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>Take prescribed pain medication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>Rest in comfortable position</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>Try deep breathing exercises</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Symptoms */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.emergencySymptoms}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Sudden severe pain</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Heavy bleeding (soaking pad every hour)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>High fever with chills</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleReset}
                className="flex-1 bg-white border-2 border-purple-300 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t.takeAnother}</span>
              </button>
              <button className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>{t.consultDoctor}</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-2">Important Disclaimer</p>
                  <p>
                    This is a screening tool and not a medical diagnosis.
                    Results are based on self-reported symptoms. Always consult
                    a qualified healthcare professional for proper diagnosis and
                    treatment. If you're experiencing severe symptoms, seek
                    immediate medical attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

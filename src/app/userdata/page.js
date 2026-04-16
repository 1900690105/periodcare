"use client";
import React, { useEffect, useState } from "react";
import {
  User,
  Calendar,
  Heart,
  Sparkles,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Globe,
  Utensils,
  AlertCircle,
  Volume2,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [uiLanguage, setUiLanguage] = useState("en"); // UI language
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    language: "English",
    bloodGroup: "",
    religion: "",
    state: "",
    country: "India",
    maritalStatus: "",
    firstPeriodAge: "",
    dietType: "",
    allergies: [],
    goals: "",
    preferredHealing: [],
    knownConditions: [],
    period_start: "",
    cycle_length: "28",
    period_duration: "5",
    symptoms: [],
    mood: "",
    crampSeverity: 5,
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/get-profile", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setFormData((prev) => ({
        ...prev,

        name: data?.name ?? "",
        age: data?.age ?? "",
        weight: data?.weight ?? "",
        language: data?.language ?? "English",
        bloodGroup: data?.bloodGroup ?? "",
        religion: data?.religion ?? "",
        state: data?.state ?? "",
        country: data?.country ?? "India",
        maritalStatus: data?.maritalStatus ?? "",
        firstPeriodAge: data?.firstPeriodAge ?? "",
        dietType: data?.dietType ?? "",
        allergies: data?.allergies ?? [],
        goals: data?.goals ?? "",
        preferredHealing: data?.preferredHealing ?? [],
        knownConditions: data?.knownConditions ?? [],
        period_start: data?.period_start ?? "",
        cycle_length: data?.cycle_length ?? "28",
        period_duration: data?.period_duration ?? "5",
        symptoms: data?.symptoms ?? [],
        mood: data?.mood ?? "",
        crampSeverity: data?.crampSeverity ?? 5,
      }));

      // if (data.email !== user?.email) {
      //   window.location.href = "/userdata";
      //   return;
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser.email) {
        setUser(firebaseUser);
        fetchProfile();
      } else {
      }
    });

    return () => unsub();
  }, []);

  // Form state

  // Translations
  const translations = {
    en: {
      welcome: "Welcome to PeriodCare",
      getToKnow: "Let's Get to Know You",
      helpPersonalize: "Help us personalize your experience",
      step: "Step",
      of: "of",
      complete: "Complete",

      bloodGroup: "Blood Group",
      aPositive: "A+",
      aNegative: "A-",
      bPositive: "B+",
      bNegative: "B-",
      oPositive: "O+",
      oNegative: "O-",
      abPositive: "AB+",
      abNegative: "AB-",
      dontKnow: "Don't Know",
      religion: "Religion",
      hindu: "Hindu",
      muslim: "Muslim",
      christian: "Christian",
      sikh: "Sikh",
      buddhist: "Buddhist",
      jain: "Jain",
      other: "Other",
      preferNotToSay: "Prefer not to say",
      state: "State",
      country: "Country",
      maritalStatus: "Marital Status",
      single: "Single",
      married: "Married",

      firstPeriodAge: "First Period at Age",
      enterFirstPeriodAge: "Enter age (e.g., 12)",
      // Step 1
      personalInfo: "Personal Information",
      yourName: "Your Name",
      enterName: "Enter your name",
      age: "Age",
      weight: "Weight",
      enterAge: "Enter your age",
      optional: "Optional",
      preferredLanguage: "Preferred Language",

      // Step 2
      dietPreferences: "Diet Preferences",
      dietType: "Diet Type",
      vegetarian: "Vegetarian",
      nonVegetarian: "Non-Vegetarian",
      vegan: "Vegan",
      foodAllergies: "Food Allergies",
      dairy: "Dairy",
      gluten: "Gluten",
      nuts: "Nuts",
      soy: "Soy",
      eggs: "Eggs",
      none: "None",
      healthGoals: "Your Health Goals",
      selectGoal: "Select a goal",
      reduceCramps: "Reduce cramps",
      weightManagement: "Weight management",
      betterNutrition: "Better nutrition",
      trackCycle: "Track cycle",
      improveMood: "Improve mood",
      generalWellness: "General wellness",
      preferredHealing: "Preferred Healing Type",
      yoga: "Yoga",
      breathing: "Breathing Exercises",
      herbalRemedy: "Herbal Remedy",
      meditation: "Meditation",
      exercise: "Exercise",
      knownConditions: "Known Medical Conditions",
      pcos: "PCOS",
      endometriosis: "Endometriosis",
      fibroids: "Fibroids",
      thyroid: "Thyroid Issues",
      anemia: "Anemia",
      noneCondition: "None",

      // Step 3
      cycleInfo: "Cycle Information",
      lastPeriod: "Last Period Start Date",
      cycleLength: "Average Cycle Length (days)",
      typicalRange: "Typical range: 21-35 days",
      periodDuration: "Average Period Duration (days)",
      durationRange: "Typical range: 3-7 days",
      crampSeverity: "Period Pain/Cramp Severity",
      noPain: "No Pain",
      severePain: "Severe Pain",
      commonSymptoms: "Common Symptoms",
      cramps: "Cramps",
      bloating: "Bloating",
      headache: "Headache",
      fatigue: "Fatigue",
      backPain: "Back Pain",
      moodSwings: "Mood Swings",

      // Step 4
      almostDone: "Almost Done!",
      howFeeling: "How are you feeling today?",
      happy: "Happy",
      tired: "Tired",
      anxious: "Anxious",
      energetic: "Energetic",
      irritable: "Irritable",
      normal: "Normal",
      profileSummary: "Your Profile Summary",
      name: "Name",
      weight: "Weight",
      diet: "Diet",
      notProvided: "Not provided",
      notSelected: "Not selected",

      // Buttons
      back: "Back",
      next: "Next",
      completeSetup: "Complete Setup",

      // Validation
      required: "required",
      nameRequired: "Name is required",
      nameMinLength: "Name must be at least 2 characters",
      ageRange: "Age must be between 10 and 60",
      weightRange: "Weight must be at least 10",
      selectLanguage: "Please select a language",
      selectDiet: "Please select your diet type",
      selectDate: "Please select your last period start date",
      dateNotFuture: "Date cannot be in the future",
      cycleLengthRange: "Cycle length should be between 21-35 days",

      // Footer
      privacyNote:
        "Your data is encrypted and secure. We respect your privacy.",
    },

    mr: {
      welcome: "पीरियडकेअरमध्ये स्वागत आहे",
      getToKnow: "चला तुम्हाला ओळखूया",
      helpPersonalize: "तुमचा अनुभव वैयक्तिक करण्यात मदत करा",
      step: "पायरी",
      of: "पैकी",
      complete: "पूर्ण",

      bloodGroup: "रक्त गट",
      aPositive: "A+",
      aNegative: "A-",
      bPositive: "B+",
      bNegative: "B-",
      oPositive: "O+",
      oNegative: "O-",
      abPositive: "AB+",
      abNegative: "AB-",
      dontKnow: "माहित नाही",
      religion: "धर्म",
      hindu: "हिंदू",
      muslim: "मुस्लिम",
      christian: "ख्रिश्चन",
      sikh: "शीख",
      buddhist: "बौद्ध",
      jain: "जैन",
      other: "इतर",
      preferNotToSay: "सांगू इच्छित नाही",
      state: "राज्य",
      country: "देश",
      maritalStatus: "वैवाहिक स्थिती",
      single: "अविवाहित",
      married: "विवाहित",

      firstPeriodAge: "पहिल्या पाळीचे वय",
      enterFirstPeriodAge: "वय टाका (उदा., १२)",

      // Step 1
      personalInfo: "वैयक्तिक माहिती",
      yourName: "तुमचे नाव",
      enterName: "तुमचे नाव टाका",
      age: "वय",
      weight: "वजन",
      enterAge: "तुमचे वय टाका",
      optional: "पर्यायी",
      preferredLanguage: "पसंतीची भाषा",

      // Step 2
      dietPreferences: "आहार पसंती",
      dietType: "आहार प्रकार",
      vegetarian: "शाकाहारी",
      nonVegetarian: "मांसाहारी",
      vegan: "शुद्ध शाकाहारी",
      foodAllergies: "अन्न ऍलर्जी",
      dairy: "दुग्धजन्य",
      gluten: "ग्लूटेन",
      nuts: "काजू",
      soy: "सोया",
      eggs: "अंडी",
      none: "काहीही नाही",
      healthGoals: "तुमची आरोग्य उद्दिष्टे",
      selectGoal: "उद्दिष्ट निवडा",
      reduceCramps: "वेदना कमी करा",
      weightManagement: "वजन व्यवस्थापन",
      betterNutrition: "चांगले पोषण",
      trackCycle: "चक्र ट्रॅक करा",
      improveMood: "मूड सुधारा",
      generalWellness: "सामान्य कल्याण",
      preferredHealing: "पसंतीचा उपचार प्रकार",
      yoga: "योगा",
      breathing: "श्वास व्यायाम",
      herbalRemedy: "हर्बल उपाय",
      meditation: "ध्यान",
      exercise: "व्यायाम",
      knownConditions: "ज्ञात वैद्यकीय स्थिती",
      pcos: "पीसीओएस",
      endometriosis: "एंडोमेट्रिओसिस",
      fibroids: "फायब्रॉइड्स",
      thyroid: "थायरॉइड समस्या",
      anemia: "अॅनिमिया",
      noneCondition: "काहीही नाही",

      // Step 3
      cycleInfo: "मासिक पाळी माहिती",
      lastPeriod: "शेवटच्या पाळीची सुरुवात तारीख",
      cycleLength: "सरासरी चक्र लांबी (दिवस)",
      typicalRange: "सामान्य श्रेणी: २१-३५ दिवस",
      periodDuration: "सरासरी पाळी कालावधी (दिवस)",
      durationRange: "सामान्य श्रेणी: ३-७ दिवस",
      crampSeverity: "पाळीच्या वेदना तीव्रता",
      noPain: "वेदना नाही",
      severePain: "तीव्र वेदना",
      commonSymptoms: "सामान्य लक्षणे",
      cramps: "वेदना",
      bloating: "फुगणे",
      headache: "डोकेदुखी",
      fatigue: "थकवा",
      backPain: "पाठदुखी",
      moodSwings: "मूड बदल",

      // Step 4
      almostDone: "जवळजवळ झाले!",
      howFeeling: "आज तुम्हाला कसे वाटते?",
      happy: "आनंदी",
      tired: "थकलेले",
      anxious: "चिंताग्रस्त",
      energetic: "उत्साही",
      irritable: "चिडचिडे",
      normal: "सामान्य",
      profileSummary: "तुमचा प्रोफाइल सारांश",
      name: "नाव",
      diet: "आहार",
      notProvided: "दिलेले नाही",
      notSelected: "निवडलेले नाही",

      // Buttons
      back: "मागे",
      next: "पुढे",
      completeSetup: "सेटअप पूर्ण करा",

      // Validation
      required: "आवश्यक",
      nameRequired: "नाव आवश्यक आहे",
      nameMinLength: "नाव किमान २ अक्षरे असावे",
      ageRange: "वय १० ते ६० दरम्यान असावे",
      weightRange: "वजन किमान 10 असावे",
      selectLanguage: "कृपया भाषा निवडा",
      selectDiet: "कृपया आपला आहार प्रकार निवडा",
      selectDate: "कृपया तुमच्या शेवटच्या पाळीची तारीख निवडा",
      dateNotFuture: "तारीख भविष्यातील असू शकत नाही",
      cycleLengthRange: "चक्र लांबी २१-३५ दिवसांच्या दरम्यान असावी",

      // Footer
      privacyNote:
        "तुमचा डेटा एन्क्रिप्टेड आणि सुरक्षित आहे. आम्ही तुमच्या गोपनीयतेचा आदर करतो.",
    },

    hi: {
      welcome: "पीरियडकेयर में आपका स्वागत है",
      getToKnow: "चलिए आपको जानते हैं",
      helpPersonalize: "अपने अनुभव को व्यक्तिगत बनाने में हमारी मदद करें",
      step: "चरण",
      of: "में से",
      complete: "पूर्ण",

      bloodGroup: "रक्त समूह",
      aPositive: "A+",
      aNegative: "A-",
      bPositive: "B+",
      bNegative: "B-",
      oPositive: "O+",
      oNegative: "O-",
      abPositive: "AB+",
      abNegative: "AB-",
      dontKnow: "पता नहीं",
      religion: "धर्म",
      hindu: "हिंदू",
      muslim: "मुस्लिम",
      christian: "ईसाई",
      sikh: "सिख",
      buddhist: "बौद्ध",
      jain: "जैन",
      other: "अन्य",
      preferNotToSay: "नहीं बताना चाहते",
      state: "राज्य",
      country: "देश",
      maritalStatus: "वैवाहिक स्थिति",
      single: "अविवाहित",
      married: "विवाहित",

      firstPeriodAge: "पहली माहवारी की उम्र",
      enterFirstPeriodAge: "उम्र दर्ज करें (जैसे, १२)",

      // Step 1
      personalInfo: "व्यक्तिगत जानकारी",
      yourName: "आपका नाम",
      enterName: "अपना नाम दर्ज करें",
      age: "उम्र",
      weight: "वजन",
      enterAge: "अपनी उम्र दर्ज करें",
      optional: "वैकल्पिक",
      preferredLanguage: "पसंदीदा भाषा",

      // Step 2
      dietPreferences: "आहार प्राथमिकताएं",
      dietType: "आहार प्रकार",
      vegetarian: "शाकाहारी",
      nonVegetarian: "मांसाहारी",
      vegan: "शुद्ध शाकाहारी",
      foodAllergies: "खाद्य एलर्जी",
      dairy: "डेयरी",
      gluten: "ग्लूटेन",
      nuts: "मेवे",
      soy: "सोया",
      eggs: "अंडे",
      none: "कोई नहीं",
      healthGoals: "आपके स्वास्थ्य लक्ष्य",
      selectGoal: "लक्ष्य चुनें",
      reduceCramps: "ऐंठन कम करें",
      weightManagement: "वजन प्रबंधन",
      betterNutrition: "बेहतर पोषण",
      trackCycle: "चक्र ट्रैक करें",
      improveMood: "मूड सुधारें",
      generalWellness: "सामान्य कल्याण",
      preferredHealing: "पसंदीदा उपचार प्रकार",
      yoga: "योग",
      breathing: "साँस लेने के व्यायाम",
      herbalRemedy: "हर्बल उपचार",
      meditation: "ध्यान",
      exercise: "व्यायाम",
      knownConditions: "ज्ञात चिकित्सा स्थितियाँ",
      pcos: "पीसीओएस",
      endometriosis: "एंडोमेट्रियोसिस",
      fibroids: "फाइब्रॉइड्स",
      thyroid: "थायरॉइड समस्याएं",
      anemia: "एनीमिया",
      noneCondition: "कोई नहीं",

      // Step 3
      cycleInfo: "मासिक धर्म जानकारी",
      lastPeriod: "अंतिम मासिक धर्म शुरुआत तिथि",
      cycleLength: "औसत चक्र लंबाई (दिन)",
      typicalRange: "सामान्य सीमा: 21-35 दिन",
      periodDuration: "औसत मासिक धर्म अवधि (दिन)",
      durationRange: "सामान्य सीमा: 3-7 दिन",
      crampSeverity: "मासिक दर्द/ऐंठन गंभीरता",
      noPain: "कोई दर्द नहीं",
      severePain: "गंभीर दर्द",
      commonSymptoms: "सामान्य लक्षण",
      cramps: "ऐंठन",
      bloating: "सूजन",
      headache: "सिरदर्द",
      fatigue: "थकान",
      backPain: "पीठ दर्द",
      moodSwings: "मूड स्विंग",

      // Step 4
      almostDone: "लगभग हो गया!",
      howFeeling: "आज आप कैसा महसूस कर रहे हैं?",
      happy: "खुश",
      tired: "थका हुआ",
      anxious: "चिंतित",
      energetic: "ऊर्जावान",
      irritable: "चिड़चिड़ा",
      normal: "सामान्य",
      profileSummary: "आपकी प्रोफ़ाइल सारांश",
      name: "नाम",
      diet: "आहार",
      notProvided: "प्रदान नहीं किया गया",
      notSelected: "चयनित नहीं",

      // Buttons
      back: "पीछे",
      next: "आगे",
      completeSetup: "सेटअप पूरा करें",

      // Validation
      required: "आवश्यक",
      nameRequired: "नाम आवश्यक है",
      nameMinLength: "नाम कम से कम 2 अक्षर का होना चाहिए",
      ageRange: "उम्र 10 से 60 के बीच होनी चाहिए",
      weightRange: "वज़न कम से कम 10 होना चाहिए",
      selectLanguage: "कृपया एक भाषा चुनें",
      selectDiet: "कृपया अपना आहार प्रकार चुनें",
      selectDate: "कृपया अपनी अंतिम मासिक धर्म की तारीख चुनें",
      dateNotFuture: "तिथि भविष्य में नहीं हो सकती",
      cycleLengthRange: "चक्र की लंबाई 21-35 दिनों के बीच होनी चाहिए",

      // Footer
      privacyNote:
        "आपका डेटा एन्क्रिप्टेड और सुरक्षित है। हम आपकी गोपनीयता का सम्मान करते हैं।",
    },
  };

  const t = translations[uiLanguage];

  const languages = [
    "English",
    "हिंदी (Hindi)",
    "বাংলা (Bengali)",
    "తెలుగు (Telugu)",
    "मराठी (Marathi)",
    "தமிழ் (Tamil)",
    "ગુજરાતી (Gujarati)",
    "ಕನ್ನಡ (Kannada)",
    "ଓଡ଼ିଆ (Odia)",
    "മലയാളം (Malayalam)",
    "ਪੰਜਾਬੀ (Punjabi)",
    "অসমীয়া (Assamese)",
    "मैथिली (Maithili)",
    "संस्कृत (Sanskrit)",
    "नेपाली (Nepali)",
    "कोंकणी (Konkani)",
    "उर्दू (Urdu)",
    "बोडो (Bodo)",
    "डोगरी (Dogri)",
    "मणिपुरी (Manipuri)",
    "संताली (Santali)",
    "कश्मीरी (Kashmiri)",

    // 🌎 World Languages
    "Arabic (العربية)",
    "Spanish (Español)",
    "French (Français)",
    "German (Deutsch)",
    "Portuguese (Português)",
    "Russian (Русский)",
    "Chinese (中文)",
    "Japanese (日本語)",
    "Korean (한국어)",
    "Italian (Italiano)",
    "Dutch (Nederlands)",
    "Turkish (Türkçe)",
    "Greek (Ελληνικά)",
    "Thai (ไทย)",
    "Vietnamese (Tiếng Việt)",
    "Indonesian (Bahasa Indonesia)",
    "Filipino (Tagalog)",
    "Persian (فارسی)",
    "Swahili (Kiswahili)",
    "Hebrew (עברית)",
    "Polish (Polski)",
    "Romanian (Română)",
    "Swedish (Svenska)",
    "Finnish (Suomi)",
    "Norwegian (Norsk)",
    "Czech (Čeština)",
    "Hungarian (Magyar)",
    "Ukrainian (Українська)",
  ];

  const bloodGroups = [
    t.aPositive,
    t.aNegative,
    t.bPositive,
    t.bNegative,
    t.oPositive,
    t.oNegative,
    t.abPositive,
    t.abNegative,
    t.dontKnow,
  ];
  const religions = [
    t.hindu,
    t.muslim,
    t.christian,
    t.sikh,
    t.buddhist,
    t.jain,
    t.other,
    t.preferNotToSay,
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
  const maritalStatuses = [t.single, t.married];
  const dietTypes = [t.vegetarian, t.nonVegetarian, t.vegan];
  const commonAllergies = [t.dairy, t.gluten, t.nuts, t.soy, t.eggs, t.none];
  const commonSymptoms = [
    t.cramps,
    t.bloating,
    t.headache,
    t.fatigue,
    t.backPain,
    t.moodSwings,
  ];
  const moodOptions = [
    t.happy,
    t.tired,
    t.anxious,
    t.energetic,
    t.irritable,
    t.normal,
  ];
  const healingTypes = [
    t.yoga,
    t.breathing,
    t.herbalRemedy,
    t.meditation,
    t.exercise,
  ];
  const medicalConditions = [
    t.pcos,
    t.endometriosis,
    t.fibroids,
    t.thyroid,
    t.anemia,
    t.noneCondition,
  ];
  const goalOptions = [
    t.reduceCramps,
    t.weightManagement,
    t.betterNutrition,
    t.trackCycle,
    t.improveMood,
    t.generalWellness,
  ];

  // Text-to-speech for accessibility
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang =
        uiLanguage === "en" ? "en-US" : uiLanguage === "hi" ? "hi-IN" : "mr-IN";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Validation
  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = t.nameRequired;
      } else if (formData.name.trim().length < 2) {
        newErrors.name = t.nameMinLength;
      }

      if (formData.age && (formData.age < 10 || formData.age > 60)) {
        newErrors.age = t.ageRange;
      }

      if (formData.weight && formData.weight < 10) {
        newErrors.weight = t.weightRange;
      }

      if (!formData.language) {
        newErrors.language = t.selectLanguage;
      }
    }

    if (currentStep === 2) {
      if (!formData.dietType) {
        newErrors.dietType = t.selectDiet;
      }
    }

    if (currentStep === 3) {
      if (!formData.period_start) {
        newErrors.period_start = t.selectDate;
      } else {
        const selectedDate = new Date(formData.period_start);
        const today = new Date();
        if (selectedDate > today) {
          newErrors.period_start = t.dateNotFuture;
        }
      }

      if (
        !formData.cycle_length ||
        formData.cycle_length < 21 ||
        formData.cycle_length > 35
      ) {
        newErrors.cycle_length = t.cycleLengthRange;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    if (!validateStep(step)) return;

    const finalData = {
      ...formData,
      email: user.email,
      uid: user.uid, // optional but recommended
    };

    await fetch("/api/save-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    alert("Profile created securely 🎉");
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const toggleArrayItem = (field, item) => {
    const currentArray = formData[field];
    const newArray = currentArray.includes(item)
      ? currentArray.filter((i) => i !== item)
      : [...currentArray, item];
    handleChange(field, newArray);
  };

  const today = new Date().toISOString().split("T")[0];

  if (loading) {
    return (
      <div
        style={{ background: "#1a0a0e" }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <div
            className="w-16 h-16 border-4 rounded-full animate-spin mx-auto"
            style={{ borderColor: "#5c1a28", borderTopColor: "#c0392b" }}
          />
          <p
            style={{ color: "#f5d0d8", fontFamily: "Georgia, serif" }}
            className="text-lg"
          >
            Loading your wellness journey…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-lavender-100 to-gray-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4 space-x-2">
          {["en", "hi", "mr"].map((lang) => (
            <button
              key={lang}
              onClick={() => setUiLanguage(lang)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                uiLanguage === lang
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {lang === "en" ? "English" : lang === "hi" ? "हिंदी" : "मराठी"}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-pink-700 font-medium text-sm">
              {t.welcome}
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.getToKnow}
            </h1>
            <button
              onClick={() => speak(t.getToKnow)}
              className="p-2 hover:bg-pink-100 rounded-full transition-colors"
              aria-label="Listen"
            >
              <Volume2 className="w-6 h-6 text-pink-600" />
            </button>
          </div>
          <p className="text-gray-600">{t.helpPersonalize}</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              {t.step} {step} {t.of} 5
            </span>
            <span className="text-sm font-medium text-pink-600">
              {Math.round((step / 5) * 100)}% {t.complete}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-pink-500 to-purple-500 transition-all duration-500 rounded-full"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t.personalInfo}
                  </h2>
                  <button
                    type="button"
                    onClick={() => speak(t.personalInfo)}
                    className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-pink-500" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.yourName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder={t.enterName}
                    className={`w-full text-black px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
                      errors.name
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.age}
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    placeholder={t.enterAge}
                    min="10"
                    max="60"
                    required
                    className={`w-full text-black px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
                      errors.age
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.age && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.age}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.weight}
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    placeholder={t.weight}
                    min="10"
                    required
                    className={`w-full text-black px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
                      errors.weight
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.weight && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.weight}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.preferredLanguage}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.language}
                      onChange={(e) => handleChange("language", e.target.value)}
                      className={`w-full pl-12 text-black pr-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none cursor-pointer transition-all ${
                        errors.language
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.language && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.language}</span>
                    </p>
                  )}
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.bloodGroup} ({t.optional})
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {bloodGroups.map((group) => (
                      <button
                        key={group}
                        type="button"
                        onClick={() => handleChange("bloodGroup", group)}
                        className={`py-3 px-4 text-black rounded-xl font-semibold text-base transition-all ${
                          formData.bloodGroup === group
                            ? "bg-linear-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.religion} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.religion}
                    onChange={(e) => handleChange("religion", e.target.value)}
                    className="w-full px-4 py-3 text-black text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none cursor-pointer"
                  >
                    <option value="">{t.religion}</option>
                    {religions.map((religion) => (
                      <option key={religion} value={religion}>
                        {religion}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.state} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className="w-full px-4 text-black py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none cursor-pointer"
                  >
                    <option value="">{t.state}</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.country} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    placeholder="India"
                    className="w-full px-4 py-3 text-lg text-black border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.maritalStatus} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {maritalStatuses.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => handleChange("maritalStatus", status)}
                        className={`py-3 px-4 text-black rounded-xl font-semibold text-base transition-all ${
                          formData.maritalStatus === status
                            ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* First Period Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.firstPeriodAge} ({t.optional})
                  </label>
                  <input
                    type="number"
                    value={formData.firstPeriodAge}
                    onChange={(e) =>
                      handleChange("firstPeriodAge", e.target.value)
                    }
                    placeholder={t.enterFirstPeriodAge}
                    min="8"
                    max="18"
                    className="w-full px-4 py-3 text-black text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Diet & Healing */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t.dietPreferences}
                  </h2>
                  <button
                    type="button"
                    onClick={() => speak(t.dietPreferences)}
                    className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-green-500" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.dietType} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {dietTypes.map((diet) => (
                      <button
                        key={diet}
                        type="button"
                        onClick={() => handleChange("dietType", diet)}
                        className={`py-4 px-4 rounded-xl font-semibold text-base transition-all ${
                          formData.dietType === diet
                            ? "bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {diet}
                      </button>
                    ))}
                  </div>
                  {errors.dietType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.dietType}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.foodAllergies} ({t.optional})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {commonAllergies.map((allergy) => (
                      <button
                        key={allergy}
                        type="button"
                        onClick={() => toggleArrayItem("allergies", allergy)}
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                          formData.allergies.includes(allergy)
                            ? "bg-pink-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {allergy}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.healthGoals} ({t.optional})
                  </label>
                  <select
                    value={formData.goals}
                    onChange={(e) => handleChange("goals", e.target.value)}
                    className="w-full px-4 py-3 text-black text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none cursor-pointer"
                  >
                    <option value="">{t.selectGoal}</option>
                    {goalOptions.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Healing Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.preferredHealing} ({t.optional})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {healingTypes.map((healing) => (
                      <button
                        key={healing}
                        type="button"
                        onClick={() =>
                          toggleArrayItem("preferredHealing", healing)
                        }
                        className={`py-3  px-4 rounded-lg text-base font-medium transition-all ${
                          formData.preferredHealing.includes(healing)
                            ? "bg-indigo-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {healing}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Known Conditions */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.knownConditions} ({t.optional})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {medicalConditions.map((condition) => (
                      <button
                        key={condition}
                        type="button"
                        onClick={() =>
                          toggleArrayItem("knownConditions", condition)
                        }
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                          formData.knownConditions.includes(condition)
                            ? "bg-red-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Cycle Data */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t.cycleInfo}
                  </h2>
                  <button
                    type="button"
                    onClick={() => speak(t.cycleInfo)}
                    className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-purple-500" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.lastPeriod} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.period_start}
                    onChange={(e) =>
                      handleChange("period_start", e.target.value)
                    }
                    max={today}
                    className={`w-full text-black px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
                      errors.period_start
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.period_start && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.period_start}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.cycleLength} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.cycle_length}
                    onChange={(e) =>
                      handleChange("cycle_length", e.target.value)
                    }
                    placeholder="28"
                    min="21"
                    max="35"
                    className={`w-full px-4 text-black py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
                      errors.cycle_length
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  <p className="mt-1 text-xs text-gray-500">{t.typicalRange}</p>
                  {errors.cycle_length && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.cycle_length}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.commonSymptoms} ({t.optional})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {commonSymptoms.map((symptom) => (
                      <button
                        key={symptom}
                        type="button"
                        onClick={() => toggleArrayItem("symptoms", symptom)}
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                          formData.symptoms.includes(symptom)
                            ? "bg-purple-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Mood & Review */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t.almostDone}
                  </h2>
                  <button
                    type="button"
                    onClick={() => speak(t.almostDone)}
                    className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-amber-500" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.howFeeling} ({t.optional})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {moodOptions.map((mood) => (
                      <button
                        key={mood}
                        type="button"
                        onClick={() => handleChange("mood", mood)}
                        className={`py-4 px-4 rounded-xl font-semibold text-base transition-all ${
                          formData.mood === mood
                            ? "bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {t.profileSummary}
                  </h3>
                  <div className="space-y-2 text-base">
                    <p className="flex items-center justify-between">
                      <span className="text-gray-600">{t.name}:</span>
                      <span className="font-semibold text-gray-900">
                        {formData.name || t.notProvided}
                      </span>
                    </p>
                    {formData.age && (
                      <p className="flex items-center justify-between">
                        <span className="text-gray-600">{t.age}:</span>
                        <span className="font-semibold text-gray-900">
                          {formData.age}
                        </span>
                      </p>
                    )}
                    <p className="flex items-center justify-between">
                      <span className="text-gray-600">
                        {t.preferredLanguage}:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formData.language}
                      </span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-gray-600">{t.diet}:</span>
                      <span className="font-semibold text-gray-900">
                        {formData.dietType || t.notSelected}
                      </span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-gray-600">{t.cycleLength}:</span>
                      <span className="font-semibold text-gray-900">
                        {formData.cycle_length}{" "}
                        {uiLanguage === "en"
                          ? "days"
                          : uiLanguage === "hi"
                            ? "दिन"
                            : "दिवस"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all text-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>{t.back}</span>
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-lg"
                >
                  <span>{t.next}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => {
                    window.location.href = "/dashboard";
                  }}
                  className="ml-auto flex items-center space-x-2 px-8 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{t.completeSetup}</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-600 mt-6">
          🔒 {t.privacyNote}
        </p>
      </div>
    </div>
  );
}

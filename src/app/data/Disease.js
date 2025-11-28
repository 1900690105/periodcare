import {
  Heart,
  Droplet,
  Zap,
  Activity,
  Apple,
  Wind,
  Clock,
  TrendingUp,
} from "lucide-react";
export const translations = {
  en: {
    heroTitle: "Understand Menstrual Health Conditions",
    heroSubtitle:
      "Clear explanations, trusted facts, doctor-approved information.",
    searchPlaceholder: "Search disease...",
    learnMore: "Learn More",

    diseases: [
      {
        id: "endometriosis",
        name: "Endometriosis",
        emoji: "🌸",
        summary:
          "Severe pelvic pain caused by tissue growing outside the uterus.",
        tags: ["Pain", "Fatigue", "Cramps"],
        color: "from-pink-100 to-rose-100",
      },
      {
        id: "pcos",
        name: "PCOS",
        emoji: "💮",
        summary: "Hormonal disorder causing irregular periods and cysts.",
        tags: ["Irregular", "Hormonal", "Weight"],
        color: "from-purple-100 to-pink-100",
      },
      {
        id: "adenomyosis",
        name: "Adenomyosis",
        emoji: "🌺",
        summary: "Uterine tissue grows into the muscular wall causing pain.",
        tags: ["Heavy Flow", "Pain", "Cramps"],
        color: "from-rose-100 to-pink-100",
      },
      {
        id: "fibroids",
        name: "Uterine Fibroids",
        emoji: "🌷",
        summary: "Non-cancerous growths in the uterus causing discomfort.",
        tags: ["Heavy Flow", "Pressure", "Pain"],
        color: "from-orange-100 to-peach-100",
      },
    ],

    detailSections: {
      overview: "Overview",
      symptoms: "Common Symptoms",
      video: "Educational Video",
      scientific: "Scientific Explanation",
      homeCare: "Home Care & Relief",
      seeDoctor: "When to See a Doctor",
      checklist: "Download Checklist",

      whatIs: "What is it?",
      whyHappens: "Why it happens?",
      commonSymptoms: "Common symptoms",
      whoAtRisk: "Who is at risk?",

      watchVideo: "Watch: What happens inside your body?",
      toggleCaptions: "Toggle Captions",
    },

    endometriosis: {
      description:
        "Endometriosis is a painful condition where tissue similar to the uterine lining grows outside the uterus, often on ovaries, fallopian tubes, and pelvic tissues. This tissue responds to hormonal changes during menstruation, causing inflammation and severe pain.",

      whatIs:
        "A condition where endometrial-like tissue grows outside the uterus, causing chronic pain and potential fertility issues.",
      whyHappens:
        "Exact cause unknown, but may involve retrograde menstruation, genetic factors, or immune system issues.",
      symptoms:
        "Severe pelvic pain, painful periods, pain during intercourse, heavy bleeding, fatigue, and infertility.",
      risk: "Women aged 25-40, family history, early menstruation, or short menstrual cycles.",
      videiolink:
        "https://www.youtube.com/embed/HDMyBCrAuwA?si=ZA5tcfSriSvXuDg9",
      learnmore:
        "https://www.apollohospitals.com/health-library/endometriosis-causes-symptoms-treatments",

      symptomCards: [
        {
          icon: Zap,
          title: "Severe Cramps",
          desc: "Intense pelvic pain during periods",
        },
        {
          icon: Droplet,
          title: "Heavy Bleeding",
          desc: "Excessive menstrual flow",
        },
        { icon: Activity, title: "Nausea", desc: "Feeling sick or vomiting" },
        {
          icon: Heart,
          title: "Pain During Intimacy",
          desc: "Discomfort during or after sex",
        },
        {
          icon: Wind,
          title: "Painful Bowel Movements",
          desc: "Pain during urination or defecation",
        },
        {
          icon: Clock,
          title: "Fatigue",
          desc: "Persistent tiredness and low energy",
        },
      ],

      accordion: [
        {
          title: "What happens inside the uterus?",
          content:
            "Endometrial tissue grows outside the uterus and bleeds during menstruation. Since this blood has no exit path, it causes inflammation, scar tissue formation, and adhesions between organs.",
        },
        {
          title: "Why does the pain become severe?",
          content:
            "As misplaced tissue grows and breaks down each month, it creates inflammation and scarring. Adhesions can bind organs together, causing sharp, chronic pain that worsens over time.",
        },
        {
          title: "Role of hormones",
          content:
            "Estrogen promotes endometrial tissue growth. During your cycle, rising estrogen levels stimulate both normal and displaced tissue, causing swelling and pain when it breaks down.",
        },
        {
          title: "When it becomes severe or dangerous",
          content:
            "If left untreated, endometriosis can cause infertility, chronic debilitating pain, bowel/bladder dysfunction, and significantly reduced quality of life.",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "Food Support",
          items: [
            "Anti-inflammatory foods",
            "Omega-3 rich fish",
            "Leafy greens",
            "Avoid caffeine & alcohol",
          ],
        },
        {
          icon: Activity,
          title: "Exercises",
          items: [
            "Gentle yoga",
            "Walking",
            "Pelvic stretches",
            "Avoid high-impact",
          ],
        },
        {
          icon: Droplet,
          title: "Hydration",
          items: [
            "8-10 glasses water",
            "Herbal teas",
            "Reduce salt intake",
            "Stay consistent",
          ],
        },
        {
          icon: Heart,
          title: "Emotional Care",
          items: [
            "Join support groups",
            "Meditation",
            "Therapy if needed",
            "Track your feelings",
          ],
        },
      ],

      doctorWarnings: [
        "Pain lasting more than 5-7 days",
        "Pads filling in less than 1 hour",
        "Extreme fatigue or fainting",
        "Pain interfering with daily activities",
        "Difficulty getting pregnant",
      ],
    },

    pcos: {
      description:
        "Polycystic Ovary Syndrome (PCOS) or Polycystic Ovarian Disease (PCOD)  is a hormonal disorder affecting women of reproductive age. It causes irregular periods, excess androgen levels, and polycystic ovaries. PCOS is one of the most common causes of female infertility and affects 1 in 10 women.",

      whatIs:
        "A hormonal disorder causing enlarged ovaries with small cysts, irregular periods, and metabolic issues.",
      whyHappens:
        "Caused by insulin resistance, genetic factors, and hormonal imbalances leading to excess androgen production.",
      symptoms:
        "Irregular periods, excess hair growth, acne, weight gain, thinning hair, darkened skin patches, and fertility issues.",
      risk: "Women with family history, obesity, insulin resistance, or those experiencing early puberty.",
      videiolink:
        "https://www.youtube.com/embed/Zrwzv3-SP7c?si=Dpaynr2LDWX-fYCa",
      learnmore:
        "https://www.apollohospitals.com/diseases-and-conditions/pcod-polycystic-ovarian-disease",
      symptomCards: [
        {
          icon: Clock,
          title: "Irregular Periods",
          desc: "Infrequent or prolonged menstrual cycles",
        },
        {
          icon: Zap,
          title: "Excess Hair Growth",
          desc: "Facial and body hair (hirsutism)",
        },
        {
          icon: Activity,
          title: "Acne",
          desc: "Severe acne on face, chest, and back",
        },
        {
          icon: TrendingUp,
          title: "Weight Gain",
          desc: "Difficulty losing weight, especially around waist",
        },
        {
          icon: Heart,
          title: "Thinning Hair",
          desc: "Male-pattern baldness or hair loss",
        },
        {
          icon: Wind,
          title: "Dark Patches",
          desc: "Darkened skin on neck, groin, under breasts",
        },
      ],

      accordion: [
        {
          title: "What happens in the ovaries?",
          content:
            "Multiple small fluid-filled sacs (follicles) develop on the ovaries. These follicles contain immature eggs that fail to regularly release during ovulation, leading to irregular or absent periods.",
        },
        {
          title: "Why does weight gain occur?",
          content:
            "Insulin resistance makes it harder for your body to use insulin effectively, leading to increased insulin production. High insulin levels promote fat storage and make weight loss difficult.",
        },
        {
          title: "Role of hormones",
          content:
            "High levels of androgens (male hormones) interfere with ovulation and cause symptoms like excess hair growth and acne. Insulin resistance further worsens hormonal imbalances.",
        },
        {
          title: "When it becomes severe or dangerous",
          content:
            "Untreated PCOS increases risk of type 2 diabetes, high blood pressure, heart disease, endometrial cancer, sleep apnea, and infertility.",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "Food Support",
          items: [
            "Low glycemic index foods",
            "High fiber diet",
            "Lean proteins",
            "Avoid refined carbs & sugar",
          ],
        },
        {
          icon: Activity,
          title: "Exercises",
          items: [
            "Regular cardio 30 min/day",
            "Strength training",
            "Yoga for stress",
            "Consistent routine",
          ],
        },
        {
          icon: Droplet,
          title: "Hydration",
          items: [
            "10-12 glasses water",
            "Green tea",
            "Spearmint tea for androgens",
            "Limit sugary drinks",
          ],
        },
        {
          icon: Heart,
          title: "Emotional Care",
          items: [
            "Stress management",
            "Adequate sleep 7-9 hours",
            "PCOS support groups",
            "Body positivity practices",
          ],
        },
      ],

      doctorWarnings: [
        "Missing periods for 3+ months",
        "Severe acne not responding to treatment",
        "Excessive hair growth on face/body",
        "Difficulty conceiving after 6-12 months",
        "Rapid weight gain despite diet/exercise",
      ],
    },

    adenomyosis: {
      description:
        "Adenomyosis occurs when the inner lining of the uterus (endometrium) breaks through the muscle wall of the uterus (myometrium). This causes the uterus to become enlarged and results in heavy, painful periods. It commonly affects women in their 40s and 50s.",

      whatIs:
        "Endometrial tissue grows into the muscular uterine wall, causing an enlarged, tender uterus and severe menstrual symptoms.",
      whyHappens:
        "Exact cause unknown, but may be related to childbirth, uterine surgery, or hormonal imbalances during reproductive years.",
      symptoms:
        "Prolonged heavy bleeding, severe menstrual cramps, chronic pelvic pain, painful intercourse, and enlarged uterus.",
      risk: "Women over 35, multiple pregnancies, previous uterine surgery (C-section), or endometriosis history.",
      videiolink:
        "https://www.youtube.com/embed/HDMyBCrAuwA?si=ZA5tcfSriSvXuDg9",
      learnmore:
        "https://www.apollohospitals.com/diseases-and-conditions/all-you-need-to-know-about-adenomyosis-symptoms-causes-and-treatments",
      symptomCards: [
        {
          icon: Droplet,
          title: "Heavy Bleeding",
          desc: "Prolonged periods with excessive flow",
        },
        {
          icon: Zap,
          title: "Severe Cramps",
          desc: "Intense, debilitating menstrual pain",
        },
        {
          icon: Clock,
          title: "Chronic Pain",
          desc: "Constant pelvic pressure and discomfort",
        },
        {
          icon: Heart,
          title: "Painful Intercourse",
          desc: "Deep pelvic pain during sex",
        },
        {
          icon: Activity,
          title: "Bloating",
          desc: "Enlarged, swollen lower abdomen",
        },
        {
          icon: Wind,
          title: "Pressure",
          desc: "Feeling of heaviness in pelvis",
        },
      ],

      accordion: [
        {
          title: "What happens inside the uterus?",
          content:
            "Endometrial tissue invades the muscular wall of the uterus, causing it to thicken and enlarge. During menstruation, this embedded tissue bleeds and swells, causing severe pain and pressure.",
        },
        {
          title: "Why does the pain become severe?",
          content:
            "The uterine muscle containing endometrial tissue swells and contracts intensely during periods. The trapped blood and tissue inflammation cause severe cramping and chronic pelvic pain.",
        },
        {
          title: "Role of hormones",
          content:
            "Estrogen drives the growth of endometrial tissue. Each menstrual cycle, hormonal changes cause the embedded tissue to thicken, break down, and bleed, leading to pain and heavy periods.",
        },
        {
          title: "When it becomes severe or dangerous",
          content:
            "Severe adenomyosis can cause chronic anemia from heavy bleeding, significantly impact quality of life, and in rare cases may require hysterectomy if symptoms are unmanageable.",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "Food Support",
          items: [
            "Iron-rich foods for anemia",
            "Anti-inflammatory diet",
            "Whole grains",
            "Limit red meat & dairy",
          ],
        },
        {
          icon: Activity,
          title: "Exercises",
          items: [
            "Light yoga",
            "Swimming",
            "Walking",
            "Avoid high-intensity during periods",
          ],
        },
        {
          icon: Droplet,
          title: "Hydration",
          items: [
            "8-10 glasses water",
            "Ginger tea for pain",
            "Chamomile tea",
            "Avoid alcohol",
          ],
        },
        {
          icon: Heart,
          title: "Emotional Care",
          items: [
            "Heat therapy for pain",
            "Pelvic massages",
            "Relaxation techniques",
            "Support from loved ones",
          ],
        },
      ],

      doctorWarnings: [
        "Periods lasting more than 7 days",
        "Soaking through pads hourly",
        "Severe anemia symptoms (dizziness, fatigue)",
        "Pain not relieved by over-the-counter medication",
        "Significantly enlarged abdomen",
      ],
    },

    fibroids: {
      description:
        "Uterine fibroids are non-cancerous growths that develop in or on the uterus. They vary in size from seedlings to large masses that can distort the uterus. While fibroids are generally benign, they can cause significant discomfort and heavy menstrual bleeding.",

      whatIs:
        "Non-cancerous muscle tumors that grow in the uterine wall, varying from tiny nodules to large masses.",
      whyHappens:
        "Caused by genetic changes, hormonal factors (estrogen and progesterone), and growth factors that promote tissue growth.",
      symptoms:
        "Heavy menstrual bleeding, prolonged periods, pelvic pressure, frequent urination, constipation, and backache.",
      risk: "Women aged 30-40, African American women, family history, obesity, or early menstruation.",
      videiolink:
        "https://www.youtube.com/embed/HDMyBCrAuwA?si=ZA5tcfSriSvXuDg9",
      learnmore: "https://www.1mg.com/diseases/uterine-fibroids-528",
      symptomCards: [
        {
          icon: Droplet,
          title: "Heavy Bleeding",
          desc: "Excessive, prolonged menstrual flow",
        },
        {
          icon: Clock,
          title: "Long Periods",
          desc: "Menstruation lasting over 7 days",
        },
        {
          icon: Wind,
          title: "Pelvic Pressure",
          desc: "Feeling of fullness in lower abdomen",
        },
        {
          icon: Activity,
          title: "Frequent Urination",
          desc: "Pressure on bladder causing urgency",
        },
        { icon: Heart, title: "Backache", desc: "Lower back or leg pain" },
        {
          icon: Zap,
          title: "Constipation",
          desc: "Difficulty with bowel movements",
        },
      ],

      accordion: [
        {
          title: "What happens inside the uterus?",
          content:
            "Muscle cells in the uterus begin to multiply and form firm, rubbery masses of fibrous tissue. These growths can develop within the uterine wall, on the outer surface, or inside the uterine cavity.",
        },
        {
          title: "Why do symptoms vary?",
          content:
            "Symptoms depend on the fibroid's location, size, and number. Submucosal fibroids (inside uterine cavity) cause the heaviest bleeding, while subserosal fibroids (outside uterus) cause pressure symptoms.",
        },
        {
          title: "Role of hormones",
          content:
            "Estrogen and progesterone stimulate fibroid growth. Fibroids contain more estrogen and progesterone receptors than normal uterine cells, which is why they often shrink after menopause when hormone levels drop.",
        },
        {
          title: "When it becomes severe or dangerous",
          content:
            "Large fibroids can cause severe anemia from heavy bleeding, fertility problems, pregnancy complications, and in rare cases may impact kidney function if they press on ureters.",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "Food Support",
          items: [
            "Iron-rich foods",
            "Cruciferous vegetables",
            "Green tea",
            "Avoid red meat & high-fat dairy",
          ],
        },
        {
          icon: Activity,
          title: "Exercises",
          items: [
            "Regular moderate exercise",
            "Pelvic floor exercises",
            "Yoga",
            "Maintain healthy weight",
          ],
        },
        {
          icon: Droplet,
          title: "Hydration",
          items: [
            "8-10 glasses water",
            "Herbal teas",
            "Avoid caffeine",
            "Stay consistent",
          ],
        },
        {
          icon: Heart,
          title: "Emotional Care",
          items: [
            "Heat packs for pain",
            "Stress reduction",
            "Support groups",
            "Track symptoms",
          ],
        },
      ],

      doctorWarnings: [
        "Sudden sharp pelvic pain",
        "Severe anemia (extreme fatigue, shortness of breath)",
        "Pads soaking through every hour",
        "Difficulty emptying bladder",
        "Rapid fibroid growth",
      ],
    },
    checklistItems: [
      "Symptom tracker",
      "Foods to avoid",
      "Do's and Don'ts",
      "Cycle notes",
    ],
  },
  hi: {
    heroTitle: "मासिक धर्म स्वास्थ्य स्थितियों को समझें",
    heroSubtitle: "स्पष्ट स्पष्टीकरण, विश्वसनीय तथ्य, डॉक्टर-अनुमोदित जानकारी।",
    searchPlaceholder: "बीमारी खोजें...",
    learnMore: "और जानें",

    diseases: [
      {
        id: "endometriosis",
        name: "एंडोमेट्रियोसिस",
        emoji: "🌸",
        summary: "गर्भाशय के बाहर ऊतक बढ़ने से गंभीर पैल्विक दर्द।",
        tags: ["दर्द", "थकान", "ऐंठन"],
        color: "from-pink-100 to-rose-100",
      },
      {
        id: "pcos",
        name: "पीसीओएस",
        emoji: "💮",
        summary: "हार्मोनल विकार जिससे अनियमित पीरियड और सिस्ट।",
        tags: ["अनियमित", "हार्मोनल", "वजन"],
        color: "from-purple-100 to-pink-100",
      },
      {
        id: "adenomyosis",
        name: "एडिनोमायोसिस",
        emoji: "🌺",
        summary: "गर्भाशय का ऊतक मांसपेशियों की दीवार में बढ़ता है।",
        tags: ["भारी प्रवाह", "दर्द", "ऐंठन"],
        color: "from-rose-100 to-pink-100",
      },
      {
        id: "fibroids",
        name: "गर्भाशय फाइब्रॉएड",
        emoji: "🌷",
        summary: "गर्भाशय में गैर-कैंसर वृद्धि जो असुविधा पैदा करती है।",
        tags: ["भारी प्रवाह", "दबाव", "दर्द"],
        color: "from-orange-100 to-peach-100",
      },
    ],

    detailSections: {
      overview: "अवलोकन",
      symptoms: "सामान्य लक्षण",
      video: "शैक्षिक वीडियो",
      scientific: "वैज्ञानिक स्पष्टीकरण",
      homeCare: "घरेलू देखभाल और राहत",
      seeDoctor: "डॉक्टर को कब दिखाना है",
      checklist: "चेकलिस्ट डाउनलोड करें",

      whatIs: "यह क्या है?",
      whyHappens: "यह क्यों होता है?",
      commonSymptoms: "सामान्य लक्षण",
      whoAtRisk: "किसको खतरा है?",

      watchVideo: "देखें: आपके शरीर के अंदर क्या होता है?",
      toggleCaptions: "कैप्शन टॉगल करें",
    },

    endometriosis: {
      description:
        "एंडोमेट्रियोसिस एक दर्दनाक स्थिति है जहां गर्भाशय की परत जैसा ऊतक गर्भाशय के बाहर बढ़ता है, अक्सर अंडाशय, फैलोपियन ट्यूब और पैल्विक ऊतकों पर। यह ऊतक मासिक धर्म के दौरान हार्मोनल परिवर्तनों पर प्रतिक्रिया करता है।",

      whatIs: "एक स्थिति जहां एंडोमेट्रियल जैसा ऊतक गर्भाशय के बाहर बढ़ता है।",
      whyHappens:
        "सटीक कारण अज्ञात, लेकिन प्रतिगामी मासिक धर्म, आनुवंशिक कारक शामिल हो सकते हैं।",
      symptoms:
        "गंभीर पैल्विक दर्द, दर्दनाक पीरियड, संभोग के दौरान दर्द, भारी रक्तस्राव।",
      risk: "25-40 वर्ष की महिलाएं, पारिवारिक इतिहास, प्रारंभिक मासिक धर्म।",

      symptomCards: [
        {
          icon: Zap,
          title: "गंभीर ऐंठन",
          desc: "पीरियड के दौरान तीव्र पैल्विक दर्द",
        },
        {
          icon: Droplet,
          title: "भारी रक्तस्राव",
          desc: "अत्यधिक मासिक धर्म प्रवाह",
        },
        { icon: Activity, title: "मतली", desc: "बीमार महसूस करना या उल्टी" },
        {
          icon: Heart,
          title: "संभोग के दौरान दर्द",
          desc: "यौन संबंध के दौरान या बाद में असुविधा",
        },
        {
          icon: Wind,
          title: "दर्दनाक शौच",
          desc: "पेशाब या शौच के दौरान दर्द",
        },
        { icon: Clock, title: "थकान", desc: "लगातार थकान और कम ऊर्जा" },
      ],

      accordion: [
        {
          title: "गर्भाशय के अंदर क्या होता है?",
          content:
            "एंडोमेट्रियल ऊतक गर्भाशय के बाहर बढ़ता है और मासिक धर्म के दौरान खून बहता है। चूंकि इस रक्त का कोई बाहर निकलने का रास्ता नहीं है, यह सूजन और निशान ऊतक का कारण बनता है।",
        },
        {
          title: "दर्द गंभीर क्यों हो जाता है?",
          content:
            "जैसे-जैसे गलत जगह पर ऊतक बढ़ता और टूटता है, यह सूजन और घाव पैदा करता है। आसंजन अंगों को एक साथ बांध सकते हैं।",
        },
        {
          title: "हार्मोन की भूमिका",
          content:
            "एस्ट्रोजन एंडोमेट्रियल ऊतक वृद्धि को बढ़ावा देता है। आपके चक्र के दौरान, बढ़ते एस्ट्रोजन स्तर सामान्य और विस्थापित दोनों ऊतकों को उत्तेजित करते हैं।",
        },
        {
          title: "यह कब गंभीर या खतरनाक हो जाता है",
          content:
            "यदि अनुपचारित छोड़ दिया जाए, तो एंडोमेट्रियोसिस बांझपन, पुराना दर्द, आंत्र/मूत्राशय की शिथिलता का कारण बन सकता है।",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "भोजन समर्थन",
          items: [
            "सूजनरोधी खाद्य पदार्थ",
            "ओमेगा-3 युक्त मछली",
            "पत्तेदार साग",
            "कैफीन और शराब से बचें",
          ],
        },
        {
          icon: Activity,
          title: "व्यायाम",
          items: [
            "हल्का योग",
            "चलना",
            "पैल्विक स्ट्रेच",
            "उच्च प्रभाव से बचें",
          ],
        },
        {
          icon: Droplet,
          title: "हाइड्रेशन",
          items: ["8-10 गिलास पानी", "हर्बल चाय", "नमक कम करें", "सुसंगत रहें"],
        },
        {
          icon: Heart,
          title: "भावनात्मक देखभाल",
          items: [
            "सहायता समूहों में शामिल हों",
            "ध्यान",
            "यदि आवश्यक हो तो थेरेपी",
            "अपनी भावनाओं को ट्रैक करें",
          ],
        },
      ],

      doctorWarnings: [
        "5-7 दिनों से अधिक समय तक दर्द",
        "1 घंटे से कम में पैड भरना",
        "अत्यधिक थकान या बेहोशी",
        "दैनिक गतिविधियों में हस्तक्षेप करने वाला दर्द",
        "गर्भवती होने में कठिनाई",
      ],
    },

    checklistItems: [
      "लक्षण ट्रैकर",
      "बचने के लिए खाद्य पदार्थ",
      "क्या करें और क्या न करें",
      "चक्र नोट्स",
    ],
  },
  mr: {
    heroTitle: "मासिक पाळी आरोग्य स्थिती समजून घ्या",
    heroSubtitle: "स्पष्ट स्पष्टीकरण, विश्वासार्ह तथ्ये, डॉक्टर-मान्य माहिती।",
    searchPlaceholder: "रोग शोधा...",
    learnMore: "अधिक जाणून घ्या",

    diseases: [
      {
        id: "endometriosis",
        name: "एंडोमेट्रियोसिस",
        emoji: "🌸",
        summary: "गर्भाशयाच्या बाहेर ऊती वाढल्यामुळे तीव्र ओटीपोटात दुखणे।",
        tags: ["वेदना", "थकवा", "पेटदुखी"],
        color: "from-pink-100 to-rose-100",
      },
      {
        id: "pcos",
        name: "पीसीओएस",
        emoji: "💮",
        summary: "हार्मोनल विकार ज्यामुळे अनियमित मासिक पाळी आणि गळू।",
        tags: ["अनियमित", "हार्मोनल", "वजन"],
        color: "from-purple-100 to-pink-100",
      },
      {
        id: "adenomyosis",
        name: "एडिनोमायोसिस",
        emoji: "🌺",
        summary: "गर्भाशयाची ऊती स्नायूंच्या भिंतीमध्ये वाढते.",
        tags: ["जास्त प्रवाह", "वेदना", "पेटदुखी"],
        color: "from-rose-100 to-pink-100",
      },
      {
        id: "fibroids",
        name: "गर्भाशय फायब्रॉइड",
        emoji: "🌷",
        summary: "गर्भाशयात नॉन-कॅन्सर वाढ ज्यामुळे अस्वस्थता.",
        tags: ["जास्त प्रवाह", "दबाव", "वेदना"],
        color: "from-orange-100 to-peach-100",
      },
    ],

    detailSections: {
      overview: "आढावा",
      symptoms: "सामान्य लक्षणे",
      video: "शैक्षणिक व्हिडिओ",
      scientific: "वैज्ञानिक स्पष्टीकरण",
      homeCare: "घरगुती काळजी आणि आराम",
      seeDoctor: "डॉक्टरांना कधी भेटावे",
      checklist: "चेकलिस्ट डाउनलोड करा",

      whatIs: "हे काय आहे?",
      whyHappens: "हे का होते?",
      commonSymptoms: "सामान्य लक्षणे",
      whoAtRisk: "कोणाला धोका आहे?",

      watchVideo: "पहा: तुमच्या शरीरात काय घडते?",
      toggleCaptions: "कॅप्शन टॉगल करा",
    },

    endometriosis: {
      description:
        "एंडोमेट्रियोसिस ही एक वेदनादायक स्थिती आहे जिथे गर्भाशयाच्या अस्तरासारखी ऊती गर्भाशयाच्या बाहेर वाढते, अनेकदा अंडाशय, फॅलोपियन ट्यूब आणि ओटीपोटाच्या ऊतींवर।",

      whatIs: "एक स्थिती जिथे एंडोमेट्रियल सारखी ऊती गर्भाशयाच्या बाहेर वाढते.",
      whyHappens:
        "अचूक कारण अज्ञात, पण प्रतिगामी मासिक पाळी, अनुवांशिक घटक असू शकतात.",
      symptoms:
        "तीव्र ओटीपोटात दुखणे, वेदनादायक मासिक पाळी, संभोगादरम्यान दुखणे, जास्त रक्तस्त्राव.",
      risk: "25-40 वयाच्या महिला, कौटुंबिक इतिहास, लवकर मासिक पाळी.",

      symptomCards: [
        {
          icon: Zap,
          title: "तीव्र पेटदुखी",
          desc: "मासिक पाळी दरम्यान तीव्र ओटीपोटात दुखणे",
        },
        {
          icon: Droplet,
          title: "जास्त रक्तस्त्राव",
          desc: "अत्यधिक मासिक पाळी प्रवाह",
        },
        { icon: Activity, title: "मळमळ", desc: "आजारी वाटणे किंवा उलट्या" },
        {
          icon: Heart,
          title: "संभोगादरम्यान दुखणे",
          desc: "लैंगिक संबंधादरम्यान किंवा नंतर अस्वस्थता",
        },
        {
          icon: Wind,
          title: "वेदनादायक शौच",
          desc: "लघवी किंवा शौचादरम्यान दुखणे",
        },
        { icon: Clock, title: "थकवा", desc: "सतत थकवा आणि कमी ऊर्जा" },
      ],

      accordion: [
        {
          title: "गर्भाशयात काय घडते?",
          content:
            "एंडोमेट्रियल ऊती गर्भाशयाच्या बाहेर वाढते आणि मासिक पाळीदरम्यान रक्तस्त्राव होतो. या रक्ताला बाहेर पडण्याचा मार्ग नसल्याने, ते जळजळ आणि डाग ऊती निर्माण करते.",
        },
        {
          title: "वेदना तीव्र का होते?",
          content:
            "चुकीच्या ठिकाणी ऊती वाढते आणि तुटते तेव्हा ते जळजळ आणि जखम निर्माण करते. आसंजन अवयव एकत्र बांधू शकतात.",
        },
        {
          title: "हार्मोन्सची भूमिका",
          content:
            "इस्ट्रोजेन एंडोमेट्रियल ऊती वाढीस प्रोत्साहन देते. तुमच्या चक्रादरम्यान, वाढणारे इस्ट्रोजेन पातळी सामान्य आणि विस्थापित दोन्ही ऊतींना उत्तेजित करते.",
        },
        {
          title: "हे कधी गंभीर किंवा धोकादायक होते",
          content:
            "उपचार न केल्यास, एंडोमेट्रियोसिस वंध्यत्व, दीर्घकालीन वेदना, आतडे/मूत्राशय बिघडणे कारणीभूत होऊ शकते.",
        },
      ],

      homeCare: [
        {
          icon: Apple,
          title: "अन्न समर्थन",
          items: [
            "दाहक-विरोधी पदार्थ",
            "ओमेगा-3 समृद्ध मासे",
            "पालेभाज्या",
            "कॅफिन आणि अल्कोहोल टाळा",
          ],
        },
        {
          icon: Activity,
          title: "व्यायाम",
          items: ["हलका योग", "चालणे", "ओटीपोटाचे स्ट्रेच", "उच्च प्रभाव टाळा"],
        },
        {
          icon: Droplet,
          title: "हायड्रेशन",
          items: [
            "8-10 ग्लास पाणी",
            "हर्बल चहा",
            "मीठ कमी करा",
            "सातत्यपूर्ण रहा",
          ],
        },
        {
          icon: Heart,
          title: "भावनिक काळजी",
          items: [
            "समर्थन गटांमध्ये सामील व्हा",
            "ध्यान",
            "आवश्यक असल्यास थेरपी",
            "तुमच्या भावना ट्रॅक करा",
          ],
        },
      ],

      doctorWarnings: [
        "5-7 दिवसांपेक्षा जास्त काळ वेदना",
        "1 तासापेक्षा कमी वेळात पॅड भरणे",
        "अत्यधिक थकवा किंवा बेशुद्ध होणे",
        "दैनंदिन क्रियाकलापांमध्ये व्यत्यय आणणारी वेदना",
        "गरोदर होण्यात अडचण",
      ],
    },

    checklistItems: [
      "लक्षण ट्रॅकर",
      "टाळण्यासाठी पदार्थ",
      "करा आणि करू नका",
      "चक्र नोट्स",
    ],
  },
};

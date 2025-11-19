import React, { useState } from "react";
import {
  AlertCircle,
  Heart,
  Zap,
  User,
  Droplet,
  Phone,
  MapPin,
  Navigation,
  Shield,
  MessageCircle,
  WifiOff,
  Map,
  ChevronRight,
  Activity,
  Wind,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const CardDetailView = ({ cardId, t, emergencyCards, setSelectedCard }) => {
  const cardData = t.cards[cardId];
  const cardInfo = emergencyCards.find((c) => c.id === cardId);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-linear-to-br ${cardInfo.color} p-6 rounded-t-3xl`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-5xl">{cardInfo.emoji}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {cardData.title}
                </h3>
                <p className="text-white/90 text-sm">{cardData.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white font-bold text-xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {cardData.steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-rose-50 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-linear-to-br from-[#FF6F8F] to-[#C9B2F0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-gray-700 flex-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function EmergencyHelpMode() {
  const [selectedCard, setSelectedCard] = useState(null);
  const params = useSearchParams();
  const language = params.get("lang") || "en";
  const [showLangMenu, setShowLangMenu] = useState(false);

  const translations = {
    en: {
      title: "Offline Emergency Mode",
      subtitle:
        "Quick help for cramps, pain, or unexpected period issues—even without internet",
      worksOffline: "Works Offline",
      emergencySteps: "Emergency Self-Help Steps",

      cards: {
        pain: {
          title: "Instant Pain Relief",
          subtitle: "Heat pad, breathing, safe stretches",
          steps: [
            "Apply heat pad or hot water bottle to lower abdomen",
            "Practice deep breathing: Inhale 4 sec, hold 4 sec, exhale 4 sec",
            "Gentle massage in circular motions",
            "Try lying in fetal position for comfort",
          ],
        },
        stretch: {
          title: "Cramps Stretch Guide",
          subtitle: "Step-by-step illustrated stretches",
          steps: [
            "Child's Pose: Kneel and fold forward, arms extended",
            "Cat-Cow Stretch: On hands and knees, arch and round back",
            "Supine Twist: Lie on back, drop knees to side",
            "Butterfly Stretch: Sit with feet together, knees out",
          ],
        },
        accident: {
          title: "Period Accident Fix",
          subtitle: "Quick cleanup + what to do next",
          steps: [
            "Stay calm - this happens to everyone",
            "Find nearest restroom immediately",
            "Cold water removes blood stains best",
            "Use tissue/toilet paper as temporary pad",
            "Tie jacket/sweater around waist if needed",
          ],
        },
        fainting: {
          title: "Light-headed Care",
          subtitle: "Hydration + safe position instructions",
          steps: [
            "Sit or lie down immediately",
            "Elevate legs above heart level",
            "Drink water slowly - small sips",
            "Loosen tight clothing",
            "Stay seated for 10-15 minutes before standing",
          ],
        },
      },

      nearestLocations: "Nearest Medical & Pharmacy",
      clinic: "Nearest Clinic",
      pharmacy: "Nearest Pharmacy",
      savedOffline: "Saved Offline",
      openMap: "Open Offline Map View",
      autoSaved: "Auto-saved when online last time",

      safetyContacts: "Women's Safety & Helpline Contacts",
      callHelpline: "Call Women's Helpline",
      policeHelpline: "Local Police Helpline",
      trustedContact: "Call Trusted Contact",
      sendLocation: "Send Location SMS to Partner",

      supportMessage: "You're not alone. Breathe. Here's what you can do next.",
      breathe: "Just Breathe",
    },
    hi: {
      title: "ऑफ़लाइन आपातकालीन मोड",
      subtitle:
        "ऐंठन, दर्द, या अप्रत्याशित पीरियड समस्याओं के लिए त्वरित सहायता—बिना इंटरनेट के भी",
      worksOffline: "ऑफ़लाइन काम करता है",
      emergencySteps: "आपातकालीन स्व-सहायता कदम",

      cards: {
        pain: {
          title: "त्वरित दर्द राहत",
          subtitle: "हीट पैड, श्वास, सुरक्षित स्ट्रेच",
          steps: [
            "पेट के निचले हिस्से पर हीट पैड या गर्म पानी की बोतल लगाएं",
            "गहरी सांस लें: 4 सेकंड अंदर, 4 सेकंड रोकें, 4 सेकंड बाहर",
            "गोलाकार गति में हल्की मालिश करें",
            "आराम के लिए भ्रूण की स्थिति में लेटने का प्रयास करें",
          ],
        },
        stretch: {
          title: "ऐंठन स्ट्रेच गाइड",
          subtitle: "चरण-दर-चरण स्ट्रेच",
          steps: [
            "बाल मुद्रा: घुटने टेकें और आगे झुकें, हाथ बढ़ाएं",
            "कैट-काउ स्ट्रेच: हाथों और घुटनों पर, पीठ को मोड़ें",
            "सुपाइन ट्विस्ट: पीठ के बल लेटें, घुटनों को बगल में गिराएं",
            "तितली स्ट्रेच: पैरों को एक साथ बैठें, घुटने बाहर",
          ],
        },
        accident: {
          title: "पीरियड दुर्घटना ठीक करें",
          subtitle: "त्वरित सफाई + आगे क्या करें",
          steps: [
            "शांत रहें - यह सभी के साथ होता है",
            "तुरंत निकटतम शौचालय खोजें",
            "ठंडा पानी रक्त के दाग को सबसे अच्छी तरह हटाता है",
            "टिश्यू/टॉयलेट पेपर को अस्थायी पैड के रूप में उपयोग करें",
            "जरूरत पड़ने पर कमर के चारों ओर जैकेट/स्वेटर बांधें",
          ],
        },
        fainting: {
          title: "चक्कर आना देखभाल",
          subtitle: "हाइड्रेशन + सुरक्षित स्थिति निर्देश",
          steps: [
            "तुरंत बैठें या लेट जाएं",
            "पैरों को हृदय के स्तर से ऊपर उठाएं",
            "धीरे-धीरे पानी पिएं - छोटे घूंट",
            "तंग कपड़े ढीले करें",
            "खड़े होने से पहले 10-15 मिनट तक बैठे रहें",
          ],
        },
      },

      nearestLocations: "निकटतम चिकित्सा और फार्मेसी",
      clinic: "निकटतम क्लिनिक",
      pharmacy: "निकटतम फार्मेसी",
      savedOffline: "ऑफ़लाइन सहेजा गया",
      openMap: "ऑफ़लाइन मैप दृश्य खोलें",
      autoSaved: "अंतिम बार ऑनलाइन होने पर स्वतः सहेजा गया",

      safetyContacts: "महिला सुरक्षा और हेल्पलाइन संपर्क",
      callHelpline: "महिला हेल्पलाइन कॉल करें",
      policeHelpline: "स्थानीय पुलिस हेल्पलाइन",
      trustedContact: "विश्वसनीय संपर्क को कॉल करें",
      sendLocation: "साथी को स्थान SMS भेजें",

      supportMessage:
        "आप अकेली नहीं हैं। सांस लें। यहाँ वह है जो आप आगे कर सकती हैं।",
      breathe: "बस सांस लें",
    },
    mr: {
      title: "ऑफलाइन आपत्कालीन मोड",
      subtitle:
        "पेटदुखी, वेदना, किंवा अनपेक्षित मासिक पाळी समस्यांसाठी जलद मदत—इंटरनेटशिवाय",
      worksOffline: "ऑफलाइन कार्य करते",
      emergencySteps: "आपत्कालीन स्व-मदत पायऱ्या",

      cards: {
        pain: {
          title: "त्वरित वेदना आराम",
          subtitle: "हीट पॅड, श्वास, सुरक्षित स्ट्रेच",
          steps: [
            "खालच्या ओटीपोटावर हीट पॅड किंवा गरम पाण्याची बाटली लावा",
            "खोल श्वास घ्या: 4 सेकंद आत, 4 सेकंद रोखा, 4 सेकंद बाहेर",
            "गोलाकार हालचालीत हलकी मालिश करा",
            "आरामासाठी भ्रूणाच्या स्थितीत झोपण्याचा प्रयत्न करा",
          ],
        },
        stretch: {
          title: "पेटदुखी स्ट्रेच मार्गदर्शक",
          subtitle: "पायरी-दर-पायरी स्ट्रेच",
          steps: [
            "मुलाची मुद्रा: गुडघे टेकवा आणि पुढे वाकवा, हात पुढे करा",
            "कॅट-काऊ स्ट्रेच: हात आणि गुडघ्यांवर, पाठ वाकवा",
            "सुपाइन ट्विस्ट: पाठीवर झोपा, गुडघे बाजूला सोडा",
            "फुलपाखरू स्ट्रेच: पाय एकत्र बसा, गुडघे बाहेर",
          ],
        },
        accident: {
          title: "मासिक पाळी अपघात दुरुस्ती",
          subtitle: "जलद स्वच्छता + पुढे काय करावे",
          steps: [
            "शांत रहा - हे सर्वांसोबत घडते",
            "लगेच जवळचे शौचालय शोधा",
            "थंड पाणी रक्ताचे डाग उत्तम काढते",
            "टिश्यू/टॉयलेट पेपर तात्पुरते पॅड म्हणून वापरा",
            "आवश्यक असल्यास कमरेभोवती जॅकेट/स्वेटर बांधा",
          ],
        },
        fainting: {
          title: "चक्कर येणे काळजी",
          subtitle: "हायड्रेशन + सुरक्षित स्थिती सूचना",
          steps: [
            "ताबडतोब बसा किंवा झोपा",
            "पाय हृदयाच्या पातळीपेक्षा वर उचला",
            "हळूहळू पाणी प्या - लहान घुटके",
            "घट्ट कपडे सैल करा",
            "उभे राहण्यापूर्वी 10-15 मिनिटे बसून रहा",
          ],
        },
      },

      nearestLocations: "जवळचे वैद्यकीय आणि फार्मसी",
      clinic: "जवळचे क्लिनिक",
      pharmacy: "जवळचे फार्मसी",
      savedOffline: "ऑफलाइन जतन केले",
      openMap: "ऑफलाइन नकाशा दृश्य उघडा",
      autoSaved: "शेवटच्या वेळी ऑनलाइन असताना स्वयं जतन केले",

      safetyContacts: "महिला सुरक्षा आणि हेल्पलाइन संपर्क",
      callHelpline: "महिला हेल्पलाइनला कॉल करा",
      policeHelpline: "स्थानिक पोलीस हेल्पलाइन",
      trustedContact: "विश्वासू संपर्काला कॉल करा",
      sendLocation: "भागीदाराला स्थान SMS पाठवा",

      supportMessage:
        "तुम्ही एकटे नाही. श्वास घ्या. तुम्ही पुढे काय करू शकता ते येथे आहे.",
      breathe: "फक्त श्वास घ्या",
    },
  };

  const t = translations[language];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  const emergencyCards = [
    { id: "pain", icon: Zap, color: "from-orange-400 to-red-400", emoji: "⚡" },
    {
      id: "stretch",
      icon: Activity,
      color: "from-purple-400 to-pink-400",
      emoji: "🧘‍♀️",
    },
    {
      id: "accident",
      icon: Droplet,
      color: "from-red-400 to-rose-400",
      emoji: "🩸",
    },
    {
      id: "fainting",
      icon: Wind,
      color: "from-blue-400 to-cyan-400",
      emoji: "💧",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFE6ED] via-[#FFF9FB] to-[#F5E8FF] pb-8">
      {/* Emergency Header */}
      <div className="bg-linear-to-r from-[#FF6F8F] to-[#FFB3C1] shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  {t.title}
                </h1>
                <p className="text-white/90 mt-1">{t.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg animate-bounce">
                <WifiOff className="w-5 h-5 text-[#FF6F8F]" />
                <span className="text-sm font-bold text-[#FF6F8F]">
                  {t.worksOffline}
                </span>
              </div>
            </div>
          </div>

          {/* Support Message */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mt-6 border-2 border-white/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-6 h-6 text-[#FF6F8F]" />
              </div>
              <p className="text-white font-medium">{t.supportMessage}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Emergency Self-Help Steps */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-r from-[#FF6F8F] to-[#C9B2F0] rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            {t.emergencySteps}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyCards.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:scale-105 text-left group"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-3xl">{card.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t.cards[card.id].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.cards[card.id].subtitle}
                </p>
                <div className="flex items-center text-[#FF6F8F] font-semibold group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">View Steps</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Nearest Locations */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#FF6F8F]" />
            {t.nearestLocations}
          </h2>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between p-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🏥</div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.clinic}</p>
                  <p className="text-sm text-gray-600">
                    500m ({t.savedOffline})
                  </p>
                </div>
              </div>
              <Navigation className="w-6 h-6 text-blue-500 animate-bounce" />
            </div>

            <div className="flex items-center justify-between p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="text-2xl">💊</div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.pharmacy}</p>
                  <p className="text-sm text-gray-600">
                    300m ({t.savedOffline})
                  </p>
                </div>
              </div>
              <Navigation className="w-6 h-6 text-green-500 animate-bounce" />
            </div>
          </div>

          <button className="w-full py-4 bg-linear-to-r from-[#FF6F8F] to-[#C9B2F0] text-white rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
            <Map className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t.openMap}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            💾 {t.autoSaved}
          </p>
        </div>

        {/* Safety Contacts */}
        <div className="bg-linear-to-br from-red-50 to-pink-50 rounded-3xl shadow-xl p-6 border-2 border-red-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#FF6F8F]" />
            {t.safetyContacts}
          </h2>

          <div className="space-y-3">
            {/* Emergency Helpline */}
            <button className="w-full py-5 bg-linear-to-r from-red-500 to-rose-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 group animate-pulse">
              <AlertCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              🆘 {t.callHelpline}
            </button>

            {/* Secondary Buttons */}
            <button className="w-full py-4 bg-white border-2 border-blue-300 text-blue-700 rounded-2xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
              <Shield className="w-5 h-5" />
              🚓 {t.policeHelpline}
            </button>

            <button className="w-full py-4 bg-white border-2 border-purple-300 text-purple-700 rounded-2xl font-semibold hover:bg-purple-50 transition-all flex items-center justify-center gap-3">
              <User className="w-5 h-5" />
              📱 {t.trustedContact}
            </button>

            <button className="w-full py-4 bg-white border-2 border-pink-300 text-pink-700 rounded-2xl font-semibold hover:bg-pink-50 transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              👫 {t.sendLocation}
            </button>
          </div>
        </div>

        {/* Breathing Support */}
        <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-3xl shadow-xl p-8 text-center border-2 border-purple-300">
          <div className="w-24 h-24 bg-linear-to-br from-[#C9B2F0] to-[#FF6F8F] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
            <Wind className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.breathe}</h3>
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <p className="text-gray-700">Inhale • Hold • Exhale • Repeat</p>
        </div>
      </div>

      {/* Card Detail Modal */}
      {selectedCard && (
        <CardDetailView
          cardId={selectedCard}
          setSelectedCard={setSelectedCard}
          t={t}
          emergencyCards={emergencyCards}
        />
      )}
    </div>
  );
}

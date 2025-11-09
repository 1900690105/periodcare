import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Globe,
  TrendingUp,
  School,
  Droplets,
} from "lucide-react";

export default function StateSection({ language }) {
  const [counters, setCounters] = useState({
    awareness: 0,
    absenteeism: 0,
    hygiene: 0,
    languages: 0,
  });

  const translations = {
    en: {
      mainTitle: "Creating Change That Matters",
      mainSubtitle:
        "Real impact through education, technology, and community engagement",
      stats: {
        awareness: {
          title: "Awareness Increase",
          subtitle: "In menstrual health knowledge",
        },
        absenteeism: {
          title: "Absenteeism Reduced",
          subtitle: "More girls staying in school",
        },
        hygiene: {
          title: "Hygiene Improved",
          subtitle: "Better health practices adopted",
        },
        languages: {
          title: "Languages Supported",
          subtitle: "Accessible to diverse communities",
        },
      },
      additionalMetrics: {
        women: "Women Empowered",
        communities: "Communities Reached",
        satisfaction: "User Satisfaction",
      },
    },
    hi: {
      mainTitle: "महत्वपूर्ण बदलाव बना रहे हैं",
      mainSubtitle:
        "शिक्षा, प्रौद्योगिकी और सामुदायिक भागीदारी के माध्यम से वास्तविक प्रभाव",
      stats: {
        awareness: {
          title: "जागरूकता में वृद्धि",
          subtitle: "मासिक धर्म स्वास्थ्य ज्ञान में",
        },
        absenteeism: {
          title: "अनुपस्थिति में कमी",
          subtitle: "अधिक लड़कियां स्कूल में रह रही हैं",
        },
        hygiene: {
          title: "स्वच्छता में सुधार",
          subtitle: "बेहतर स्वास्थ्य प्रथाएं अपनाई गईं",
        },
        languages: {
          title: "भाषाएं समर्थित",
          subtitle: "विविध समुदायों के लिए सुलभ",
        },
      },
      additionalMetrics: {
        women: "महिलाएं सशक्त",
        communities: "समुदाय तक पहुंचे",
        satisfaction: "उपयोगकर्ता संतुष्टि",
      },
    },
    mr: {
      mainTitle: "महत्त्वपूर्ण बदल घडवत आहोत",
      mainSubtitle:
        "शिक्षण, तंत्रज्ञान आणि सामुदायिक सहभागाद्वारे वास्तविक प्रभाव",
      stats: {
        awareness: {
          title: "जागरूकतेत वाढ",
          subtitle: "मासिक पाळी आरोग्य ज्ञानात",
        },
        absenteeism: {
          title: "अनुपस्थिती कमी",
          subtitle: "अधिक मुली शाळेत राहत आहेत",
        },
        hygiene: {
          title: "स्वच्छतेत सुधारणा",
          subtitle: "चांगल्या आरोग्य पद्धती स्वीकारल्या",
        },
        languages: {
          title: "भाषा समर्थित",
          subtitle: "विविध समुदायांसाठी प्रवेशयोग्य",
        },
      },
      additionalMetrics: {
        women: "महिला सशक्त",
        communities: "समुदायांपर्यंत पोहोचलो",
        satisfaction: "वापरकर्ता समाधान",
      },
    },
  };

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      awareness: 50,
      absenteeism: 30,
      hygiene: 60,
      languages: 10,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        awareness: Math.min(
          Math.floor((targets.awareness * step) / steps),
          targets.awareness
        ),
        absenteeism: Math.min(
          Math.floor((targets.absenteeism * step) / steps),
          targets.absenteeism
        ),
        hygiene: Math.min(
          Math.floor((targets.hygiene * step) / steps),
          targets.hygiene
        ),
        languages: Math.min(
          Math.floor((targets.languages * step) / steps),
          targets.languages
        ),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const t = translations[language];

  return (
    <div>
      {/* Impact & Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              {t.mainTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.mainSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Awareness Increase */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-pink-400 to-pink-500 rounded-2xl mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {counters.awareness}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  {t.stats.awareness.title}
                </div>
                <div className="text-sm text-gray-500">
                  {t.stats.awareness.subtitle}
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-pink-400 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.awareness}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* School Absenteeism */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-400 to-purple-500 rounded-2xl mb-6 mx-auto">
                <School className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {counters.absenteeism}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  {t.stats.absenteeism.title}
                </div>
                <div className="text-sm text-gray-500">
                  {t.stats.absenteeism.subtitle}
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-purple-400 to-purple-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.absenteeism}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Hygiene Adoption */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-pink-400 to-purple-400 rounded-2xl mb-6 mx-auto">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {counters.hygiene}%
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  {t.stats.hygiene.title}
                </div>
                <div className="text-sm text-gray-500">
                  {t.stats.hygiene.subtitle}
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-pink-400 to-purple-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${counters.hygiene}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Languages Supported */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-400 to-pink-400 rounded-2xl mb-6 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {counters.languages}+
                </div>
                <div className="text-gray-700 font-semibold mb-3">
                  {t.stats.languages.title}
                </div>
                <div className="text-sm text-gray-500">
                  {t.stats.languages.subtitle}
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-purple-400 to-pink-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(counters.languages / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Impact Metrics */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600 font-medium">
                  {t.additionalMetrics.women}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  {t.additionalMetrics.communities}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-medium">
                  {t.additionalMetrics.satisfaction}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

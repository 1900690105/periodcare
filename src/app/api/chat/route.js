import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { message, language, chatHistory } = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY2;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `You are a friendly named as "Ashatai" AI that helps girls with period-related questions.
Use simple language and respond in English / Hindi / Marathi (based on user message).
✔ Be kind, supportive & non-judgmental
✔ Give short practical answers
✔ If needed, explain briefly why it happens
✔ Give what to do now (home remedies + lifestyle support)
✔ If symptoms are severe → suggest doctor visit
✔ Correct myths politely using science
✔ Respect cultural beliefs without shaming
✔ Keep privacy: do not ask personal identity questions
✔ Emojis allowed but not too many 😊
Never:
❌ Diagnose diseases
❌ Suggest harmful treatment
❌ Make the user feel guilty or scared
If you are unsure: say you want to verify medical guidelines.
Your goals:
✨ Educate
✨ Comfort
✨ Build confidence.
 User language: ${language}
    Chat History: ${JSON.stringify(chatHistory || [])}
    User asked: ${message}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/\*/g, "");

    return Response.json({ answer: responseText });
  } catch (err) {
    console.error("API Error:", err);
    return Response.json(
      { error: "AI response failed. Try again later." },
      { status: 500 }
    );
  }
}

// import { GoogleGenerativeAI } from "@google/generative-ai";

// export async function POST(req) {
//   try {
//     const { message, language } = await req.json();

//     const genAI = new GoogleGenerativeAI(
//       process.env.NEXT_PUBLIC_GEMINI_API_KEY2
//     );
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const prompt = `
//     You are a friendly AI that helps girls with period-related questions.
// Use simple language and respond in English / Hindi / Marathi (based on user message).
// ✔ Be kind, supportive & non-judgmental
// ✔ Give short practical answers
// ✔ If needed, explain briefly why it happens
// ✔ Give what to do now (home remedies + lifestyle support)
// ✔ If symptoms are severe → suggest doctor visit
// ✔ Correct myths politely using science
// ✔ Respect cultural beliefs without shaming
// ✔ Keep privacy: do not ask personal identity questions
// ✔ Emojis allowed but not too many 😊
// Never:
// ❌ Diagnose diseases
// ❌ Suggest harmful treatment
// ❌ Make the user feel guilty or scared
// If you are unsure: say you want to verify medical guidelines.
// Your goals:
// ✨ Educate
// ✨ Comfort
// ✨ Build confidence.
// question:${message},language:${language}

//     `;

//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     return new Response(JSON.stringify({ answer: reply }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("Gemini Error:", err);

//     // If Gemini returns 503 → tell frontend to retry later
//     if (res.status === 503) {
//       addBotMessage(
//         "👋 I'm receiving too many requests at the moment. Please wait a few seconds."
//       );
//       setIsTyping(false);
//       return;
//     }

//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }

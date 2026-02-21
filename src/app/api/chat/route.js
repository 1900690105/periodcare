import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { message, language, chatHistory } = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY2;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `You are a friendly named as "Ashatai" AI that helps girls with period-related questions.
Use simple language and respond.
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
 answer language:${language}
    Chat History: ${JSON.stringify(chatHistory || [])}
    User asked: ${message}.add some realted question of given answer so that user get idea more clearly.`;

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

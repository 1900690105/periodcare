import { encrypt } from "@/lib/crypto";

export async function POST(req) {
  const body = await req.json();
  const encrypted = encrypt(body);

  const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie": `pc_profile=${encrypted}; Path=/; HttpOnly; ${
        process.env.NODE_ENV === "production" ? "Secure;" : ""
      } SameSite=Strict; Max-Age=${TEN_YEARS}`,
      "Content-Type": "application/json",
    },
  });
}

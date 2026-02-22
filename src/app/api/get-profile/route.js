import { cookies } from "next/headers";
import { decrypt, encrypt } from "@/lib/crypto";

export async function GET() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("pc_profile")?.value;

  if (!cookie) return Response.json(null);

  try {
    const profile = decrypt(cookie);

    // refresh cookie expiry
    const refreshed = encrypt(profile);

    const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

    return new Response(JSON.stringify(profile), {
      status: 200,
      headers: {
        "Set-Cookie": `pc_profile=${refreshed}; Path=/; HttpOnly; ${
          process.env.NODE_ENV === "production" ? "Secure;" : ""
        } SameSite=Strict; Max-Age=${TEN_YEARS}`,
      },
    });
  } catch {
    return Response.json(null);
  }
}

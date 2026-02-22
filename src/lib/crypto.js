import crypto from "crypto";

const algorithm = "aes-256-gcm";

// derive a 32 byte key safely from env
function getKey() {
  const secret = process.env.COOKIE_SECRET;
  return crypto.createHash("sha256").update(secret).digest(); // ALWAYS 32 bytes
}

export function encrypt(data) {
  const key = getKey();

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(data), "utf8"),
    cipher.final(),
  ]);

  const tag = cipher.getAuthTag();

  return Buffer.concat([iv, tag, encrypted]).toString("base64");
}

export function decrypt(encryptedData) {
  const key = getKey();

  const bData = Buffer.from(encryptedData, "base64");

  const iv = bData.subarray(0, 16);
  const tag = bData.subarray(16, 32);
  const text = bData.subarray(32);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([decipher.update(text), decipher.final()]);

  return JSON.parse(decrypted.toString());
}

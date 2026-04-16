// login.js
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(email, password);
    return { success: true, user: res.user };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

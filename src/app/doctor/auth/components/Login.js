// login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/firebase";

export const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: res.user };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

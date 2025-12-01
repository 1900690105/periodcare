// signup.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../../../config/firebase";

export const signupUser = async (formData) => {
  try {
    const { email, password, name, age, dietType, language } = formData;

    const res = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      name,
      age,
      email,
      dietType,
      language,
      createdAt: new Date(),
    });

    return { success: true, user: res.user };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

"use client";

import React, { useEffect, useState } from "react";
import { ScanFood } from "./components/ScanFood";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const DailyscanDashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        console.log(firebaseUser);
      } else {
        router.push("/userauth");
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // ⏳ LOADING SCREEN
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className={"min-h-screen bg-[#F7F9FA] text-gray-900"}>
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Content */}
        <main className="p-4 lg:p-8 space-y-6">
          <ScanFood user={user} />
        </main>
      </div>
    </div>
  );
};

export default DailyscanDashboard;

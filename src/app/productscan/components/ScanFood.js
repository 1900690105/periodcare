"use client";

import { useState, useEffect, useRef } from "react";
import { QrCode, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductInfo from "./ProductInfo";
import BarcodeScanner from "./BarcodeScanner";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import Image from "next/image";

export function ScanFood({ user }) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [history, setHistory] = useState([]);
  const [barcode, setBarcode] = useState("");
  const scanLock = useRef(false);

  /* ---------------- LOAD USER HISTORY ---------------- */

  useEffect(() => {
    if (!user?.uid) return;
    loadHistory();
  }, [user]);

  const loadHistory = async () => {
    const q = query(
      collection(db, "users", user.uid, "scans"),
      orderBy("scannedAt", "desc"),
    );

    const snap = await getDocs(q);
    const items = [];

    for (const d of snap.docs) {
      const barcode = d.data().barcode;
      const productSnap = await getDoc(doc(db, "products", barcode));
      if (productSnap.exists()) items.push(productSnap.data());
    }

    setHistory(items);
  };

  /* ---------------- MAIN SCAN LOGIC ---------------- */

  const handleDetected = async (code) => {
    if (!code || scanLock.current || !user?.uid) return;

    scanLock.current = true;
    setLoading(true);

    try {
      let finalProduct;
      const productRef = doc(db, "products", code);
      const productSnap = await getDoc(productRef);

      // 1️⃣ LOAD FROM CACHE
      if (productSnap.exists()) {
        console.log("⚡ Loaded from Firestore cache");
        finalProduct = productSnap.data();
      }

      // 2️⃣ FETCH FROM API
      else {
        console.log("🌍 Fetching from OpenFoodFacts");

        const res = await fetch(
          `https://world.openfoodfacts.org/api/v2/product/${code}.json`,
        );
        const json = await res.json();

        if (json.status !== 1) {
          alert("Product not found");
          return;
        }

        const p = json.product;

        finalProduct = {
          barcode: code,
          name: p.product_name || null,
          brand: p.brands || null,
          image: p.image_url || null,
          ingredients: p.ingredients_text || null,
          nutriments: p.nutriments || null,
          nutriscore: p.nutriscore_grade || null,
          novaGroup: p.nova_group || null,
          createdAt: serverTimestamp(),
        };

        // SAVE GLOBAL PRODUCT (UNIQUE)
        await setDoc(productRef, finalProduct);
      }

      // 3️⃣ SAVE USER HISTORY (REFERENCE ONLY)
      await addDoc(collection(db, "users", user.uid, "scans"), {
        barcode: code,
        scannedAt: serverTimestamp(),
      });

      setProduct(finalProduct);
      await loadHistory();
    } catch (err) {
      console.error(err);
      alert("Scan failed");
    } finally {
      setLoading(false);
      setTimeout(() => (scanLock.current = false), 1500);
    }
  };

  const openHistoryProduct = (p) => {
    setProduct(p);

    // scroll to product viewer (nice UX)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scan Food</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-emerald-500" />
            Barcode Scanner
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <BarcodeScanner onDetected={handleDetected} />

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Enter barcode"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <Button onClick={() => handleDetected(barcode)}>Test</Button>
          </div>

          {loading && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing scan...
            </div>
          )}

          <ProductInfo data={product} />
        </CardContent>
      </Card>

      {/* HISTORY */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Scans</h2>

        <div className="grid gap-3">
          {history.map((p, i) => (
            <button
              key={i}
              onClick={() => openHistoryProduct(p)}
              className="flex items-center gap-3 border rounded p-2 hover:bg-gray-50 transition text-left"
            >
              {p.image && (
                <Image
                  src={p.image}
                  className="w-14 h-14 object-cover rounded"
                  alt={p.name}
                  height={100}
                  width={100}
                />
              )}

              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-gray-500">{p.brand}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

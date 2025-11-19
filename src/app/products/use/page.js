import React, { Suspense } from "react";
import ProductUsageTracker from "./components/ProductUse";

const page = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProductUsageTracker />
      </Suspense>
    </>
  );
};

export default page;

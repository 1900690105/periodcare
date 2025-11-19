import React, { Suspense } from "react";
import CyclePrediction from "./components/Tracking";

const page = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CyclePrediction />
      </Suspense>
    </>
  );
};

export default page;

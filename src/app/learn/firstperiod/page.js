import React, { Suspense } from "react";
import FirstPeriodGuide from "./components/FirstPeriodGuide";

const page = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <FirstPeriodGuide />
      </Suspense>
    </>
  );
};

export default page;

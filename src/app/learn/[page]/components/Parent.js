"use client";
import { useParams } from "next/navigation";
import React from "react";
import Cycle from "./Cycle";
import HygieneCare from "./Hygiene&Care";
import FirstPeriodGuide from "./FirstPeriodGuide";
import NutritionDeficiencyTracker from "./NutritionDeficiencyTracker";
import MentalWellnessSupport from "./MentalWellnessSupport";
import EmergencyHelpMode from "./Emergency";

function ParentComponent() {
  const param = useParams();
  const page = param.page;

  return (
    <>
      <div>{page == "cycle" && <Cycle />}</div>
      <div>{page == "hygienecare" && <HygieneCare />}</div>
      <div>{page == "firstperiod" && <FirstPeriodGuide />}</div>
      <div>{page == "nutritiontracker" && <NutritionDeficiencyTracker />}</div>
      <div>{page == "mentalsupport" && <MentalWellnessSupport />}</div>
      <div>{page == "helpmode" && <EmergencyHelpMode />}</div>
    </>
  );
}

export default ParentComponent;

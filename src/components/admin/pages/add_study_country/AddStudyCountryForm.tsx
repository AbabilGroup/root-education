"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";
import Step11 from "./steps/Step11";
import { capitalizeSlug } from "@/lib/utils";

const AddStudyCountryForm = () => {
  const [activeTab, setActiveTab] = useState("step1");
  const [countryName, setCountryName] = useState("serbia");

  return (
    <>
      {countryName && (
        <h5 className="mb-10">
          Continuing uploading study country: {capitalizeSlug(countryName)}
        </h5>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-1/2">
        <TabsList className="mb-10 flex items-center justify-start gap-x-2">
          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step1" ? "shadow-sm" : "shadow-md"}`}
            value="step1"
          >
            Step 1
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step2" ? "shadow-sm" : "shadow-md"}`}
            value="step2"
          >
            Step 2
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step3" ? "shadow-sm" : "shadow-md"}`}
            value="step3"
          >
            Step 3
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step4" ? "shadow-sm" : "shadow-md"}`}
            value="step4"
          >
            Step 4
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step5" ? "shadow-sm" : "shadow-md"}`}
            value="step5"
          >
            Step 5
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step6" ? "shadow-sm" : "shadow-md"}`}
            value="step6"
          >
            Step 6
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step7" ? "shadow-sm" : "shadow-md"}`}
            value="step7"
          >
            Step 7
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step8" ? "shadow-sm" : "shadow-md"}`}
            value="step8"
          >
            Step 8
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step9" ? "shadow-sm" : "shadow-md"}`}
            value="step9"
          >
            Step 9
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step10" ? "shadow-sm" : "shadow-md"}`}
            value="step10"
          >
            Step 10
          </TabsTrigger>

          <TabsTrigger
            className={`border px-5 py-3 shadow-none ${activeTab === "step11" ? "shadow-sm" : "shadow-md"}`}
            value="step11"
          >
            Step 11
          </TabsTrigger>
        </TabsList>

        <Step1 setActiveTab={setActiveTab} setCountryName={setCountryName} />

        <Step2 countryName={countryName} setActiveTab={setActiveTab} />

        <Step3 countryName={countryName} setActiveTab={setActiveTab} />

        <Step4 countryName={countryName} setActiveTab={setActiveTab} />

        <Step5 countryName={countryName} setActiveTab={setActiveTab} />

        <Step6 countryName={countryName} setActiveTab={setActiveTab} />

        <Step7 countryName={countryName} setActiveTab={setActiveTab} />

        <Step8 countryName={countryName} setActiveTab={setActiveTab} />

        <Step9 countryName={countryName} setActiveTab={setActiveTab} />

        <Step10 countryName={countryName} setActiveTab={setActiveTab} />

        <Step11 countryName={countryName} setCountryName={setCountryName} />
      </Tabs>
    </>
  );
};

export default AddStudyCountryForm;

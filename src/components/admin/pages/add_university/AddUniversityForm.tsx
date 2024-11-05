"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AddUniversityForm = () => {
  const [activeTab, setActiveTab] = useState("step1");
  return (
    <>
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
      </Tabs>
    </>
  );
};

export default AddUniversityForm;

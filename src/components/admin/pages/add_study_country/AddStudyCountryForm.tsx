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

const AddStudyCountryForm = () => {
  const [disabledTab, setDisabledTab] = useState({
    tab1: false,
    tab2: true,
    tab3: true,
    tab4: true,
    tab5: true,
    tab6: true,
    tab7: true,
    tab8: true,
    tab9: true,
    tab10: true,
    tab11: true,
  });
  const [activeTab, setActiveTab] = useState("step1");
  const [countryName, setCountryName] = useState("");

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-1/2">
        <TabsList className="flex items-center justify-start gap-x-2">
          <TabsTrigger
            className="border"
            value="step1"
            disabled={disabledTab.tab1}
          >
            Step 1
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step2"
            disabled={disabledTab.tab2}
          >
            Step 2
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step3"
            disabled={disabledTab.tab3}
          >
            Step 3
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step4"
            disabled={disabledTab.tab4}
          >
            Step 4
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step5"
            disabled={disabledTab.tab5}
          >
            Step 5
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step6"
            disabled={disabledTab.tab6}
          >
            Step 6
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step7"
            disabled={disabledTab.tab7}
          >
            Step 7
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step8"
            disabled={disabledTab.tab8}
          >
            Step 8
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step9"
            disabled={disabledTab.tab9}
          >
            Step 9
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step10"
            disabled={disabledTab.tab10}
          >
            Step 10
          </TabsTrigger>
          <TabsTrigger
            className="border"
            value="step11"
            disabled={disabledTab.tab11}
          >
            Step 11
          </TabsTrigger>
        </TabsList>

        <Step1
          setCountryName={setCountryName}
          setActiveTab={setActiveTab}
          disabledTab={disabledTab}
          setDisabledTab={setDisabledTab}
        />

        <Step2 />

        <Step3 countryName={countryName} />

        <Step4 />

        <Step5 />

        <Step6 />

        <Step7 />

        <Step8 />

        <Step9 />

        <Step10 />

        <Step11 />
      </Tabs>
    </>
  );
};

export default AddStudyCountryForm;

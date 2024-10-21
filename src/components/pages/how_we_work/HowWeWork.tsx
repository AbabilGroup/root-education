import Section from "@/components/common/Section";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

const HowWeWork = () => {
  return (
    <Section
      sectionName="How We Work"
      title="Comprehensive Support for Your Journey"
    >
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* step 1  */}
          <Step1 />

          {/* step 2  */}
          <Step2 />

          {/* step 3  */}
          <Step3 />

          {/* step 4  */}
          <Step4 />

          {/* step 5  */}
          <Step5 />

          {/* step 6  */}
          <Step6 />

          {/* step 7  */}
          <Step7 />

          {/* step 8  */}
          <Step8 />
        </div>
      </div>
    </Section>
  );
};

export default HowWeWork;

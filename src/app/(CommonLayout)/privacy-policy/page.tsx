import PageBanner from "@/components/common/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PageBanner PageName="Privacy Policy" />
    </main>
  );
};

export default PrivacyPolicyPage;

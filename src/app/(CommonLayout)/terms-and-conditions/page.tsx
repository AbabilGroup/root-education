import PageBanner from "@/components/common/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Terms and Conditions",
};

const TermsAndConditionsPage = () => {
  return (
    <main>
      <PageBanner PageName="Terms & Conditions" />
    </main>
  );
};

export default TermsAndConditionsPage;

import PageBanner from "@/components/common/PageBanner";
import FaqAccordion from "@/components/pages/faq/FaqAccordion";
import { faq } from "@/faq_data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Frequently Asked Questions",
};

const FaqPage = () => {
  return (
    <main>
      <PageBanner PageName="FAQ" />
      <section className="py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-5">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="inline-block rounded-full border border-primary bg-white px-5 py-3 text-xl font-medium text-primary">
                FAQ
              </span>
            </div>
            <h2 className="text-center text-4xl font-semibold md:text-4xl lg:text-left lg:text-[40px]">
              Get the Information You Need for Your Study Abroad Adventure
            </h2>
            <p className="text-center text-sm font-medium lg:text-left">
              Explore clear and concise answers to common questions about
              studying abroad, including application steps, visa requirements,
              program details, and support services, to help you plan your
              international education journey.
            </p>

            {/* faq container */}

            <div className="space-y-5">
              {faq.map((item) => (
                <FaqAccordion
                  title={item.question}
                  answer={item.answer}
                  key={item.question}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqPage;

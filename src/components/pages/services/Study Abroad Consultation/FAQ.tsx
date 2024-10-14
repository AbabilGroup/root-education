import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import SectionName from "@/components/ui/SectionName";
import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  const faqs = [
    {
      position: "left",
      question: "What is the Study Abroad Consultation Service?",
      answer:
        "Ans: Our Study Abroad Consultation Service provides personalized guidance and support to help you navigate the study abroad process, from choosing the right destination to completing your application.",
    },
    {
      position: "right",
      question: "Who can benefit from this service?",
      answer:
        "Ans: This service is ideal for students who are considering studying abroad, whether you're in high school, university, or pursuing postgraduate studies.",
    },
    {
      position: "left",
      question: "How do I schedule a consultation?",
      answer:
        "Ans: You can schedule a consultation by visiting our website and selecting a convenient time from our online booking system.",
    },
    {
      position: "right",
      question: "What topics can be covered during the consultation?",
      answer:
        "Ans: Topics may include program selection, application processes, visa requirements, scholarships, and adjusting to life in a new country.",
    },
    {
      position: "left",
      question: "Is there a fee for the consultation service?",
      answer:
        "Ans: Our initial consultation is free of charge. Additional services may have associated fees, which will be clearly outlined during your session.",
    },
    {
      position: "right",
      question: "Can I get help with scholarship applications?",
      answer:
        "Ans: Yes, our consultants can guide you through the scholarship application process, including identifying opportunities that match your profile.",
    },
    {
      position: "left",
      question: "How long is each consultation session?",
      answer:
        "Ans: Consultation sessions typically last between 30 minutes to an hour, depending on your needs and questions.",
    },
    {
      position: "right",
      question: "Can I consult with an expert on multiple countries?",
      answer:
        "Ans: Yes, our consultants specialize in various countries and can provide tailored advice for multiple destinations based on your preferences and goals.",
    },
    {
      position: "left",
      question: "Do you offer virtual consultations?",
      answer:
        "Ans: Yes, we offer both in-person and virtual consultations, allowing you to connect with our advisors from anywhere in the world.",
    },
    {
      position: "right",
      question: "What documents should I bring to the consultation?",
      answer:
        "Ans: For the most productive session, bring your academic transcripts, test scores, a resume, and any specific programs or universities you're interested in. We’ll provide more details upon scheduling.",
    },
  ];

  return (
    <section className="pb-[100px] pt-[50px]">
      <FadeInDownWithSlowBounce className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SectionName name="FAQ" position="start" />
            <h2 className="my-5 text-start text-4xl font-semibold lg:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mb-7 mt-5 text-sm font-medium">
              A Frequently Asked Questions (FAQ) section provides concise
              answers to common queries, helping users quickly find essential
              information about a product or service.
            </p>
          </div>
          <div></div>
        </div>
      </FadeInDownWithSlowBounce>
      <div className="container grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
        <div className="space-y-5">
          {faqs
            .filter((item) => item.position === "left")
            .map((faq) => (
              <FaqAccordion
                title={faq.question}
                answer={faq.answer}
                key={faq.question}
              />
            ))}
        </div>
        <div className="space-y-5">
          {faqs
            .filter((item) => item.position === "right")
            .map((faq) => (
              <FaqAccordion
                title={faq.question}
                answer={faq.answer}
                key={faq.question}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

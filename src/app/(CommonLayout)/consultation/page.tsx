import PageBanner from "@/components/common/PageBanner";
import ConsultationForm from "@/components/pages/consultation/ConsultationForm";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Root Education | Consultation",
};

const ConsultationPage = () => {
  return (
    <main className="bg-consultation-bg bg-cover bg-center bg-no-repeat">
      <PageBanner PageName="Consultation" bannerBg="bg-none" />
      <div className="container">
        <div className="mb-[100px] rounded-lg bg-white p-10">
          <h3 className="mb-10 text-center text-3xl font-semibold">
            Reserve Your Appointment
          </h3>

          <ConsultationForm />
        </div>
      </div>

      <div className="rounded-t-[40px] bg-footer-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center justify-between gap-y-5 py-7 lg:flex-row">
          <h3 className="text-center text-3xl font-semibold text-white lg:text-left">
            Ready to Take the Next Step?
          </h3>
          <Link href="/consultation">
            <Button className="bg-white text-secondary hover:bg-secondary hover:text-white">
              Personalized Consultation
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ConsultationPage;

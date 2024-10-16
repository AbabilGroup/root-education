import PageBanner from "@/components/common/PageBanner";
import ConsultationForm from "@/components/pages/consultation/ConsultationForm";

const ConsultationPage = () => {
  return (
    <main className="bg-consultation-bg bg-cover bg-center bg-no-repeat">
      <PageBanner PageName="Consultation" bannerBg="bg-none" />
      <h1>This is ConsultationPage component</h1>
      <div className="container mb-[100px] rounded-lg bg-white p-10">
        <h3 className="text-center text-3xl font-bold">
          Reserve Your Appointment
        </h3>
        <ConsultationForm />
      </div>
    </main>
  );
};

export default ConsultationPage;

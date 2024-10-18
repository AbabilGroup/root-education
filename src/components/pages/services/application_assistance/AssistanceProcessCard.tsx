import Image from "next/image";

const AssistanceProcessCard = () => {
  return (
    <div className="relative flex max-w-[430px] items-center justify-start">
      {/* left  */}

      <div className="space-y-3 rounded-lg border border-b-8 border-b-primary px-8 py-4 shadow">
        <div className="-mt-[3.5rem] flex items-center justify-center">
          <Image
            src="/images/pages/services/application_assistance/process/1.svg"
            alt="Initial Consultation"
            height={80}
            width={80}
          />
        </div>
        <h5 className="text-center text-2xl font-medium">
          Initial Consultation
        </h5>
        <p className="text-center text-sm font-medium">
          Schedule a one-on-one session to assess the student’s needs, goals,
          and preferred study destinations.
        </p>
      </div>

      {/* right */}

      <div className="m-0 h-auto w-32 -rotate-90 rounded-b-lg border bg-primary py-2 text-center text-sm font-medium text-white">
        Step 01
      </div>
    </div>
  );
};

export default AssistanceProcessCard;

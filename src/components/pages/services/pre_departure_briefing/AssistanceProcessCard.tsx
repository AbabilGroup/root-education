import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Image from "next/image";

type TAssistanceProcessCardProps = {
  stepNo: number;
  iconNo: number;
  title: string;
  description: string;
};

const AssistanceProcessCard = ({
  stepNo,
  iconNo,
  title,
  description,
}: TAssistanceProcessCardProps) => {
  return (
    <FadeInRightWithSlowBounce>
      <div className="mx-auto h-auto w-44 basis-auto rounded-t-lg bg-primary py-2 text-center text-sm font-medium text-white">
        Step 0{stepNo}
      </div>

      <div className="basis-full space-y-3 rounded-lg border border-b-8 border-b-primary px-8 py-4 shadow min-h-[240px]">
        <div className="flex items-center justify-center">
          <Image
            src={`/images/pages/services/pre_departure_briefing/process/${iconNo}.svg`}
            alt="Initial Consultation"
            height={80}
            width={80}
          />
        </div>
        <h5 className="text-center text-2xl font-medium">{title}</h5>
        <p className="text-center text-sm font-medium">{description}</p>
      </div>
    </FadeInRightWithSlowBounce>
  );
};

export default AssistanceProcessCard;

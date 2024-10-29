import { apiBaseUrl, port } from "@/secrets";
import { List3 } from "@/types";
import Image from "next/image";

const AdmissionRequirementsCard = ({ requirement }: { requirement: List3 }) => {
  return (
    <div className="space-y-3 rounded-lg border border-x-8 border-primary border-x-primary p-5 shadow-md">
      <div className="flex items-center justify-center">
        <Image
          src={`${apiBaseUrl}:${port}${requirement?.icon}`}
          height={80}
          width={80}
          alt={requirement?.title}
        />
      </div>
      <h5 className="text-center text-xl font-medium">{requirement?.title}</h5>
      <p className="text-center text-sm font-medium">{requirement?.content}</p>
    </div>
  );
};

export default AdmissionRequirementsCard;

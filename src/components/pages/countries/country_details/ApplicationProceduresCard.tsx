// import { apiUrl } from "@/secrets";
import { Applicationprocedureslist } from "@/types/country";

const ApplicationProceduresCard = ({
  procedure,
  index,
}: {
  procedure: Applicationprocedureslist;
  index: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 rounded-lg border p-7 shadow-md">
      <div className="flex basis-[20%] items-center justify-start">
        <div className="size-[100px] rounded-full border p-2">
          <div className="flex size-full items-center justify-center rounded-full bg-primary text-xl font-semibold text-white">
            Step {index + 1}
          </div>
        </div>
      </div>
      <div className="basis-[70%] space-y-3">
        <h5 className="text-center text-xl">{procedure?.title}</h5>
        <p className="text-center text-sm font-medium">{procedure?.content}</p>
      </div>
    </div>
  );
};

export default ApplicationProceduresCard;

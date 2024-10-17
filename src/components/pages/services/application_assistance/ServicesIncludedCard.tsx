import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";

type TServicesIncludedCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServicesIncludedCard = ({
  icon,
  title,
  description,
}: TServicesIncludedCardProps) => {
  return (
    <FadeInRightWithSlowBounce className="relative">
      <div className="relative z-50 m-4 min-h-[230px] space-y-3 rounded-2xl border border-primary bg-white p-4">
        <div className="mx-auto size-[80px] rounded-full border bg-white p-2">
          <div className="flex size-full items-center justify-center rounded-full bg-primary">
            {icon}
          </div>
        </div>
        <h5 className="text-center text-2xl font-medium">{title}</h5>
        <p className="text-center text-sm font-medium">{description}</p>
      </div>
      <div className="absolute bottom-0 z-10 min-h-[100px] w-full rounded-3xl bg-primary"></div>
    </FadeInRightWithSlowBounce>
  );
};

export default ServicesIncludedCard;

import Image from "next/image";

const EuropeStudyCountryCard = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="my-4 space-y-2 rounded-xl border p-4 shadow-lg">
      <div className="relative min-h-[150px] w-full">
        <Image
          className="rounded-lg object-cover"
          src={imageUrl}
          alt={name}
          fill
        />
      </div>
      <h3 className="text-center text-2xl font-medium">{name}</h3>
      <div className="flex items-center justify-center">
        <button className="flex items-center justify-start text-sm font-medium text-primary">
          Explore
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.666 7.99984L3.33268 7.99984M12.666 7.99984L9.99935 5.33317M12.666 7.99984L9.99935 10.6665"
              stroke="#F37329"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EuropeStudyCountryCard;

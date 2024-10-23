type TSectionNameProps = {
  name: string;
  position?: "start" | "end" | "center";
};

const SectionName = ({ name, position = "start" }: TSectionNameProps) => {
  return (
    <div className={`flex items-center justify-${position}`}>
      <span className="inline-block rounded-full border border-primary bg-white px-5 py-3 text-center text-xl font-medium text-primary">
        {name}
      </span>
    </div>
  );
};

export default SectionName;

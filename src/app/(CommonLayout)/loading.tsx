import Image from "next/image";

const loading = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <Image
        className="animate-pulse"
        src="/images/logo.svg"
        alt="Root Education"
        height={43}
        width={110}
      />
    </div>
  );
};

export default loading;

import Image from "next/image";

const loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Image
        className="animate-pulse"
        src="/images/logo.svg"
        alt="Root Education"
        height={43}
        width={110}
      />
    </main>
  );
};

export default loading;

import Section from "@/components/common/Section";
import Image from "next/image";

const InstituteRepresent = () => {
  return (
    <Section
      sectionName="Institute we represent for Countries"
      title="Leading Institutions We Represent Globally"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6">
          {/* card  */}
          <div className="flex max-w-[500px] items-center justify-start gap-x-4 rounded-full border p-4 shadow-sm">
            <Image
              className="rounded-full"
              src="/icons/university_logo.svg"
              alt="University"
              height={70}
              width={70}
            />

            <div className="space-y-2">
              <h5 className="text-xl font-medium">
                Spiru haret University, Romania
              </h5>
              <h6 className="text-sm font-medium">Romania</h6>
            </div>
          </div>
          {/* card  */}
          <div className="flex max-w-[500px] items-center justify-start gap-x-4 rounded-full border p-4 shadow-sm">
            <Image
              className="rounded-full"
              src="/icons/university_logo.svg"
              alt="University"
              height={70}
              width={70}
            />

            <div className="space-y-2">
              <h5 className="text-xl font-medium">
                Spiru haret University, Romania
              </h5>
              <h6 className="text-sm font-medium">Romania</h6>
            </div>
          </div>
          {/* card  */}
          <div className="flex max-w-[500px] items-center justify-start gap-x-4 rounded-full border p-4 shadow-sm">
            <Image
              className="rounded-full"
              src="/icons/university_logo.svg"
              alt="University"
              height={70}
              width={70}
            />

            <div className="space-y-2">
              <h5 className="text-xl font-medium">
                Spiru haret University, Romania
              </h5>
              <h6 className="text-sm font-medium">Romania</h6>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InstituteRepresent;

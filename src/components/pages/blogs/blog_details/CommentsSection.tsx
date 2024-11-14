import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const CommentsSection = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container space-y-5">
        <div className="space-y-3">
          <h5 className="text-xl font-bold">Success Story</h5>
          <p className="text-sm font-medium">
            Our students’ experiences reflect the impact of our programs. Here
            are a few testimonials:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-8 rounded-xl border p-8 shadow-md">
            <h6 className="font-medium">03 Comments</h6>

            {/* comments  */}
            <div className="space-y-6">
              {/* comment card  */}
              <div className="flex items-start justify-start gap-x-5 rounded-lg border p-5 shadow-md">
                <div className="basis-[50px]">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="basis-[70%] space-y-2">
                  <h5 className="text-xl font-medium">Emily Johnson</h5>
                  <p className="text-sm font-medium text-primary">
                    08th August, 2024
                  </p>
                  <p className="text-sm font-medium">
                    My time in Barcelona was life-changing. The personalized
                    support from Root Education made the process seamless, and I
                    gained invaluable cultural insights and academic knowledge.
                  </p>
                </div>
                <div className="ml-auto basis-auto">
                  <Button>Reply</Button>
                </div>
              </div>

              {/* comment card  */}
              <div className="flex items-start justify-start gap-x-5 rounded-lg border p-5 shadow-md">
                <div className="basis-[50px]">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="basis-[70%] space-y-2">
                  <h5 className="text-xl font-medium">Emily Johnson</h5>
                  <p className="text-sm font-medium text-primary">
                    08th August, 2024
                  </p>
                  <p className="text-sm font-medium">
                    My time in Barcelona was life-changing. The personalized
                    support from Root Education made the process seamless, and I
                    gained invaluable cultural insights and academic knowledge.
                  </p>
                </div>
                <div className="ml-auto basis-auto">
                  <Button>Reply</Button>
                </div>
              </div>
              {/* comment card  */}
              <div className="flex items-start justify-start gap-x-5 rounded-lg border p-5 shadow-md">
                <div className="basis-[50px]">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="basis-[70%] space-y-2">
                  <h5 className="text-xl font-medium">Emily Johnson</h5>
                  <p className="text-sm font-medium text-primary">
                    08th August, 2024
                  </p>
                  <p className="text-sm font-medium">
                    My time in Barcelona was life-changing. The personalized
                    support from Root Education made the process seamless, and I
                    gained invaluable cultural insights and academic knowledge.
                  </p>
                </div>
                <div className="ml-auto basis-auto">
                  <Button>Reply</Button>
                </div>
              </div>
            </div>

            {/* add comments  */}
            <div className="space-y-3">
              <h5 className="text-xl font-bold">Leave A Comments</h5>

              <form action="" className="space-y-5">
                <div className="flex items-center justify-between gap-x-5">
                  <Input
                    className="py-5 placeholder:text-black placeholder:text-opacity-50"
                    type="text"
                    placeholder="Full Name*"
                  />
                  <Input
                    className="py-5 placeholder:text-black placeholder:text-opacity-50"
                    type="email"
                    placeholder="Email Address*"
                  />
                </div>
                <div>
                  <Textarea
                    className="placeholder:text-black placeholder:text-opacity-50"
                    placeholder="Write Comments"
                    rows={5}
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save your name & email info in the browser for next
                      comments.
                    </label>
                  </div>
                </div>
                <div>
                  <Button type="submit">Send Comments</Button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;

import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Root Education | Contact Us",
};

const ContactUsPage = () => {
  return (
    <main>
      <PageBanner PageName="Contact Us" />
      <section className="py-[100px]">
        <div className="container">
          <FadeInDownWithSlowBounce>
            <h4 className="text-center text-[40px] font-bold text-primary">
              Meet Us
            </h4>

            <p className="mb-8 mt-2 text-center text-2xl font-medium">
              Any question or remarks? Just write us a message
            </p>
          </FadeInDownWithSlowBounce>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* card */}
            <FadeInLeftWithSlowBounce className="group flex min-h-[210px] w-[355px] flex-col items-center gap-4 rounded-xl border border-b-8 border-b-primary bg-white p-4 shadow-lg duration-200 hover:bg-primary">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#F37329" />
                  <path
                    d="M35.0084 34.8214C38.2007 29.812 37.7994 30.437 37.8914 30.3064C39.0537 28.6671 39.668 26.7376 39.668 24.7266C39.668 19.3934 35.3402 15 30 15C24.6772 15 20.332 19.3847 20.332 24.7266C20.332 26.7363 20.9592 28.7163 22.1596 30.3777L24.9915 34.8214C21.9637 35.2867 16.8164 36.6734 16.8164 39.7266C16.8164 40.8396 17.5429 42.4257 21.0036 43.6617C23.4202 44.5247 26.6151 45 30 45C36.3296 45 43.1836 43.2145 43.1836 39.7266C43.1836 36.6728 38.0423 35.2877 35.0084 34.8214ZM23.6279 29.4108C23.6182 29.3957 23.6081 29.3809 23.5976 29.3664C22.5987 27.9923 22.0898 26.3637 22.0898 24.7266C22.0898 20.331 25.6293 16.7578 30 16.7578C34.3617 16.7578 37.9102 20.3326 37.9102 24.7266C37.9102 26.3664 37.4109 27.9397 36.4661 29.2776C36.3814 29.3893 36.8231 28.703 30 39.4095L23.6279 29.4108ZM30 43.2422C23.0863 43.2422 18.5742 41.21 18.5742 39.7266C18.5742 38.7295 20.8927 37.0901 26.0302 36.4511L29.2588 41.5173C29.3382 41.6419 29.4477 41.7445 29.5773 41.8156C29.7068 41.8866 29.8522 41.9239 29.9999 41.9239C30.1477 41.9239 30.2931 41.8866 30.4226 41.8156C30.5522 41.7445 30.6617 41.6419 30.7411 41.5173L33.9697 36.4511C39.1073 37.0901 41.4258 38.7295 41.4258 39.7266C41.4258 41.1974 36.9543 43.2422 30 43.2422Z"
                    fill="#FDFDFD"
                  />
                  <path
                    d="M30 20.332C27.5769 20.332 25.6055 22.3034 25.6055 24.7266C25.6055 27.1497 27.5769 29.1211 30 29.1211C32.4231 29.1211 34.3945 27.1497 34.3945 24.7266C34.3945 22.3034 32.4231 20.332 30 20.332ZM30 27.3633C28.5461 27.3633 27.3633 26.1804 27.3633 24.7266C27.3633 23.2727 28.5461 22.0898 30 22.0898C31.4539 22.0898 32.6367 23.2727 32.6367 24.7266C32.6367 26.1804 31.4539 27.3633 30 27.3633Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Location
              </h6>
              <Link href="https://maps.app.goo.gl/52W4k1TirayToasE7">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  UK 12-116 Whitechapel Road 2nd
                  <br /> Floor, UK London E1 1JE
                </p>
              </Link>
            </FadeInLeftWithSlowBounce>

            {/* card */}
            <FadeInUpWithSlowBounce className="group flex min-h-[210px] w-[355px] flex-col items-center gap-4 rounded-xl border border-b-8 border-b-primary bg-white p-4 shadow-lg duration-200 hover:bg-primary">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#F37329" />
                  <g clipPath="url(#clip0_297_3189)">
                    <path
                      d="M23.0939 33.6183C25.5597 36.5659 28.528 38.8867 31.9159 40.5288C33.2058 41.1401 34.9308 41.8653 36.8527 41.9896C36.9718 41.9948 37.0858 42 37.2049 42C38.4948 42 39.5309 41.5545 40.3753 40.6376C40.3805 40.6324 40.3908 40.622 40.396 40.6117C40.6964 40.2491 41.0383 39.9227 41.3958 39.5756C41.6393 39.3425 41.8879 39.099 42.1262 38.8504C43.2296 37.7004 43.2296 36.2395 42.1158 35.1258L39.0025 32.0124C38.4741 31.4633 37.8421 31.1732 37.179 31.1732C36.516 31.1732 35.8788 31.4633 35.3349 32.0073L33.4803 33.8618C33.3094 33.7634 33.1332 33.6753 32.9675 33.5924C32.7603 33.4888 32.5686 33.3904 32.3977 33.2816C30.7089 32.2093 29.1755 30.8106 27.7095 29.0131C26.9687 28.0754 26.4714 27.288 26.1243 26.4851C26.6113 26.0448 27.0672 25.5837 27.5075 25.133C27.6629 24.9724 27.8235 24.8119 27.9841 24.6513C28.5435 24.0918 28.844 23.4443 28.844 22.7864C28.844 22.1285 28.5487 21.4809 27.9841 20.9215L26.4403 19.3777C26.259 19.1964 26.0881 19.0203 25.9119 18.839C25.5701 18.4867 25.2126 18.1241 24.8604 17.7978C24.3268 17.2746 23.7 17 23.0369 17C22.379 17 21.747 17.2746 21.1927 17.8029L19.2553 19.7404C18.5508 20.4449 18.1519 21.2996 18.069 22.2891C17.9706 23.5271 18.1985 24.8429 18.7891 26.4333C19.6956 28.8939 21.0632 31.1784 23.0939 33.6183ZM19.333 22.3978C19.3952 21.7089 19.6594 21.1339 20.1567 20.6366L22.0837 18.7095C22.3842 18.4194 22.7157 18.2692 23.0369 18.2692C23.3529 18.2692 23.6741 18.4194 23.9693 18.7199C24.3164 19.041 24.6428 19.3777 24.995 19.7352C25.1712 19.9165 25.3525 20.0978 25.5338 20.2843L27.0775 21.828C27.3987 22.1492 27.5645 22.4755 27.5645 22.7967C27.5645 23.1179 27.3987 23.4443 27.0775 23.7654C26.9169 23.926 26.7563 24.0918 26.5957 24.2524C26.114 24.7393 25.6633 25.2004 25.166 25.6407L25.1401 25.6666C24.7101 26.0966 24.7775 26.5058 24.8811 26.8166C24.8863 26.8322 24.8914 26.8425 24.8966 26.8581C25.2955 27.8164 25.8498 28.7281 26.7149 29.816C28.269 31.7327 29.9059 33.2194 31.7087 34.3643C31.9314 34.5093 32.1697 34.6233 32.3925 34.7373C32.5997 34.8409 32.7914 34.9393 32.9623 35.0481C32.983 35.0584 32.9986 35.0688 33.0193 35.0792C33.1902 35.1672 33.356 35.2087 33.5218 35.2087C33.9362 35.2087 34.2056 34.9445 34.2936 34.8564L36.2311 32.919C36.5315 32.6185 36.8579 32.4579 37.179 32.4579C37.5727 32.4579 37.8939 32.7014 38.096 32.919L41.2197 36.0375C41.8413 36.6591 41.8361 37.3326 41.2041 37.9905C40.9865 38.2236 40.7586 38.4463 40.5151 38.6794C40.1525 39.0317 39.7744 39.3943 39.4325 39.8036C38.8367 40.4459 38.127 40.7464 37.2101 40.7464C37.1221 40.7464 37.0288 40.7412 36.9408 40.736C35.2416 40.6272 33.6616 39.9642 32.4754 39.3995C29.2532 37.8402 26.4248 35.6283 24.0781 32.8206C22.1459 30.4946 20.8456 28.3293 19.9857 26.0085C19.4521 24.5839 19.2501 23.4391 19.333 22.3978Z"
                      fill="#FDFDFD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_3189">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(18 17)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Call Us
              </h6>
              <Link href="tel:+40737228622">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  +40 123 456 789
                </p>
              </Link>
            </FadeInUpWithSlowBounce>

            {/* card */}
            <FadeInRightWithSlowBounce className="group flex min-h-[210px] w-[355px] flex-col items-center gap-4 rounded-xl border border-b-8 border-b-primary bg-white p-4 shadow-lg duration-200 hover:bg-primary">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#F37329" />
                  <path
                    d="M42.3633 19.4531H17.6367C16.1799 19.4531 15 20.6404 15 22.0898V37.9102C15 39.3683 16.1886 40.5469 17.6367 40.5469H42.3633C43.8079 40.5469 45 39.3732 45 37.9102V22.0898C45 20.6429 43.8248 19.4531 42.3633 19.4531ZM41.994 21.2109L31.8645 31.2871C31.3664 31.7852 30.7043 32.0594 30 32.0594C29.2957 32.0594 28.6336 31.7851 28.1339 31.2855L18.006 21.2109H41.994ZM16.7578 37.5524V22.4487L24.3538 30.0047L16.7578 37.5524ZM18.0071 38.7891L25.6001 31.2444L26.8926 32.5301C27.7226 33.3601 28.8262 33.8172 30 33.8172C31.1738 33.8172 32.2774 33.3601 33.1058 32.5317L34.3999 31.2444L41.9929 38.7891H18.0071ZM43.2422 37.5524L35.6462 30.0047L43.2422 22.4487V37.5524Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Send Email
              </h6>
              <Link href="mailto:career@hireandfire.eu">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  Info@rooteducation.group
                </p>
              </Link>
            </FadeInRightWithSlowBounce>
          </div>
        </div>
      </section>
      <FadeInDownWithSlowBounce>
        <section className="px-4 pb-[100px] xl:px-0">
          <div className="container">
            <div className="flex min-h-[600px] flex-col items-stretch justify-between bg-[#FBFBFB] shadow-md lg:flex-row">
              <div className="relative min-h-[500px] w-full basis-full md:h-auto lg:basis-1/2">
                <iframe
                  className="min-h-full min-w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.9641733246917!2d-0.07037422309982543!3d51.51673971002054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccae3914e6b%3A0x82fc38e9465c588!2s2nd%20Floor%2C%2010-12%20Whitechapel%20Rd%2C%20London%20E1%201EW%2C%20UK!5e1!3m2!1sen!2sbd!4v1729073167503!5m2!1sen!2sbd"
                  height={600}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="basis-full bg-contact-us-form-bg bg-cover bg-center bg-no-repeat px-4 py-[50px] lg:basis-1/2 lg:p-[50px]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h5 className="mb-5 text-center text-2xl font-medium text-white">
                    Get in Touch
                  </h5>
                  <form className="w-full space-y-5" action="">
                    <Input
                      className="w-full rounded-md border-2 border-white bg-transparent py-5 placeholder:text-white focus:ring-primary"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                    <Input
                      className="w-full rounded-md border-2 border-white bg-transparent py-5 placeholder:text-white focus:ring-primary"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <Input
                      className="w-full rounded-md border-2 border-white bg-transparent py-5 placeholder:text-white focus:ring-primary"
                      type="tel"
                      placeholder="Phone number"
                      required
                    />
                    <Textarea
                      className="w-full rounded-md border-2 border-white bg-transparent placeholder:text-white focus:ring-primary"
                      placeholder="Write your massage"
                      rows={5}
                      required
                    />
                    <button
                      className="flex items-center justify-center gap-x-2 rounded-sm bg-secondary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-secondary hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInDownWithSlowBounce>
    </main>
  );
};

export default ContactUsPage;

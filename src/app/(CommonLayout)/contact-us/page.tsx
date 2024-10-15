import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneVolume } from "react-icons/fa";

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
            <FadeInLeftWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg duration-200 hover:bg-primary">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
                <FaMapMarkerAlt />
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Office Address
              </h6>
              <Link href="https://maps.app.goo.gl/52W4k1TirayToasE7">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  Bucureşti Sectorul 1, Strada ING.
                  <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
                </p>
              </Link>
            </FadeInLeftWithSlowBounce>

            {/* card */}
            <FadeInUpWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg duration-200 hover:bg-primary">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
                <FaPhoneVolume />
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Call Us
              </h6>
              <Link href="tel:+40737228622">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  +(40) 7372 28622
                </p>
              </Link>
            </FadeInUpWithSlowBounce>

            {/* card */}
            <FadeInRightWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg duration-200 hover:bg-primary">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
                <FaEnvelope />
              </div>
              <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
                Email Us
              </h6>
              <Link href="mailto:career@hireandfire.eu">
                <p className="text-center text-sm font-medium group-hover:text-white">
                  career@hireandfire.eu
                </p>
              </Link>
            </FadeInRightWithSlowBounce>
          </div>
        </div>
      </section>
      <FadeInDownWithSlowBounce>
        <section className="px-4 pb-[100px] xl:px-0">
          <div className="container">
            <div className="flex min-h-[600px] flex-col items-center justify-between bg-[#FBFBFB] shadow-md lg:flex-row">
              <div className="relative min-h-[500px] w-full basis-full md:h-auto lg:basis-1/2">
                <iframe
                  className="absolute left-0 top-0 h-full w-full focus:border-0 focus:ring-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.9127450971082!2d26.072229846739514!3d44.46082750811414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2021ea90a1293%3A0xa8abd61622410077!2sStrada%20Inginer%20Zablovschi%2010%2C%20Bucure%C8%99ti%20077190%2C%20Romania!5e0!3m2!1sen!2sbd!4v1724827903741!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="basis-full px-4 py-[50px] lg:basis-1/2 lg:p-[50px]">
                <h5 className="mb-5 text-center text-2xl font-medium">
                  Get in Touch
                </h5>
                <form className="space-y-5" action="">
                  <Input
                    className="rounded-sm focus:ring-primary"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                  <Input
                    className="rounded-sm focus:ring-primary"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Input
                    className="rounded-sm focus:ring-primary"
                    type="tel"
                    placeholder="Phone number"
                    required
                  />
                  <Textarea
                    className="rounded-sm focus:ring-primary"
                    placeholder="Write your massage"
                    rows={5}
                    required
                  />
                  <button
                    className="flex items-center justify-center gap-x-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-secondary hover:text-white"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </FadeInDownWithSlowBounce>
    </main>
  );
};

export default ContactUsPage;

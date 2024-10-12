import Image from "next/image";
import SiteButton from "../ui/SiteButton";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    company: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Our Partners University",
        href: "/our-partners-university",
      },
      {
        label: "Our Study Countries",
        href: "/our-study-countries",
      },
      {
        label: "How We Works",
        href: "/how-we-work",
      },
      {
        label: "Blogs & Newses",
        href: "/blogs-and-newses",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
    ],
    our_services: [
      {
        label: "Study Abroad Consultation",
        href: "/study-abroad-Consultation",
      },
      {
        label: "University Selection",
        href: "/university-selection",
      },
      {
        label: "Application Assistance",
        href: "/application-assistance",
      },
      {
        label: "Visa Guidance",
        href: "/visa-guidance",
      },
      {
        label: "Scholarship & Financial Aid",
        href: "/scholarship-and-financial-aid",
      },
      {
        label: "Pre-departure Briefing",
        href: "/pre-departure-briefing",
      },
    ],
    study_countries: [
      {
        label: "Study in Romania",
        href: "/study-in-romania",
      },
      {
        label: "Study in Malta",
        href: "/study-in-malta",
      },
      {
        label: "Study in Hungary",
        href: "/study-in-hungary",
      },
      {
        label: "Study in Lithuania",
        href: "/study-in-lithuania",
      },
      {
        label: "Study in Latvia",
        href: "/study-in-latvia",
      },
      {
        label: "Study in Bulgaria",
        href: "/study-in-bulgaria",
      },
      {
        label: "Study in Georgia",
        href: "/study-in-georgia",
      },
      {
        label: "Study in Russia",
        href: "/study-in-russia",
      },
      {
        label: "View All Countries",
        href: "/",
      },
    ],
  };

  return (
    <footer className="mt-auto">
      <div className="rounded-t-[40px] bg-footer-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center justify-between gap-y-5 py-7 lg:flex-row">
          <h3 className="text-center text-3xl font-semibold text-white lg:text-left">
            Ready to Take the Next Step?
          </h3>
          <SiteButton bg="bg-white" text="text-primary">
            Personalized Consultation
          </SiteButton>
        </div>
      </div>
      <div className="bg-secondary pt-[40px]">
        <div className="container flex gap-x-[50px]">
          <div className="basis-[25%] space-y-5">
            <div className="relative h-[43px] w-[110px]">
              <Image
                className="object-cover"
                src="/images/footer-logo.svg"
                alt="Root Education"
                fill
              />
            </div>
            <p className="text-sm text-white">
              Welcome to Root Education, your trusted partner in pursuing higher
              education abroad. Our mission is to guide students through every
              step of the journey, from choosing the right destination and
              university to navigating the application process and settling into
              a new country. With personalized counseling, expert advice, and a
              wealth of resources, we ensure your study abroad experience is
              smooth and successful. Join us at Root Education and take the
              first step towards a brighter future.
            </p>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-center justify-start gap-3">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_161_965)">
                      <path
                        d="M11.2604 18.6357C12.8385 20.5222 14.7382 22.0075 16.9064 23.0584C17.732 23.4496 18.836 23.9138 20.066 23.9934C20.1422 23.9967 20.2152 24 20.2914 24C21.117 24 21.78 23.7149 22.3204 23.1281C22.3238 23.1247 22.3304 23.1181 22.3337 23.1115C22.526 22.8794 22.7448 22.6705 22.9736 22.4484C23.1294 22.2992 23.2885 22.1434 23.441 21.9843C24.1472 21.2482 24.1472 20.3133 23.4344 19.6005L21.4419 17.608C21.1037 17.2565 20.6992 17.0709 20.2749 17.0709C19.8505 17.0709 19.4427 17.2565 19.0946 17.6046L17.9077 18.7915C17.7983 18.7286 17.6856 18.6722 17.5795 18.6191C17.4468 18.5528 17.3242 18.4898 17.2148 18.4202C16.134 17.7339 15.1526 16.8388 14.2144 15.6884C13.7403 15.0883 13.422 14.5843 13.1999 14.0705C13.5115 13.7886 13.8033 13.4936 14.0851 13.2051C14.1845 13.1024 14.2873 12.9996 14.3901 12.8968C14.7481 12.5387 14.9404 12.1243 14.9404 11.7033C14.9404 11.2822 14.7514 10.8678 14.3901 10.5097L13.4021 9.52176C13.2861 9.40572 13.1766 9.293 13.0639 9.17696C12.8451 8.95151 12.6163 8.71944 12.3909 8.51057C12.0494 8.17571 11.6483 8 11.2239 8C10.8028 8 10.3984 8.17571 10.0436 8.51388L8.80366 9.75383C8.35277 10.2047 8.09749 10.7518 8.04444 11.385C7.98145 12.1774 8.12733 13.0195 8.50528 14.0373C9.08547 15.6121 9.96073 17.0742 11.2604 18.6357ZM8.85339 11.4546C8.89318 11.0137 9.06226 10.6457 9.38054 10.3274L10.6139 9.09407C10.8062 8.90841 11.0183 8.81227 11.2239 8.81227C11.4261 8.81227 11.6317 8.90841 11.8207 9.1007C12.0428 9.30626 12.2517 9.52176 12.4771 9.75052C12.5898 9.86656 12.7059 9.98259 12.8219 10.1019L13.8099 11.0899C14.0154 11.2955 14.1215 11.5044 14.1215 11.7099C14.1215 11.9155 14.0154 12.1243 13.8099 12.3299C13.7071 12.4327 13.6043 12.5387 13.5016 12.6415C13.1932 12.9532 12.9048 13.2482 12.5865 13.53L12.5699 13.5466C12.2948 13.8218 12.3379 14.0837 12.4042 14.2826C12.4075 14.2926 12.4108 14.2992 12.4141 14.3092C12.6694 14.9225 13.0241 15.506 13.5778 16.2022C14.5724 17.4289 15.6201 18.3804 16.7738 19.1131C16.9164 19.206 17.0689 19.2789 17.2115 19.3518C17.3441 19.4182 17.4667 19.4811 17.5761 19.5508C17.5894 19.5574 17.5994 19.564 17.6126 19.5707C17.722 19.627 17.8281 19.6535 17.9342 19.6535C18.1994 19.6535 18.3718 19.4845 18.4282 19.4281L19.6681 18.1881C19.8604 17.9959 20.0693 17.8931 20.2749 17.8931C20.5268 17.8931 20.7324 18.0489 20.8617 18.1881L22.8609 20.184C23.2587 20.5818 23.2554 21.0128 22.8509 21.4339C22.7117 21.5831 22.5658 21.7257 22.41 21.8748C22.1779 22.1003 21.9359 22.3324 21.7171 22.5943C21.3358 23.0054 20.8816 23.1977 20.2948 23.1977C20.2384 23.1977 20.1787 23.1944 20.1224 23.191C19.0349 23.1214 18.0237 22.6971 17.2645 22.3357C15.2023 21.3378 13.3921 19.9221 11.8903 18.1252C10.6536 16.6366 9.82148 15.2507 9.27113 13.7654C8.92965 12.8537 8.80035 12.121 8.85339 11.4546Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <circle
                      cx="16"
                      cy="16"
                      r="15.6667"
                      stroke="#FDFDFD"
                      strokeWidth="0.666667"
                      strokeDasharray="1.33 1.33"
                    />
                    <defs>
                      <clipPath id="clip0_161_965">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>+40 123 456 789</div>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.6667"
                      stroke="#FDFDFD"
                      strokeWidth="0.666667"
                      strokeDasharray="1.33 1.33"
                    />
                    <path
                      d="M22.5938 10.375H9.40625C8.62928 10.375 8 11.0082 8 11.7812V20.2188C8 20.9964 8.63391 21.625 9.40625 21.625H22.5938C23.3642 21.625 24 20.9991 24 20.2188V11.7812C24 11.0096 23.3732 10.375 22.5938 10.375ZM22.3968 11.3125L16.9944 16.6865C16.7288 16.9521 16.3756 17.0983 16 17.0983C15.6244 17.0983 15.2712 16.9521 15.0047 16.6856L9.60319 11.3125H22.3968ZM8.9375 20.0279V11.9727L12.9887 16.0025L8.9375 20.0279ZM9.60378 20.6875L13.6534 16.6637L14.3427 17.3494C14.7854 17.7921 15.374 18.0358 16 18.0358C16.626 18.0358 17.2146 17.7921 17.6564 17.3503L18.3466 16.6637L22.3962 20.6875H9.60378ZM23.0625 20.0279L19.0113 16.0025L23.0625 11.9727V20.0279Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </div>
                <div>Info@rooteducation.group</div>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.6667"
                      stroke="#FDFDFD"
                      strokeWidth="0.666667"
                      strokeDasharray="1.33 1.33"
                    />
                    <g clipPath="url(#clip0_161_959)">
                      <path
                        d="M18.6711 18.5714C20.3737 15.8998 20.1597 16.2331 20.2087 16.1634C20.8286 15.2891 21.1562 14.2601 21.1562 13.1875C21.1562 10.3431 18.8481 8 16 8C13.1612 8 10.8438 10.3385 10.8438 13.1875C10.8438 14.2594 11.1783 15.3153 11.8184 16.2014L13.3288 18.5714C11.714 18.8196 8.96875 19.5591 8.96875 21.1875C8.96875 21.7811 9.35619 22.627 11.2019 23.2862C12.4907 23.7465 14.1947 24 16 24C19.3758 24 23.0312 23.0478 23.0312 21.1875C23.0312 19.5588 20.2893 18.8201 18.6711 18.5714ZM12.6015 15.6858C12.5964 15.6777 12.591 15.6698 12.5854 15.6621C12.0527 14.9292 11.7812 14.0607 11.7812 13.1875C11.7812 10.8432 13.6689 8.9375 16 8.9375C18.3262 8.9375 20.2188 10.844 20.2188 13.1875C20.2188 14.0621 19.9525 14.9012 19.4486 15.6147C19.4034 15.6743 19.639 15.3083 16 21.0184L12.6015 15.6858ZM16 23.0625C12.3127 23.0625 9.90625 21.9787 9.90625 21.1875C9.90625 20.6558 11.1428 19.7814 13.8828 19.4406L15.6047 22.1426C15.647 22.209 15.7054 22.2637 15.7745 22.3016C15.8436 22.3395 15.9212 22.3594 16 22.3594C16.0788 22.3594 16.1563 22.3395 16.2254 22.3016C16.2945 22.2637 16.3529 22.209 16.3953 22.1426L18.1172 19.4406C20.8572 19.7814 22.0938 20.6558 22.0938 21.1875C22.0938 21.9719 19.709 23.0625 16 23.0625Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M16 10.8438C14.7077 10.8438 13.6562 11.8952 13.6562 13.1875C13.6562 14.4798 14.7077 15.5312 16 15.5312C17.2923 15.5312 18.3438 14.4798 18.3438 13.1875C18.3438 11.8952 17.2923 10.8438 16 10.8438ZM16 14.5938C15.2246 14.5938 14.5938 13.9629 14.5938 13.1875C14.5938 12.4121 15.2246 11.7812 16 11.7812C16.7754 11.7812 17.4062 12.4121 17.4062 13.1875C17.4062 13.9629 16.7754 14.5938 16 14.5938Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_161_959">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  UK 12-116 Whitechapel Road 2nd Floor, UK London E1 1JE
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[25%] space-y-7 text-white">
            <span className="border-b-[1px] pb-1 text-xl">Company</span>
            <ul className="flex flex-col justify-between gap-6">
              {footerLinks.company.map((link) => (
                <li className="flex items-center" key={link.label}>
                  <IoMdArrowDropright className="text-2xl" />
                  <Link
                    className="duration-200 hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-[25%] space-y-7 text-white">
            <span className="border-b-[1px] pb-1 text-xl">Our Services</span>
            <ul className="flex flex-col justify-between gap-6">
              {footerLinks.our_services.map((link) => (
                <li className="flex items-center" key={link.label}>
                  <IoMdArrowDropright className="text-2xl" />
                  <Link
                    className="duration-200 hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-[25%] space-y-7 text-white">
            <span className="border-b-[1px] pb-1 text-xl">Study Countries</span>
            <ul className="flex flex-col justify-between gap-6">
              {footerLinks.study_countries.map((link) => (
                <li className="flex items-center" key={link.label}>
                  <IoMdArrowDropright className="text-2xl" />
                  <Link
                    className="duration-200 hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container">
          <hr className="mt-[40px]" />
          <div className="flex flex-col items-center justify-between gap-6 py-[30px] text-center text-sm text-white md:text-left xl:flex-row">
            <div className="basis-full lg:basis-1/3">
              © Copyright 2024 “Root Education” All Rights Reserved.
            </div>
            <div className="basis-full lg:basis-1/3">
              <ul className="flex items-center justify-center gap-8">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="duration-200 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-conditions"
                    className="duration-200 hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="duration-200 hover:underline" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="basis-full lg:basis-1/3">
              <div className="flex flex-col items-center justify-end gap-3 font-medium xl:flex-row xl:gap-10">
                Follow Us
                <span className="flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/hireandfire.eu"
                    target=" blank"
                  >
                    <FaFacebook className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/hireandfire.eu/"
                    target=" blank"
                  >
                    <FaInstagram className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
                  </Link>
                  <Link
                    href="https://twitter.com/hireandfireeu"
                    target=" blank"
                  >
                    <FaTwitter className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
                  </Link>
                  <Link href="https://telegram.org/" target=" blank">
                    <FaTelegramPlane className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

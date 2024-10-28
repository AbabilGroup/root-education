"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import TuitionFees from "./TuitionFees";
import LivingCosts from "./LivingCosts";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import { Root } from "@/types";

const TabsSection = ({ countryInfo }: { countryInfo: Root }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  console.log(countryInfo.jobopportunity[0].list);

  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="rounded-xl border p-8 shadow-lg">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-10 grid w-full grid-cols-4 gap-x-8">
              <TabsTrigger
                value="tab1"
                className={`px-4 py-5 text-lg font-medium ${
                  activeTab === "tab1"
                    ? "border border-b-4 border-primary border-b-primary text-primary"
                    : "border text-secondary"
                }`}
              >
                Why Study in Romania
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className={`px-4 py-5 text-lg font-medium ${
                  activeTab === "tab2"
                    ? "border border-b-4 border-primary border-b-primary text-primary"
                    : "border text-secondary"
                }`}
              >
                Cost of Study and Living
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                className={`px-4 py-5 text-lg font-medium ${
                  activeTab === "tab3"
                    ? "border border-b-4 border-primary border-b-primary text-primary"
                    : "border text-secondary"
                }`}
              >
                Job Opportunity
              </TabsTrigger>
              <TabsTrigger
                value="tab4"
                className={`px-4 py-5 text-lg font-medium ${
                  activeTab === "tab4"
                    ? "border border-b-4 border-primary border-b-primary text-primary"
                    : "border text-secondary"
                }`}
              >
                Scholarships
              </TabsTrigger>
            </TabsList>
            <TabsContent className="mt-14 space-y-4 pt-5" value="tab1">
              <p className="text-sm font-medium">
                {countryInfo.whystudy[0].short_breaf}
              </p>
              <ol className="list-decimal space-y-3 pl-4 text-sm font-medium">
                {countryInfo.whystudy[0].whystudylist.map((list) => (
                  <li key={list.title}>
                    <strong>{list.title}:</strong> {list.content}
                  </li>
                ))}
              </ol>
              <p className="text-sm font-medium">
                These factors make Romania an appealing destination for
                international students seeking a well-rounded education and life
                experience.
              </p>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="pt-10">
                <p className="text-sm font-medium">
                  {countryInfo.costofliving[0].short_breaf}
                </p>
                <TuitionFees tuitionFees={countryInfo.costofliving[0].fees} />
                <LivingCosts livingCosts={countryInfo.costofliving[0].list} />
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="pt-10">
                <p className="text-center text-sm font-medium">
                  {countryInfo.jobopportunity[0].short_breaf}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
                  {countryInfo.jobopportunity[0].list.map((jobopportunity) => (
                    <FadeInLeftWithSlowBounce
                      className="min-h-[240px] max-w-[450px] space-y-3 rounded-lg border border-l-8 border-r-8 border-l-primary border-r-primary p-5 shadow-md"
                      key={jobopportunity.title}
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M47.9791 5.92805C44.8151 3.70805 40.4471 4.48005 38.2311 7.64805L35.9671 10.8801C40.6271 12.2241 44.6391 15.0961 47.4271 18.9201L49.6991 15.6761C51.9151 12.5081 51.1471 8.14405 47.9791 5.92805ZM12.5711 18.9241C15.3591 15.1001 19.3711 12.2241 24.0311 10.8801L21.7671 7.64805C19.5511 4.48005 15.1871 3.70805 12.0191 5.92805C8.85111 8.14405 8.08311 12.5081 10.2991 15.6761L12.5711 18.9241ZM29.9991 20.1801C30.3311 20.1801 30.5991 19.9121 30.5991 19.5801V17.6401C30.5991 17.3081 30.3311 17.0401 29.9991 17.0401C29.6671 17.0401 29.3991 17.3081 29.3991 17.6401V19.5801C29.3991 19.9121 29.6671 20.1801 29.9991 20.1801ZM23.4671 21.4921C23.5499 21.6234 23.6804 21.7175 23.8311 21.7548C23.9818 21.792 24.141 21.7695 24.2755 21.6919C24.41 21.6144 24.5092 21.4878 24.5524 21.3386C24.5955 21.1895 24.5793 21.0295 24.5071 20.8921L23.5351 19.2121C23.4543 19.0767 23.3234 18.9785 23.1708 18.9388C23.0182 18.899 22.8561 18.921 22.7195 18.9998C22.583 19.0785 22.4829 19.2079 22.4409 19.3599C22.3989 19.5119 22.4184 19.6743 22.4951 19.8121L23.4671 21.4921ZM17.3831 24.3241C17.2191 24.6121 17.3151 24.9761 17.6031 25.1441L19.2831 26.1161C19.421 26.1955 19.5849 26.2169 19.7386 26.1757C19.8924 26.1344 20.0235 26.0339 20.1031 25.8961C20.2671 25.6081 20.1711 25.2441 19.8831 25.0761L18.2031 24.1041C17.9151 23.9361 17.5511 24.0361 17.3831 24.3241ZM18.5751 31.6041C18.5751 31.2721 18.3071 31.0041 17.9751 31.0041H16.0351C15.7031 31.0041 15.4351 31.2721 15.4351 31.6041C15.4351 31.9361 15.7031 32.2041 16.0351 32.2041H17.9751C18.3071 32.2041 18.5751 31.9361 18.5751 31.6041ZM19.2831 37.1001L17.6031 38.0721C17.4677 38.1529 17.3696 38.2837 17.3298 38.4363C17.2901 38.5889 17.312 38.751 17.3908 38.8876C17.4696 39.0242 17.599 39.1243 17.751 39.1663C17.903 39.2083 18.0654 39.1888 18.2031 39.1121L19.8831 38.1401C20.0185 38.0592 20.1167 37.9284 20.1564 37.7758C20.1961 37.6232 20.1742 37.4611 20.0954 37.3245C20.0166 37.1879 19.8872 37.0878 19.7353 37.0458C19.5833 37.0038 19.4209 37.0233 19.2831 37.1001ZM22.7151 44.2201C22.853 44.2995 23.0169 44.3209 23.1706 44.2797C23.3244 44.2384 23.4555 44.1379 23.5351 44.0001L24.5071 42.3201C24.6711 42.0321 24.5751 41.6681 24.2871 41.5001C23.9991 41.3361 23.6351 41.4321 23.4671 41.7201L22.4951 43.4001C22.3311 43.6881 22.4271 44.0521 22.7151 44.2201ZM29.9991 43.0321C29.6671 43.0321 29.3991 43.3001 29.3991 43.6321V45.5721C29.3991 45.9041 29.6671 46.1721 29.9991 46.1721C30.3311 46.1721 30.5991 45.9041 30.5991 45.5721V43.6321C30.5991 43.3001 30.3311 43.0321 29.9991 43.0321ZM36.5311 41.7201C36.4503 41.5847 36.3194 41.4865 36.1668 41.4468C36.0142 41.4071 35.8521 41.429 35.7155 41.5078C35.579 41.5866 35.4789 41.7159 35.4369 41.8679C35.3949 42.0199 35.4144 42.1823 35.4911 42.3201L36.4591 44.0001C36.5419 44.1314 36.6724 44.2255 36.8231 44.2628C36.9738 44.3 37.133 44.2775 37.2675 44.2C37.402 44.1224 37.5012 43.9958 37.5444 43.8466C37.5875 43.6975 37.5713 43.5375 37.4991 43.4001L36.5311 41.7201ZM40.1151 38.1361L41.7951 39.1081C41.933 39.1875 42.0969 39.2089 42.2506 39.1677C42.4044 39.1264 42.5355 39.0259 42.6151 38.8881C42.7791 38.6001 42.6831 38.2361 42.3951 38.0681L40.7151 37.0961C40.4271 36.9281 40.0631 37.0281 39.8951 37.3161C39.7311 37.6041 39.8271 37.9681 40.1151 38.1361ZM41.4231 31.6041C41.4231 31.9361 41.6911 32.2041 42.0231 32.2041H43.9631C44.2951 32.2041 44.5631 31.9361 44.5631 31.6041C44.5631 31.2721 44.2951 31.0041 43.9631 31.0041H42.0231C41.6911 31.0041 41.4231 31.2721 41.4231 31.6041ZM40.4151 26.1921C40.5151 26.1921 40.6191 26.1681 40.7151 26.1121L42.3951 25.1401C42.5305 25.0592 42.6287 24.9284 42.6684 24.7758C42.7081 24.6232 42.6862 24.4611 42.6074 24.3245C42.5286 24.1879 42.3992 24.0878 42.2473 24.0458C42.0953 24.0038 41.9329 24.0233 41.7951 24.1001L40.1151 25.0721C40.0008 25.1382 39.9116 25.2402 39.8611 25.3622C39.8106 25.4842 39.8018 25.6195 39.836 25.747C39.8701 25.8745 39.9454 25.9873 40.0501 26.0677C40.1548 26.1482 40.2831 26.1919 40.4151 26.1921ZM35.7111 21.7121C35.849 21.7915 36.0129 21.8129 36.1666 21.7717C36.3204 21.7304 36.4515 21.6299 36.5311 21.4921L37.4991 19.8121C37.5759 19.6743 37.5953 19.5119 37.5534 19.3599C37.5114 19.2079 37.4113 19.0785 37.2747 18.9998C37.1381 18.921 36.976 18.899 36.8234 18.9388C36.6708 18.9785 36.5399 19.0767 36.4591 19.2121L35.4911 20.8921C35.3271 21.1801 35.4231 21.5481 35.7111 21.7121ZM29.9991 33.3241C30.2471 33.3241 30.4831 33.2681 30.6991 33.1721C31.0991 33.3801 31.4831 33.6161 31.8751 33.8401C33.0591 34.5241 35.4391 35.8961 36.6231 36.5801L37.8111 37.2641C38.3591 37.2281 38.9031 37.2041 39.4991 37.0841C39.3031 36.5081 39.0551 36.0241 38.8111 35.5321L37.6231 34.8481C36.4391 34.1641 34.0591 32.7921 32.8751 32.1081C32.4871 31.8761 32.0871 31.6641 31.7031 31.4201C31.7031 31.3881 31.6991 31.3561 31.6951 31.3241C32.0191 31.1321 32.3511 30.9441 32.6751 30.7521L35.0471 29.3801L37.4191 28.0081L38.6071 27.3241C38.9111 26.9361 39.2191 26.5561 39.4951 26.1201C38.9791 26.1401 38.4951 26.2161 38.0071 26.2841L36.8191 26.9681L34.4471 28.3401L32.0751 29.7121C31.7471 29.9001 31.4191 30.0921 31.0871 30.2761C30.7911 30.0321 30.4151 29.8801 29.9991 29.8801C29.5429 29.8801 29.1054 30.0613 28.7829 30.3838C28.4603 30.7064 28.2791 31.1439 28.2791 31.6001C28.2791 32.0562 28.4603 32.4937 28.7829 32.8163C29.1054 33.1388 29.5429 33.3201 29.9991 33.3201V33.3241Z"
                            fill="#F37329"
                          />
                          <path
                            d="M26.9977 10.4961H28.9977V12.0641C18.6697 12.5841 10.4297 21.1521 10.4297 31.6041C10.4297 38.0921 13.6057 43.8481 18.4857 47.4121C18.1657 48.0121 17.8897 48.6321 17.6377 49.2641C17.3417 50.0081 17.0817 50.7681 16.8537 51.5441C16.5337 52.6721 16.2697 53.8321 16.2017 55.1001C16.1857 55.2801 16.4017 55.4041 16.5457 55.3001C18.2737 54.1401 19.6377 52.7121 20.8697 51.1361C21.0897 50.8601 21.3017 50.5841 21.5097 50.3001C21.7097 50.0361 21.8937 49.7681 22.0697 49.4881C24.4937 50.5681 27.1737 51.1721 29.9977 51.1721C32.8217 51.1721 35.5057 50.5641 37.9337 49.4841C38.2977 50.0561 38.6937 50.6081 39.1177 51.1401C39.6097 51.7681 40.1417 52.3681 40.6937 52.9561C41.5097 53.7961 42.3857 54.6041 43.4497 55.3001C43.5937 55.4041 43.8097 55.2761 43.7937 55.1001C43.6537 53.0241 43.0977 51.1281 42.3537 49.2681C42.2257 48.9441 42.0897 48.6241 41.9497 48.3001C41.8217 47.9921 41.6777 47.6961 41.5217 47.4041C46.3937 43.8401 49.5657 38.0881 49.5657 31.6041C49.5657 21.1481 41.3257 12.5841 30.9977 12.0641V10.4961H32.9977C33.2629 10.4961 33.5173 10.3907 33.7048 10.2032C33.8923 10.0157 33.9977 9.76131 33.9977 9.49609C33.9977 9.23088 33.8923 8.97652 33.7048 8.78899C33.5173 8.60145 33.2629 8.49609 32.9977 8.49609H26.9977C26.7325 8.49609 26.4781 8.60145 26.2906 8.78899C26.103 8.97652 25.9977 9.23088 25.9977 9.49609C25.9977 9.76131 26.103 10.0157 26.2906 10.2032C26.4781 10.3907 26.7325 10.4961 26.9977 10.4961ZM45.5657 31.6041C45.5657 36.7801 43.0217 41.3721 39.1257 44.2041C38.9577 44.3281 38.7857 44.4481 38.6137 44.5641L38.3857 44.7081C38.2177 44.8161 38.0537 44.9201 37.8817 45.0201C37.8137 45.0601 37.7417 45.1001 37.6737 45.1401C37.4777 45.2521 37.2817 45.3601 37.0817 45.4601C37.0377 45.4841 36.9937 45.5041 36.9497 45.5281C36.6977 45.6521 36.4417 45.7721 36.1817 45.8841C34.2857 46.7081 32.1977 47.1681 30.0017 47.1681C27.8057 47.1681 25.7177 46.7081 23.8257 45.8881C23.5577 45.7721 23.2937 45.6481 23.0337 45.5201C23.0097 45.5081 22.9897 45.4961 22.9657 45.4841C22.7417 45.3721 22.5217 45.2481 22.3017 45.1241C22.2497 45.0961 22.1977 45.0641 22.1497 45.0361C21.9537 44.9241 21.7657 44.8041 21.5777 44.6841L21.4097 44.5761C21.2257 44.4561 21.0457 44.3281 20.8697 44.1961C16.9777 41.3641 14.4417 36.7761 14.4417 31.6041C14.4417 23.0201 21.4257 16.0401 30.0057 16.0401C38.5857 16.0401 45.5737 23.0241 45.5737 31.6041H45.5657Z"
                            fill="#F37329"
                          />
                        </svg>
                      </div>
                      <h5 className="text-center text-xl font-medium">
                        {jobopportunity.title}
                      </h5>
                      <p className="text-center text-sm font-medium">
                        {jobopportunity.content}
                      </p>
                    </FadeInLeftWithSlowBounce>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tab4">
              <div className="pt-10">
                <p className="text-center text-sm font-medium">
                  {countryInfo.scholarship[0].short_breaf}
                </p>

                <div className="mt-10">
                  <Table className="border text-center">
                    <TableHeader className="bg-primary text-center text-lg text-white">
                      <TableRow className="py-5">
                        <TableHead className="border py-5 text-center">
                          Scholarship Name
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Eligibility Criteria
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Coverage
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Application Deadline
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Application Process
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {countryInfo.scholarship[0].scholarshiplist.map(
                        (list) => (
                          <TableRow
                            className="text-sm font-medium"
                            key={list.name}
                          >
                            <TableCell className="border">
                              {list.name}
                            </TableCell>
                            <TableCell className="border">
                              {list.criteria}
                            </TableCell>
                            <TableCell className="border">
                              {list.coverage}
                            </TableCell>
                            <TableCell className="border">
                              {list.deadline}
                            </TableCell>
                            <TableCell className="border">
                              {list.process}
                            </TableCell>
                          </TableRow>
                        ),
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

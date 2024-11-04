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
import { Root } from "@/types/country";
import Image from "next/image";
import { apiBaseUrl, port } from "@/secrets";

const TabsSection = ({ countryInfo }: { countryInfo: Root }) => {
  const [activeTab, setActiveTab] = useState("tab1");

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
                        <Image
                          src={`${apiBaseUrl}:${port}${jobopportunity.icon}`}
                          height={60}
                          width={60}
                          alt={jobopportunity.title}
                        />
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

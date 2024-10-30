"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Root } from "@/types/university";

const TabsSection = ({ universityInfo }: { universityInfo: Root }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="rounded-xl border p-8 shadow-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-10 grid w-full grid-cols-4 gap-x-8">
              <TabsTrigger
                value="tab1"
                className={`border-2 border-primary px-4 py-5 text-lg font-medium ${
                  activeTab === "tab1"
                    ? "bg-primary text-white"
                    : "text-primary"
                }`}
              >
                About University
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className={`border-2 border-primary px-4 py-5 text-lg font-medium ${
                  activeTab === "tab2"
                    ? "bg-primary text-white"
                    : "text-primary"
                }`}
              >
                University Programs
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                className={`border-2 border-primary px-4 py-5 text-lg font-medium ${
                  activeTab === "tab3"
                    ? "bg-primary text-white"
                    : "text-primary"
                }`}
              >
                Scholarship
              </TabsTrigger>
              <TabsTrigger
                value="tab4"
                className={`border-2 border-primary px-4 py-5 text-lg font-medium ${
                  activeTab === "tab4"
                    ? "bg-primary text-white"
                    : "text-primary"
                }`}
              >
                Application Guide
              </TabsTrigger>
            </TabsList>
            <TabsContent className="mt-14 space-y-4 pt-5" value="tab1">
              {universityInfo.about_university.content.map((item) => (
                <div className="space-y-3" key={item.id}>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-sm font-medium">{item.content}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="tab2">
              <div className="flex justify-center divide-x-2 divide-primary pt-8">
                {universityInfo.programs_offered.map((program) => (
                  <div className="px-10" key={program.id}>
                    <h4 className="mb-6 text-xl font-bold">
                      {program.program_type}
                    </h4>
                    <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                      {program.program_names.map((programName) => (
                        <li key={programName.id}>{programName.program_name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="pt-8">
                <p className="mb-6 text-sm font-medium">
                  Here is a detailed scholarship table for Spiru Haret
                  University in Romania, listing available scholarships along
                  with their amounts and providers:
                </p>
                <div>
                  <Table className="border text-center">
                    <TableHeader className="bg-primary text-center text-lg text-white">
                      <TableRow className="py-5">
                        <TableHead className="border py-5 text-center">
                          Scholarship Name
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Amount
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Eligibility Criteria
                        </TableHead>
                        <TableHead className="border py-5 text-center">
                          Provider
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {universityInfo.scholarship_offered?.map(
                        (scholarship) => (
                          <TableRow
                            className="text-sm font-medium"
                            key={scholarship.id}
                          >
                            <TableCell className="border">
                              {scholarship.name}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.amount}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.eligibility}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.provider}
                            </TableCell>
                          </TableRow>
                        ),
                      )}
                    </TableBody>
                  </Table>
                </div>
                {/* <p className="mb-5 mt-10 text-xl font-medium">Notes:</p>
                <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                  <li>
                    Erasmus+ Mobility Scholarships : For short-term exchanges,
                    amount varies by destination.
                  </li>
                  <li>
                    Erasmus+ Mobility Scholarships : For short-term exchanges,
                    amount varies by destination.
                  </li>
                  <li>
                    Erasmus+ Mobility Scholarships : For short-term exchanges,
                    amount varies by destination.
                  </li>
                  <li>
                    Erasmus+ Mobility Scholarships : For short-term exchanges,
                    amount varies by destination.
                  </li>
                </ul>
                <p className="mt-5 text-sm font-medium">
                  So the more information contact us
                </p> */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

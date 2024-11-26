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
import { University } from "@/types/university";
import InfoAccordion from "../../countries/country_details/InfoAccordion";

const TabsSection = ({ universityInfo }: { universityInfo: University }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <section className="hidden py-[50px] lg:block">
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
                {universityInfo.about_university.map((item) => (
                  <div className="space-y-3" key={item.title}>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-sm font-medium">{item.description}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="tab2">
                <div className="flex justify-center divide-x-2 divide-primary pt-8">
                  <div className="px-10">
                    <h4 className="mb-6 text-xl font-bold">
                      Undergraduate Programs
                    </h4>
                    <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                      {universityInfo.programs.undergraduate_programs.map(
                        (programName) => (
                          <li key={programName.name}>{programName.name}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="px-10">
                    <h4 className="mb-6 text-xl font-bold">
                      Postgraduate Programs
                    </h4>
                    <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                      {universityInfo.programs.postgraduate_programs.map(
                        (programName) => (
                          <li key={programName.name}>{programName.name}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="px-10">
                    <h4 className="mb-6 text-xl font-bold">
                      Doctoral Programs
                    </h4>
                    <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                      {universityInfo.programs.doctoral_programs.map(
                        (programName) => (
                          <li key={programName.name}>{programName.name}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tab3">
                <div className="pt-8">
                  <p className="mb-6 text-sm font-medium">
                    {universityInfo.scholarship.short_description}
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
                        {universityInfo.scholarship.table.map((scholarship) => (
                          <TableRow
                            className="text-sm font-medium"
                            key={scholarship.scholarship_name}
                          >
                            <TableCell className="border">
                              {scholarship.scholarship_name}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.amount}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.eligibility_criteria}
                            </TableCell>
                            <TableCell className="border">
                              {scholarship.provider}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="mb-5 mt-10 text-xl font-medium">Notes:</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm font-medium">
                    {universityInfo.scholarship.notes.map((note) => (
                      <li key={note.title}>{note.title}</li>
                    ))}
                  </ul>
                  {/* <p className="mt-5 text-sm font-medium">
                  So the more information contact us
                </p> */}
                </div>
              </TabsContent>
              <TabsContent value="tab4">
                <div className="pt-8">
                  <p className="mb-6 text-sm font-medium">
                    {universityInfo.application_guide.short_description}
                  </p>
                  <ol className="list-decimal space-y-1 pl-6 text-sm">
                    {universityInfo.application_guide.guide_list.map(
                      (guide) => (
                        <li key={guide.title}>
                          {" "}
                          <span className="font-bold">{guide.title}:</span>{" "}
                          {guide.description}
                        </li>
                      ),
                    )}
                  </ol>

                  <p className="mt-5 text-sm font-medium">
                    {universityInfo.application_guide.bottom_description}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-[50px] lg:hidden">
        <div className="container">
          <div className="rounded-lg border px-8 py-6 shadow-md">
            <InfoAccordion
              title="About University"
              content={
                <>
                  {universityInfo.about_university.map((item) => (
                    <div className="space-y-3" key={item.title}>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-sm font-medium">{item.description}</p>
                    </div>
                  ))}
                </>
              }
            />
            <InfoAccordion
              title="University Programs"
              content={
                <>
                  <div className="flex flex-col justify-center divide-y-2 divide-primary">
                    <div className="px-10 py-10">
                      <h4 className="mb-6 text-xl font-bold">
                        Undergraduate Programs
                      </h4>
                      <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                        {universityInfo.programs.undergraduate_programs.map(
                          (programName) => (
                            <li key={programName.name}>{programName.name}</li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div className="px-10 py-10">
                      <h4 className="mb-6 text-xl font-bold">
                        Postgraduate Programs
                      </h4>
                      <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                        {universityInfo.programs.postgraduate_programs.map(
                          (programName) => (
                            <li key={programName.name}>{programName.name}</li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div className="px-10 py-10">
                      <h4 className="mb-6 text-xl font-bold">
                        Doctoral Programs
                      </h4>
                      <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                        {universityInfo.programs.doctoral_programs.map(
                          (programName) => (
                            <li key={programName.name}>{programName.name}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </>
              }
            />
            <InfoAccordion
              title="Scholarship"
              content={
                <>
                  <div className="pt-8">
                    <p className="mb-6 text-sm font-medium">
                      {universityInfo.scholarship.short_description}
                    </p>
                    <div className="space-y-10">
                      {universityInfo.scholarship.table.map((scholarship) => (
                        <Table
                          className="border text-center"
                          key={scholarship.scholarship_name}
                        >
                          <TableBody>
                            <TableRow className="text-sm font-medium">
                              <TableCell className="border bg-primary text-white">
                                Scholarship Name
                              </TableCell>
                              <TableCell className="border">
                                {scholarship.scholarship_name}
                              </TableCell>
                            </TableRow>
                            <TableRow className="text-sm font-medium">
                              <TableCell className="border bg-primary text-white">
                                Amount
                              </TableCell>
                              <TableCell className="border">
                                {scholarship.amount}
                              </TableCell>
                            </TableRow>
                            <TableRow className="text-sm font-medium">
                              <TableCell className="border bg-primary text-white">
                                Eligibility Criteria
                              </TableCell>
                              <TableCell className="border">
                                {scholarship.eligibility_criteria}
                              </TableCell>
                            </TableRow>
                            <TableRow className="text-sm font-medium">
                              <TableCell className="border bg-primary text-white">
                                Provider
                              </TableCell>
                              <TableCell className="border">
                                {scholarship.provider}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      ))}
                    </div>
                    <p className="mb-5 mt-10 text-xl font-medium">Notes:</p>
                    <ul className="list-disc space-y-5 pl-5 text-sm font-medium">
                      {universityInfo.scholarship.notes.map((note) => (
                        <li key={note.title}>{note.title}</li>
                      ))}
                    </ul>
                    {/* <p className="mt-5 text-sm font-medium">
                  So the more information contact us
                </p> */}
                  </div>
                </>
              }
            />
            <InfoAccordion
              title="Application Guide"
              content={
                <>
                  <div className="pt-8">
                    <p className="mb-6 text-sm font-medium">
                      {universityInfo.application_guide.short_description}
                    </p>
                    <ol className="list-decimal space-y-1 pl-6 text-sm">
                      {universityInfo.application_guide.guide_list.map(
                        (guide) => (
                          <li key={guide.title}>
                            {" "}
                            <span className="font-bold">
                              {guide.title}:
                            </span>{" "}
                            {guide.description}
                          </li>
                        ),
                      )}
                    </ol>

                    <p className="mt-5 text-sm font-medium">
                      {universityInfo.application_guide.bottom_description}
                    </p>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabsSection;

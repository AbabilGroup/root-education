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

const scholarshipInfo = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const TabsSection = () => {
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
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Introduction</h4>
                <p className="text-sm font-medium">
                  Founded in 1991, Spiru Haret University (SHU) has emerged as
                  one of Romania&apos;s most respected private educational
                  institutions. The university was named after Spiru Haret, a
                  renowned Romanian mathematician, educator, and reformer whose
                  contributions to education have left an indelible mark on
                  Romanian society. The institution embodies his spirit of
                  innovation, reform, and a relentless pursuit of knowledge.
                  Over the past three decades, SHU has expanded its influence,
                  becoming a cornerstone of higher education in Romania and
                  beyond.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="flex justify-center divide-x-2 divide-primary pt-8">
                <div className="px-10">
                  <h4 className="mb-6 text-xl font-bold">
                    Undergraduate Programs
                  </h4>
                  <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                  </ul>
                </div>
                <div className="px-10">
                  <h4 className="mb-6 text-xl font-bold">
                    Undergraduate Programs
                  </h4>
                  <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                  </ul>
                </div>
                <div className="px-10">
                  <h4 className="mb-6 text-xl font-bold">
                    Undergraduate Programs
                  </h4>
                  <ul className="list-disc space-y-3 pl-5 text-sm font-medium">
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                  </ul>
                </div>
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
                      {scholarshipInfo.map((info) => (
                        <TableRow
                          className="text-sm font-medium"
                          key={info.invoice}
                        >
                          <TableCell className="border">
                            {info.invoice}
                          </TableCell>
                          <TableCell className="border">
                            {info.paymentStatus}
                          </TableCell>
                          <TableCell className="border">
                            {info.paymentMethod}
                          </TableCell>
                          <TableCell className="border">
                            {info.totalAmount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="mb-5 mt-10 text-xl font-medium">Notes:</p>
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
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

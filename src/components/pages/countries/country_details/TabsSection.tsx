"use client";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import TuitionFees from "./TuitionFees";
import LivingCosts from "./LivingCosts";

const TabsSection = () => {
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
                Studying in Romania offers a unique blend of high-quality
                education, affordable tuition fees, and a rich cultural
                experience. Here are some key reasons to consider studying in
                Romania:
              </p>
              <ol className="list-decimal space-y-3 pl-4 text-sm font-medium">
                <li>
                  <strong>High-Quality Education:</strong> Romanian universities
                  are known for their strong academic programs, particularly in
                  fields like medicine, engineering, and computer science. Many
                  universities offer programs in English, French, and German,
                  making it accessible to international students.
                </li>
                <li>
                  <strong>Affordable Tuition and Living Costs:</strong> Compared
                  to other European countries, Romania offers lower tuition fees
                  and living costs, making it an attractive destination for
                  students looking for quality education on a budget.
                </li>
                <li>
                  <strong>Cultural Diversity:</strong> Romania is a melting pot
                  of cultures, with a rich history and diverse traditions.
                  Students can experience a unique blend of Eastern and Western
                  European influences, which is reflected in the country&apos;s
                  architecture, cuisine, and lifestyle.
                </li>
                <li>
                  <strong>Recognition of Degrees:</strong> Romanian degrees are
                  recognized across the European Union and beyond, allowing
                  graduates to pursue careers or further studies
                  internationally.
                </li>
                <li>
                  <strong>Vibrant Student Life:</strong> Romania has a lively
                  student community with numerous extracurricular activities,
                  clubs, and events. Cities like Bucharest, Cluj-Napoca, and
                  Timișoara offer vibrant nightlife, cultural festivals, and
                  opportunities to explore the arts.
                </li>
                <li>
                  <strong>Historical and Natural Attractions:</strong> Romania
                  is known for its stunning landscapes, including the Carpathian
                  Mountains, the Danube River, and the Black Sea coast. Students
                  can explore historical sites like castles, monasteries, and
                  ancient towns, offering a rich experience beyond academics.
                </li>
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
                  The cost of studying and living in Romania is relatively
                  affordable compared to other European countries, making it an
                  attractive option for international students. Here’s a
                  breakdown of the costs:
                </p>
                <TuitionFees />
                <LivingCosts />
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="pt-10">
                <p className="text-sm font-medium">
                  The cost of studying and living in Romania is relatively
                  affordable compared to other European countries, making it an
                  attractive option for international students. Here’s a
                  breakdown of the costs:
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

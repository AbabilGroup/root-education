import PageBanner from "@/components/common/PageBanner";
import AdmissionForm from "@/components/pages/countryDetails/AdmissionForm";
import { formatCountryRoute } from "@/lib/utils";
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

type TCountryDetailsPageProps = {
  params: { countryName: string };
};

export async function generateMetadata({ params }: TCountryDetailsPageProps) {
  const { countryName } = params;

  return {
    title: `Root Education | ${formatCountryRoute(countryName)}`,
  };
}

const CountryDetailsPage = ({ params }: TCountryDetailsPageProps) => {
  return (
    <main>
      <PageBanner PageName={formatCountryRoute(params.countryName)} />

      <section className="pb-[50px] pt-[100px]">
        <div className="container flex gap-x-20">
          <div className="basis-[60%] space-y-4">
            <h2 className="text-3xl font-semibold">
              Study in Romania For
              <br /> Bangladesh Students
            </h2>
            <p className="text-sm font-medium">
              Romania is an increasingly popular destination for Bangladeshi
              students seeking a high-quality European education at an
              affordable cost. Renowned for its strong academic tradition,
              Romania offers a wide range of programs in English across various
              fields, including engineering, medicine, business, and the arts.
              Universities in Romania are recognized for their rigorous
              curricula, modern facilities, and opportunities for research and
              innovation.
            </p>
            <p className="text-sm font-medium">
              For Bangladeshi students, Romania provides a welcoming environment
              with a rich cultural heritage, vibrant student life, and a lower
              cost of living compared to other European countries. The country’s
              universities are known for their international student support
              services, making the transition to a new academic and social
              environment smoother. Scholarships are also available to help
              offset tuition fees and living expenses, making studying in
              Romania even more accessible.
            </p>
            <p className="text-sm font-medium">
              For Bangladeshi students, Romania provides a welcoming environment
              with a rich cultural heritage, vibrant student life, and a lower
              cost of living compared to other European countries. The country’s
              universities are known for their international student support
              services, making the transition to a new academic and social
              environment smoother. Scholarships are also available to help
              offset tuition fees and living expenses, making studying in
              Romania even more accessible.
            </p>
          </div>
          <div className="basis-[40%] rounded-xl border p-10 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Application for Admission
            </h2>
            <AdmissionForm />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="rounded-xl border p-8 shadow-lg">
            <Tabs defaultValue="Why Study in Romania">
              <TabsList className="grid w-full grid-cols-4 gap-x-8">
                <TabsTrigger className="border" value="Why Study in Romania">
                  Why Study in Romania
                </TabsTrigger>
                <TabsTrigger
                  className="border"
                  value="Cost of Study and Living"
                >
                  Cost of Study and Living
                </TabsTrigger>
                <TabsTrigger className="border" value="Job Opportunity">
                  Job Opportunity
                </TabsTrigger>
                <TabsTrigger className="border" value="Scholarships">
                  Scholarships
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className="space-y-4 pt-5"
                value="Why Study in Romania"
              >
                <p className="text-sm font-medium">
                  Studying in Romania offers a unique blend of high-quality
                  education, affordable tuition fees, and a rich cultural
                  experience. Here are some key reasons to consider studying in
                  Romania:
                </p>
                <ol className="list-decimal space-y-3 pl-4 text-sm font-medium">
                  <li>
                    <strong>High-Quality Education:</strong> Romanian
                    universities are known for their strong academic programs,
                    particularly in fields like medicine, engineering, and
                    computer science. Many universities offer programs in
                    English, French, and German, making it accessible to
                    international students.
                  </li>
                  <li>
                    <strong>Affordable Tuition and Living Costs:</strong>{" "}
                    Compared to other European countries, Romania offers lower
                    tuition fees and living costs, making it an attractive
                    destination for students looking for quality education on a
                    budget.
                  </li>
                  <li>
                    <strong>Cultural Diversity:</strong> Romania is a melting
                    pot of cultures, with a rich history and diverse traditions.
                    Students can experience a unique blend of Eastern and
                    Western European influences, which is reflected in the
                    country&apos;s architecture, cuisine, and lifestyle.
                  </li>
                  <li>
                    <strong>Recognition of Degrees:</strong> Romanian degrees
                    are recognized across the European Union and beyond,
                    allowing graduates to pursue careers or further studies
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
                    is known for its stunning landscapes, including the
                    Carpathian Mountains, the Danube River, and the Black Sea
                    coast. Students can explore historical sites like castles,
                    monasteries, and ancient towns, offering a rich experience
                    beyond academics.
                  </li>
                </ol>
                <p className="text-sm font-medium">
                  These factors make Romania an appealing destination for
                  international students seeking a well-rounded education and
                  life experience.
                </p>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be
                      logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryDetailsPage;

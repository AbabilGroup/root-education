import { Root } from "@/types/country";
import AdmissionRequirements from "./AdmissionRequirements";
import ApplicationProcedures from "./ApplicationProcedures";
import InfoAccordion from "./InfoAccordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AccordionSection = ({ countryInfo }: { countryInfo: Root }) => {
  return (
    <section>
      <div className="container">
        <div className="rounded-lg border px-8 py-6 shadow-md">
          <InfoAccordion
            title="Application Procedures"
            content={
              <>
                <p>{countryInfo.application_procedures[0].short_breaf}</p>
                <ApplicationProcedures countryInfo={countryInfo} />
              </>
            }
          />
          <InfoAccordion
            title="Admission Requirements"
            content={
              <>
                <p>{countryInfo.admission_requirments[0].short_breaf}</p>
                <AdmissionRequirements countryInfo={countryInfo} />
              </>
            }
          />
          <InfoAccordion
            title="Visa Procedures & Fees"
            content={
              <>
                <p>
                  Admission requirements for international students wishing to
                  study in Romania can vary depending on the level of study
                  (undergraduate, master&apos;s, or Ph.D.), the university, and
                  the chosen program. However, the general admission
                  requirements typically include the following:
                </p>
                <div className="my-10">
                  <Table className="border">
                    <TableHeader className="bg-[#F6F6F6] text-lg text-secondary">
                      <TableRow className="py-5">
                        <TableHead className="border px-5 py-5">
                          Category
                        </TableHead>
                        <TableHead className="border px-5 py-5">
                          Details
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {countryInfo.visaprocedures[0].list.map((info) => (
                        <TableRow
                          className="text-sm font-medium"
                          key={info.title}
                        >
                          <TableCell className="border px-5">
                            {info.title}
                          </TableCell>
                          <TableCell className="border px-5">
                            {info.content}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p>
                  This is just basic information. To know the most updated
                  information students are encouraged to contact one of our
                  consultants.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;

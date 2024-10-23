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

const AccordionSection = () => {
  return (
    <section>
      <div className="container">
        <div className="rounded-lg border px-8 py-6 shadow-md">
          <InfoAccordion
            title="Application Procedures"
            content={
              <>
                <p>
                  Applying to study in Romania involves several key steps,
                  including choosing a program, preparing documents, and meeting
                  specific requirements. Here&apos;s a general overview of the
                  application process:
                </p>
                <ApplicationProcedures />
              </>
            }
          />
          <InfoAccordion
            title="Admission Requirements"
            content={
              <>
                <p>
                  Admission requirements for international students wishing to
                  study in Romania can vary depending on the level of study
                  (undergraduate, master&apos;s, or Ph.D.), the university, and
                  the chosen program. However, the general admission
                  requirements typically include the following:
                </p>
                <AdmissionRequirements />
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
                      {scholarshipInfo.map((info) => (
                        <TableRow
                          className="text-sm font-medium"
                          key={info.invoice}
                        >
                          <TableCell className="border px-5">
                            {info.invoice}
                          </TableCell>
                          <TableCell className="border px-5">
                            {info.paymentStatus}
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

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step6 = () => {
  const [scholarshipFields, setScholarshipFields] = useState([
    {
      id: 1,
      namePlaceholder: "Name 1",
      criteriaPlaceholder: "Criteria 1",
      coveragePlaceholder: "Coverage 1",
      deadlinePlaceholder: "Deadline 1",
      processPlaceholder: "Process 1",
    },
  ]);
  const addScholarshipField = () => {
    setScholarshipFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        namePlaceholder: `Title ${prev.length + 1}`,
        criteriaPlaceholder: `Content ${prev.length + 1}`,
        coveragePlaceholder: `Deadline ${prev.length + 1}`,
        deadlinePlaceholder: `Process ${prev.length + 1}`,
        processPlaceholder: `Criteria ${prev.length + 1}`,
      },
    ]);
  };

  const removeScholarshipField = (id: number) => {
    setScholarshipFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step6">
      <form className="w-1/2 space-y-5" action="">
        {/* Why study  */}
        <div>
          <Label>Scholarships</Label>

          <Textarea className="mb-2" placeholder="Short brief" required />

          {scholarshipFields.map((field, index) => (
            <div key={field.id} className="my-2 mb-10 space-y-2">
              <div className="flex items-center space-x-2">
                <Input type="text" placeholder={field.namePlaceholder} />
                {field.id === scholarshipFields.length && (
                  <button
                    type="button"
                    onClick={addScholarshipField}
                    className="rounded-full bg-blue-500 p-2 text-white"
                  >
                    <CiCirclePlus />
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeScholarshipField(field.id)}
                    className="rounded-full bg-red-500 p-2 text-white"
                  >
                    <CiCircleMinus />
                  </button>
                )}
              </div>
              <Input
                type="text"
                placeholder={field.criteriaPlaceholder}
                required
              />
              <Input
                type="text"
                placeholder={field.coveragePlaceholder}
                required
              />
              <Input
                type="text"
                placeholder={field.deadlinePlaceholder}
                required
              />
              <Input
                type="text"
                placeholder={field.processPlaceholder}
                required
              />
            </div>
          ))}
        </div>
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step6;

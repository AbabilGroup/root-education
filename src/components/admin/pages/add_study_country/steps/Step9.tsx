import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step9 = () => {
  const [visaFields, setVisaFields] = useState([
    {
      id: 1,
      categoryPlaceholder: "Category 1",
      detailsPlaceholder: "Details 1",
    },
  ]);
  const addVisaField = () => {
    setVisaFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        categoryPlaceholder: `Title ${prev.length + 1}`,
        detailsPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeVisaField = (id: number) => {
    setVisaFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step9">
      <form className="w-1/2 space-y-5" action="">
        {/* Why study  */}
        <div>
          <Label>Visa Procedures & Fees</Label>

          <Textarea className="mb-2" placeholder="Short brief" required />

          {visaFields.map((field, index) => (
            <div key={field.id} className="mb-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder={field.categoryPlaceholder}
                  required
                />
                {field.id === visaFields.length && (
                  <button
                    type="button"
                    onClick={addVisaField}
                    className="rounded-full bg-blue-500 p-2 text-white"
                  >
                    <CiCirclePlus />
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeVisaField(field.id)}
                    className="rounded-full bg-red-500 p-2 text-white"
                  >
                    <CiCircleMinus />
                  </button>
                )}
              </div>
              <Textarea
                rows={5}
                placeholder={field.detailsPlaceholder}
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

export default Step9;

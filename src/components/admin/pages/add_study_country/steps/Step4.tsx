import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step4 = () => {
  const [tuitionFeeFields, setTuitionFeeFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", rangePlaceholder: "Range 1" },
  ]);
  const [livingCostFields, setLivingCostFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", contentPlaceholder: "Content 1" },
  ]);
  const addTuitionFeeField = () => {
    setTuitionFeeFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        rangePlaceholder: `Range ${prev.length + 1}`,
      },
    ]);
  };

  const removeTuitionFeeField = (id: number) => {
    setTuitionFeeFields((prev) => prev.filter((field) => field.id !== id));
  };

  const addLivingCostField = () => {
    setLivingCostFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        contentPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeLivingCostField = (id: number) => {
    setLivingCostFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step4">
      <form className="w-1/2 space-y-5" action="">
        {/* Why study  */}
        <div>
          <Label>Cost of Study and Living</Label>

          <Textarea className="mb-2" placeholder="Short brief" required />

          <div>
            <Label>Tuition Fee</Label>

            {tuitionFeeFields.map((field, index) => (
              <div key={field.id} className="mb-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder={field.titlePlaceholder}
                    required
                  />
                  {field.id === tuitionFeeFields.length && (
                    <button
                      type="button"
                      onClick={addTuitionFeeField}
                      className="rounded-full bg-blue-500 p-2 text-white"
                    >
                      <CiCirclePlus />
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTuitionFeeField(field.id)}
                      className="rounded-full bg-red-500 p-2 text-white"
                    >
                      <CiCircleMinus />
                    </button>
                  )}
                </div>
                <Textarea
                  rows={5}
                  placeholder={field.rangePlaceholder}
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <Label>Living Costs</Label>

            {livingCostFields.map((field, index) => (
              <div key={field.id} className="mb-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder={field.titlePlaceholder}
                    required
                  />
                  {field.id === livingCostFields.length && (
                    <button
                      type="button"
                      onClick={addLivingCostField}
                      className="rounded-full bg-blue-500 p-2 text-white"
                    >
                      <CiCirclePlus />
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeLivingCostField(field.id)}
                      className="rounded-full bg-red-500 p-2 text-white"
                    >
                      <CiCircleMinus />
                    </button>
                  )}
                </div>
                <Textarea
                  rows={5}
                  placeholder={field.contentPlaceholder}
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step4;

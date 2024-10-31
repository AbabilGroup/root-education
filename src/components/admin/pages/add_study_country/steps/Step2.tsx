import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step2 = () => {
  const [descriptions, setDescriptions] = useState([
    { id: 1, placeholder: "Paragraph 1" },
  ]);
  const addDescriptionField = () => {
    setDescriptions((prev) => [
      ...prev,
      { id: prev.length + 1, placeholder: `Paragraph ${prev.length + 1}` },
    ]);
  };

  const removeDescriptionField = (id: number) => {
    setDescriptions((prev) => prev.filter((desc) => desc.id !== id));
  };

  return (
    <TabsContent value="step2">
      <form className="w-1/2 space-y-5" action="">
        {/* Title */}
        <div>
          <Label>Title</Label>
          <Input type="text" required />
        </div>

        {/* Description */}
        <div>
          <Label>Description</Label>
          {descriptions.map((desc, index) => (
            <div key={desc.id} className="mb-2 flex items-center space-x-2">
              <Textarea rows={5} placeholder={desc.placeholder} required />
              {desc.id === descriptions.length && (
                <button
                  type="button"
                  onClick={addDescriptionField}
                  className="rounded-full bg-blue-500 p-2 text-white"
                >
                  <CiCirclePlus />
                </button>
              )}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeDescriptionField(desc.id)}
                  className="rounded-full bg-red-500 p-2 text-white"
                >
                  <CiCircleMinus />
                </button>
              )}
            </div>
          ))}
        </div>
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step2;

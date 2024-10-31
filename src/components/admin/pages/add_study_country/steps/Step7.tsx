import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step7 = () => {
  const [applicationProFields, setApplicationProFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", contentPlaceholder: "Content 1" },
  ]);
  const addApplicationProField = () => {
    setApplicationProFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        contentPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeApplicationProField = (id: number) => {
    setApplicationProFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step7">
      <form className="w-1/2 space-y-5" action="">
        {/* Why study  */}
        <div>
          <Label>Application Procedures</Label>

          <Textarea className="mb-2" placeholder="Short brief" required />

          {applicationProFields.map((field, index) => (
            <div key={field.id} className="mb-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder={field.titlePlaceholder}
                  required
                />
                {field.id === applicationProFields.length && (
                  <button
                    type="button"
                    onClick={addApplicationProField}
                    className="rounded-full bg-blue-500 p-2 text-white"
                  >
                    <CiCirclePlus />
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeApplicationProField(field.id)}
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
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step7;

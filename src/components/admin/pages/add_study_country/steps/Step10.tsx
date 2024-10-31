import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step10 = () => {
  const [cityFields, setCityFields] = useState([
    {
      id: 1,
      namePlaceholder: "City 1",
    },
  ]);
  const addCityField = () => {
    setCityFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        namePlaceholder: `City ${prev.length + 1}`,
      },
    ]);
  };

  const removeCityField = (id: number) => {
    setCityFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step10">
      <form className="w-1/2 space-y-5" action="">
        {/* City Name */}
        <div>
          <Label>City Name</Label>
          {cityFields.map((field, index) => (
            <>
              <div className="mb-2 flex items-center space-x-2" key={field.id}>
                <Input
                  type="text"
                  placeholder={field.namePlaceholder}
                  required
                />
                {field.id === cityFields.length && (
                  <button
                    type="button"
                    onClick={addCityField}
                    className="rounded-full bg-blue-500 p-2 text-white"
                  >
                    <CiCirclePlus />
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeCityField(field.id)}
                    className="rounded-full bg-red-500 p-2 text-white"
                  >
                    <CiCircleMinus />
                  </button>
                )}
              </div>
              <div className="mb-5">
                <Label>Upload photo</Label>
                <Input type="file" required />
              </div>
            </>
          ))}
        </div>
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step10;

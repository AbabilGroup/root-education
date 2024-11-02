"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type CityInfo = {
  cityName: string;
  photo: FileList | undefined;
};

type FormValues = {
  cityInfo: CityInfo[];
};

const Step10 = () => {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      cityInfo: [{ cityName: "", photo: undefined }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cityInfo",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <TabsContent value="step10">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div
            className="flex items-center justify-between gap-x-3"
            key={field.id}
          >
            <div className="basis-full space-y-3">
              <div>
                <Label>City Name</Label>
                <Input
                  type="text"
                  {...register(`cityInfo.${index}.cityName` as const)}
                  placeholder="Category"
                  required
                />
              </div>
              <div>
                <Label>City Photo</Label>
                <Input
                  type="file"
                  {...register(`cityInfo.${index}.photo` as const)}
                  placeholder="Details"
                  required
                />
              </div>
            </div>
            <button
              className="basis-auto rounded-full bg-primary p-1"
              type="button"
              onClick={() => remove(index)}
            >
              <FaMinusCircle className="text-xl text-white" />
            </button>
          </div>
        ))}
        <button
          className="rounded-full bg-primary p-1"
          type="button"
          onClick={() => append({ cityName: "", photo: undefined })}
        >
          <FaPlusCircle className="text-xl text-white" />
        </button>
        <div>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </TabsContent>
  );
};

export default Step10;

"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type List = {
  title: string;
  content: string;
};

type FormValues = {
  shortBrief: string;
  list: List[];
};

const Step3 = () => {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      shortBrief: "",
      list: [{ title: "", content: "" }], // Default single list
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "list",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  
  return (
    <TabsContent value="step3">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Why Study in ?</Label>
          <Textarea
            {...register("shortBrief")}
            placeholder="Short brief"
            required
          />
        </div>
        {fields.map((field, index) => (
          <div
            className="flex items-center justify-between gap-x-3"
            key={field.id}
          >
            <div className="basis-full space-y-2">
              <Input
                {...register(`list.${index}.title` as const)}
                placeholder="Title"
              />
              <Textarea
                {...register(`list.${index}.content` as const)}
                placeholder="Content"
              />
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
          onClick={() => append({ title: "", content: "" })}
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

export default Step3;

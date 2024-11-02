"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type List = {
  name: string;
  criteria: string;
  coverage: string;
  deadline: string;
  process: string;
};

type FormValues = {
  shortBrief: string;
  list: List[];
};

const Step6 = () => {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      shortBrief: "",
      list: [
        {
          name: "",
          criteria: "",
          coverage: "",
          deadline: "",
          process: "",
        },
      ],
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
    <TabsContent value="step6">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Scholarships</Label>
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
                {...register(`list.${index}.name` as const)}
                placeholder="Scholarship Name"
                required
              />
              <Input
                {...register(`list.${index}.criteria` as const)}
                placeholder="Eligibility Criteria"
                required
              />
              <Input
                {...register(`list.${index}.coverage` as const)}
                placeholder="Coverage"
                required
              />
              <Input
                {...register(`list.${index}.deadline` as const)}
                placeholder="Application Deadline"
                required
              />
              <Input
                {...register(`list.${index}.process` as const)}
                placeholder="Application Process"
                required
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
          onClick={() =>
            append({
              name: "",
              criteria: "",
              coverage: "",
              deadline: "",
              process: "",
            })
          }
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

export default Step6;

"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type Content = {
  content: string;
};

type FormValues = {
  title: string;
  contents: Content[];
};

const Step2 = () => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title: "",
      contents: [
        {
          content: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contents",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <TabsContent value="step2">
      <Label>Title and Description</Label>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title")}
          type="text"
          placeholder="Title"
          required
        />

        {fields.map((field, index) => (
          <div
            className="flex items-center justify-between gap-x-2"
            key={field.id}
          >
            <Textarea
              {...register(`contents.${index}.content` as const)}
              rows={5}
              placeholder="Content"
              required
            />
            <button
              className="rounded-full bg-primary p-1"
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
          onClick={() => append({ content: "" })}
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

export default Step2;

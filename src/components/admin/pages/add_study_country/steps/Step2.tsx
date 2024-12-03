"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type Description = {
  description: string;
};

type FormValues = {
  title: string;
  descriptions: Description[];
};

const Step2 = ({
  countryName,
  setActiveTab,
}: {
  countryName: string | null;
  setActiveTab: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title: "",
      descriptions: [
        {
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "descriptions",
  });

  const { mutate, isPending, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FormValues
  >({
    mutationFn: (formData) =>
      axios.post(
        `${apiUrl}/step_by_step_country/${countryName?.toLowerCase()}/add_box1/`,
        formData,
      ),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step3");
    }
  }, [isSuccess, reset, setActiveTab]);

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
              {...register(`descriptions.${index}.description` as const)}
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
          onClick={() => append({ description: "" })}
        >
          <FaPlusCircle className="text-xl text-white" />
        </button>

        <div>
          <Button type="submit">{isPending ? "Processing..." : "Next"}</Button>
        </div>
      </form>
    </TabsContent>
  );
};

export default Step2;

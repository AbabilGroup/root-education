"use client";

import { Button } from "@/components/ui/button";
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

type List = {
  title: string;
  content: string;
};

type FormValues = {
  short_breaf: string;
  whystudylist: List[];
};

const Step3 = ({
  countryName,
  setActiveTab,
}: {
  countryName: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      short_breaf: "",
      whystudylist: [{ title: "", content: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "whystudylist",
  });

  const { mutate, isPending, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FormValues
  >({
    mutationFn: (formData) =>
      axios.post(
        `${apiUrl}/step_by_step_country/${countryName.toLowerCase()}/add_whystudy/`,
        formData,
      ),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step4");
    }
  }, [isSuccess, reset, setActiveTab]);

  return (
    <TabsContent value="step3">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Why Study in {countryName}?</Label>
          <Textarea
            {...register("short_breaf")}
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
                {...register(`whystudylist.${index}.title` as const)}
                placeholder="Title"
              />
              <Textarea
                {...register(`whystudylist.${index}.content` as const)}
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
          <Button type="submit">{isPending ? "Processing..." : "Next"}</Button>
        </div>
      </form>
    </TabsContent>
  );
};

export default Step3;

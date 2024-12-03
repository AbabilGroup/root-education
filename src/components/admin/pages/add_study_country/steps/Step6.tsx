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


type List = {
  name: string;
  criteria: string;
  coverage: string;
  deadline: string;
  process: string;
};

type FormValues = {
  short_breaf: string;
  scholarshiplist: List[];
};

const Step6 = ({
  countryName,
  setActiveTab,
}: {
  countryName: string | null;
  setActiveTab: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      short_breaf: "",
      scholarshiplist: [
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

  const { mutate, isPending, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FormValues
  >({
    mutationFn: (formData) =>
      axios.post(
        `${apiUrl}/step_by_step_country/${countryName}/add_scholarship/`,
        formData,
      ),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "scholarshiplist",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step7");
    }
  }, [isSuccess, reset, setActiveTab]);

  return (
    <TabsContent value="step6">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Scholarships</Label>
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
                {...register(`scholarshiplist.${index}.name` as const)}
                placeholder="Scholarship Name"
                required
              />
              <Input
                {...register(`scholarshiplist.${index}.criteria` as const)}
                placeholder="Eligibility Criteria"
                required
              />
              <Input
                {...register(`scholarshiplist.${index}.coverage` as const)}
                placeholder="Coverage"
                required
              />
              <Input
                {...register(`scholarshiplist.${index}.deadline` as const)}
                placeholder="Application Deadline"
                required
              />
              <Input
                {...register(`scholarshiplist.${index}.process` as const)}
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
          <Button type="submit" disabled={isPending}>
            {isPending ? "Processing..." : "Next"}
          </Button>
        </div>
      </form>
    </TabsContent>
  );
};

export default Step6;

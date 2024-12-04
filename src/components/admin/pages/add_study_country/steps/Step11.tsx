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
import { toast } from "sonner";

type Faq = {
  question: string;
  answer: string;
};

type FormValues = {
  faqs: Faq[];
};

const Step11 = ({
  countryName,
  setCountryName,
}: {
  countryName: string | null;
  setCountryName: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      faqs: [{ question: "", answer: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    unknown,
    FormValues
  >({
    mutationFn: (formData) =>
      axios.post(
        `${apiUrl}/step_by_step_country/${countryName}/add_faq/`,
        formData,
      ),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setCountryName("");

      reset();

      toast.success("Study country added successfully");
    }

    if (isError) {
      toast.error("Something went wrong! Could not add the study country");
    }

    if (error) {
      console.error(error);
    }
  }, [isSuccess, reset, setCountryName, isError, error]);

  return (
    <TabsContent value="step11">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Label>FAQ</Label>
        {fields.map((field, index) => (
          <div
            className="flex items-center justify-between gap-x-3"
            key={field.id}
          >
            <div className="basis-full space-y-3">
              <div>
                <Input
                  type="text"
                  {...register(`faqs.${index}.question` as const)}
                  placeholder="Question"
                  required
                />
              </div>
              <div>
                <Textarea
                  {...register(`faqs.${index}.answer` as const)}
                  rows={5}
                  placeholder="Answer"
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
          onClick={() => append({ question: "", answer: "" })}
        >
          <FaPlusCircle className="text-xl text-white" />
        </button>
        <div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Processing..." : "Submit"}
          </Button>
        </div>
      </form>
    </TabsContent>
  );
};

export default Step11;

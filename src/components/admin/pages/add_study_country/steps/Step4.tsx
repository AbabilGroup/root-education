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

type TuitionFee = {
  title: string;
  range: string;
};

type LivingCost = {
  title: string;
  content: string;
};

type FormValues = {
  short_breaf: string;
  fees: TuitionFee[];
  list: LivingCost[];
};

const Step4 = ({
  countryName,
  setActiveTab,
}: {
  countryName: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      short_breaf: "",
      fees: [{ title: "", range: "" }],
      list: [{ title: "", content: "" }],
    },
  });

  const {
    fields: feeFields,
    append: feeAppend,
    remove: feeRemove,
  } = useFieldArray({
    control,
    name: "fees",
  });

  const {
    fields: costFields,
    append: costAppend,
    remove: costRemove,
  } = useFieldArray({
    control,
    name: "list",
  });

  const { mutate, isPending, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FormValues
  >({
    mutationFn: (formData) =>
      axios.post(
        `${apiUrl}/step_by_step_country/${countryName.toLowerCase()}/add_costofliving/`,
        formData,
      ),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step5");
    }
  }, [isSuccess, reset]);

  return (
    <TabsContent value="step4">
      <form className="space-y-5" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <Label>Cost of Study and Living</Label>

            <Textarea
              {...register("short_breaf")}
              className="mb-2"
              placeholder="Short brief"
              required
            />

            <div className="space-y-5">
              <div>
                <Label>Tuition Fee</Label>

                {feeFields.map((field, index) => (
                  <div
                    className="mb-2 flex items-center justify-between gap-x-3"
                    key={field.id}
                  >
                    <div className="basis-full space-y-2">
                      <Input
                        {...register(`fees.${index}.title` as const)}
                        placeholder="Title"
                      />
                      <Textarea
                        {...register(`fees.${index}.range` as const)}
                        placeholder="Range"
                      />
                    </div>
                    <button
                      className="basis-auto rounded-full bg-primary p-1"
                      type="button"
                      onClick={() => feeRemove(index)}
                    >
                      <FaMinusCircle className="text-xl text-white" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => feeAppend({ title: "", range: "" })}
              >
                <FaPlusCircle className="text-xl text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <Label>Living Cost</Label>

              {costFields.map((field, index) => (
                <div
                  className="mb-2 flex items-center justify-between gap-x-3"
                  key={field.id}
                >
                  <div className="basis-full space-y-2">
                    <Input
                      {...register(`list.${index}.title` as const)}
                      placeholder="Title"
                    />
                    <Textarea
                      {...register(`list.${index}.content` as const)}
                      placeholder="Range"
                    />
                  </div>
                  <button
                    className="basis-auto rounded-full bg-primary p-1"
                    type="button"
                    onClick={() => costRemove(index)}
                  >
                    <FaMinusCircle className="text-xl text-white" />
                  </button>
                </div>
              ))}
            </div>

            <button
              className="rounded-full bg-primary p-1"
              type="button"
              onClick={() => costAppend({ title: "", content: "" })}
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>
        </div>
        <Button type="submit">{isPending ? "Processing..." : "Next"}</Button>
      </form>
    </TabsContent>
  );
};

export default Step4;

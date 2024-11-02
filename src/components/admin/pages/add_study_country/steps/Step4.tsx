"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
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
  shortBrief: string;
  tuitionFees: TuitionFee[];
  livingCosts: LivingCost[];
};

const Step4 = () => {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      shortBrief: "",
      tuitionFees: [{ title: "", range: "" }],
      livingCosts: [{ title: "", content: "" }],
    },
  });

  const {
    fields: feeFields,
    append: feeAppend,
    remove: feeRemove,
  } = useFieldArray({
    control,
    name: "tuitionFees",
  });

  const {
    fields: costFields,
    append: costAppend,
    remove: costRemove,
  } = useFieldArray({
    control,
    name: "livingCosts",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <TabsContent value="step4">
      <form className="space-y-5" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <Label>Cost of Study and Living</Label>

            <Textarea
              {...register("shortBrief")}
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
                        {...register(`tuitionFees.${index}.title` as const)}
                        placeholder="Title"
                      />
                      <Textarea
                        {...register(`tuitionFees.${index}.range` as const)}
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
                      {...register(`livingCosts.${index}.title` as const)}
                      placeholder="Title"
                    />
                    <Textarea
                      {...register(`livingCosts.${index}.content` as const)}
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
        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  );
};

export default Step4;

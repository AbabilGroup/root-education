"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { apiUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type CityInfo = {
  name: string;
  logo: FileList | undefined;
};

type FormValues = {
  cityInfo: CityInfo[];
};

const Step10 = ({
  countryName,
  setActiveTab,
}: {
  countryName: string | null;
  setActiveTab: (tab: string) => void;
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      cityInfo: [{ name: "", logo: undefined }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cityInfo",
  });

  const { mutate, isPending, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FormData
  >({
    mutationFn: async (formData) =>
      await axios.post(
        `${apiUrl}/step_by_step_country/${countryName}/add_city/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      ),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();

    // Loop through each city and append name and logo to FormData
    data.cityInfo.forEach((city, index) => {
      formData.append(`cityInfo[${index}][name]`, city.name);
      if (city.logo && city.logo[0]) {
        formData.append(`cityInfo[${index}][logo]`, city.logo[0]);
      }
    });

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step11");
    }
  }, [isSuccess, reset, setActiveTab]);

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
                  {...register(`cityInfo.${index}.name` as const)}
                  placeholder="City Name"
                  required
                />
              </div>
              <div>
                <Label>City Photo</Label>
                <Input
                  type="file"
                  {...register(`cityInfo.${index}.logo` as const)}
                  placeholder="City Photo"
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
          onClick={() => append({ name: "", logo: undefined })}
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

export default Step10;

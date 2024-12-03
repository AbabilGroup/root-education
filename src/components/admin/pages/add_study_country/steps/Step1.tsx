"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "@/secrets";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

type FormValues = {
  countryName: string;
  countryFlag: FileList;
};

const Step1 = ({
  setCountryName,
  setActiveTab,
}: {
  setCountryName: (name: string) => void;
  setActiveTab: (tab: string) => void;
}) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { mutate, isPending, isSuccess, data } = useMutation<
    AxiosResponse,
    unknown,
    FormData
  >({
    mutationFn: (formData) =>
      axios.post(`${apiUrl}/step_by_step_country/create_country/`, formData),
  });

  const handleCreateCountry: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("country", data.countryName);
    formData.append("flag", data.countryFlag[0]);

    mutate(formData);
  };

  // Reset form after successful submission
  useEffect(() => {
    if (isSuccess) {
      reset();
      setActiveTab("step2");
      localStorage.setItem("current_country", data.data.slug);
    }
  }, [isSuccess, reset, setActiveTab, data?.data.slug]);

  return (
    <TabsContent value="step1">
      <form
        className="w-1/2 space-y-5"
        action=""
        onSubmit={handleSubmit(handleCreateCountry)}
      >
        {/* Country Name */}
        <div>
          <Label>Country Name</Label>
          <Input
            {...register("countryName")}
            type="text"
            onChange={(e) => setCountryName(e.target.value)}
            required
          />
        </div>

        {/* flag */}
        <div>
          <Label>Upload flag</Label>
          <Input {...register("countryFlag")} type="file" required />
        </div>
        <Button className="text-white" type="submit" disabled={isPending}>
          {isPending ? "Processing..." : "Next"}
        </Button>
      </form>
    </TabsContent>
  );
};

export default Step1;

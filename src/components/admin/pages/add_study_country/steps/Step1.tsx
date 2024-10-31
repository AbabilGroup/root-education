"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "@/secrets";

type FormValues = {
  countryName: string;
  countryFlag: FileList;
};

const Step1 = ({
  setCountryName,
}: {
  setCountryName: (name: string) => void;
}) => {
  const { mutate, isPending, data } = useMutation<
    AxiosResponse,
    unknown,
    FormData
  >({
    mutationFn: (formData) => {
      return axios.post(
        `${apiUrl}/step_by_step_country/create_country/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    },
  });

  const { register, handleSubmit } = useForm<FormValues>();

  const handleCreateCountry: SubmitHandler<FormValues> = (data) => {
    console.log("🚀 ~ data:", data);

    const formData = new FormData();
    formData.append("country", data.countryName);
    formData.append("flag", data.countryFlag[0]);

    mutate(formData);
  };

  console.log(data);

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
        <Button className="text-white" type="submit">
          {isPending ? "Processing..." : "Next"}
        </Button>
      </form>
    </TabsContent>
  );
};

export default Step1;

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { apiUrl } from "@/secrets";

type FormValues = {
  title: string;
  description: string;
};

const Step2 = ({ countryName }: { countryName: string }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const [descriptions, setDescriptions] = useState([
    { id: 1, placeholder: "Paragraph 1" },
  ]);
  const addDescriptionField = () => {
    setDescriptions((prev) => [
      ...prev,
      { id: prev.length + 1, placeholder: `Paragraph ${prev.length + 1}` },
    ]);
  };

  const removeDescriptionField = (id: number) => {
    setDescriptions((prev) => prev.filter((desc) => desc.id !== id));
  };

  const { mutate, isPending, data } = useMutation<
    AxiosResponse,
    unknown,
    FormData
  >({
    mutationFn: (formData) => {
      return axios.post(
        `${apiUrl}/step_by_step_country/${countryName.toLowerCase()}/add_box1/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    },
  });

  const handleCreateTitleAndDesc: SubmitHandler<FormValues> = (data) => {
    console.log("🚀 ~ data:", data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.description);

    mutate(formData);
  };

  console.log(data);

  return (
    <TabsContent value="step2">
      <form
        className="w-1/2 space-y-5"
        action=""
        onSubmit={handleSubmit(handleCreateTitleAndDesc)}
      >
        {/* Title */}
        <div>
          <Label>Title</Label>
          <Input {...register("title")} type="text" required />
        </div>

        {/* Description */}
        <div>
          <Label>Description</Label>
          {descriptions.map((desc, index) => (
            <div key={desc.id} className="mb-2 flex items-center space-x-2">
              <Textarea
                {...register("description")}
                rows={5}
                placeholder={desc.placeholder}
                required
              />
              {desc.id === descriptions.length && (
                <button
                  type="button"
                  onClick={addDescriptionField}
                  className="rounded-full bg-blue-500 p-2 text-white"
                >
                  <CiCirclePlus />
                </button>
              )}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeDescriptionField(desc.id)}
                  className="rounded-full bg-red-500 p-2 text-white"
                >
                  <CiCircleMinus />
                </button>
              )}
            </div>
          ))}
        </div>
        <Button type="submit">{isPending ? "Processing..." : "Next"}</Button>
      </form>
    </TabsContent>
  );
};

export default Step2;

"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";

type TTeam = {
  photo: File | null | FileList | string;
  name: string;
  designation: string;
  social_links: { platform: string; link: string }[];
};

const AddTeamFrom = () => {
  const { handleSubmit, register, control, reset } = useForm<TTeam>({
    defaultValues: {
      photo: null,
      name: "",
      designation: "",
      social_links: [{ platform: "", link: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "social_links",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    unknown,
    FormData
  >({
    mutationFn: async (formData) =>
      await axios.post(`${apiUrl}/team/`, formData),
  });

  const handleAddVisa: SubmitHandler<TTeam> = (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (data.photo instanceof FileList && data.photo.length > 0) {
      formData.append("photo", data.photo[0]);
    } else if (data.photo instanceof File) {
      formData.append("photo", data.photo);
    } else if (typeof data.photo === "string") {
      formData.append("photo", data.photo);
    }

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Team added successfully.");
      reset();
    }
    if (isError) {
      toast.error("Could not add the team!");
    }

    if (error) {
      console.error(error);
    }
  }, [isSuccess, reset, error, isError]);

  return (
    <form
      className="w-full space-y-8 lg:w-1/2"
      action=""
      onSubmit={handleSubmit(handleAddVisa)}
    >
      <div>
        <Label>Member Name</Label>
        <Input {...register("name")} type="text" required />
      </div>
      <div>
        <Label>Designation</Label>
        <Input {...register("designation")} type="text" required />
      </div>
      <div>
        <Label>Photo</Label>
        <Input {...register("photo")} type="file" required />
      </div>

      <div>
        <Label>Social Links:</Label>

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div className="flex items-center gap-x-3" key={field.id}>
              <div className="space-y-2">
                <Input
                  {...register(`social_links.${index}.platform`)}
                  type="text"
                  placeholder="Platform Name"
                  required
                />
                <Input
                  {...register(`social_links.${index}.link`)}
                  type="text"
                  placeholder="URL"
                  required
                />
              </div>

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
            onClick={() =>
              append({
                platform: "",
                link: "",
              })
            }
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Processing..." : "Add Team"}
      </Button>
    </form>
  );
};

export default AddTeamFrom;

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { University } from "@/types/university";
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  Controller,
} from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "@/secrets";
import { toast } from "sonner";
import { useEffect } from "react";

const AddUniversityForm = () => {
  const { register, handleSubmit, reset, control } = useForm<University>({
    defaultValues: {
      name: "",
      description: "",
      short_info: {
        country: "",
        university_type: "",
        total_students: 0,
        launched: 0,
      },
      photo: null,
      logo: null,
      video: null,
      thumbnail: null,
      about_university: [
        {
          title: "",
          description: "",
        },
      ],
      programs: {
        undergraduate_programs: [{ name: "" }],
        postgraduate_programs: [{ name: "" }],
        doctoral_programs: [{ name: "" }],
      },
      scholarship: {
        short_description: "",
        table: [
          {
            scholarship_name: "",
            amount: "",
            eligibility_criteria: "",
            provider: "",
          },
        ],
        notes: [
          {
            title: "",
          },
        ],
      },
      application_guide: {
        short_description: "",
        guide_list: [
          {
            title: "",
            description: "",
          },
        ],
        bottom_description: "",
      },
    },
  });

  const {
    fields: aboutFields,
    append: aboutAppend,
    remove: aboutRemove,
  } = useFieldArray({
    control,
    name: "about_university",
  });

  const {
    fields: underFields,
    append: underAppend,
    remove: underRemove,
  } = useFieldArray({
    control,
    name: "programs.undergraduate_programs",
  });

  const {
    fields: postFields,
    append: postAppend,
    remove: postRemove,
  } = useFieldArray({
    control,
    name: "programs.postgraduate_programs",
  });

  const {
    fields: doctoralFields,
    append: doctoralAppend,
    remove: doctoralRemove,
  } = useFieldArray({
    control,
    name: "programs.doctoral_programs",
  });

  const {
    fields: tableFields,
    append: tableAppend,
    remove: tableRemove,
  } = useFieldArray({
    control,
    name: "scholarship.table",
  });

  const {
    fields: noteFields,
    append: noteAppend,
    remove: noteRemove,
  } = useFieldArray({
    control,
    name: "scholarship.notes",
  });

  const {
    fields: appGuideFields,
    append: appGuideAppend,
    remove: appGuideRemove,
  } = useFieldArray({
    control,
    name: "application_guide.guide_list",
  });

  const {
    // mutate,
    isPending,
    isSuccess,
    error,
    data: editUniversityData,
  } = useMutation<AxiosResponse, unknown, FormData>({
    mutationFn: (formData) => axios.post(`${apiUrl}/all_university/`, formData),
  });

  const handleAddUniversity: SubmitHandler<University> = (data) => {
    console.log("🚀 ~ AddUniversityForm ~ data:", data);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(editUniversityData);
      toast.success("University added successfully.");
      reset();
    }

    if (error) {
      console.error(error);
      toast.error(`Something went wrong while uploading! Please try again.`);
    }
  }, [isSuccess, reset, error, editUniversityData]);

  return (
    <form
      className="w-1/2 space-y-8"
      action=""
      onSubmit={handleSubmit(handleAddUniversity)}
    >
      <div>
        <Label>University Name</Label>
        <Input {...register("name")} type="text" />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea {...register("description")} rows={5} />
      </div>

      <div>
        <Label>Country</Label>
        <Input {...register("short_info.country")} type="text" />
      </div>

      <div>
        <Label>University Type</Label>

        <Controller
          name="short_info.university_type"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Public">Public</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Label>Total Students</Label>
        <Input {...register("short_info.total_students")} type="number" />
      </div>

      <div>
        <Label>Launch Year</Label>
        <Input {...register("short_info.launched")} type="number" />
      </div>

      <div>
        <Label>Photo</Label>
        <Input {...register("photo")} type="file" />
      </div>

      <div>
        <Label>Video</Label>
        <Input {...register("video")} type="file" />
      </div>

      <div>
        <Label>Video Thumbnail</Label>
        <Input {...register("thumbnail")} type="file" />
      </div>

      <div>
        <Label>Logo</Label>
        <Input {...register("logo")} type="file" />
      </div>

      <div>
        <Label>About University</Label>
        <div className="space-y-5">
          {aboutFields.map((field, index) => (
            <div className="flex items-center gap-x-3" key={field.id}>
              <div className="basis-full space-y-2">
                <Input
                  {...register(`about_university.${index}.title`)}
                  type="text"
                  placeholder="Title"
                />
                <Textarea
                  {...register(`about_university.${index}.description`)}
                  rows={5}
                  placeholder="Content"
                />
              </div>
              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => aboutRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}

          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => aboutAppend({ title: "", description: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div>
        <Label>Undergraduate Programs</Label>
        <div className="space-y-2">
          {underFields.map((field, index) => (
            <div className="flex items-center gap-x-3" key={field.id}>
              <Input
                {...register(`programs.undergraduate_programs.${index}.name`)}
                type="text"
                placeholder="Name"
              />
              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => underRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => underAppend({ name: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div>
        <Label>Postgraduate Programs</Label>
        <div className="space-y-2">
          {postFields.map((field, index) => (
            <div className="flex items-center gap-x-3" key={field.id}>
              <Input
                {...register(`programs.postgraduate_programs.${index}.name`)}
                type="text"
                placeholder="Name"
              />
              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => postRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => postAppend({ name: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div>
        <Label>Doctoral Programs</Label>
        <div className="space-y-2">
          {doctoralFields.map((field, index) => (
            <div className="flex items-center gap-x-3" key={field.id}>
              <Input
                {...register(`programs.doctoral_programs.${index}.name`)}
                type="text"
                placeholder="Name"
              />
              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => doctoralRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => doctoralAppend({ name: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <Label>Scholarship</Label>
          <Textarea
            {...register("scholarship.short_description")}
            placeholder="Short brief"
          />
        </div>

        <div>
          <Label>Table</Label>
          <div className="space-y-5">
            {tableFields.map((field, index) => (
              <div className="flex items-center gap-x-3" key={field.id}>
                <div className="basis-full space-y-2">
                  <Input
                    {...register(`scholarship.table.${index}.scholarship_name`)}
                    type="text"
                    placeholder="Scholarship Name"
                  />
                  <Input
                    {...register(`scholarship.table.${index}.amount`)}
                    type="text"
                    placeholder="Amount"
                  />
                  <Input
                    {...register(
                      `scholarship.table.${index}.eligibility_criteria`,
                    )}
                    type="text"
                    placeholder="Eligibility Criteria"
                  />
                  <Input
                    {...register(`scholarship.table.${index}.provider`)}
                    type="text"
                    placeholder="Provider"
                  />
                </div>

                <button
                  className="rounded-full bg-primary p-1"
                  type="button"
                  onClick={() => tableRemove(index)}
                >
                  <FaMinusCircle className="text-xl text-white" />
                </button>
              </div>
            ))}

            <button
              className="rounded-full bg-primary p-1"
              type="button"
              onClick={() =>
                tableAppend({
                  scholarship_name: "",
                  amount: "",
                  eligibility_criteria: "",
                  provider: "",
                })
              }
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>
        </div>

        <div>
          <Label>Notes:</Label>

          <div className="space-y-2">
            {noteFields.map((field, index) => (
              <div className="flex items-center gap-x-3" key={field.id}>
                <Input
                  {...register(`scholarship.notes.${index}.title`)}
                  type="text"
                  placeholder="Title"
                />
                <button
                  className="rounded-full bg-primary p-1"
                  type="button"
                  onClick={() => noteRemove(index)}
                >
                  <FaMinusCircle className="text-xl text-white" />
                </button>
              </div>
            ))}

            <button
              className="rounded-full bg-primary p-1"
              type="button"
              onClick={() =>
                noteAppend({
                  title: "",
                })
              }
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <Label>Applicaiton Guide</Label>

        <div className="space-y-5">
          <Input
            {...register("application_guide.short_description")}
            type="text"
            placeholder="Short brief"
          />

          <div className="space-y-5">
            {appGuideFields.map((field, index) => (
              <div className="flex items-center gap-x-3" key={field.id}>
                <div className="basis-full space-y-2">
                  <Input
                    {...register(`application_guide.guide_list.${index}.title`)}
                    type="text"
                    placeholder="Title"
                  />
                  <Textarea
                    {...register(
                      `application_guide.guide_list.${index}.description`,
                    )}
                    placeholder="Content"
                  />
                </div>
                <button
                  className="rounded-full bg-primary p-1"
                  type="button"
                  onClick={() => appGuideRemove(index)}
                >
                  <FaMinusCircle className="text-xl text-white" />
                </button>
              </div>
            ))}

            <button
              className="rounded-full bg-primary p-1"
              type="button"
              onClick={() =>
                appGuideAppend({
                  title: "",
                  description: "",
                })
              }
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>

          <Textarea
            {...register("application_guide.bottom_description")}
            placeholder="Bottom Description"
          />
        </div>
      </div>

      <Button type="submit">
        {isPending ? "Processing..." : "Add University"}
      </Button>
    </form>
  );
};

export default AddUniversityForm;

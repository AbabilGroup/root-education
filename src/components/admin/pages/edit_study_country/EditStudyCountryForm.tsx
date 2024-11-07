"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Box1, Root } from "@/types/country";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const EditStudyCountryForm = ({ country }: { country: Root }) => {
  const { control, register, handleSubmit, reset } = useForm<Root>({
    defaultValues: country,
  });

  const {
    fields: descriptionFields,
    append: descriptionAppend,
    remove: descriptionRemove,
  } = useFieldArray({
    control,
    name: `box1.0.descriptions`,
  });

  //   const { mutate, isPending, isSuccess } = useMutation<
  //     AxiosResponse,
  //     unknown,
  //     FormData
  //   >({
  //     mutationFn: (formData) =>
  //       axios.post(`${apiUrl}/study-country/${country.route_slug}`, formData),
  //   });

  const handleUpdateCountry: SubmitHandler<Root> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    reset(country);
  }, [reset, country]);

  return (
    <div className="mt-10 w-1/2">
      <form
        className="space-y-5"
        action=""
        onSubmit={handleSubmit(handleUpdateCountry)}
      >
        {/* Country Name */}
        <div>
          <Label>Country Name</Label>
          <Input
            {...register("country")}
            type="text"
            defaultValue={country.country}
            required
          />
        </div>

        {/* flag */}
        <div>
          <Label>Upload flag</Label>
          <Input {...register("flag")} type="file" required />
        </div>

        {/* box 1  */}
        {country.box1.map((info: Box1, index: number) => (
          <div className="space-y-2" key={info.title}>
            <div>
              <Label>Title</Label>
              <Input
                {...register(`box1.${index}.title`)}
                type="text"
                placeholder="Title"
                defaultValue={info.title}
                required
              />
            </div>

            <div>
              <Label>Descriptions</Label>
              <div className="space-y-2">
                {descriptionFields.map((field, index) => (
                  <div
                    className="flex items-center justify-between gap-x-2"
                    key={field.id}
                  >
                    <Textarea
                      {...register(
                        `box1.${index}.descriptions.${index}.description` as const,
                      )}
                      rows={5}
                      placeholder="Content"
                      defaultValue={field.description}
                      required
                    />
                    <button
                      className="rounded-full bg-primary p-1"
                      type="button"
                      onClick={() => descriptionRemove(index)}
                    >
                      <FaMinusCircle className="text-xl text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="rounded-full bg-primary p-1"
              type="button"
              onClick={() => descriptionAppend({ description: "" })}
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditStudyCountryForm;

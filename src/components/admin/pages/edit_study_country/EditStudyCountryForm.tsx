"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Box1, Costofliving, Root, Whystudylist } from "@/types/country";
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

  const {
    fields: whyStudyFields,
    append: whyStudyAppend,
    remove: whyStudyRemove,
  } = useFieldArray({
    control,
    name: `whystudy.0.whystudylist`,
  });

  const {
    fields: feeFields,
    append: feeAppend,
    remove: feeRemove,
  } = useFieldArray({
    control,
    name: `costofliving.0.fees`,
  });

  const {
    fields: costFields,
    append: costAppend,
    remove: costRemove,
  } = useFieldArray({
    control,
    name: `costofliving.0.list`,
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
        className="space-y-10"
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

        {/* why study  */}
        {country.whystudy.map(
          (
            whyData: {
              id: number;
              whystudylist: Whystudylist[];
              short_breaf: string;
            },
            index: number,
          ) => (
            <div className="space-y-3" key={whyData.id}>
              <div>
                <Label>Why Study in {country.country}?</Label>
                <Textarea
                  {...register(`whystudy.${index}.short_breaf`)}
                  placeholder="Short brief"
                  defaultValue={whyData.short_breaf}
                  required
                />
              </div>
              <div className="space-y-3">
                {whyStudyFields.map((field, index) => (
                  <div
                    className="flex items-center justify-between gap-x-3"
                    key={field.id}
                  >
                    <div className="basis-full space-y-2">
                      <Input
                        {...register(
                          `whystudy.${index}.whystudylist.${index}.title` as const,
                        )}
                        placeholder="Title"
                        defaultValue={field.title}
                      />
                      <Textarea
                        {...register(
                          `whystudy.${index}.whystudylist.${index}.content` as const,
                        )}
                        placeholder="Content"
                        defaultValue={field.content}
                      />
                    </div>
                    <button
                      className="basis-auto rounded-full bg-primary p-1"
                      type="button"
                      onClick={() => whyStudyRemove(index)}
                    >
                      <FaMinusCircle className="text-xl text-white" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="rounded-full bg-primary p-1"
                type="button"
                onClick={() => whyStudyAppend({ title: "", content: "" })}
              >
                <FaPlusCircle className="text-xl text-white" />
              </button>
            </div>
          ),
        )}

        {/* cost of living  */}
        {country.costofliving.map((cost: Costofliving, index: number) => (
          <div className="space-y-4" key={cost.short_breaf}>
            <div>
              <Label>Cost of Study and Living</Label>

              <Textarea
                {...register(`costofliving.${index}.short_breaf`)}
                className="mb-2"
                placeholder="Short brief"
                defaultValue={cost.short_breaf}
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
                          {...register(
                            `costofliving.${index}.fees.${index}.title` as const,
                          )}
                          placeholder="Title"
                          defaultValue={field.title}
                        />
                        <Textarea
                          {...register(
                            `costofliving.${index}.fees.${index}.range` as const,
                          )}
                          placeholder="Range"
                          defaultValue={field.range}
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
                        {...register(
                          `costofliving.${index}.list.${index}.title` as const,
                        )}
                        placeholder="Title"
                        defaultValue={field.title}
                      />
                      <Textarea
                        {...register(
                          `costofliving.${index}.list.${index}.content` as const,
                        )}
                        placeholder="Range"
                        defaultValue={field.content}
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
        ))}
      </form>
    </div>
  );
};

export default EditStudyCountryForm;

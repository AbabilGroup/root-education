"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/secrets";
import { Root } from "@/types/country";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";
import { removeFields } from "@/lib/utils";

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
    name: `box1.descriptions`,
  });

  const {
    fields: whyStudyFields,
    append: whyStudyAppend,
    remove: whyStudyRemove,
  } = useFieldArray({
    control,
    name: `whystudy.whystudylist`,
  });

  const {
    fields: feeFields,
    append: feeAppend,
    remove: feeRemove,
  } = useFieldArray({
    control,
    name: `costofliving.fees`,
  });

  const {
    fields: costFields,
    append: costAppend,
    remove: costRemove,
  } = useFieldArray({
    control,
    name: `costofliving.list`,
  });

  const {
    fields: jobFields,
    append: jobAppend,
    remove: jobRemove,
  } = useFieldArray({
    control,
    name: `jobopportunity.list`,
  });

  const {
    fields: scholarshipFields,
    append: scholarshipAppend,
    remove: scholarshipRemove,
  } = useFieldArray({
    control,
    name: `scholarship.scholarshiplist`,
  });

  const {
    fields: appProcedureFields,
    append: appProcedureAppend,
    remove: appProcedureRemove,
  } = useFieldArray({
    control,
    name: `application_procedures.applicationprocedureslist`,
  });

  const {
    fields: appReqFields,
    append: appReqAppend,
    remove: appReqRemove,
  } = useFieldArray({
    control,
    name: `admission_requirments.list`,
  });

  const {
    fields: visaProFields,
    append: visaProAppend,
    remove: visaProRemove,
  } = useFieldArray({
    control,
    name: `visaprocedures.list`,
  });

  const {
    fields: cityFields,
    append: cityAppend,
    remove: cityRemove,
  } = useFieldArray({
    control,
    name: `city`,
  });

  const {
    fields: faqFields,
    append: faqAppend,
    remove: faqRemove,
  } = useFieldArray({
    control,
    name: `faq`,
  });

  const {
    data: EditCountryData,
    error,
    mutate,
    isPending,
    isSuccess,
  } = useMutation<AxiosResponse, unknown, Root>({
    mutationFn: (formData) =>
      axios.put(`${apiUrl}/study_country/${country.slug}/`, formData),
  });

  const handleUpdateCountry: SubmitHandler<Root> = (data) => {
    const cleanedData = removeFields(data);

    mutate(cleanedData);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(EditCountryData);
      reset(country);
      toast.success("Study country has been updated successfully.");
    }

    if (error) {
      console.error(error);
      toast.error(`Something went wrong when updating`);
    }
  }, [reset, country, isSuccess, error, EditCountryData]);

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
          <Input {...register("flag")} type="file" />
        </div>

        {/* box 1  */}
        <div className="space-y-2">
          <div>
            <Label>Title</Label>
            <Input
              {...register(`box1.title`)}
              type="text"
              placeholder="Title"
              defaultValue={country.box1?.title}
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
                      `box1.descriptions.${index}.description` as const,
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

        {/* why study  */}

        <div className="space-y-3">
          <div>
            <Label>Why Study in {country.country}?</Label>
            <Textarea
              {...register(`whystudy.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.whystudy?.short_breaf}
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
                      `whystudy.whystudylist.${index}.title` as const,
                    )}
                    placeholder="Title"
                    defaultValue={field.title}
                  />
                  <Textarea
                    {...register(
                      `whystudy.whystudylist.${index}.content` as const,
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

        {/* cost of living  */}
        <div className="space-y-4">
          <div>
            <Label>Cost of Study and Living</Label>

            <Textarea
              {...register(`costofliving.short_breaf`)}
              className="mb-2"
              placeholder="Short brief"
              defaultValue={country.costofliving?.short_breaf}
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
                          `costofliving.fees.${index}.title` as const,
                        )}
                        placeholder="Title"
                        defaultValue={field.title}
                      />
                      <Textarea
                        {...register(
                          `costofliving.fees.${index}.range` as const,
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
                onClick={() => feeAppend({ icon: "", title: "", range: "" })}
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
                      {...register(`costofliving.list.${index}.title` as const)}
                      placeholder="Title"
                      defaultValue={field.title}
                    />
                    <Textarea
                      {...register(
                        `costofliving.list.${index}.content` as const,
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
              onClick={() => costAppend({ icon: "", title: "", content: "" })}
            >
              <FaPlusCircle className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* job opportunity  */}

        <div className="space-y-5">
          <div>
            <Label>Job Opportunity</Label>
            <Textarea
              {...register(`jobopportunity.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.jobopportunity?.short_breaf}
              required
            />
          </div>
          {jobFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-2">
                <Input
                  {...register(`jobopportunity.list.${index}.title` as const)}
                  placeholder="Title"
                  defaultValue={field.title}
                />
                <Textarea
                  {...register(`jobopportunity.list.${index}.content` as const)}
                  placeholder="Content"
                  defaultValue={field.content}
                />
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => jobRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => jobAppend({ icon: "", title: "", content: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* Scholarship */}
        <div className="space-y-5">
          <div className="space-y-1">
            <Label>Scholarships</Label>
            <Textarea
              {...register(`scholarship.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.scholarship?.short_breaf}
              required
            />
          </div>

          {scholarshipFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-2">
                <Input
                  {...register(
                    `scholarship.scholarshiplist.${index}.name` as const,
                  )}
                  placeholder="Scholarship Name"
                  defaultValue={field.name}
                  required
                />
                <Input
                  {...register(
                    `scholarship.scholarshiplist.${index}.criteria` as const,
                  )}
                  placeholder="Eligibility Criteria"
                  defaultValue={field.criteria}
                  required
                />
                <Input
                  {...register(
                    `scholarship.scholarshiplist.${index}.coverage` as const,
                  )}
                  placeholder="Coverage"
                  defaultValue={field.coverage}
                  required
                />
                <Input
                  {...register(
                    `scholarship.scholarshiplist.${index}.deadline` as const,
                  )}
                  placeholder="Application Deadline"
                  defaultValue={field.deadline}
                  required
                />
                <Input
                  {...register(
                    `scholarship.scholarshiplist.${index}.process` as const,
                  )}
                  placeholder="Application Process"
                  defaultValue={field.process}
                  required
                />
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => scholarshipRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() =>
              scholarshipAppend({
                name: "",
                criteria: "",
                coverage: "",
                deadline: "",
                process: "",
              })
            }
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* application Procedures  */}

        <div className="space-y-5">
          <div>
            <Label>Application Procedures</Label>
            <Textarea
              {...register(`application_procedures.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.application_procedures?.short_breaf}
              required
            />
          </div>
          {appProcedureFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-2">
                <Input
                  {...register(
                    `application_procedures.applicationprocedureslist.${index}.title` as const,
                  )}
                  placeholder="Title"
                  defaultValue={field.title}
                />
                <Textarea
                  {...register(
                    `application_procedures.applicationprocedureslist.${index}.content` as const,
                  )}
                  placeholder="Content"
                  defaultValue={field.content}
                />
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => appProcedureRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() =>
              appProcedureAppend({ icon: "", title: "", content: "" })
            }
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* application Requirements  */}

        <div className="space-y-5">
          <div>
            <Label>Application Requirements</Label>
            <Textarea
              {...register(`admission_requirments.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.admission_requirments?.short_breaf}
              required
            />
          </div>
          {appReqFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-2">
                <Input
                  {...register(
                    `admission_requirments.list.${index}.title` as const,
                  )}
                  placeholder="Title"
                  defaultValue={field.title}
                />
                <Textarea
                  {...register(
                    `admission_requirments.list.${index}.content` as const,
                  )}
                  placeholder="Content"
                  defaultValue={field.content}
                />
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => appReqRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => appReqAppend({ icon: "", title: "", content: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* visa procedures and fees */}

        <div className="space-y-3">
          <div>
            <Label>Visa Procedures & Fees</Label>
            <Textarea
              {...register(`visaprocedures.short_breaf`)}
              placeholder="Short brief"
              defaultValue={country.visaprocedures?.short_breaf}
              required
            />
          </div>
          {visaProFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-2">
                <Input
                  type="text"
                  {...register(`visaprocedures.list.${index}.title` as const)}
                  placeholder="Category"
                  defaultValue={field.title}
                  required
                />
                <Textarea
                  {...register(`visaprocedures.list.${index}.content` as const)}
                  placeholder="Details"
                  defaultValue={field.content}
                  required
                />
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => visaProRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => visaProAppend({ title: "", content: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* city  */}
        <div className="space-y-5">
          {cityFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-3">
                <div>
                  <Label>City Name</Label>
                  <Input
                    type="text"
                    {...register(`city.${index}.name` as const)}
                    placeholder="City Name"
                    defaultValue={field.name}
                  />
                </div>
                {/* <div>
                  <Label>City Photo</Label>
                  <Input
                    type="file"
                    {...register(`city.${index}.logo` as const)}
                    placeholder="City Photo"
                  />
                </div> */}
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => cityRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => cityAppend({ name: "", logo: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        {/* faq  */}
        <div className="space-y-5">
          <Label>FAQ</Label>
          {faqFields.map((field, index) => (
            <div
              className="flex items-center justify-between gap-x-3"
              key={field.id}
            >
              <div className="basis-full space-y-3">
                <div>
                  <Input
                    type="text"
                    {...register(`faq.${index}.question` as const)}
                    placeholder="Question"
                    defaultValue={field.question}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    {...register(`faq.${index}.answer` as const)}
                    rows={5}
                    placeholder="Answer"
                    defaultValue={field.answer}
                    required
                  />
                </div>
              </div>
              <button
                className="basis-auto rounded-full bg-primary p-1"
                type="button"
                onClick={() => faqRemove(index)}
              >
                <FaMinusCircle className="text-xl text-white" />
              </button>
            </div>
          ))}
          <button
            className="rounded-full bg-primary p-1"
            type="button"
            onClick={() => faqAppend({ question: "", answer: "" })}
          >
            <FaPlusCircle className="text-xl text-white" />
          </button>
        </div>

        <Button type="submit">{isPending ? "Processing..." : "Update"}</Button>
      </form>
    </div>
  );
};

export default EditStudyCountryForm;

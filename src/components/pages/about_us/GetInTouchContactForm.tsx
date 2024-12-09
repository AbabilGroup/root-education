"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const GetInTouchContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isPending, isError, isSuccess } = useMutation<
    AxiosResponse,
    unknown,
    FieldValues
  >({
    mutationFn: async (data) => await axios.post(`${apiUrl}/contact/`, data),
  });

  const handleContactForm: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success(`Thanks for contacting us!`);
    }

    if (isError) {
      toast.error(`Could not submit the contact form!`);
    }
  }, [isSuccess, isError, reset]);

  return (
    <form
      className="space-y-5"
      action=""
      onSubmit={handleSubmit(handleContactForm)}
    >
      <Input
        {...register("name")}
        className="rounded-sm focus:ring-primary"
        type="text"
        placeholder="Full name"
        required
      />
      <Input
        {...register("email")}
        className="rounded-sm focus:ring-primary"
        type="email"
        placeholder="Email"
        required
      />
      <Input
        {...register("phone_number")}
        className="rounded-sm focus:ring-primary"
        type="tel"
        placeholder="Phone number"
        required
      />
      <Textarea
        {...register("message")}
        className="rounded-sm focus:ring-primary"
        placeholder="Write your massage"
        rows={5}
        required
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Processing..." : "Send Message"}
      </Button>
    </form>
  );
};

export default GetInTouchContactForm;

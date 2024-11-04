"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const GetInTouchContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleContactForm: SubmitHandler<FieldValues> = (data) => {
    reset();
  };

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
        {...register("phone")}
        className="rounded-sm focus:ring-primary"
        type="tel"
        placeholder="Phone number"
        required
      />
      <Textarea
        {...register("massage")}
        className="rounded-sm focus:ring-primary"
        placeholder="Write your massage"
        rows={5}
        required
      />
      <button
        className="flex items-center justify-center gap-x-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-secondary hover:text-white"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default GetInTouchContactForm;

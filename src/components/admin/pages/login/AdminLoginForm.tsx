"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";

type FieldValues = {
  username: string;
  password: string;
};

const AdminLoginForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-[350px] space-y-5"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label>Username</Label>
        <Input {...register("username")} type="text" required />
      </div>
      <div>
        <Label>Password</Label>
        <Input {...register("password")} type="password" required />
      </div>
      <div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default AdminLoginForm;

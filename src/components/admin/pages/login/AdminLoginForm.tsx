"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiBaseUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type FieldValues = {
  username: string;
  password: string;
};

const AdminLoginForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const { mutate, isSuccess, isError, isPending, data, error } = useMutation<
    AxiosResponse,
    unknown,
    FieldValues
  >({
    mutationFn: (loginData) =>
      axios.post(`${apiBaseUrl}/auth/token/login/`, loginData),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const token = data?.data?.auth_token;

      // Save token to cookies
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
      });

      // Redirect to admin dashboard
      router.push("/admin");

      toast.success("Successfully logged in to the admin panel!");
    }

    if (isError) {
      toast.error("Could not login to admin dashboard");
    }

    if (error) {
      console.error(error);
      toast.error("An error occurred while trying to login");
    }
  }, [isSuccess, isError, data?.data?.auth_token, router, error]);

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
        <Button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default AdminLoginForm;

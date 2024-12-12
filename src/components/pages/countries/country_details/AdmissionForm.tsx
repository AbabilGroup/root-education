"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { parse, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { apiUrl } from "@/secrets";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z
    .string({ required_error: "Name is required" })
    .nonempty("Name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .nonempty("Email is required")
    .email({ message: "Invalid email format" })
    .toLowerCase(),
  phone_number: z
    .string({ required_error: "Phone number is required" })
    .nonempty("Phone number is required"),
  address: z
    .string({ required_error: "Address  is required" })
    .nonempty("Address is required"),

  date_of_birth: z
    .string({ required_error: "Date of birth is required" })
    .nonempty("Date of birth is required"),
  gender: z
    .string({ required_error: "Gender is required" })
    .nonempty("Gender is required"),

  apply_for: z
    .string({ required_error: "Application program is required" })
    .nonempty("Application program is required"),
  document: z
    .instanceof(File, { message: "Document is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must be less than 5MB",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      {
        message: "Only PDF or Word documents (DOC/DOCX) are allowed",
      },
    ),
});

const AdmissionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone_number: "",
      address: "",
      date_of_birth: undefined,
      gender: "",
      apply_for: "",
      document: undefined, // or undefined
    },
  });

  const { mutate, isPending, isError, isSuccess, error } = useMutation<
    AxiosResponse,
    unknown,
    FieldValues
  >({
    mutationFn: async (data) =>
      await axios.post(`${apiUrl}/admission-form/`, data),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append("full_name", values.full_name);
    formData.append("email", values.email);
    formData.append("phone_number", values.phone_number);
    formData.append("address", values.address);
    formData.append("date_of_birth", values.date_of_birth);
    formData.append("gender", values.gender);
    formData.append("apply_for", values.apply_for);

    if (values.document instanceof FileList && values.document.length > 0) {
      formData.append("document", values.document[0]);
    } else if (values.document instanceof File) {
      formData.append("document", values.document);
    } else if (typeof values.document === "string") {
      formData.append("document", values.document);
    }

    mutate(formData);
  }

  useEffect(() => {
    if (isSuccess) {
      form.reset();
      toast.success(`Thanks for contacting us!`);
    }

    if (isError) {
      toast.error(`Could not submit the admission form!`);
    }

    if (error) {
      console.error(error);
    }
  }, [isSuccess, isError, error, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-[#F7F8F8] py-5"
                    placeholder="Full name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-[#F7F8F8] py-5"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-[#F7F8F8] py-5"
                    placeholder="Phone number"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-[#F7F8F8] py-5"
                    placeholder="Address"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => {
              const selectedDate = field.value
                ? parse(field.value, "yyyy-MM-dd", new Date())
                : undefined;

              return (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full bg-[#F7F8F8] py-5 pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {selectedDate ? (
                            format(selectedDate, "PPP")
                          ) : (
                            <span className="font-medium text-[#00000067]">
                              Date of Birth
                            </span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-full bg-white p-0"
                      align="center"
                    >
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) =>
                          field.onChange(date ? format(date, "yyyy-MM-dd") : "")
                        }
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage className="text-red-500" />
                </FormItem>
              );
            }}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="py-5">
                    <SelectTrigger className="bg-[#F7F8F8]">
                      <SelectValue
                        className="text-[#00000067]"
                        placeholder="Gender"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem className="cursor-pointer" value="Male">
                      Male
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Female">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="apply_for"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Apply for</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Language Courses" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Language Courses
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Short-term Course" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Short-term Course
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Undergraduate" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Undergraduate
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="PostGraduate" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Post Graduate
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Doctoral" />
                      </FormControl>
                      <FormLabel className="font-normal">Doctoral</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your Documents</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#F7F8F8] pt-[6px]"
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])} // handle file selection
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By Clicking you agree to our{" "}
            <Link
              className="text-primary hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              className="text-primary hover:underline"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </label>
        </div>
        <div className="pt-5">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Processing..." : "Get start for free Consultation"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdmissionForm;

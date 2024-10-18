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
import { useForm } from "react-hook-form";
import SiteButton from "@/components/ui/SiteButton";
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

const formSchema = z.object({
  name: z
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
  subject: z
    .string({ required_error: "Subject is required" })
    .nonempty("Subject is required"),
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
      name: "",
      email: "",
      phone_number: "",
      address: "",
      date_of_birth: undefined,
      gender: "",
      subject: "",
      apply_for: "",
      document: undefined, // or undefined
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <FormField
            control={form.control}
            name="name"
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
                            "w-full bg-[#F7F8F8] pl-3 text-left font-normal",
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
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
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
                    className="grid grid-cols-3 gap-y-3"
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
                    className="bg-[#F7F8F8]"
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
          <SiteButton type="submit">Get start for free Consultation</SiteButton>
        </div>
      </form>
    </Form>
  );
};

export default AdmissionForm;

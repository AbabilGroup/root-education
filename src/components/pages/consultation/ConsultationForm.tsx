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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  destination: z
    .string({ required_error: "Destination is required" })
    .nonempty("Destination is required"),
  meeting_format: z
    .string({ required_error: "Meeting format is required" })
    .nonempty("Meeting format is required"),
  apply_for: z
    .string({ required_error: "Application program is required" })
    .nonempty("Application program is required"),
  message: z
    .string({ required_error: "Message is required" })
    .nonempty("Message is required")
    .max(300)
    .min(20),
});

const ConsultationForm = () => {
  const [isNotAccepted, setIsNotAccepted] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      destination: "",
      meeting_format: "",
      apply_for: "",
      message: "",
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
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="py-5"
                    placeholder="Full name"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="py-5"
                      placeholder="Email address"
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
                  <FormLabel>Phone*</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="py-5"
                      placeholder="Phone number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
          <div>
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="py-5">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Romania">Romania</SelectItem>
                      <SelectItem value="Malta">Malta</SelectItem>
                      <SelectItem value="Hungary">Hungary</SelectItem>
                      <SelectItem value="Lithuania">Lithuania</SelectItem>
                      <SelectItem value="Latvia">Latvia</SelectItem>
                      <SelectItem value="Bulgaria">Bulgaria</SelectItem>
                      <SelectItem value="Georgia">Georgia</SelectItem>
                      <SelectItem value="Russia">Russia</SelectItem>
                      <SelectItem value="Austria">Austria</SelectItem>
                      <SelectItem value="Uzbekistan">Uzbekistan</SelectItem>
                      <SelectItem value="Turkey">Turkey</SelectItem>
                      <SelectItem value="Netherland">Netherland</SelectItem>
                      <SelectItem value="Denmark">Denmark</SelectItem>
                      <SelectItem value="Greece">Greece</SelectItem>
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
              name="meeting_format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Formats*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="py-5">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose meeting format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Online">Online</SelectItem>
                      <SelectItem value="Offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
          <div>
            <FormField
              control={form.control}
              name="apply_for"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Apply for*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 gap-y-3"
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message*</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Write Your Massage"
                      {...field}
                      rows={5}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            onCheckedChange={() => setIsNotAccepted(!isNotAccepted)}
          />
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
          <Button type="submit" disabled={isNotAccepted}>
            Get start for free Consultation
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ConsultationForm;

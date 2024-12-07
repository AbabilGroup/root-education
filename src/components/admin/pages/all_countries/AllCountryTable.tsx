"use client";

import { Button } from "@/components/ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { apiUrl } from "@/secrets";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Study_Country } from "@/types/country";

const AllCountryTable = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => await axios.get(`${apiUrl}/study_country/`),
  });

  const { error, isSuccess, isError, isPending, mutate } = useMutation<
    AxiosResponse,
    unknown,
    string
  >({
    mutationFn: async (slug) =>
      await axios.delete(`${apiUrl}/study_country/${slug}/`),
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("Country deleted successfully.");
    }

    if (isError) {
      toast.error(`Could not delete the country`);
    }

    if (error) {
      console.error(error);
    }
  }, [error, isSuccess, isError, refetch]);

  if (isLoading)
    return (
      <div className="space-y-5">
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[50px] w-full" />
      </div>
    );

  return (
    <div>
      <Table className="border-2">
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="border-2 font-bold">Country</TableHead>
            <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead>
            <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((country: Study_Country) => (
            <TableRow key={country.slug}>
              <TableCell className="border-2 font-medium">
                <Link
                  className="hover:underline"
                  href={`/countries/${country.route_slug}`}
                >
                  {country.country}
                </Link>
              </TableCell>
              <TableCell className="border-2">
                <div className="flex items-center justify-center">
                  <Link
                    href={`/admin/edit-study-country/${country.route_slug}`}
                  >
                    <Button className="bg-yellow-500 text-white">Edit</Button>
                  </Link>
                </div>
              </TableCell>
              <TableCell className="border-2">
                <div className="flex items-center justify-center">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="bg-red-500 text-white">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your country and remove the country data from
                          our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          disabled={isPending}
                          onClick={() => mutate(country.slug)}
                        >
                          {isPending ? "Processing..." : "Continue"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllCountryTable;

"use client";

import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
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
import { University } from "@/types/university";
import { useSearchParams } from "next/navigation";

const AllUniversityTable = () => {
  const searchParams = useSearchParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["universities", searchParams.toString()],
    queryFn: async () => {
      const paramsString = searchParams.toString();
      const url = `${apiUrl}/all_university/${paramsString ? `?${paramsString}` : ""}`;
      const response = await axios.get(url);
      return response;
    },
  });

  const { isSuccess, isError, isPending, mutate } = useMutation<
    AxiosResponse,
    unknown,
    string
  >({
    mutationFn: async (slug) =>
      await axios.delete(`${apiUrl}/all_university/${slug}/`),
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("University deleted successfully.");
    }

    if (isError) {
      toast.error(`Could not delete the university`);
    }
  }, [isSuccess, isError, refetch]);

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
      </div>
    );

  return (
    <Table className="border-2">
      <TableHeader>
        <TableRow className="font-bold">
          <TableHead className="border-2 font-bold">University</TableHead>
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
        {data?.data?.results?.map((university: University) => (
          <TableRow key={university.slug}>
            <TableCell className="border-2 font-medium">
              <Link
                className="hover:underline"
                href={`/universities/${university.slug}`}
              >
                {university?.name}
              </Link>
            </TableCell>
            <TableCell className="border-2 font-medium">
              {university?.short_info?.country}
            </TableCell>
            <TableCell className="border-2">
              <div className="flex items-center justify-center">
                <Link href={`/admin/edit-university/${university?.slug}`}>
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
                        delete your university and remove the university data
                        from your servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={isPending}
                        onClick={() => mutate(university.slug as string)}
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
  );
};

export default AllUniversityTable;

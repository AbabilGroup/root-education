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
import Image from "next/image";

const AllTeamsTable = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => await axios.get(`${apiUrl}/team/`),
  });

  const {  isSuccess, isError, isPending } = useMutation<
    AxiosResponse,
    unknown,
    string
  >({
    mutationFn: async (slug) => await axios.delete(`${apiUrl}/team/${slug}/`),
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("Team deleted successfully.");
    }

    if (isError) {
      toast.error(`Could not delete the team`);
    }

  
  }, [ isSuccess, isError, refetch]);

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
            <TableHead className="border-2 font-bold">Photo</TableHead>
            <TableHead className="border-2 font-bold">Name</TableHead>
            <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead>
            <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.results?.map(
            (member: {
              id: number;
              social_links: {
                platform: string;
                url: string;
              }[];
              name: string;
              photo: string;
              designation: string;
            }) => (
              <TableRow key={member.id}>
                <TableCell className="border-2">
                  <Image
                    className="size-[50px] rounded-full border"
                    src={member.photo}
                    height={50}
                    width={50}
                    alt={member.name}
                  />
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {member.name}
                </TableCell>
                <TableCell className="border-2">
                  <div className="flex items-center justify-center">
                    <Link href="#">
                      <Button className="bg-yellow-500 text-white">Edit</Button>
                    </Link>
                  </div>
                </TableCell>
                <TableCell className="border-2">
                  <div className="flex items-center justify-center">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button className="bg-red-500 text-white">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your team member and remove the team member
                            data from your servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() => {}}
                          >
                            {isPending ? "Processing..." : "Continue"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllTeamsTable;

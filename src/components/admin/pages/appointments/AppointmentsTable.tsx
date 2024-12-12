"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { apiUrl } from "@/secrets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect } from "react";
// import { toast } from "sonner";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AppointmentsTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => await axios.get(`${apiUrl}/appointment/`),
  });

  //   const { isSuccess, isError } = useMutation<AxiosResponse, unknown, string>({
  //     mutationFn: async (slug) =>
  //       await axios.delete(`${apiUrl}/study_country/${slug}/`),
  //   });

  //   useEffect(() => {
  //     if (isSuccess) {
  //       refetch();
  //       toast.success("Country deleted successfully.");
  //     }

  //     if (isError) {
  //       toast.error(`Could not delete the country`);
  //     }
  //   }, [isSuccess, isError, refetch]);

  console.log(data);

  if (isLoading)
    return (
      <div className="space-y-5">
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
        <Skeleton className="h-[40px] w-full" />
      </div>
    );

  return (
    <div>
      <Table className="border-2">
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="border-2 font-bold">Name</TableHead>
            <TableHead className="border-2 font-bold">Email</TableHead>
            <TableHead className="border-2 font-bold">Phone</TableHead>
            <TableHead className="border-2 font-bold">Designation</TableHead>
            <TableHead className="border-2 font-bold">Meeting Format</TableHead>
            <TableHead className="border-2 font-bold">Applied For</TableHead>
            <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead>
            {/* <TableHead className="border-2 text-center font-bold">
              Action
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.results?.map(
            (appointment: {
              id: string;
              name: string;
              email: string;
              phone_number: string;
              destination: string;
              meeting_format: string;
              apply_for: string;
              message: string;
            }) => (
              <TableRow key={appointment.id}>
                <TableCell className="border-2 font-medium">
                  {appointment.name}
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {appointment.email}
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {appointment.phone_number}
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {appointment.destination}
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {appointment.meeting_format}
                </TableCell>
                <TableCell className="border-2 font-medium">
                  {appointment.apply_for}
                </TableCell>
                <TableCell className="border-2">
                  <div className="flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger>
                        <Button>Click to see the message</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white">
                        <DialogHeader>
                          <DialogTitle className="mb-5 font-medium">
                            Message of{" "}
                            <span className="font-bold">
                              {appointment.name}
                            </span>
                          </DialogTitle>
                          <DialogDescription>
                            {appointment.message}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
                {/* <TableCell className="border-2">
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
                            delete your country and remove the country data from
                            our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() => mutate(contact.slug)}
                          >
                            {isPending ? "Processing..." : "Continue"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell> */}
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppointmentsTable;

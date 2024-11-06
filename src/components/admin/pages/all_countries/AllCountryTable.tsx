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
// import { apiUrl } from "@/secrets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllCountryTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => axios.get(`http://103.17.37.8:8004/api/study_country/`),
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
        <Skeleton className="h-[20px] rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">All country list</h2>
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
          {data?.data?.results?.map(
            (country: { id: number; country: string; slug: string }) => (
              <TableRow key={country.id}>
                <TableCell className="border-2 font-medium">
                  {country.country}
                </TableCell>
                <TableCell className="border-2">
                  <div className="flex items-center justify-center">
                    <Button className="bg-yellow-500 text-white">Edit</Button>
                  </div>
                </TableCell>
                <TableCell className="border-2">
                  <div className="flex items-center justify-center">
                    <Button className="bg-red-500 text-white">Delete</Button>
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

export default AllCountryTable;

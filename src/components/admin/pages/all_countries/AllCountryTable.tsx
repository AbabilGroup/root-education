"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Root } from "@/types/country";
import Link from "next/link";

const AllCountryTable = ({ countries }: { countries: Root[] }) => {
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
          {countries?.map((country) => (
            <TableRow key={country.slug}>
              <TableCell className="border-2 font-medium">
                {country.country}
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
                  <Button className="bg-red-500 text-white">Delete</Button>
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

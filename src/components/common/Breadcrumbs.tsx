"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalizeAndRemoveHyphens } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const location = usePathname();

  const parts = location.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>

          {parts.map((part) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={part}>
                <Link href={`/${part}`}>
                  {capitalizeAndRemoveHyphens(part)}
                </Link>
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;

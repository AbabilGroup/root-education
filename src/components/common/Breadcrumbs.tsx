"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalizeAndRemoveHyphens } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const location = usePathname();

  const parts = location.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {parts.map((part) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={part}>
                <BreadcrumbLink href={`/${part}`}>
                  {capitalizeAndRemoveHyphens(part)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}

          {/* <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;

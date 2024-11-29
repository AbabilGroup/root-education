"use client";

import { Plus, List, LayoutDashboardIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { apiBaseUrl } from "@/secrets";
import { useEffect } from "react";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "All Countries",
    url: "/admin/all-countries",
    icon: List,
  },
  {
    title: "Add Study Country",
    url: "/admin/add-study-country",
    icon: Plus,
  },
  {
    title: "All Universities",
    url: "/admin/all-universities",
    icon: List,
  },
  {
    title: "Add University",
    url: "/admin/add-university",
    icon: Plus,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { mutate, isSuccess, data, isError, error } =
    useMutation<AxiosResponse>({
      mutationFn: () => {
        const token = Cookies.get("token");

        console.log(token);

        return axios.post(
          `${apiBaseUrl}/auth/token/logout/`,
          {}, // Empty body since it's a POST request with no data
          {
            headers: {
              Authorization: `Token ${token}`, // Add token to Authorization header
            },
          },
        );
      },
    });

  const handleLogout = () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.remove("token");
      router.push("/admin/login");
      toast.success("Logout successful");
    }

    if (isError) {
      toast.error("Could not logout. Something went wrong!");
    }

    if (error) {
      console.error(error);
    }
  }, [isSuccess, isError, router, error]);

  console.log(data);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Root Education Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`font-medium ${pathname === item.url ? "bg-sidebar-accent" : ""}`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span
                    className="cursor-pointer font-medium"
                    onClick={handleLogout}
                  >
                    <IoLogOut className="text-xl" />
                    <span>Logout</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

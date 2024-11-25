"use client";

import { Plus, List } from "lucide-react";

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
import { useRouter } from "next/navigation";

const items = [
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

  const handleLogout = () => {
    // Clear the token cookie
    Cookies.remove("token");

    // Redirect to login page
    router.push("/admin/login");
  };
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
                    <Link href={item.url} className="font-medium">
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

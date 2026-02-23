"use client";

import * as React from "react";
import {
  Smartphone,
  Car,
  Cpu,
  CircuitBoard,
  Factory,
  Globe2,
  Server,
  MemoryStick,
  Command,
  Settings,
  HelpCircle,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Navigation data based on dashboard sections
const data = {
  user: {
    name: "analyst",
    email: "analyst@semianalysis.com",
    avatar: "/avatars/analyst.png",
  },
  navMain: [
    {
      title: "Smartphones",
      url: "#smartphones",
      icon: Smartphone,
      isActive: true,
    },
    {
      title: "Automotive",
      url: "#automotive",
      icon: Car,
    },
    {
      title: "Memory",
      url: "#memory",
      icon: Cpu,
    },
    {
      title: "PCB",
      url: "#pcb",
      icon: CircuitBoard,
    },
    {
      title: "WFE",
      url: "#wfe",
      icon: Factory,
    },
    {
      title: "China",
      url: "#china",
      icon: Globe2,
    },
    {
      title: "Data Center",
      url: "#datacenter",
      icon: Server,
    },
    {
      title: "Memory IC",
      url: "#memoryic",
      icon: MemoryStick,
    },
    {
      title: "NEV/ICE",
      url: "#nev",
      icon: Car,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Semianalysis</span>
                  <span className="truncate text-xs">Chipbook Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <HelpCircle className="size-4" />
                <span>Help</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings className="size-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

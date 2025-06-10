import React from "react"
import {
  User2,
  ChevronUp,
  FileVideo,
  PanelLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"

// Menu items for the main navigation
const mainNavItems = [
  {
    title: "Player",
    url: "/players",
    icon: FileVideo,
  },
]


export function AppSidebar() {
  const location = useLocation();
  const { state, toggleSidebar } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center">
          {isExpanded ? (
            <div className="w-full flex items-center justify-between py-2">
              <img
                src="https://bunny-wp-pullzone-rltketicfk.b-cdn.net/wp-content/uploads/2024/10/Performoo-logo.png"
                alt="Performoo Logo"
                className="h-8 w-auto object-contain"
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleSidebar()}>
                <PanelLeft onClick={() => toggleSidebar()} className="size-4 text-sidebar-foreground hover:bg-foreground" />
              </Button>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center gap-4">
              <img
                src="https://media-b.performoo.com/logos-performoo/icons/orange-48-48.png"
                alt="Performoo Icon"
                className="h-10 w-10 object-contain"
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleSidebar()}>
                <PanelLeft onClick={() => toggleSidebar()} className="size-4 text-sidebar-foreground" />
              </Button>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`px-2 py-1.5 ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
                    >
                      <a href={item.url}>
                        <item.icon className="size-5" />
                        <span className="ml-2 font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <User2 className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs">john@example.com</span>
                  </div>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

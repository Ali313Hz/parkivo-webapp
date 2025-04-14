"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export function Dashboard() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full bg-background">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  )
}

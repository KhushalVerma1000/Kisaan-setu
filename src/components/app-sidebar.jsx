import Image from "next/image"
import {   ReceiptIndianRupee,ShoppingCart , Layers ,ChartNoAxesCombined ,CircleUserRound,WalletCards,BookOpen,LogOut , LayoutDashboard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Sales",
    url: "#",
    icon:  ReceiptIndianRupee,
  },
  {
    title: "Purchases",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Stock",
    url: "#",
    icon: Layers,
  },
  {
    title: "Ledger",
    url: "#",
    icon: CircleUserRound,
  },
  {
    title: "Report",
    url: "#",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Cashbook",
    url: "#",
    icon: WalletCards,
  },
  {
    title: "Registers",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Log out",
    url: "#",
    icon: LogOut,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-[hsl(var(--sidebar-background))] border-[hsl(var(--sidebar-border))]">
     <SidebarHeader></SidebarHeader>
      <SidebarContent>
      <div className="p-4 flex items-center gap-2 border-b border-[hsl(var(--sidebar-border))]">
        {/* Replace with your actual logo or use a placeholder */}
        <div className="w-8 h-8 rounded-md bg-[hsl(var(--sidebar-primary))] flex items-center justify-center">
       <Image 
    src="/Logo.jpeg"
    alt="Company Logo"
    width={32}
    height={32}
    className="object-contain"
  />
        </div>
        <span className="font-bold text-lg text-[hsl(var(--sidebar-foreground))]">Kisaan Setu</span>
      </div>
        <SidebarGroup>
        
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full flex items-center gap-3 text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] focus-visible:bg-[hsl(var(--sidebar-accent))] focus-visible:ring-1 focus-visible:ring-[hsl(var(--sidebar-ring))]"
                  >
                    <a href={item.url}>
                      <item.icon className="h-5 w-5 text-[hsl(var(--sidebar-foreground))]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
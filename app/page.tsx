"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SmartphonesSection } from "./sections/SmartphonesSection";
import { AutomotiveSection } from "./sections/AutomotiveSection";
import { MemorySection } from "./sections/MemorySection";
import { PCBSection } from "./sections/PCBSection";
import { WFESection } from "./sections/WFESection";
import { ChinaSection } from "./sections/ChinaSection";
import { DataCenterSection } from "./sections/DataCenterSection";
import { MemoryICSections } from "./sections/MemoryICSections";
import { AutoSection } from "./sections/AutoSection";

const sections: Record<string, { component: React.ComponentType; label: string }> = {
  smartphones: { component: SmartphonesSection, label: "Smartphones" },
  automotive: { component: AutomotiveSection, label: "Automotive" },
  memory: { component: MemorySection, label: "Memory" },
  pcb: { component: PCBSection, label: "PCB" },
  wfe: { component: WFESection, label: "WFE" },
  china: { component: ChinaSection, label: "China" },
  datacenter: { component: DataCenterSection, label: "Data Center" },
  memoryic: { component: MemoryICSections, label: "Memory IC" },
  nev: { component: AutoSection, label: "NEV/ICE" },
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("smartphones");

  useEffect(() => {
    // Handle hash changes for navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sections[hash]) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const ActiveComponent = sections[activeSection]?.component || SmartphonesSection;
  const activeLabel = sections[activeSection]?.label || "Smartphones";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Semianalysis</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{activeLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-4 p-4">
          <ActiveComponent />

          {/* Data Sources Footer */}
          <footer className="mt-8 pt-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Public Data Sources</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="https://www.census.gov/foreign-trade/data/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      US Census Bureau - International Trade Database
                    </a>
                  </li>
                  <li>
                    <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      FRED - Federal Reserve Economic Data
                    </a>
                  </li>
                  <li>
                    <a href="https://comtrade.un.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      UN Comtrade - International Trade Statistics
                    </a>
                  </li>
                  <li>
                    <a href="https://www.trade.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      ITA - International Trade Administration
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Country Customs Sources</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      China Customs - Import/Export Statistics
                    </a>
                  </li>
                  <li>
                    <a href="https://unipass.customs.go.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      Korea Customs Service - Trade Data
                    </a>
                  </li>
                  <li>
                    <a href="https://web02.mof.gov.tw/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      Taiwan Ministry of Finance - Customs Administration
                    </a>
                  </li>
                  <li>
                    <a href="https://www.customs.go.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                      Japan Customs - Trade Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center">
              This dashboard uses simulated data for demonstration. Connect to real APIs for production use.
            </p>
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

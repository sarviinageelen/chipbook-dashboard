"use client";

import { ChartCard } from '../components/ChartCard';
import { LineChart } from '../components/LineChart';
import { DualAxisChart } from '../components/DualAxisChart';
import {
  taiwanDRAMInventoryData,
  koreaMemoryExportsData,
  koreaMemoryASPData,
} from '../data/chartData';
import { Cpu, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MemorySection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Cpu className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Memory Trackers</h2>
      </div>

      {/* Monthly Updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Korea Memory Exports</span>
            </div>
            <p className="text-2xl font-bold">+41%</p>
            <p className="text-xs text-muted-foreground">Year over Year (HBM Demand)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              <span className="text-sm text-muted-foreground">Taiwan DRAM Inventory</span>
            </div>
            <p className="text-2xl font-bold">-11%</p>
            <p className="text-xs text-muted-foreground">Month over Month (4th consecutive decline)</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard 
          title="Taiwan DRAM Inventory" 
          description="Volume and Value trends over time"
          badge="Volume & Value"
        >
          <DualAxisChart
            data={taiwanDRAMInventoryData}
            barDataKey="volume"
            lineDataKey="value"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Volume (M pcs)"
            secondaryYAxisLabel="Value ($M)"
          />
        </ChartCard>

        <ChartCard 
          title="South Korea Memory IC Exports" 
          description="Export value and Year-over-Year change"
          badge="Export Value"
        >
          <DualAxisChart
            data={koreaMemoryExportsData}
            barDataKey="value"
            lineDataKey="yoyChange"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Value ($M)"
            secondaryYAxisLabel="YoY %"
          />
        </ChartCard>

        <ChartCard 
          title="South Korea Memory IC Exports ASP" 
          description="Average Selling Price and Year-over-Year change"
          badge="Pricing"
          className="lg:col-span-2"
        >
          <DualAxisChart
            data={koreaMemoryASPData}
            barDataKey="asp"
            lineDataKey="yoyChange"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="ASP ($/kg)"
            secondaryYAxisLabel="YoY %"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://unipass.customs.go.kr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Korea Customs Service</a>,{" "}
            <a href="https://web02.mof.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Taiwan Ministry of Finance Customs Administration</a>. 
            Memory IC data represents HS 854232 (Memory Chips) trade statistics.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$000660.KRX</Badge>
            <Badge variant="outline">$MU</Badge>
            <Badge variant="outline">$SEC</Badge>
            <Badge variant="outline">$2344.TW</Badge>
            <Badge variant="outline">$2048.TW</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

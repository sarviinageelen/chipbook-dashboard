"use client";

import { ChartCard } from '../components/ChartCard';
import { StackedBarChart } from '../components/StackedBarChart';
import { DualAxisChart } from '../components/DualAxisChart';
import {
  pcbImportsData,
  taiwanPCBRevenueData,
} from '../data/chartData';
import { CircuitBoard, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PCBSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <CircuitBoard className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">PCB Trackers</h2>
      </div>

      {/* Monthly Updates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Global PCB Imports</span>
            </div>
            <p className="text-2xl font-bold">+14%</p>
            <p className="text-xs text-muted-foreground">Year over Year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">YTD Growth</span>
            </div>
            <p className="text-2xl font-bold">+21%</p>
            <p className="text-xs text-muted-foreground">Year to Date</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Taiwan PCB Sales</span>
            </div>
            <p className="text-2xl font-bold">+3%</p>
            <p className="text-xs text-muted-foreground">YoY | +15% YTD</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard 
          title="Printed Circuit Board Imports" 
          description="Global PCB imports by country (12-month moving average)"
          badge="12mma"
        >
          <StackedBarChart
            data={pcbImportsData}
            dataKeys={['china', 'taiwan', 'korea', 'japan', 'usa']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))']}
            yAxisLabel="Value ($M)"
          />
        </ChartCard>

        <ChartCard 
          title="Taiwan PCB Suppliers Monthly Revenue" 
          description="Total revenue and Year-over-Year change (12-month moving average)"
          badge="12mma"
        >
          <DualAxisChart
            data={taiwanPCBRevenueData}
            barDataKey="total"
            lineDataKey="yoyChange"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Revenue ($M)"
            secondaryYAxisLabel="YoY %"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://www.census.gov/foreign-trade/data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">US Census Bureau</a>,{" "}
            <a href="https://ec.europa.eu/eurostat/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eurostat</a>,{" "}
            <a href="https://www.customs.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Japan Customs</a>,{" "}
            <a href="https://web02.mof.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Taiwan Ministry of Finance</a>. 
            PCB data represents HS 8534 (Printed Circuits) trade statistics. 
            Taiwan suppliers include Kinsus, Unimicron, ZDT, Tripod, Compeq, WUS, NanyaPCB, Chin Poon.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$4985.TW</Badge>
            <Badge variant="outline">$AT&S</Badge>
            <Badge variant="outline">$3037.TW</Badge>
            <Badge variant="outline">$4062.JP</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

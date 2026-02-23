"use client";

import { ChartCard } from '../components/ChartCard';
import { DualAxisChart } from '../components/DualAxisChart';
import { StackedBarChart } from '../components/StackedBarChart';
import { LineChart } from '../components/LineChart';
import {
  taiwanMemoryImportsData,
  memoryExportsByCountryData,
  memoryExportsYoYData,
} from '../data/chartData';
import { MemoryStick, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MemoryICSections() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <MemoryStick className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Memory Section</h2>
      </div>

      {/* Taiwan Memory IC Imports */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Taiwan Memory IC Imports from Korea</h3>

        <Card>
          <CardContent className="pt-6">
            <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
            <p className="text-2xl font-bold">+92%</p>
            <p className="text-xs text-muted-foreground">YoY growth | +13% sequentially - HBM consumption at TSMC</p>
          </CardContent>
        </Card>

        <ChartCard title="Taiwan Memory IC Imports from Korea" description="Monthly value of memory IC imports" badge="HBM Demand">
          <DualAxisChart
            data={taiwanMemoryImportsData}
            barDataKey="value"
            lineDataKey="yoyChange"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Value (USD M)"
            secondaryYAxisLabel="YoY %"
          />
        </ChartCard>
      </div>

      {/* Memory IC Exports by Country */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-semibold">Memory IC Exports by Country</h3>

        <Card>
          <CardContent className="pt-6">
            <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
            <p className="text-2xl font-bold">+46%</p>
            <p className="text-xs text-muted-foreground">Total China/Korea/Taiwan Memory IC Exports ATH</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard title="Memory IC Exports by Country" description="Monthly export value by country" badge="Export Value">
            <StackedBarChart
              data={memoryExportsByCountryData}
              dataKeys={['china', 'korea', 'taiwan']}
              colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']}
              yAxisLabel="Value (USD M)"
            />
          </ChartCard>

          <ChartCard title="Memory IC Exports YoY%" description="Year-over-year growth by country" badge="Growth Rate">
            <LineChart
              data={memoryExportsYoYData}
              dataKeys={['china', 'korea', 'taiwan']}
              colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']}
              yAxisLabel="YoY %"
            />
          </ChartCard>
        </div>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://unipass.customs.go.kr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Korea Customs Service</a>,{" "}
            <a href="https://web02.mof.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Taiwan Ministry of Finance</a>,{" "}
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs</a>.
            Related tickers: 000660.KRX, SEC, MU, 2344.TW, 2048.TW
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$000660.KRX</Badge>
            <Badge variant="outline">$SEC</Badge>
            <Badge variant="outline">$MU</Badge>
            <Badge variant="outline">$2344.TW</Badge>
            <Badge variant="outline">$2048.TW</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

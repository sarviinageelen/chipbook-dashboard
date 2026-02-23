"use client";

import { ChartCard } from '../components/ChartCard';
import { StackedBarChart } from '../components/StackedBarChart';
import { wfeImportsData } from '../data/chartData';
import { Factory, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function WFESection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Factory className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Wafer Fab Equipment Imports</h2>
      </div>

      {/* Monthly Updates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Total WFE Imports</span>
            </div>
            <p className="text-2xl font-bold">+15%</p>
            <p className="text-xs text-muted-foreground">Year over Year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Taiwan WFE</span>
            </div>
            <p className="text-2xl font-bold">+96%</p>
            <p className="text-xs text-muted-foreground">Latest Month YoY</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">China WFE</span>
            </div>
            <p className="text-2xl font-bold">+12%</p>
            <p className="text-xs text-muted-foreground">Latest Month YoY</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <ChartCard 
        title="Total WFE Imports" 
        description="Wafer Fab Equipment imports by country with YoY growth rate"
        badge="Equipment"
      >
        <StackedBarChart
          data={wfeImportsData}
          dataKeys={['japan', 'china', 'korea', 'taiwan', 'us']}
          colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))']}
          yAxisLabel="Value ($M)"
        />
      </ChartCard>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://www.census.gov/foreign-trade/data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">US Census Bureau</a>,{" "}
            <a href="https://www.customs.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Japan Customs</a>,{" "}
            <a href="https://unipass.customs.go.kr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Korea Customs Service</a>,{" "}
            <a href="https://web02.mof.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Taiwan Ministry of Finance</a>,{" "}
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs</a>.
            WFE imports are a leading indicator of semiconductor capacity growth with 6-18 month lead times.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$AMAT</Badge>
            <Badge variant="outline">$TOELY</Badge>
            <Badge variant="outline">$LRCX</Badge>
            <Badge variant="outline">$ASML</Badge>
            <Badge variant="outline">$KLAC</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { ChartCard } from '../components/ChartCard';
import { DualAxisChart } from '../components/DualAxisChart';
import { connectorImportsData, taiwanServerData } from '../data/chartData';
import { Server, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function DataCenterSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Server className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Data Center Supply Chain</h2>
      </div>

      {/* Connector Imports */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+74%</p>
              <p className="text-xs text-muted-foreground">Connector Imports YoY</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+84%</p>
              <p className="text-xs text-muted-foreground">YTD Growth</p>
            </CardContent>
          </Card>
        </div>

        <ChartCard title="Connector Imports to the US" description="Monthly value of connectors" badge="Key Component">
          <DualAxisChart
            data={connectorImportsData}
            barDataKey="value"
            lineDataKey="yoyChange"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Value (USD M)"
            secondaryYAxisLabel="YoY %"
          />
        </ChartCard>
      </div>

      {/* Taiwan Server Production */}
      <div className="space-y-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+44%</p>
              <p className="text-xs text-muted-foreground">Unit Production YoY</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+39%</p>
              <p className="text-xs text-muted-foreground">ASP Growth YoY</p>
            </CardContent>
          </Card>
        </div>

        <ChartCard title="Taiwan Server Production" description="Monthly server production" badge="Production">
          <DualAxisChart
            data={taiwanServerData}
            barDataKey="units"
            lineDataKey="asp"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Units (k)"
            secondaryYAxisLabel="ASP (USD)"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://www.census.gov/foreign-trade/data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">US Census Bureau</a>,{" "}
            <a href="https://www.moea.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Taiwan Ministry of Economic Affairs</a>.
            Related tickers: NVDA, AMD, INTC, AVGO, DELL, SMCI
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$NVDA</Badge>
            <Badge variant="outline">$AMD</Badge>
            <Badge variant="outline">$INTC</Badge>
            <Badge variant="outline">$AVGO</Badge>
            <Badge variant="outline">$DELL</Badge>
            <Badge variant="outline">$SMCI</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { ChartCard } from '../components/ChartCard';
import { StackedBarChart } from '../components/StackedBarChart';
import { autoExportsData } from '../data/chartData';
import { Car, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AutomotiveSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Car className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Automotive Exports</h2>
      </div>

      {/* Monthly Updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Global Auto Exports</span>
            </div>
            <p className="text-2xl font-bold">+2%</p>
            <p className="text-xs text-muted-foreground">Year over Year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Month over Month</span>
            </div>
            <p className="text-2xl font-bold">+4%</p>
            <p className="text-xs text-muted-foreground">MoM Growth</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <ChartCard 
        title="Total Auto Exports by Country" 
        description="Global auto export data by country measured in USD (Millions)"
        badge="USD Value"
      >
        <StackedBarChart
          data={autoExportsData}
          dataKeys={['china', 'usa', 'japan', 'korea']}
          colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))']}
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
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs</a>,{" "}
            <a href="https://comtrade.un.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UN Comtrade</a>.
            Data represents HS 87 (Vehicles and Parts) classification.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$TXN</Badge>
            <Badge variant="outline">$STM</Badge>
            <Badge variant="outline">$IFX</Badge>
            <Badge variant="outline">$ON</Badge>
            <Badge variant="outline">$NXP</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

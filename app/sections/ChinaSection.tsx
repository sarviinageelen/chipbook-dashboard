"use client";

import { ChartCard } from '../components/ChartCard';
import { LineChart } from '../components/LineChart';
import {
  chinaFrontEndData,
  chinaEtchData,
} from '../data/chartData';
import { Globe2, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ChinaSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Globe2 className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">China Section</h2>
      </div>

      {/* China Front-End Equipment */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">China Front-End Equipment Imports</h3>

        {/* Monthly Updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Total Equipment</span>
              </div>
              <p className="text-2xl font-bold">+14%</p>
              <p className="text-xs text-muted-foreground">Deposition/Lithography/Etch</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                <span className="text-sm text-muted-foreground">Deposition</span>
              </div>
              <p className="text-2xl font-bold">-6%</p>
              <p className="text-xs text-muted-foreground">Year over Year</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Etch</span>
              </div>
              <p className="text-2xl font-bold">+2%</p>
              <p className="text-xs text-muted-foreground">Year over Year</p>
            </CardContent>
          </Card>
        </div>

        <ChartCard 
          title="China Front-End Equipment Imports (12mma)" 
          description="Monthly imports of key Chip Manufacturing Fab Equipment by type"
          badge="12mma"
        >
          <LineChart
            data={chinaFrontEndData}
            dataKeys={['deposition', 'lithography', 'etch']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']}
            yAxisLabel="Value ($M)"
          />
        </ChartCard>
      </div>

      {/* China Etch Equipment */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-semibold">China Etch Equipment Imports by Country</h3>

        {/* Monthly Update */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">YTD China Etch Equipment Imports</span>
            </div>
            <p className="text-2xl font-bold">+48%</p>
            <p className="text-xs text-muted-foreground">Complementing DUV lithography stockpiling</p>
          </CardContent>
        </Card>

        <ChartCard 
          title="China Etch Equipment Imports" 
          description="Monthly value of etch equipment imports into China by source country"
          badge="By Geography"
        >
          <LineChart
            data={chinaEtchData}
            dataKeys={['japan', 'malaysia', 'taiwan', 'usa']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))']}
            yAxisLabel="Value ($M)"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs</a>,{" "}
            Global Trade Tracker. Equipment data represents semiconductor manufacturing equipment 
            by HS 8486 classification. Etch equipment imports prominently coming from{" "}
            <a href="https://www.customs.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Japan</a>{" "}
            and Malaysia.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$AMAT</Badge>
            <Badge variant="outline">$LRCX</Badge>
            <Badge variant="outline">$TOELY</Badge>
            <Badge variant="outline">$KLAC</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { ChartCard } from '../components/ChartCard';
import { LineChart } from '../components/LineChart';
import { StackedBarChart } from '../components/StackedBarChart';
import { DualAxisChart } from '../components/DualAxisChart';
import {
  usSmartphoneUnitImportsData,
  usSmartphoneImportsData,
  chinaSmartphoneExportsData,
} from '../data/chartData';
import { Smartphone, TrendingDown, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function SmartphonesSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Smartphone className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Smartphones</h2>
      </div>

      {/* Monthly Updates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              <span className="text-sm text-muted-foreground">USA Smartphone Imports</span>
            </div>
            <p className="text-2xl font-bold">-13%</p>
            <p className="text-xs text-muted-foreground">Year over Year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">USA Imports from China</span>
            </div>
            <p className="text-2xl font-bold">25%</p>
            <p className="text-xs text-muted-foreground">Current Market Share</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              <span className="text-sm text-muted-foreground">China Exports</span>
            </div>
            <p className="text-2xl font-bold">-4%</p>
            <p className="text-xs text-muted-foreground">Volume YoY | ASP -15%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard 
          title="US Smartphone Unit Imports" 
          description="Percentage share of China vs Ex-China imports"
          badge="Geographic Mix"
        >
          <LineChart
            data={usSmartphoneUnitImportsData}
            dataKeys={['china', 'exChina']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))']}
            yAxisLabel="Percentage (%)"
          />
        </ChartCard>

        <ChartCard 
          title="US Smartphone Imports by Country" 
          description="Monthly imports from China, India, and Vietnam (in millions)"
          badge="Unit Volume"
        >
          <StackedBarChart
            data={usSmartphoneImportsData}
            dataKeys={['china', 'india', 'vietnam']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))']}
            yAxisLabel="Units (M)"
          />
        </ChartCard>

        <ChartCard 
          title="China Smartphone Exports" 
          description="Units and Average Selling Price trends"
          badge="Volume & Price"
          className="lg:col-span-2"
        >
          <DualAxisChart
            data={chinaSmartphoneExportsData}
            barDataKey="units"
            lineDataKey="asp"
            barColor="hsl(var(--chart-1))"
            lineColor="hsl(var(--chart-2))"
            yAxisLabel="Units (M)"
            secondaryYAxisLabel="ASP ($)"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="https://www.census.gov/foreign-trade/data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">US Census Bureau International Trade Database</a>,{" "}
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs Data</a>,{" "}
            <a href="https://comtrade.un.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UN Comtrade</a>.
            Data represents monthly trade statistics by HS code classification.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$AAPL</Badge>
            <Badge variant="outline">$ARM</Badge>
            <Badge variant="outline">$TSM</Badge>
            <Badge variant="outline">$QCOM</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

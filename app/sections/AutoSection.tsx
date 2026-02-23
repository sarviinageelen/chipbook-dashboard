"use client";

import { ChartCard } from '../components/ChartCard';
import { LineChart } from '../components/LineChart';
import { DualAxisChart } from '../components/DualAxisChart';
import {
  nevMarketShareData,
  chinaTotalAutoExportsData,
  chinaAutoTypeData,
  chinaNEVTypeData,
} from '../data/chartData';
import { Car, Zap, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AutoSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Car className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold">Auto Section</h2>
      </div>

      {/* NEV vs ICE Market Share */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          <h3 className="text-xl font-semibold">NEV vs ICE Market Share</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">47%</p>
              <p className="text-xs text-muted-foreground">Global NEV Market Share</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">54%</p>
              <p className="text-xs text-muted-foreground">China and Korea NEV Share</p>
            </CardContent>
          </Card>
        </div>

        <ChartCard title="ICE vs New Energy Market Share" description="Market share trends over time" badge="Market Share">
          <LineChart
            data={nevMarketShareData}
            dataKeys={['newEnergy', 'ice']}
            colors={['hsl(var(--chart-2))', 'hsl(var(--chart-1))']}
            yAxisLabel="Percentage (%)"
          />
        </ChartCard>
      </div>

      {/* China Auto */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-semibold">China Auto</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">60%</p>
              <p className="text-xs text-muted-foreground">NEV Market Share</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+106%</p>
              <p className="text-xs text-muted-foreground">Hybrid Exports YoY</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-5 w-5 text-green-500 mb-2" />
              <p className="text-2xl font-bold">+191%</p>
              <p className="text-xs text-muted-foreground">PHEV Exports YoY</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard title="China Total Auto Exports" description="Monthly total auto export value" badge="Total Exports">
            <DualAxisChart
              data={chinaTotalAutoExportsData}
              barDataKey="total"
              lineDataKey="total"
              barColor="hsl(var(--chart-1))"
              lineColor="hsl(var(--chart-1))"
              yAxisLabel="Value (USD M)"
              secondaryYAxisLabel=""
            />
          </ChartCard>

          <ChartCard title="China Auto Exports" description="ICE vs NEV export trends" badge="By Type">
            <LineChart
              data={chinaAutoTypeData}
              dataKeys={['ice', 'nev']}
              colors={['hsl(var(--chart-1))', 'hsl(var(--chart-2))']}
              yAxisLabel="Value (USD M)"
            />
          </ChartCard>
        </div>

        <ChartCard title="China NEV Exports" description="Hybrid, PHEV, and EV export breakdown" badge="NEV Breakdown">
          <LineChart
            data={chinaNEVTypeData}
            dataKeys={['hybrid', 'phev', 'ev']}
            colors={['hsl(var(--chart-1))', 'hsl(var(--chart-3))', 'hsl(var(--chart-2))']}
            yAxisLabel="Value (USD M)"
          />
        </ChartCard>
      </div>

      {/* Data Source Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Sources:</span>{" "}
            <a href="http://www.customs.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">China Customs</a>,{" "}
            <a href="https://unipass.customs.go.kr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Korea Customs Service</a>,{" "}
            <a href="https://www.customs.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Japan Customs</a>.
            Related tickers: STM, ON, IFX, NXP, COHU
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">$STM</Badge>
            <Badge variant="outline">$ON</Badge>
            <Badge variant="outline">$IFX</Badge>
            <Badge variant="outline">$NXP</Badge>
            <Badge variant="outline">$COHU</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

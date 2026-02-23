"use client";

import { useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DualAxisChartProps {
  data: any[];
  barDataKey: string;
  lineDataKey: string;
  barColor: string;
  lineColor: string;
  yAxisLabel?: string;
  secondaryYAxisLabel?: string;
  showTimeRange?: boolean;
}

export function DualAxisChart({
  data,
  barDataKey,
  lineDataKey,
  barColor,
  lineColor,
  yAxisLabel,
  secondaryYAxisLabel,
  showTimeRange = true,
}: DualAxisChartProps) {
  const [timeRange, setTimeRange] = useState('all');

  const filterDataByTimeRange = (data: any[], range: string) => {
    if (range === 'all') return data;
    const now = new Date();
    const months = parseInt(range);
    const cutoff = new Date(now.getFullYear(), now.getMonth() - months, 1);
    return data.filter((d) => new Date(d.date) >= cutoff);
  };

  const filteredData = filterDataByTimeRange(data, timeRange);

  // Default colors if CSS variables don't resolve
  const defaultColors = ['#0ea5e9', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'];
  
  const resolveColor = (c: string) => {
    if (c.includes('var(--chart-')) {
      const chartNum = c.match(/chart-(\d+)/)?.[1];
      return defaultColors[(parseInt(chartNum || '1') - 1) % defaultColors.length];
    }
    return c;
  };

  const resolvedBarColor = resolveColor(barColor);
  const resolvedLineColor = resolveColor(lineColor);

  return (
    <div className="w-full">
      {showTimeRange && (
        <div className="flex justify-end mb-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="12">1 Year</SelectItem>
              <SelectItem value="24">2 Years</SelectItem>
              <SelectItem value="36">3 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: '#737373' }}
            stroke="#d4d4d4"
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getFullYear()}`;
            }}
          />
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 12, fill: '#737373' }}
            stroke="#d4d4d4"
            label={
              yAxisLabel
                ? { value: yAxisLabel, angle: -90, position: 'insideLeft', fill: '#737373' }
                : undefined
            }
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 12, fill: '#737373' }}
            stroke="#d4d4d4"
            label={
              secondaryYAxisLabel
                ? { value: secondaryYAxisLabel, angle: 90, position: 'insideRight', fill: '#737373' }
                : undefined
            }
          />
          <Tooltip
            contentStyle={{
              borderRadius: '6px',
              border: '1px solid #e5e5e5',
              backgroundColor: '#fff',
            }}
          />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey={barDataKey}
            fill={resolvedBarColor}
            name={barDataKey.charAt(0).toUpperCase() + barDataKey.slice(1)}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey={lineDataKey}
            stroke={resolvedLineColor}
            strokeWidth={2}
            dot={false}
            name={lineDataKey.charAt(0).toUpperCase() + lineDataKey.slice(1)}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

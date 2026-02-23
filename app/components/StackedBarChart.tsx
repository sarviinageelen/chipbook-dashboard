"use client";

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StackedBarChartProps {
  data: any[];
  dataKeys: string[];
  colors: string[];
  yAxisLabel?: string;
  xAxisLabel?: string;
  showTimeRange?: boolean;
}

export function StackedBarChart({
  data,
  dataKeys,
  colors,
  yAxisLabel,
  xAxisLabel,
  showTimeRange = true,
}: StackedBarChartProps) {
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
  const resolvedColors = colors.map((c, i) => {
    if (c.includes('var(--chart-')) {
      const chartNum = c.match(/chart-(\d+)/)?.[1];
      return defaultColors[(parseInt(chartNum || '1') - 1) % defaultColors.length];
    }
    return c;
  });

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
        <BarChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
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
            tick={{ fontSize: 12, fill: '#737373' }}
            stroke="#d4d4d4"
            label={
              yAxisLabel
                ? { value: yAxisLabel, angle: -90, position: 'insideLeft', fill: '#737373' }
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
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={resolvedColors[index % resolvedColors.length]}
              name={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

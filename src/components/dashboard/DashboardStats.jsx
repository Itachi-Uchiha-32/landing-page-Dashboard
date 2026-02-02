"use client";

import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, FileText, Monitor } from "lucide-react";

// --- Internal Stat Card UI ---
const IndividualCard = ({ title, value, subtitle, icon: Icon, trend, trendLabel, chartData, color }) => {
  const gradientId = `fill-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm rounded-xl">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-0 pt-4 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
            <Icon className="h-4 w-4 text-slate-400" />
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-700 leading-none mb-1">{title}</p>
            <p className="text-[11px] text-slate-400">{subtitle}</p>
          </div>
        </div>
        <div className="text-xl font-bold text-slate-800">{value}</div>
      </CardHeader>

      <CardContent className="flex items-end justify-between p-4 pt-2">
        {/* Sparkline */}
        <div className="h-[60px] w-[60%] -ml-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={1.5}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Trend */}
        <div className="text-right">
          <p className="text-[11px] font-bold" style={{ color: color }}>
            {trend}
          </p>
          <p className="text-[10px] text-slate-400">
            {trendLabel}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// --- Main Exported Component ---
const DashboardStats = () => {
  const stats = [
    {
      title: "Tasks Completed",
      value: "22/35",
      subtitle: "22/35 completed",
      icon: Star,
      trend: "28% more",
      trendLabel: "from last week",
      color: "#6366f1",
      data: [{value: 30}, {value: 45}, {value: 35}, {value: 60}, {value: 40}, {value: 80}, {value: 50}]
    },
    {
      title: "New Tasks",
      value: "5/20",
      subtitle: "5/20 completed",
      icon: FileText,
      trend: "34% more",
      trendLabel: "from last week",
      color: "#22c55e",
      data: [{value: 20}, {value: 40}, {value: 30}, {value: 60}, {value: 40}, {value: 75}, {value: 45}]
    },
    {
      title: "Project Done",
      value: "20/30",
      subtitle: "20/30 completed",
      icon: Monitor,
      trend: "42% more",
      trendLabel: "from last week",
      color: "#f43f5e",
      data: [{value: 40}, {value: 55}, {value: 45}, {value: 80}, {value: 50}, {value: 85}, {value: 60}]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {stats.map((stat, i) => (
        <IndividualCard 
          key={i}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
          trend={stat.trend}
          trendLabel={stat.trendLabel}
          chartData={stat.data}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
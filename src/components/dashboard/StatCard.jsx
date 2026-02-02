"use client";

import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const StatCard = ({ 
  title = "Stat", 
  value = "0", 
  subtitle = "", 
  icon: Icon, // This is what's coming in as undefined
  trend = "", 
  trendLabel = "", 
  chartData = [], 
  color = "#000" 
}) => {
  // Generate a safe ID for the SVG gradient (removes spaces)
  const gradientId = `fill-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50">
            {/* DEFENSIVE CHECK: Only render Icon if it exists */}
            {Icon ? (
              <Icon className="h-5 w-5 text-slate-500" />
            ) : (
              <div className="h-5 w-5 rounded-full bg-slate-200 animate-pulse" />
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">{title}</p>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
      </CardHeader>

      <CardContent className="flex items-end justify-between pt-4">
        <div className="h-[70px] w-[65%]">
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
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="text-right pb-2">
          <p className="text-[11px] font-bold" style={{ color: color }}>
            {trend}
          </p>
          <p className="text-[10px] text-slate-400 uppercase tracking-tight">
            {trendLabel}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
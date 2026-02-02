"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function LeadsOverview() {
  const data = [
    { name: 'New', value: 20, color: '#3b82f6' }, { name: 'Contacted', value: 15, color: '#60a5fa' },
    { name: 'Qualified', value: 10, color: '#93c5fd' }, { name: 'Working', value: 18, color: '#2563eb' }
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h3 className="text-sm font-bold text-slate-700 mb-4">Leads Overview</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map(item => (
          <div key={item.name} className="flex items-center gap-2 p-1.5 border border-dashed rounded text-[10px] font-bold text-slate-500">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}} />
            {item.name} ({item.value}K)
          </div>
        ))}
      </div>
    </div>
  );
}
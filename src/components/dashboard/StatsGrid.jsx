import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

const stats = [
  { title: "Invoices Awaiting Payment", value: "45/76", sub: "$5,589 (56%)", color: "bg-blue-500", progress: 56 },
  { title: "Converted Leads", value: "48/86", sub: "52 Completed (63%)", color: "bg-orange-500", progress: 63 },
  { title: "Projects In Progress", value: "16/20", sub: "16 Completed (78%)", color: "bg-purple-500", progress: 78 },
  { title: "Conversion Rate", value: "46.59%", sub: "$2,234 (46%)", color: "bg-red-500", progress: 46 },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <Card key={i} className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold text-slate-500 uppercase">{s.title}</CardTitle>
            <MoreVertical size={14} className="text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="mt-4 h-1 w-full bg-slate-100 rounded-full">
              <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.progress}%` }} />
            </div>
            <p className="text-[10px] text-slate-400 mt-3 font-semibold">{s.sub}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
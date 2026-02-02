import { Calendar, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageHeader({ title, breadcrumb }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
        <p className="text-xs text-slate-400 font-medium mt-1">{breadcrumb}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" className="bg-white text-xs font-bold gap-2 border-slate-200">
          <Calendar size={14} className="text-slate-400" />
          FEB 01, 23 - FEB 28, 23
        </Button>
        <Button variant="outline" className="bg-white text-xs font-bold gap-2 border-slate-200">
          <Filter size={14} className="text-slate-400" />
          Filter
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-xs font-bold gap-2">
          <Plus size={14} />
          Create New
        </Button>
      </div>
    </div>
  );
}
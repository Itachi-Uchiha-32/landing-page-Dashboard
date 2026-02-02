import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

const leadsData = [
  {
    id: 1,
    name: "Archie Cantones",
    email: "archie.t@gmail.com",
    proposal: "Sent",
    date: "11/06/2023",
    status: "Completed",
    statusColor: "text-green-600 bg-green-50 border-green-100",
    image: "https://duralux-react-dashboard.vercel.app/images/avatar/2.png"
    
  },
  {
    id: 2,
    name: "Holmes Cherryman",
    email: "holmes.c@gmail.com",
    proposal: "Sent",
    date: "14/05/2023",
    status: "In Progress",
    statusColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    id: 3,
    name: "Malanie Hanvey",
    email: "malanie.h@gmail.com",
    proposal: "Sent",
    date: "18/04/2023",
    status: "Completed",
    statusColor: "text-green-600 bg-green-50 border-green-100",
    image: "https://duralux-react-dashboard.vercel.app/images/avatar/4.png"
  },
  {
    id: 4,
    name: "Kenneth Hune",
    email: "ken.h@gmail.com",
    proposal: "Sent",
    date: "10/02/2023",
    status: "Not Interested",
    statusColor: "text-orange-600 bg-orange-50 border-orange-100",
    image: "https://duralux-react-dashboard.vercel.app/images/avatar/6.png"
  },
];

export function LeadsTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-slate-700">Latest Leads</h3>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[280px] uppercase text-[10px] font-bold text-slate-400 tracking-wider pl-6">Users</TableHead>
              <TableHead className="uppercase text-[10px] font-bold text-slate-400 tracking-wider">Proposal</TableHead>
              <TableHead className="uppercase text-[10px] font-bold text-slate-400 tracking-wider">Date</TableHead>
              <TableHead className="uppercase text-[10px] font-bold text-slate-400 tracking-wider">Status</TableHead>
              <TableHead className="text-right pr-6 uppercase text-[10px] font-bold text-slate-400 tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leadsData.map((lead) => (
              <TableRow key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs uppercase">
                      <img src={lead.image} alt={lead.name} className="w-8 h-8 rounded-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-700">{lead.name}</div>
                      <div className="text-[11px] text-slate-400">{lead.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {lead.proposal}
                  </span>
                </TableCell>
                <TableCell className="text-xs text-slate-400 font-medium">
                  {lead.date}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`text-[10px] font-bold px-2 py-0.5 border shadow-none rounded-md ${lead.statusColor}`}
                  >
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <button className="text-slate-300 hover:text-slate-500 transition-colors">
                    <MoreHorizontal size={16} className="ml-auto" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="p-4 bg-slate-50/30 border-t border-slate-100 text-center">
        <button className="text-[11px] font-bold text-blue-600 hover:underline uppercase tracking-widest">
          View All Leads
        </button>
      </div>
    </div>
  );
}
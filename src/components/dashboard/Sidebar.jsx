"use client";

import { useState } from "react";
import { 
  LayoutDashboard, Users, Briefcase, Send, CreditCard, 
  FileText, Settings, HelpCircle, Download, X, 
  ChevronDown, ShoppingCart, BarChart2, Calendar, 
  Mail, MessageSquare, ShieldCheck, Layers 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuItems = [
  { group: "Navigation", items: [
    { 
      icon: LayoutDashboard, 
      label: "Dashboards", 
      subItems: ["Analytics", "Sales", "eCommerce", "Project", "Minimal"] 
    },
    { 
      icon: Users, 
      label: "CRM", 
      active: true, 
      subItems: ["Dashboard", "Leads", "Customers", "Statistics"] 
    },
    { 
      icon: ShoppingCart, 
      label: "eCommerce", 
      subItems: ["Products", "Orders", "Customers", "Sellers"] 
    },
    { 
      icon: Briefcase, 
      label: "Projects", 
      subItems: ["Project List", "Project Grid", "Project Details"] 
    },
  ]},
  { group: "Applications", items: [
    { icon: Mail, label: "Email", subItems: ["Inbox", "Read Email", "Compose"] },
    { icon: MessageSquare, label: "Chat" },
    { icon: Calendar, label: "Calendar" },
    { icon: Send, label: "Proposals", subItems: ["List", "Create", "View"] },
  ]},
  { group: "Finance", items: [
    { icon: CreditCard, label: "Payments", subItems: ["Transactions", "Payouts"] },
    { icon: FileText, label: "Invoices", subItems: ["List", "Details", "Create"] },
  ]},
  { group: "Elements", items: [
    { icon: Layers, label: "Components", subItems: ["Buttons", "Cards", "Tabs"] },
    { icon: BarChart2, label: "Charts", subItems: ["Recharts", "ApexCharts"] },
    { icon: ShieldCheck, label: "Authentication", subItems: ["Login", "Register"] },
  ]},
  { group: "Support", items: [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help Center" },
  ]}
];

export default function Sidebar({ isOpen, onClose }) {
  // Sets CRM as expanded by default to match your active state
  const [expandedItem, setExpandedItem] = useState("CRM");

  const toggleExpand = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 border-r bg-white flex flex-col h-screen transition-transform duration-300 ease-in-out
      lg:sticky lg:top-0 lg:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}>
      {/* Brand Header */}
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tighter text-slate-800">DURALUX</h1>
        <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden text-slate-400">
          <X size={20} />
        </Button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-4 space-y-7 overflow-y-auto pt-4 scrollbar-hide">
        {menuItems.map((group) => (
          <div key={group.group}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">
              {group.group}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isExpanded = expandedItem === item.label;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.label}>
                    <button
                      onClick={() => hasSubItems && toggleExpand(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
                        item.active 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} strokeWidth={item.active || isExpanded ? 2.5 : 2} />
                        <span className="tracking-tight">{item.label}</span>
                      </div>
                      
                      {hasSubItems && (
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 text-slate-300 ${isExpanded ? "rotate-180" : ""}`} 
                        />
                      )}
                    </button>

                    {/* Expandable Sub-Menu */}
                    {hasSubItems && isExpanded && (
                      <div className="pl-12 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className={`block py-1.5 text-[13px] font-medium transition-colors ${
                              subItem === "Dashboard" && item.label === "CRM"
                              ? "text-blue-600" 
                              : "text-slate-500 hover:text-slate-900"
                            }`}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Download Center Footer Area */}
      <div className="p-4 m-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Download className="text-blue-600" size={18} />
        </div>
        <p className="text-xs font-bold text-slate-700">Downloading Center</p>
        <p className="text-[10px] text-slate-400 mt-1 mb-4">Access your offline reports</p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-bold h-8">
          DOWNLOAD NOW
        </Button>
      </div>
    </aside>
  );
}
"use client";

import { 
  Search, Bell, Moon, AlignLeft, 
  Languages, Maximize2, Clock, Plus 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Accept onMenuClick prop from layout.js
export default function Header({ onMenuClick }) {
  return (
    <header className="h-[72px] border-b border-slate-200 bg-white sticky top-0 z-30 px-6 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Toggle Sidebar Icon - Now triggers the mobile menu */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="text-slate-500 hover:bg-transparent p-0 w-auto h-auto lg:hidden"
        >
          <AlignLeft size={20} strokeWidth={2.5} />
        </Button>
        
        {/* Desktop-only hidden icon for consistency (optional) */}
        <Button variant="ghost" size="icon" className="hidden lg:flex text-slate-500 hover:bg-transparent p-0 w-auto h-auto">
          <AlignLeft size={20} strokeWidth={2.5} />
        </Button>
        
        <Button className="h-10 w-10 rounded-full bg-[#3b82f6] hover:bg-blue-600 shadow-md shadow-blue-100 flex items-center justify-center p-0 ml-2">
          <Plus size={20} strokeWidth={3} className="text-white" />
        </Button>

        <Button 
          variant="outline" 
          className="h-10 px-5 text-[11px] font-extrabold text-[#475569] uppercase tracking-wider border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors ml-1"
        >
          Mega Menu
        </Button>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="relative hidden lg:flex items-center group mr-2">
          <Input 
            placeholder="Search..." 
            className="h-10 w-[240px] bg-[#f8fafc] border-slate-100 rounded-lg pl-4 pr-10 text-sm focus-visible:ring-1 focus-visible:ring-slate-200 placeholder:text-slate-400" 
          />
          <div className="absolute right-3">
             <Search className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-10 w-10">
            <Languages size={18} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-10 w-10 hidden sm:flex">
            <Maximize2 size={18} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-10 w-10">
            <Moon size={18} strokeWidth={2} />
          </Button>

          <div className="relative">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-10 w-10">
              <Clock size={18} strokeWidth={2} />
            </Button>
            <span className="absolute top-2 right-2 w-4 h-4 bg-[#22c55e] text-[9px] text-white font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </div>

          <div className="relative">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-10 w-10">
              <Bell size={18} strokeWidth={2} />
            </Button>
            <span className="absolute top-2 right-2 w-4 h-4 bg-[#ef4444] text-[9px] text-white font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </div>
        </div>

        <div className="flex items-center border-l border-slate-200 h-10 ml-2 pl-4 cursor-pointer">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
            <img 
              src="https://i.ibb.co.com/KjKjkW3x/Screenshot-20251219-184944-2.jpg" 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

import { 
  Search, Bell, Moon, AlignLeft, 
  Languages, Maximize2, Clock, Plus, Menu
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Accept onMenuClick prop from layout.js
export default function Header({ onMenuClick }) {
  return (
    <header className="h-[64px] md:h-[72px] border-b border-slate-200 bg-white sticky top-0 z-30 px-3 md:px-6 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-1 md:gap-4">
        {/* Toggle Sidebar Icon - Visible only on Mobile */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="text-slate-500 hover:bg-transparent p-0 w-8 h-8 lg:hidden"
        >
          <Menu size={20} strokeWidth={2.5} />
        </Button>
        
        {/* AlignLeft - Visible on Desktop */}
        <Button variant="ghost" size="icon" className="hidden lg:flex text-slate-500 hover:bg-transparent p-0 w-auto h-auto">
          <AlignLeft size={20} strokeWidth={2.5} />
        </Button>
        
        {/* Action Button - Scaled for Mobile */}
        <Button className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#3b82f6] hover:bg-blue-600 shadow-md shadow-blue-100 flex items-center justify-center p-0 ml-1 md:ml-2">
          <Plus size={18} strokeWidth={3} className="text-white" />
        </Button>

        {/* Mega Menu - Hidden on Mobile */}
        <Button 
          variant="outline" 
          className="hidden md:flex h-10 px-5 text-[11px] font-extrabold text-[#475569] uppercase tracking-wider border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors ml-1"
        >
          Mega Menu
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 md:gap-4">
        
        {/* Desktop Search Bar */}
        <div className="relative hidden lg:flex items-center group mr-2">
          <Input 
            placeholder="Search..." 
            className="h-10 w-[240px] bg-[#f8fafc] border-slate-100 rounded-lg pl-4 pr-10 text-sm focus-visible:ring-1 focus-visible:ring-slate-200 placeholder:text-slate-400" 
          />
          <div className="absolute right-3">
             <Search className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
          </div>
        </div>

        {/* Mobile Search Icon */}
        <Button variant="ghost" size="icon" className="lg:hidden text-slate-600 h-9 w-9">
          <Search size={18} strokeWidth={2} />
        </Button>

        <div className="flex items-center gap-0">
          {/* Theme/Moon - Hidden on very small screens or kept per design */}
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-9 w-9 md:h-10 md:w-10">
            <Moon size={18} strokeWidth={2} />
          </Button>

          {/* Clock/History */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-9 w-9 md:h-10 md:w-10">
              <Clock size={18} strokeWidth={2} />
            </Button>
            <span className="absolute top-2 right-1.5 w-3.5 h-3.5 bg-[#22c55e] text-[8px] text-white font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </div>

          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-50 h-9 w-9 md:h-10 md:w-10">
              <Bell size={18} strokeWidth={2} />
            </Button>
            <span className="absolute top-2 right-1.5 w-3.5 h-3.5 bg-[#ef4444] text-[8px] text-white font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="flex items-center border-l border-slate-200 h-8 ml-1 pl-2 md:pl-4 cursor-pointer">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-slate-200">
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
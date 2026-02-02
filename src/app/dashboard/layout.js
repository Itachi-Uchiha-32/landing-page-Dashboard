"use client";

import { useState } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "@/components/dashboard/Footer";

export default function DashboardLayout({ children }) {
  // State to manage mobile sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white relative">
      {/* Sidebar now receives the state and a function to close it */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Mobile Overlay: Darkens the screen when sidebar is active */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header receives the function to open the sidebar */}
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
}
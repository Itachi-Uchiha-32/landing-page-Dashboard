"use client";

import { MoreHorizontal } from "lucide-react";

const events = [
  { 
    date: '20', 
    month: 'DEC', 
    title: 'React Dashboard Design', 
    time: '11:30am - 12:30pm', 
    color: 'text-emerald-600 bg-emerald-50',
    avatars: [
      "https://i.pravatar.cc/150?u=1",
      "https://i.pravatar.cc/150?u=2",
      "https://i.pravatar.cc/150?u=3",
      "https://i.pravatar.cc/150?u=10"
    ]
  },
  { 
    date: '30', 
    month: 'DEC', 
    title: 'Admin Design Concept', 
    time: '10:00am - 12:00pm', 
    color: 'text-orange-600 bg-orange-50',
    avatars: [
      "https://i.pravatar.cc/150?u=4",
      "https://i.pravatar.cc/150?u=5"
    ]
  },
  { 
    date: '17', 
    month: 'DEC', 
    title: 'Standup Team Meeting', 
    time: '09:00am - 09:30am', 
    color: 'text-blue-600 bg-blue-50',
    avatars: [
      "https://i.pravatar.cc/150?u=6",
      "https://i.pravatar.cc/150?u=7",
      "https://i.pravatar.cc/150?u=8",
      "https://i.pravatar.cc/150?u=9"
    ]
  },
];

export function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-sm text-slate-700 uppercase tracking-tight">Upcoming Schedule</h3>
        <button className="text-slate-300 hover:text-slate-500 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="space-y-8 relative">
        {/* Timeline dotted line */}
        <div className="absolute left-[22px] top-2 bottom-2 border-l border-dashed border-slate-200" />
        
        {events.map((event, i) => (
          <div key={i} className="flex gap-4 relative z-10 group">
            {/* Date Block */}
            <div className={`flex flex-col items-center justify-center min-w-[46px] h-[46px] rounded-lg font-bold text-xs shadow-sm ${event.color}`}>
              <span className="leading-none">{event.date}</span>
              <span className="text-[9px] mt-0.5 uppercase tracking-tighter">{event.month}</span>
            </div>

            <div className="flex-1 flex items-center justify-between pb-2">
              <div>
                <h4 className="text-[13px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {event.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{event.time}</p>
              </div>

              {/* Avatar Stack */}
              <div className="flex -space-x-2 overflow-hidden">
                {event.avatars.slice(0, 3).map((url, idx) => (
                  <div 
                    key={idx} 
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden border border-slate-100 bg-slate-50"
                  >
                    <img 
                      src={url} 
                      alt="Team member" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                
                {event.avatars.length > 3 && (
                   <div className="flex items-center justify-center h-7 w-7 rounded-full bg-slate-100 ring-2 ring-white text-[9px] font-bold text-slate-500 relative z-10">
                     +{event.avatars.length - 3}
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <button className="w-full py-2.5 text-[11px] font-bold text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 border border-dashed border-slate-200 rounded-lg transition-all uppercase tracking-widest">
          View All Schedule
        </button>
      </div>
    </div>
  );
}
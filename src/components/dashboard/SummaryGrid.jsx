"use client";

const summaryData = [
  { label: "Awaiting", value: "$5,486", color: "bg-blue-600", progress: 45 },
  { label: "Completed", value: "$9,275", color: "bg-emerald-500", progress: 65 },
  { label: "Rejected", value: "$3,868", color: "bg-rose-500", progress: 30 },
  { label: "Revenue", value: "$50,668", color: "bg-slate-900", progress: 85 },
];

export default function SummaryGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {summaryData.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-xl border border-dashed border-slate-200 flex flex-col justify-between"
        >
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {item.label}
            </p>
            <p className="text-lg font-bold text-slate-700 mt-1">
              {item.value}
            </p>
          </div>
          
          {/* Progress Bar Container */}
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${item.color} transition-all duration-500`} 
              style={{ width: `${item.progress}%` }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}
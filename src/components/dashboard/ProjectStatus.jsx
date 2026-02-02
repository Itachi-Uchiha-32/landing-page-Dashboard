const projects = [
  { name: 'Apps Development', category: 'Applications', progress: 54, color: 'bg-blue-600', image: 'https://duralux-react-dashboard.vercel.app/images/brand/app-store.png' },
  { name: 'Dashboard Design', category: 'App UI Kit', progress: 100, color: 'bg-green-500', imge: 'https://duralux-react-dashboard.vercel.app/images/brand/figma.png' },
  { name: 'Facebook Marketing', category: 'Marketing', progress: 90, color: 'bg-cyan-500', image: 'https://duralux-react-dashboard.vercel.app/images/brand/facebook.png' },
  { name: 'React Dashboard Github', category: 'Web Development', progress: 75, color: 'bg-purple-600', image: 'https://duralux-react-dashboard.vercel.app/images/brand/github.png' },
];

export function ProjectStatus() {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm h-full">
      <h3 className="font-bold text-slate-700 mb-6">Project Status</h3>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className={`w-8 h-8 rounded flex items-center justify-center text-xs `}>
                    <img src={p.image} alt={p.name}  />
                </div>
                <div>
                    <p className="text-sm font-bold">{p.name}</p>
                    <p className="text-[10px] text-slate-400">{p.category}</p>
                </div>
              </div>
              <span className="text-xs font-bold">{p.progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${p.color}`} style={{ width: `${p.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
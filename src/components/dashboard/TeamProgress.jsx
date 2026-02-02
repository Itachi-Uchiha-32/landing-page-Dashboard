const Member = ({ name, role, p, color, image }) => (
  <div className="flex items-center justify-between py-4 border-b border-dashed border-slate-100 last:border-0">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-100">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] text-slate-400 font-medium">{role}</p>
      </div>
    </div>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="20" cy="20" r="16" stroke="#f1f5f9" strokeWidth="3" fill="none" />
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="none" 
          strokeDasharray={100} strokeDashoffset={100 - p} className={color} />
      </svg>
      <span className="absolute text-[9px] font-bold">{p}%</span>
    </div>
  </div>
);

export default function TeamProgress() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="font-bold text-slate-700 mb-4">Team Progress</h3>
      <Member name="Alexandra Della" role="Frontend Developer" p={40} color="text-red-500" image="https://duralux-react-dashboard.vercel.app/images/avatar/1.png" />
      <Member name="Archie Cantones" role="UI/UX Designer" p={65} color="text-blue-500" image="https://duralux-react-dashboard.vercel.app/images/avatar/3.png" />
      <Member name="Malanie Hanvey" role="Backend Developer" p={50} color="text-yellow-500" image="https://duralux-react-dashboard.vercel.app/images/avatar/4.png"/>
    </div>
  );
}
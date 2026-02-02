"use client";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area, ComposedChart, Line 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const paymentData = [
  { name: 'JAN', pv: 25000, uv: 45000 }, { name: 'FEB', pv: 12000, uv: 55000 },
  { name: 'MAR', pv: 22000, uv: 48000 }, { name: 'APR', pv: 28000, uv: 70000 },
  { name: 'MAY', pv: 15000, uv: 35000 }, { name: 'JUN', pv: 32000, uv: 45000 },
  { name: 'JUL', pv: 38000, uv: 42000 }, { name: 'AUG', pv: 22000, uv: 52000 },
  { name: 'SEP', pv: 45000, uv: 58000 }, { name: 'OCT', pv: 25000, uv: 45000 },
  { name: 'NOV', pv: 30000, uv: 40000 }, { name: 'DEC', pv: 22000, uv: 65000 },
];

export function PaymentChart() {
  return (
    <Card className="shadow-sm border-slate-100">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold text-slate-700">Payment Record</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={paymentData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} tickFormatter={(v) => `${v/1000}K`} />
              <Tooltip />
              <Bar dataKey="pv" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={12} />
              <Bar dataKey="uv" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={12} />
              <Line type="monotone" dataKey="uv" stroke="#cbd5e1" strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function SalesCard() {
  return (
    <Card className="overflow-hidden border-none shadow-lg h-full">
      <div className="bg-[#3b82f6] p-6 text-white h-48 relative">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold">30,569</h3>
            <p className="text-blue-100 text-xs">Total Sales</p>
          </div>
          <span className="bg-white/20 px-2 py-1 rounded text-[10px]">12%</span>
        </div>
        <ResponsiveContainer width="100%" height="60%">
          <AreaChart data={paymentData}>
            <Area type="monotone" dataKey="pv" stroke="#fff" fill="rgba(255,255,255,0.2)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 space-y-4 bg-white">
        {[
          { name: 'Shopify eCommerce', price: '$1200', sold: '8 sold', color: 'bg-green-100 text-green-600', image: "https://duralux-react-dashboard.vercel.app/images/brand/shopify.png" },
          { name: 'iOS App Development', price: '$1450', sold: '3 sold', color: 'bg-blue-100 text-blue-600', image: "https://duralux-react-dashboard.vercel.app/images/brand/app-store.png" },
          { name: 'Figma Dashboard', price: '$1250', sold: '3 sold', color: 'bg-orange-100 text-orange-600', image: "https://duralux-react-dashboard.vercel.app/images/brand/figma.png" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between pb-4 border-b border-dashed last:border-0 last:pb-0">
             <div className="flex items-center gap-3">
               <div className={`w-8 h-8 rounded flex items-center justify-center text-xs ${item.color}`}>
                <img src={item.image} alt="" />
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-700">{item.name}</p>
                 <p className="text-[10px] text-slate-400">Electronics</p>
               </div>
             </div>
             <div className="text-right text-xs font-bold">${item.price.replace('$','')}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
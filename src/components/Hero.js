import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[1000px] w-full flex items-center overflow-hidden font-sans">
      
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          
          backgroundImage: "url('https://i.ibb.co.com/Kp0h0WdF/bg-honey-fce02481.png')", 
        }}
      >
        {/* Subtle overlay only to make text readable, not pitch black */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Bees - Top Right and Middle */}
      

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 relative z-10">
        <div className="max-w-3xl">
          
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 mb-6">
             <div className="">
               <img alt="logo" src="https://preview.funnelliner.xyz/_next/static/media/logo9.d342680c.svg"/>
             </div>
          </div>

          {/* Main Heading - Matches the First Screenshot Colors */}
          <h1 className="text-8xl md:text-6xl  font-bold leading-tight drop-shadow-sm">
            <span className="text-[#FFC107]">পুষ্টিগুণ বৃদ্ধি</span> <span className="text-white">মধুময় বাদাম</span> <br/> 
            <span className="text-white">সেবনে অসংখ্য রোগবালাই</span> <br/>
            <span className="text-white">থেকে পরিত্রাণ পাওয়া যায়</span>
          </h1>
          
          <div className="mt-6 space-y-1">
            {/* Previous Price - Subtle Greenish/White */}
            <p className="text-lg md:text-xl font-medium text-green-100/90 line-through decoration-red-500/50">
              পূর্বের মূল্য: ১০৫০ টাকা
            </p>
            
            {/* Current Price - Bold Red Text directly on background (No white box) */}
            <p className="text-4xl md:text-5xl font-black text-red-600 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              মূল্য: ১০০০ টাকা
            </p>
          </div>

          {/* Action Button - Rounded and Yellow */}
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-transform active:scale-95">
              <ShoppingCart size={20} strokeWidth={2.5} />
              অর্ডার করুন
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
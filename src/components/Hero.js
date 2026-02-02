import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] lg:min-h-[1000px] w-full flex items-center overflow-hidden font-sans">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_left_-150px] md:bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://i.ibb.co.com/Kp0h0WdF/bg-honey-fce02481.png')", 
        }}
      >
        {/* Subtle overlay to ensure text contrast on busy backgrounds */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 relative z-10">
        <div className="max-w-3xl">
          
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 mb-8 md:mb-6">
             <div className="w-24 md:w-auto">
               <img 
                alt="logo" 
                src="https://preview.funnelliner.xyz/_next/static/media/logo9.d342680c.svg"
                className="brightness-0 invert" // Ensures logo is visible on dark overlay
               />
             </div>
          </div>

          {/* Main Heading - Responsive Font Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
            <span className="text-[#FFC107]">পুষ্টিগুণ বৃদ্ধি</span> <span className="text-white">মধুময় বাদাম</span> <br/> 
            <span className="text-white">সেবনে অসংখ্য রোগবালাই</span> <br className="hidden md:block"/>
            <span className="text-white"> থেকে পরিত্রাণ পাওয়া যায়</span>
          </h1>
          
          <div className="mt-6 space-y-2 md:space-y-1">
            {/* Previous Price */}
            <p className="text-base md:text-xl font-medium text-green-100/90 line-through decoration-red-500/70">
              পূর্বের মূল্য: ১০৫০ টাকা
            </p>
            
            {/* Current Price */}
            <p className="text-3xl md:text-5xl font-black text-red-600 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              মূল্য: ১০০০ টাকা
            </p>
          </div>

          {/* Action Button - Centered on very small screens, left on md+ */}
          <div className="mt-10 md:mt-8">
            <button className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-black w-full md:w-auto px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-transform active:scale-95">
              <ShoppingCart size={22} strokeWidth={2.5} />
              অর্ডার করুন
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
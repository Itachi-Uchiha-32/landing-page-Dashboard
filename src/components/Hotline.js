"use client";

export default function Hotline() {
  const packages = [
    { id: 1, img: "https://i.ibb.co.com/YTQx0m7r/jar1.png" },
    { id: 2, img: "https://i.ibb.co.com/vvTyGHJR/jar2.png" },
    { id: 3, img: "https://i.ibb.co.com/rRDqPB0d/jar3.png" },
    { id: 4, img: "https://i.ibb.co.com/sv8j3WFN/jar4.png" },
  ];

  return (
    <section className="w-full bg-white px-20 py-16">
      {/* 1. Hotline Banner with Background Image */}
      <div 
        className="w-full bg-cover bg-center py-12 md:py-20 flex flex-col items-center justify-center text-center"
        style={{ 
          
          backgroundImage: "url('https://i.ibb.co.com/twxz0TqH/hotline-bg-261a75d0.png')" 
        }}
      >
        <h3 className="text-xl md:text-3xl font-bold text-[#E63946] mb-2">
          যে কোন প্রয়োজনে কল করুন
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <span className="text-2xl md:text-5xl font-black text-[#E63946]">
            হটলাইন:
          </span>
          <a 
            href="tel:01600324567" 
            className="text-3xl md:text-6xl font-black text-[#E63946] hover:opacity-80 transition-opacity"
          >
            01600-324567
          </a>
        </div>
      </div>

      {/* 2. Product Showcase Grid (4-Column Layout) */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-[#F6F4F2] flex items-center justify-center p-4 aspect-square rounded-sm shadow-sm"
            >
              <img 
                src={pkg.img} 
                alt="Honey Jar" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
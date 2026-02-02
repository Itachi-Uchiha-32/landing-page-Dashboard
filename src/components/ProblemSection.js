"use client";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden px-4 min-h-[400px] flex flex-col items-center justify-center">
      
      {/* Left Side Decoration - Pinned to the very left */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-20px] md:left-0 top-1/2 -translate-y-1/2 z-0 w-32 md:w-64 lg:w-80"
      >
        {/* Make sure to use a transparent PNG to avoid the black box effect */}
        <img 
          src="https://i.ibb.co.com/wZrW3dxy/honey-layer-1-removebg-preview.png" 
          alt="Honey Left" 
          className="w-full h-auto object-contain" 
        />
      </motion.div>

      {/* Right Side Decoration - Pinned to the very right */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-[-20px] md:right-0 top-1/2 -translate-y-1/2 z-0 w-32 md:w-64 lg:w-80"
      >
        <img 
          src="https://i.ibb.co.com/wZrW3dxy/honey-layer-1-removebg-preview.png" 
          alt="Honey Right" 
          className="w-full h-auto object-contain scale-x-[-1]" 
        />
      </motion.div>

      {/* Central Content Layer */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        
        {/* Order Button - Matches Screenshot 1 */}
        <button className="bg-[#FFC107] hover:bg-[#FFB300] text-black px-12 py-4 rounded-full text-xl font-bold shadow-[0_10px_20px_rgba(0,0,0,0.1)] mb-12 transition-transform active:scale-95">
          অর্ডার করতে এখানে ক্লিক করুন
        </button>

        {/* Headline Text */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-black text-[#1A1A1A] leading-tight">
            আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ঠ।
          </h2>
          <p className="text-2xl md:text-4xl font-black text-[#E63946] border-b-4 border-orange-400 inline-block pb-1">
            ১০০% কার্যকরী ও পরীক্ষিত প্রডাক্ট।
          </p>
        </div>
      </div>

    </section>
  );
}
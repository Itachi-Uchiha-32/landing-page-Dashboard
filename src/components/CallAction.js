"use client";
import { motion } from "framer-motion";

export default function CallAction() {
  return (
    <section className="relative py-16 bg-white overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      {/* Container for Button and Animated Bee */}
      <div className="relative mb-10">
        
        {/* Animated Bee - Orbits the button area */}
        <motion.div
          initial={{ x: -180, y: 0 }} // Starts at the beginning of the sentence
          animate={{
            // x: Start left (-180), stay/move slightly, then curve right (180), then back
            x: [-180, -180, 0, 180, 180, -180], 
            // y: Start 0, fly straight UP (-150), curve around, then return
            y: [0, -150, -200, -150, 0, 0],
            rotate: [0, 0, 45, 90, 0, 0], // Tilts as it curves
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute z-20 w-12 md:w-16 pointer-events-none"
          style={{ left: "50%", top: "50%" }}
        >
          <img 
            src="https://i.ibb.co.com/Y42x4Ctr/bee2-removebg-preview.png" 
            alt="Bee" 
            className="w-full scale-[100%] h-full"
          />
        </motion.div>

        {/* The Order Button */}
        <button className="relative z-10 bg-gradient-to-b from-[#FFD93D] to-[#FFB300] text-black px-12 py-5 rounded-full text-2xl font-black shadow-[0_10px_30px_rgba(255,179,0,0.4)] hover:scale-105 transition-transform active:scale-95 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          অর্ডার করতে এখানে ক্লিক করুন
        </button>
      </div>

      {/* Pricing and Info Section */}
      <div className="space-y-4">
        <p className="text-xl text-gray-600 line-through decoration-red-500 decoration-2">
          পূর্বের মূল্য: ১০৫০ টাকা
        </p>
        
        <div className="inline-block bg-white px-8 py-2 rounded-2xl shadow-xl ">
          <h3 className="text-4xl md:text-5xl font-black text-red-600">
            মূল্য: ১০০০ টাকা
          </h3>
        </div>

        <p className="text-2xl md:text-3xl font-bold text-gray-800 pt-4">
          সারা দেশে ফ্রি হোম ডেলিভারি
        </p>
      </div>

      {/* Decorative Side Elements (Flower and Honey) */}
      <div className="absolute right-4 md:right-20 top-1/4 hidden lg:block">
        <img src="https://i.ibb.co.com/Pzzh9jjt/flower-removebg-preview.png" className="w-24" alt="decoration" />
      </div>

    </section>
  );
}
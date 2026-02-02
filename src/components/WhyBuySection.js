"use client";
import { motion } from "framer-motion";

export default function WhyBuySection() {
  const points = [
    "ফ্রি হোম ডেলিভারি সুবিধা।",
    "১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি।",
    "প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা।",
    "অর্ডার সম্পন্ন হওয়ার সর্বোচ্চ ৭২ ঘণ্টার মধ্যে ডেলিভারি।",
    "সারা দেশে ক্যাশ অন ডেলিভারি সুবিধা।"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden px-4">
      {/* Background Image Layer - Fixed to repeat pattern properly */}
      <div 
        className="absolute inset-0 z-0 bg-repeat opacity-100" 
        style={{ 
          backgroundImage: "url('https://i.ibb.co.com/1tq5gcfg/white-bg-d0467847.png')",
          backgroundSize: "contain", // Ensures the jagged line pattern tiles correctly
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#002B36] leading-tight">
            আমাদের থেকে কেন মধুময় বাদাম কিনবেন?
          </h2>
        </div>

        {/* Content Container with Bee */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* List of Points with Green Checkmarks */}
          <ul className="space-y-4 md:space-y-6 z-10">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-[#22C55E] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="text-lg md:text-2xl font-bold text-[#1A1A1A] leading-tight">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Animated Bee - Positioned to the right of the list */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="md:absolute md:-right-20 w-24 md:w-40 opacity-100"
          >
            <img 
              src="https://i.ibb.co.com/1Gmj9zTv/bee3-removebg-preview.png" 
              alt="Bee" 
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Honey Dipper */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-80 pointer-events-none hidden lg:block">
        <img src="https://i.ibb.co.com/tMkzBcgV/honeyspoon-removebg-preview.png" className="w-32" alt="honey-dipper" />
      </div>

    </section>
  );
}
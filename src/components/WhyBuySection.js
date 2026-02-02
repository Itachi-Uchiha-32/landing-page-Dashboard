"use client";
import { motion } from "framer-motion";

export default function WhyBuySection() {
  const points = [
    "ফ্রি হোম ডেলিভারি সুবিধা।",
    "১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি।",
    "প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা।",
    "আমরা সুন্নাত তরিকায় ব্যবসা করি", // Added from screenshot
    "ফ্রি হেলথ টিপস।" // Added from screenshot
  ];

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden px-6">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-100" 
        style={{ 
          backgroundImage: "url('https://i.ibb.co.com/1tq5gcfg/white-bg-d0467847.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading - Centered and Bold */}
        <h2 className="text-2xl md:text-5xl font-black text-[#002B36] leading-tight mb-12">
          আমাদের থেকে কেন মধুময় বাদাম কিনবেন?
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Top Left Honey Dipper - Visible on mobile to match screenshot */}
          <div className="absolute -left-4 top-0 md:top-10 opacity-90">
            <img 
              src="https://i.ibb.co.com/tMkzBcgV/honeyspoon-removebg-preview.png" 
              className="w-20 md:w-32 rotate-12" 
              alt="honey-dipper" 
            />
          </div>

          {/* Centered Points - No checkmarks, just text blocks */}
          <div className="space-y-6 md:space-y-8 max-w-lg mx-auto">
            {points.map((point, index) => (
              <p 
                key={index} 
                className="text-lg md:text-2xl font-bold text-[#4A4A4A] leading-relaxed px-4"
              >
                {point}
              </p>
            ))}
          </div>

          {/* Bottom Right Bee - Matches screenshot placement */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 -bottom-6 w-20 md:w-40"
          >
            <img 
              src="https://i.ibb.co.com/1Gmj9zTv/bee3-removebg-preview.png" 
              alt="Bee" 
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
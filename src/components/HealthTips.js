export default function HealthTips() {
  const tips = [
    "মধু ভালো শক্তি প্রদানকারী খাদ্য। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।",
    "মধুতে যে শর্করা থাকে তা সহজেই হজম হয়।",
    "হাঁপানি রোধে এবং ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে সাহায্যকারী।",
    "মধু অনিদ্রার ভালো ওষুধ। রাতে শোয়ার আগে এক গ্লাস পানির সঙ্গে দুই চা চামচ মধু মিশিয়ে খেলে এটি গভীর ঘুমে কাজ করে।",
    "মেয়েদের রূপচর্চার ক্ষেত্রে মাস্ক হিসেবে মধুর ব্যবহার বেশ জনপ্রিয়। মুখের ত্বকের মসৃণতা বৃদ্ধির জন্যও মধু ব্যবহৃত হয়।"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white px-4 overflow-hidden">
      <div className="">
        
        {/* 1. Centered Main Heading - Matches First Screenshot */}
        <div className="text-center mb-12 md:mb-20 relative">
          <h2 className="text-3xl md:text-5xl font-black text-[#002B36] leading-tight">
            প্রতিদিন দুই চামচ মধুময় বাদাম আপনার <br className="hidden md:block"/> উপকার করবে
          </h2>
          {/* Decorative bee on the top right */}
          <img 
            src="https://i.ibb.co.com/Y7xk394y/bee1-removebg-preview.png" 
            alt="Bee" 
            className="absolute -right-4 top-0 w-12 md:w-24 opacity-90 scale-[50%]"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* 2. Left Side: Decorative Honey Dipper and Comb */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://i.ibb.co.com/VWyBwYjp/honey-Feature.png" 
              alt="Honey Dipper and Comb" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* 3. Right Side: Yellow Checkmark List */}
          <div className="md:w-1/2">
            <ul className="space-y-6 md:space-y-8">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Circular Yellow Checkmark */}
                  <div className="mt-1 bg-[#FFC107] rounded-full p-1.5 text-white shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-[#4A4A4A] leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
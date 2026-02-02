export default function BenefitsGrid() {
  const benefits = [
    { title: "হজমে সহায়তা", text: "এতে যে শর্করা থাকে, তা সহজেই হজম হয়। কারণ, এতে যে ডেক্সট্রিন থাকে, তা সরাসরি রক্তে প্রবেশ করে।" },
    { title: "শক্তি প্রদায়ী", text: "মধু ভালো শক্তি প্রদায়ী খাদ্য। তাপ ও শক্তির ভালো উৎস। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।" },
    { title: "কোষ্ঠকাঠিন্য দূর করে", text: "মধুতে রয়েছে ভিটামিন বি-কমপ্লেক্স। খাঁটি মধু ভোরে পান করলে এটি ডায়রিয়া ও কোষ্ঠকাঠিন্য দূর করে।" },
    { title: "রক্তশূন্যতায়", text: "মধু রক্তের হিমোগ্লোবিন গঠনে সহায়তা করে বলে এটি রক্তশূন্যতায় বেশ ফলদায়ক। এতে থাকে খুব বেশি লৌহ ও ম্যাঙ্গানিজ।" },
    { title: "যৌন দুর্বলতায়", text: "পুরুষদের মধ্যে যাঁদের যৌন দুর্বলতা রয়েছে, তাঁরা যদি প্রতিদিন মধু ও ছোলা মিশিয়ে খান, তাহলে বেশ উপকার পাবেন।" },
    { title: "পাকস্থলীর সুস্থতায়", text: "মধু পাকস্থলীর কাজকে জোরালো করে এবং হজমের গোলমাল দূর করে। এর ব্যবহার হাইড্রোক্লোরিক অ্যাসিড ক্ষরণ কমিয়ে দেয়।" },
    { title: "পানিশূন্যতায়", text: "ডায়রিয়া হলে এক লিটার পানিতে ৫০ মিলিলিটার মধু মিশিয়ে খেলে দেহে পানিশূন্যতা রোধ করা যায়।" },
    { title: "দৃষ্টিশক্তি বাড়াতে", text: "চোখের জন্য ভালো। গাজরের রসের সঙ্গে মধু মিশিয়ে খেলে দৃষ্টিশক্তি বাড়ে।" },
  ];

  return (
    <section 
      className="relative py-16 md:py-24 bg-[#FDF2D0]" // Honey-yellow fallback
    >
      {/* Background Image Layer using Direct Link */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // I've used the direct image path from your ImgBB link
          backgroundImage: "url('https://i.ibb.co.com/zVHNgMn1/image-b18acb.png')" 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Centered Heading with Dark Navy Color */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#002B36] leading-tight">
            মধুময় বাদাম খাওয়ার ফলে যে সকল সমস্যার <br className="hidden md:block" /> সমাধান করবে
          </h2>
        </div>

        {/* 4-Column Grid as seen in the first screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center border-b-[6px] border-[#FFC107] transition-all hover:shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#4A4A4A] text-base leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Reviews() {
  const reviewImages = [
    "https://i.ibb.co.com/23Qg7bn2/customer-review1.png", 
    "https://i.ibb.co.com/DD170N4s/customer-review2.png",
    "https://i.ibb.co.com/GQc5hggc/customer-review3.png",
    "https://i.ibb.co.com/23Qg7bn2/customer-review1.png", 
  ];

  return (
    <section className="py-12 bg-white px-4">
      {/* We use max-w-4xl here instead of 6xl. 
         This keeps the 2-column images from becoming massive.
      */}
      <div className="max-w-4xl mx-auto"> 
        <h2 className="text-center text-3xl md:text-5xl font-black text-[#451a03] mb-10">
          আমাদের কাস্টমার রিভিউ
        </h2>

        {/* grid-cols-1: Single column for small mobile
           md:grid-cols-2: Two columns for tablet and desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewImages.map((link, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white"
            >
              <img 
                src={link} 
                alt={`Customer Review ${index + 1}`} 
                className="w-full h-fit block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
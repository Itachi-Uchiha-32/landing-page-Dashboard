"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
export default function CheckoutForm() {
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState(0);
  const pricePerItem = 1000;
  const total = (quantity * pricePerItem) + shipping;

  return (
    <section className="py-20 bg-white px-4">
      {/* 1. Exact Heading Style */}
       <motion.h2 
        className="text-center text-3xl md:text-5xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-black via-red-600 to-black"
        style={{ backgroundSize: '200% 100%' }}
        animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        তাই আর দেরি না করে আজই অর্ডার করুন
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* 2. Left Column: Billing & Payment */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4 inline-block border-b-2 border-gray-100 pb-1 px-4">
              Billing details
            </h3>
          </div>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="আপনার নাম লিখুন *" 
              className="w-full p-3 border border-gray-200 rounded-md bg-[#fcfcfc] focus:outline-none focus:ring-1 focus:ring-yellow-400 text-sm"
            />
            <input 
              type="text" 
              placeholder="আপনার মোবাইল নাম্বার লিখুন *" 
              className="w-full p-3 border border-gray-200 rounded-md bg-[#fcfcfc] focus:outline-none focus:ring-1 focus:ring-yellow-400 text-sm"
            />
            <input 
              type="text" 
              placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *" 
              className="w-full p-3 border border-gray-200 rounded-md bg-[#fcfcfc] focus:outline-none focus:ring-1 focus:ring-yellow-400 text-sm"
            />
          </div>

          {/* Payment Box Style */}
          <div className="mt-8 border border-gray-100 rounded-xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-6 text-center">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Payment</h4>
              <div className="inline-flex items-center gap-2 bg-[#f9f9f9] px-4 py-2 rounded-md border border-gray-100">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-yellow-500" />
                <span className="font-bold text-gray-700 text-sm">ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="mt-4 bg-[#ffc107] text-white py-2 px-4 rounded-md text-sm font-medium">
                Pay with cash on delivery.
              </div>
            </div>
          </div>
        </div>

        {/* 3. Right Column: Your Order (Exact Card Style) */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Your order</h3>
          
          <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="flex items-center justify-between border-b py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-gray-100 rounded p-1 bg-white shrink-0">
                <img src="/jar-small.png" alt="Product" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-gray-700 text-sm">মধুময় বাদাম (প্রিমিয়াম কোয়ালিটি)</span>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="number" 
                min="1"
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-12 h-8 border rounded text-center text-sm font-bold bg-gray-50" 
              />
              <span className="font-bold text-gray-800 text-sm shrink-0">৳ {quantity * pricePerItem}</span>
            </div>
          </div>

          <div className="py-4 space-y-3 border-b text-sm">
            <div className="flex justify-between font-bold text-gray-600">
              <span>Subtotal</span>
              <span>{quantity * pricePerItem}.00</span>
            </div>
            
            <div className="space-y-2">
              <span className="font-bold text-gray-600">Shipping</span>
              <div className="flex justify-between items-center pl-2">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500 font-medium">
                  <input type="radio" name="ship" defaultChecked onClick={() => setShipping(0)} className="accent-yellow-500" /> 
                  Inside Dhaka : ৳ 00.00
                </label>
              </div>
              <div className="flex justify-between items-center pl-2">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500 font-medium">
                  <input type="radio" name="ship" onClick={() => setShipping(100)} className="accent-yellow-500" /> 
                  Outside Dhaka : ৳ 100.00
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between py-6 items-center">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-lg font-black text-gray-900">৳ {total}.00</span>
          </div>

          <button className="w-full bg-[#ffc107] hover:bg-[#e6ae00] py-4 rounded-md flex items-center justify-center gap-2 text-white text-lg font-black shadow-md transition-all active:scale-[0.98]">
            <ShoppingCart size={20} fill="white" />
            Place Order BDT {total}.00
          </button>
        </div>

      </div>
    </section>
  );
}
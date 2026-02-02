import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 pt-12 pb-6 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Row: Address and Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 text-sm">
          {/* Left: Location */}
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <MapPin size={18} className="text-gray-900" />
            <span>Kuril, Vatara, Dhaka-1229, Bangladesh</span>
          </div>

          {/* Right: Links */}
          <div className="flex gap-6 font-bold text-gray-800">
            <a href="#" className="hover:text-[#ffc107] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ffc107] transition-colors">Terms & Conditions</a>
          </div>
        </div>
    
        {/* Divider Line */}
        <div className="border-t border-gray-700 w-full mb-6"></div>

        {/* Bottom Row: Copyright */}
        <div className="text-center text-sm text-gray-600 font-medium">
          <p>© 2026 All Rights Reserved Designed by <span className="font-bold text-black">Funnel Liner</span></p>
        </div>

      </div>
    </footer>
  );
}
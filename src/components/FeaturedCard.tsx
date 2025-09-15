// src/components/FeaturedCard.tsx
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedCard() {
  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden text-white p-8 flex flex-col justify-between">
      <Image
        src="/main-image.jpg" // Pastikan gambar ada di /public
        alt="People wearing hats"
        fill // 'fill' lebih modern daripada 'layout="fill"'
        className="object-cover z-0"
      />
      
      {/* Overlay Gelap untuk Kontras */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-2 mb-4">
          <span className="bg-black/30 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
            • Travel
          </span>
          <span className="bg-black/30 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
            Travel
          </span>
        </div>
      </div>
      <div className="relative z-10 flex justify-between items-end">
        <div className="flex flex-col items-start gap-2">
            <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl">
                <h2 className="text-3xl font-bold leading-tight">Get to your dream now</h2>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl">
                 <h2 className="text-3xl font-bold leading-tight">destinations with Travel Pro</h2>
            </div>
        </div>
        <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
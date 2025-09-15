// src/components/FeaturedCard.tsx
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedCard() {
  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden text-white p-8 flex flex-col justify-between">
      <Image
        src="/main-image.jpg"
        alt="People wearing hats"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10">
        {/* Mengembalikan tag tanggal dan kategori */}
        <div className="flex gap-2 mb-4">
          <span className="bg-white/30 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
            Sep 05, 2022
          </span>
          <span className="bg-white/30 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
            Travel
          </span>
        </div>
      </div>
      <div className="relative z-10 flex justify-between items-end">
        {/* Mengembalikan blok teks judul menjadi satu */}
        <h2 className="text-4xl font-bold max-w-md leading-tight">
          Get to your dream now destinations with Travel Pro
        </h2>
        <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
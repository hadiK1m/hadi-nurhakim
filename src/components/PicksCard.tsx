// src/components/PicksCard.tsx
import Image from 'next/image';
import { Button } from './ui/button';

export default function PicksCard() {
  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden flex flex-col justify-between p-6">
      <Image
        src="/model-image.jpg" // Pastikan gambar ada di /public
        alt="Man in pink suit"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative z-10 flex justify-end">
        <span className="bg-background/80 text-foreground w-10 h-10 flex items-center justify-center rounded-full font-bold">
          24
        </span>
      </div>
      <Button className="relative z-10 rounded-full font-semibold" size="lg">
        See all picks →
      </Button>
    </div>
  );
}
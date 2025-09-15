// src/components/ui/TitleBackground.tsx
import { cn } from "@/lib/utils";

export const TitleBackground = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 300 150"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 left-0 w-full h-full z-0", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M0,50 Q0,0 50,0 H250 Q300,0 300,50 V100 Q300,150 250,150 H50 Q0,150 0,100 Z"
        className="fill-card" // Menggunakan warna dari tema
      />
    </svg>
  );
};
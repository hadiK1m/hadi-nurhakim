// src/components/FeaturedCard.tsx

'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useLayoutEffect, useState } from 'react';

const lines = [
  "Representing brands as the source",
  "for inspiration and creativity",
  "inspiration"
];

const customWidths = [380, 300, 180]; // lebar background tiap baris (px)

export default function FeaturedCard() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineWidths, setLineWidths] = useState<number[]>([]);

  useLayoutEffect(() => {
    setLineWidths(
      lineRefs.current.map(ref => ref ? ref.getBoundingClientRect().width : 0)
    );
  }, []);

  const paddingX = 24;
  const paddingY = 12;
  const lineHeight = 40;

  return (
    <div className="relative w-full aspect-[4/3] bg-[#F3EFEA] dark:bg-card rounded-xl overflow-hidden">
      {/* Judul di pojok kiri atas */}
      <div className="absolute top-0 left-0 z-10 p-0">
        <div className="relative flex flex-col gap-2 pt-0 pb-0">
          {lines.map((text, idx) => {
            const width = customWidths[idx] + paddingX * 2;
            const height = lineHeight;
            return (
              <div key={idx} className="relative" style={{ height }}>
                {/* SVG background untuk tiap baris */}
                <svg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  className="absolute top-0 left-0"
                  aria-hidden="true"
                  style={{ display: 'block' }}
                >
                  <path
                    d={`
                      M8,0
                      H${width - paddingX}
                      Q${width},0 ${width},${paddingY}
                      V${height - paddingY}
                      Q${width},${height} ${width - paddingX},${height}
                      H8
                      Q0,${height} 0,${height - paddingY}
                      V${paddingY}
                      Q0,0 8,0
                      Z
                    `}
                    fill="#fff"
                  />
                </svg>
                {/* Teks di atas SVG */}
                <div
                  ref={el => { lineRefs.current[idx] = el; }}
                  className="relative px-0 py-2 text-2xl md:text-3xl font-bold text-foreground"
                  style={{
                    minWidth: 100,
                    lineHeight: `${lineHeight}px`,
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tag di pojok kanan atas */}
      <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2">
        <span className="bg-white/80 dark:bg-black/20 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
          Dec 28, 2022
        </span>
        <span className="bg-white/80 dark:bg-black/20 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
          • Fashion
        </span>
      </div>

      {/* Ikon panah di kiri tengah */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center cursor-pointer shadow-md">
        <ArrowUpRight className="h-6 w-6 text-foreground" />
      </div>

      {/* Gambar Model di bagian bawah */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/main-image.jpg"
          alt="Fashion model"
          fill
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
}
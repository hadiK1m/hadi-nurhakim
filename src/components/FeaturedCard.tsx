// src/components/FeaturedCard.tsx
'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useLayoutEffect, useState } from 'react';

// REVISI: Teks disesuaikan agar cocok dengan gambar
const fullText = "The Future of Fashion: Embracing Sustainability and Innovation in Style";
// Tentukan jumlah huruf per baris, misal baris pertama 28 huruf, baris kedua 15 huruf
const charsPerLine = [28, 22, 16];

function splitToLinesByChars(text: string, charsPerLine: number[]) {
  const lines = [];
  let idx = 0;
  for (let count of charsPerLine) {
    lines.push(text.slice(idx, idx + count));
    idx += count;
  }
  return lines;
}

const lines = splitToLinesByChars(fullText, charsPerLine);

// Path generators untuk 2 baris
const pathGenerators = [
  // Baris pertama: Kiri siku, kanan bawah melengkung
  (width: number, height: number) => `
    M0,0
    H${width}
    V${height - 20}
    Q${width},${height} ${width - 30},${height}
    H0
    V0
    Z
  `,
  // Baris kedua: Kiri siku, kanan bawah melengkung
  (width: number, height: number) => `
    M0,0
    H${width}
    V${height - 20}
    Q${width},${height} ${width - 30},${height}
    H0
    V0
    Z
  `,
];

export default function FeaturedCard() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineWidths, setLineWidths] = useState<number[]>([]);

  useLayoutEffect(() => {
    // Memberikan sedikit delay agar font render sempurna sebelum pengukuran
    const timeoutId = setTimeout(() => {
      setLineWidths(
        lineRefs.current.map(ref => ref ? ref.getBoundingClientRect().width : 0)
      );
    }, 50); // Delay 50ms

    return () => clearTimeout(timeoutId);
  }, [lines]); // Bergantung pada lines agar re-render jika teks berubah

  const paddingX = 8; // Sedikit lebih besar untuk memberi ruang lengkungan
  const lineHeight = 20;

  return (
    <div className="relative w-full aspect-[4/3] bg-[#F3EFEA] dark:bg-card rounded-xl overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <div className="relative flex flex-col items-start">
          {lines.map((text, idx) => {
            const textWidth = lineWidths[idx] || 0;
            const svgWidth = textWidth + paddingX * 2;
            const height = lineHeight + 20;
            const generatePath = pathGenerators[idx] || pathGenerators[pathGenerators.length - 1];

            // Style umum untuk semua baris
            const textStyle = {
              lineHeight: `${lineHeight}px`,
              paddingLeft: 0,
              paddingRight: paddingX,
              height: `${height}px`,
              display: "flex",
              alignItems: "center",
            };

            return (
              <div key={idx} className="relative" style={{ height }}>
                <svg
                  width={svgWidth}
                  height={height}
                  viewBox={`0 0 ${svgWidth} ${height}`}
                  className="absolute top-0 left-0"
                  aria-hidden="true"
                >
                  <path d={generatePath(svgWidth, height)} className="fill-card" />
                </svg>
                <div
                  ref={el => { lineRefs.current[idx] = el; }}
                  className="relative text-2xl pb-2.5 md:text-3xl font-bold text-foreground text-left"
                  style={textStyle}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2">
        <span className="bg-white/80 dark:bg-black/20 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
          Dec 28, 2022
        </span>
        <span className="bg-white/80 dark:bg-black/20 backdrop-blur-sm text-xs font-semibold py-1.5 px-3 rounded-full">
          • Fashion
        </span>
      </div>

      <div className="absolute bottom-6 left-6 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center cursor-pointer shadow-md">
        <ArrowUpRight className="h-6 w-6 text-foreground" />
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/main-image.jpg"
          alt="Fashion model"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
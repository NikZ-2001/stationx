"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Props {
  images?: string[];
  name: string;
  hoverCycle?: boolean;
}

export default function ImageCarousel({ images = [], name, hoverCycle = false }: Props) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const safeImages = Array.isArray(images) && images.length > 0 ? images : [];

  const startCycle = () => {
    if (safeImages.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, 900);
  };

  const stopCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(0);
  };

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  if (safeImages.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <i className="bi bi-journal text-gray-200 text-5xl" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" onMouseEnter={hoverCycle ? startCycle : undefined} onMouseLeave={hoverCycle ? stopCycle : undefined}>
      {safeImages.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}>
          {!imgError[i] ? (
            <Image src={img} alt={`${name} ${i + 1}`} fill className="object-contain p-2" sizes="(max-width: 768px) 50vw, 25vw" onError={() => setImgError((prev) => ({ ...prev, [i]: true }))} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <i className="bi bi-journal text-gray-200 text-4xl" />
            </div>
          )}
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
        <i className="bi bi-journal text-gray-100 text-5xl" />
      </div>
      {safeImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
          {safeImages.map((_, i) => (
            <span key={i} className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-orange-500" : "w-1.5 bg-gray-300"}`} />
          ))}
        </div>
      )}
    </div>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: Props) {
  const [selected, setSelected] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleError = (i: number) => setImgErrors((prev) => ({ ...prev, [i]: true }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="sticky top-24">
      {/* Main Image */}
      <div
        className={`relative h-80 md:h-[420px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-3 ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
        onClick={() => setZoomed(!zoomed)}
        onMouseMove={zoomed ? handleMouseMove : undefined}
        onMouseLeave={() => { if (zoomed) setZoomPos({ x: 50, y: 50 }); }}
      >
        {images.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-400 ${i === selected ? "opacity-100" : "opacity-0"}`}>
            {!imgErrors[i] ? (
              <div
                className="w-full h-full transition-transform duration-200"
                style={zoomed ? {
                  transform: "scale(2.2)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                } : { transform: "scale(1)" }}
              >
                <Image src={img} alt={`${name} view ${i + 1}`} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw" onError={() => handleError(i)} priority={i === 0} />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <i className="bi bi-journal text-gray-200 text-6xl" />
              </div>
            )}
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <i className="bi bi-journal text-gray-100 text-6xl" />
        </div>

        {/* Zoom Icon */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm border border-gray-100 pointer-events-none">
          <i className={`bi ${zoomed ? "bi-zoom-out" : "bi-zoom-in"} text-gray-600 text-sm`} />
          <span className="text-xs text-gray-500">{zoomed ? "Click to zoom out" : "Click to zoom in"}</span>
        </div>

        {/* Arrows */}
        {images.length > 1 && !zoomed && (
          <>
            <button type="button" onClick={(e) => { e.stopPropagation(); setSelected((prev) => (prev - 1 + images.length) % images.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10">
              <i className="bi bi-chevron-left text-sm" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); setSelected((prev) => (prev + 1) % images.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10">
              <i className="bi bi-chevron-right text-sm" />
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
            {selected + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {images.map((img, i) => (
            <button key={i} type="button" onClick={() => { setSelected(i); setZoomed(false); }} className={`flex-none w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === selected ? "border-orange-500 shadow-md" : "border-gray-100 hover:border-gray-300"}`}>
              <div className="relative w-full h-full bg-gray-50">
                {!imgErrors[i] ? (
                  <Image src={img} alt={`${name} thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" onError={() => handleError(i)} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="bi bi-journal text-gray-200 text-lg" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
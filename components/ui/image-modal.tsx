"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageModal({
  src,
  alt,
  width = 400,
  height = 300,
  className,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full p-4 mx-auto">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`cursor-pointer w-full rounded-lg mx-auto ${
            className || ""
          }`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-w-[800px] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

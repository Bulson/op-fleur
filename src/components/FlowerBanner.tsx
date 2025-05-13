'use client'

import Image from 'next/image';

interface FlowerBannerProps {
  imageSrc: string;  // Ścieżka do obrazu
  altText: string;   // Tekst alternatywny obrazu
  height?: string;   // Opcjonalna wysokość banera
}

const FlowerBanner: React.FC<FlowerBannerProps> = ({ imageSrc, altText, height = 'h-48' }) => {
  return (
    <section className="relative">
      <div className={`w-full ${height}`}>
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
    </section>
  );
};

export default FlowerBanner;

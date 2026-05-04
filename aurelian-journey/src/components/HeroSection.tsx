import { useRef, useState } from 'react';

interface HeroSectionProps {
  onVideoReady: () => void;
}

export default function HeroSection({ onVideoReady }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isGrayscale, setIsGrayscale] = useState(false);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            
            // Turn grayscale after 1.5 seconds
            if (video.currentTime >= 1.5 && !isGrayscale) {
              setIsGrayscale(true);
            }

            // Trigger hero reveal after 3 seconds
            if (video.currentTime >= 3) {
              onVideoReady();
            }
          }}
          onEnded={onVideoReady}
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-beach-and-the-ocean-1563-large.mp4"
          className={`w-full h-full object-cover opacity-60 scale-105 transition-[filter] duration-[1500ms] ease-in-out ${
            isGrayscale ? 'grayscale' : 'grayscale-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 text-center max-w-5xl px-6 sm:px-8">
        <h1 className="hero-title opacity-0 translate-y-[30px] font-noto text-3xl sm:text-5xl md:text-7xl lg:text-8xl shimmer-text mb-8 sm:mb-12 tracking-tight leading-tight">
          Cakrawala Tak Pernah Seindah Saat Kau Melangkah Menujunya.
        </h1>
        <button className="hero-btn opacity-0 translate-y-[20px] group px-8 sm:px-10 py-3 sm:py-4 border border-gold text-gold font-manrope text-xs sm:text-sm tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          Mulai Petualanganmu
        </button>
      </div>
      <div className="hero-scroll opacity-0 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="font-manrope text-xs text-white/40 tracking-widest uppercase">Jelajahi</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
}

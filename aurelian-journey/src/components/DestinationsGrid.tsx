const DESTINATIONS = [
  {
    title: "Ubud Serenity",
    subtitle: "Detak jantung zamrud dari jiwa Bali",
    img: "/images/ubud-sunset.webp",
    alt: "Pemandangan sawah Ubud saat matahari terbenam",
    span: "md:col-span-8 md:row-span-2",
    titleSize: "text-2xl sm:text-3xl",
    subtitleSize: "text-xs",
    padding: "bottom-6 left-6 sm:bottom-8 sm:left-8",
  },
  {
    title: "Komodo Realm",
    subtitle: "Panorama purba dan pasir merah muda",
    img: "/images/komodo-sunset.webp",
    alt: "Pulau Komodo saat matahari terbenam",
    span: "md:col-span-4 md:row-span-1",
    titleSize: "text-xl sm:text-2xl",
    subtitleSize: "text-[10px]",
    padding: "bottom-5 left-5 sm:bottom-6 sm:left-6",
  },
  {
    title: "Borobudur Dawn",
    subtitle: "Kebangkitan spiritual dalam batu",
    img: "/images/borobudur-sunset.webp",
    alt: "Candi Borobudur saat matahari terbenam",
    span: "md:col-span-4 md:row-span-2",
    titleSize: "text-2xl sm:text-3xl",
    subtitleSize: "text-xs",
    padding: "bottom-6 left-6 sm:bottom-8 sm:left-8",
  },
  {
    title: "Raja Ampat Blue",
    subtitle: "Surga terakhir di muka bumi",
    img: "/images/raja-ampat-sunset.webp",
    alt: "Kepulauan Raja Ampat saat matahari terbenam",
    span: "md:col-span-4 md:row-span-1",
    titleSize: "text-xl sm:text-2xl",
    subtitleSize: "text-[10px]",
    padding: "bottom-5 left-5 sm:bottom-6 sm:left-6",
  },
] as const;

export default function DestinationsGrid() {
  return (
    <section id="destinations" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16">
      <h2 className="reveal font-noto text-3xl sm:text-4xl md:text-6xl text-center mb-12 sm:mb-16 md:mb-20 tracking-wide font-light">
        Surga Pilihan
      </h2>
      <div className="destinations-grid grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[260px] md:auto-rows-[300px]">
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.title}
            className={`destination-card ${dest.span} relative group overflow-hidden bg-surface`}
          >
            <img
              alt={dest.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              src={dest.img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className={`absolute ${dest.padding}`}>
              <h3 className={`font-noto ${dest.titleSize} text-white mb-1 sm:mb-2 font-light`}>
                {dest.title}
              </h3>
              <p className={`text-gold font-manrope ${dest.subtitleSize} opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 tracking-widest uppercase`}>
                {dest.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

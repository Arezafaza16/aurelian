export default function StorySection() {
  return (
    <section id="story" className="py-20 sm:py-24 md:py-48 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto reveal">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="pr-0 md:pr-12">
          <blockquote className="font-noto text-2xl sm:text-3xl md:text-4xl italic text-gold-light leading-relaxed">
            "Kami tidak merancang perjalanan — kami merangkai kenangan yang hidup selamanya dalam ingatanmu."
          </blockquote>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <p className="font-manrope text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light">
            Lebih dari sekadar wisata, kami menenun narasi penemuan. Filosofi kami berakar pada keyakinan bahwa kemewahan sejati ada pada momen-momen sunyi di antara landmark — aroma pinus di vila terpencil, gema sejarah di perpustakaan pribadi, dan rasa udara di ketinggian 4.000 meter.
          </p>
          <a className="group relative inline-block font-manrope text-sm text-gold tracking-widest uppercase" href="#">
            Selengkapnya
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

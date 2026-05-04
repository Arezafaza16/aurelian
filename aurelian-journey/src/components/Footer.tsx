const FOOTER_LINKS = ['Jurnal', 'Permintaan', 'Pers', 'Legal'];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 sm:gap-12 md:gap-16 text-center">
        <div className="text-lg sm:text-xl font-noto text-gold tracking-[0.3em] sm:tracking-[0.4em] font-light">AURELIAN JOURNEYS</div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16">
          {FOOTER_LINKS.map((link) => (
            <a key={link} className="font-manrope text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors duration-300" href="#">{link}</a>
          ))}
        </div>
        <div className="w-16 h-[1px] bg-white/10"></div>
        <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-white/20 max-w-sm leading-loose">
          © 2026 AURELIAN JOURNEYS. DIRANCANG UNTUK PENJELAJAH BERKELAS. PRIVASI TERLINDUNGI.
        </p>
      </div>
    </footer>
  );
}

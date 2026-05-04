import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Detail yang luar biasa. Kami tidak hanya melihat sawah Ubud; kami merasakan detak jantungnya di setiap butir padi dan semangat yang kami temui.",
    author: "James Sterling",
    pkg: "Retret Spiritual Bali",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_IhJuKx3UOrqmIY4I3zpH8a7IZ7dEVmAbpQXviccLXLOPL0A8mEm7fsRLoI2TxvU3BFxHvBlbluG0vT__VZpeZcvzeFYreV8uVBioS3C5L-5vaNmJfyCZYU3W6OLVw_z5yBIGUTQsLd8uS9EtbwjcUKyrGiN4gCWw1vZHRDfac6seOlbP5A4bnGlOjxjqfeW_gSekpcyUcZHFga1pIb_PiHXqa0qJW1K82klOfuWX5MK3iUmLh_2_tcMLQDYuRnUiK8M_JaLVcak"
  },
  {
    text: "Aurelian Journeys mendefinisikan ulang apa yang saya pikir mungkin. Akses privat ke stupa Borobudur saat fajar adalah momen kejernihan yang mendalam.",
    author: "Elena Rossi",
    pkg: "Odyssey Budaya Jawa",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Btpnug3P286rrvatUpjejjV4TBiHY0HiWanyxVl9-ab5pmlEIlNc2p-pEoufp48WiithlR8015v4y6cb9SBtTWIVtTRSKkFBX006sU1aVTqp0V9gHOimbDDhhA2V4vOMAMk7sY9T1PNsu9kUvKM4Q1N5wCzyBEfqc0Z_bSIVCgX1FWldi8oRSlY7-ToRxWFiLZL1icr6PAFSTMOyujXmmfU6e86EzgiLCVNvVdpHlonEirjUgCryJjwgHP2BnR5heYghe1knYGE"
  }
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-gold mx-auto opacity-30" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className="reveal space-y-6 sm:space-y-8">
            <p className="font-noto text-lg sm:text-xl md:text-2xl italic leading-relaxed text-white/90">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gold/30">
                <img className="w-full h-full object-cover" src={t.img} alt={t.author} loading="lazy" decoding="async" />
              </div>
              <div>
                <p className="font-manrope text-xs sm:text-sm text-white tracking-widest uppercase">{t.author}</p>
                <p className="text-[10px] uppercase text-gold tracking-widest mt-1">{t.pkg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

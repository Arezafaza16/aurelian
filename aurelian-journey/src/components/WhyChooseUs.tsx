import { Gem, ShieldCheck, Sparkles } from 'lucide-react';

const FEATURES = [
  { icon: Gem, title: "Keistimewaan Langka", desc: "Akses ke lokasi dan pengalaman yang tertutup untuk umum." },
  { icon: Sparkles, title: "Kurasi Personal", desc: "Setiap itinerari adalah karya seni perjalanan yang dirancang khusus untukmu." },
  { icon: ShieldCheck, title: "Dukungan Senyap", desc: "Layanan concierge 24/7 yang tak terlihat namun selalu hadir di setiap kebutuhanmu." }
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#0e0e0e] px-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="reveal text-center group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gold mx-auto flex items-center justify-center mb-6 sm:mb-8 transition-all group-hover:shadow-[0_0_20px_#D4AF37]">
              <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
            </div>
            <h4 className="font-manrope text-sm uppercase tracking-widest text-white mb-3 sm:mb-4">{feature.title}</h4>
            <p className="font-manrope text-white/40 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

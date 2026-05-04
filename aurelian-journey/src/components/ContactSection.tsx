import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
        <div className="reveal">
          <h2 className="font-noto text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-8 font-light">Mulai Percakapan</h2>
          <p className="font-manrope text-base sm:text-lg text-white/50 mb-8 sm:mb-12 leading-relaxed">
            Mahakarya berikutnya menunggu untuk ditulis. Bagikan visimu kepada kurator kami, dan biarkan kami merancang perjalanan seumur hidupmu.
          </p>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0" />
              <span className="font-manrope text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">Mayfair, London | Fifth Ave, NYC</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0" />
              <span className="font-manrope text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">curator@aurelian.com</span>
            </div>
          </div>
        </div>
        <div className="reveal bg-background border border-white/10 p-6 sm:p-8 md:p-12 relative shadow-2xl">
          <form className="grid grid-cols-1 gap-6 sm:gap-8" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: 'Nama', type: 'text', placeholder: 'Nama Lengkap' },
              { label: 'Email', type: 'email', placeholder: 'email@alamat.com' },
              { label: 'Destinasi Impian', type: 'text', placeholder: 'cth. Kyoto, Amalfi Coast' }
            ].map((field) => (
              <div key={field.label} className="relative">
                <label className="font-manrope text-[10px] text-white/40 uppercase mb-2 block tracking-widest">{field.label}</label>
                <input
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors text-white placeholder:text-white/10 font-manrope text-sm"
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </div>
            ))}
            <div className="relative">
              <label className="font-manrope text-[10px] text-white/40 uppercase mb-2 block tracking-widest">Ceritakan Perjalananmu</label>
              <textarea
                className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors min-h-[80px] sm:min-h-[100px] text-white placeholder:text-white/10 font-manrope text-sm resize-none"
                placeholder="Jelaskan secara singkat perjalanan impianmu..."
              ></textarea>
            </div>
            <button
              className="w-full py-4 sm:py-5 bg-gold text-background font-manrope text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-gold-light transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)] font-semibold"
              type="submit"
            >
              Kirim Permintaan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

export interface PackageData {
  title: string;
  tag: string;
  desc: string;
  price: string;
  amount: number;
  img: string;
}

const PACKAGES: PackageData[] = [
  {
    title: "Retret Spiritual Bali",
    tag: "Pulau Dewata",
    desc: "Vila eksklusif di Ubud dengan upacara penyucian privat dan pemandangan hutan tropis.",
    price: "Rp 16.000.000",
    amount: 16000000,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2yXybP9PY5AGrwbDeWPX3XjSkn8tKgRCdbdtuHpDw3WOkLxjv-6AoSKByQcmH4tjVSEvvqhvsf5xvNkcNRzVZ9bFpH2QNQ_d_GQIlSPnpmW5pFceBYtGeuaE--nbYR8ImJUv40bZaxvHmTPViaWajt46nUl0daQQzg5Xf7FXcc-XGbVZinRPFeW7EMNdSW_He1fF5_pWGjJrcoCSlzqjKkk1kx_xtxNw4zOBiJHebbWXhGpdA_KWKLBIVGTdumYdI6N1lpkGl7xI"
  },
  {
    title: "Ekspedisi Komodo",
    tag: "Laut Purba",
    desc: "Yacht mewah menyusuri kepulauan dengan diving privat dan perjumpaan komodo.",
    price: "Rp 20.000.000",
    amount: 20000000,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUjeJdm_svnw0V_2ldzkWk5RxTCglWyLlkhhhzxa0Nx9TwG7NtW-eymBIvsIJ8zEm5gqLt22svZQhzl59E197M04MD7gWC6lgz-bSbwCTf0eHFGe88ZxZT0fldkw5nwhAAyv9_gRVYs7So6xNjIvm4P_3z6wyJy13cBwj8Y9CcMmXxnvzlVxsNGbikalm87h0u43JSTRLQ49ajodvriJ0gt45fj0qTiIR2VzSITgnkHh9u5pR25deJEz_sf5EIpZrl13WYrpjOVN4"
  },
  {
    title: "Odyssey Budaya Jawa",
    tag: "Imperium Cahaya",
    desc: "Akses privat ke Borobudur dan Prambanan dengan pemandu arkeologi ahli.",
    price: "Rp 18.400.000",
    amount: 18400000,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRqQAXiRa7gWkfijpL94DbwjmzIsxJ5nRJgYM583Rmy5Ea3vuJaMfbV2W2ZBnvOpOevIpX2hL4imMOtoc1wd458zLhj1KkSPd00ekcd_B_KGHRhguL__kwoS_c-SL7gxhH2bHfqVvNop3YZuy4dbnBOcTQ7Zu24qW9D48IL_Lp62CPtxokyHe-xuLh9iDx8YFriSHVGn5QW1HHgjsSGvmmzJMfDXk1GgsfHWBkNogWkuI_CQ4kCjzEQ1kCMXQZWfJUYFzHiwXcemc"
  }
];

export default function PackagesSection() {
  const [selectedPkg, setSelectedPkg] = useState<PackageData | null>(null);

  return (
    <>
      <section id="packages" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <h2 className="reveal font-noto text-3xl sm:text-4xl md:text-6xl mb-12 sm:mb-16 md:mb-20 text-center font-light">
          Ekspedisi Eksklusif
        </h2>
        <div className="reveal">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="group flex flex-col bg-[#1a1a1a] border border-white/5 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="h-48 sm:h-56 md:h-64 mb-6 sm:mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    alt={pkg.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={pkg.img}
                  />
                </div>
                <span className="text-xs font-manrope text-gold uppercase tracking-[0.2em]">{pkg.tag}</span>
                <h3 className="font-noto text-xl sm:text-2xl mt-3 sm:mt-4 mb-4 sm:mb-6 font-light">{pkg.title}</h3>
                <p className="font-manrope text-sm sm:text-base text-white/50 mb-6 sm:mb-8 leading-relaxed flex-grow">{pkg.desc}</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4 sm:pt-6 mt-auto">
                  <span className="font-noto text-lg sm:text-xl text-gold">{pkg.price}</span>
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="font-manrope text-xs text-white group-hover:text-gold transition-colors flex items-center gap-2 tracking-widest uppercase cursor-pointer"
                  >
                    Pesan Sekarang <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPkg && (
        <BookingModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}
    </>
  );
}

import React from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import type { PackageData } from './PackagesSection';

declare global {
  interface Window {
    snap: {
      pay: (token: string, options: {
        onSuccess?: (result: unknown) => void;
        onPending?: (result: unknown) => void;
        onError?: (result: unknown) => void;
        onClose?: () => void;
      }) => void;
    };
  }
}

interface BookingModalProps {
  pkg: PackageData;
  onClose: () => void;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

export default function BookingModal({ pkg, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Harap isi nama dan email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${BACKEND_URL}/api/payments/create-snap-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageTitle: pkg.title,
          amount: pkg.amount,
          customerName: name,
          customerEmail: email,
        }),
      });

      if (!res.ok) {
        throw new Error('Gagal membuat transaksi. Silakan coba lagi.');
      }

      const data = await res.json();

      if (!data.token) {
        throw new Error('Token transaksi tidak ditemukan.');
      }

      window.snap.pay(data.token, {
        onSuccess: () => {
          setSuccess(true);
          setLoading(false);
        },
        onPending: () => {
          setSuccess(true);
          setLoading(false);
        },
        onError: () => {
          setError('Pembayaran gagal. Silakan coba lagi.');
          setLoading(false);
        },
        onClose: () => {
          setLoading(false);
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
      setLoading(false);
    }
  }, [name, email, pkg]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 shadow-2xl animate-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
          aria-label="Tutup"
        >
          <X className="w-6 h-6" />
        </button>

        {success ? (
          /* Success State */
          <div className="p-8 sm:p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
            <h3 className="font-noto text-2xl sm:text-3xl text-white mb-4 font-light">
              Terima Kasih!
            </h3>
            <p className="font-manrope text-sm text-white/50 mb-8 leading-relaxed">
              Pembayaran untuk <span className="text-gold">{pkg.title}</span> telah berhasil diproses. Tim kurator kami akan segera menghubungimu.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gold text-background font-manrope text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all font-semibold"
            >
              Tutup
            </button>
          </div>
        ) : (
          /* Booking Form */
          <>
            {/* Package Preview */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
              <div className="absolute bottom-4 left-6 sm:left-8">
                <span className="text-[10px] font-manrope text-gold uppercase tracking-[0.2em]">{pkg.tag}</span>
                <h3 className="font-noto text-xl sm:text-2xl text-white font-light mt-1">{pkg.title}</h3>
              </div>
              <div className="absolute bottom-4 right-6 sm:right-8">
                <span className="font-noto text-lg sm:text-xl text-gold">{pkg.price}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div>
                <label className="font-manrope text-[10px] text-white/40 uppercase mb-2 block tracking-widest">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkapmu"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors text-white placeholder:text-white/10 font-manrope text-sm"
                  required
                />
              </div>
              <div>
                <label className="font-manrope text-[10px] text-white/40 uppercase mb-2 block tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@alamat.com"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors text-white placeholder:text-white/10 font-manrope text-sm"
                  required
                />
              </div>

              {error && (
                <p className="font-manrope text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gold text-background font-manrope text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)] font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  'Bayar Sekarang'
                )}
              </button>

              <p className="font-manrope text-[10px] text-white/20 text-center tracking-wider">
                Pembayaran diproses secara aman melalui Midtrans
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

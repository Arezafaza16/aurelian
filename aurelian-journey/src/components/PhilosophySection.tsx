export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Pemandangan berkabut"
          loading="lazy"
          decoding="async"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2zxMq1_mCpm00xbAFymaThDY9PeY0ZlLMwA6kSMgd2CIXIzgcjd-doUQwd8CKcIkjeGmuv4vAiR3F-34555YDv61pPFjf_8n5PYycKuvrnyHISjcRYseQl52Xf-mTjkUy0xwPnfjgbL4RtjO1NT7MId2t1nWDWX9r9Iul91fdN_8RG20SjWtvle_1e-hu6GcKFSs8v_tvZEoiqHmjvaidLSLKsFr01CGJBa9S-A4Xp37I4VUc11d9sk763DMOouxn6jZlvISPNfg"
        />
      </div>
      <div className="relative z-10 max-w-4xl text-center px-6 sm:px-8 reveal-fade">
        <p className="font-noto text-xl sm:text-3xl md:text-5xl text-white italic leading-relaxed font-light">
          "Ada keheningan yang lebih lantang dari seribu kata, dan ia menunggumu di ujung dunia."
        </p>
        <div className="mt-8 sm:mt-12 w-16 h-[1px] bg-gold mx-auto"></div>
      </div>
    </section>
  );
}

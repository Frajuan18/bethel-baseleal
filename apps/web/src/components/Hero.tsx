export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f4f1ee] px-4 py-8 sm:px-8 lg:px-12" aria-label="Wedding invitation hero section">
      <div className="mx-auto flex max-w-[980px] flex-col items-center">
        <div className="mb-4 w-full text-left text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[#111111] sm:text-[0.75rem]">
          THE
        </div>

        <div className="mx-auto w-full max-w-[980px] overflow-hidden bg-[#e8e2db]">
          <img
            src="/hero.jpg"
            alt="Black and white portrait of the couple walking together"
            className="block h-[420px] w-full scale-[1.6] object-cover object-[center_15%] grayscale contrast-125 sm:h-[520px] lg:h-[560px] lg:scale-[1.75]"
          />
        </div>

        <div className="mt-8 text-center">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,6rem)] uppercase tracking-[0.12em] text-[#111111] leading-[0.9]">
            <span className="block">GEORGIA</span>
            <span className="mx-2 inline-block align-middle">&amp;</span>
            <span className="block">CHARLIE</span>
          </h1>

          <p className="mt-5 text-center text-[0.75rem] font-light italic leading-relaxed tracking-[0.04em] text-[#111111]/80 sm:text-[0.82rem]">
            Along with our families, joyfully
            <br />
            invite you to celebrate our wedding.
          </p>

          <div className="mt-7 text-[1.25rem] font-semibold tracking-[0.14em] text-[#111111] sm:text-[1.6rem]">
            20.01.2026
          </div>

          <p className="mt-2 text-[0.72rem] italic tracking-[0.04em] text-[#111111]/75 sm:text-[0.8rem]">
            Es Baleard, Palma de Mallorca
          </p>
        </div>
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <p className="rounded-full bg-[#e9e2d8] px-5 py-2 text-sm text-[#8d7459]">
        35+ 年專業施工經驗
      </p>

      <h2 className="mt-8 text-6xl font-black text-[#40372f]">
        雙北專業水電維修
      </h2>

      <p className="mt-8 max-w-3xl text-xl leading-10 text-[#6f665d]">
        提供住宅與商業空間水電維修、抓漏、衛浴設備安裝、
        照明施工及配電規劃，用專業施工打造安心可靠的生活空間。
      </p>

      <div className="mt-12 flex gap-5">
        <a
          href="#contact"
          className="rounded-2xl bg-[#8d7459] px-8 py-3 text-white transition hover:opacity-90"
        >
          免費估價
        </a>

        <a
          href="tel:0926753345"
          className="rounded-2xl border border-[#8d7459] px-8 py-3 text-[#8d7459] transition hover:bg-[#8d7459] hover:text-white"
        >
          立即來電
        </a>
      </div>
    </section>
  );
}
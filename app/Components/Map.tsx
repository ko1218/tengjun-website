export default function Map() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">

      <div className="mb-12 text-center">

        <p className="text-sm tracking-[0.3em] text-[#8d7459]">
          LOCATION
        </p>

        <h2 className="mt-4 text-4xl font-black text-[#40372f]">
          服務地區
        </h2>

        <p className="mt-4 text-[#6f665d]">
          雙北地區到府服務，歡迎來電預約免費估價。
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-[#ddd4c8] shadow-sm">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.4990126211609!2d121.49705616957094!3d25.068122998612132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a920fdb394af%3A0x10fca104714d978c!2z6aiw6ae_5rC06Zu75bel56iL5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1785747487950!5m2!1szh-TW!2stw"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </div>

    </section>
  );
}
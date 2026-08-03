export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <div className="text-center">

        <p className="text-sm tracking-[0.3em] text-[#8d7459]">
          CONTACT
        </p>

        <h2 className="mt-4 text-4xl font-black text-[#40372f]">
          免費估價
        </h2>

        <p className="mt-4 text-[#6f665d]">
          填寫表單，我們將盡快與您聯絡。
        </p>

      </div>

      <div className="mt-12 rounded-3xl bg-[#ebe5dc] p-8">

        <div className="grid gap-6">

          <input
            type="text"
            placeholder="姓名"
            className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]"
          />

          <input
            type="tel"
            placeholder="電話"
            className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]"
          />

          <input
            type="text"
            placeholder="地址"
            className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]"
          />

          <select
            className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]"
          >
            <option>居家水電維修</option>
            <option>衛浴設備安裝</option>
            <option>特殊抓漏工程</option>
            <option>照明設備施工</option>
            <option>商業空間工程</option>
            <option>電力申請</option>
          </select>

          <textarea
            rows={5}
            placeholder="請簡單描述您的需求..."
            className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]"
          />

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiqsv7AdAp7xUfIpb2isFhJqy4TVy8qrXFnaWLJlTQL52RZg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#8d7459] py-4 text-center font-semibold text-white transition hover:opacity-90"
          >
            前往填寫免費估價
          </a>

        </div>

      </div>

    </section>
  );
}
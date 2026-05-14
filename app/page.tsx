export default function Home() {
  const services = [
    {
      title: '居家水電維修',
      desc: '快速處理漏水、跳電、燈具故障、插座異常等各式問題。',
      icon: '🔧',
    },
    {
      title: '商業空間工程',
      desc: '店面、辦公室與工作室水電規劃與施工整合。',
      icon: '🏢',
    },
    {
      title: '衛浴設備安裝與換裝',
      desc: '提供馬桶、洗手台、蓮蓬頭、熱水器與各式衛浴設備安裝與更換。',
      icon: '🚿',
    },
    {
      title: '特殊抓漏工程',
      desc: '提供牆面、天花板、浴室與地下管線等專業抓漏與檢測服務。',
      icon: '💧',
    },
    {
      title: '照明設備安裝',
      desc: '各式居家與商業空間照明設備、燈具安裝與線路配置。',
      icon: '💡',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#3f3a34]">
      <header className="sticky top-0 z-50 border-b border-[#d8d0c8] bg-[#f4f0ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              騰駿水電工程行
            </h1>
            <p className="text-xs text-[#8b847d]">
              Professional Electrical & Plumbing
            </p>
          </div>

          <nav className="hidden gap-8 text-sm text-[#6b645d] md:flex">
            <a href="#services">服務項目</a>
            <a href="#about">關於我們</a>
            <a href="#contact">聯絡方式</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160607-ee22731b0c39?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-[#ebe5dc] px-4 py-2 text-sm text-[#8a7154]">
              簡約・安心・施工
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              日常空間中的
              <br />
              安心水電工程
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b645d]">
              提供住宅與商業空間水電服務，從施工品質到空間整潔，
              重視每一個細節與安全。
            </p>

            <div className="mt-10 rounded-[2rem] border border-[#d8d0c8] bg-[#ebe5dc] p-8">
              <h4 className="text-2xl font-bold">免費估價表單</h4>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="姓名"
                  className="w-full rounded-2xl border border-[#d8d0c8] bg-white px-5 py-4"
                />

                <input
                  type="tel"
                  placeholder="聯絡電話"
                  className="w-full rounded-2xl border border-[#d8d0c8] bg-white px-5 py-4"
                />

                <textarea
                  rows={4}
                  placeholder="請簡述需求內容"
                  className="w-full rounded-2xl border border-[#d8d0c8] bg-white px-5 py-4"
                />

                <button className="w-full rounded-2xl bg-[#8a7154] px-7 py-4 font-semibold text-white">
                  送出免費估價
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#ebe5dc] p-8">
              <p className="text-5xl font-black text-[#8a7154]">25+</p>
              <p className="mt-2">年以上施工經驗</p>
            </div>

            <div className="rounded-3xl bg-[#ebe5dc] p-8">
              <p className="text-5xl font-black text-[#8a7154]">安心</p>
              <p className="mt-2">細緻施工品質</p>
            </div>

            <div className="rounded-3xl bg-[#ebe5dc] p-8 md:col-span-2">
              <p className="text-lg font-semibold">服務區域</p>
              <p className="mt-3 text-[#6b645d]">
                提供雙北地區到府服務與空間工程規劃。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h3 className="text-4xl font-black">專業服務項目</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#d8d0c8] bg-[#ebe5dc] p-8"
            >
              <div className="text-5xl">{service.icon}</div>
              <h4 className="mt-6 text-2xl font-bold">
                {service.title}
              </h4>
              <p className="mt-4 leading-7 text-[#6b645d]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-[#ebe5dc] p-12 text-center">
          <h3 className="text-4xl font-black">
            不只是修理，更重視空間品質與安全
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#6b645d]">
            騰駿水電工程行重視施工品質、整潔與每一次服務細節，
            提供安心可靠的住宅與商業空間水電服務。
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#d8d0c8]">
          <iframe
            title="Google Map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7228.019236449708!2d121.49436854658951!3d25.067663137305427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a920fdb394af%3A0x10fca104714d978c!2z6aiw6ae_5rC06Zu75bel56iL5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1778739633096!5m2!1szh-TW!2stw"
            width="100%"
            height="450"
          />
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[#d8d0c8] bg-[#f7f3ed] px-6 py-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h4 className="text-2xl font-bold">騰駿水電工程行</h4>
            <p className="mt-2 text-[#8b847d]">
              住宅水電・空間配線・衛浴施工
            </p>
          </div>

          <div className="space-y-2">
            <p>📞 0926-753-345</p>
            <p>📞 0929-837-868</p>
            <p>☎️ (02)-8981-6803</p>
            <p>📍 雙北地區到府服務</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
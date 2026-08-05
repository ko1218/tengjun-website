export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-[#ddd4c8] bg-[#ebe5dc]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">

        <h3 className="text-2xl font-bold text-[#40372f]">
          騰駿水電工程行
        </h3>

        <p className="mt-3 text-[#6f665d]">
          35 年以上施工經驗
        </p>

        <p className="mt-2 text-[#6f665d]">
          📞 <a href="tel:0926753345" className="hover:underline">0926-753345</a>
          {" "}｜ ☎ <a href="tel:0289816803" className="hover:underline">02-89816803</a>
        </p>

        <p className="mt-2 text-[#6f665d]">
          雙北地區到府服務
        </p>

        <div className="mt-5 flex flex-wrap gap-4">

          <a
            href="https://www.facebook.com/profile.php?id=61592791742605"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#ddd4c8] bg-white px-4 py-2 transition hover:bg-[#f4f0ea]"
          >
            👍 Facebook 粉絲專頁
          </a>

          <a
            href="https://maps.google.com/?q=騰駿水電工程有限公司"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#ddd4c8] bg-white px-4 py-2 transition hover:bg-[#f4f0ea]"
          >
            📍 Google 地圖導航
          </a>

        </div>

        <p className="mt-8 text-sm text-[#8d7459]">
          © 2026 騰駿水電工程行 All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
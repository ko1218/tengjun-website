export default function FloatingButtons() {
  const btn =
    "flex h-14 w-14 items-center justify-center rounded-full bg-[#8d7459] text-2xl text-white shadow-lg transition hover:scale-110";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* 一鍵來電 */}
      <a
        href="tel:0926753345"
        className={btn}
        title="立即來電"
      >
        📞
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61592791742605"
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        title="Facebook"
      >
        👍
      </a>

      {/* Google 地圖 */}
      <a
        href="https://maps.google.com/?q=騰駿水電工程有限公司"
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        title="Google 地圖"
      >
        📍
      </a>

      {/* 回到頂端 */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={btn}
        title="回到頂端"
      >
        ⬆️
      </button>

    </div>
  );
}
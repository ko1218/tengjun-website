"use client";

import {
  FaPhoneAlt,
  FaFacebookF,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import { FaLine } from "react-icons/fa6";

export default function FloatingButtons() {
  const btn =
    "flex h-14 w-14 items-center justify-center rounded-full bg-[#8d7459] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#705b46]";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
        href="tel:0926753345"
        className={btn}
        title="立即來電"
      >
        <FaPhoneAlt size={20} />
      </a>

      <a
  href="https://lin.ee/8DFOFxX"
  target="_blank"
  rel="noopener noreferrer"
  className={btn}
  title="加入 LINE 官方帳號"
>
  <FaLine size={20} />
</a>

      <a
        href="https://www.facebook.com/profile.php?id=61592791742605"
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        title="Facebook"
      >
        <FaFacebookF size={20} />
      </a>

      <a
        href="https://maps.google.com/?q=騰駿水電工程有限公司"
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        title="Google 地圖"
      >
        <FaMapMarkerAlt size={20} />
      </a>

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={btn}
        title="回到頂端"
      >
        <FaArrowUp size={20} />
      </button>

    </div>
  );
}
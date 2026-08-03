"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-b border-[#ddd4c8] bg-[#f4f0ea]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <h1 className="text-2xl font-bold text-[#40372f]">
            騰駿水電工程行
          </h1>

          <p className="text-sm text-[#8d7459]">
            Professional Electrical & Plumbing
          </p>
        </div>

        <nav className="hidden gap-8 text-[#8d7459] md:flex">
          <a href="#services">服務項目</a>
          <a href="#about">關於我們</a>
          <a href="#contact">免費估價</a>
          <a href="#footer">聯絡我們</a>
        </nav>
<button
  className="text-3xl text-[#8d7459] md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="開啟選單"
>
  ☰
</button>
      </div>
      
{menuOpen && (
  <nav className="border-t border-[#ddd4c8] bg-[#f4f0ea] md:hidden">
    <a
      href="#services"
      className="block px-6 py-4 text-[#8d7459]"
      onClick={() => setMenuOpen(false)}
    >
      服務項目
    </a>

    <a
      href="#about"
      className="block px-6 py-4 text-[#8d7459]"
      onClick={() => setMenuOpen(false)}
    >
      關於我們
    </a>

    <a
      href="#contact"
      className="block px-6 py-4 text-[#8d7459]"
      onClick={() => setMenuOpen(false)}
    >
      免費估價
    </a>

    <a
      href="#footer"
      className="block px-6 py-4 text-[#8d7459]"
      onClick={() => setMenuOpen(false)}
    >
      聯絡我們
    </a>
  </nav>
)}

</header>

  );
}
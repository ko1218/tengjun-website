"use client";

import { useState } from "react";
import FormField from "./FormField";

const API =
  "https://script.google.com/macros/s/AKfycbzRtnD8ZI0S7KmZ4vMtsLFG54XChDS714QQKRmzS02Y8eybEPjscq_zUYvtkbyAtMNs/exec";

const services = [
  "居家水電維修",
  "衛浴設備安裝",
  "特殊抓漏工程",
  "照明設備施工",
  "商業空間工程",
  "電力申請",
];

export default function Contact() {
  const empty = {
    name: "",
    phone: "",
    address: "",
    service: services[0],
    message: "",
  };

  const [form, setForm] = useState(empty);

  const update = (k: keyof typeof form, v: string) =>
    setForm({ ...form, [k]: v });

  const send = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("送出成功！");
    setForm(empty);
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black">免費估價</h2>
        <p className="mt-3 text-[#6f665d]">填寫資料，我們將盡快與您聯絡。</p>
      </div>

      <form onSubmit={send} className="grid gap-6 rounded-3xl bg-[#ebe5dc] p-8">
        {[
          ["name", "姓名"],
          ["phone", "電話"],
          ["address", "地址"],
        ].map(([key, label]) => (
          <FormField
            key={key}
            placeholder={label}
            value={form[key as keyof typeof form] as string}
            onChange={(v) => update(key as keyof typeof form, v)}
          />
        ))}

        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="rounded-xl border border-[#d8cec2] bg-white px-5 py-4"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <FormField
          as="textarea"
          placeholder="需求說明"
          value={form.message}
          onChange={(v) => update("message", v)}
        />

        <button
          type="submit"
          className="rounded-2xl bg-[#8d7459] py-4 font-semibold text-white hover:opacity-90"
        >
          送出免費估價
        </button>
      </form>
    </section>
  );
}
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Services from "./Components/Services";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";
export default function Home() {
  const services = [
  {
    icon: "🔧",
    title: "居家水電維修",
    desc: "快速處理漏水、跳電、插座異常及各式居家水電問題。",
  },
  {
    icon: "🚿",
    title: "衛浴設備安裝",
    desc: "馬桶、洗手台、熱水器、蓮蓬頭等設備安裝與更換。",
  },
  {
    icon: "💧",
    title: "特殊抓漏工程",
    desc: "浴室、屋頂、牆面及管線專業抓漏與檢測。",
  },
  {
    icon: "💡",
    title: "照明設備施工",
    desc: "室內外燈具、照明設計及線路配置。",
  },
  {
    icon: "🏢",
    title: "商業空間工程",
    desc: "店面、辦公室及工作室水電規劃施工。",
  },
  {
    icon: "⚡",
    title: "電力申請",
    desc: "台電申請、配電規劃及電線更新。",
  },
];
  return (
    <main className="min-h-screen bg-[#f4f0ea] text-[#40372f]">

      <Header />

      <Hero />

      <Stats />

     <Services  services={services} />

     <Contact />

      <Map />

      <Footer />

      <FloatingButtons />
      
    </main>
  );
}
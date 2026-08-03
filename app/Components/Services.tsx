type Service = {
  icon: string;
  title: string;
  desc: string;
};

export default function Services({
  services,
}: {
  services: Service[];
}) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">

      <div className="mb-16 text-center">
        <p className="text-sm tracking-[0.3em] text-[#8d7459]">
          SERVICES
        </p>

        <h2 className="mt-4 text-4xl font-black">
          專業服務項目
        </h2>

        <p className="mt-4 text-[#7b726a]">
          提供住宅與商業空間完整水電工程服務
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-[#ebe5dc] p-6 transition hover:shadow-lg"
          >
            <div className="text-4xl">{service.icon}</div>

            <h3 className="mt-5 text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mt-3 leading-8 text-[#6f665d]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
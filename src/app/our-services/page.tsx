import Image from "next/image";
import { MdTv, MdSupportAgent, MdSecurity } from "react-icons/md";
import serviceImage1 from "@/app/assets/slider/service_display.jpeg";
import serviceImage2 from "@/app/assets/slider/services_support.jpeg";
import serviceImage3 from "@/app/assets/slider/service_call.jpg";

import Link from "next/link";

const services = [
  {
    key: "onsite",
    title: "IT Support",
    blurb:
      "We provide reliable onsite support for all your network-related needs, ensuring smooth setup and optimal performance. Our expert technicians handle everything from cabling and hardware installation to router and switch configurations. During hypercare periods, we offer hands-on assistance to quickly resolve issues and minimize downtime. Trust us to keep your network running securely and efficiently right from day one.",
    image: serviceImage2,
    icon: <MdSupportAgent className="text-3xl text-accent" />,
    bullets: [
      "Cabling, hardware install, routing/switching",
      "Hypercare with rapid issue resolution",
      "Performance, reliability & security",
    ],
  },
  {
    key: "menu",
    title: "Smart Display Installation",
    blurb:
      "Upgrade your customer experience with professional digital menu displays that not only look great but also drive sales. We offer seamless, end-to-end installation of digital menu boards for restaurants, cafés, food trucks, and retail businesses—helping you showcase your offerings clearly and encourage customers to buy more.",
    image: serviceImage1,
    icon: <MdTv className="text-3xl text-accent" />,
    bullets: [
      "Digital video signage",
      "Indoor menu screen",
      "Outdoor digital smart screen",
      "Drive through menu boards",
    ],
  },

  {
    key: "managed",
    title: "Managed Services",
    blurb:
      "Let us handle your IT, so you can focus on your business. Our managed services include proactive monitoring, regular maintenance, security updates, and full tech support — all tailored to keep your systems running efficiently and securely. With our team by your side, you get peace of mind and expert support, 24/7.",
    image: serviceImage3,
    icon: <MdSecurity className="text-3xl text-accent" />,
    bullets: [
      "Proactive monitoring & maintenance",
      "Security updates & patching",
      "24/7 help when you need it",
    ],
  },
];

export default function OurServices() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Practical, reliable, and scalable solutions—delivered by experts who
            care about outcomes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 grid grid-cols-1 gap-8">
        {services.map((s, i) => (
          <article
            key={s.key}
            className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div
              className={`relative h-56 md:h-auto ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/0 to-black/0 group-hover:to-black/[.03] transition" />
            </div>

            {/* Content */}
            <div className={`p-6 md:p-10 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{s.blurb}</p>

              {s.bullets?.length ? (
                <ul className="list-disc mt-5 grid gap-2 text-gray-700 ">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent text-accent font-semibold px-5 py-3 hover:bg-accent hover:text-zinc-700 transition"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA band */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Not sure where to start?
              </h3>
              <p className="text-gray-600 mt-1">
                Tell us your goals—we’ll recommend the right mix of services for
                impact and value.
              </p>
            </div>
            <Link href="/contact-us">
              <button className="primary-button">Talk to an expert</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

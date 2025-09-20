import Image from "next/image";
import heroImage from "@/app/assets/hero.jpg";
import serviceImage1 from "@/app/assets/slider/service1.jpg";
import serviceImage2 from "@/app/assets/slider/service2.jpg";
import serviceImage3 from "@/app/assets/slider/service3.jpg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[46vh] md:h-[56vh] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Diamond Tech Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-accent">Diamond Tech</span>
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Connecting people through solutions — networking, installations, and
            managed services tailored for real-world impact.
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Tech Journey Here
            </h1>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                With over 8 years of experience,{" "}
                <span className="font-semibold">Diamond Tech</span> has been a
                trusted leader in delivering top-notch networking, installation,
                and managed services to businesses of all sizes. We’re driven by
                a commitment to excellence, innovation, and personalized tech
                solutions that keep your operations running smoothly.
              </p>
              <p>
                At Diamond Tech, we believe in the power of tech to transform
                businesses. Our expert team is dedicated to optimizing your
                network, providing seamless installations, and delivering
                unparalleled tech consulting. Partner with us for tech success.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-accent">8+</p>
                <p className="text-sm text-gray-600">Years of experience</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-accent">69+</p>
                <p className="text-sm text-gray-600">Projects delivered</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-accent">98%</p>
                <p className="text-sm text-gray-600">Client satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={serviceImage1}
                    alt="Work snapshot 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={serviceImage2}
                  alt="Work snapshot 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={serviceImage3}
                  alt="Work snapshot 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold">What We Do</h3>
          <p className="mt-2 text-gray-600">
            End-to-end solutions to power and protect your business.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg">Networking</h4>
              <p className="text-gray-600 mt-2">
                Reliable, scalable network design and implementation.
              </p>
              <ul className="list-disc ml-3 mt-2">
                <li>Wired</li>
                <li>Wireless</li>
                <li>Hybrid environments</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg">
                Starlink / Hardware Installations
              </h4>
              <p className="text-gray-600 mt-2">Professional on-site setup.</p>
              <ul className="list-disc ml-3 mt-2">
                <li>Routing</li>
                <li>Server racking</li>
                <li>Switching</li>
                <li>CCTV</li>
                <li>Structured cabling</li>
                <li>Smart office solutions</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg">Managed Services</h4>
              <p className="text-gray-600 mt-2">
                Proactive monitoring, updates, and support that keep your
                operations running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_40%)]" />
            <div className="relative px-8 py-10 md:px-12 md:py-1">
              <h4 className="text-2xl md:text-3xl font-bold">
                Ready to partner with Diamond Tech?
              </h4>
              <p className="mt-2 max-w-2xl">
                Let’s optimize your network, streamline installs, and scale your
                operations with confidence.
              </p>
              <div className="mt-6">
                <Link href="/contact-us">
                  <button className="primary-button">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

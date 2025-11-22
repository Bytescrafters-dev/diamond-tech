import Link from "next/link";
import ImageSlider from "../common/imageSlider";

const Team = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-8 md:px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="mb-6 text-justify">
            We specialize in delivering comprehensive, end-to-end technology
            solutions that are carefully tailored to meet the unique
            requirements of your business. Whether you are a small start-up or a
            growing enterprise, we focus on understanding your goals and
            designing solutions that improve efficiency, reliability, and
            overall performance. Our approach combines technical expertise with
            a customer-centric mindset, ensuring that your systems are not only
            functional but also aligned with your long-term vision. Beyond
            traditional IT support, we also help businesses enhance customer
            engagement through creative and practical solutions. From menu board
            design to the installation of state-of-the-art digital menu
            displays, we provide tools that not only modernize your brand
            presentation but also create a more engaging and interactive
            customer experience. These visual solutions are designed to be both
            functional and eye-catching, ensuring your message is delivered
            effectively.
          </p>
          <Link href="/about-us">
            <button className="primary-button">Our Services</button>
          </Link>
        </div>
        <div className="overflow-hidden">
          <ImageSlider />
        </div>
      </div>
    </div>
  </section>
);

export default Team;

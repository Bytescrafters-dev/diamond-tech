import ProfileImage1 from "@/app/assets/testimonials/testimonial1.png";
import ProfileImage2 from "@/app/assets/testimonials/testimonial2.png";
import ProfileImage3 from "@/app/assets/testimonials/testimonial3.png";
import TestimonialCard from "./components/testimonialCard";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profileImage: ProfileImage1,
    rating: 5,
    description: `Diamond Tech provided us with exceptional networking solutions. Their expertise and professionalism exceeded our expectations, and we highly recommend their services.`,
    company: "Sysco Food Company",
  },
  {
    id: 2,
    name: "Jane Washington",
    profileImage: ProfileImage2,
    rating: 5,
    description: `The team at Diamond Tech installed our TV panels flawlessly. Their attention to detail and efficiency stood out, making our collaboration smooth and successful.`,
    company: "WAND Digital",
  },
  {
    id: 3,
    name: "Jack Capstone",
    profileImage: ProfileImage3,
    rating: 5,
    description: `We chose Diamond Tech for our router installation, and they impressed us with their precision and expertise. Their skill in Starlink installation was an added bonus, delivering top-quality service and performance.`,
    company: "Netview Inc.",
  },
];

const Testimonials = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(
          ({ id, profileImage, name, rating, description, company }) => (
            <TestimonialCard
              key={id}
              profileImage={profileImage}
              name={name}
              rating={rating}
              description={description}
              company={company}
            />
          )
        )}
      </div>
    </div>
  </section>
);

export default Testimonials;

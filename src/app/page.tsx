import Banner from "./pageComponents/home/banner";
// import Blogs from "./pageComponents/home/blogs";
import Stats from "./pageComponents/home/stats";
import Services from "./pageComponents/home/services";
import Testimonials from "./pageComponents/home/testimonials";

export default function Home() {
  return (
    <main className="relative top-[-6rem]">
      <Banner />
      <Stats />
      <Services />
      {/* <Blogs /> */}
      <Testimonials />
    </main>
  );
}

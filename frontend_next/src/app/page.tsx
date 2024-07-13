import Navbar from "@/components/navbar/Navbar";
import HomeDash from "@/components/home/Home";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeDash />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

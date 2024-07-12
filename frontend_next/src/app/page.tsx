import Navbar from "@/components/navbar/Navbar";
import HomeDash from "@/components/home/Home";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeDash />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

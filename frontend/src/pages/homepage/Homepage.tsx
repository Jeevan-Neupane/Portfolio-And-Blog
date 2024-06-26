import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;

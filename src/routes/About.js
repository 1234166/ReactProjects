import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg="https://images.unsplash.com/photo-1455383333344-451b6147021b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="About"
        btnClass=".hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;

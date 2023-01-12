import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
        title="Contact"
        btnClass=".hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;

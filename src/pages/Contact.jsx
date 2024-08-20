import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <section id="contact" className="container px-10 md:px-4">
        <h2 className="font-bold text-2xl md:text-4xl mt-10 mb-5">Contact</h2>
          <p className="text md:text-xl mb-10">Feel free to reach out—I'd love to hear from you.</p>

          <h4 className="font-bold">Email</h4>
          <p><a className="no-hover" href="mailto:nelisa.dludla@outlook.com">nelisa.dludla@outlook.com</a></p>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;

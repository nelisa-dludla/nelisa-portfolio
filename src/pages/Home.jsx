import Navbar from "../components/Navbar";
import profilePicture from "../assets/images/nelisa.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <section id="home" className="z-0 flex flex-col items-center md:flex-row md:justify-center md:items-center">
          {/* LHS */}
          <div className="mt-10 max-w-52 sm:max-w-80 md:max-w-96 rounded-full border border-black">
            <img
              className="object-cover rounded-full h-full w-full"
              src={profilePicture}
              alt="A picture of Nelisa"
            />
          </div>
          {/* RHS */}
          <div className="p-10">
            <h1 className="font-bold text-3xl md:text-7xl">Hello, I'm Nelisa</h1>
            <h2 className="text-lg my-6 md:my-12">
              I'm a self-taught software and web developer with an itch to build and
              create.
            </h2>
            {/* "CTA Buttons" */}
            <div className="flex justify-center md:justify-normal">
              <Link to="/projects">
                <div className="portfolio-green-bg p-6 font-bold md:text-xl w-28 h-28 md:w-32 md:h-32 mr-8 rounded-full flex justify-center items-center border border-black cta-btn">
                  <p>Projects</p>
                </div>
              </Link>
              <Link to="/contact">
                <div className="portfolio-yellow-bg p-6 font-bold md:text-xl w-28 h-28 md:w-32 md:h-32 rounded-full flex justify-center items-center border border-black cta-btn">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;

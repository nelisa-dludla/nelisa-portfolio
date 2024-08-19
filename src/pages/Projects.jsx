import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* Images/Screenshots */
import redFlagSocial from "../assets/images/red-flag-social.png";
import frontSeat from "../assets/images/front-seat.png";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <h2 className="font-bold text-2xl lg:text-4xl mx-10 lg:mx-10 mt-10">Projects</h2>
        <section id="projects" className="container mx-10 lg:mx-0">
          {/* Project Card - Red Flag Social */}
          <div className="flex flex-col lg:flex-row my-10 mr-10 lg:mr-0 lg:my-20">
            {/* LHS */}
            <div className="max-w-96 lg:max-w-3xl">
              <h5 className="font-bold text-xl mb-5">Red Flag Social</h5>
              <p className="mb-4 pr-4">
                Red Flag Social is a web application built with Django that
                empowers users to report and identify suspicious activity on
                social media platforms. The goal is to create a safer online
                space by fostering community awareness and flagging potential
                red flags.
              </p>
              <span className="flex items-center">
                <i class="devicon-github-original colored text-2xl mr-2"></i>
                <a
                  href="https://github.com/nelisa-dludla/red-flag-social"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </span>
              <p className="flex items-center">
                <span className="p-2 font-bold text-2xl">{"> "}</span>
                <a href="https://red-flag-social.onrender.com/" target="_blank">
                  Live Application
                </a>
              </p>
              <div className="mt-6">
                <i class="devicon-django-plain-wordmark colored text-7xl mr-8"></i>

                <i class="devicon-bootstrap-plain-wordmark colored text-7xl mr-8"></i>

                <i class="devicon-postgresql-plain-wordmark colored text-7xl"></i>
              </div>
            </div>
            {/* RHS */}
            <div className="max-w-80 md:max-w-96 lg:max-w-2xl mt-10 lg:mt-0">
              <a href="https://red-flag-social.onrender.com/" target="_blank">
                <img
                  className="w-full border border-black"
                  src={redFlagSocial}
                  alt="A screenshot of Red Flag Social's Landing Page"
                />
              </a>
            </div>
          </div>
          {/* Project Card - FrontSeat */}
          <div className="flex flex-col lg:flex-row my-10 mr-10 lg:mr-0 lg:my-20">
            {/* LHS */}
            <div className="max-w-96 lg:max-w-3xl">
              <h5 className="font-bold text-xl mb-5">FrontSeat</h5>
              <p className="mb-4 pr-4">
                FrontSeat is a simple web app designed to assist in collecting
                and managing minibus fare payments. It streamlines the process
                of collecting payments from passengers and calculates the total
                amount collected, amount missing, and more to help the person in
                the front seat efficiently manage fare transactions.
              </p>
              <span className="flex items-center">
                <i class="devicon-github-original colored text-2xl mr-2"></i>
                <a
                  href="https://github.com/nelisa-dludla/taxi-maths"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </span>
              <p className="flex items-center">
                <span className="p-2 font-bold text-2xl">{"> "}</span>
                <a href="https://frontseat.pages.dev/" target="_blank">
                  Live Application
                </a>
              </p>
              <div className="mt-6">
                <i class="devicon-html5-plain-wordmark colored text-7xl mr-8"></i>

                <i class="devicon-css3-plain-wordmark colored text-7xl mr-8"></i>

                <i class="devicon-javascript-plain colored text-7xl mr-8"></i>
              </div>
            </div>
            {/* RHS */}
            <div className="max-w-80 md:max-w-96 lg:max-w-2xl mt-10 lg:mt-0">
              <a href="https://frontseat.pages.dev/" target="_blank">
                <img
                  className="w-full border border-black"
                  src={frontSeat}
                  alt="A screenshot of Red Flag Social's Landing Page"
                />
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Projects;

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* Images/Screenshots */
import redFlagSocial from "../assets/images/red-flag-social.png";
import frontSeat from "../assets/images/front-seat.png";
import emojiRiddle from "../assets/images/emoji-riddle.png";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <h2 className="font-bold text-2xl lg:text-4xl mx-10 md:mx-0 mt-10">
          Projects
        </h2>
        <section id="projects" className="container p-10 md:p-0">
          {/* Project Card - Emoji Riddle */}
          <div className="flex flex-col lg:flex-row my-10 md:mr-10 lg:mr-0 lg:my-20">
            {/* LHS */}
            <div className="max-w-96 md:max-w-xl lg:max-w-3xl">
              <h5 className="font-bold text-xl mb-5">Emoji Riddle</h5>
              <p className="mb-4 md:pr-4 text-justify">
                A fun and interactive web app where you guess the word, phrase,
                or title based on emojis! 🧩
                <br />
                <br />
                Emoji Riddle is designed to challenge your emoji decoding
                skills. Each riddle presents a series of emojis that represent a
                common word, phrase, or title. Your goal is to guess the correct
                answer and see how many you can solve! 🌟
              </p>
              <span className="flex items-center">
                <i class="devicon-github-original colored text-2xl mr-2"></i>
                <a
                  href="https://github.com/nelisa-dludla/emoji-riddle"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </span>
              <p className="flex items-center">
                <span className="p-2 font-bold text-2xl">{"> "}</span>
                <a href="https://emoji-riddle.pages.dev" target="_blank">
                  Live Application
                </a>
              </p>
              <div className="mt-6">
                <i class="devicon-react-original colored text-7xl mr-8"></i>
                
            <i class="devicon-typescript-plain colored text-7xl"></i>

              </div>
            </div>
            {/* RHS */}
            <div className="max-w-80 md:max-w-96 lg:max-w-2xl mt-10 lg:mt-0">
              <a href="https://emoji-riddle.pages.dev" target="_blank">
                <img
                  className="w-full border border-black"
                  src={emojiRiddle}
                  alt="A screenshot of Emoji Riddle's Game Play"
                />
              </a>
            </div>
          </div>
          {/* Project Card - Red Flag Social */}
          <div className="flex flex-col lg:flex-row my-10 md:mr-10 lg:mr-0 lg:my-20">
            {/* LHS */}
            <div className="max-w-96 md:max-w-xl lg:max-w-3xl">
              <h5 className="font-bold text-xl mb-5">Red Flag Social</h5>
              <p className="mb-4 md:pr-4 text-justify">
                A web application built with Django that empowers users to
                report and identify suspicious activity on social media
                platforms. The goal is to create a safer online space by
                fostering community awareness and flagging potential red flags.
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
          <div className="flex flex-col lg:flex-row my-10 md:mr-10 lg:mr-0 lg:my-20">
            {/* LHS */}
            <div className="max-w-96 md:max-w-xl lg:max-w-3xl">
              <h5 className="font-bold text-xl mb-5">FrontSeat</h5>
              <p className="mb-4 md:pr-4 text-justify">
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
                  alt="A screenshot of FrontSeat's Landing Page"
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

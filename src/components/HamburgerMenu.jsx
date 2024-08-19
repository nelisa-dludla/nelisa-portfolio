import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({ setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav id="hamburger-menu" className="fixed top-0 left-0 z-10 w-screen h-screen portfolio-white-bg p-10 flex flex-col">
        <button className="text-2xl p-2 text-right" onClick={handleClick}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
        </button>
        <div className="my-auto">
          <ul className="flex flex-col items-center">
            <Link to="/projects">
              <li className="p-2 my-auto text-3xl">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="p-2 my-auto text-3xl">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;

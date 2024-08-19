import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenu setIsOpen={setIsOpen} />
      ) : (
        <nav className="flex flex-row justify-between p-4 h-[80px]">
          {/* LHS*/}
          <div>
            <ul className="flex flex-row">
              <li className="portfolio-green-bg w-4 h-4 mb:w-7 mb:h-7 my-auto rounded-full"></li>
              <Link to="/home">
                <li className="p-2 font-bold text-md mb:text-xl my-auto">
                  Nelisa Dludla
                </li>
              </Link>
              <li className="text-sm mb:text p-2 my-auto">
                Software Developer
              </li>
            </ul>
          </div>
          {/* RHS*/}
          {isMobile ? (
            <button className="text-2xl p-2" onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
            </button>
          ) : (
            <div className="hidden md:block">
              <ul className="flex flex-row">
                <Link to="/projects">
                  <li className="p-2 my-auto">Projects</li>
                </Link>
                <Link to="/contact">
                  <li className="p-2 my-auto">Contact</li>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;

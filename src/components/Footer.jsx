const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-black px-4 py-10">
        <div>
          <p className="font-bold mb-0 mb:mb-2">Email</p>
          <p><a className="no-hover" href="mailto:nelisa.dludla@outlook.com">nelisa.dludla@outlook.com</a></p>
        </div>
        <div>
          <p className="font-bold mt-4 mb:mt-0 mb-0 mb:mb-2">Follow Me</p>

          <a href="https://www.linkedin.com/in/nelisa-dludla/" target="_blank"><i className="devicon-linkedin-plain colored text-2xl mr-4"></i></a>

          <a href="https://github.com/nelisa-dludla" target="_blank">
          <i className="devicon-github-original colored text-2xl"></i>
          </a>
        </div>
        <div className="text-gray-500 mt-4 mb:mt-0">&copy; {date.getFullYear()} By Nelisa Dludla.</div>
      </footer>
    </>
  );
};

export default Footer;

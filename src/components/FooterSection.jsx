export default function FooterSection() {
  return (
    <>
      <div className="flex items-end w-full bg-white">
        <footer className="w-full text-gray-700 bg-white body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img
                  className="w-auto h-20 text-gray-900 fill-current"
                  src="https://alphathreaded.vercel.app/logo.jpeg"
                ></img>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                AlphaThreaded Products
              </p>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                  Links
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      href="#about"
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="#services"
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="#testimonials"
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                    >
                      Testimonials
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      href="#contact"
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                    >
                      Request a Quote
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      (713) 649-3754
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-red-700">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-white capitalize xl:text-center">
                © 2023 AlphaThreaded Products, All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

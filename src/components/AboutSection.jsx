import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import logo from "../assets/logo2.jpeg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div id="about" className=" bg-gray-200 py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div
            ref={ref}
            className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12"
          >
            <div className="md:5/12 lg:w-5/12">
              <img src={logo} alt="image" width="500" height="500" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                  About AlphaThreaded
                </h2>
              </motion.div>

              <p className="mt-6 text-gray-600">
                Alpha Threaded Fastener Supply is a custom bolts manufacturer
                and wholesale fastener company. We have been manufacturing and
                fabricating custom U-Bolts and Coated U-Bolts, Anchor Bolts,
                Specialty Bolts, Eye Bolts, J-Bolts, Square Bolts, Stud Bolts,
                Hex Head Cap Screws, Socket Pipe Plugs, Stud Bolts, and other
                u-bolt and fastener products for a variety of industries since
                1959. Alpha Threaded Fastener Supply is an authorized stocking
                distributor for UNBRAKO, Flexloc®, SPIROL Fasteners & Pins®, and
                SIMPSON STRONG-TIES®. We also stock standard and long tangent
                round bend U-Bolts’ including Strut Hardware for various
                industries.
              </p>
              <p className="mt-4 text-gray-600">
                Here at Alpha Threaded Fastener Supply, we also supply u-bolts
                and custom u-bolts in various materials. The materials of
                u-bolts we supply include 304 stainless steel u-bolts, 316
                stainless steel u-bolts, monel u-bolts, inconel u-bolts, and
                more. For more information on the types of materials we provide,
                contact us today!
              </p>
              <p className="mt-4 text-gray-600">
                Our success has been possible through excellent service and a
                commitment to quality unmatched in the industry. We take pride
                in our dedication to efficiency and would be pleased to support
                all of your bolt and fastener needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

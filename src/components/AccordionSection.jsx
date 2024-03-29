/* eslint-disable react/prop-types */
import { RiGovernmentLine } from "react-icons/ri";
import {
  MdOutlineEnergySavingsLeaf,
  MdOutlineConstruction,
  MdPrecisionManufacturing,
} from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section id="services" className="pt-8 pb-16 py-12 bg-red-600 ">
      <div className="w-full justify-center text-center pb-8">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Industries Served
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-red-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "300px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Energy Production",
    Icon: MdOutlineEnergySavingsLeaf,
    imgSrc: "https://alphathreaded.vercel.app/sliderone.jpg",
    description:
      "Supplying critical fastening solutions to the energy sector, our robust and reliable fasteners ensure the structural integrity of power plants and infrastructure, fortifying the foundation of sustainable energy development.",
  },
  {
    id: 2,
    title: "Construction",
    Icon: MdOutlineConstruction,
    imgSrc: "https://alphathreaded.vercel.app/slidertwo.jpg",
    description:
      "Elevate construction projects with our premium fasteners. From structural bolts to specialty screws, our tools and fasteners deliver unmatched durability, securing foundations for buildings that stand the test of time.",
  },
  {
    id: 3,
    title: "Manufacturing & Industrial",
    Icon: MdPrecisionManufacturing,
    imgSrc: "https://alphathreaded.vercel.app/sliderthree.jpg",
    description:
      "In the heart of manufacturing, our precision tools and fasteners play a pivotal role, optimizing production lines for efficiency. Trust us to provide the sturdy connections that drive industrial success.",
  },
  {
    id: 4,
    title: "Public Sector",
    Icon: RiGovernmentLine,
    imgSrc: "https://alphathreaded.vercel.app/sliderfour.jpg",
    description:
      "Serving the public sector, our fasteners contribute to the safety and longevity of infrastructure projects. From bridges to civic structures, our tools provide the reliability essential for community well-being.",
  },
];

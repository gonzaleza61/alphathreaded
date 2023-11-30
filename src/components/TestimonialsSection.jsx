import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="testimonials"
      className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-5xl font-semibold">
          See what our customers think.
        </h3>
        <p className="text-slate-500 my-4">
          Discover firsthand insights that highlight Alpha Threaded's excellence
          in tools and fastener supply.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-around"
    >
      <p className="text-lg lg:text-xl font-light italic my-8">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

const testimonials = [
  {
    description:
      "Incredible folks, ready to assist with tasks big or small. Show this local business some love, stop by!.",
    name: "Jerry Nguyen",
    title: "Construction Site Supervisor",
  },
  {
    description:
      "I needed custom square u-bolts for a small project, with unique dimensions and a small order. Alpha Threaded exceeded expectations—the bolts turned out perfect! Outstanding customer service as well! ",
    name: "Johnathan Rodriguez",
    title: "Maintenance Technician",
  },
  {
    description:
      "Alpha Threaded is my go-to for fasteners and tools. Their knowledgeable team always finds the perfect solution for any project. Excellent service and quality products!",
    name: "Phil Heath",
    title: "Manufacturing Plant Manager",
  },
  {
    description:
      "Impressed with Alpha Threaded's prompt service and top-notch fasteners. Ordered a variety for my construction project, and they delivered quality and reliability. Highly recommend!",
    name: "Andrea Beck",
    title: "Infrastructure Project Manager",
  },
  {
    description:
      "Alpha Threaded consistently exceeds expectations. From custom orders to standard fasteners, they provide excellent service. Their dedication to quality makes them stand out in the industry!",
    name: "Daniel Henderson",
    title: "Custom Furniture Craftsman",
  },
  {
    description:
      "Alpha Threaded sets the standard for reliability. Needed specific fasteners urgently, and they not only delivered on time but also ensured top-notch quality. Trustworthy and efficient—a customer for life!",
    name: "Anderson Lima",
    title: "PElectrical Contractor",
  },
];

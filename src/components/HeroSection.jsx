import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Empowering Builders Everywhere.
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Precision Tools, Reliable Fasteners, Endless Possibilities
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Unleash Your Potential with Premium Tools and Trusted
          Fasteners—Building {"Tomorrow's"} Success Stories Today.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Contact Us
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://alphathreaded.vercel.app/alphanails.jpg",
  },
  {
    id: 2,
    src: "https://alphathreaded.vercel.app/alphabolts.jpg",
  },
  {
    id: 3,
    src: "https://alphathreaded.vercel.app/alphaone.jpg",
  },
  {
    id: 4,
    src: "https://alphathreaded.vercel.app/alphatwo.jpg",
  },
  {
    id: 5,
    src: "https://alphathreaded.vercel.app/alphathree.jpg",
  },
  {
    id: 6,
    src: "https://alphathreaded.vercel.app/alphafour.jpg",
  },
  {
    id: 7,
    src: "https://alphathreaded.vercel.app/alphafive.jpg",
  },
  {
    id: 8,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 9,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 10,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 11,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 12,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 13,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 14,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 15,
    src: "hhttps://alphathreaded.vercel.app/alphaseven.jpg",
  },
  {
    id: 16,
    src: "https://alphathreaded.vercel.app/alphaseven.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;

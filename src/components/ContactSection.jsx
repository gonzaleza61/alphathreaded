/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <section id="contact" className="p-4 bg-gray-200">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({ selected, setSelected }) => {
  const [name, setName] = useState(" ");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company" ? "bg-red-700" : "bg-red-600"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={`${
            selected === "company" ? "bg-red-900" : "bg-red-700"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              className={`${
                selected === "company" ? "bg-red-900" : "bg-red-900"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I'd love to ask about...</p>
        <textarea
          placeholder=""
          className={`${
            selected === "company" ? "bg-red-900" : "bg-red-700"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "company"
            ? "bg-white text-red-700"
            : "bg-white text-red-600"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({ selected, setSelected }) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-black" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-black" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://alphathreaded.vercel.app/contactone.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://alphathreaded.vercel.app/contactwo.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  const [submitted, setSubmitted] = useState("");
  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },

    //Form Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Name must be 25 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .max(50, "Name must be 50 characters or less.")
        .required("Email is required."),
      phone: Yup.string()
        .min(7, "Phone number must be longer than 7 digits.")
        .max(15, "Phone number must be less than 15 digits.")
        .required("Phone Number is required."),
      company: Yup.string()
        .max(25, "Company name must be 25 characters or less.")
        .notRequired(),
      message: Yup.string()
        .max(500, "Message must be 500 characters or less.")
        .required("Message is required."),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
      setSubmitted("Message has been submitted.");
      values.name = "";
      values.email = "";
      values.phone = "";
      values.company = "";
      values.message = "";
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company" ? "bg-red-700" : "bg-red-600"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">
          {formik.touched.name && formik.errors.name
            ? formik.errors.name
            : "Name"}
        </p>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${
            selected === "company" ? "bg-red-900" : "bg-red-700"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2">
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : "Email"}
        </p>
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${
            selected === "company" ? "bg-red-900" : "bg-red-700"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2">
          {formik.touched.phone && formik.errors.phone
            ? formik.errors.phone
            : "Phone Number"}
        </p>
        <input
          type="tel"
          name="phone"
          placeholder="e.g., (555) 123-4567"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
            <p className="text-2xl mb-2">
              {formik.touched.company && formik.errors.company
                ? formik.errors.company
                : "Company Name"}
            </p>
            <input
              type="text"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="XYZ Corporation"
              className={`${
                selected === "company" ? "bg-red-900" : "bg-red-900"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">
          {formik.touched.message && formik.errors.message
            ? formik.errors.message
            : "I'd love to ask about..."}
        </p>
        <textarea
          placeholder="Type your message here..."
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
      <p>{submitted}</p>
    </form>
  );
};

const FormSelect = ({ selected, setSelected }) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        type="button"
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
        type="button"
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

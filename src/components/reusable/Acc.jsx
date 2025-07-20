import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// const accordionData = [
//   {
//     id: "1",
//     head: "What is Material Tailwind?",
//     body: "We're not always in the position that we want to be at. We're constantly growing, making mistakes, and trying to actualize our dreams.",
//   },
//   {
//     id: "2",
//     head: "How to use Material Tailwind?",
//     body: "Start by integrating Tailwind CSS with components styled following Material Design guidelines and enhanced with interactivity.",
//   },
//   {
//     id: "3",
//     head: "What can I do with Material Tailwind?",
//     body: "You can build beautiful, responsive UIs with minimal effort while maintaining accessibility and consistency across your project.",
//   },
// ];

export default function Acc({ accordionData, dir }) {
  const [open, setOpen] = useState("0");

  const toggleOpen = (id) => {
    setOpen(open === id ? "0" : id);
  };

  return (
    <div className="flex flex-col divide-y overflow-hidden">
      {accordionData.map((el) => (
        <div key={el.id} className="flex w-full flex-col overflow-hidden">
          <button
            onClick={() => toggleOpen(el.id)}
            className={`${dir === "left" ? "flex" : "flex-row-reverse"} ${dir === "left" ? "text-left" : "text-right"} w-full items-center justify-between px-5 py-4 font-semibold text-[#ecb962] text-black transition-colors`}
          >
            <span>{el.head}</span>
            <IoIosArrowDown
              className={`transform text-xl transition-transform duration-300 ${
                open === el.id ? "rotate-180" : ""
              }`}
            />
          </button>
          {/*  */}
          <AnimatePresence initial={false}>
            {open === el.id && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-5"
              >
                <div className={`py-4 text-white ${dir === "left" ? "text-left" : "text-right"}`}>
                  <span>
                    {" "}
                    {el.body.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

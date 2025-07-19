/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Program from "./program/Prgram";
import Taranem from "./taranem/Taranem";
import Slogan from "./slogan/Slogan";
import Prayer from "./prayer/Prayer";
// Images
import programImg from "../assets/program.jpeg";
import taranemImg from "../assets/taranem.jpeg";
import prayersImg from "../assets/prayer.jpeg";
import sloganImg from "../assets/slogan.jpeg";

const tabs = ["Program", "Taranem", "Slogan", "Prayer"];

export default function Tabs() {
  const [selected, setSelected] = useState("Program");
  const [accordionData, setAccordionData] = useState([
    {
      id: "1",
      head: "What is Material Tailwind?",
      body: "We're not always in the position that we want to be at. We're constantly growing, making mistakes, and trying to actualize our dreams.",
    },
    {
      id: "2",
      head: "How to use Material Tailwind?",
      body: "Start by integrating Tailwind CSS with components styled following Material Design guidelines and enhanced with interactivity.",
    },
    {
      id: "3",
      head: "What can I do with Material Tailwind?",
      body: "You can build beautiful, responsive UIs with minimal effort while maintaining accessibility and consistency across your project.",
    },
  ]);

  const components = {
    Program: Program,
    Taranem: Taranem,
    Slogan: Slogan,
    Prayer: Prayer,
  };
  const ComponentToRender = components[selected];

  // Create a new object to map tab names to image sources
  const images = {
    Program: programImg,
    Taranem: taranemImg,
    Slogan: sloganImg,
    Prayer: prayersImg,
  };

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#c67f31] px-3 pb-10">
      <ul className="h relative flex w-full space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className="relative px-1 py-2 text-xl font-semibold text-[#ecb962] [text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]"
          >
            {/* Use the new images object to render the correct image in a single line */}
            <img src={images[tab]} alt={`${tab}`} className="h-full rounded-md object-cover" />
            {selected === tab && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-1 rounded bg-[#ecb962]"
              />
            )}
          </button>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-8 w-full text-xl text-gray-700"
        >
          {ComponentToRender && <ComponentToRender />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

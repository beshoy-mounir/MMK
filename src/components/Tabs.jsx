/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Program from "./program/Prgram";
import Taranem from "./taranem/Taranem";
import Slogan from "./slogan/Slogan";
import Prayer from "./prayer/Prayer";

const tabs = ["ترانيم", "الشعار", "الصلاه", "البرنامج"];

export default function Tabs() {
  const [selected, setSelected] = useState("البرنامج");

  const components = {
    البرنامج: Program,
    ترانيم: Taranem,
    الشعار: Slogan,
    الصلاه: Prayer,
  };
  const ComponentToRender = components[selected];

  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-3 pb-10 pt-5 backdrop-blur-md">
      <ul className="relative flex w-full justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className="relative px-1 py-2 text-right text-2xl font-semibold"
          >
            {/* Use the new images object to render the correct image in a single line */}
            {/* <img src={images[tab]} alt={`${tab}`} className="h-full w-20 rounded-md object-cover" /> */}
            {<span>{tab}</span>}
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

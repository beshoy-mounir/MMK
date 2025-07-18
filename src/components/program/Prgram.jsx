import { useState } from "react";
import Acc from "../reusable/Acc";

export default function Program() {
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
  return (
    <>
      <Acc accordionData={accordionData} />
    </>
  );
}

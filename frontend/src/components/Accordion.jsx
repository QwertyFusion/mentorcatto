import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AccordionDemo() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (item) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(item)
        ? prevOpenItems.filter((i) => i !== item)
        : [...prevOpenItems, item]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto border-1 border-tertiary rounded-seven">
      <AccordionItem
        module="Module 1"
        title="Lorem Ipsum"
        isOpen={openItems.includes("item-1")}
        onClick={() => toggleItem("item-1")}
      >
        <p>Yes. It adheres </p>
        <p className="mt-4">Yes. It adheres </p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ module, title, isOpen, onClick, children }) {
  const contentRef = useRef(null);

  return (
    <div className="rounded-seven">
      <button
        className="w-full text-left p-4 rounded-seven focus:outline-none drop-shadow-custom hover:bg-accent-4 flex justify-between items-center transition duration-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white font-thin">{module}</p>
            <h2 className="text-base font-bold text-white">{title}</h2>
          </div>
          <span className="ml-50 text-white text-xl">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-accent-1 text-white overflow-hidden rounded-seven">
          {children}
        </div>
      </div>
    </div>
  );
}

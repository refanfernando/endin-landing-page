import { useState } from "react";

type Items = {
  key: number;
  title: string;
  value: JSX.Element;
};

type Props = {
  items: Items[];
};

function Accordion({ items }: Props) {
  const [show, setShow] = useState<Array<number>>([]);

  const handleShowAccordion = (key: number) => {
    if (show.includes(key)) {
      const newVal = show.filter((x) => x !== key);
      setShow(newVal);
      return;
    }
    setShow((prev) => [...prev, key]);
  };

  const isOpen = (key: number) => show.includes(key);

  return (
    <div className="text-left">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-sm overflow-hidden border-b border-gray-200 rounded-t-sm"
        >
          <button
            onClick={() => handleShowAccordion(item.key)}
            className="bg-gray-100 flex w-full py-2 px-4 justify-between hover:opacity-75"
          >
            <p className="font-semibold sm:text-xl">{item.title}</p>
            <div
              className={`${
                isOpen(item.key) ? "rotate-0" : "rotate-180"
              } transition-all duration-200`}
            >
              ⏏︎
            </div>
          </button>
          <div
            className={`
                ${isOpen(item.key) ? "max-h-[10000px]" : "max-h-0"}
                transition-all duration-200
              `}
          >
            <div className="p-4">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

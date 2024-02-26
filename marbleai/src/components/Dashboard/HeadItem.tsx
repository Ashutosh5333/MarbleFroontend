import { FaPencilAlt } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";

export const HeadItem = ({ title, total, per }:any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="rounded-lg cursor-pointer sm:w-1/4 px-4 md:px-6 py-4 hover:bg-[#F1F1F1] mb-4 sm:mb-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-1 px-1  border-b-2 border-dashed flex justify-between items-center">
        <p className="font-semibold text-[#303030]">{title}</p>
        <p className={`text-[#70707A] ${isHovered ? 'block' : 'hidden'}
        hover:p-1 hover:bg-[#aeabab] rounded  p-1
        `}>
          <FaPencilAlt />
        </p>
      </div>
      <div className="py-1 md:px-1 flex flex-row items-center gap-2">
        <p className="font-bold text-[#303030] text-lg">{total}</p>
        <div className="flex items-center">
          <BiSolidUpArrow className="text-sm text-[#70707A]" />
          <p className="text-[#70707A] text-[.8rem] ml-1">{per}</p>
        </div>
      </div>
    </div>
  );
};
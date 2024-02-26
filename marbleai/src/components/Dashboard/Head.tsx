import { FaPencilAlt } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";

const Head = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="m-auto sm:px-8 py-6 flex flex-col sm:flex-row gap-4 lg:gap-8">

      <div className="rounded-lg cursor-pointer sm:w-1/4 px-4 md:px-6 py-4 bg-[#F1F1F1] mb-4 sm:mb-0">
        <div className="py-1 px-1  border-b-2 border-dashed flex justify-between items-center">
          <p className="font-semibold text-[#303030]">Online store sessions</p>
          <p className="text-[#70707A]">
            <FaPencilAlt />
          </p>
        </div>
        <div className="py-1 md:px-1 flex flex-row items-center gap-2">
          <p className="font-bold text-[#303030] text-lg">255,581</p>
          <div className="flex items-center">
            <BiSolidUpArrow className="text-sm text-[#70707A]" />
            <p className="text-[#70707A] text-[.8rem] ml-1">9%</p>
          </div>
        </div>
      </div>

      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg cursor-pointer sm:w-1/4 px-4 md:px-6  py-4 hover:bg-[#F1F1F1] mb-4 sm:mb-0">
        <div className="py-1 px-1 flex  border-b-2 border-dashed justify-between items-center">
          <p className="font-semibold text-[#303030]">Net return value</p>
          <p className={`text-[#70707A] rounded p-1 ${isHovered ? 'block' : 'hidden'} hover:p-1 hover:bg-[#aeabab]`}>
             <FaPencilAlt />
          </p>
        </div>
        <div className="py-1 px-1 flex flex-row items-center gap-2">
          <p className="font-bold text-[#303030] text-lg">-$15,07.44</p>
          <div className="flex items-center">
            <BiSolidUpArrow className="text-sm text-[#70707A]" />
            <p className="text-[#70707A] text-[.8rem] ml-1">14%</p>
          </div>
        </div>
      </div>

      <div 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg cursor-pointer sm:w-1/4 px-4 md:px-6  py-4 hover:bg-[#F1F1F1] mb-4 sm:mb-0">
        <div className="py-1 px-1  border-b-2 border-dashed flex justify-between items-center">
          <p className="font-semibold text-[#303030]">Total orders</p>
          <p className={`text-[#70707A] rounded p-1 ${isHovered ? 'block' : 'hidden'} hover:p-1 hover:bg-[#aeabab]`}>
             <FaPencilAlt />
          </p>
        </div>
        <div className="py-1 px-1 flex flex-row items-center gap-2">
          <p className="font-bold text-[#303030] text-lg">10,511</p>
          <div className="flex items-center">
            <BiSolidUpArrow className="text-sm text-[#70707A]" />
            <p className="text-[#70707A] text-[.8rem] ml-1">9%</p>
          </div>
        </div>
      </div>

      <div 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg cursor-pointer sm:w-1/4 px-4 md:px-6  py-4 hover:bg-[#F1F1F1] mb-4 sm:mb-0">
        <div className="py-1 px-1  border-b-2 border-dashed flex justify-between items-center">
          <p className="font-semibold text-[#303030]">Conversion rate</p>
          <p className={`text-[#70707A] rounded p-1 ${isHovered ? 'block' : 'hidden'} hover:p-1 hover:bg-[#aeabab]`}>
             <FaPencilAlt />
          </p>
        </div>
        <div className="py-1 px-1 flex flex-row items-center gap-2">
          <p className="font-bold text-[#303030] text-lg">3.18%</p>
          <div className="flex items-center">
            <BiSolidUpArrow className="text-sm text-[#70707A]" />
            <p className="text-[#70707A] text-[.8rem] ml-1">7%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

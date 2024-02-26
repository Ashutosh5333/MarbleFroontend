import { useState } from 'react';

const TooltipWithQuotes = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
 

  const handlettoolMouseEnter = (event:any) => {
    const { top, left } = event.target.getBoundingClientRect();
    setShowTooltip(true);
    setTooltipPosition({ x: left, y: top });
  };

  const handletoolMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container z-50" 
    onMouseEnter={handlettoolMouseEnter} 
    onMouseLeave={handletoolMouseLeave}
    >
    <p> hover </p>
      {showTooltip && (
        <div className="tooltip  w-[30%] shadow-xl bg-[#FFFFFF] rounded-md px-2 py-2 " 
        style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
            <h1 className='font-semibold py-1 text-lg'> Online Store sessions </h1>
            <p className='py-1'>Your online store's traffic volume, shown in sessions. </p>
         
        </div>
      )} 
    </div>
  );
};

export default TooltipWithQuotes;

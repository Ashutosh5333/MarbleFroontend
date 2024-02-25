import Line from "../../assets/Line 3.png"

export const CustomLegend = ({data}:any) => {
    const firstMonth = data[0].date;
    const lastMonth = data[data.length - 1].date;

    return (
        <div className="custom-legend  px-4  border-red-700 flex justify-between items-center">
           <div></div>

           <div className="flex gap-5">
           <div className="flex rounded text-[.7rem] px-4 py-1 font-Inter bg-[#F1F1F1] items-center">
              <img className="m-1 p-1" src={Line}/>
            <p className="text-[#70707A] px-1 font-serif">{` ${firstMonth}`}</p>
            <p className="text-[#70707A] px-1 font-serif">{` -  ${lastMonth}`}</p>
          </div>
          <div className="flex rounded text-[.7rem] px-4 py-1 font-Inter bg-[#F1F1F1] items-center">
              <img className="m-1 p-1" src={Line}/>
            <p className="text-[#70707A] px-1 font-serif">{` ${firstMonth}`}</p>
            <p className="text-[#70707A] px-1 font-serif">{` -  ${lastMonth}`}</p>
          </div>
           </div>
           
            

        </div>
    );
};


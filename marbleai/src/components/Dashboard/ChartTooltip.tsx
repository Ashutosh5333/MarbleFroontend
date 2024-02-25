import LineImage from "../../assets/Line 3.png";

export const ChartTooltip = ({
    active,
    payload,
    coordinate,
    data 
}: any) => {
    if (active && payload && payload.length && data && data.length >= 2) {
        const tooltipStyle = {
            left: coordinate.x, 
            top: coordinate.y, 
        };

        const currentMonthData = payload[0].payload;
        const currentIndex = data.findIndex((item: any) => item.date === currentMonthData.date);
        
        if (currentIndex > 0) {
            const previousMonthData = data[currentIndex - 1];

            const percentageChange: number = ((currentMonthData.pv - previousMonthData.pv) / previousMonthData.pv) * 100;
            const absPercentageChange = Math.abs(Math.round(percentageChange));

            return (
                <div
                    className="p-1 py-2 px-4 flex flex-col shadow-lg bg-white justify-center items-start border rounded-lg"
                    style={tooltipStyle}
                >
                     <p className="Previous text-xs py-1 flex items-center gap-2">
                        <img className="m-1 p-1" src={LineImage} alt="Line" />
                        {`${currentMonthData.date} `}
                        <span className="p-1 font-semibold">{currentMonthData.pv}
                        <span className="p-1"> 
                        {previousMonthData.pv > currentMonthData.pv ? `-${absPercentageChange}` : `+${absPercentageChange}`} </span>
                        </span>
                    </p>

                    <p className="text-xs py-1 flex items-center gap-2">
                        <img className="m-1 p-1" src={LineImage} alt="Line" />
                        {`${previousMonthData.date} `}
                        <span className="p-1 font-semibold">{previousMonthData.pv} 
                        </span>
                    </p>
    
                   
                </div>
            );
        }
    }

    return null;
};

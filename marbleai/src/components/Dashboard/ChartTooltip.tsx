import Line from "../../assets/Line 3.png"
export const ChartTooltip = ({
    active,
    payload,
    coordinate,
    data 
}: any) => {
    if (active && payload && payload.length) {
        const tooltipStyle = {
            left: coordinate.x, 
            top: coordinate.y, 
        };

        const currentMonthData = payload[0].payload;
        const lastIndex = data.length - 1;
        const previousMonthData = data[lastIndex - 1];

        const percentageChange: number = ((currentMonthData.pv - previousMonthData.pv) / previousMonthData.pv) * 100;
        const absPercentageChange = Math.abs(Math.round(percentageChange));

        return (
            <div
                className="p-1 py-2 px-4 flex flex-col shadow-lg bg-white justify-center items-start border rounded-lg"
                style={tooltipStyle}
            >
                <p className="text-xs py-1 flex items-center gap-2">
                     <img className="m-1 p-1" src={Line}/>
                    {`${previousMonthData.date} `}
                    <span className="p-1 font-semibold">{previousMonthData.pv} 
                    <span className="p-1"> {previousMonthData.pv > currentMonthData.pv ?  +absPercentageChange  : -absPercentageChange } </span>
                    </span>
                </p>
                <p className="text-xs py-1 flex items-center gap-2">
                <img className="m-1 p-1" src={Line}/>
                    {`${currentMonthData.date} `}
                    <span className="p-1 font-semibold">{currentMonthData.pv}</span>
                </p>
            

            </div>
        );
    }

    return null;
};

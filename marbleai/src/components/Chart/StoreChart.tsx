import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { data } from "../../context/index";
import { ChartTooltip } from "../Dashboard/ChartTooltip";
import { CustomYAxisTick } from "../Dashboard/CustomYAxisTick";
import { CustomLegend } from "../Dashboard/CutstomLegend";

const StoreChart: React.FC = () => {
  type DataItem = {
    date: string;
    uv: number;
    pv: number;
    amt: number;
  };

  const Data: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aDate = new Date(`${aYear} ${aMonth}`);
    const bDate = new Date(`${bYear} ${bMonth}`);
    return aDate.getTime() - bDate.getTime();
  });


  return (
    <ResponsiveContainer height={400}>
      <LineChart
        height={400}
        data={Data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
         <Brush/>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="date"
          tickCount={Data?.length ?? 0}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
        />
        <YAxis
         tick={<CustomYAxisTick />}
          interval="preserveStartEnd"
        />
        <Tooltip
            content={<ChartTooltip  data={Data} colors={{
              stroke: "rgb(54, 162, 235)",
              fill: "rgba(54, 162, 235, 0.2)",
          }} />}
          wrapperStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            border: "0 solid #000",
            borderRadius: "10px",
          }}
        />

          <Legend content={<CustomLegend data={Data} />} />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 2 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          strokeDasharray="3 4 5 2"
        />
        {/* <Brush/> */}
      </LineChart>
     
    </ResponsiveContainer>
  );
};

export default StoreChart;

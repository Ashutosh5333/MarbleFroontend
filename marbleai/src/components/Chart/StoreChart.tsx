import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { data } from "../../context/index";
import { ChartTooltip } from "../Dashboard/ChartTooltip";
import { CustomYAxisTick } from "../Dashboard/CustomYAxisTick";
import { CustomLegend } from "../Dashboard/CutstomLegend";
import CustomDatePicker from '../Dashboard/CustomDatePicker';
import { DataItem } from '../../interface';

const StoreChart: React.FC = () => {
  const initialData: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aDate = new Date(`${aYear} ${aMonth}`);
    const bDate = new Date(`${bYear} ${bMonth}`);
    return aDate.getTime() - bDate.getTime();
  });
const [selectedData, setSelectedData] = useState<DataItem[]>(initialData);
  
   const handleDateRangeChange = (startDate: string, endDate: string) => {
    const filteredData = initialData.filter((item) => {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });
    setSelectedData(filteredData);
  };
  const defaultStartDate = initialData[0]?.date;
  const defaultEndDate = initialData[initialData.length - 1]?.date;

  return (
    <div>
     {/* <CustomDatePicker
        onDateRangeChange={handleDateRangeChange}
        defaultStartDate={defaultStartDate}
        defaultEndDate={defaultEndDate}
      /> */}

      <ResponsiveContainer height={400}>
        <LineChart
          height={400}
          data={selectedData}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 0" vertical={false} />
          <XAxis
            dataKey="date"
            tickCount={selectedData?.length ?? 0}
            tick={{
              stroke: "#676767",
              strokeWidth: 0.4,
              fontSize: ".9rem",
            }}
            tickLine={false}
            axisLine={false} 
          />
          <YAxis
            tick={<CustomYAxisTick />}
            interval="preserveStartEnd"
            tickLine={false}
            axisLine={false} 
            
          />
          <Tooltip
            content={<ChartTooltip data={selectedData} colors={{
              stroke: "rgb(54, 162, 235)",
              fill: "rgba(54, 162, 235, 0.2)",
            }} />}
            wrapperStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              border: "0 solid #000",
              borderRadius: "10px",
            }}
          />
          <Legend content={<CustomLegend data={selectedData} />} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#489AD2"
            strokeWidth={2} 
            dot={false}
          />
            <Line
            type="monotone"
            dataKey="uv"
            stroke="#6FC2F3"
            strokeDasharray="3 4 5 2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StoreChart;

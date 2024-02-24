
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data} from "../../context/index"

const StoreChart: React.FC  = () => {

      type DataItem = {
        name: string;
        uv: number;
        pv: number;
        amt: number;
      }
    
    const Data: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
        const [aMonth, aYear] = a.name.split(' ');
        const [bMonth, bYear] = b.name.split(' ');
        const aDate = new Date(`${aYear} ${aMonth}`);
        const bDate = new Date(`${bYear} ${bMonth}`);
        return aDate.getTime() - bDate.getTime();
      });

    
      
      

  return (
     <ResponsiveContainer   
     height={400}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" /></LineChart>
      </ResponsiveContainer>
  )
}

export default StoreChart
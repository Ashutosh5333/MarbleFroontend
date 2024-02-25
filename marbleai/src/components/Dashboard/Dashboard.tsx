import StoreChart from "../Chart/StoreChart"
import Head from "./Head"

  
 const Dashboard = () => {


   return (
     <div className=" shadow-lg rounded-xl bg-[#FFFFFF] mt-5
     px-4 py-4 w-[95%] m-auto  border-red-700">
      <Head/>
      <StoreChart  />

     </div>
   )
 }
 
 export default Dashboard
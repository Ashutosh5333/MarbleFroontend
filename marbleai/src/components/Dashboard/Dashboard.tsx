import { useState } from "react"
import StoreChart from "../Chart/StoreChart"
import Head from "./Head"


  
 const Dashboard = () => {
  const [ActiveStore,SetActive] = useState(true)

   return (
     <div className=" shadow-lg rounded-xl bg-[#FFFFFF] mt-5
     px-4 py-4 w-[95%] m-auto  border-red-700">
      <Head SetActive={SetActive} ActiveStore={ActiveStore} />
      {ActiveStore && <StoreChart />}

     </div>
   )
 }
 
 export default Dashboard
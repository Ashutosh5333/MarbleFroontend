import { useEffect, useState } from "react"
import StoreChart from "../Chart/StoreChart"
import Head from "./Head"
import Skeleton from "../Skelton/Skeleton"

  
 const Dashboard = () => {
  const [ActiveStore,SetActive] = useState(true)
  const [loading,SetLoading] = useState(false)


   useEffect(()=>{
         setTimeout(()=>{
              SetLoading(true)
         },1000)
   },[])

   return (
    <>
    <div className="py-2 bg-[#FFFFFF]">
      <h2 className="text-center py-2 pt-2 font-semibold font-serif text-lg sm:text-2xl"> OnLine Store Sessions </h2>
    {
      loading ?
      <div className=" shadow-lg rounded-2xl bg-[#FFFFFF] mt-5
      sm:px-2 md:px-4 lg:px-4 py-4 w-[100%] sm:w-[100%] lg:w-[95%] m-auto  border-red-700">
       <Head SetActive={SetActive} ActiveStore={ActiveStore} />
 
       {ActiveStore && <StoreChart />}
 
      </div>: <Skeleton/>

    }
    </div>
   
      
    </>
   )
 }
 
 export default Dashboard
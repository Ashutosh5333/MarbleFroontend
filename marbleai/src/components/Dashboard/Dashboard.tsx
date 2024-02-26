import { useEffect, useState } from "react"
import StoreChart from "../Chart/StoreChart"
import Head from "./Head"
import {data} from "../../context/index"
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
    {
      loading ?
      <div className=" shadow-lg rounded-xl bg-[#FFFFFF] mt-5
      px-4 py-4 w-[95%] m-auto  border-red-700">
       <Head SetActive={SetActive} ActiveStore={ActiveStore} />
 
       {ActiveStore && <StoreChart />}
 
      </div>: <Skeleton/>

    }
      
    </>
  
   )
 }
 
 export default Dashboard
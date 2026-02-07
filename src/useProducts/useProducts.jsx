import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"


//custom hook to fetch products data

export default function useProducts() {
    
      function getRecentProducts(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
    
    //using Tanstack query for builtin properties like isLoading,isError,error,data,isFetching
    
    let responceObject=useQuery({
      queryKey: ['recentProducts'],
      queryFn: getRecentProducts,
      // refetchInterval:2000,
      // refetchIntervalInBackground:true,
      // staleTime:0
      // retry:6,
      // retryDelay:5000
    
    })
    
  
    
  return responceObject
}
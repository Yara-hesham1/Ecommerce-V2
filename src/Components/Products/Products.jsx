import React, { useEffect, useState } from 'react'
import Style from "./Products.module.css"
import RecentProducts from '../RecentProducts/RecentProducts'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useProducts from '../../useProducts/useProducts'
import { ClimbingBoxLoader } from 'react-spinners'

export default function Products() {



let {data,isLoading,isError,error,isFetching}= useProducts()

   if(isLoading){
      return <div className='flex justify-center items-center h-screen'>
      <ClimbingBoxLoader color="#36d7b7" />
      
      </div>
    }   
    
    if(isError){
      return <h2>{error.message}</h2>
    }
    
  return <>
     <div className="row">
            {data?.data.data.map((product)=><div key={product._id} className='mb-4 w-1/6 px-2 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            <div  className="product py-4">
              <Link to={`/productdetails/${product._id}/${product.category.name}`}>
               <img className='w-full' src={product.imageCover} alt={product.title} />
               <span className='block font-light text-green-600 mt-2'>{product.category.name}</span>
              <h4 className='text-lg font-normal text-gray-800'>{product.title.split(' ').slice(0,2).join(' ')}</h4>    
              <div className="flex justify-between">
                    <span className='text-main font-bold'>{product.price} EGP</span>
                    <span className='text-yellow-400'><i className='fas fa-star'></i> {product.ratingsAverage}</span>
              </div>
              <button className='btn'>add to cart</button>
              </Link>
            </div>
            
            </div>
    
              )}
          </div>
    </>
}




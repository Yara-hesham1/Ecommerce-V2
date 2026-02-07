import React, { useContext, useEffect, useState } from 'react'
import Style from "./RecentProducts.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ClimbingBoxLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';


export default function RecentProducts() {

 let {addToCart}=useContext(CartContext)

 async function addProduct(productId){
  let response= await addToCart(productId)
  if(response.data.status==='success'){
    console.log("Added");
    
    toast.success('Product added to cart successfully',{
      duration:1500,
      position:'top-right'
    });
    console.log('Product added to cart successfully');
    
  }else{
    toast.error('Failed to add product to cart',{
      duration:1500,
      position:'top-right'
    });
    console.log('Failed to add product to cart');
    
  }
   console.log(response);
    
 }

function getRecentProducts(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}

//using Tanstack query for builtin properties like isLoading,isError,error,data,isFetching

let {data,isLoading,isError,error,isFetching}=useQuery({
  queryKey: ['recentProducts'],
  queryFn: getRecentProducts,
  // refetchInterval:2000,
  // refetchIntervalInBackground:true,
  // staleTime:0
  // retry:6,
  // retryDelay:5000,
  // select: (data) => data.data.data    for filtering data

})

if(isLoading){
  return <div className='flex justify-center items-center h-screen'>
  <ClimbingBoxLoader color="#36d7b7" />
  
  </div>
}   

if(isError){
  return <h2>{error.message}</h2>
}
  // const [recentProducts, setRecentProducts] = useState([])



  // function getRecentProducts(){
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   .then(({data})=>{
  //     setRecentProducts(data.data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }


    // useEffect(() => {

    // getRecentProducts()
    // }, [])
    
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
          
          </Link>
          <button onClick={()=>addProduct(product._id)} className='btn'>add to cart</button>
        </div>
        
        </div>

          )}
      </div>
    </>
}




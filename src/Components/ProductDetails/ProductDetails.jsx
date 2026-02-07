import React, { useEffect, useState } from 'react'
import Style from "./ProductDetails.module.css"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";

export default function ProductDetails() {
  let {id,category}=useParams()
  console.log(id);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [ProductDetails, setProductDetails] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  function getProductDetails(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)  
    .then(({data})=>{
      setProductDetails(data.data);
      console.log(data);
    }
    )
    .catch((error)=>{
      console.log(error); 
    }
    )
  }

  function getRelatedProducts(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)  
    .then(({data})=>{     
     let allProducts=data.data;
    let related= allProducts.filter((product)=>product.category.name===category && product._id!==id)
      setRelatedProducts(related);
      console.log(allProducts);
      console.log(related);
      
    } )
    .catch((error)=>{
      console.log(error);
    }
    )}
    

    useEffect(() => {
    getProductDetails(id)
    getRelatedProducts(category)
    }, [id,category])
    
  return <>
  
    <div className="row">
        <div className='w-1/4 '>

        <Slider {...settings}>
            {ProductDetails?.images.map((src)=>
               <img className='w-full' src={src} alt={ProductDetails?.title} />
            )}
    </Slider>
           
        </div>
        <div className='w-3/4 px-4'>    
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>{ProductDetails?.title}</h2>
            <p className='text-gray-600 mb-4'>{ProductDetails?.description}</p>
            <span className='text-main font-bold text-2xl'>{ProductDetails?.price} EGP</span>
            <div className="flex items-center mt-2">
                <span className='text-yellow-400 text-lg'><i className='fas fa-star'></i> {ProductDetails?.ratingsAverage}</span>
                <span className='text-gray-600 ml-4'>({ProductDetails?.ratingsQuantity} reviews)</span>
            </div>
            <button className='btn mt-4'>add to cart</button> 
        </div>
    </div>

    <div className="row">
      {relatedProducts.map((product)=>
      <div key={product.id} className="w-1/6">
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



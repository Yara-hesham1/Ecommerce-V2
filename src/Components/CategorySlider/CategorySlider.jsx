import React, { useEffect, useState } from 'react'
import Style from "./CategorySlider.module.css"
import axios from 'axios'
import Slider from "react-slick";

export default function CategorySlider() {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000,
  };



  const [category, setCategory] = useState([])

   function getCategory(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then(({data})=>{
      setCategory(data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }



    useEffect(() => {

    getCategory()
    }, [])
    
  return <>
  <div className="py-3">
    <h3 className='font-light text-xl mb-1 p-2'>Shop Popular Categories</h3>
<Slider {...settings}>
            {category.map((cat)=><div key={cat._id}>
               <img className='cat-img w-full' src={cat.image} alt={cat.name} />
                <h3 className='mt-2'>{cat.name}</h3>
                
            </div>
               
            )}
    </Slider>
  </div>
    
    </>
}




import React, { useEffect, useState } from 'react'
import Style from "./MainSlider.module.css"
import mainSlider2 from "../../assets/images/grocery-banner.png"
import mainSlider3 from "../../assets/images/grocery-banner-2.jpeg"
import mainSlider from "../../assets/images/slider-image-3.jpeg"
import slide2 from "../../assets/images/slider-image-2.jpeg"
import slide1 from "../../assets/images/slider-image-1.jpeg"
import Slider from "react-slick";

export default function MainSlider() {
   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  autoplay:true,
  arrows:true,
    
  };


    const [first, setfirst] = useState(0)

    useEffect(() => {

    }, [])
    
  return <>
    <div className="row">
      <div className="w-3/4">
      <Slider {...settings}>
           <img className='w-full h-[400px]' src={mainSlider} alt="mainSlider" />
           <img src={mainSlider2} alt=""  className='w-full h-[400px]'/>
      <img src={mainSlider3} alt="" className='w-full h-[400px]' />
    </Slider>
        
      </div>
      <div className="w-1/4">
      <img src={slide2} alt=""  className='w-full h-[200px]'/>
      <img src={slide1} alt="" className='w-full h-[200px]' />
      
      </div>
    </div>
    </>
}




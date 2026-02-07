import React, { useContext, useEffect, useState } from 'react'
import Style from "./Home.module.css"
import { CounterContext } from '../../Context/CounterContext'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'


export default function Home() {
    
  let {counter,changeCounter} =useContext(CounterContext)
    
  return <>
  <MainSlider/>
  <CategorySlider/>
    <RecentProducts/>
    </>
}




import React, { useEffect, useState } from 'react'
import Style from "./Categories.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Categories() {


  const [Categories, setCategories] = useState([])

  function getCategories(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)  
    .then(({data})=>{  
      setCategories(data.data);
      console.log(data);
    }
    )
    .catch((error)=>{
      console.log(error);
    }
    )
  }

    

    useEffect(() => {

    getCategories()
    }, [])
    
  return <>
    {/* <h1>Categories</h1>
    <div className="row">
      {Categories.map((category)=><div key={category._id} className='mb-4 w-1/6 px-2 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
        <div  className="category py-4">
           <img className='w-full object-contain h-40 ' src={category.image} alt={category.name} />
          <h4 className='text-md font-normal text-gray-800 text-center mt-2'>{category.name}</h4>    
        </div>  
        </div>
          )}
      </div>     */}


   {/* <h1>Categories</h1>
<div className="row flex flex-wrap">
  {Categories.map((category) => (
    <div
      key={category._id}
      className="mb-4 w-1/6 px-2"
    >
      <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="category py-4 flex flex-col items-center">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src={category.image}
            alt={category.name}
          />
          <h4 className="text-md font-normal text-gray-800 text-center mt-2">
            {category.name}
          </h4>
        </div>
      </div>
    </div>
  ))}
</div> */}


<h1 className='mt-2 text-4xl font-bold items-center flex justify-center'>Categories</h1>
<div className="row flex flex-wrap">
  {Categories.map((category) => (
    <div
      key={category._id}
      className="mb-4 w-1/6 px-2"
    >
      <Link to={`/productcategory/${category._id}/${category.name}`}>
      {/* Card wrapper with hover */}
      <div className="h-full border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out">
        <div className="category py-4 flex flex-col items-center">
          <img
            className="w-full h-40 object-contain rounded-t-lg bg-gray-50"
            src={category.image}
            alt={category.name}
          />
          <h4 className="text-md font-normal text-gray-800 text-center mt-2">
            {category.name}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  ))}
</div>


    </>
}




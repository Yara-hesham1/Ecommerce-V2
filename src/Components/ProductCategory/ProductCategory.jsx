import React, { useEffect, useState } from 'react'
import Style from "./ProductCategory.module.css"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function ProductCategory() {

   let {id,category}=useParams()
    console.log(id);

  const [relatedProducts, setRelatedProducts] = useState([])

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
 getRelatedProducts(category)
    
    }, [])
    
  return <>
    
    <div className="row">
        <h1 className="text-xl font-bold mb-4">Products in {category}</h1>  
        <div className="row flex flex-wrap">
          {relatedProducts.map((product)=>
          <div key={product._id} className="w-1/6">
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
          </div>
    </>
}



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// export default function ProductCategory() {
//   const { slug } = useParams()
//   const [products, setProducts] = useState([])
//   const [relatedProducts, setRelatedProducts] = useState([])

//   // Step 1: get category id by slug
//   async function getCategoryProducts(slug) {
//     try {
//       // Fetch category by slug
//       let { data: catData } = await axios.get(
//         `https://ecommerce.routemisr.com/api/v1/categories`
//       )
      
//       // Find the category object by slug
//       const category = catData.data.find(c => c.slug === slug)
//       if (!category) return

//       // Step 2: fetch products in that category by id
//       let { data: prodData } = await axios.get(
//         `https://ecommerce.routemisr.com/api/v1/products?category[in]=${category._id}`
//       )

//       setProducts(prodData.data)
//       console.log(prodData.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     if (slug) getCategoryProducts(slug)
//   }, [slug])

//   return (
//     <>
//       <h1 className="text-xl font-bold mb-4">Products in {slug}</h1>
//       <div className="row flex flex-wrap">
//         {products.map(product => (
//           <div
//             key={product._id}
//             className="mb-4 w-1/6 px-2 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <div className="category py-4 flex flex-col items-center">
//               <img
//                 className="w-full object-contain h-40"
//                 src={product.imageCover}
//                 alt={product.title}
//               />
//               <h4 className="text-md font-normal text-gray-800 text-center mt-2">
//                 {product.title}
//               </h4>
//               <p className="text-sm text-gray-500 mt-1">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import NotFound from './Components/Notfound/Notfound'
import Register from './Components/Register/Register'
import Layout from './Components/Layout/Layout' 
import Login from './Components/Login/Login'

import UserContextProvider from './Context/UserContext'
import CounterContextProvider from './Context/CounterContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductCategory from './Components/ProductCategory/ProductCategory'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast';




let query=new QueryClient()

let router=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
     
  
  {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:"about",element:<ProtectedRoute><About/></ProtectedRoute>},
  {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"productcategory/:id/:category",element:<ProtectedRoute><ProductCategory/></ProtectedRoute>},
  {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
  {path:"productdetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
  {path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
  { path:"register",element:<Register/>},
  {path:"login",element:<Login/>},
  {path:"/checkout",element:<Checkout/>},
  {pat:"*",element:<NotFound/>}

 
  ]
  }

  

])





function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <CartContextProvider>
    <QueryClientProvider client={query}>
    <UserContextProvider>

   <CounterContextProvider>

<RouterProvider router={router}/>
<Toaster/>
<ReactQueryDevtools/>
    </CounterContextProvider>
    </UserContextProvider>
    </QueryClientProvider>
    </CartContextProvider>
 
   
    
    </>
  )
}

export default App

import React, { useContext, useEffect, useState } from 'react'
import Style from "./Navbar.module.css"
import logo from "../../assets/images/logo.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../../Context/CounterContext'
import { UserContext } from '../../Context/UserContext'



export default function Navbar() {
    const [first, setfirst] = useState(0)

    useEffect(() => {

    }, [])

    let navigate=useNavigate()

    let {counter , userName}=useContext(CounterContext)
    let {userLogin,setUserLogin}=useContext(UserContext)

    function logOut()
    {
      localStorage.removeItem('userToken')
      setUserLogin(null)
        navigate('/login')
    }
    
    
    
  return <>
    <nav className="bg-main-light static lg:fixed  top-0 left-0 right-0 z-50 shadow-md  px-4 sm:px-6 lg:px-8 items-center">
        <div className="container flex flex-col lg:flex-row justify-between items-center py-4 mx-auto ">
            <div className='flex flex-col lg:flex-row items-center'>
                <img src={logo}  width={120} alt="logo" /> 
                
            
            <ul className='flex flex-col lg:flex-row  list-none justify-around  m-0 items-center '>
               {
                userLogin!==null?<>
                
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="" >Home</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal ' ><NavLink to="about" >About</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="cart" >Cart</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="categories" >Categories</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="brands" >Brands</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="products" >Products</NavLink></li>
               
               </>:null
               }
               </ul>
            </div>


  <ul className='flex flex-col lg:flex-row  list-none justify-around m-0 items-center '>
{
    userLogin==null?<>
                   <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="login" >Login</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to="register" >Register</NavLink></li>
    </>:<li onClick={logOut} className='text-md mx-4 text-slate-900 font-normal cursor-pointer'><span  >Logout</span></li>
}
                <li className='flex items-center'>
                  <i className='fab mx-2 fa-facebook'></i>
                  <i className='fab mx-2 fa-twitter'></i>
                  <i className='fab mx-2 fa-instagram'></i>
                  <i className='fab mx-2 fa-youtube'></i>
                  <i className='fab mx-2 fa-tiktok'></i>
                </li>
            </ul>

            
            
        </div>

      
    </nav>
    </>
}




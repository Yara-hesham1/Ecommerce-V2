import React, { useContext, useEffect, useState } from 'react'
import Style from "./Register.module.css"
import {  useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserContext } from '../../Context/UserContext';



export default function Register() {

let {userLogin, setUserLogin}=useContext(UserContext)

let navigate=useNavigate()

const [apiError, setapiError] = useState('')
const [isloading, setIsloading] = useState(false)

 function handleRegister(values){
    setIsloading(true)
     axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    .then((apiResponse)=>{
      if(apiResponse?.data?.message==='success'){
        localStorage.setItem('userToken',apiResponse.data.token)
        setUserLogin(apiResponse.data.token)
        navigate('/login')
        setIsloading(false)
        console.log(apiResponse);
      }
      
    })
    .catch((apiResponse)=>{
       setIsloading(false)
      setapiError(apiResponse?.response?.data?.message)
      
      // console.log(apiResponse?.response?.data?.message)
    })
    console.log(values);
    console.log('register');

  }

let validation=Yup.object().shape({
  name:Yup.string().min(3,'name minlength is 3').max(10,'name maxlength is 10').required('name is required'),
  email:Yup.string().email('email is invalid').required('email is required'),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'phone must be valid egb number').required('phone is required'),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with uppercase').required('password is required'),
  rePassword:Yup.string().oneOf([Yup.ref("password")],'rePassword must matches password').required('rePassword is required'),
})



// async  function handleRegister(values){
//   setIsloading(true)
//      try {
//     // Send signup request
//     let { data } = await axios.post(
//       `https://ecommerce.routemisr.com/api/v1/auth/signup`,
//       values
//     );

//     console.log("Response:", data);

//     // Check backend response
//     if (data.message === "success") {
//        setIsloading(false)
//       navigate("/"); // redirect on success
//     }
//   } catch (err) {
//     // Handle API errors
//      setIsloading(false)
//     setIsloading(false)
//     setapiError( err.response?.data?.message || "Something went wrong")
//     // console.log("Error:", err.response?.data?.message || "Something went wrong");
//   }

//   console.log("Form values:", values);


//   }


  // function myValidation(value){
  //   let errors={};
  //   if(!value.name){ 
  //     errors.name="Name is required"
  //   }
  //   else if(!/^[A-Z][a-z]{3,5}$/.test(value.name)){
  //     errors.name="Name must start with capital letter and be 4-6 char"
  //   }
  //   if(!value.email){
  //     errors.email="Email is required"
  //   }
  //   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)){
  //     errors.email="Email must be valid"
  //   }
    
  //    return errors;


  // }

  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    validationSchema:validation,
    onSubmit:handleRegister
  })

    

    useEffect(() => {

    }, [])
    
  return <>
  <div className="py-6 max-w-xl mx-auto">
{apiError?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:null}

 <h1 className='text-3xl font-bold text-green-600 mb-6'>Register</h1>
    <form onSubmit={formik.handleSubmit} >
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name :</label>
  </div> 
  {formik.errors.name&&formik.touched.name?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.name}
</div>:null}

 <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email address :</label>
  </div> 
    {formik.errors.email&&formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone number :</label>
  </div> 
    {formik.errors.phone&&formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.phone}
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
  </div> 
   {formik.errors.password&&formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.password}
</div>:null}
  

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your rePassword :</label>
  </div>
   {formik.errors.rePassword&&formik.touched.rePassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.rePassword}
</div>:null} 

  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
   {isloading?<i className='fas fa-spinner fa-spin'></i>:'Submit'} 
   </button>
  </form>
  </div>
   
    </>
}




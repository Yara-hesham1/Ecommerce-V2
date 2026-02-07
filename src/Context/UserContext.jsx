import { createContext, useEffect, useState } from "react";



export let UserContext=createContext(0)


export default function UserContextProvider(props)
{

  // Check for user token in local storage to avoid refresh issues 
useEffect(() => {
  if(localStorage.getItem('userToken')!==null){
    setUserLogin(localStorage.getItem('userToken'))
  }

}, [])

    const [userLogin, setUserLogin] = useState(null)


    return <UserContext.Provider value={{userLogin, setUserLogin}}>

{props.children} //the whole app cause i wrapped the app with this provider in app.jsx
    </UserContext.Provider>
}
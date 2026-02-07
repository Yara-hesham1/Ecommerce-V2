import { createContext, useState } from "react";



export let CounterContext=createContext(0)


export default function CounterContextProvider(props)
{

    const [counter, setCounter] = useState(0)
    const [userName, setUserName] = useState('')


    function changeCounter(){
        setCounter(Math.random)
    }

    function addCounter(){
        setCounter(counter + 1)
    }

    function subtractCounter(){
        setCounter(counter - 1)
    }

    return <CounterContext.Provider value={{counter,userName,changeCounter,addCounter,subtractCounter,setUserName}}>

{props.children}
    </CounterContext.Provider>
}
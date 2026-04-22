import {useState} from "react"

function useCounter(initialValue){
    const [count,setCount]=useState(initialValue)
    
    const increment = () =>{
        setCount(count>=10?10:count+1)
    }
    const decrement = () =>{
        setCount(count<=0?0:count-1)
    }
    const reset = () =>{
        setCount(initialValue)
    }

    return {count, increament, decreament, reset}
}
export default useCounter
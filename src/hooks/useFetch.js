import { useState, useEffect } from "react";
function useFetch(url){
    const[data,setData]=useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            setIsLoading(true)
            try{
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }catch(err){
                setError(err.message)
            }
            setIsLoading(false)
        }
        fetchData()

    },[url])
    return {data,isLoading,error}
}

export default useFetch
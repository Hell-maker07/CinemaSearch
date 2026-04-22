import { useState,useCallback } from "react";

function useMovies(){
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    
    const searchMovies = useCallback(async(query)=>{
        try{
        setLoading(true)
        setError(null)
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=d2166e7a`)
        const data = await response.json()
        
        if(data.Response==="False"){
            setError(data.Error)
            setMovies([]) 
            return
        }
        setMovies(data.Search)
        }catch(err){
            setError("Something Went Wrong! Try Again")
        }finally{
            setLoading(false)
        }

    },[])
    return {movies,loading,error,searchMovies}

    
}

export default useMovies
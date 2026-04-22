import useMovies from "../hooks/useMovies";
import { useRef,useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Search(){
    const [query,setQuery]=useState("");
    const inputRef=useRef(null)

    const {movies,loading,error,searchMovies}=useMovies()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const handleSearch = () => {
        if(query.trim()==="") return
        searchMovies(query)
    }
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl mb-2 font-bold">Search Movies</h1>
            <div className="flex gap-4 mb-6">
                <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleSearch()}
                placeholder="Search for a movie..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"/>

                <button onClick={handleSearch} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
                    Search
                </button>

                {loading && <p className="text-center text-yellow-400">Loading...</p>}
                {error && <p className="text-center text-red-400">{error}</p>}

                
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.map(movie=>(
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    ))}
            </div>
        </div>
    )
}

export default Search

